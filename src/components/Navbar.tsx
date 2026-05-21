import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export const CapCutLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 1024 1024" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M784.814 266.38c23.004-20.916 58.74-19.23 79.664 3.766s19.23 58.73-3.765 79.646L546.685 635.334c-19.123 17.38-48.46 17.38-67.58 0L165.074 349.792c-23.003-20.91-24.697-56.65-1.787-79.647s58.647-24.673 81.65-3.765l224.966 204.53 103.116-93.75-224.28-203.9c-23.002-20.916-24.69-56.654-1.787-79.65s58.65-24.664 81.653-3.748L641.52 486.914l143.294-130.27zM245.412 751.52c-23.004 20.908-58.74 19.222-79.664-3.774-20.925-22.997-19.23-58.73 3.765-79.646l314.028-285.543c19.123-17.37 48.46-17.37 67.58 0l314.032 285.543c23.003 20.91 24.69 56.65 1.787 79.646-22.9 22.996-58.647 24.682-81.65 3.774L560.324 547.01l-103.116 93.73 224.28 203.9c23.002 20.916 24.69 56.654 1.787 79.65-23.004 22.994-58.65 24.662-81.654 3.746L388.75 754.4l-143.34 130.27z" fill="currentColor"/>
  </svg>
)

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-black tracking-tight text-white cursor-pointer">
          <CapCutLogo className="w-8 h-8 text-white" />
          CapCut
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-full text-[15px] font-bold hover:bg-gray-200 transition-colors">
            Get CapCut
          </button>
        </div>
      </div>
    </nav>
  );
};
