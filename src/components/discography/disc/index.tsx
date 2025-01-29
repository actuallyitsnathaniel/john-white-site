import { useState } from "react";
import MusicPlatformLinks from "./platform-links";

type DiscType = {
  className?: string;
  appleMusicLink?: string;
  id: number;
  spotifyLink?: string;
  soundcloudLink?: string;
  tidalLink?: string;
  youtubeLink?: string;
  webLink?: string;
  releaseDate: string;
  releaseType: "single" | "album" | "ep" | "appearance";
  artwork?: string;
  title?: string;
};

const Disc = ({
  className,
  id,
  appleMusicLink,
  spotifyLink,
  soundcloudLink,
  tidalLink,
  youtubeLink,
  releaseType,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  releaseDate,
  webLink,
  artwork,
  title,
}: DiscType) => {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={`${className} transition-scale duration-100 text-8xl md:hover:scale-110 group p-3`}
      id={`disc-${id}`}
    >
      <div
        className={"relative h-72 w-72 mx-auto"}
        onMouseLeave={() => {
          setFocused(false);
        }}
        onMouseEnter={() => setFocused(true)}
        onClick={() => {
          setFocused(!focused);
        }}
      >
        <MusicPlatformLinks
          className={`transition-all origin-content bg-black
          ${
            focused
              ? "bg-opacity-50 backdrop-blur-md opacity-100 visible"
              : "invisible opacity-0 bg-opacity-0 backdrop-blur-none"
          }`}
          {...{
            appleMusicLink,
            spotifyLink,
            soundcloudLink,
            tidalLink,
            youtubeLink,
            webLink,
            releaseType,
          }}
        />
        <img
          height={"320px"}
          width={"320px"}
          src={artwork || ""}
          alt={title}
          loading="eager"
        />
      </div>
      <div className="flex flex-row w-80 flex-wrap text-center justify-center transition-scale duration-100 origin-top text-lg md:invisible md:group-hover:visible md:scale-0 md:group-hover:scale-90">
        {`${title}${
          releaseType !== "appearance" ? " - " + releaseType : ""
        }`.toLowerCase()}
      </div>
    </div>
  );
};

export default Disc;
