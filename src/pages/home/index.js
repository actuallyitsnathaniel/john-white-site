import React from "react";

import JohnWhiteLogo from "../../assets/images/icons/john-white-logo";
import { MusicLinks } from ".//../../components/music-embeds";

function Home() {
  return (
    <div className="text-white justify-items-center">
      <div className="pt-32"/>
      <div className="grid justify-center">
        <JohnWhiteLogo />
        <p className="text-center text-8xl bottom-0 scr animate-bounce">↡</p>
      </div>
      
      <div>
        <MusicLinks />
      </div>
    </div>
  );
}

export default Home;
