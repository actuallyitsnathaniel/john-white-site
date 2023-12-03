import React from "react";

import SpotifyEmbed from "./spotify";
import AppleMusicEmbed from "./apple-music";
import SoundcloudEmbed from "./soundcloud";

import { getMusicEmbedsData } from "../../api/getHomeData";

export const MusicLinks = () => {
  const EmbeddedText = getMusicEmbedsData.Text;
  const SpotifyEmbedURL = getMusicEmbedsData.spotifyEmbedURL;
  const AppleMusicEmbedURL = getMusicEmbedsData.appleMusicEmbedURL;
  const SoundcloudEmbedURL = getMusicEmbedsData.soundcloudEmbedURL;

  return (
    <div className="text-white text-[150%] md:text-4xl font-semibold pl-2.6 pr-2.6 h-max">
      <div className="p-6 text-center">{EmbeddedText}</div>
      <div className="flex flex-wrap justify-center drop-shadow-xl">
        <SpotifyEmbed SpotifyEmbedURL={SpotifyEmbedURL} />
        <AppleMusicEmbed AppleMusicEmbedURL={AppleMusicEmbedURL} />
        <SoundcloudEmbed SoundcloudEmbedURL={SoundcloudEmbedURL} />
      </div>
    </div>
  );
};
