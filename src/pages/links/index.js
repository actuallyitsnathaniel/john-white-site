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
    <div className="text-center mb-auto h-auto text-white">
      <Link exact to={"/home"}>
      <div className="max-w-md mx-auto d:-my-10 self-center">
        <JohnWhiteLogo/>
      </div>
      </Link>
      <h1 className="text-[175%] pb-8 md:text-6xl font-semibold italic">
        links
      </h1>
      <div className="flex flex-wrap w-full justify-center px-11">
        <div className="p-6">
          <SpotifyLink />
        </div>
        <div className="p-6">
          <AppleMusic /> 
        </div>
        <div className="p-6">
          <YoutubeLink />
        </div>
        <div className="p-6">
          <InstagramLogo />
        </div>
        <div className="p-6">
          <GmailLogo />
        </div>
      </div>   
    </div>
  );
}

export default Links;
