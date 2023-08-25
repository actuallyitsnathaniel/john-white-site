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
        "https://open.spotify.com/embed/album/4bE4AmNHUD12n12LeCwNrI?utm_source=generator"
      }
      allow={
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      }
    />
  );
}
