import React from "react";
import Disc from "./disc";

// Albums
import family from "../../assets/images/discography/LPs/family_600x600bb.jpeg";

// EPs
import fakeSmilesEP from "../../assets/images/discography/Singles_EPs/fake_smiles_ep600x600bb.jpeg";
import starsRemix from "../../assets/images/discography/Singles_EPs/stars_remix_600x600bb.jpeg";

// Singles
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

const Discography = () => {
  return (
    <>
      <div>
        <h2 className={"flex text-6xl font-semibold italic justify-center p-10"}>
          singles/EPs
        </h2>
        <div className={"flex flex-wrap w-full justify-center"}>
          <Disc
            artwork={blinkOfAnEye}
            title={"blink of an eye - single"}
            spotifyLink={"https://open.spotify.com/track/3caGpDP6yaBQXDAfhT5v6Z?si=734db0ffdd154c0a"}
            appleMusicLink={"https://music.apple.com/us/album/blink-of-an-eye-single/1690896426"}
            soundcloudLink={"https://soundcloud.com/johnwhitesmusic/blink-of-an-eye-single"}
            youtubeLink={"https://www.youtube.com/watch?v=UqjtOwyBHv0&ab_channel=JohnWhite"}
          />
          <Disc
            artwork={fakeSmilesEP}
            title={"fake smiles EP"}
            spotifyLink={"https://open.spotify.com/album/5xG9WKhRF1ve48GMnDdInB?si=7y49yfvlRNqACC7uECI88g"}
            appleMusicLink={"https://embed.music.apple.com/us/album/fake-smiles-ep/1678254661"}
            soundcloudLink={"https://soundcloud.com/johnwhitesmusic/fake-smiles-mixmaster-1"}
            youtubeLink={"https://youtube.com/playlist?list=olak5uy_m2wbnwqklx4ez6u2smtzdiqnx5nsflqbi"}
          />
          <Disc
            artwork={starsRemix}
            title={"stars (riley remix)"}
            spotifyLink={"https://open.spotify.com/track/29NlMvw2a5h7o5sCqgJ7K3?si=4c5c7aacc383407a"}
            appleMusicLink={"https://music.apple.com/us/album/stars-riley-remix-single/1660688944"}
            soundcloudLink={""}
            youtubeLink={"https://youtu.be/9z8t3nt7zma"}
          />
          <Disc
            artwork={familySingle}
            title={"family - single"}
            spotifyLink={"https://open.spotify.com/track/0wyOZ8cDS8LzGn4uG2JdhF?si=d4a2fa2edb844179"}
            appleMusicLink={"https://music.apple.com/us/album/family-single/1649899410"}
            soundcloudLink={"https://soundcloud.com/johnwhitesmusic/johnwhite-family-5-up230ct"}
            youtubeLink={"https://youtu.be/hnisammwxdu"}
          />
          <Disc
            artwork={momentsWillSingle}
            title={"moments will - single"}
            spotifyLink={"https://open.spotify.com/track/2nTRXnb4AeM3IFWdEYHBUY?si=a7d9b2e430674ba3"}
            appleMusicLink={"https://music.apple.com/us/album/moments-will-single/1642081668"}
            soundcloudLink={"https://soundcloud.com/johnwhitesmusic/johnwhite-momentswill-6-4"}
            youtubeLink={"https://youtu.be/rfw4jlwoadw"}
          />
          <Disc
            artwork={wrongIntentionsSingle}
            title={"wrong intentions - single"}
            spotifyLink={"https://open.spotify.com/track/667IbZFF4vadYIqo5EVsAh?si=9bb0f03e66064dac"}
            appleMusicLink={"https://music.apple.com/us/album/wrong-intentions-single/1636433723"}
            soundcloudLink={"https://soundcloud.com/johnwhitesmusic/johnwhite-wrongintentions-2"}
            youtubeLink={"https://youtu.be/srotkdvfymc"}
          />
          <Disc
            artwork={whoeverYouWantToBeSingle}
            title={"whoever you want to be - single"}
            spotifyLink={"https://open.spotify.com/track/42W4JMlVCjf41SmqcimLhz?si=e40a72ca719e4625"}
            appleMusicLink={"https://music.apple.com/us/album/whoever-you-want-to-be-single/1630867196"}
            soundcloudLink={"https://soundcloud.com/johnwhitesmusic/johnwhite-whoeveryouwanttobe"}
            youtubeLink={"https://youtu.be/toxcnzk9xoo"}
          />
          <Disc
            artwork={betterDaysSingle}
            title={"better days - single"}
            spotifyLink={"https://open.spotify.com/track/2VbvWM9HqFsCBHM46CfmS2?si=aeab1263485343b5"}
            appleMusicLink={"https://music.apple.com/us/album/better-days-single/1624621356"}
            soundcloudLink={"https://soundcloud.com/johnwhitesmusic/johnwhite-better-days-mix"}
            youtubeLink={"https://youtu.be/7ci3qjd3pg0"}
          />
          <Disc
            artwork={everWantSingle}
            title={"ever want (with OKO) - single"}
            spotifyLink={"https://open.spotify.com/track/3l60FtfpRHi2TSPSyeT6lz?si=d9b0101660b14dca"}
            appleMusicLink={"https://music.apple.com/us/album/ever-want-single/1580378453"}
            soundcloudLink={""}
            youtubeLink={"https://youtu.be/eoxpheyksdg"}
          />
          <Disc
            artwork={better2021Single}
            title={"better (with sam denton & riley) - single (2021)"}
            spotifyLink={"https://open.spotify.com/track/52lu5hXrnYdWtPb90ImyA6?si=112307d4c45a4830"}
            appleMusicLink={"https://music.apple.com/us/album/better-single/1556313448"}
            soundcloudLink={""}
            youtubeLink={"https://youtu.be/yktwodhhm0o"}
          />
          <Disc
            artwork={timeSingle}
            title={"time - single"}
            spotifyLink={"https://open.spotify.com/track/09srn4UeMI8gSZxWKYpepL?si=af3f0cfb1b444730"}
            appleMusicLink={"https://music.apple.com/us/album/time-single/1526426740"}
            soundcloudLink={""}
            youtubeLink={"https://youtu.be/sbyoa5wmln8"}
          />
          <Disc
            artwork={breakingSingle}
            title={"breaking - single"}
            spotifyLink={"https://open.spotify.com/track/3W3oKk7R3ap2cyn8O144Ix?si=abb77701f05b42f7"}
            appleMusicLink={"https://music.apple.com/us/album/breaking-single/1481706722"}
            soundcloudLink={"https://soundcloud.com/johnwhitesmusic/breaking"}
            youtubeLink={"https://youtu.be/tra6egt3tni"}
          />
          <Disc
            artwork={better2019Single}
            title={"better - single (2019)"}
            spotifyLink={"https://open.spotify.com/track/4rYhOltj2L4IE6OWGM9s5C?si=05d2650b7c4b4ba5"}
            appleMusicLink={"https://music.apple.com/us/album/better-single/1477648616"}
            soundcloudLink={"https://soundcloud.com/johnwhitesmusic/better"}
            youtubeLink={"https://youtu.be/eoxzjq5brza"}
          />
        </div>
      </div>

      <div>
        <h2 className={"flex text-6xl font-semibold italic justify-center p-10"}>
          albums
        </h2>
        <div className={"flex flex-row flex-wrap w-full justify-center"}>
          <Disc
            artwork={family}
            title={"family"}
            spotifyLink={"https://open.spotify.com/album/2aiffqHp78KvYRJj1eP6wR?si=Qv4C-MqaTVCnOSuttE4Dag"}
            appleMusicLink={"https://music.apple.com/us/album/family/1653342726"}
            soundcloudLink={"https://soundcloud.com/johnwhitesmusic/sets/family"}
            youtubeLink={"https://youtube.com/playlist?list=pltfqr4ebunuoo5lfawivu4ihuvnohvxog"}
          />
        </div>
      </div>
    </>
  );
};

Discography.Disc = Disc;

export default Discography;
