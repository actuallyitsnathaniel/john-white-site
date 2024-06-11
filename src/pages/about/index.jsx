import profile1 from "../../assets/images/profiles/profile-1.jpeg";
import profile2 from "../../assets/images/profiles/profile-2.jpeg";
import profile3 from "../../assets/images/profiles/profile-3.jpeg";
import profile4 from "../../assets/images/profiles/profile-4.jpeg";
import profile5 from "../../assets/images/profiles/profile-5.jpeg";

import InstagramLogo from "../../components/social-links/instagram-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLogo from "../../components/social-links/youtube-link/index.jsx";

import PressHighlight from "../../components/press-highlight/index.jsx";

const About = () => {
  return (
    <div className="flex flex-col mt-14 justify-center text-2xl text-white">
      <div className="flex flex-wrap p-10 mx-auto">
        <div className="flex flex-wrap justify-around md:pb-10 items-center">
          <div className="lg:px-14 pb-10 text-justify lg:w-[55%] md:text-3xl first-line:italic">
            <span className="font-extrabold text-4xl md:text-6xl">J</span>
            ohn&nbsp;
            <span className="font-extrabold text-4xl md:text-6xl">W</span>hite
            is an up-and-coming artist born and raised in South LA. Exploring
            the sounds of the bands he listened to with his father, John writes
            about love, loss, and acceptance in a way that can be understood by
            all. At the end of the day. his message is about embracing one
            another regardless of race, class, sexuality, and coming together
            through music to understand that we are not alone. As he prepares to
            roll out his debut album, John looks forward to bringing his music
            into a live setting. One of his favorite memories is seeing Oasis
            with his dad and taking in how much it meant to experience the songs
            he knew well, but with someone that loved him deeply. He hopes to
            bring audiences that same love and comfort. His latest record, For a
            While, was released on March 22, 2024.
          </div>
          {/* 
          TODO: refine carousel to be this.
          https://stackoverflow.com/questions/59198952/using-document-queryselector-in-react-should-i-use-refs-instead-how
           */}
          <div
            id="carousel"
            className="flex rounded-xl overflow-scroll snap-x snap-mandatory h-fit lg:w-[42vw] mx-auto"
          >
            <img
              className="object-cover snap-center"
              src={profile3}
              alt="profile-img-3"
            />
            <img
              className="object-cover snap-center"
              src={profile4}
              alt="profile-img-4"
            />
            <img
              className="object-cover snap-center"
              src={profile1}
              alt="profile-img-1"
            />
            <img
              className="object-cover snap-center"
              src={profile2}
              alt="profile-img-2"
            />
            <img
              className="object-cover snap-center"
              src={profile5}
              alt="profile-img-5"
            />
          </div>
        </div>
        <br />
      </div>
      <div className="flex flex-wrap flex-row justify-center">
        <div className="text-center">
          <div>
            <div className="text-center py-5 underline text-5xl font-extrabold">
              press highlights
            </div>
            <PressHighlight
              title={`"john white | record label founder"`}
              subtitle={"write-up by Shoutout LA"}
              url={
                "https://shoutoutla.com/meet-john-white-artist-record-label-founder/"
              }
            />
            <PressHighlight
              title={`"meet john white"`}
              subtitle={"write-up by Bold Journey"}
              url={"https://boldjourney.com/news/meet-john-white/"}
            />
            <PressHighlight
              title={`"FAMILY EP"`}
              subtitle={"review by The Permanent Rain Press"}
              url={
                "https://thepermanentrainpress.com/post/714147558303449088/john-white-family-review"
              }
            />
            <PressHighlight
              title={`"Conversations with John White"`}
              subtitle={"write-up by Voyage LA"}
              url={
                "https://voyagela.com/interview/conversations-with-john-white/"
              }
            />
            <PressHighlight
              title={`"Meet John Dominguez"`}
              subtitle={"interview with Voyage LA"}
              url={
                "https://voyagela.com/interview/meet-john-dominguez-john-white-norwalk/"
              }
            />

            <div className="text-center">
              <div className="text-lg">
                <div className="underline text-4xl pb-5 font-extrabold">
                  contact:
                </div>
                <div className="pb-2">
                  <p>Daniel Espitia</p>
                  <p className="md:transition md:duration-75 md:ease-in-out md:hover:scale-110">
                    <a
                      className="italic underline font-extrabold"
                      href="mailto:copamgmtt@gmail.com"
                    >
                      copamgmtt@gmail.com
                    </a>
                  </p>
                </div>
                <div className="pb-2">
                  <p>Victor M. Rocha</p>
                  <p className="md:transition md:duration-75 md:ease-in-out md:hover:scale-110">
                    <a
                      className="italic underline font-extrabold"
                      href="mailto:victor@245management.com"
                    >
                      victor@245management.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <SpotifyLink />
            <AppleMusic />
            <YoutubeLogo />
            <InstagramLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
