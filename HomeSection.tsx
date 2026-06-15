import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, AlertCircle, Sparkles, Terminal, Code, Cpu, Database, Server, Globe } from "lucide-react";
import { ContactMessage } from "../types";

interface HomeSectionProps {
  onContactMessageSubmit: (msg: Omit<ContactMessage, "id" | "createdAt">) => void;
  projectsCount: number;
  blogsCount: number;
}

export default function HomeSection({ onContactMessageSubmit, projectsCount, blogsCount }: HomeSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">("idle");
  const [systemLog, setSystemLog] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setSendStatus("idle");
    
    // Add real-time log simulation info
    setSystemLog((prev) => [
      ...prev,
      `[sys-io] Initiating contact transmission packet...`,
      `[dns] Resolving nexus-mailbox routing table...`,
    ]);

    setTimeout(() => {
      onContactMessageSubmit(formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSending(false);
      setSendStatus("success");
      setSystemLog((prev) => [
        ...prev,
        `[sys-io] Success: 201 Written to visitor db`,
        `[sys-io] Message packet sealed with transport key SHA-256`,
      ]);
      
      // Auto clear alert status after some time
      setTimeout(() => {
        setSendStatus("idle");
        setSystemLog([]);
      }, 6000);
    }, 1500);
  };

  const skills = [
    { name: "TypeScript / React", category: "Frontend", level: 95, icon: Code },
    { name: "Go / Systems", category: "Core Backend", level: 90, icon: Server },
    { name: "Rust / Embedded", category: "Systems", level: 85, icon: Cpu },
    { name: "PostgreSQL & Redis", category: "Databases", level: 88, icon: Database },
    { name: "Docker & Kubernetes", category: "Platform Dev", level: 80, icon: Globe },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 space-y-8 max-w-7xl mx-auto"
    >
      {/* Hero Intro Bento-like Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Profile Card Summary - 7 columns wide */}
        <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Visual Profile Avatar made using HTML element styles */}
            <div className="relative shrink-0">
              <div className="h-20 w-20 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center relative overflow-hidden shadow-xl">
                <Terminal className="h-9 w-9 text-emerald-400" />
                <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-emerald-400 border-2 border-zinc-950 animate-pulse"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs text-emerald-400 tracking-wider uppercase font-semibold">
                  Lab Directory Index
                </span>
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                <span className="text-[10px] bg-zinc-800 text-zinc-400 border border-zinc-700/60 font-mono px-1.5 py-0.5 rounded">
                  v2.4.9
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-zinc-100 mt-1">
                Christian Lopez Robles
              </h3>
              <p className="font-sans text-xs text-zinc-400 font-medium">
                Core Systems Architect & Full-Stack Engineer
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p className="font-sans text-sm text-zinc-300 leading-relaxed">
              Welcome to my digital workshop room. I design performant distributed software, compile lightweight binaries to edge microcontrollers, and construct single-page responsive user hubs. This site showcases live code lab status modules and architectural technical diaries built on strict correctness policies.
            </p>
            
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-zinc-500">Contact Node:</span>
              <div className="flex gap-2">
                <a
                  href="mailto:christianlopezrobles34@gmail.com"
                  className="p-1 px-2 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 rounded border border-zinc-800 hover:border-zinc-700 transition flex items-center gap-1.5 font-mono text-[10px]"
                >
                  <Mail className="h-3 w-3" /> Email
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="p-1 px-2 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 rounded border border-zinc-800 hover:border-zinc-700 transition flex items-center gap-1.5 font-mono text-[10px]"
                >
                  <Github className="h-3 w-3" /> GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="p-1 px-2 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 rounded border border-zinc-800 hover:border-zinc-700 transition flex items-center gap-1.5 font-mono text-[10px]"
                >
                  <Linkedin className="h-3 w-3" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Metrics Panel */}
          <div className="mt-6 pt-6 border-t border-zinc-800 grid grid-cols-3 gap-4">
            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-850">
              <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Showcases</p>
              <h4 className="font-display font-semibold text-lg text-emerald-400 mt-0.5 tabular-nums">
                {projectsCount}
              </h4>
            </div>
            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-850">
              <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Tech Reports</p>
              <h4 className="font-display font-semibold text-lg text-sky-400 mt-0.5 tabular-nums">
                {blogsCount}
              </h4>
            </div>
            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-850">
              <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Status Node</p>
              <h4 className="font-display font-semibold text-xs text-indigo-400 mt-2 truncate">
                Active Core
              </h4>
            </div>
          </div>
        </div>

        {/* Quick Stats & Core Core Technologies - 5 columns wide */}
        <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h4 className="font-display font-semibold text-sm text-zinc-200 uppercase tracking-widest flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              Core Competence Radar
            </h4>
            
            <div className="space-y-3.5">
              {skills.map((skill) => {
                const SkillIcon = skill.icon;
                return (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2 text-zinc-300 font-medium">
                        <SkillIcon className="h-3.5 w-3.5 text-zinc-400" />
                        <span>{skill.name}</span>
                      </div>
                      <span className="font-mono text-[10px] text-emerald-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden border border-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-emerald-400 h-full rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-850 bg-zinc-950/40 p-3 rounded-xl border border-zinc-850/50">
            <h5 className="font-mono text-[10px] text-zinc-500 uppercase font-semibold">Active Lab Context</h5>
            <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
              Focused on compiler targets, memory-safe abstractions in Rust, and client-side data rendering virtualization with React + Vite.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Timeline Grid & Interactive Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Timeline - 6 columns wide */}
        <div className="lg:col-span-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h4 className="font-display font-semibold text-sm text-zinc-200 uppercase tracking-widest flex items-center gap-2 mb-6">
            <Terminal className="h-4 w-4 text-indigo-400" />
            Milestone Logs
          </h4>

          <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-800">
            <div className="relative pl-8">
              <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-zinc-900 shadow"></span>
              <span className="font-mono text-[10px] text-emerald-400 font-semibold">2025 - Present</span>
              <h5 className="font-display font-medium text-sm text-zinc-100 mt-1">
                Core Systems Integration Lead
              </h5>
              <p className="font-sans text-xs text-zinc-400 mt-1 leading-relaxed">
                Refining asynchronous processing queues, managing high-throughput RPC routing configurations, and implementing high-precision React data visualizations and dashboards.
              </p>
            </div>

            <div className="relative pl-8">
              <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full bg-indigo-500 border-2 border-zinc-900 shadow"></span>
              <span className="font-mono text-[10px] text-indigo-400 font-semibold">2022 - 2025</span>
              <h5 className="font-display font-medium text-sm text-zinc-100 mt-1">
                Embedded Logic Firmware Engineer
              </h5>
              <p className="font-sans text-xs text-zinc-400 mt-1 leading-relaxed">
                Created telemetry-collection adapters with constrained ESP32 hardware using Espressif Rust, saving 40% memory usage through raw byte deserialization filters.
              </p>
            </div>

            <div className="relative pl-8">
              <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full bg-zinc-700 border-2 border-zinc-900 shadow"></span>
              <span className="font-mono text-[10px] text-zinc-500 font-semibold">2020 - 2022</span>
              <h5 className="font-display font-medium text-sm text-zinc-100 mt-1">
                Software & Client-Side Systems Architect
              </h5>
              <p className="font-sans text-xs text-zinc-400 mt-1 leading-relaxed">
                Conceptualized database routing strategies for small-enterprise CRM applications, ensuring perfect synchronization using client-side localStorage and cached Service Worker logs.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Contact Transmission Form - 6 columns wide */}
        <div className="lg:col-span-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h4 className="font-display font-semibold text-sm text-zinc-200 uppercase tracking-widest flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-sky-400" />
              Contact Transmission
            </h4>
            <p className="text-xs text-zinc-400 mb-6">
              Transmit system requests, project pitches, or hello telemetry to my local inbox.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="font-mono text-[10px] text-zinc-500 uppercase tracking-wide">
                    Sender Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. Dr. Ada Lovelace"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 placeholder-zinc-700 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="font-mono text-[10px] text-zinc-500 uppercase tracking-wide">
                    Email Core Coordinate *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. ada@analytical-node.net"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 placeholder-zinc-700 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="font-mono text-[10px] text-zinc-500 uppercase tracking-wide">
                  Topic Subject Header
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Distributed Consensus Research Partnership"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 placeholder-zinc-700 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="font-mono text-[10px] text-zinc-500 uppercase tracking-wide">
                  Body Payload Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Markdown or standard message packet content goes here..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 placeholder-zinc-700 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-sans"
                />
              </div>

              {/* Real-time Simulated Output Log Console */}
              {systemLog.length > 0 && (
                <div className="bg-zinc-950 border border-zinc-850 p-2.5 rounded-lg">
                  <p className="font-mono text-[9px] text-zinc-500 mb-1 flex items-center gap-1.5">
                    <Terminal className="h-3 w-3 text-emerald-400" />
                    Channel Logs
                  </p>
                  <div className="space-y-0.5 font-mono text-[10px]">
                    {systemLog.map((log, i) => (
                      <p key={i} className={log.includes("Success") ? "text-emerald-400" : "text-zinc-500"}>
                        {log}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSending}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all font-sans font-semibold text-xs py-2.5 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isSending ? (
                  <>
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-zinc-950 border-t-transparent animate-spin"></span>
                    <span>Modulating Signal...</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4" />
                    <span>Send Packet</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Feedback alerts */}
          {sendStatus === "success" && (
            <div className="mt-4 p-3 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>Transmission complete! Data persisted to local visitor storage index safely.</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
