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
import SEO from "../../components/seo";

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

type PointOfContact = {
  fullName: string;
  email: string;
  phoneNumber: string;
};

type PressHighlight = {
  title: string;
  subtitle: string;
  url: string;
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
  pointOfContact: PointOfContact[];
  pressHighlight: PressHighlight[];
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
        console.log(response);
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

  const RenderPOCs = () => {
    return about?.pointOfContact.map(({ fullName, email, phoneNumber }) => (
      <PointOfContact {...{ fullName, email, phoneNumber }} />
    ));
  };

  const RenderPress = () => {
    return about?.pressHighlight.map(({ title, subtitle, url }) => (
      <PressHighlight {...{ title, subtitle, url }} />
    ));
  };

  return (
    <>
      <SEO
        title="About"
        description="Learn more about John White - musician, artist, and performer. Biography, press highlights, and contact information."
        url="https://johnwhitemusic.com/about"
        type="profile"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "John White",
          "url": "https://johnwhitemusic.com",
          "jobTitle": "Musician",
          "sameAs": [
            "https://www.youtube.com/@johnwhitemusic",
            "https://open.spotify.com/artist/johnwhite",
            "https://music.apple.com/artist/johnwhite"
          ]
        }}
      />
      <h1 className="sr-only">About John White</h1>
      <div className="flex grow flex-col mt-16 text-white">
        {isLoading ? (
          <Loading />
        ) : (
        <div className="text-2xl">
          <div className="flex flex-wrap p-10 mx-auto">
            <div className="flex flex-wrap justify-around md:pb-10 items-center">
              <div
                className="lg:px-14 pb-10 text-justify lg:w-[55%] md:text-3xl 
          first-letter:font-extrabold first-letter:text-4xl"
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
          <div className="flex flex-wrap flex-row p-10">
            <div className="text-center">
              <div className="text-center py-5 underline text-5xl font-extrabold">
                press highlights
              </div>
              <RenderPress />
              <div className="">
                <div className="text-lg">
                  <div className="underline text-4xl pb-5 font-extrabold">
                    contact:
                  </div>
                  <RenderPOCs />
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
    </>
  );
};

export default pageTransition(About);
