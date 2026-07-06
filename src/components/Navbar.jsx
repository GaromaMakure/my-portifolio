import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-10 h-10 rounded-xl card-surface flex items-center justify-center text-lg"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </motion.button>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 flex-shrink-0"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="w-9 h-9 accent-gradient rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{ transformStyle: "preserve-3d" }}
          >
            GM
          </motion.div>
          <p className="text-theme-primary text-[16px] sm:text-[18px] font-bold">
            Garoma
            <span className="hidden sm:inline text-theme-secondary font-medium">
              {" "}
              | Software Engineer
            </span>
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row items-center gap-8">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              whileHover={{ y: -2 }}
              className={`${
                active === nav.title ? "text-green-500" : "text-theme-secondary"
              } hover:text-blue-500 text-[16px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </motion.li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button type="button" onClick={() => setToggle(!toggle)} aria-label="Menu">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-7 h-7 object-contain dark:invert-0 invert"
            />
          </button>
        </div>
      </div>

      {toggle && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass-nav border-t border-[var(--border)] p-6"
        >
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-medium text-[16px] ${
                  active === nav.title ? "text-green-500" : "text-theme-secondary"
                }`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
