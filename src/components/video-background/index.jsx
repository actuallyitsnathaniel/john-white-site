import JohnWhite42VideoMP4 from "../../assets/videos/john-white-42-bg.mp4";

const VideoBackground = () => {
  return (
    <video
      height={"100%"}
      width={"auto"}
      id="video"
      // rel="preload"
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      className="brightness-[25%] blur saturate-100 w-full h-full object-cover scale-[100%] fixed z-[-1] bg-black overflow-clip md:overflow-hidden flex md:align-middle md:content-center"
    >
      <source src={JohnWhite42VideoMP4} type="video/MP4" />
    </video>
  );
};

export default VideoBackground;
