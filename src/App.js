import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
    <BrowserRouter forceRefresh>
    <FilmGrainEffect />
    <VideoBackground /> 
      <div className="flex flex-col h-screen w-screen -z-10 justify-between">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/contact" render={() => <Contact />} />
          <Route path="/links" render={() => <Links />} />
          <Route path="/merch" render={() => <Merch />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/shows" render={() => <Shows />} />
          <Route path="/secret" render={() => <Secret />} />
          <Route path="*" render={() => <ErrorPage />} />
        </Switch>
        <SocialLinks />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
