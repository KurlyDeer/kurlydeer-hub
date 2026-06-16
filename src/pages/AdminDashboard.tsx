import React from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { LogOut, Database, Users, Settings, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center">
              <Database className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <h1 className="font-display font-semibold text-lg text-zinc-100 tracking-wide">
                Admin Control Plane
              </h1>
              <p className="font-mono text-[10px] text-zinc-400">
                Connected as: <span className="text-emerald-400">{user?.email}</span>
              </p>
            </div>
          </div>
          
          <button 
            onClick={handleSignOut}
            className="p-2 bg-zinc-950 hover:bg-rose-500/10 border border-zinc-800 hover:border-rose-500/20 text-zinc-400 hover:text-rose-400 rounded-lg transition cursor-pointer"
            title="Terminate Session"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:border-emerald-500/30 transition cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
              <Plus className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-sans font-semibold text-sm text-zinc-200">New Blog Post</h3>
              <p className="font-mono text-[10px] text-zinc-500 mt-1">Draft & publish technical reports</p>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:border-emerald-500/30 transition cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
              <Users className="h-5 w-5 text-sky-400" />
            </div>
            <div>
              <h3 className="font-sans font-semibold text-sm text-zinc-200">Subscribers</h3>
              <p className="font-mono text-[10px] text-zinc-500 mt-1">Manage mailing list & audience</p>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:border-emerald-500/30 transition cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
              <Settings className="h-5 w-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="font-sans font-semibold text-sm text-zinc-200">System Settings</h3>
              <p className="font-mono text-[10px] text-zinc-500 mt-1">Supabase integration & keys</p>
            </div>
          </div>
        </div>

        {/* Empty State Area */}
        <div className="bg-zinc-900 border border-zinc-800 border-dashed rounded-2xl p-12 flex flex-col items-center text-center opacity-70">
          <Database className="h-8 w-8 text-zinc-600 mb-3" />
          <p className="font-sans text-sm font-medium text-zinc-300">No active content modules loaded.</p>
          <p className="font-mono text-[10px] text-zinc-500 mt-1">Database connection is active but tables are currently empty.</p>
        </div>
      </div>
    </div>
  );
}
