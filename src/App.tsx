/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import ProjectGrid from "./components/ProjectGrid";
import BlogSection from "./components/BlogSection";
import MessagesSection from "./components/MessagesSection";
import { DEFAULT_PROJECTS, DEFAULT_BLOGS } from "./defaultData";
import { Project, BlogPost, ContactMessage } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = useState<"home" | "projects" | "blog" | "messages">("home");

  // State handles
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  // Load datasets on first render
  useEffect(() => {
    try {
      const storedProjects = localStorage.getItem("nexus_projects");
      if (storedProjects) {
        setProjects(JSON.parse(storedProjects));
      } else {
        setProjects(DEFAULT_PROJECTS);
        localStorage.setItem("nexus_projects", JSON.stringify(DEFAULT_PROJECTS));
      }

      const storedBlogs = localStorage.getItem("nexus_blogs");
      if (storedBlogs) {
        setBlogs(JSON.parse(storedBlogs));
      } else {
        setBlogs(DEFAULT_BLOGS);
        localStorage.setItem("nexus_blogs", JSON.stringify(DEFAULT_BLOGS));
      }

      const storedMessages = localStorage.getItem("nexus_messages");
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    } catch (err) {
      console.error("Local storage sync error: ", err);
      // Fallback
      setProjects(DEFAULT_PROJECTS);
      setBlogs(DEFAULT_BLOGS);
    }
  }, []);

  // Sync state helpers
  const saveProjectsToLocalStorage = (newProjs: Project[]) => {
    setProjects(newProjs);
    localStorage.setItem("nexus_projects", JSON.stringify(newProjs));
  };

  const saveBlogsToLocalStorage = (newBlogs: BlogPost[]) => {
    setBlogs(newBlogs);
    localStorage.setItem("nexus_blogs", JSON.stringify(newBlogs));
  };

  const saveMessagesToLocalStorage = (newMsgs: ContactMessage[]) => {
    setMessages(newMsgs);
    localStorage.setItem("nexus_messages", JSON.stringify(newMsgs));
  };

  // State actions
  const handleAddProject = (p: Omit<Project, "id" | "createdAt">) => {
    const freshProject: Project = {
      ...p,
      id: `proj_custom_${Date.now()}`,
      createdAt: new Date().toISOString().split("T")[0]
    };
    saveProjectsToLocalStorage([freshProject, ...projects]);
  };

  const handleDeleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    saveProjectsToLocalStorage(updated);
  };

  const handleResetProjects = () => {
    saveProjectsToLocalStorage(DEFAULT_PROJECTS);
  };

  const handleAddBlog = (b: Omit<BlogPost, "id" | "publishedAt">) => {
    const freshBlog: BlogPost = {
      ...b,
      id: `blog_custom_${Date.now()}`,
      publishedAt: new Date().toISOString().split("T")[0]
    };
    saveBlogsToLocalStorage([freshBlog, ...blogs]);
  };

  const handleDeleteBlog = (id: string) => {
    const updated = blogs.filter((b) => b.id !== id);
    saveBlogsToLocalStorage(updated);
  };

  const handleResetBlogs = () => {
    saveBlogsToLocalStorage(DEFAULT_BLOGS);
  };

  const handleAddContactMessage = (msg: Omit<ContactMessage, "id" | "createdAt">) => {
    const freshMsg: ContactMessage = {
      ...msg,
      id: `msg_${Date.now()}`,
      createdAt: new Date().toLocaleString()
    };
    saveMessagesToLocalStorage([freshMsg, ...messages]);
  };

  const handleDeleteMessage = (id: string) => {
    const updated = messages.filter((m) => m.id !== id);
    saveMessagesToLocalStorage(updated);
  };

  const handleClearAllMessages = () => {
    saveMessagesToLocalStorage([]);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-150 flex flex-col lg:flex-row antialiased select-text">
      {/* Sidebar Core Hub Navigation */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        messageCount={messages.length}
      />

      {/* Main Console Stage */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Dynamic Telemetry Header */}
        <Header activeTab={activeTab} />

        {/* Console Workspace Area */}
        <main className="flex-1 overflow-y-auto bg-[#070708] border-l border-zinc-900/60">
          <AnimatePresence mode="wait">
            {activeTab === "home" && (
              <HomeSection
                key="home"
                onContactMessageSubmit={handleAddContactMessage}
                projectsCount={projects.length}
                blogsCount={blogs.length}
              />
            )}

            {activeTab === "projects" && (
              <ProjectGrid
                key="projects"
                projects={projects}
                onAddProject={handleAddProject}
                onDeleteProject={handleDeleteProject}
                onResetProjects={handleResetProjects}
              />
            )}

            {activeTab === "blog" && (
              <BlogSection
                key="blog"
                blogs={blogs}
                onAddBlog={handleAddBlog}
                onDeleteBlog={handleDeleteBlog}
                onResetBlogs={handleResetBlogs}
              />
            )}

            {activeTab === "messages" && (
              <MessagesSection
                key="messages"
                messages={messages}
                onDeleteMessage={handleDeleteMessage}
                onClearAllMessages={handleClearAllMessages}
              />
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
