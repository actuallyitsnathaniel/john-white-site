import Discography from "../../components/discography";

import { mapAlbums } from "../../api/getMusicData";

const Music = () => {
  const albums = mapAlbums;

  return (
    <div className="flex flex-wrap mt-16 justify-center text-white">
      <Discography>
        {albums.toReversed().map(({ album, coverURL }) => {
          return (
            <Discography.Disc
              title={album.ReleaseTitle}
              album={album.ReleaseType == "LP"}
              spotifyLink={album.SpotifyURL}
              appleMusicLink={album.AppleMusicURL}
              soundcloudLink={album.SoundcloudURL}
              youtubeLink={album.YoutubeURL}
              artwork={coverURL}
            />
          );
        })}
      </Discography>
    </div>
  );
};

export default Music;
