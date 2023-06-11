import React from "react";
import Disc from "./disc";

// Albums
import family from '../../assets/images/discography/LPs/family_600x600bb.jpeg'

// EPs
import fakeSmiles from "../../assets/images/discography/Singles_EPs/fake_smiles_ep600x600bb.jpeg"
import starsRemix from '../../assets/images/discography/Singles_EPs/stars_remix_600x600bb.jpeg'

// Singles


function Discography() {
  return (
    <div>
      <div>
        <h2 className="flex text-6xl font-semibold italic justify-center p-10">
          Singles/EPs
        </h2>
        <div className="flex flex-wrap w-full justify-center">
          <Disc 
            artwork={fakeSmiles}
            title={'fake smiles EP'}
            spotifyLink="https://open.spotify.com/album/5xG9WKhRF1ve48GMnDdInB?si=7y49yfvlRNqACC7uECI88g"
            appleMusicLink="https://embed.music.apple.com/us/album/fake-smiles-ep/1678254661"
            soundcloudLink="https://soundcloud.com/johnwhitesmusic/fake-smiles-mixmaster-1"
            youtubeLink="https://youtube.com/playlist?list=olak5uy_m2wbnwqklx4ez6u2smtzdiqnx5nsflqbi"
          />
          <Disc
            artwork={starsRemix}
            title={'Stars (riley remix)'}
            spotifyLink='https://open.spotify.com/track/29NlMvw2a5h7o5sCqgJ7K3?si=4c5c7aacc383407a'
            appleMusicLink='https://music.apple.com/us/album/stars-riley-remix-single/1660688944'
            soundcloudLink=''
            youtubeLink='https://youtu.be/9z8t3nt7zma'
          />
        </div>
      </div>

      <div>
        <h2 className="flex text-6xl font-semibold italic justify-center p-10">
          Albums
        </h2>
        <div className="flex flex-row flex-wrap w-full justify-center">  
          <Disc 
            artwork={family} 
            title={'family'}
            spotifyLink="https://open.spotify.com/album/2aiffqHp78KvYRJj1eP6wR?si=Qv4C-MqaTVCnOSuttE4Dag"
            appleMusicLink="https://music.apple.com/us/album/family/1653342726"
            soundcloudLink="https://soundcloud.com/johnwhitesmusic/sets/family"
            youtubeLink='https://youtube.com/playlist?list=pltfqr4ebunuoo5lfawivu4ihuvnohvxog'
          />
        </div>
      </div>
    </div>
  );
}

Discography.Disc = Disc;

export default Discography;
