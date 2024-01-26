import JohnWhiteVideoMP4 from "../../assets/videos/john-white-bg.mp4";
import JohnWhiteVideoWEBM from "../../assets/videos/john-white-bg.webm";

const VideoBackground = () => {
  return (
    <video
      height={"110%"}
      width={"auto"}
      id="video"
      rel="preload"
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      className="brightness-50 blur saturate-0 min-w-max max-w-0 w-full h-full object-fill scale-110 fixed z-[-1] bg-black overflow-clip md:overflow-hidden flex md:align-middle md:content-center"
    >
      <source src={JohnWhiteVideoMP4} type="video/MP4" />
      <source src={JohnWhiteVideoWEBM} type="video/webm" />
    </video>
  );
};

export default VideoBackground;
