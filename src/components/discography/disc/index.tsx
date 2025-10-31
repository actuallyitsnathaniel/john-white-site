import { useState, useCallback, memo, useMemo } from "react";
import MusicPlatformLinks from "./platform-links";

interface DiscProps {
  className?: string;
  appleMusicLink?: string;
  id: number;
  spotifyLink?: string;
  soundcloudLink?: string;
  tidalLink?: string;
  youtubeLink?: string;
  webLink?: string;
  releaseDate?: string;
  releaseType: "single" | "album" | "ep" | "appearance";
  artwork?: string;
  title?: string;
}

const Disc = memo<DiscProps>(({
  className = "",
  id,
  appleMusicLink,
  spotifyLink,
  soundcloudLink,
  tidalLink,
  youtubeLink,
  releaseType,
  releaseDate: _releaseDate,
  webLink,
  artwork,
  title,
}) => {
  const [focused, setFocused] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setFocused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setFocused(false);
  }, []);

  const handleClick = useCallback(() => {
    setFocused(prev => !prev);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setFocused(prev => !prev);
    }
    if (e.key === 'Escape') {
      setFocused(false);
    }
  }, []);

  const altText = useMemo(() => 
    `${title || 'Release'} - ${releaseType} cover art`, 
    [title, releaseType]
  );

  const displayText = useMemo(() => 
    `${title}${releaseType !== "appearance" ? " - " + releaseType : ""}`.toLowerCase(),
    [title, releaseType]
  );

  return (
    <div
      className={`${className} transition-transform duration-100 text-8xl md:hover:scale-110 group p-3`}
      id={`disc-${id}-wrapper`}
    >
      <div
        id={`disc-${id}`}
        className="relative h-72 w-72 mx-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Show music platforms for ${title || 'release'}`}
        aria-expanded={focused}
      >
        <MusicPlatformLinks
          className={`transition-all duration-300 origin-center bg-black z-10 ${
            focused
              ? "bg-opacity-50 backdrop-blur-md opacity-100 visible"
              : "invisible opacity-0 bg-opacity-0 backdrop-blur-none"
          }`}
          title={title}
          releaseType={releaseType}
          appleMusicLink={appleMusicLink}
          spotifyLink={spotifyLink}
          soundcloudLink={soundcloudLink}
          tidalLink={tidalLink}
          youtubeLink={youtubeLink}
          webLink={webLink}
        />
        <img
          height={320}
          width={320}
          src={artwork || ""}
          alt={altText}
          loading="lazy"
          className="w-72 h-72 object-cover"
        />
      </div>
      <div className="flex flex-row w-80 flex-wrap text-center justify-center transition-transform duration-100 origin-top text-lg md:invisible md:group-hover:visible md:scale-0 md:group-hover:scale-90">
        {displayText}
      </div>
    </div>
  );
});

Disc.displayName = 'Disc';

export default Disc;
