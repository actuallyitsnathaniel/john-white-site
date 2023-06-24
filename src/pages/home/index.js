import React, { useState } from "react";

import JohnWhiteLogo from "../../assets/images/icons/john-white-logo";
import { MusicLinks } from ".//../../components/music-embeds";

const Home = () => {

  const [youtubeID,] = useState('CUzc9Dn4sx4')

  return (
    <div className="text-white justify-items-center">
      <div className="pt-28"/>
      <div className="grid justify-center">
        <JohnWhiteLogo />
        <p rel="preload prefetch" className="text-center text-8xl bottom-0 py-2 animate-bounce">↡</p>
      </div>
        <iframe 
          height={'315px'}
          rel="preload prefetch"
          className="m-auto md:w-[550px] h-[255px] md:h-[315px] rounded-2xl overflow-clip transition ease-in-out duration-75 hover:scale-105" 
          src={`https://www.youtube.com/embed/${youtubeID}?rel=0`} 
          title='youtube embed' 
          allowFullScreen 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"/>
      <div>
        <MusicLinks />
      </div>
    </div>
  );
}

export default Home;
