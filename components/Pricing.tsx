import React from 'react';
import { CheckCircle2, Plus } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
           <h2 className="text-4xl font-semibold mb-4">A plan for every need.</h2>
           <p className="text-gray-400">Whether you are just starting or require massive scale, we have a solution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           
           {/* Hobby */}
           <div className="p-8 rounded-2xl border border-white/10 bg-[#0A0A0B] flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-2 h-2 rounded-full bg-green-500" />
                 <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Hobby</span>
              </div>
              <div className="text-4xl font-bold mb-4">$0</div>
              <p className="text-sm text-gray-400 mb-8">Great for personal use or a first step to explore the Scout platform.</p>
              
              <button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium mb-8">Sign Up</button>
              
              <div className="space-y-3 flex-1">
                 {['100 Interactions (GPT-3.5 Only)', 'Deploy 1 App', 'Connect 1 Collection', '10GB of Storage', 'Community Support (Discord)'].map((feat, i) => (
                    <div key={i} className="flex gap-3 text-sm text-gray-400">
                       <CheckCircle2 className="w-4 h-4 text-white/20 shrink-0" />
                       {feat}
                    </div>
                 ))}
              </div>
           </div>

           {/* Pro */}
           <div className="p-8 rounded-2xl border border-white/10 bg-[#121214] flex flex-col relative ring-1 ring-white/20">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-t-2xl" />
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-2 h-2 rounded-full bg-purple-500" />
                 <span className="text-xs font-bold tracking-wider text-purple-400 uppercase">Pro</span>
                 <span className="ml-auto text-[10px] bg-white/10 px-2 py-0.5 rounded text-white">Most Popular</span>
              </div>
              <div className="text-4xl font-bold mb-4">$50</div>
              <p className="text-sm text-gray-400 mb-8">Perfect for building and scaling models with limited context.</p>
              
              <button className="w-full py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors text-sm font-medium mb-8">Sign Up</button>
              
              <div className="space-y-3 flex-1">
                 {['Unlimited Interactions', '$0.09 per Interaction', 'Deploy 10 Apps', 'Connect 10 Collections', '1TB of Storage', 'Community & Email Support'].map((feat, i) => (
                    <div key={i} className="flex gap-3 text-sm text-gray-300">
                       <CheckCircle2 className="w-4 h-4 text-white/40 shrink-0" />
                       {feat}
                    </div>
                 ))}
              </div>
           </div>

           {/* Custom */}
           <div className="p-8 rounded-2xl border border-white/10 bg-[#0A0A0B] flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-2 h-2 rounded-full bg-blue-500" />
                 <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Enterprise</span>
              </div>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <p className="text-sm text-gray-400 mb-8">For large scale models with large and ever-changing context.</p>
              
              <button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium mb-8">Request Access</button>
              
              <div className="space-y-3 flex-1">
                 {['Unlimited Interactions', 'Custom Interaction Pricing', 'Unlimited Apps', 'Unlimited Collections', 'Unlimited Storage', 'Dedicated Support'].map((feat, i) => (
                    <div key={i} className="flex gap-3 text-sm text-gray-400">
                       <CheckCircle2 className="w-4 h-4 text-white/20 shrink-0" />
                       {feat}
                    </div>
                 ))}
              </div>
           </div>

        </div>

        {/* Dedicated Support Box */}
        <div className="rounded-2xl border border-white/10 bg-[#0F0F11] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="max-w-xl">
              <h3 className="text-xl font-medium text-white mb-2">Dedicated Support</h3>
              <p className="text-gray-400 text-sm mb-6">We are here to help get you started with a dedicated support engineer who can assist with scoping your first models and getting them deployed.</p>
              <div className="grid grid-cols-2 gap-4">
                 {['Shared Slack Channel', 'Prompt Engineering Guidance', 'Dedicated Support Engineer', 'Context Sourcing Guidance'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                       <CheckCircle2 className="w-3 h-3 text-white/20" />
                       {item}
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="bg-[#050505] border border-white/10 rounded-xl p-6 min-w-[280px] text-center">
               <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">
                  <Plus className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-wider">ADD ON</span>
               </div>
               <div className="text-3xl font-bold text-white mb-1">$750</div>
               <div className="text-xs text-gray-500 mb-6">monthly</div>
               <button className="w-full py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors text-xs font-bold uppercase tracking-wide">Request Access</button>
               <div className="text-[10px] text-gray-600 mt-3">No long term contract obligation.</div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;