import { motion } from "framer-motion";

const orbs = [
  { size: 320, color: "rgba(34, 197, 94, 0.12)", x: "10%", y: "15%", delay: 0 },
  { size: 260, color: "rgba(59, 130, 246, 0.14)", x: "75%", y: "10%", delay: 1 },
  { size: 200, color: "rgba(99, 102, 241, 0.1)", x: "60%", y: "60%", delay: 2 },
  { size: 180, color: "rgba(16, 185, 129, 0.1)", x: "20%", y: "70%", delay: 0.5 },
];

const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {orbs.map((orb, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full blur-3xl"
        style={{
          width: orb.size,
          height: orb.size,
          left: orb.x,
          top: orb.y,
          background: orb.color,
        }}
        animate={{
          y: [0, -30, 0, 20, 0],
          x: [0, 15, -10, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: orb.delay,
        }}
      />
    ))}
  </div>
);

export default FloatingOrbs;
