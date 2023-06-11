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
    // TODO: fix centering fit
    <div className="text-center min-h-screen text-white overflow-hidden">
      <div className="grid pb-3 justify-center">
        <Link exact to={"/home"}>
          <JohnWhiteLogo/>
        </Link>
        <h1 className="text-[175%] pb-8 md:text-6xl font-semibold italic">
          links
          </h1>
        <div className="space-y-10">
          <div className="grid justify-center scale-150">
            <SpotifyLink />
          </div>
          <div className="grid justify-center scale-150">
            <AppleMusic /> 
          </div>
          <div className="grid justify-center scale-150">
            <YoutubeLink />
          </div>
          <div className="grid justify-center scale-150">
            <InstagramLogo />
          </div>
          <div className="grid justify-center scale-150">
            <GmailLogo />
          </div>
        </div>   
      </div>
    </div>
  );
}

export default Links;
