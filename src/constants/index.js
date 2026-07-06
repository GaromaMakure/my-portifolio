import {
  insaPersonalityTesting,
  insaIntranet,
  focusHaramaya,
  mentalHealthAi,
  neuronetAdolescent,
  neuronetGuardian,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full-Stack Web Developer", icon: "🌐" },
  { title: "Mobile App Developer", icon: "📱" },
  { title: "Backend Developer", icon: "⚙️" },
  { title: "Cybersecurity Enthusiast", icon: "🔐" },
];

const technologies = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "INSA (Information Network Security Administration)",
    icon: "INSA",
    iconBg: "#1a4d2e",
    date: "4th Year Internship",
    points: [
      "Built the INSA Personality Testing Platform and Intranet Communication Platform with a professional development team.",
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
    name: "INSA Personality Testing Platform",
    description:
      "A comprehensive personality testing platform for organizations to enhance team dynamics, improve hiring decisions, and boost organizational performance through data-driven personality insights.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "go", color: "green-text-gradient" },
      { name: "full-stack", color: "pink-text-gradient" },
    ],
    image: insaPersonalityTesting,
    isMobile: false,
    source_code_link: "https://github.com/GaromaMakure",
  },
  {
    name: "INSA Intranet Communication Platform",
    description:
      "An internal communication platform for INSA featuring news, announcements, events, document management, and feedback — built to streamline organizational communication.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "spring boot", color: "green-text-gradient" },
      { name: "full-stack", color: "pink-text-gradient" },
    ],
    image: insaIntranet,
    isMobile: false,
    source_code_link: "https://github.com/GaromaMakure",
  },
  {
    name: "Focus Haramaya Fellowship Website",
    description:
      "A modern fellowship website for Focus Haramaya at Haramaya University featuring events, devotionals, sermons, gallery, and donation.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "spring boot", color: "pink-text-gradient" },
    ],
    image: focusHaramaya,
    isMobile: false,
    source_code_link: "https://github.com/GaromaMakure",
  },
  {
    name: "NEURONET — Web Platform",
    description:
      "AI-powered mental health web platform (A+ capstone) with Next.js frontend and FastAPI backend — enabling early risk detection and secure counselor support for adolescents.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "ai/ml", color: "pink-text-gradient" },
    ],
    image: mentalHealthAi,
    isMobile: false,
    source_code_link: "https://github.com/GaromaMakure",
  },
  {
    name: "NEURONET — Adolescent App",
    description:
      "Flutter mobile app for adolescents — a safe, supportive space for mental health check-ins, mood tracking, and AI-guided emotional wellness with a beautiful purple-themed UI.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "mobile", color: "green-text-gradient" },
      { name: "mental health", color: "pink-text-gradient" },
    ],
    image: neuronetAdolescent,
    isMobile: true,
    source_code_link: "https://github.com/GaromaMakure",
  },
  {
    name: "NEURONET — Guardian App",
    description:
      "Flutter guardian portal app giving parents secure oversight of their teen's mental health journey — encrypted, HIPAA-compliant access with real-time alerts and support tools.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "mobile", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    image: neuronetGuardian,
    isMobile: true,
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
