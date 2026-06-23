// scripts/showcase.mjs — site-agnostic showcase engine. Records a configured
// tour of a running site as a video (Playwright), then converts it with ffmpeg.
// DO NOT edit per-site — edit showcase.config.mjs instead. Requires a running
// server. Records a real video so the page is captured exactly as it renders.
import { parseArgs } from "node:util";
import { mkdir, rm, readdir, rename } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { chromium } from "playwright";

const { values: f } = parseArgs({
  options: {
    config: { type: "string", default: "showcase.config.mjs" },
    base: { type: "string" }, // overrides config.base
    viewport: { type: "string", default: "1280x800" },
    delay: { type: "string", default: "1500" }, // ms settle on first load
    dwell: { type: "string", default: "2500" }, // ms hold per beat
    out: { type: "string", default: "showcase" },
    gif: { type: "boolean", default: true },
    mp4: { type: "boolean", default: false },
    fps: { type: "string", default: "15" },
    scale: { type: "string", default: "960" }, // output width px
  },
});

const cfg = (await import(pathToFileURL(resolve(f.config)).href)).default;
const base = f.base ?? cfg.base ?? "http://localhost:3000";
const dwell = Number(f.dwell);
const [w, h] = f.viewport.split("x").map(Number);

await rm(f.out, { recursive: true, force: true });
await mkdir(f.out, { recursive: true });

// REAL Chrome channel (not bundled headless-shell) so <video> renders in the
// recording; autoplay flag so muted bg videos start without a gesture.
const browser = await chromium.launch({
  channel: "chrome",
  args: ["--autoplay-policy=no-user-gesture-required"],
});
const context = await browser.newContext({
  viewport: { width: w, height: h },
  recordVideo: { dir: f.out, size: { width: w, height: h } },
});
const page = await context.newPage();

// showVideo: clear the opaque body bg so a z-index:-1 background <video> shows
// through in capture (it keeps the site's own dimming). Re-applied after every
// navigation since a full route change drops injected styles. See step 5.
const revealBgVideo = () =>
  cfg.showVideo
    ? page.addStyleTag({ content: "html,body{background:transparent!important}" }).catch(() => {})
    : Promise.resolve();

await page.goto(new URL(cfg.startPath ?? "/", base).href, { waitUntil: "networkidle" });
await revealBgVideo();
await page.waitForTimeout(Number(f.delay));

// ─── generic beat runners (driven entirely by showcase.config.mjs) ───────────
const hold = (ms) => page.waitForTimeout(ms ?? dwell);

const clickNav = async (text) => {
  await page.getByRole("link", { name: text, exact: true }).first().click();
  await revealBgVideo();
};

const navTour = async () => {
  const links = await page.$$eval("nav a", (els) =>
    els
      .map((el) => ({ text: el.textContent.trim(), x: el.getBoundingClientRect().left }))
      .filter((l) => l.text)
      .sort((a, b) => a.x - b.x),
  );
  console.log("navTour:", links.map((l) => l.text).join(" -> "));
  for (const { text } of links) { await clickNav(text); await hold(); console.log("  clicked", text); }
};

const openClose = async (selector, { waitText, back = true } = {}) => {
  const startPath = new URL(page.url()).pathname;
  const el = page.locator(selector).first();
  await el.scrollIntoViewIfNeeded();
  await el.click();
  // wait for the target to commit + render before dwelling, else the recording
  // shows the pre-click page while a lazy chunk loads.
  if (waitText) await page.getByText(waitText).waitFor({ state: "visible" });
  await revealBgVideo();
  await hold();
  if (back) { await page.goBack(); await page.waitForURL((u) => u.pathname === startPath || u.hash); }
  await revealBgVideo();
};

const scrollPage = async (durationMs = 4000) => {
  await page.evaluate(async (d) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const start = performance.now();
    await new Promise((res) => {
      const tick = (now) => {
        const t = Math.min(1, (now - start) / d);
        window.scrollTo(0, max * t);
        t < 1 ? requestAnimationFrame(tick) : res();
      };
      requestAnimationFrame(tick);
    });
  }, durationMs);
};

// ─── run the configured beats ────────────────────────────────────────────────
await hold(); // dwell on the initial view
for (const beat of cfg.beats ?? []) {
  if (beat.visit !== undefined) {
    await page.goto(new URL(beat.visit, base).href, { waitUntil: "networkidle" });
    await revealBgVideo(); await hold(beat.dwell);
  } else if (beat.navTour) {
    await navTour();
  } else if (beat.clickNav !== undefined) {
    await clickNav(beat.clickNav); await hold(beat.dwell); console.log("clickNav", beat.clickNav);
  } else if (beat.openClose !== undefined) {
    await openClose(beat.openClose, { waitText: beat.waitText, back: beat.back });
    await hold(beat.dwell); console.log("openClose", beat.openClose);
  } else if (beat.scrollPage !== undefined) {
    await scrollPage(beat.scrollPage); await hold(beat.dwell); console.log("scrollPage", beat.scrollPage);
  } else {
    console.warn("unknown beat, skipped:", JSON.stringify(beat));
  }
}

// video is written on context close
await context.close();
await browser.close();

const webm = (await readdir(f.out)).find((n) => n.endsWith(".webm"));
if (!webm) throw new Error("no recording produced");
const src = `${f.out}/tour.webm`;
await rename(`${f.out}/${webm}`, src);

// --- ffmpeg conversion ---
const ff = (args, out) => {
  spawnSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...args], { stdio: "inherit" });
  if (!existsSync(out) || statSync(out).size === 0) throw new Error(`ffmpeg produced no ${out}`);
  const probe = spawnSync("ffmpeg", ["-v", "error", "-i", out, "-f", "null", "-"]);
  if (probe.status !== 0) throw new Error(`ffmpeg wrote an invalid ${out}`);
};
const scale = `scale=${f.scale}:-2:flags=lanczos`;

if (f.gif) {
  // split-graph palettegen/paletteuse in ONE pass = clean GIF colors, no 2-input
  // graph (which can trip an ffmpeg "Internal bug" on the threaded flush).
  ff(["-i", src, "-vf", `fps=${f.fps},${scale},split[a][b];[a]palettegen[p];[b][p]paletteuse`,
      `${f.out}/showcase.gif`], `${f.out}/showcase.gif`);
  console.log("wrote", `${f.out}/showcase.gif`);
}
if (f.mp4) {
  ff(["-i", src, "-vf", scale, "-c:v", "libx264", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
      `${f.out}/showcase.mp4`], `${f.out}/showcase.mp4`);
  console.log("wrote", `${f.out}/showcase.mp4`);
}

await rm(src, { force: true }); // drop the raw recording; keep only GIF/MP4
