import SpotifyEmbed from "./spotify";
import AppleMusicEmbed from "./apple-music";
// import SoundcloudEmbed from "./soundcloud";
import YoutubePlayistEmbed from "./youtube";

export const MusicLinks = () => {
  return (
    <div className="text-white text-[150%] md:text-4xl font-semibold pl-2.6 pr-2.6 h-max">
      <div className="p-6 text-center">"42" EP, out now</div>
      <div className="flex flex-wrap justify-center drop-shadow-xl">
        <SpotifyEmbed />
        <AppleMusicEmbed />
        {/* <SoundcloudEmbed /> */}
        <YoutubePlayistEmbed />
      </div>
    </div>
  );
};
