import React from "react";
import Disc from "./disc";

// Albums


// EPs


// Singles


function Discography() {
  return (
    <div>
      <div>
        <h2 className="flex text-6xl font-semibold italic justify-center p-10">
          Singles/EPs
        </h2>
        <div className="flex flex-wrap w-full justify-center">
          <Disc />
        </div>
      </div>

      <div>
        <h2 className="flex text-6xl font-semibold italic justify-center p-10">
          Albums
        </h2>
        <div className="flex flex-row flex-wrap w-full justify-center">
          <Disc />
        </div>
      </div>
    </div>
  );
}

Discography.Disc = Disc;

export default Discography;
