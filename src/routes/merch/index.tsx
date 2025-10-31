// TODO: integrate eCommerce components.
// will most likely be some form of shopify
import SoundXYZGallery from "../../components/sound-xyz";
import React from "react";
import { getSoundXYZSongs } from "../../api/getSoundXYZData";
import SEO from "../../components/seo";

const Merch = () => {
  const soundXyzReleases = getSoundXYZSongs;

  const johnWhiteReleases = soundXyzReleases
    .filter(
      (release: { node: { artist: { name: string } } }) =>
        release.node.artist.name === "John White"
    )
    .map((release: { node: { id: number } }) => release.node.id);

  return (
    <>
      <SEO
        title="Digital Collectibles"
        description="Shop exclusive digital releases and collectibles from John White. Limited edition NFT music and digital merchandise."
        url="https://johnwhitesmusic.com/digitals"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "John White Digital Collectibles",
          url: "https://johnwhitesmusic.com/digitals",
        }}
      />
      <h1 className="sr-only">John White Digital Collectibles & Merchandise</h1>
      <div className="flex flex-col mt-14 h-full w-screen justify-center mx-auto text-center text-4xl text-white">
        <SoundXYZGallery>
          {React.Children.map(johnWhiteReleases, (release) => {
            return (
              <SoundXYZGallery.Item
                soundURL={`https://embed.sound.xyz/v1/release/${release}?referral=0x35493e493e0d2001eda31bd7fb8859f961a227ce&referral_source=embed-sound`}
              />
            );
          })}
        </SoundXYZGallery>
        {/* 👕🧢 */}
      </div>
    </>
  );
};

export default Merch;
