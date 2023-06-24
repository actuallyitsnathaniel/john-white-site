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
        "https://embed.music.apple.com/us/album/fake-smiles-ep/1678254661"
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