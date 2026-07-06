import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const isTextIcon = typeof experience.icon === "string";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
        transition: "transform 0.3s ease",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {isTextIcon ? (
            <span className="text-white font-bold text-[14px]">
              {experience.icon}
            </span>
          ) : (
            <img
              src={experience.icon}
              alt={experience.company_name || "company logo"}
              className="w-[60%] h-[60%] object-contain"
            />
          )}
        </div>
      }
    >
      <motion.div variants={fadeIn("up", "spring", 0.2, 0.6)}>
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <motion.li
              key={`experience-point-${index}`}
              variants={fadeIn("up", "spring", index * 0.1, 0.6)}
              className="text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed hover:text-white transition"
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
