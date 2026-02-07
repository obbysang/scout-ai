import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Background Grid Icons Faint */}
        <div className="absolute inset-0 flex items-center justify-between opacity-10 pointer-events-none">
           <div className="w-16 h-16 border border-white rounded-lg" />
           <div className="w-16 h-16 border border-white rounded-lg translate-y-12" />
        </div>

        <h2 className="text-2xl md:text-4xl font-medium leading-tight mb-12">
          "Scout is an indispensable tool for our Engineering, DS and Sales teams to engage with our customers. We rely on Scout daily, making it an integral part of our operations."
        </h2>

        <div className="flex flex-col items-center gap-4">
           <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
             {/* Placeholder Avatar */}
             <div className="w-full h-full bg-gradient-to-tr from-gray-500 to-gray-400" />
           </div>
           <div>
              <div className="text-white font-medium">Vijaye Raji</div>
              <div className="text-gray-500 text-sm">CEO of Statsig</div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;