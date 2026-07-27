import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  href,
  children,
  variant = "primary",
  download = false,
  target,
  rel,
  className = "",
}) {
  const external = target === "_blank";
  return (
    <motion.a
      href={href}
      download={download || undefined}
      target={target}
      rel={rel || (external ? "noreferrer" : undefined)}
      className={`btn btn-${variant} ${className}`.trim()}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>{children}</span>
      <ArrowUpRight size={15} />
    </motion.a>
  );
}
