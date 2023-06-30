const AppleMusicEmbed = () => {
  return (
    <iframe
      title="apple-music-embedded"
      height={"470px"}
      style={{
        borderRadius: "26px",
        padding: "1vh",
      }}
      src={
        "https://embed.music.apple.com/us/album/blink-of-an-eye/1690896426"
      }
      loading="lazy"
      sandbox={
        "allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
      }
      allow={"autoplay *; encrypted-media *; fullscreen *; clipboard-write"}
    />
  );
}

export default AppleMusicEmbed;
