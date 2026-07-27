import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { motionEase } from "../ui/Reveal";
import { profile } from "../../data/portfolio";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="nav-wrap"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: motionEase }}
    >
      <nav className="nav" aria-label="Primary">
        <a href="#top" className="logo" onClick={closeMenu}>
          <span>✦</span> {profile.name}
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button className="nav-close" onClick={closeMenu} aria-label="Close navigation">
            <X />
          </button>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <Button className="nav-mobile-cta" href={`mailto:${profile.email}`}>
            Let’s talk
          </Button>
        </div>
        <Button href={`mailto:${profile.email}`}>Let’s talk</Button>
        <button className="menu" onClick={() => setMenuOpen(true)} aria-label="Open navigation">
          <Menu />
        </button>
      </nav>
    </motion.header>
  );
}
