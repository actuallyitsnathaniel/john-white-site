// Icons
import appleMusic from "/src/assets/images/icons/music-platforms/apple-music.svg";
import spotify from "/src/assets/images/icons/music-platforms/spotify.svg";
import soundcloud from "/src/assets/images/icons/music-platforms/soundcloud.svg";
import youtube from "/src/assets/images/icons/music-platforms/youtube.svg";
import tidal from "/src/assets/images/icons/music-platforms/tidal.svg";
import hyperlinkIcon from "/src/assets/images/icons/shop-icon.svg";

const Link = ({ href, image }: { href: string, image: string }) => {
  return (
    <a
      href={href}
      className={`flex p-4 ${!href && "hidden"}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        className={"transition-all duration-75 md:hover:scale-110"}
        height={"75px"}
        width={"75px"}
        alt="music-link"
        src={image}
      />
    </a>
  );
};

type MusicPlatformLinksType = {
  className: string,
  width?: string,
  spotifyLink?: string,
  appleMusicLink?: string,
  soundcloudLink?: string,
  tidalLink?: string,
  webLink?: string,
  youtubeLink?: string,
};

const MusicPlatformLinks = ({
  className,
  spotifyLink,
  appleMusicLink,
  soundcloudLink,
  tidalLink,
  youtubeLink,
  webLink,
}: MusicPlatformLinksType) => {
  return (
    <div
      className={`absolute flex flex-wrap justify-around
      ${className} h-72 w-72 items-center
      `}
    >
      {spotifyLink && <Link href={spotifyLink} image={spotify} />}
      {appleMusicLink && <Link href={appleMusicLink} image={appleMusic} />}
      {soundcloudLink && <Link href={soundcloudLink} image={soundcloud} />}
      {tidalLink && <Link href={tidalLink} image={tidal} />}
      {youtubeLink && <Link href={youtubeLink} image={youtube} />}
      {webLink && <Link href={webLink} image={hyperlinkIcon} />}
    </div>
  );
};

export default MusicPlatformLinks;
