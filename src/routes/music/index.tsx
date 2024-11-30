import Discography from "../../components/discography";
import { getMusicPage } from "../../api/getMusicData";
import { useEffect, useState } from "react";

type FetchedDisc = {
  AppleMusicURL?: string;
  CoverArt: {
    url: string;
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
    const fetchMusicPage = async () => {
      setIsLoading(true);
      try {
        const { discography } = await getMusicPage();
        setMusic(discography);
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

  console.log(typeof music[0].ReleaseDate);

  return (
    <div>
      <div className="flex mt-16 flex-wrap justify-center text-white">
        {isLoading ? (
          <div>Loading...</div>
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
                  artwork={CoverArt.url}
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
    </div>
  );
};

export default Music;
