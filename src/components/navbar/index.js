import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as HamburgerIcon } from "../../assets/images/icons/navbar/hamburger-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/icons/navbar/close-icon.svg";

// https://tailwindcss.com/blog/utility-friendly-transitions-with-tailwindui-react

function usePageTitle(location) {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const titleMap = [
      { path: "/", title: "Home" },
      { path: "/home", title: "Home" },
      { path: "/home/", title: "Home" },
      { path: "/about", title: "About" },
      { path: "/contact", title: "Contact" },
      { path: "/music", title: "Music" },
      { path: "/merch", title: "Merch" },
      { path: "/shows", title: "Shows" },
      { path: "/secret", title: "Secret" },
      { path: "/links", title: "Links" },
    ];

    const curTitle = titleMap.find((item) => item.path === location);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = "John White - " + curTitle.title;
    }
  }, [location]);

  return pageTitle;
}

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  let pageTitle = usePageTitle(useLocation().pathname);

  return (
    <nav
      className={`text-white p-2.5 font-semibold ${
        pageTitle.includes("Links") ? "hidden" : ""
      }`}
    >
      <div className="flex justify-between">
        <a
          id="home-icon"
          href="/home"
          className="md:hidden p-3.5 text-6xl -translate-y-1 align-middle"
        >
          ⌂
        </a>
        <div className="md:hidden p-3 justify-center text-5xl whitespace-nowrap">
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
        className={`transition-all h-0 origin-top duration-100 md:block
      ${expanded ? "scale-100 h-full" : "scale-0"} md:scale-100 
      `}
      >
        <ul id="nav-bar" className={`nav-bar`}>
          <Link
            className={`nav-item ${
              pageTitle === "Home" ? "nav-item-active" : ""
            }`}
            to="/home"
            aria-current="page"
            onClick={() => setExpanded(false)}
          >
            Home
          </Link>
          <Link
            className={`nav-item ${
              pageTitle === "Music" ? "nav-item-active" : ""
            }`}
            to="/music"
            onClick={() => setExpanded(false)}
          >
            Music
          </Link>
          <Link
            className={`nav-item ${
              pageTitle === "Links" ? "nav-item-active" : ""
            }`}
            to="/links"
            onClick={() => setExpanded(false)}
          >
            Contact & Links
          </Link>
          <Link
            className={`nav-item ${
              pageTitle === "About" ? "nav-item-active" : ""
            }`}
            to="/about"
            onClick={() => setExpanded(false)}
          >
            About
          </Link>
          <Link
            className={`nav-item ${
              pageTitle === "Merch" ? "nav-item-active" : ""
            }`}
            to="/merch"
            onClick={() => setExpanded(false)}
          >
            Merch
          </Link>
          <Link
            className={`hidden nav-item ${
              pageTitle === "Shows" ? "nav-item-active" : ""
            }`}
            to="/shows"
            onClick={() => setExpanded(false)}
          >
            Shows
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
