import React from "react";

export default function SpotifyEmbed(props) {
  return (
    <iframe
      height="470px"
      title="spotify-embedded"
      loading="lazy"
      style={{
        borderRadius: "26px",
        padding: "1vh",
      }}
      src={props.SpotifyEmbedURL}
      allow={
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      }
    />
  );
}
