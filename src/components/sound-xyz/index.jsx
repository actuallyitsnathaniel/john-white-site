import React, { useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";

const Item = ({ soundURL, id }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef(null);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(iframeRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500 bg-opacity-20 to-black rounded-lg w-72 h-48" />
      <iframe
        ref={iframeRef}
        src={isLoaded ? soundURL : ""}
        id={id}
        className="rounded-lg w-72 h-48 bg-[url('/src/assets/images/icons/loading.svg')] bg-no-repeat bg-center relative"
        allow="clipboard-write"
        sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
};

// TODO: figure out why suspense isn't working ?
// https://arc.net/l/quote/yurqdzxu
// const Loading = () => {
//   return <h2>⏲ Loading...</h2>;
// };

const SoundXYZGallery = ({ children }) => {
  return (
    <div id="sound-xyz-releases" className="p-5 md:px-28">
      <h1 className="p-5">digital collectibles</h1>
      <div
        className="flex flex-wrap justify-center mx-auto w-fit 
               p-5 bg-gray-500 rounded-lg bg-opacity-25 content-between gap-10"
      >
        {React.Children.map(children, (child, i) => {
          console.log(child);
          return React.cloneElement(child, { i });
        })}
      </div>
    </div>
  );
};

Item.propTypes = {
  soundURL: PropTypes.string,
  id: PropTypes.string,
};

SoundXYZGallery.propTypes = {
  children: PropTypes.array,
};

SoundXYZGallery.Item = Item;

export default SoundXYZGallery;
