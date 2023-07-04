import React from "react";

import JohnWhiteVideo from "../../assets/videos/johnwhite-video-bg.mp4";

const VideoBackground = () => {
  return (
    <video
      src={JohnWhiteVideo}
      height={"110%"}
      width={"auto"}
      id="video"
      rel="preload"
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      className="video"
    />
  );
};

export default VideoBackground;
