import React from 'react';
import { Settings, Command, MessageSquare, Zap, Box, Lock } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: AI where you work */}
          <div className="group relative bg-[#0F0F11] border border-white/10 rounded-xl p-8 overflow-hidden h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Visual: Node Connector */}
            <div className="h-48 flex items-center justify-center relative mb-8">
               <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center relative z-10 border border-white/20">
                  <span className="font-bold text-white">*</span>
               </div>
               
               {/* Lines */}
               <div className="absolute left-1/2 top-1/2 w-32 h-[1px] bg-gradient-to-r from-white/50 to-transparent -translate-y-1/2" />
               <div className="absolute left-1/2 top-1/2 w-24 h-24 border-t border-r border-white/20 rounded-tr-3xl translate-x-4 -translate-y-12" />
               
               {/* Icons */}
               <div className="absolute top-1/2 right-12 -translate-y-16 w-10 h-10 bg-[#5865F2]/20 border border-[#5865F2]/50 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#5865F2]" />
               </div>
               <div className="absolute top-1/2 right-12 translate-y-8 w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                  <Command className="w-5 h-5 text-gray-400" />
               </div>
            </div>

            <h3 className="text-xl font-medium text-white mb-2">AI where you work</h3>
            <p className="text-gray-400 text-sm">Deploy Scout Apps to Slack or Discord</p>
          </div>

          {/* Card 2: Customize your AI */}
          <div className="group relative bg-[#0F0F11] border border-white/10 rounded-xl p-8 overflow-hidden h-[400px]">
             {/* Visual: Form */}
             <div className="h-48 relative mb-8">
                <div className="absolute inset-x-0 top-0 bg-[#050505] border border-white/10 rounded-lg p-4 space-y-3 shadow-2xl scale-100 group-hover:scale-105 transition-transform duration-500">
                   <div>
                      <label className="text-[10px] text-gray-500 block mb-1">Name</label>
                      <div className="h-8 bg-white/5 rounded w-full" />
                   </div>
                   <div>
                      <label className="text-[10px] text-gray-500 block mb-1">Value</label>
                      <div className="h-8 bg-white/5 rounded w-full" />
                   </div>
                   <div className="flex gap-2 pt-2">
                      <div className="h-6 w-12 rounded bg-white/10" />
                      <div className="h-6 w-12 rounded bg-white/5" />
                      <div className="h-6 w-12 rounded bg-white/5" />
                   </div>
                </div>
             </div>

             <h3 className="text-xl font-medium text-white mb-2">Customize your AI</h3>
             <p className="text-gray-400 text-sm">Build custom workflows and apps in minutes</p>
          </div>

          {/* Card 3: Access right data */}
          <div className="group relative bg-[#0F0F11] border border-white/10 rounded-xl p-8 overflow-hidden h-[400px]">
             {/* Visual: Toggle/List */}
             <div className="h-48 relative mb-8 flex flex-col justify-center">
                <div className="bg-[#050505] border border-white/10 rounded-lg p-4 w-full transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                   <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-purple-500/20" />
                         <span className="text-sm font-medium">ELIS Account</span>
                      </div>
                      <div className="w-8 h-4 bg-green-500 rounded-full" />
                   </div>
                   <div className="text-xs text-gray-500">This is sample data output which we can replace.</div>
                   <div className="flex gap-2 mt-4">
                      <div className="flex-1 h-8 bg-red-500/10 border border-red-500/20 rounded flex items-center justify-center text-xs text-red-400">Delete</div>
                      <div className="flex-1 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center text-xs text-white">Save</div>
                   </div>
                </div>
             </div>

             <h3 className="text-xl font-medium text-white mb-2">Access to the right data</h3>
             <p className="text-gray-400 text-sm">Control what your AI knows and what it forgets</p>
          </div>

          {/* Card 4: Accelerate Product */}
          <div className="group relative bg-[#0F0F11] border border-white/10 rounded-xl p-8 overflow-hidden h-[300px]">
             <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="h-32 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white font-bold">*</div>
                <div className="h-[1px] w-12 bg-white/20" />
                <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-xs text-gray-400">AI</div>
             </div>
             <h3 className="text-lg font-medium text-white mb-2">Accelerate your product</h3>
             <p className="text-gray-400 text-sm">Use Scout API to enable AI-features for your customers</p>
          </div>

          {/* Card 5: Automate Work */}
          <div className="group relative bg-[#0F0F11] border border-white/10 rounded-xl p-8 overflow-hidden h-[300px]">
             <div className="h-32 relative">
                <div className="absolute top-0 left-0 bg-[#1A1A1D] border border-white/10 rounded px-3 py-2 text-xs flex items-center gap-2">
                   <Settings className="w-3 h-3 text-gray-500" />
                   Feature request on Slack
                </div>
                <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-[#1A1A1D] border border-white/10 rounded px-3 py-2 text-xs flex items-center gap-2 z-10">
                   <span className="font-bold text-white">*</span>
                   Scout AI
                </div>
                <div className="absolute bottom-4 right-0 bg-blue-500/10 border border-blue-500/20 rounded px-3 py-2 text-xs text-blue-300 flex items-center gap-2">
                   Linear ticket for that feature
                </div>
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                   <path d="M 50 25 L 120 50 L 180 80" stroke="#333" fill="none" />
                </svg>
             </div>
             <h3 className="text-lg font-medium text-white mb-2">Automate your work</h3>
             <p className="text-gray-400 text-sm">Connect your existing tools and eliminate the busy work</p>
          </div>

          {/* Card 6: Inbox */}
          <div className="group relative bg-[#0F0F11] border border-white/10 rounded-xl p-8 overflow-hidden h-[300px]">
             <div className="h-32 space-y-2">
                <div className="flex justify-end">
                   <div className="bg-[#2A2A2E] px-3 py-2 rounded-lg rounded-tr-none text-xs text-gray-300 max-w-[80%]">
                      Thanks Scout. You just saved me a bunch of time
                   </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                   <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px] text-white">*</div>
                   <div className="bg-[#1A1A1D] border border-white/10 px-3 py-2 rounded-lg rounded-tl-none text-xs text-gray-400">
                      Use the inspect option to review previous runs
                   </div>
                </div>
             </div>
             <h3 className="text-lg font-medium text-white mb-2">An Inbox with superpowers</h3>
             <p className="text-gray-400 text-sm">Curate responses and reviews results for each interaction</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;