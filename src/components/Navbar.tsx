import React from 'react';
import { Button } from './Button';
import { motion } from 'motion/react';

export const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-2 text-2xl font-black tracking-tight text-white">
        <div className="w-8 h-8 bg-gradient-to-tr from-[#00F2DC] to-[#2563EB] rounded-lg"></div>
        CapCut
      </div>
      <div className="flex items-center gap-4">
        <Button size="sm" variant="secondary" className="px-6">Get App</Button>
      </div>
    </motion.nav>
  );
};
