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
      className="video animate-appear"
    >
      <source src={JohnWhiteVideoMP4} type="video/MP4" />
      <source src={JohnWhiteVideoWEBM} type="video/webm" />
    </video>
  );
};

export default VideoBackground;
