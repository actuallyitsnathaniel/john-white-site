import InstagramLogo from "./instagram-link";
import GmailLogo from "./gmail-link";
import SpotifyLink from "./spotify-link";
import AppleMusic from "./apple-music-link";
import YoutubeLogo from "./youtube-link";

export const SocialLinks = () => {
  return (
    <div
        className={`${document.URL.includes("links") && "hidden"}
          ${document.URL.includes("about") && "hidden"}`}
      >
      <div className={"flex justify-center mb-2.5 transition-translate duration-100 hover:delay-150 md:fixed md:bottom-0 bottom-auto md:left-0 left-auto lg:justify-start md:pt-4 sm:h-full md:h-auto translate-y-2 lg:translate-y-4 lg:hover:translate-y-1"}>
        <SpotifyLink />
        <AppleMusic />
        <YoutubeLogo />
        <InstagramLogo />
        <GmailLogo />
      </div>
    </div>
  );
}
