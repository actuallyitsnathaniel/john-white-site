import React from "react";
import { Link } from "react-router-dom";

import InstagramLogo from "../../components/social-links/instagram-link";
import GmailLogo from "../../components/social-links/gmail-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLink from "../../components/social-links/youtube-link";
import JohnWhiteLogo from "../../assets/images/icons/john-white-logo";

const Links = () => {
  return (
    <div className="text-center  text-white">
      <Link exact to={"/home"}>
      <div className="mx-auto w-3/4 md:w-1/4 pt-16">
        <JohnWhiteLogo/>
      </div>
      </Link>
      <h1 className="text-[200%] md:text-6xl py-6 font-semibold italic">
        links
      </h1>
      <div className="flex flex-wrap justify-center px-9 scale-125 md:scale-100">
        <div className="px-6">
          <SpotifyLink />
        </div>
        <div className="px-6">
          <AppleMusic /> 
        </div>
        <div className="px-6">
          <YoutubeLink />
        </div>
        <div className="px-6">
          <InstagramLogo />
        </div>
        <div className="px-6">
          <GmailLogo />
        </div>
      </div>   
    </div>
  );
}

export default Links;
