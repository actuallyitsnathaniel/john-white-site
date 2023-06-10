import React from "react";
import { Link } from "react-router-dom";

import InstagramLogo from "../../components/social-links/instagram-link";
import GmailLogo from "../../components/social-links/gmail-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLink from "../../components/social-links/youtube-link";
import JohnWhiteSignature from "../../assets/images/icons/john-white-logo/john-white-signature.svg";

function Links() {
  return (
    <main className="flex mx-auto w-fit min-h-screen text-white">
      <div className="pb-3 text-center">
        <Link exact to={"/home"}>
          <img
            className="mx-auto max-w-md p-11 transition duration-75 mt-10 mb-3 hover:translate-y-1 hover:scale-125"
            src={JohnWhiteSignature}
            alt="john-white-logo"
          />
        </Link>

        <h1 className="hidden p-3 text-[150%] md:text-5xl font-semibold whitespace-nowrap underline underline-offset-8">
          Upcoming Shows
        </h1>
        <div className="h-8" />
        
        <div className="space-y-10">
          <h1 className="text-[150%] md:text-6xl pb-2 font-semibold italic">
          links
          </h1>
          <div className="flex justify-center scale-150">
            <SpotifyLink />
          </div>
          <div className="flex justify-center scale-150">
            <AppleMusic /> 
          </div>
          <div className="flex justify-center scale-150">
            <YoutubeLink />
          </div>
          <div className="flex justify-center scale-150">
            <InstagramLogo />
          </div>
          <div className="flex justify-center scale-150">
            <GmailLogo />
          </div>
        </div>

        
      </div>
    </main>
  );
}

export default Links;
