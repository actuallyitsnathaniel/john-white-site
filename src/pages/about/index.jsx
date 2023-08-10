import React from "react";
import profile1 from "../../assets/images/profiles/profile-1.jpeg";
import profile2 from "../../assets/images/profiles/profile-2.jpeg";
import profile3 from "../../assets/images/profiles/profile-3.jpeg";
import profile4 from "../../assets/images/profiles/profile-4.jpeg";
import profile5 from "../../assets/images/profiles/profile-5.jpeg";

import InstagramLogo from "../../components/social-links/instagram-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLogo from "../../components/social-links/youtube-link/index.jsx";

const About = () => {
  return (
    <div className="md:flex md:flex-wrap -mt-10 md:mt-0 md:pt-14 justify-between text-2xl text-white">
      <div className="md:flex md:flex-wrap p-8">
        <div className="flex flex-wrap md:justify-between md:pb-10">
          <div className="lg:px-5 pb-10 lg:pb-0 text-justify lg:w-1/2 md:text-3xl first-line:italic">
            <span className="font-extrabold text-4xl md:text-6xl">J</span>ohn{" "}
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
            bring audiences that same love and comfort. His debut album, Through
            the Trees, will be released on September 22, 2023.
          </div>
          <div
            id="carousel"
            className="flex rounded-xl overflow-scroll h-fit lg:w-1/2"
          >
            <img
              className="object-cover animate-hint-scrollable"
              src={profile3}
              alt="profile-img-3"
            />
            <img
              className="object-cover animate-hint-scrollable"
              src={profile4}
              alt="profile-img-4"
            />
            <img className="object-cover" src={profile1} alt="profile-img-1" />
            <img className="object-cover" src={profile2} alt="profile-img-2" />
            <img className="object-cover" src={profile5} alt="profile-img-5" />
          </div>
        </div>
        <br />
      </div>
      <div className="flex flex-wrap flex-row justify-center" loading="lazy">
        <div className="text-center">
          <div>
            <div className="text-center py-5 underline text-5xl font-extrabold">
              press highlights
            </div>
            <div className="md:transition md:duration-75 md:ease-in-out md:hover:scale-110">
              <a
                className="font-extrabold p-5 text-2xl"
                href="https://shoutoutla.com/meet-john-white-artist-record-label-founder/"
              >
                "john white | record label founder"
              </a>
            </div>
            <p className="text-lg">write-up by Voyage LA</p>
            <br />
            <div className="md:transition md:duration-75 md:ease-in-out md:hover:scale-110">
              <a
                className="font-extrabold p-5 text-2xl"
                href="https://boldjourney.com/news/meet-john-white/"
              >
                "meet john white"
              </a>
            </div>
            <p className="text-lg">write-up by Bold Journey</p>
            <br />
            <div className="md:transition md:duration-75 md:ease-in-out md:hover:scale-110">
              <a
                className="font-extrabold p-5 text-2xl"
                href="https://thepermanentrainpress.com/post/714147558303449088/john-white-family-review"
              >
                "FAMILY EP"
              </a>
            </div>
            <p className="text-lg"> review by The Permanent Rain Press</p>
            <br />
            <div className="md:transition md:duration-75 md:ease-in-out md:hover:scale-110">
              <a
                className="font-extrabold p-5 text-2xl"
                href="http://voyagela.com/interview/conversations-with-john-white/"
              >
                "Conversations with John White"
              </a>
            </div>
            <p className="text-lg"> write-up by Voyage LA</p>
            <br />
            <div className="md:transition md:duration-75 md:ease-in-out md:hover:scale-110">
              <a
                className="font-extrabold p-5 text-2xl"
                href="http://voyagela.com/interview/meet-john-dominguez-john-white-norwalk/"
              >
                "Meet John Dominguez"
              </a>
            </div>
            <p className="text-lg"> interview with Voyage LA</p>
            <br />
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
          <div className="flex flex-wrap justify-center gap-x-3">
            <div className="">
              <SpotifyLink />
            </div>
            <div className="">
              <AppleMusic />
            </div>
            <div className="">
              <YoutubeLogo />
            </div>
            <div className="">
              <InstagramLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
