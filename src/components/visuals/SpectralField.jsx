import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function SpectralBar({ progress, index, horizontal = false, palette = "default" }) {
  const direction = index % 2 === 0 ? 1 : -1;
  const distance = 12 + (index % 4) * 6;
  const offset = useTransform(progress, [0, 0.5, 1], [direction * distance, 0, direction * -distance * 0.55]);
  const stretch = useTransform(progress, [0, 0.45, 1], [0.72 + (index % 3) * 0.08, 1.05, 0.84 + (index % 2) * 0.14]);
  const opacity = useTransform(progress, [0, 0.22, 0.85, 1], [0.5, 0.95, 0.9, 0.55]);
  const color =
    palette === "soft"
      ? index < 5
        ? "soft-pink"
        : index < 10
          ? "soft-blue"
          : "soft-violet"
      : index < 5
        ? "pink"
        : index < 10
          ? "violet"
          : "yellow";
  return <motion.i className={`spectral-bar ${color}`} style={horizontal ? { x: offset, scaleX: stretch, opacity } : { y: offset, scaleY: stretch, opacity }} />;
}

export default function SpectralField({ className = "", grid = false, footer = false }) {
  const fieldRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: fieldRef, offset: ["start end", "end start"] });
  // Soft pastel wash (pink / blue / violet) — matches card palette, no neon yellow.
  const palette = "soft";
  return (
    <div ref={fieldRef} className={`spectral-field ${grid ? "grid" : ""} ${footer ? "footer-spectrum" : ""} ${className}`}>
      <div className="spectral-vertical">
        {Array.from({ length: 15 }, (_, index) => (
          <SpectralBar progress={scrollYProgress} index={index} palette={palette} key={`v-${index}`} />
        ))}
      </div>
      {grid && <div className="spectral-horizontal">
        {Array.from({ length: 8 }, (_, index) => (
          <SpectralBar progress={scrollYProgress} index={index + 3} horizontal palette={palette} key={`h-${index}`} />
        ))}
      </div>}
    </div>
  );
}
