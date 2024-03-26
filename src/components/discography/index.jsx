import React, { useState } from "react";
import { PropTypes } from "prop-types";

import Disc from "./disc";

const Discography = ({ children }) => {
  const [expanded, setExpanded] = useState(-1);
  return (
    <div className="flex flex-col md:px-28 pb-10 p-5">
      <div id="albums">
        <h2 className={"flex text-6xl font-semibold italic justify-center p-5"}>
          albums
        </h2>
        <div className={"flex flex-row flex-wrap w-full justify-center"}>
          {React.Children.map(children, (child, i) => {
            if (child.props.album)
              return React.cloneElement(child, { expanded, setExpanded, i });
          })}
        </div>
      </div>
      <div id="singles-eps">
        <h2 className={"flex text-6xl font-semibold italic justify-center p-5"}>
          singles/EPs
        </h2>
        <div className={"flex flex-wrap w-full justify-center"}>
          {React.Children.map(children, (child, i) => {
            if (!child.props.album && !child.props.appearsOn)
              return React.cloneElement(child, { expanded, setExpanded, i });
          })}
        </div>
      </div>
      <div id="appears-on">
        <h2 className={"flex text-6xl font-semibold italic justify-center p-5"}>
          appears on
        </h2>
        <div className={"flex flex-row flex-wrap w-full justify-center"}>
          {React.Children.map(children, (child, i) => {
            if (child.props.appearsOn)
              return React.cloneElement(child, { expanded, setExpanded, i });
          })}
        </div>
      </div>
    </div>
  );
};

Discography.propTypes = {
  children: PropTypes.array,
};

Discography.Disc = Disc;

export default Discography;
