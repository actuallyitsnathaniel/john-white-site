import { useLocation } from "react-router-dom";

import InstagramLogo from "./instagram-link";
import GmailLogo from "./gmail-link";
import SpotifyLink from "./spotify-link";
import AppleMusic from "./apple-music-link";
import YoutubeLogo from "./youtube-link";

export const SocialLinks = () => {
  const location = useLocation();
  // about & links render their own inline social row, so the footer's copy is
  // hidden there to avoid duplicates. music has no inline row — show it.
  const isHidden =
    (location.pathname.includes("links") ||
      location.pathname.includes("about")) &&
    "hidden";

  return (
    <div
      className={`${isHidden} flex flex-wrap justify-center md:justify-end [&_a]:p-1.5 [&_svg]:h-10 [&_svg]:w-10 [&_svg]:rounded-none!`}
    >
      <SpotifyLink />
      <AppleMusic />
      <YoutubeLogo />
      <InstagramLogo />
      <GmailLogo />
    </div>
  );
};
