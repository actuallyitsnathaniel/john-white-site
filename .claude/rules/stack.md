# Stack Facts & Gotchas

Verified facts about this project. Update this file when new gotchas are discovered.

## React & Error Handling
- **React 19 + StrictMode** — effects run twice in dev; cleanup must be correct
- **ErrorBoundary** at root uses `fallback={<Loading />}` — a thrown error during render shows the "Loading..." spinner forever, not an error message. If the app appears stuck loading, suspect a render-time throw first.
- Routes are lazy-loaded via `React.lazy` — a module-level throw in any route file will cause Suspense to show `<Loading />` indefinitely

## Motion / Animation
- Import from `motion/react`, not `framer-motion` — e.g. `import { motion } from "motion/react"`
- `framer-motion` appears in `vite.config.ts` optimizeDeps but the source uses `motion`

## Tailwind CSS
- Version 4 — CSS-first config, not `tailwind.config.js` class scanning
- Custom animations defined in `tailwind.config.js`: `grain`, `scratch`, `innerScratch`, `bounce-x`, `appear`

## @chenglou/pretext
- `prepare(text, font)` → returns `PreparedText` — use with `layout()`
- `prepareWithSegments(text, font)` → returns `PreparedTextWithSegments` — use with `layoutWithLines()`, `walkLineRanges()`, `layoutNextLine()`
- **These are not interchangeable.** Passing `PreparedText` to `layoutWithLines()` throws at runtime (TypeScript catches it but Vite build does not fail on TS errors)
- **`prepare()` and `prepareWithSegments()` throw if no canvas context exists** — never call them synchronously during render, at module scope, or in a server context. They must run inside `useEffect` or after canvas mount.
- System-ui font is unreliable on macOS — use named fonts (Lusitana, Inter, etc.)

## @tanstack/react-virtual
- `useVirtualizer` requires the scroll container to have a **concrete pixel height**
- `height: "100%"` will silently resolve to 0 if any ancestor uses `min-h-screen` instead of `h-screen` — virtualizer will render 0 items
- Use `height: "calc(100dvh - Npx)"` or a fixed px value directly on the scroll container

## Data & API
- API base URL: `https://api.johnwhitesmusic.com` via env var `VITE_RAILWAY_URL`
- Music data: `GET /api/music?populate=discography.CoverArt` — returns `{ data: { discography: [...] } }`
- Scalar fields (Title, Lyrics, etc.) come through automatically with populate; only relations need explicit populate
- IndexedDB cache: db name `john-white-music-cache`, stores `music-data` (30-min TTL) and `cover-art`
- Cache utility: `src/util/indexedDBCache.ts` — exported as `musicCache`

## Build & Env
- `npm run build` — Vite build to `build/` dir
- `npm run dev` — dev server default port 3000
- `npm run lint` — ESLint on `.ts,.tsx`
- **`npm run build` succeeds even with TypeScript errors** — always run `npx tsc --noEmit` separately
