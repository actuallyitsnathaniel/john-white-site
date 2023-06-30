import React from 'react';

export default function SoundcloudEmbed() {
  return (
    <iframe
      height="470px"
      title="soundcloud-embed"
      style={{
        borderRadius: "26px",
        padding: "1vh",
      }}
      src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1550709766&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
      loading="lazy"
    />
  );
}