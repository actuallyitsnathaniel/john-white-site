import { memo, useMemo } from "react";

// Icons
import appleMusic from "/src/assets/images/icons/music-platforms/apple-music.svg";
import spotify from "/src/assets/images/icons/music-platforms/spotify.svg";
import soundcloud from "/src/assets/images/icons/music-platforms/soundcloud.svg";
import youtube from "/src/assets/images/icons/music-platforms/youtube.svg";
import tidal from "/src/assets/images/icons/music-platforms/tidal.svg";
import hyperlinkIcon from "/src/assets/images/icons/shop-icon.svg";

interface PlatformLinkProps {
  href: string;
  image: string;
  platformName: string;
  title?: string;
}

const PlatformLink = memo<PlatformLinkProps>(({ href, image, platformName, title }) => {
  const ariaLabel = useMemo(() => 
    `Listen to ${title || 'this release'} on ${platformName}`, 
    [title, platformName]
  );

  if (!href) return null;

  return (
    <a
      href={href}
      className="flex p-4 transition-transform duration-75 md:hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      rel="noopener noreferrer"
      target="_blank"
      aria-label={ariaLabel}
    >
      <img
        className="w-[75px] h-[75px]"
        height={75}
        width={75}
        alt={`${platformName} logo`}
        src={image}
      />
    </a>
  );
});

PlatformLink.displayName = 'PlatformLink';

interface MusicPlatformLinksProps {
  className: string;
  title?: string;
  releaseType?: string;
  spotifyLink?: string;
  appleMusicLink?: string;
  soundcloudLink?: string;
  tidalLink?: string;
  webLink?: string;
  youtubeLink?: string;
}

const MusicPlatformLinks = memo<MusicPlatformLinksProps>(({
  className,
  title,
  spotifyLink,
  appleMusicLink,
  soundcloudLink,
  tidalLink,
  youtubeLink,
  webLink,
}) => {
  return (
    <div
      className={`absolute flex flex-wrap justify-around ${className} h-72 w-72 items-center`}
      role="dialog"
      aria-label="Music platform links"
    >
      <PlatformLink href={spotifyLink || ""} image={spotify} platformName="Spotify" title={title} />
      <PlatformLink href={appleMusicLink || ""} image={appleMusic} platformName="Apple Music" title={title} />
      <PlatformLink href={soundcloudLink || ""} image={soundcloud} platformName="SoundCloud" title={title} />
      <PlatformLink href={tidalLink || ""} image={tidal} platformName="Tidal" title={title} />
      <PlatformLink href={youtubeLink || ""} image={youtube} platformName="YouTube" title={title} />
      <PlatformLink href={webLink || ""} image={hyperlinkIcon} platformName="Website" title={title} />
    </div>
  );
});

MusicPlatformLinks.displayName = 'MusicPlatformLinks';

export default MusicPlatformLinks;
