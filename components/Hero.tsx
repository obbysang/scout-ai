import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505] pointer-events-none" />
      
      {/* Stars/Noise Texture */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")', filter: 'contrast(100%) brightness(100%)' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Beta Pill */}
        <a href="#" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 hover:bg-white/10 transition-colors group">
          <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
            <span className="text-white font-bold">* scout</span> is currently in beta
          </span>
          <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-white" />
        </a>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl mx-auto">
          AI for teams building <br />
          <span className="text-gray-400">what's next.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Scout gives you the tools to build custom agents and workflows in record time.
        </p>

        {/* CTA Button */}
        <button className="group bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all flex items-center gap-2">
          Get Started
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Hero Image / UI Mockup */}
        <div className="mt-20 w-full relative">
          <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-xl blur opacity-30" />
          <div className="relative bg-[#0F0F11] border border-white/10 rounded-xl overflow-hidden shadow-2xl mx-auto max-w-6xl aspect-[16/9] flex flex-col text-left">
             
             {/* Window Controls */}
             <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-[#0F0F11]">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                   <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="text-xs text-gray-500 font-mono">scout_workflow_v1.tsx</div>
                <div className="w-16" />
             </div>

             {/* UI Body */}
             <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-16 border-r border-white/5 flex flex-col items-center py-4 gap-4">
                   <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-xs">A</div>
                   <div className="w-8 h-8 hover:bg-white/5 rounded-lg transition-colors" />
                   <div className="w-8 h-8 hover:bg-white/5 rounded-lg transition-colors" />
                   <div className="w-8 h-8 hover:bg-white/5 rounded-lg transition-colors" />
                </div>

                {/* List Panel */}
                <div className="w-64 border-r border-white/5 bg-[#0a0a0b] p-4 hidden md:block">
                   <div className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider">Workflows</div>
                   <div className="space-y-1">
                      <div className="p-2 bg-white/5 rounded border border-white/5 text-sm text-white">Generate Response</div>
                      <div className="p-2 text-sm text-gray-500 hover:text-gray-300 cursor-pointer">Data Extraction</div>
                      <div className="p-2 text-sm text-gray-500 hover:text-gray-300 cursor-pointer">Slack Bot v2</div>
                   </div>
                </div>

                {/* Canvas */}
                <div className="flex-1 bg-[#050505] p-8 relative overflow-hidden">
                   {/* Grid Lines */}
                   <div className="absolute inset-0" 
                        style={{ 
                          backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', 
                          backgroundSize: '24px 24px', 
                          opacity: 0.2 
                        }} 
                   />

                   {/* Node 1 */}
                   <div className="absolute top-12 left-12 w-80 bg-[#121214] rounded-lg border border-white/10 shadow-xl p-0 overflow-hidden">
                      <div className="bg-white/5 p-3 flex justify-between items-center border-b border-white/5">
                         <span className="text-xs font-medium text-gray-300">Inputs</span>
                         <div className="w-2 h-2 rounded-full bg-blue-500" />
                      </div>
                      <div className="p-4 space-y-3">
                         <div>
                            <label className="text-[10px] text-gray-500 uppercase">User Name</label>
                            <div className="bg-black/50 border border-white/10 rounded px-2 py-1 text-xs text-blue-400 mt-1 font-mono">user_name</div>
                         </div>
                         <div>
                            <label className="text-[10px] text-gray-500 uppercase">Profile</label>
                            <div className="bg-black/50 border border-white/10 rounded px-2 py-1 text-xs text-green-400 mt-1 font-mono">profile_data</div>
                         </div>
                      </div>
                   </div>

                   {/* Connection Line */}
                   <svg className="absolute inset-0 pointer-events-none w-full h-full">
                      <path d="M 368 100 C 450 100, 450 180, 500 180" stroke="#333" strokeWidth="2" fill="none" />
                      <path d="M 368 250 C 450 250, 450 180, 500 180" stroke="#333" strokeWidth="2" fill="none" />
                   </svg>

                   {/* Node 2 */}
                   <div className="absolute top-40 left-[500px] w-96 bg-[#121214] rounded-lg border border-white/10 shadow-xl overflow-hidden ring-1 ring-indigo-500/20">
                      <div className="bg-indigo-500/10 p-3 flex justify-between items-center border-b border-indigo-500/10">
                         <div className="flex items-center gap-2">
                           <span className="text-xs font-medium text-indigo-300">Generate Response</span>
                           <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 rounded">GPT-4-Turbo</span>
                         </div>
                         <div className="w-2 h-2 rounded-full bg-indigo-500" />
                      </div>
                      <div className="p-4 space-y-3">
                         <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Temperature</span>
                            <span className="text-xs text-white bg-white/5 px-2 py-0.5 rounded">0.7</span>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Max Tokens</span>
                            <span className="text-xs text-white bg-white/5 px-2 py-0.5 rounded">400</span>
                         </div>
                         <div className="mt-2">
                            <label className="text-[10px] text-gray-500 uppercase">System Prompt</label>
                            <div className="h-16 bg-black/50 border border-white/10 rounded mt-1 p-2 text-[10px] text-gray-500 font-mono">
                               You are a helpful assistant...
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;