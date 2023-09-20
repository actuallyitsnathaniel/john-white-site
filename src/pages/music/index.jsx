import React from "react";
import Discography from "../../components/discography";

import { mapAlbums } from "../../api/getMusicData";

// Albums
import family from "../../assets/images/discography/LPs/family_600x600bb.jpeg";
import throughTheTrees from "../../assets/images/discography/LPs/through-the-trees.jpeg";

// EPs
import fakeSmilesEP from "../../assets/images/discography/Singles_EPs/fake_smiles_ep600x600bb.jpeg";
import starsRemix from "../../assets/images/discography/Singles_EPs/stars_remix_600x600bb.jpeg";

// Singles
import soBeItSingle from "../../assets/images/discography/Singles_EPs/so_be_it_single_600x600bb.jpg";
import greenLights from "../../assets/images/discography/Singles_EPs/green_lights_single_600x600bb.jpeg";
import somethingBeautiful from "../../assets/images/discography/Singles_EPs/something_beautiful_single_600x600bb.jpeg";
import blinkOfAnEye from "../../assets/images/discography/Singles_EPs/blink_of_an_eye_600x600bb.jpg";
import familySingle from "../../assets/images/discography/Singles_EPs/family_single_600x600bb.jpeg";
import momentsWillSingle from "../../assets/images/discography/Singles_EPs/moments_will_single_600x600bb.jpeg";
import wrongIntentionsSingle from "../../assets/images/discography/Singles_EPs/wrong_intentions_single_600x600bb.jpeg";
import whoeverYouWantToBeSingle from "../../assets/images/discography/Singles_EPs/whoever_you_want_to_be_single_600x600bb.jpeg";
import betterDaysSingle from "../../assets/images/discography/Singles_EPs/better_days_single_600x600bb.jpeg";
import everWantSingle from "../../assets/images/discography/Singles_EPs/ever_want_single_600x600bb.jpeg";
import better2021Single from "../../assets/images/discography/Singles_EPs/better_2021_single_600x600bb.jpeg";
import timeSingle from "../../assets/images/discography/Singles_EPs/time_single_600x600bb.jpeg";
import breakingSingle from "../../assets/images/discography/Singles_EPs/breaking_single_600x600bb.jpeg";
import better2019Single from "../../assets/images/discography/Singles_EPs/better_2019_single_600x600bb.jpeg";
import Disc from "../../components/discography/disc";

const Music = () => {
  const albums = mapAlbums;

  return (
    <div className="flex flex-wrap mt-16 justify-center text-white">
      <Discography>
        {albums.toReversed().map(({ album, coverURL }) => {
          //  console.log(album)
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
