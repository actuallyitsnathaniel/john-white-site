import Disc from "./disc";

import React, { JSX, useState } from "react";
import { motion } from "motion/react";
// import { localizedToday } from "../../util/utils";

const Discography = ({ children }: { children: JSX.Element[] }) => {
  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 },
    },
    hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const [expanded, setExpanded] = useState(-1);
  return (
    <div className="flex flex-col md:px-28">
      <div>
        <h2 className={"flex text-6xl  italic justify-center p-5"}>
          singles / EPs
        </h2>
        <motion.div
          className={"flex flex-wrap w-full justify-center"}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15,
              },
            },
            hidden: {},
          }}
        >
          {React.Children.map(children, (child, i) => {
            if (
              child.props.releaseType === "single" ||
              child.props.releaseType === "ep"
            )
              return (
                <motion.div
                  key={`single-ep-${i}`}
                  variants={itemVariants}
                >
                  {React.cloneElement(child, { expanded, setExpanded, i })}
                </motion.div>
              );
          })}
        </motion.div>
      </div>
      <div>
        <h2 className={"flex text-6xl  italic justify-center p-5"}>albums</h2>
        <motion.div
          className={"flex flex-row flex-wrap w-full justify-center"}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15,
              },
            },
            hidden: {},
          }}
        >
          {React.Children.map(children, (child, i) => {
            if (child.props.releaseType === "album")
              return (
                <motion.div
                  key={`album-${i}`}
                  variants={itemVariants}
                >
                  {React.cloneElement(child, { expanded, setExpanded, i })}
                </motion.div>
              );
          })}
        </motion.div>
      </div>
      <div id="appears-on">
        <h2 className={"flex text-6xl font-semibold italic justify-center p-5"}>
          appears on
        </h2>
        <motion.div
          className={"flex flex-row flex-wrap w-full justify-center"}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15,
              },
            },
            hidden: {},
          }}
        >
          {React.Children.map(children, (child, i) => {
            if (child.props.releaseType === "appearance")
              return (
                <motion.div
                  key={`appearance-${i}`}
                  variants={itemVariants}
                >
                  {React.cloneElement(child, { expanded, setExpanded, i })}
                </motion.div>
              );
          })}
        </motion.div>
      </div>
    </div>
  );
};

Discography.Disc = Disc;

export default Discography;
