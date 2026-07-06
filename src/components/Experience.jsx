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

const ExperienceCard = ({ experience, index }) => {
  const isTextIcon = typeof experience.icon === "string";

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <VerticalTimelineElement
        contentStyle={{
          background: "var(--bg-card)",
          color: "var(--text-primary)",
          borderRadius: "16px",
          boxShadow: "var(--shadow-card)",
          border: "1px solid var(--border)",
        }}
        contentArrowStyle={{ borderRight: "7px solid var(--bg-card)" }}
        date={experience.date}
        dateClassName="!text-theme-secondary !opacity-100"
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            {isTextIcon ? (
              <span className="text-white font-bold text-[13px]">{experience.icon}</span>
            ) : (
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain"
              />
            )}
          </div>
        }
      >
        <h3 className="text-theme-primary text-[20px] font-bold">{experience.title}</h3>
        <p className="text-green-500 dark:text-green-400 text-[15px] font-semibold mt-1">
          {experience.company_name}
        </p>
        <ul className="mt-4 list-disc ml-5 space-y-2">
          {experience.points.map((point, i) => (
            <li key={i} className="text-theme-secondary text-[14px] leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <div className="text-center">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor="var(--green)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
