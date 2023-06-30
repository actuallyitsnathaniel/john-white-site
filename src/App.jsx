import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import VideoBackground from "./components/video-background";
import FilmGrainEffect from "./components/film-grain-effect";
import { SocialLinks } from "./components/social-links";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Links from "./pages/links";
import Merch from "./pages/merch";
import Music from "./pages/music";
import Shows from "./pages/shows";
import Secret from "./pages/secret";
import ErrorPage from "./pages/error";

function App() {

  return (
    <Router forceRefresh>
    <FilmGrainEffect />
    <VideoBackground /> 
      <div className="flex flex-col h-screen w-screen justify-between">
        <NavBar />
        <Routes>
        <Route index element={<Navigate replace to="/home" />}/>
          <Route path="/home" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/links" element={ <Links />} />
          <Route path="/merch" element={ <Merch />} />
          <Route path="/music" element={ <Music />} />
          <Route path="/shows" element={ <Shows />} />
          <Route path="/secret" element={ <Secret />} />
          <Route path="*" element={ <ErrorPage />} />
        </Routes>
        <SocialLinks />
        <Footer />
      </div>
    </Router>
  )
}

export default App
