import { memo, useMemo, useEffect, useState } from "react";
import JohnWhiteLogo from "../../assets/images/icons/john-white-logo/john-white-logo";
import { MusicLinks } from "../../components/music-embeds";
import { getYoutubeVideoID, getHeaderTitle } from "../../api/getHomeData";
import SEO from "../../components/seo";
import CanvasText from "../../components/canvas-text";

const Home = memo(() => {
  const [YOUTUBE_ID, setYoutubeId] = useState("TMLFuisEc1A");
  const [headerTitle, setHeaderTitle] = useState(
    '"Murphy\'s Law" (Deluxe), out now'
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [id, title] = await Promise.all([
          getYoutubeVideoID(),
          getHeaderTitle(),
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
        url="https://johnwhitesmusic.com"
        type="music.song"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          name: "John White",
          url: "https://johnwhitesmusic.com",
          genre: ["Hip Hop", "Rap"],
          sameAs: [
            "https://www.youtube.com/@johnwhitesmusic",
            "https://open.spotify.com/artist/johnwhite",
            "https://music.apple.com/artist/johnwhite",
          ],
        }}
      />
      <h1 className="sr-only">
        John White - Musician & Artist - Official Website
      </h1>
      <div className="grid text-white text-center w-screen">
        <div className="flex justify-center items-center h-screen">
          <JohnWhiteLogo />
          <div className="absolute bottom-0 m-auto left-0 right-0 flex justify-center py-4 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs tracking-widest uppercase opacity-60">latest video</p>
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
        </div>
        <div>
          <div
            id="header-title"
            className="p-6 flex justify-center text-white font-semibold"
          >
            <CanvasText
              text={headerTitle}
              font="Lusitana"
              fontSize={36}
              animateOnView={false}
            />
          </div>
          <div className="mt-8 mb-16 px-4">
            <MusicLinks />
          </div>
        </div>
      </div>
    </>
  );
});

Home.displayName = "Home";

export default Home;
