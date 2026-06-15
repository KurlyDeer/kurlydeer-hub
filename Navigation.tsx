import React from "react";
import { User, Code2, BookOpen, Terminal, Layers, Cpu, Code } from "lucide-react";

interface NavigationProps {
  activeTab: "home" | "projects" | "blog" | "messages";
  setActiveTab: (tab: "home" | "projects" | "blog" | "messages") => void;
  messageCount: number;
}

export default function Navigation({ activeTab, setActiveTab, messageCount }: NavigationProps) {
  return (
    <nav className="w-full lg:w-64 bg-zinc-950 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-between p-4 shrink-0 transition-all duration-300">
      <div className="flex flex-col gap-8">
        {/* Hub Header Branding */}
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="h-9 w-9 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/30">
            <Cpu className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="font-display font-medium text-sm text-zinc-100 tracking-wide uppercase">
              Christian Lopez
            </h1>
            <p className="font-mono text-[9px] text-zinc-500 font-semibold tracking-wider uppercase">
              Portfolio & Hub
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
          {/* Home Tab */}
          <button
            id="nav-tab-home"
            onClick={() => setActiveTab("home")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg font-sans text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 ${
              activeTab === "home"
                ? "bg-zinc-850 text-emerald-400 border border-zinc-750"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border border-transparent"
            }`}
          >
            <User className={`h-4 w-4 ${activeTab === "home" ? "text-emerald-400" : "text-zinc-400"}`} />
            <span>Profile & Contact</span>
          </button>

          {/* Projects Tab */}
          <button
            id="nav-tab-projects"
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg font-sans text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 ${
              activeTab === "projects"
                ? "bg-zinc-850 text-emerald-400 border border-zinc-750"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border border-transparent"
            }`}
          >
            <Code2 className={`h-4 w-4 ${activeTab === "projects" ? "text-emerald-400" : "text-zinc-400"}`} />
            <span>Project Showcase</span>
          </button>

          {/* Blog Tab */}
          <button
            id="nav-tab-blog"
            onClick={() => setActiveTab("blog")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg font-sans text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 ${
              activeTab === "blog"
                ? "bg-zinc-850 text-emerald-400 border border-zinc-750"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border border-transparent"
            }`}
          >
            <BookOpen className={`h-4 w-4 ${activeTab === "blog" ? "text-emerald-400" : "text-zinc-400"}`} />
            <span>Technical Blog</span>
          </button>

          {/* Messages Tab (Contact Inbox) */}
          <button
            id="nav-tab-messages"
            onClick={() => setActiveTab("messages")}
            className={`flex items-center justify-between gap-3 px-3 py-2 rounded-lg font-sans text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 relative ${
              activeTab === "messages"
                ? "bg-zinc-850 text-emerald-400 border border-zinc-750"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border border-transparent"
            }`}
          >
            <div className="flex items-center gap-3">
              <Terminal className={`h-4 w-4 ${activeTab === "messages" ? "text-emerald-400" : "text-zinc-400"}`} />
              <span>Visitor Messages</span>
            </div>
            {messageCount > 0 && (
              <span className="flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-emerald-500 font-mono text-[9px] text-zinc-950 font-bold">
                {messageCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Footer Branding & Environment info */}
      <div className="hidden lg:flex flex-col gap-2 pt-4 border-t border-zinc-900">
        <p className="font-mono text-[10px] text-zinc-650 text-center">
          &copy; {new Date().getFullYear()} Christian L. Robles.
        </p>
      </div>
    </nav>
  );
}
