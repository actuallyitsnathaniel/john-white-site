// Icons
import appleMusic from "../../../assets/images/icons/music-platforms/apple-music.svg";
import spotify from "../../../assets/images/icons/music-platforms/spotify.svg";
import soundcloud from "../../../assets/images/icons/music-platforms/soundcloud.svg"
import youtube from "../../../assets/images/icons/music-platforms/youtube.svg";

const MusicPlatformLinks = (props) => {
  return (
    <div
      className={`absolute grid grid-cols-2 
      ${props.className} h-[305px]  ${
        props.width ? props.width : "w-[305px]"
      } justify-items-center items-center -translate-x-1 -translate-y-1 p-4
      `}
    >
      <a href={props.spotifyLink} rel="noopener noreferrer" target="_blank">
        <img
          className="transition-all duration-75 h-[75px] hover:scale-110"
          alt="music-link"
          src={spotify}
        />
      </a>

      <a href={props.appleMusicLink} rel="noopener noreferrer" target="_blank">
        <img
          className="transition-all duration-75 h-[75px] hover:scale-110"
          alt="music-link"
          src={appleMusic}
        />
      </a>

      <a href={props.soundcloudLink} rel="noopener noreferrer" target="_blank">
        <img
          className="transition-all duration-75 h-[75px] hover:scale-110"
          alt="music-link"
          src={soundcloud}
        />
      </a>

      <a href={props.youtubeLink} rel="noopener noreferrer" target="_blank">
        <img
          className="transition-all duration-75 h-[75px] hover:scale-110"
          alt="music-link"
          src={youtube}
        />
      </a>
    </div>
  );
};

export default MusicPlatformLinks;
