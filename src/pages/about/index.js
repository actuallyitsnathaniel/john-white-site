import React from "react";
import oneSheet from '../../assets/images/john_white_one_sheet.png'

// TODO: take copy from one-sheet and convert to sweet, sweet page.
// TODO: carousel-type component with all images shared from daniel to compliment copy
// TODO: implement resizeable 'pinch-to-zoom' for one sheet
function About() {
  return (
    <div className="flex flex-wrap md:pt-14 justify-center items-center text-4xl text-white h-2/3 md:h-fit">
      <img
        className="flex justify-center md:pt-8 px-12 mb-[5%] md:w-[66%]"
        alt="john-white-one-sheet"
        aria-label="john-white-one-sheet"
        src={oneSheet}
    />
      </div>
  );
}

export default About;
