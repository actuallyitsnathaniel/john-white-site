import { PropTypes } from "prop-types";
// Icons
import appleMusic from "/src/assets/images/icons/music-platforms/apple-music.svg";
import spotify from "/src/assets/images/icons/music-platforms/spotify.svg";
import soundcloud from "/src/assets/images/icons/music-platforms/soundcloud.svg";
import youtube from "/src/assets/images/icons/music-platforms/youtube.svg";
import tidal from "/src/assets/images/icons/music-platforms/tidal.svg";
import hyperlinkIcon from "/src/assets/images/icons/shop-icon.svg";

const Link = ({ href, image }) => {
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

const MusicPlatformLinks = ({
  className,
  spotifyLink,
  appleMusicLink,
  soundcloudLink,
  tidalLink,
  youtubeLink,
  webLink,
}) => {
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

Link.propTypes = {
  href: PropTypes.string,
  image: PropTypes.string,
};

MusicPlatformLinks.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  spotifyLink: PropTypes.string,
  appleMusicLink: PropTypes.string,
  soundcloudLink: PropTypes.string,
  tidalLink: PropTypes.string,
  webLink: PropTypes.string,
  youtubeLink: PropTypes.string,
};

export default MusicPlatformLinks;
