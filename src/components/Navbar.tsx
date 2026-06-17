import React from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL hash without breaking history or causing reloads
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-zinc-950/70 backdrop-blur-md border-b border-zinc-900/60"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left Side: Logo */}
        <a
          href="/"
          className="font-display font-bold text-sm tracking-widest text-zinc-100 hover:text-emerald-400 transition-colors"
        >
          C.LOPEZ
        </a>

        {/* Right Side: Links */}
        <nav className="flex items-center gap-6 md:gap-8">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="font-mono text-[11px] text-zinc-400 hover:text-emerald-400 uppercase tracking-wider transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="font-mono text-[11px] text-zinc-400 hover:text-emerald-400 uppercase tracking-wider transition-colors font-medium"
          >
            Projects
          </a>
          <a
            href="#infrastructure"
            onClick={(e) => handleScroll(e, "infrastructure")}
            className="font-mono text-[11px] text-zinc-400 hover:text-emerald-400 uppercase tracking-wider transition-colors font-medium"
          >
            Infrastructure
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
