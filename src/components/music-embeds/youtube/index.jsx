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
        "https://www.youtube.com/embed/videoseries?list=PLTfQR4eBUNuqxf7aJrCKtXmy1gCG25Tje"
      }
      allow={
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      }
    />
  );
}
