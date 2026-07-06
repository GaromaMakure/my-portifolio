import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <motion.span
        className="canvas-loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 700,
          marginTop: 35,
          letterSpacing: "0.5px",
        }}
      >
        {progress.toFixed(1)}%
      </motion.p>
    </Html>
  );
};

export default CanvasLoader;
