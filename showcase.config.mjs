// showcase.config.mjs — the ONLY file you edit to retarget a different site.
// John White music site (Vite + react-router, port 3000, bg <video>).
export default {
  base: "http://localhost:3000",
  showVideo: true, // fixed z-[-1] bg <video> in video-background/index.tsx
  // Home is the engine's initial load+hold (--dwell, set to 1500 in the npm script),
  // so there's no `visit: "/"` beat — that would render home a second time.
  beats: [
    { clickNav: "about", dwell: 2500 },            // rendered nav link (lowercase)
    { scrollPage: 4500 },                          // long about page, top -> bottom
    { clickNav: "music", dwell: 2500 },            // nav link; lazy route + API discs
    { hover: "[role='button'][aria-label^='Show music platforms']", dwell: 3000 },
                                                   // HOVER a disc to reveal its platform links (hover-driven)
    { openClose: "button:has-text('albums')", back: false, dwell: 2500 },
                                                   // move to the albums tab (mouse leaves disc -> panel closes); end
  ],
};
