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
      { path: "/digital", title: "digitals" },
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
      className={`z-[1] text-white fixed top-0 w-screen py-1 bg-none ${
        expanded && "h-screen bg-black bg-opacity-75"
      }`}
    >
      <div className="absolute flex font-semibold mx-auto w-full justify-center">
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
      <ul
        id="nav-bar"
        className={`origin-top mt-20 md:mt-auto md:scale-100 md:justify-end ${
          expanded ? "scale-100" : "scale-0"
        } w-screen h-4/5 transition-all duration-100 absolute flex flex-col 
        mx-auto ease-in-out justify-around md:h-auto font-semibold 
        md:flex-row items-center text-2xl whitespace-nowrap`}
      >
        <NavItem
          to="/"
          label={"home"}
          setExpanded={setExpanded}
          {...{ pageTitle }}
        />
        <NavItem
          to="/about"
          label={"about"}
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
          to="/digital"
          label={"digitals"}
          setExpanded={setExpanded}
          {...{ pageTitle }}
        />
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
    </nav>
  );
};

export default NavBar;
