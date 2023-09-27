import React from 'react';

export default function SpotifyEmbed() {
  // TODO: migrate embed to strapi, or at least just the url
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
        "https://open.spotify.com/embed/album/6ie2fGRbDUcfIpYIVUEfxf?utm_source=generator"
      }
      allow={
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      }
    />
  );
}
