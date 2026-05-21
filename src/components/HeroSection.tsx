import React from 'react';
import { motion } from 'motion/react';
import { CapCutLogo } from './Navbar';

export const HeroSection: React.FC = () => {
  return (
    <>
    <section className="pt-20 pb-16 px-6 max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center gap-12 text-black relative">
      {/* Main Title */}
      <div className="flex-1 lg:max-w-md w-full text-center lg:text-left z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl md:text-[5.5rem] font-black tracking-tight text-gray-900 leading-[1.05]"
        >
          Smart Editor & <br className="hidden lg:block" />Generator
        </motion.h1>
      </div>

      {/* Central Workspace Mockup */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex-[2] flex flex-col items-center w-full max-w-4xl lg:max-w-none z-10"
      >
        <div className="w-full bg-[#f6f8fa] rounded-[32px] p-6 sm:p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center relative overflow-hidden">
          
          <div className="relative w-full max-w-[600px] aspect-[16/9] bg-[#cba9fd] rounded flex items-end shadow-2xl overflow-hidden ring-2 ring-[#00F2DC]">
             {/* Bounding box resize handles (simulated) */}
             <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-white border border-[#00F2DC] rounded-full -translate-x-1/2 -translate-y-1/2 z-20"></div>
             <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-white border border-[#00F2DC] rounded-full translate-x-1/2 -translate-y-1/2 z-20"></div>
             <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-white border border-[#00F2DC] rounded-full -translate-x-1/2 translate-y-1/2 z-20"></div>
             <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-white border border-[#00F2DC] rounded-full translate-x-1/2 translate-y-1/2 z-20"></div>
             <div className="absolute top-0 left-1/2 w-2 h-2 bg-white border border-[#00F2DC] rounded-full -translate-x-1/2 -translate-y-1/2 z-20"></div>
             <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white border border-[#00F2DC] rounded-full -translate-x-1/2 translate-y-1/2 z-20"></div>
             <div className="absolute top-1/2 left-0 w-2 h-2 bg-white border border-[#00F2DC] rounded-full -translate-x-1/2 -translate-y-1/2 z-20"></div>
             <div className="absolute top-1/2 right-0 w-2 h-2 bg-white border border-[#00F2DC] rounded-full translate-x-1/2 -translate-y-1/2 z-20"></div>

             {/* Inner Image Content */}
             <img 
               src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop" 
               alt="Perfume bottle template"
               className="absolute right-0 bottom-0 top-0 h-full w-[80%] object-cover object-left mix-blend-multiply opacity-90" 
             />
             
             <div className="relative z-10 w-full p-8 flex justify-start items-end h-full">
                <div className="bg-black text-white px-6 py-2.5 font-bold tracking-widest text-sm shadow-xl">
                  BLACK FRIDAY
                </div>
             </div>
          </div>

        </div>
        
        <p className="mt-8 text-gray-500 text-center max-w-[600px] text-[17px] leading-relaxed font-medium">
          Create professional designs with AI online. Generate layouts for social media posts, covers, and marketing materials automatically—easy and free.
        </p>
      </motion.div>

      {/* Right Text Sidebar */}
      <div className="hidden xl:flex flex-1 flex-col gap-4 font-black text-[2.5rem] leading-tight whitespace-nowrap pl-4 z-10">
         <div className="text-gray-300 hover:text-gray-900 transition-colors duration-300 cursor-pointer">AI image generator</div>
         <div className="text-gray-200 hover:text-gray-900 transition-colors duration-300 cursor-pointer">AI video generator</div>
         <div className="text-gray-100 hover:text-gray-900 transition-colors duration-300 cursor-pointer">Text to Speech</div>
      </div>
    </section>

    {/* Floating Bottom Action Bar */}
    <motion.div 
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
      className="fixed bottom-8 left-1/2 z-50 flex items-center justify-between gap-6 bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-400 rounded-full p-2 pl-3 sm:pl-6 shadow-[0_20px_40px_rgba(0,242,220,0.3)] w-[90%] max-w-[500px]"
    >
      <div className="flex items-center gap-3">
         <div className="bg-white p-2 rounded-full hidden sm:block shadow-sm">
            <CapCutLogo className="w-5 h-5 text-black" />
         </div>
         <span className="font-bold text-gray-900 sm:text-lg pl-3 sm:pl-0 truncate">Edit smarter, create faster</span>
      </div>
      <button className="bg-[#111] text-white px-6 sm:px-8 py-3.5 rounded-full font-bold hover:bg-black hover:scale-105 active:scale-95 transition-all text-sm whitespace-nowrap shadow-lg flex-shrink-0">
        Try online for free
      </button>
    </motion.div>
    </>
  );
};
