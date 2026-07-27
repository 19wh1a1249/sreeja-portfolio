import { motion } from "framer-motion";

export const motionEase = [0.22, 1, 0.36, 1];

export default function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: motionEase }}
    >
      {children}
    </motion.div>
  );
}

