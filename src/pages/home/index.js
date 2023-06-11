import React from "react";

import JohnWhiteLogo from "../../assets/images/icons/john-white-logo";
import { MusicLinks } from ".//../../components/music-embeds";

const Home = () => {
  return (
    <div className="text-white justify-items-center">
      <div className="pt-28"/>
      <div className="grid justify-center h-[90%] lg:h-auto">
        <JohnWhiteLogo />
        <p className="text-center text-8xl bottom-0 animate-bounce">↡</p>
      </div>
      
      <div>
        <MusicLinks />
      </div>
    </div>
  );
}

export default Home;
