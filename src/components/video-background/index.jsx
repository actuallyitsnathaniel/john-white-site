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
      className="brightness-50 md:translate-x-14 blur saturate-0 w-full h-full object-cover scale-[120%] fixed z-[-1] bg-black overflow-clip md:overflow-hidden flex md:align-middle md:content-center"
    >
      <source src={JohnWhiteVideoMP4} type="video/MP4" />
      <source src={JohnWhiteVideoWEBM} type="video/webm" />
    </video>
  );
};

export default VideoBackground;
