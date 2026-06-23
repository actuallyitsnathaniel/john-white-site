// showcase.config.mjs — the ONLY file you edit to retarget a different site.
// John White music site (Vite + react-router, port 3000, bg <video>).
export default {
  base: "http://localhost:3000",
  showVideo: true, // fixed z-[-1] bg <video> in video-background/index.tsx
  beats: [
    { visit: "/", dwell: 3000 },                  // home — bg video on display
    { clickNav: "about" },                         // rendered nav link (lowercase)
    { scrollPage: 4500 },                          // long about page, top -> bottom
    { clickNav: "music" },                         // nav link; lazy route + API discs
    { openClose: "[role='button'][aria-label^='Show music platforms']", back: false },
                                                   // flip a Disc card to reveal links
    { visit: "/shows", waitText: "John White Shows" }, // not in nav -> visit; lazy route
  ],
};
