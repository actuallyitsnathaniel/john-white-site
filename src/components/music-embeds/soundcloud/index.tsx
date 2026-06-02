interface SoundcloudEmbedProps {
  soundcloudUrl?: string;
}

export default function SoundcloudEmbed({ soundcloudUrl }: SoundcloudEmbedProps) {
  if (!soundcloudUrl) return null;

  return (
    <iframe
      className="h-104.5 sm:h-117.5 w-72 max-w-full"
      title="soundcloud-embed"
      style={{ borderRadius: "26px", padding: "1vh" }}
      src={soundcloudUrl}
      loading="lazy"
      allow="autoplay; encrypted-media"
      sandbox="allow-same-origin allow-scripts allow-popups"
    />
  );
}
