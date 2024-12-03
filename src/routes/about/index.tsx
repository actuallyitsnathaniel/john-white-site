import InstagramLogo from "../../components/social-links/instagram-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLogo from "../../components/social-links/youtube-link/index.js";

import PressHighlight from "../../components/press-highlight/index.js";
import { getAboutPage } from "../../api/getAboutData";
import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import pageTransition from "../../util/transitionPage";
import PointOfContact from "../../components/point-of-contact";

type DescriptionType = {
  type: string;
  children: { text: string; type: string }[];
};

type PhotoType = {
  id: number;
  name: string;
  url: string;
  formats: {
    thumbnail: { url: string };
  };
};

type AboutData = {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Description: DescriptionType[];
  AboutPhotos: {
    id: number;
    photos: PhotoType[];
  };
};

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [about, setAbout] = useState<AboutData>();

  useEffect(() => {
    const fetchAboutPage = async () => {
      setIsLoading(true);
      try {
        const response = await getAboutPage();
        setAbout(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAboutPage();
  }, []);

  const RenderDescription = () => {
    return about?.Description.map((paragraphs) => (
      <p key={paragraphs.type} className="mb-4 text-2xl">
        {paragraphs.children.map((child) => child.text).join(" ")}
      </p>
    ));
  };

  const RenderPhotos = () => {
    return about?.AboutPhotos.photos.map((photo) => (
      <img
        className="object-cover snap-center"
        key={photo.id}
        src={photo.url}
        alt={`profile-img-${photo.id}`}
      />
    ));
  };

  console.log(about);

  return (
    <div className="flex flex-grow flex-col mt-16 text-white">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="text-2xl">
          <div className="flex flex-wrap p-10 mx-auto">
            <div className="flex flex-wrap justify-around md:pb-10 items-center">
              <div
                className="lg:px-14 pb-10 text-justify lg:w-[55%] md:text-3xl 
          first-letter:font-extrabold first-letter:text-4xl
          first-line:italic"
              >
                <RenderDescription />
              </div>
              {/* 
        TODO: refine carousel to be this.
        https://stackoverflow.com/questions/59198952/using-document-queryselector-in-react-should-i-use-refs-instead-how
         */}
              <div
                id="carousel"
                className="flex rounded-xl overflow-scroll snap-x snap-mandatory h-fit lg:w-[42vw] mx-auto"
              >
                <RenderPhotos />
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
                    <PointOfContact
                      fullName="Daniel Espitia"
                      email="copamgmtt@gmail.com"
                    />
                    <PointOfContact
                      fullName="Victor M. Rocha"
                      email="victor@245management.com"
                    />
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
      )}
    </div>
  );
};

export default pageTransition(About);
