import { useState, useEffect, useMemo, useCallback, memo } from "react";
import { useLocation } from "react-router-dom";

import { MobileNavButton } from "./mobile-nav-button";
import { NavItem } from "./nav-item";

// https://tailwindcss.com/blog/utility-friendly-transitions-with-tailwindui-react

const TITLE_MAP = [
  { path: "/", title: "home" },
  { path: "/about", title: "about" },
  { path: "/contact", title: "contact" },
  { path: "/music", title: "music" },
  { path: "/digitals", title: "digitals" },
  { path: "/shows", title: "shows" },
  { path: "/secret", title: "secret" },
  { path: "/links", title: "links" },
] as const;

type RoutePath = typeof TITLE_MAP[number]['path'];

const usePageTitle = (location: string) => {
  const [pageTitle, setPageTitle] = useState("");

  const titleMapLookup = useMemo(() => {
    return new Map(TITLE_MAP.map(item => [item.path, item.title]));
  }, []);

  useEffect(() => {
    const title = titleMapLookup.get(location as RoutePath);
    if (title) {
      setPageTitle(title);
      document.title = `john white - ${title}`;
    }
  }, [location, titleMapLookup]);

  return pageTitle;
};

const NavBar = memo(() => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const pageTitle = usePageTitle(location.pathname);

  const handleSetExpanded = useCallback((value: boolean) => {
    setExpanded(value);
  }, []);

  const navClassName = useMemo(() => 
    `z-40 text-white fixed top-0 w-screen py-1 bg-none ${
      expanded ? "h-screen bg-black bg-opacity-75" : ""
    }`, [expanded]
  );

  const ulClassName = useMemo(() => 
    `origin-top mt-20 md:mt-auto md:scale-100 md:justify-end ${
      expanded ? "scale-100" : "scale-0"
    } w-screen h-4/5 transition-all duration-100 absolute flex flex-col 
    mx-auto ease-in-out justify-around md:h-auto font-semibold 
    md:flex-row items-center text-2xl whitespace-nowrap`, [expanded]
  );

  return (
    <nav className={navClassName}>
      <div className="absolute flex font-semibold mx-auto w-full justify-center">
        <div className="md:hidden p-5 justify-center text-4xl whitespace-nowrap underline">
          {pageTitle}
        </div>
        <div className="md:hidden fixed top-3 right-3 z-50">
          <MobileNavButton expanded={expanded} setExpanded={handleSetExpanded} />
        </div>
      </div>
      <ul id="nav-bar" className={ulClassName}>
        <NavItem
          to="/"
          label="home"
          setExpanded={handleSetExpanded}
          pageTitle={pageTitle}
        />
        <NavItem
          to="/about"
          label="about"
          setExpanded={handleSetExpanded}
          pageTitle={pageTitle}
        />
        <NavItem
          to="/music"
          label="music"
          setExpanded={handleSetExpanded}
          pageTitle={pageTitle}
        />
        <NavItem
          to="/digitals"
          label="digitals"
          setExpanded={handleSetExpanded}
          pageTitle={pageTitle}
        />
      </ul>
    </nav>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
