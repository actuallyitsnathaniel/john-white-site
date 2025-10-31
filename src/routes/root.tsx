import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

import VideoBackground from "../components/video-background";
import FilmGrainEffect from "../components/film-grain-effect";
import { SocialLinks } from "../components/social-links";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Loading from "../components/loading";
import ErrorBoundary from "../components/error-boundary";
import PageTransition from "../components/page-transition";

import { AnimatePresence } from "framer-motion";

// Lazy load route components
const Home = lazy(() => import("./home"));
const Contact = lazy(() => import("./contact"));
const About = lazy(() => import("./about"));
const Links = lazy(() => import("./links"));
const Merch = lazy(() => import("./merch"));
const Music = lazy(() => import("./music"));
const Shows = lazy(() => import("./shows"));
const Secret = lazy(() => import("./secret"));
const ErrorPage = lazy(() => import("./error"));

const Root = () => {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <div id="root" className="">
        <FilmGrainEffect />
        <VideoBackground />
        <div className="flex flex-col min-h-screen w-full justify-between [&>*]:animate-appear">
          <AnimatePresence mode="wait">
            <NavBar />
            <ErrorBoundary fallback={<Loading />}>
              <Suspense fallback={<Loading />}>
                <Routes location={location} key={location.pathname}>
                  <Route index element={<PageTransition><Home /></PageTransition>} />
                  <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                  <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                  <Route path="/links" element={<PageTransition><Links /></PageTransition>} />
                  <Route path="/digitals" element={<PageTransition><Merch /></PageTransition>} />
                  <Route path="/music" element={<PageTransition><Music /></PageTransition>} />
                  <Route path="/shows" element={<PageTransition><Shows /></PageTransition>} />
                  <Route path="/secret" element={<PageTransition><Secret /></PageTransition>} />
                  <Route path="*" element={<PageTransition><ErrorPage /></PageTransition>} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
            <SocialLinks />
            <Footer />
          </AnimatePresence>
        </div>
        <Analytics />
      </div>
    </ErrorBoundary>
  );
};

export default Root;
