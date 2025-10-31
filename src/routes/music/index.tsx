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
    const CACHE_KEY = 'john-white-music-data';
    const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

    const cacheImages = async (discography: FetchedDisc[]): Promise<FetchedDisc[]> => {
      const promises = discography.map(async (disc) => {
        if (disc.CoverArt?.url) {
          try {
            const cachedUrl = await musicCache.cacheImage(disc.CoverArt.url);
            return {
              ...disc,
              CoverArt: {
                ...disc.CoverArt,
                cachedUrl: cachedUrl || disc.CoverArt.url
              }
            };
          } catch (error) {
            console.error(`Error caching image for ${disc.Title}:`, error);
            return disc;
          }
        }
        return disc;
      });

      return Promise.all(promises);
    };

    const fetchMusicPage = async () => {
      setIsLoading(true);
      
      // Check IndexedDB cache first
      const cachedMusic = await musicCache.getData<FetchedDisc[]>(CACHE_KEY, CACHE_DURATION);
      if (cachedMusic) {
        setMusic(cachedMusic);
        setIsLoading(false);
        return;
      }

      try {
        const { discography } = await getMusicPage();

        // Filter out music that's not out yet
        const releasedMusic = discography.filter(
          (disc: FetchedDisc) => disc.ReleaseDate <= todayPST
        );
        
        // Cache images in background and update data
        const musicWithCachedImages = await cacheImages(releasedMusic);
        
        // Cache the complete data with cached images
        await musicCache.setData(CACHE_KEY, musicWithCachedImages);
        setMusic(musicWithCachedImages);
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
        url="https://johnwhitemusic.com/music"
        type="music.album"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          "name": "John White",
          "url": "https://johnwhitemusic.com",
          "genre": ["Hip Hop", "Rap"],
          "album": sortedMusic.map(disc => ({
            "@type": "MusicAlbum",
            "name": disc.Title,
            "datePublished": disc.ReleaseDate
          }))
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
