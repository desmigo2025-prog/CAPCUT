import React from 'react';
import { motion } from 'motion/react';
import { Button } from './Button';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gray-50 flex flex-col items-center text-center justify-center min-h-[70vh]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-96 bg-gradient-to-r from-blue-400/20 to-[#00F2DC]/20 blur-[100px] rounded-full"></div>
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] opacity-5 bg-cover bg-center"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-white uppercase bg-red-500 rounded-full"
        >
           Trending App This Week
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6"
        >
          Start creating viral videos today.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 border-b border-gray-200 pb-10 mb-10 inline-block"
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
          <Button icon="apple" size="lg" className="w-full sm:w-auto shadow-2xl text-white bg-black">
            Download on App Store
          </Button>
          <Button icon="play" variant="outline" size="lg" className="w-full sm:w-auto backdrop-blur-md bg-white border-2 border-gray-200 text-gray-900 hover:bg-gray-50">
            Get it on Google Play
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} CapCut Landing Page Concept.
      </div>
    </section>
  );
};
