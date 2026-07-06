import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services, education } from "../constants";
import { graduation } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt3D from "./Tilt3D";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt options={{ max: 20, scale: 1.05, speed: 400 }}>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.5)}
      whileHover={{ y: -8 }}
      className="card-surface card-3d rounded-2xl p-8 flex flex-col items-center text-center xs:w-[250px] w-full"
    >
      <motion.span
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="text-4xl mb-4 inline-block"
        style={{ transformStyle: "preserve-3d" }}
        role="img"
        aria-label={title}
      >
        {icon}
      </motion.span>
      <h3 className="text-theme-primary text-[18px] font-bold">{title}</h3>
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

      <div className="mt-10 flex xl:flex-row flex-col gap-12 items-center">
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.6)}
          className="flex-shrink-0"
        >
          <Tilt3D intensity={12}>
            <div className="relative">
              <div className="absolute inset-0 accent-gradient rounded-2xl blur-xl opacity-25" />
              <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-2xl overflow-hidden border-2 border-blue-500/20 shadow-card animate-float">
                <img
                  src={graduation}
                  alt="Garoma Makure"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </Tilt3D>
        </motion.div>

        <div className="flex-1">
          <motion.p
            variants={fadeIn("", "", 0.15, 1)}
            className="text-theme-secondary text-[16px] max-w-3xl leading-[28px]"
          >
            I'm Garoma Makure, a 23-year-old Software Engineer graduate from{" "}
            <span className="text-theme-primary font-semibold">{education.university}</span>.
            I specialize in building full-stack web applications, mobile apps, and
            backend systems using Java, Python, PHP, React, Next.js, Spring Boot,
            and Flutter.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.25, 1)}
            className="mt-4 text-theme-secondary text-[16px] max-w-3xl leading-[28px]"
          >
            During my internship at INSA, I developed multiple software solutions
            with a professional team. My final year capstone — NEURONET, an
            AI-driven adolescent mental health system (web + two Flutter apps) —
            earned an A+ grade. I also completed INSA's cybersecurity summer camp
            in 2025.
          </motion.p>

          <motion.div
            variants={fadeIn("", "", 0.35, 1)}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { label: "Degree", value: education.degree },
              { label: "CGPA", value: education.cgpa },
              { label: "Exit Exam", value: education.exitExam },
              { label: "Graduated", value: education.graduationDate },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="card-surface card-3d rounded-xl px-4 py-3"
              >
                <p className="text-theme-muted text-xs">{item.label}</p>
                <p className="text-theme-primary font-semibold text-sm mt-1">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
