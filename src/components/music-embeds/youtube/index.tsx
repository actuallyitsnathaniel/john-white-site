interface YoutubeEmbedProps {
  youtubeUrl?: string;
}

export default function YoutubePlayistEmbed({ youtubeUrl }: YoutubeEmbedProps) {
  if (!youtubeUrl) return null;

  return (
    <iframe
      height="470px"
      title="youtube-playlist-embedded"
      loading="lazy"
      style={{
        borderRadius: "26px",
        padding: "1vh",
      }}
      src={youtubeUrl}
      allow={
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      }
    />
  );
}
