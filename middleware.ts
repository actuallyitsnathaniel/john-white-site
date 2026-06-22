// Gate page navigations on non-production deploys behind a single shared
// password. Password lives in PREVIEW_PASSWORD env var (Preview scope), never
// in git. Auth state is a cookie, so there's no username field and no
// re-prompt on navigation (desktop or mobile).
//
// Let static assets, Vite dev paths, and HMR through.
export const config = {
  matcher: "/((?!assets|@vite|@react-refresh|src/|node_modules|favicon|.*\\.[a-z]+$).*)",
};

const COOKIE = "preview_auth";

export default async function middleware(request: Request) {
  if (process.env.VERCEL_ENV === "production") return;

  const password = process.env.PREVIEW_PASSWORD;
  if (!password) return; // no password configured -> don't lock anyone out

  const token = await sign(password);

  // Already authenticated?
  const cookies = request.headers.get("cookie") ?? "";
  if (cookies.split(/;\s*/).includes(`${COOKIE}=${token}`)) return;

  // Login submission. GET with ?password=... (vercel dev can't read POST bodies
  // in middleware; query params work in both dev and production). The param is
  // present only on the submit request, then stripped by the redirect to "/".
  const url = new URL(request.url);
  const submitted = url.searchParams.get("password");
  if (submitted !== null) {
    if (submitted === password) {
      // Secure flag everywhere except plain-http localhost (so dev cookies stick)
      const secure = url.protocol === "https:" ? " Secure;" : "";
      const cookie = `${COOKIE}=${token}; Path=/; HttpOnly;${secure} SameSite=Lax`;
      // Set the cookie and reload via a tiny HTML page rather than a 303.
      // (vercel dev rewrites Location to its internal upstream host, which would
      // bounce the browser to a dead port; a client-side replace avoids that.)
      // ponytail: session cookie (no Max-Age) -> clears when browser closes
      return new Response(
        `<!doctype html><meta http-equiv="refresh" content="0;url=/"><script>location.replace("/")</script>`,
        { status: 200, headers: { "Content-Type": "text/html; charset=utf-8", "Set-Cookie": cookie } },
      );
    }
    return loginPage("Wrong password.");
  }

  return loginPage();
}

// Derive an opaque cookie value from the password so the raw password is never
// stored in the cookie. ponytail: not a real signed JWT — single shared secret,
// no per-user claims to protect.
async function sign(password: string): Promise<string> {
  const data = new TextEncoder().encode(`preview:${password}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function loginPage(error = ""): Response {
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Preview access</title>
<style>
  body{margin:0;height:100dvh;display:grid;place-items:center;background:#000;color:#fff;
    font-family:Lusitana,Georgia,serif}
  form{display:flex;flex-direction:column;gap:1rem;width:min(90vw,320px)}
  input{padding:.85rem 1rem;font-size:1rem;border:1px solid #555;border-radius:8px;
    background:#111;color:#fff}
  button{padding:.85rem 1rem;font-size:1rem;border:0;border-radius:8px;
    background:#bb6b01;color:#fff;cursor:pointer}
  .err{color:#ff8080;font-size:.9rem;min-height:1.1em;text-align:center}
  h1{font-size:1.1rem;font-weight:400;text-align:center;opacity:.85}
</style></head>
<body>
  <form method="GET" autocomplete="off">
    <h1>This preview is password protected</h1>
    <input type="password" name="password" placeholder="Password" autofocus required>
    <div class="err">${error}</div>
    <button type="submit">Enter</button>
  </form>
</body></html>`;
  return new Response(html, {
    status: error ? 401 : 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
