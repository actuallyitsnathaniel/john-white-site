import React from "react";
import Disc from "./disc";

const Discography = ({ children }) => {
  return (
    <>
      <div>
        <h2
          className={"flex text-6xl font-semibold italic justify-center p-10"}
        >
          singles/EPs
        </h2>
        <div className={"flex flex-wrap w-full justify-center"}>
          {React.Children.map(children, (child) => {
            if (!child.props.album) return React.cloneElement(child);
          })}
        </div>
      </div>

      <div>
        <h2
          className={"flex text-6xl font-semibold italic justify-center p-10"}
        >
          albums
        </h2>
        <div className={"flex flex-row flex-wrap w-full justify-center"}>
          {React.Children.map(children, (child) => {
            if (child.props.album) return React.cloneElement(child);
          })}
        </div>
      </div>
    </>
  );
};

Discography.Disc = Disc;

export default Discography;
