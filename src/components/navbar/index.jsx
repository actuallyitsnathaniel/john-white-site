import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as HamburgerIcon } from "../../assets/images/icons/navbar/hamburger-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/icons/navbar/close-icon.svg";

// https://tailwindcss.com/blog/utility-friendly-transitions-with-tailwindui-react

const usePageTitle = (location) => {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const titleMap = [
      { path: "/", title: "home" },
      { path: "/home", title: "home" },
      { path: "/home/", title: "home" },
      { path: "/about", title: "about" },
      { path: "/contact", title: "contact" },
      { path: "/music", title: "music" },
      { path: "/merch", title: "merch" },
      { path: "/shows", title: "shows" },
      { path: "/secret", title: "secret" },
      { path: "/links", title: "links" },
    ];

    const curTitle = titleMap.find((item) => item.path === location);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = "john white - " + curTitle.title;
    }
  }, [location]);

  return pageTitle;
};

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  let pageTitle = usePageTitle(useLocation().pathname);

  return (
    <nav
      className={`text-white p-2.5 py-2 ${
        pageTitle.includes("links") ? "hidden" : ""
      }`}
    >
      <div className="flex font-semibold justify-between">
        <a
          id="home-icon"
          href="/home"
          className={`md:hidden ${
            pageTitle.includes("home") && "pointer-events-none opacity-0"
          } p-3.5 text-6xl -translate-y-1 align-middle`}
        >
          ⌂
        </a>
        <div className="md:hidden p-5 justify-center text-4xl whitespace-nowrap">
          {pageTitle}
        </div>
        <button
          data-collapse-toggle="navbar"
          id="navbar-icon"
          type="button"
          className={`md:hidden p-3 justify-end`}
          aria-controls="navbar"
          aria-expanded="false"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>
      <div
        id="nav-wrapper"
        className={`transition-all h-0 origin-top duration-100
      ${expanded ? "scale-100 h-full" : "scale-0"} md:scale-100 
      `}
      >
        <ul id="nav-bar" className={`nav-bar`}>
          <Link
            className={`nav-item ${
              pageTitle === "home" ? "nav-item-active" : ""
            }`}
            to="/home"
            aria-current="page"
            onClick={() => setExpanded(false)}
          >
            home
          </Link>
          <Link
            className={`nav-item ${
              pageTitle === "music" ? "nav-item-active" : ""
            }`}
            to="/music"
            onClick={() => setExpanded(false)}
          >
            music
          </Link>
          <Link
            className={`nav-item ${
              pageTitle === "about" ? "nav-item-active" : ""
            }`}
            to="/about"
            onClick={() => setExpanded(false)}
          >
            about
          </Link>
          {/**  <Link
            className={`nav-item ${
              pageTitle === "merch" ? "nav-item-active" : ""
            }`}
            to="/merch"
            onClick={() => setExpanded(false)}
          >
            merch
          </Link> */}
          {/** <Link
            className={`nav-item ${
              pageTitle === "links" ? "nav-item-active" : ""
            }`}
            to="/links"
            onClick={() => setExpanded(false)}
          >
            contact & links
          </Link> */}
          <Link
            className={`nav-item ${
              pageTitle === "shows" ? "nav-item-active" : ""
            }`}
            to="/shows"
            onClick={() => setExpanded(false)}
          >
            shows
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
