import { memo, useMemo } from "react";
import JohnWhiteLogo from "../../assets/images/icons/john-white-logo/john-white-logo";
import { MusicLinks } from "../../components/music-embeds";

const YOUTUBE_ID = "TMLFuisEc1A";

const Home = memo(() => {
  const youtubeUrl = useMemo(() => 
    `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&preload=metadata`, 
    []
  );

  return (
    <div className="grid text-white text-center">
      <div className="flex justify-center items-center h-screen">
        <JohnWhiteLogo />
        <p className="grid absolute bottom-0 m-auto left-0 right-0 text-5xl py-2 animate-bounce">
          ↡
        </p>
      </div>
      <iframe
        height={315}
        width="100%"
        className="m-auto md:w-[550px] h-[255px] md:h-[315px] rounded-2xl overflow-clip transition ease-in-out duration-75 hover:scale-105"
        src={youtubeUrl}
        title="John White - Music Video"
        allowFullScreen
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        loading="lazy"
      />
      <div>
        <MusicLinks />
      </div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
