import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const TechIcon = ({ technology, index }) => (
  <Tilt options={{ max: 25, scale: 1.1, speed: 300 }}>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.05, 0.4)}
      className="flex flex-col items-center gap-2 group"
    >
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
        className="w-20 h-20 card-surface card-3d rounded-2xl flex items-center justify-center p-4"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </motion.div>
      <p className="text-theme-secondary text-[12px] font-medium">{technology.name}</p>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8">
      {technologies.map((technology, index) => (
        <TechIcon key={technology.name} technology={technology} index={index} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
