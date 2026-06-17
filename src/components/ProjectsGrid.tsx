import React, { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, Sparkles, CreditCard, Languages, Brain, Flame, Zap, ArrowUpRight } from "lucide-react";

interface ProjectCard {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  accentColor: string;
  accentGlow: string;
  icon: React.ReactNode;
  status: string;
  links?: { label: string; url: string }[];
}

const PROJECTS: ProjectCard[] = [
  {
    title: "Silo",
    tagline: "Personal Finance Intelligence",
    description:
      "A personal finance and budgeting application featuring Plaid API integration for live bank syncing and custom AI logic for intelligent financial summaries. UI inspired by automotive software interfaces with real-time data visualization.",
    tags: ["React", "AI", "Plaid API", "Node.js"],
    accentColor: "emerald",
    accentGlow: "rgba(16,185,129,0.15)",
    icon: <CreditCard className="h-5 w-5" />,
    status: "In Development",
  },
  {
    title: "Clave",
    tagline: "Language Acquisition Platform",
    description:
      "A comprehensive Spanish-to-English language learning platform built with a robust backend and real-time database management. Features adaptive lesson sequencing, pronunciation tracking, and spaced repetition algorithms.",
    tags: ["Flutter", "Firebase", "Python", "Dart"],
    accentColor: "sky",
    accentGlow: "rgba(14,165,233,0.15)",
    icon: <Languages className="h-5 w-5" />,
    status: "Active",
  },
];

const accentMap: Record<string, { border: string; text: string; bg: string; dot: string; tagBg: string; tagText: string }> = {
  emerald: {
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    dot: "bg-emerald-500",
    tagBg: "bg-emerald-500/10",
    tagText: "text-emerald-400",
  },
  sky: {
    border: "border-sky-500/20",
    text: "text-sky-400",
    bg: "bg-sky-500/10",
    dot: "bg-sky-500",
    tagBg: "bg-sky-500/10",
    tagText: "text-sky-400",
  },
};

export default function ProjectsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-emerald-400" />
            </div>
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
              Software Engineering
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-zinc-100 tracking-tight">
            Featured Projects
          </h2>
          <p className="font-sans text-sm text-zinc-500 mt-3 max-w-xl">
            Production applications and active development — built from concept to deployment.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => {
            const colors = accentMap[project.accentColor];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-zinc-900/70 backdrop-blur-sm border border-zinc-800/80 rounded-2xl p-6 transition-all duration-300 hover:border-zinc-700/80 hover:-translate-y-1 overflow-hidden`}
                style={{
                  boxShadow:
                    hoveredIndex === index
                      ? `0 20px 60px -15px ${project.accentGlow}, 0 0 0 1px ${project.accentGlow}`
                      : "0 4px 20px -5px rgba(0,0,0,0.3)",
                }}
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.accentGlow.replace("0.15", "0.8")}, transparent)`,
                  }}
                />

                <div className="space-y-5">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center ${colors.text}`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-zinc-100 flex items-center gap-2">
                          {project.title}
                          <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                        </h3>
                        <p className={`font-mono text-[10px] ${colors.text} uppercase tracking-widest`}>
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${colors.dot} animate-pulse`} />
                      <span className="font-mono text-[10px] text-zinc-500">{project.status}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${colors.tagBg} ${colors.tagText} font-mono text-[10px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
