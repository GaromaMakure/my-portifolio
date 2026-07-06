import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  isMobile,
  source_code_link,
  source_code_links,
  private_reason,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.12, 0.5)}
    className="card-surface card-3d rounded-2xl p-5 w-full"
  >
    <div
      className={`relative w-full rounded-xl overflow-hidden bg-[var(--bg-deep)] ${
        isMobile ? "h-[320px] flex items-center justify-center" : "h-[210px]"
      }`}
    >
      {image ? (
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={image}
          alt={name}
          className={
            isMobile
              ? "h-full w-auto object-contain"
              : "w-full h-full object-cover object-top"
          }
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-theme-muted text-sm">
          Screenshot coming soon
        </div>
      )}

      <div className="absolute top-3 right-3 flex flex-col gap-2">
        {source_code_links ? (
          source_code_links.map((link, idx) => (
            <motion.button
              key={idx}
              type="button"
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(link.url, "_blank")}
              className="w-9 h-9 rounded-full btn-blue flex items-center justify-center text-white !px-0 !py-0 !shadow-none group relative z-10 hover:z-20"
              style={{ boxShadow: "0 4px 0 #1d4ed8" }}
              aria-label={`View ${link.name} on GitHub`}
            >
              <GitHubIcon />
              <div className="absolute top-1/2 right-12 -translate-y-1/2 bg-[var(--bg-card)] border border-[var(--border-light)] text-theme-primary text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                {link.name}
              </div>
            </motion.button>
          ))
        ) : source_code_link ? (
          <motion.button
            type="button"
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open(source_code_link, "_blank")}
            className="w-9 h-9 rounded-full btn-blue flex items-center justify-center text-white !px-0 !py-0 !shadow-none"
            style={{ boxShadow: "0 4px 0 #1d4ed8" }}
            aria-label="View on GitHub"
          >
            <GitHubIcon />
          </motion.button>
        ) : private_reason ? (
          <div
             className="w-9 h-9 rounded-full bg-slate-700/80 flex items-center justify-center text-white/70 !px-0 !py-0 !shadow-none cursor-help group relative z-10 hover:z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" /></svg>
            <div className="absolute top-1/2 right-12 -translate-y-1/2 bg-[var(--bg-card)] border border-[var(--border-light)] text-theme-primary text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg max-w-[150px] whitespace-normal text-left min-w-[120px]">
              {private_reason}
            </div>
          </div>
        ) : null}
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-theme-primary font-bold text-[18px] leading-snug">{name}</h3>
      <p className="mt-2 text-theme-secondary text-[13px] leading-relaxed">
        {description}
      </p>
    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={`${name}-${tag.name}`} className={`text-[12px] font-medium ${tag.color}`}>
          #{tag.name}
        </span>
      ))}
    </div>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-theme-secondary text-[16px] max-w-3xl leading-relaxed"
      >
        Real-world projects from my INSA internship, fellowship work, and
        award-winning NEURONET capstone — spanning web platforms and Flutter
        mobile apps.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
