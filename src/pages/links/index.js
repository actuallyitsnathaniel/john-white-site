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
    <div className="flex flex-wrap text-center mx-auto w-fit min-h-screen text-white overflow-hidden">
      <div className="pb-3">
        <Link exact to={"/home"}>
          <JohnWhiteLogo className='-pb-8'/>
        </Link>
        <div className="space-y-10">
          <h1 className="text-[150%] md:text-6xl pb-2 font-semibold italic">
          links
          </h1>
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
