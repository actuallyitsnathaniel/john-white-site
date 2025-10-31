import { Link } from "react-router-dom";

import InstagramLogo from "../../components/social-links/instagram-link";
import GmailLogo from "../../components/social-links/gmail-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLogo from "../../components/social-links/youtube-link";
import JohnWhiteLogo from "../../assets/images/icons/john-white-logo/john-white-logo";
import SEO from "../../components/seo";

const Links = () => {
  return (
    <>
      <SEO
        title="Links"
        description="Follow John White on social media and streaming platforms. Find links to Spotify, Apple Music, YouTube, Instagram, and more."
        url="https://johnwhitesmusic.com/links"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: "John White Links",
          url: "https://johnwhitesmusic.com/links",
        }}
      />
      <div className="text-center text-white">
        <Link to={"/"}>
          <div className="mx-auto my-auto md:w-1/4 pt-16">
            <JohnWhiteLogo />
          </div>
        </Link>
        <h1 className="text-[200%] md:text-6xl py-6 font-semibold italic">
          links
        </h1>
        <div className="flex flex-wrap justify-center px-8">
          <div className="px-6">
            <SpotifyLink />
          </div>
          <div className="px-6">
            <AppleMusic />
          </div>
          <div className="px-6">
            <YoutubeLogo />
          </div>
          <div className="px-6">
            <InstagramLogo />
          </div>
          <div className="px-6">
            <GmailLogo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
