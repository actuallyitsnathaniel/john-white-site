import React from "react";

import { getVideoBGs } from "../../api/getVideoData";

const VideoBackground = () => {
  const videos = getVideoBGs;

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
      <source src={videos.mp4} type="video/MP4" />
      <source src={videos.webm} type="video/webm" />
    </video>
  );
};

export default VideoBackground;
