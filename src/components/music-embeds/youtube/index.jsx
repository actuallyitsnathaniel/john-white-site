export default function YoutubePlayistEmbed() {
  return (
    <iframe
      height="470px"
      title="youtube-playlist-embedded"
      loading="lazy"
      style={{
        borderRadius: "26px",
        padding: "1vh",
      }}
      src={
        "https://www.youtube.com/embed/videoseries?si=goNU39Ryjx7dIqOT&amp;list=PLTfQR4eBUNuoWBp5h4Z_u7clPMIoQXn9y"
      }
      allow={
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      }
    />
  );
}
