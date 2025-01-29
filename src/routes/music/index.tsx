import Discography from "../../components/discography";
import { getMusicPage } from "../../api/getMusicData";
import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import pageTransition from "../../util/transitionPage";
import { todayPST } from "../../util/utils";

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

        // Filter out music that's not out yet
        discography.forEach((disc: FetchedDisc) => {
          console.log(disc.Title, disc.ReleaseDate);
        });
        const releasedMusic = discography.filter(
          (disc: FetchedDisc) => disc.ReleaseDate <= todayPST
        );
        setMusic(releasedMusic);
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
    <div className="flex flex-grow flex-col mt-16 text-white">
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
  );
};

export default pageTransition(Music);
