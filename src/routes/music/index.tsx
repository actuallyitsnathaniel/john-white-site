import Discography from "../../components/discography";
import { getMusicPage } from "../../api/getMusicData";
import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import { todayPST } from "../../util/utils";
import { musicCache } from "../../util/indexedDBCache";
import SEO from "../../components/seo";

type FetchedDisc = {
  AppleMusicURL?: string;
  CoverArt: {
    url: string;
    cachedUrl?: string;
  };
  ReleaseDate: string;
  ReleaseType: "single" | "album" | "ep" | "appearance";
  SoundcloudURL?: string;
  SpotifyURL?: string;
  TidalURL?: string;
  Title: string;
  YoutubeURL?: string;
  id: number;
};

const Music = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [music, setMusic] = useState<FetchedDisc[]>([]); // Initialized as empty array

  useEffect(() => {
    const CACHE_KEY = "john-white-music-data";
    const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

    const loadCachedImages = async (
      discography: FetchedDisc[]
    ): Promise<FetchedDisc[]> => {
      const promises = discography.map(async (disc) => {
        if (disc.CoverArt?.url) {
          try {
            // Get cached blob URL (will fetch and cache if not already cached)
            const cachedUrl = await musicCache.getCachedImage(
              disc.CoverArt.url
            );
            return {
              ...disc,
              CoverArt: {
                ...disc.CoverArt,
                cachedUrl: cachedUrl || disc.CoverArt.url,
              },
            };
          } catch (error) {
            console.error(`Error loading image for ${disc.Title}:`, error);
            return disc;
          }
        }
        return disc;
      });

      return Promise.all(promises);
    };

    const fetchMusicPage = async () => {
      setIsLoading(true);

      try {
        // Check IndexedDB cache first
        const cachedMusic = await musicCache.getData<FetchedDisc[]>(
          CACHE_KEY,
          CACHE_DURATION
        );

        let musicData: FetchedDisc[];

        if (cachedMusic) {
          musicData = cachedMusic;
        } else {
          // Fetch from API
          const { discography } = await getMusicPage();

          // Filter out music that's not out yet
          musicData = discography.filter(
            (disc: FetchedDisc) => disc.ReleaseDate <= todayPST
          );

          // Cache the data (without blob URLs)
          await musicCache.setData(CACHE_KEY, musicData);
        }

        // Load images from cache (creates fresh blob URLs)
        const musicWithImages = await loadCachedImages(musicData);
        setMusic(musicWithImages);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMusicPage();
  }, []);
  const sortedMusic = music.sort(
    (a, b) => Date.parse(b.ReleaseDate) - Date.parse(a.ReleaseDate)
  );

  return (
    <>
      <SEO
        title="Music"
        description="Stream John White's complete discography including albums, EPs, and singles. Available on Spotify, Apple Music, YouTube, and more."
        url="https://johnwhitesmusic.com/music"
        type="music.album"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          name: "John White",
          url: "https://johnwhitesmusic.com",
          genre: ["Hip Hop", "Rap"],
          album: sortedMusic.map((disc) => ({
            "@type": "MusicAlbum",
            name: disc.Title,
            datePublished: disc.ReleaseDate,
          })),
        }}
      />
      <h1 className="sr-only">John White Music - Complete Discography</h1>
      <div className="flex grow flex-col mt-16 text-white">
        {isLoading ? (
          <Loading />
        ) : (
          <Discography>
            {sortedMusic.map(
              ({
                AppleMusicURL,
                CoverArt,
                ReleaseDate,
                ReleaseType,
                id,
                SoundcloudURL,
                SpotifyURL,
                TidalURL,
                Title,
                YoutubeURL,
              }: FetchedDisc) => (
                <Discography.Disc
                  key={id}
                  artwork={CoverArt.cachedUrl || CoverArt.url}
                  appleMusicLink={AppleMusicURL}
                  id={id}
                  title={Title}
                  tidalLink={TidalURL}
                  spotifyLink={SpotifyURL}
                  soundcloudLink={SoundcloudURL}
                  releaseType={ReleaseType}
                  releaseDate={ReleaseDate}
                  youtubeLink={YoutubeURL}
                />
              )
            )}
          </Discography>
        )}
      </div>
    </>
  );
};

export default Music;
