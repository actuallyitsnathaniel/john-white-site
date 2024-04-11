import React from "react";
import { PropTypes } from "prop-types";

const Item = ({ soundURL, id }) => {
  return (
    <iframe
      src={soundURL}
      id={id}
      className="rounded-lg w-72 h-48"
      allow="clipboard-write"
      sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
    ></iframe>
  );
};

// TODO: figure out why suspense isn't working

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
