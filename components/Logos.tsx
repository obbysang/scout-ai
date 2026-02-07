import React from 'react';

const Logos: React.FC = () => {
  // Simple text placeholders for the logos to match the aesthetic without external SVGs
  const logos = [
    "STATSIG", "Deno", "Modal", "hyper", "evidence", "dagster", "case status", "DIG SOUTH"
  ];

  return (
    <section className="py-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-lg text-white mb-12">
          Used by teams at Statsig, Deno, Dagster, Evidence and more.
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 group cursor-default">
               {/* Generic Logo Icon */}
               <div className="w-6 h-6 rounded bg-white/10 group-hover:bg-indigo-500/50 transition-colors" />
               <span className="text-xl font-semibold tracking-tight text-white/60 group-hover:text-white transition-colors font-sans">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;