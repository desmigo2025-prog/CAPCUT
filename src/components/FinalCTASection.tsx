import React from 'react';
import { motion } from 'motion/react';
import { Button } from './Button';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-black flex flex-col items-center text-center justify-center min-h-[70vh]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-96 bg-gradient-to-r from-blue-600/20 to-[#00F2DC]/20 blur-[100px] rounded-full"></div>
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="inline-block px-5 py-2 mb-8 text-sm font-black tracking-widest text-[#00F2DC] uppercase bg-black border border-[#00F2DC]/50 rounded-full shadow-[0_0_30px_rgba(0,242,220,0.4)] relative overflow-hidden mt-6"
        >
           <span className="animate-pulse">Unlock 100% Free Tools</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6"
        >
          Start creating viral videos today.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 border-b border-white/10 pb-10 mb-10 inline-block"
        >
          Join millions of creators. Install CapCut Free Now.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button onClick={() => window.location.href='https://lowest-prices.eu/a/v20lXsyzBLSoEKA'} icon="apple" size="lg" className="w-full sm:w-auto shadow-[0_0_30px_rgba(0,242,220,0.5)] border-2 border-[#00F2DC] bg-[#00F2DC] text-black hover:bg-cyan-300">
            Download For Free Now
          </Button>
          <Button onClick={() => window.location.href='https://lowest-prices.eu/a/v20lXsyzBLSoEKA'} icon="play" variant="outline" size="lg" className="w-full sm:w-auto backdrop-blur-md bg-white border-2 border-white text-black hover:bg-gray-100 shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            Install on Google Play
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 text-gray-600 text-sm">
        © {new Date().getFullYear()} CapCut Landing Page Concept.
      </div>
    </section>
  );
};
