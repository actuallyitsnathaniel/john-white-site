import React from "react";

import JohnWhiteLogo from "../../assets/images/icons/john-white-logo/john-white-logo";
import { MusicLinks } from "../../components/music-embeds";

const Home = () => {
  const youtubeID = "QadN2ps4cgQ";
  return (
    <div className="grid text-white text-center">
      <div className="flex items-center justify-center h-screen">
        <JohnWhiteLogo />
        <p className="grid absolute bottom-0 m-auto left-0 right-0 text-5xl py-2 animate-bounce">
          ↡
        </p>
      </div>
      {
        // TODO: migrate embed to strapi, or at least just the youtubeID
      }
      <iframe
        height={"315px"}
        rel="preload prefetch"
        className="m-auto md:w-[550px] h-[255px] md:h-[315px] rounded-2xl overflow-clip transition ease-in-out duration-75 hover:scale-105"
        src={`https://www.youtube-nocookie.com/embed/${youtubeID}?rel=0`}
        title="youtube embed"
        allowFullScreen
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      />
      <div>
        <MusicLinks />
      </div>
    </div>
  );
};

export default Home;
