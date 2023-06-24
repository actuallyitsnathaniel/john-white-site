export default function SpotifyEmbed() {
  return (
    <iframe
      height="470px]"
      title="spotify-embedded"
      loading="lazy"
      style={{
        borderRadius: "26px",
        padding: "1vh",
      }}
      src={
        "https://open.spotify.com/embed/album/5xG9WKhRF1ve48GMnDdInB?utm_source=generator"
      }
      allow={
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      }
    />
  );
}
