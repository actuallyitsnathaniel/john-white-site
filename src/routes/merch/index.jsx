// TODO: integrate eCommerce components.
// will most likely be some form of shopify
import SoundXYZGallery from "../../components/sound-xyz";
import React from "react";
import { getSoundXYZSongs } from "../../api/getSoundXYZData";

const Merch = () => {
  const soundXyzReleases = getSoundXYZSongs;

  let releases = [];

  soundXyzReleases.map((release) => {
    releases.push(release.node.id);
  });

  return (
    <div className="flex flex-col mt-14 h-full w-screen justify-center mx-auto text-center text-4xl text-white">
      <SoundXYZGallery>
        {React.Children.map(releases, (release) => {
          return (
            <SoundXYZGallery.Item
              soundURL={`https://embed.sound.xyz/v1/release/${release}?referral=0x35493e493e0d2001eda31bd7fb8859f961a227ce&referral_source=embed-sound`}
            />
          );
        })}
      </SoundXYZGallery>
      {/* 👕🧢 */}
    </div>
  );
};

export default Merch;
