import React, { useState } from "react";

import JohnWhiteLogo from "../../assets/images/icons/john-white-logo";
import { MusicLinks } from ".//../../components/music-embeds";

const Home = () => {

  const [youtubeID,] = useState('cuzc9dn4sx4')

  return (
    <div className="text-white justify-items-center">
      <div className="pt-28"/>
      <div className="grid justify-center">
        <JohnWhiteLogo />
        <p className="text-center text-8xl bottom-0 animate-bounce">↡</p>
      </div>
      <iframe 
        width="560" 
        height="315"
        className="mx-auto" 
        src={`https://www.youtube.com/embed/${youtubeID}`}
        title="youtube video player" 
        allow="accelerometer; autoplay; allow-scripts; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" 
        allowFullScreen
      />
      <div>
        <MusicLinks />
      </div>
    </div>
  );
}

export default Home;
