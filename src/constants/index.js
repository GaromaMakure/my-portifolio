export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: "🌐",
  },
  {
    title: "Mobile App Developer",
    icon: "📱",
  },
  {
    title: "Backend Developer",
    icon: "⚙️",
  },
  {
    title: "Cybersecurity Enthusiast",
    icon: "🔐",
  },
];

const technologies = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "INSA (Information Network Security Administration)",
    icon: "INSA",
    iconBg: "#1a4d2e",
    date: "4th Year Internship",
    points: [
      "Built multiple software solutions collaboratively with a professional development team.",
      "Delivered real-world applications addressing organizational and security-related requirements.",
      "Gained hands-on experience in full software development lifecycle within a government tech environment.",
      "Strengthened teamwork, communication, and problem-solving skills on production-oriented projects.",
    ],
  },
  {
    title: "Cybersecurity Summer Camp Student",
    company_name: "INSA Summer Camp",
    icon: "INSA",
    iconBg: "#0f3460",
    date: "2025",
    points: [
      "Participated in INSA's cybersecurity summer camp after completing the internship period.",
      "Studied core cybersecurity concepts, threat awareness, and secure system practices.",
      "Applied security-minded thinking to software design and development workflows.",
    ],
  },
  {
    title: "Final Year Project — Lead Developer",
    company_name: "Haramaya University",
    icon: "HU",
    iconBg: "#533483",
    date: "2025 - 2026",
    points: [
      "Led development of AI-Driven Adolescent Mental Health Detection and Support system.",
      "Built a web platform and two mobile applications as an integrated solution.",
      "Achieved A+ grade for the final year project with strong academic and technical outcomes.",
    ],
  },
];

const projects = [
  {
    name: "AI Mental Health Detection & Support",
    description:
      "Final year capstone project featuring a web platform and two mobile applications for AI-driven adolescent mental health detection, monitoring, and support. Awarded A+ at Haramaya University.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "ai/ml", color: "pink-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/GaromaMakure",
  },
  {
    name: "INSA Internship Solutions",
    description:
      "Collection of software solutions developed during internship at INSA, built collaboratively with the team to address real operational and technical challenges.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "spring boot", color: "green-text-gradient" },
      { name: "team project", color: "pink-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/GaromaMakure",
  },
  {
    name: "Web & Mobile Applications",
    description:
      "Multiple websites and mobile applications built across academic and personal projects using React, Next.js, Flutter, PHP, and Spring Boot.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "flutter", color: "green-text-gradient" },
      { name: "full-stack", color: "pink-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/GaromaMakure",
  },
];

const education = {
  degree: "BSc in Software Engineering",
  university: "Haramaya University",
  graduationDate: "June 27, 2026",
  cgpa: "3.81",
  exitExam: "78.75%",
};

export { services, technologies, experiences, projects, education };
