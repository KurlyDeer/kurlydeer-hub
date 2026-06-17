import React from "react";
import { motion } from "motion/react";
import { BookOpen, Clock, ArrowRight, Coffee, Zap, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

interface TeaserArticle {
  title: string;
  category: string;
  readTime: string;
  icon: React.ReactNode;
  accentBg: string;
  accentBorder: string;
  accentText: string;
}

const ARTICLES: TeaserArticle[] = [
  {
    title: "Dialing It In: The Perfect Espresso Yield",
    category: "Lifestyle",
    readTime: "4 min read",
    icon: <Coffee className="h-4 w-4" />,
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    accentText: "text-amber-400",
  },
  {
    title: "EV Tech Breakdown: Model 3 Highland vs. Mach-E",
    category: "Automotive",
    readTime: "7 min read",
    icon: <Zap className="h-4 w-4" />,
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/20",
    accentText: "text-sky-400",
  },
  {
    title: "Optimizing Homelab Energy Consumption",
    category: "Infrastructure",
    readTime: "5 min read",
    icon: <Leaf className="h-4 w-4" />,
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    accentText: "text-emerald-400",
  },
];

export default function BlogTeaser() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-indigo-400" />
              </div>
              <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                Latest Insights
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-zinc-100 tracking-tight">
              From the Blog
            </h2>
            <p className="font-sans text-sm text-zinc-500 mt-3 max-w-xl">
              Technical deep-dives, homelab experiments, and curated interests.
            </p>
          </div>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-200 font-display font-semibold text-sm transition-colors shrink-0"
          >
            View all posts
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-zinc-900/70 backdrop-blur-sm border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Category & Read Time */}
              <div className="flex items-center justify-between mb-5">
                <div className={`${article.accentBg} border ${article.accentBorder} rounded-lg px-2.5 py-1 flex items-center gap-1.5`}>
                  <span className={article.accentText}>{article.icon}</span>
                  <span className={`font-mono text-[10px] ${article.accentText} uppercase tracking-widest font-semibold`}>
                    {article.category}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-600">
                  <Clock className="h-3 w-3" />
                  <span className="font-mono text-[10px]">{article.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-zinc-200 group-hover:text-zinc-50 transition-colors leading-snug flex-1">
                {article.title}
              </h3>

              {/* Placeholder line */}
              <div className="mt-4 space-y-2">
                <div className="h-2 bg-zinc-800/60 rounded-full w-full" />
                <div className="h-2 bg-zinc-800/60 rounded-full w-4/5" />
                <div className="h-2 bg-zinc-800/60 rounded-full w-3/5" />
              </div>

              {/* Read more */}
              <div className="mt-5 pt-4 border-t border-zinc-800/60 flex items-center gap-2">
                <span className="font-display text-xs font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  Read article
                </span>
                <ArrowRight className="h-3 w-3 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* CMS integration hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
            Powered by Supabase CMS · Coming Soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
