const SpotifyEmbed = () => {
  return (
    <iframe
      className="h-[418px] sm:h-[470px] md:h-[470px]"
      title="spotify-embedded"
      style={{
        borderRadius: "26px",
        padding: "1vh",
      }}
      src={
        "https://open.spotify.com/embed/album/6sQQYK5eWrPxxgCIvL5iVL?utm_source=generator"
      }
      allow={
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      }
    />
  );
};

export default SpotifyEmbed;
