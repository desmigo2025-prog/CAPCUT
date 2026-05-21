import React from 'react';
import { motion } from 'motion/react';
import { Button } from './Button';
import { Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Background Neon Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      
      <div className="z-10 flex flex-col items-center max-w-4xl mx-auto text-center mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full border-white/20 bg-white/5 backdrop-blur-sm"
        >
          <span className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </span>
          <span className="text-sm font-medium text-gray-300">4.9 • 10M+ Reviews</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-5xl font-black tracking-tight text-transparent sm:text-6xl md:text-8xl bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500"
        >
          Turn Any Video Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2DC] to-[#2563EB]">Viral Content</span> in Seconds
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-xl text-gray-400 md:text-2xl mb-10"
        >
          Edit like a pro with CapCut — no skills needed. AI-powered tools, trending effects, and one-tap exports.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto"
        >
          <Button icon="apple" size="lg" className="w-full sm:w-auto">
            Download on App Store
          </Button>
          <Button icon="play" variant="outline" size="lg" className="w-full sm:w-auto">
            Get it on Google Play
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-sm text-gray-500"
        >
          100% Free to use. Endless creativity.
        </motion.p>
      </div>

      {/* Video Preview Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 50 }}
        className="relative w-full max-w-[320px] sm:max-w-md mt-16 z-10 perspective-1000"
      >
        <div className="relative rounded-[2.5rem] border-[8px] border-gray-900 bg-black aspect-[9/19] overflow-hidden shadow-2xl shadow-blue-500/20 transform rotate-y-[-5deg] rotate-x-[5deg]">
          <div className="absolute top-0 w-full h-7 bg-black z-20 flex justify-center">
             <div className="w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>
          </div>
          {/* Animated editing preview substitute */}
          <div className="absolute inset-0 bg-gray-900">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-50 z-0"></div>
             
             {/* Fake UI Overlay */}
             <div className="absolute bottom-10 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10 z-10">
               <div className="h-2 w-full bg-gray-800 rounded-full mb-3 overflow-hidden">
                 <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-full bg-gradient-to-r from-[#00F2DC] to-[#2563EB]"
                 />
               </div>
               <div className="flex justify-between gap-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="flex-1 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/5">
                     <div className="w-4 h-4 bg-white/30 rounded sm"></div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
