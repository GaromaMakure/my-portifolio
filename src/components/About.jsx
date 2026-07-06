import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{ max: 45, scale: 1, speed: 450 }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card bg-gradient-to-r from-green-400 to-pink-500"
    >
      <div className="bg-tertiary rounded-[20px] py-8 px-10 min-h-[280px] flex flex-col items-center justify-center text-center">
        <span className="text-5xl mb-4" role="img" aria-label={title}>
          {icon}
        </span>
        <h3 className="text-white text-[20px] font-bold">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <div className="mt-8 flex xl:flex-row flex-col gap-10 items-center">
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="flex-shrink-0"
        >
          <div className="w-[280px] h-[280px] rounded-2xl bg-gradient-to-br from-[#915EFF] to-[#2b1a5e] flex items-center justify-center border-2 border-dashed border-secondary/40">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/90">GM</span>
              <p className="text-secondary text-sm mt-2">Photo coming soon</p>
            </div>
          </div>
        </motion.div>

        <div className="flex-1">
          <motion.p
            variants={fadeIn("", "", 0.15, 1)}
            className="text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm Garoma Makure, a 23-year-old Software Engineer graduate from{" "}
            {education.university}. I specialize in building full-stack web
            applications, mobile apps, and backend systems using Java, Python,
            PHP, React, Next.js, Spring Boot, and Flutter.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.25, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            During my internship at INSA, I developed multiple software solutions
            with a professional team. My final year capstone — an AI-driven
            adolescent mental health detection and support system (web + two mobile
            apps) — earned an A+ grade. I also completed INSA's cybersecurity
            summer camp in 2025.
          </motion.p>

          <motion.div
            variants={fadeIn("", "", 0.35, 1)}
            className="mt-6 flex flex-wrap gap-4"
          >
            <div className="bg-tertiary px-5 py-3 rounded-xl">
              <p className="text-secondary text-xs">Degree</p>
              <p className="text-white font-semibold">{education.degree}</p>
            </div>
            <div className="bg-tertiary px-5 py-3 rounded-xl">
              <p className="text-secondary text-xs">CGPA</p>
              <p className="text-white font-semibold">{education.cgpa}</p>
            </div>
            <div className="bg-tertiary px-5 py-3 rounded-xl">
              <p className="text-secondary text-xs">Exit Exam</p>
              <p className="text-white font-semibold">{education.exitExam}</p>
            </div>
            <div className="bg-tertiary px-5 py-3 rounded-xl">
              <p className="text-secondary text-xs">Graduated</p>
              <p className="text-white font-semibold">{education.graduationDate}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
