import JohnWhiteVideo from '../../assets/videos/johnwhite-video-bg.mp4';

function VideoBackground() {
  return (
    <div className="video-wrapper">
      <video
        src={JohnWhiteVideo}
        id="video"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="video"
      />
    </div>
  );
}

export default VideoBackground;
