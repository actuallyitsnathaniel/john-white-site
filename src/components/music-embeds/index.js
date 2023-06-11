import React from "react";

import SpotifyEmbed from "./spotify";
import AppleMusicEmbed from "./apple-music";
import SoundcloudEmbed from "./soundcloud";

export function MusicLinks() {
  return (
    <div className="text-white text-[150%] md:text-4xl font-semibold pl-2.6 pr-2.6 h-max">
      <div className="p-6 text-center whitespace-nowrap">
        listen to the fake smiles ep
      </div>
      <div className="flex flex-wrap justify-center">
        <SpotifyEmbed />
        <AppleMusicEmbed />
        <SoundcloudEmbed />
      </div>
    </div>
  );
}