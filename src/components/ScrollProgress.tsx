import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        transformOrigin: "0%",
        background: "linear-gradient(90deg, #3A8020, #6CC04A, #9EE07A)",
        zIndex: 99998,
        boxShadow: "0 0 10px rgba(108,192,74,0.7)",
        pointerEvents: "none",
      }}
    />
  );
}
