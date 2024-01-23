import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { MobileNavButton } from "./mobile-nav-button";
import { NavItem } from "./nav-item";

// https://tailwindcss.com/blog/utility-friendly-transitions-with-tailwindui-react

const usePageTitle = (location) => {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const titleMap = [
      { path: "/", title: "home" },
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
      <div className="flex font-semibold justify-center">
        <div className="md:hidden p-5 justify-center text-4xl whitespace-nowrap underline">
          {pageTitle}
        </div>
        <button
          data-collapse-toggle="navbar"
          id="navbar-icon"
          type="button"
          className={`md:hidden justify-end`}
          aria-controls="navbar"
          aria-expanded="false"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <MobileNavButton {...{ expanded, setExpanded }} />
        </button>
      </div>
      <div
        id="nav-wrapper"
        className={`transition-all h-0 origin-top duration-100
      ${expanded ? "scale-100 h-full" : "scale-0"} md:scale-100 
      `}
      >
        <ul id="nav-bar" className={`nav-bar`}>
          <NavItem
            to="/"
            label={"home"}
            setExpanded={setExpanded}
            {...{ pageTitle }}
          />
          <NavItem
            to="/music"
            label={"music"}
            setExpanded={setExpanded}
            {...{ pageTitle }}
          />
          <NavItem
            to="/about"
            label={"about"}
            setExpanded={setExpanded}
            {...{ pageTitle }}
          />

          {/**  
           <NavItem
            to="/merch"
            label={"merch"}
            setExpanded={setExpanded}
            {...{ pageTitle }}
          />
          */}
          {/** <NavItem
            to="/links"
            label={"contact & links"}
            setExpanded={setExpanded}
            {...{ pageTitle }} */}
          <NavItem
            to="/shows"
            label={"shows"}
            setExpanded={setExpanded}
            {...{ pageTitle }}
          />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
