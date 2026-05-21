import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { Play } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white border-y border-gray-100 relative overflow-hidden flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto z-10 w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">One Tap. <span className="text-[#00F2DC]">Zero Effort.</span></h2>
        <p className="text-gray-500 text-lg mb-12 max-w-xl">
           Turn dull, shaky footage into a stabilized, color-graded cinematic masterpiece in one click using AI magic.
        </p>

        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-xl mx-auto aspect-[4/5] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group bg-gray-100 flex justify-center items-center">
          {/* We will just simulate a before/after split screen effect with CSS */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center filter grayscale transition-all duration-1000 group-hover:grayscale-0"></div>
          
          <div className="absolute inset-x-0 bottom-0 top-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center filter saturate-200 contrast-125 clip-path-half pointer-events-none border-r-2 border-white transition-all duration-1000 origin-left scale-x-0 group-hover:scale-x-100">
             {/* Text indicator */}
             <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                After CapCut AI
             </div>
          </div>
          
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 z-20 group-hover:opacity-0 transition-opacity">
            Original Footage
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-300">
             <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
               <span className="text-white font-bold text-sm">Hover</span>
             </div>
          </div>
        </div>
      </div>
      
      {/* Clip path definition inline for the split */}
      <style>{`
        .clip-path-half {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </section>
  );
};
