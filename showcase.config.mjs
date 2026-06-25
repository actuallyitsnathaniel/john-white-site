// showcase.config.mjs — the ONLY file you edit to retarget a different site.
// John White music site (Vite + react-router, port 3000, bg <video>).
export default {
  base: "http://localhost:3000",
  showVideo: true, // fixed z-[-1] bg <video> in video-background/index.tsx
  // Home is the engine's initial load+hold (--dwell, set to 1500 in the npm script),
  // so there's no `visit: "/"` beat — that would render home a second time.
  // Trimmed for a <=9.9MB GIF: the 4.5s scrollPage was the biggest frame
  // contributor (continuous motion); dropped it and tightened dwells. Re-add a
  // short scrollPage if exporting MP4 (CRF makes motion cheap there).
  beats: [
    { clickNav: "about", dwell: 1200 },            // rendered nav link (lowercase)
    { clickNav: "music", dwell: 1200 },            // nav link; lazy route + API discs
    { hover: "[role='button'][aria-label^='Show music platforms']", dwell: 1500 },
                                                   // HOVER a disc to reveal its platform links (hover-driven)
    { openClose: "button:has-text('albums')", back: false, dwell: 1200 },
                                                   // move to the albums tab (mouse leaves disc -> panel closes); end
  ],
};
