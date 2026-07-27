import { motion } from "framer-motion";
import { motionEase } from "./Reveal";

const effects = {
  rise: { initial: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } },
  blur: { initial: { opacity: 0, y: 35, filter: "blur(18px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } },
  slide: { initial: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: .72 }, visible: { opacity: 1, scale: 1 } },
  rotate: { initial: { opacity: 0, y: 60, rotate: -4 }, visible: { opacity: 1, y: 0, rotate: 0 } },
  spring: { initial: { opacity: 0, y: 90, scale: .9 }, visible: { opacity: 1, y: 0, scale: 1 } },
};

export default function AnimatedHeading({ children, effect = "rise", className = "" }) {
  const animation = effects[effect] || effects.rise;
  return (
    <motion.h2
      className={className}
      initial={animation.initial}
      whileInView={animation.visible}
      viewport={{ once: true, margin: "-12%" }}
      transition={effect === "spring"
        ? { type: "spring", stiffness: 90, damping: 16 }
        : { duration: .9, ease: motionEase }}
    >
      {children}
    </motion.h2>
  );
}

