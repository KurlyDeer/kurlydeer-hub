import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { LogOut, Database, Save, Eye, Layout, Youtube, Image as ImageIcon, Send, Activity, Server, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AdminDashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // CMS State
  const [title, setTitle] = useState('');
  const [youtubeId, setYoutubeId] = useState('');
  const [markdownBody, setMarkdownBody] = useState('# New Technical Report\n\nStart writing your system analysis here...');
  const [isPreview, setIsPreview] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const handleSaveDraft = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving draft to Supabase...", { title, youtubeId, markdownBody });
    alert("Draft saved to Supabase (Simulation)");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Console */}
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Database className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-zinc-100 tracking-wide uppercase">
                Content Management Server
              </h1>
              <p className="font-mono text-xs text-zinc-400 mt-1">
                Authorized Node: <span className="text-emerald-400">{user?.email || 'admin@homelab.local'}</span>
              </p>
            </div>
          </div>
          
          <button 
            onClick={handleSignOut}
            className="px-4 py-2 bg-zinc-950 hover:bg-rose-500/10 border border-zinc-800 hover:border-rose-500/30 text-zinc-400 hover:text-rose-400 font-mono text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Terminate Session</span>
          </button>
        </div>

        {/* Status Tracking Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Server className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-zinc-500 uppercase">Database Status</p>
              <h3 className="font-sans font-bold text-lg text-zinc-200">Online & Synced</h3>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
              <Activity className="h-5 w-5 text-sky-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-zinc-500 uppercase">Published Reports</p>
              <h3 className="font-sans font-bold text-lg text-zinc-200">12 Active Nodes</h3>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <Users className="h-5 w-5 text-indigo-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-zinc-500 uppercase">Newsletter Subs</p>
              <h3 className="font-sans font-bold text-lg text-zinc-200">849 Subscribers</h3>
            </div>
          </div>
        </div>

        {/* Split-Pane Markdown Editor */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[800px]">
          
          {/* Editor Toolbar */}
          <div className="bg-zinc-950 border-b border-zinc-800 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
            <div className="flex-1 flex gap-4">
              <div className="flex-1">
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Report Title..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-zinc-100 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-display font-semibold"
                />
              </div>
              <div className="flex-1 relative">
                <Youtube className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                <input 
                  type="text" 
                  value={youtubeId}
                  onChange={(e) => setYoutubeId(e.target.value)}
                  placeholder="YouTube Video ID (Optional)"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-100 outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all font-mono"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsPreview(!isPreview)}
                className={`px-4 py-2 font-sans font-semibold text-xs rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                  isPreview ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
                }`}
              >
                {isPreview ? <Layout className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span>{isPreview ? 'Split View' : 'Preview Only'}</span>
              </button>
              
              <button 
                onClick={handleSaveDraft}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-sans font-bold text-xs rounded-lg transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer"
              >
                <Save className="h-4 w-4" />
                <span>Save to Supabase</span>
              </button>
            </div>
          </div>

          {/* Split Pane Area */}
          <div className="flex-1 flex overflow-hidden">
            
            {/* Markdown Input Area */}
            <div className={`flex-1 border-r border-zinc-800 flex flex-col ${isPreview ? 'hidden' : 'flex'}`}>
              <div className="bg-zinc-950 px-4 py-2 border-b border-zinc-800 font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Layout className="h-3 w-3" /> Raw Markdown Input
              </div>
              <textarea
                value={markdownBody}
                onChange={(e) => setMarkdownBody(e.target.value)}
                className="flex-1 w-full bg-zinc-900 text-zinc-300 font-mono text-sm p-6 outline-none resize-none leading-relaxed"
                placeholder="Write your markdown here..."
              />
            </div>

            {/* Live Render Output Area */}
            <div className={`flex-1 flex flex-col bg-zinc-950 overflow-y-auto ${!isPreview && 'hidden md:flex'}`}>
               <div className="bg-zinc-950 px-4 py-2 border-b border-zinc-800 font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-2 sticky top-0 z-10 backdrop-blur-md bg-opacity-80">
                <Eye className="h-3 w-3" /> Live Render Output
              </div>
              <div className="p-8">
                {title && (
                  <h1 className="font-display font-bold text-3xl text-zinc-100 mb-6 pb-4 border-b border-zinc-800">
                    {title}
                  </h1>
                )}
                
                {youtubeId && (
                  <div className="mb-8 aspect-video rounded-xl overflow-hidden border border-zinc-800 shadow-xl bg-black">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${youtubeId}`} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                <div className="prose prose-invert prose-emerald max-w-none">
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {markdownBody}
                  </Markdown>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
