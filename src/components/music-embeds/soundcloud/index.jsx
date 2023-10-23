import React from "react";

export default function SoundcloudEmbed(props) {
  return (
    <iframe
      height="470px"
      title="soundcloud-embed"
      style={{
        borderRadius: "26px",
        padding: "1vh",
      }}
      src={props.SoundcloudEmbedURL}
      loading="lazy"
    />
  );
}
