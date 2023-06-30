import React from 'react';

export default function SpotifyEmbed() {
  return (
    <iframe
      height="470px"
      title="spotify-embedded"
      loading="lazy"
      style={{
        borderRadius: "26px",
        padding: "1vh",
      }}
      src={
        "https://open.spotify.com/embed/album/32wHTMdUrD7a0aqko0xIqX?utm_source=generator"
      }
      allow={
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      }
    />
  );
}
