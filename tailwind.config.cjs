/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--bg-card)",
        "black-100": "var(--bg-section)",
        "black-200": "var(--bg-deep)",
        "white-100": "var(--text-primary)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        green: { DEFAULT: "var(--green)", light: "var(--green-light)" },
        blue: { DEFAULT: "var(--blue)", light: "var(--blue-light)" },
      },
      boxShadow: {
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)",
        "3d": "var(--shadow-3d)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "var(--hero-gradient)",
        "card-gradient": "var(--card-gradient)",
      },
    },
  },
  plugins: [],
};
