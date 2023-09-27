import React from "react";

const AppleMusicEmbed = () => {
  // TODO: migrate embed to strapi, or at least just the url
  return (
    <iframe
      title="apple-music-embedded"
      height={"470px"}
      style={{
        borderRadius: "26px",
        padding: "1vh",
      }}
      src={
        "https://embed.music.apple.com/us/album/through-the-trees/1690890513"
      }
      loading="lazy"
      sandbox={
        "allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
      }
      allow={"autoplay *; encrypted-media *; fullscreen *; clipboard-write"}
    />
  );
};

export default AppleMusicEmbed;

