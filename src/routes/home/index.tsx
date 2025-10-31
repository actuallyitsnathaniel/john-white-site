import { memo, useMemo, useEffect, useState } from "react";
import JohnWhiteLogo from "../../assets/images/icons/john-white-logo/john-white-logo";
import { MusicLinks } from "../../components/music-embeds";
import { getYoutubeVideoID, getHeaderTitle } from "../../api/getHomeData";
import SEO from "../../components/seo";

const Home = memo(() => {
  const [YOUTUBE_ID, setYoutubeId] = useState("TMLFuisEc1A");
  const [headerTitle, setHeaderTitle] = useState('"Murphy\'s Law" (Deluxe), out now');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [id, title] = await Promise.all([
          getYoutubeVideoID(),
          getHeaderTitle()
        ]);
        
        if (id) {
          setYoutubeId(id);
        }
        if (title) {
          setHeaderTitle(title);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const youtubeUrl = useMemo(
    () =>
      `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&preload=metadata`,
    [YOUTUBE_ID]
  );

  return (
    <>
      <SEO
        title="John White - Musician & Artist"
        description="Official website of John White. Stream the latest music, watch videos, and stay updated with new releases and tour dates. 'Murphy's Law' (Deluxe) out now."
        url="https://johnwhitemusic.com"
        type="music.song"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          "name": "John White",
          "url": "https://johnwhitemusic.com",
          "genre": ["Hip Hop", "Rap"],
          "sameAs": [
            "https://www.youtube.com/@johnwhitemusic",
            "https://open.spotify.com/artist/johnwhite",
            "https://music.apple.com/artist/johnwhite"
          ]
        }}
      />
      <h1 className="sr-only">John White - Musician & Artist - Official Website</h1>
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
        <div
          id="header-title"
          className="p-6 text-center text-white text-[150%] md:text-4xl font-semibold "
        >
          {headerTitle}
        </div>
        <MusicLinks />
      </div>
      </div>
    </>
  );
});

Home.displayName = "Home";

export default Home;
