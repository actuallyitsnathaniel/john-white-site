import { Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import VideoBackground from "../components/video-background";
import FilmGrainEffect from "../components/film-grain-effect";
import { SocialLinks } from "../components/social-links";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

import Home from "./home";
import Contact from "./contact";
import About from "./about";
import Links from "./links";
import Merch from "./merch";
import Music from "./music";
import Shows from "./shows";
import Secret from "./secret";
import ErrorPage from "./error";
import { AnimatePresence } from "framer-motion";

const Root = () => {
  const location = useLocation();
  return (
    <div id="root" className="">
      <FilmGrainEffect />
      <VideoBackground />
      <div className="flex flex-col min-h-screen w-screen justify-between [&>*]:animate-appear">
        <AnimatePresence mode="wait">
          <NavBar />
          <Routes location={location}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/links" element={<Links />} />
            <Route path="/digitals" element={<Merch />} />
            <Route path="/music" element={<Music />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/secret" element={<Secret />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <SocialLinks />
          <Footer />
        </AnimatePresence>
      </div>
      <Analytics />
    </div>
  );
};

export default Root;
