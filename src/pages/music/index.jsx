import Discography from "../../components/discography";

// Albums
import family from "../../assets/images/discography/LPs/family_600x600bb.jpeg";
import throughTheTrees from "../../assets/images/discography/LPs/through-the-trees.jpeg";

// EPs
import fakeSmilesEP from "../../assets/images/discography/Singles_EPs/fake_smiles_ep600x600bb.jpeg";
import starsRemix from "../../assets/images/discography/Singles_EPs/stars_remix_600x600bb.jpeg";
import forAWhileEP from "../../assets/images/discography/Singles_EPs/for_a_while_ep.jpg";

// Singles
import fortyTwo from "../../assets/images/discography/Singles_EPs/42-single-600x600bb.jpg";
import headOn from "../../assets/images/discography/Singles_EPs/head_on-single-600x600bb.jpg";
import sweetWord from "../../assets/images/discography/Singles_EPs/sweet_word_feat_john_white_600x600bb.jpg";
import iWontAsk from "../../assets/images/discography/Singles_EPs/i_wont_ask_single_600x600bb.jpg";
import thisTime from "../../assets/images/discography/Singles_EPs/this_time_single_720x720.jpeg";
import someoneNew from "../../assets/images/discography/Singles_EPs/someone_new_single_600x600bb.jpg";
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
import natixxCheersToYou from "../../assets/images/discography/Singles_EPs/natixx_cheers_to_you_600x600bb.jpg";
import genAlbifindMyWay from "../../assets/images/discography/Singles_EPs/gen_albi_find_my_way_600x600bb.jpg";
import okoMoments from "../../assets/images/discography/Singles_EPs/oko_moments_600x600bb.jpg";
import timeSingle from "../../assets/images/discography/Singles_EPs/time_single_600x600bb.jpeg";
import losingHearts from "../../assets/images/discography/Singles_EPs/losing-hearts_single.jpg";
import breakingSingle from "../../assets/images/discography/Singles_EPs/breaking_single_600x600bb.jpeg";
import better2019Single from "../../assets/images/discography/Singles_EPs/better_2019_single_600x600bb.jpeg";

const Music = () => {
  return (
    <div className="flex md:mt-14 flex-wrap justify-center text-white">
      <Discography>
        <Discography.Disc
          artwork={fortyTwo}
          title={"42 - single"}
          spotifyLink={
            "https://open.spotify.com/track/08KsVcV9DrEImTpl2y4QoE?si=e41fa7f038d84219"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/42/1765495007?i=1765495460"
          }
          youtubeLink={"https://youtu.be/TMLFuisEc1A?feature=shared"}
        />
        <Discography.Disc
          artwork={headOn}
          title={"head on - single"}
          spotifyLink={
            "https://open.spotify.com/track/4fCCdi4Z3Nneatew73HyFP?si=fab38b06fdc64252"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/head-on/1765495007?i=1765495462"
          }
          youtubeLink={"https://youtu.be/fnOrN1kLtok?feature=shared"}
        />
        <Discography.Disc
          artwork={sweetWord}
          appearsOn
          title={"dept - sweet word (feat. john white)"}
          spotifyLink={
            "https://open.spotify.com/track/7Fu2Vgp1murV2bf2JkneX4?si=3b45de2d017243dd"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/sweet-word-feat-john-white/1736523995?i=1736523997"
          }
          youtubeLink={"https://youtu.be/MR3pNgafYx8?si=I4UsowzK_WgpDDZG"}
        />
        <Discography.Disc
          artwork={forAWhileEP}
          title={"for a while - ep"}
          spotifyLink={
            "https://open.spotify.com/album/1dLNd4Wc73gCllxNwFGUvG?si=tyFvK733QumUM_QB2kW-Zw"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/for-a-while-ep/1726240724"
          }
          youtubeLink={
            "https://youtube.com/playlist?list=PLTfQR4eBUNuqxf7aJrCKtXmy1gCG25Tje&si=oGf3wOx8hxlkBHKl"
          }
        />
        <Discography.Disc
          artwork={iWontAsk}
          title={"i won't ask - single"}
          spotifyLink={
            "https://open.spotify.com/track/648Y363O3zGY6RM41FutLS?si=8696c4a8ecae443b"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/i-wont-ask/1726188766?i=1726188858"
          }
          youtubeLink={"https://www.youtube.com/watch?v=pecqODTKxLg"}
        />
        <Discography.Disc
          artwork={thisTime}
          title={"this time - single"}
          spotifyLink={
            "https://open.spotify.com/track/2HqaQn45274SgOEnkMIKmI?si=0abbfd1549f94e91"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/this-time/1725625251?i=1725625252"
          }
          soundcloudLink={
            "https://soundcloud.com/johnwhitesmusic/johnwhite-thistime-dflatminor-107-master-1"
          }
          youtubeLink={
            "https://www.youtube.com/watch?v=LNMY5lbuij4&ab_channel=JohnWhite"
          }
        />
        <Discography.Disc
          artwork={someoneNew}
          title={"someone new - single"}
          spotifyLink={
            "https://open.spotify.com/track/28OpFoUsQqFzj9ejmRqsVF?si=b8bc8f4e940a444c"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/someone-new/1722836081?i=1722836082"
          }
          youtubeLink={"https://youtu.be/9zcsybQqZfI?si=ug5LWCpZGrpExOFT"}
        />
        <Discography.Disc
          artwork={soBeItSingle}
          title={"so be it - single"}
          spotifyLink={
            "https://open.spotify.com/track/0LD68z4X9NoFXyK52tOidz?si=7fd0f150b4244dcf"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/so-be-it-single/1719456370"
          }
          youtubeLink={"https://youtu.be/QadN2ps4cgQ?si=TFBOB19uiolrW5Sr"}
        />
        <Discography.Disc
          artwork={greenLights}
          title={"green lights - single"}
          spotifyLink={
            "https://open.spotify.com/track/7uogoMK8FcWnxEOm2hbsCa?si=92a421f669544240"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/green-lights-single/1690900837"
          }
          soundcloudLink={
            "https://soundcloud.com/johnwhitesmusic/green-lights-single"
          }
          youtubeLink={"https://youtu.be/IsMQ8WhefCw"}
        />
        <Discography.Disc
          artwork={somethingBeautiful}
          title={"something beautiful - single"}
          spotifyLink={
            "https://open.spotify.com/track/0Hqnu8niXo1vxKoJM2AydW?si=7310543374d3406e"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/something-beautiful/1690900934?i=1690900935"
          }
          soundcloudLink={
            "https://soundcloud.com/johnwhitesmusic/something-beautiful-single?si=87fbced791ea4ff3a393a0ef50634f79&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          }
          youtubeLink={"https://www.youtube.com/watch?v=lgys2P18gPo"}
        />
        <Discography.Disc
          artwork={blinkOfAnEye}
          title={"blink of an eye - single"}
          spotifyLink={
            "https://open.spotify.com/track/3caGpDP6yaBQXDAfhT5v6Z?si=734db0ffdd154c0a"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/blink-of-an-eye-single/1690896426"
          }
          soundcloudLink={
            "https://soundcloud.com/johnwhitesmusic/blink-of-an-eye-single"
          }
          youtubeLink={
            "https://www.youtube.com/watch?v=UqjtOwyBHv0&ab_channel=JohnWhite"
          }
        />
        <Discography.Disc
          artwork={fakeSmilesEP}
          title={"fake smiles EP"}
          spotifyLink={
            "https://open.spotify.com/album/5xG9WKhRF1ve48GMnDdInB?si=7y49yfvlRNqACC7uECI88g"
          }
          appleMusicLink={
            "https://embed.music.apple.com/us/album/fake-smiles-ep/1678254661"
          }
          soundcloudLink={
            "https://soundcloud.com/johnwhitesmusic/fake-smiles-mixmaster-1"
          }
          youtubeLink={
            "https://youtube.com/playlist?list=olak5uy_m2wbnwqklx4ez6u2smtzdiqnx5nsflqbi"
          }
        />
        <Discography.Disc
          artwork={starsRemix}
          title={"stars (riley remix)"}
          spotifyLink={
            "https://open.spotify.com/track/29NlMvw2a5h7o5sCqgJ7K3?si=4c5c7aacc383407a"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/stars-riley-remix-single/1660688944"
          }
          youtubeLink={"https://youtu.be/9z8t3nt7zma"}
        />
        <Discography.Disc
          artwork={familySingle}
          title={"family - single"}
          spotifyLink={
            "https://open.spotify.com/track/0wyOZ8cDS8LzGn4uG2JdhF?si=d4a2fa2edb844179"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/family-single/1649899410"
          }
          soundcloudLink={
            "https://soundcloud.com/johnwhitesmusic/johnwhite-family-5-up230ct"
          }
          youtubeLink={"https://youtu.be/hnisammwxdu"}
        />
        <Discography.Disc
          artwork={momentsWillSingle}
          title={"moments will - single"}
          spotifyLink={
            "https://open.spotify.com/track/2nTRXnb4AeM3IFWdEYHBUY?si=a7d9b2e430674ba3"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/moments-will-single/1642081668"
          }
          soundcloudLink={
            "https://soundcloud.com/johnwhitesmusic/johnwhite-momentswill-6-4"
          }
          youtubeLink={"https://youtu.be/rfw4jlwoadw"}
        />
        <Discography.Disc
          artwork={wrongIntentionsSingle}
          title={"wrong intentions - single"}
          spotifyLink={
            "https://open.spotify.com/track/667IbZFF4vadYIqo5EVsAh?si=9bb0f03e66064dac"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/wrong-intentions-single/1636433723"
          }
          soundcloudLink={
            "https://soundcloud.com/johnwhitesmusic/johnwhite-wrongintentions-2"
          }
          youtubeLink={"https://youtu.be/srotkdvfymc"}
        />
        <Discography.Disc
          artwork={whoeverYouWantToBeSingle}
          title={"whoever you want to be - single"}
          spotifyLink={
            "https://open.spotify.com/track/42W4JMlVCjf41SmqcimLhz?si=e40a72ca719e4625"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/whoever-you-want-to-be-single/1630867196"
          }
          soundcloudLink={
            "https://soundcloud.com/johnwhitesmusic/johnwhite-whoeveryouwanttobe"
          }
          youtubeLink={"https://youtu.be/toxcnzk9xoo"}
        />
        <Discography.Disc
          artwork={betterDaysSingle}
          title={"better days - single"}
          spotifyLink={
            "https://open.spotify.com/track/2VbvWM9HqFsCBHM46CfmS2?si=aeab1263485343b5"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/better-days-single/1624621356"
          }
          soundcloudLink={
            "https://soundcloud.com/johnwhitesmusic/johnwhite-better-days-mix"
          }
          youtubeLink={"https://youtu.be/7ci3qjd3pg0"}
        />
        <Discography.Disc
          artwork={everWantSingle}
          title={"ever want (with OKO) - single"}
          spotifyLink={
            "https://open.spotify.com/track/3l60FtfpRHi2TSPSyeT6lz?si=d9b0101660b14dca"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/ever-want-single/1580378453"
          }
          youtubeLink={"https://youtu.be/eoxpheyksdg"}
        />
        <Discography.Disc
          artwork={better2021Single}
          title={"better (with sam denton & riley) - single (2021)"}
          spotifyLink={
            "https://open.spotify.com/track/52lu5hXrnYdWtPb90ImyA6?si=112307d4c45a4830"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/better-single/1556313448"
          }
          youtubeLink={"https://youtu.be/yktwodhhm0o"}
        />

        <Discography.Disc
          artwork={natixxCheersToYou}
          appearsOn
          title={"natixx - cheers to you (feat. john white)"}
          spotifyLink={
            "https://open.spotify.com/track/1qti9RHpAvD6QWOEwbe1Uk?si=ffafef3a316c409f"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/cheers-to-you-feat-john-white-single/1735948953"
          }
          youtubeLink={"https://youtu.be/u6wEltHBvIw?si=Os9vdZqi1YmontCM"}
        />
        <Discography.Disc
          title={"gen albi - find my way (feat. john white)"}
          appearsOn
          artwork={genAlbifindMyWay}
          spotifyLink={
            "https://open.spotify.com/track/09F9FNCZY1WfeGibwawkh0?si=985c880bd5d94842"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/find-my-way-feat-john-white/1452845962?i=1452846074"
          }
          youtubeLink={"https://youtu.be/J--SAicviuA?si=Jny-kJjy3vYhtlpJ"}
        />
        <Discography.Disc
          title={"oko - moments (feat. john white)"}
          appearsOn
          artwork={okoMoments}
          spotifyLink={
            "https://open.spotify.com/album/055lD4khK0r3HBDDx5UR3Y?si=S_iENOgURCaFy9ShXEvDRg"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/moments-feat-john-white-single/1496126326"
          }
          youtubeLink={"https://youtu.be/tOPKbPbl1z8?si=ehssEXGX-Xugjuth"}
        />
        <Discography.Disc
          artwork={timeSingle}
          title={"time - single"}
          spotifyLink={
            "https://open.spotify.com/track/09srn4UeMI8gSZxWKYpepL?si=af3f0cfb1b444730"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/time-single/1526426740"
          }
          youtubeLink={"https://youtu.be/sbyoa5wmln8"}
        />
        <Discography.Disc
          artwork={losingHearts}
          title="john white x riley - losing hearts"
          appleMusicLink="https://music.apple.com/us/album/losing-hearts-feat-john-white/1509147409?i=1509147412"
          spotifyLink="https://open.spotify.com/track/3lLtkLtBztQd8DiLCAORH5?si=f55f60cc305049c8"
          youtubeLink="https://youtu.be/AloaubmwGEA?si=Mn_ZeImQwfpXb_z8"
          soundcloudLink="https://on.soundcloud.com/qEY7u"
        />
        <Discography.Disc
          artwork={breakingSingle}
          title={"breaking - single"}
          spotifyLink={
            "https://open.spotify.com/track/3W3oKk7R3ap2cyn8O144Ix?si=abb77701f05b42f7"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/breaking-single/1481706722"
          }
          soundcloudLink={"https://soundcloud.com/johnwhitesmusic/breaking"}
          youtubeLink={"https://youtu.be/tra6egt3tni"}
        />
        <Discography.Disc
          artwork={better2019Single}
          title={"better - single (2019)"}
          spotifyLink={
            "https://open.spotify.com/track/4rYhOltj2L4IE6OWGM9s5C?si=05d2650b7c4b4ba5"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/better-single/1477648616"
          }
          soundcloudLink={"https://soundcloud.com/johnwhitesmusic/better"}
          youtubeLink={"https://youtu.be/eoxzjq5brza"}
        />

        <Discography.Disc
          album
          artwork={throughTheTrees}
          title={"through the trees"}
          spotifyLink={
            "https://open.spotify.com/album/6ie2fGRbDUcfIpYIVUEfxf?si=lyHDoJPtQnqFNvyM9Oit1Q"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/through-the-trees/1690890513"
          }
          soundcloudLink={"https://on.soundcloud.com/Q9agCrzPv1qj1vzWA"}
          youtubeLink={
            "https://www.youtube.com/watch?v=8To1fW1zaYE&list=OLAK5uy_lZhMgNp39JdVzrBRExMzOrjY5WOtBe0XQ"
          }
        />
        <Discography.Disc
          album
          artwork={family}
          title={"family"}
          spotifyLink={
            "https://open.spotify.com/album/2aiffqHp78KvYRJj1eP6wR?si=Qv4C-MqaTVCnOSuttE4Dag"
          }
          appleMusicLink={"https://music.apple.com/us/album/family/1653342726"}
          soundcloudLink={"https://soundcloud.com/johnwhitesmusic/sets/family"}
          youtubeLink={
            "https://youtube.com/playlist?list=pltfqr4ebunuoo5lfawivu4ihuvnohvxog"
          }
        />
      </Discography>
    </div>
  );
};

export default Music;
