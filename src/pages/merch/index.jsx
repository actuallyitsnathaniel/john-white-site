// TODO: integrate eCommerce components.
// will most likely be some form of shopify
import SoundXYZGallery from "../../components/sound-xyz";
const Merch = () => {
  return (
    <div className="flex flex-col h-screen w-screen mt-14 justify-center mx-auto text-center text-4xl text-white">
      <SoundXYZGallery>
        <SoundXYZGallery.Item
          soundURL={
            "https://embed.sound.xyz/v1/release/f547e1ea-7570-48fd-b044-3fa516ba016d?referral=0x35493e493e0d2001eda31bd7fb8859f961a227ce&referral_source=embed-sound"
          }
        />
        <SoundXYZGallery.Item
          soundURL={
            "https://embed.sound.xyz/v1/release/0c5ac231-2ae7-4118-9531-2b36056b66a0?referral=0x35493e493e0d2001eda31bd7fb8859f961a227ce&referral_source=embed-sound"
          }
        />
      </SoundXYZGallery>
      {/* 👕🧢 */}
    </div>
  );
};

export default Merch;
