import { motion } from "framer-motion";

import { styles } from "../styles";
import { graduation } from "../assets";
import FloatingOrbs from "./FloatingOrbs";
import Tilt3D from "./Tilt3D";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto flex items-center overflow-hidden">
      <FloatingOrbs />

      <div
        className={`relative w-full max-w-7xl mx-auto ${styles.paddingX} pt-28 pb-16 z-10`}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-label text-sm sm:text-base tracking-widest uppercase mb-4"
            >
              Software Engineer · Full-Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className={styles.heroHeadText}
            >
              Hi, I'm <span className="accent-text">Garoma Makure</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className={`${styles.heroSubText} mt-4 max-w-xl mx-auto lg:mx-0`}
            >
              I build web & mobile applications that solve real problems —
              from government platforms at INSA to AI-powered mental health
              solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="btn-3d-base btn-green"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-3d-base btn-blue"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-theme-secondary text-sm"
            >
              <div className="flex items-center gap-2 card-surface px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to opportunities
              </div>
              <div className="card-surface px-4 py-2 rounded-full">📍 Ethiopia</div>
              <div className="card-surface px-4 py-2 rounded-full">🎓 Haramaya University</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.2, type: "spring" }}
            className="flex-shrink-0 relative"
          >
            <Tilt3D intensity={18}>
              <div className="relative animate-pulse-glow">
                <div className="absolute inset-0 accent-gradient rounded-3xl blur-2xl opacity-40 scale-95" />
                <div
                  className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[370px] rounded-3xl overflow-hidden border-2 border-green-500/30 shadow-glow"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <img
                    src={graduation}
                    alt="Garoma Makure"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 sm:-right-6 card-surface rounded-2xl px-5 py-3 text-center card-3d"
                  style={{ transform: "translateZ(60px)" }}
                >
                  <p className="text-green-500 font-bold text-2xl">3.81</p>
                  <p className="text-theme-secondary text-xs">CGPA</p>
                </motion.div>
              </div>
            </Tilt3D>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex z-10">
        <a href="#about" aria-label="Scroll to about">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-blue-500/60 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-green-500" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
