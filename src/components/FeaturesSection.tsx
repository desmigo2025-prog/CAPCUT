import React from 'react';
import { motion } from 'motion/react';
import { Type, Sparkles, ImageOff, Scissors, Flame } from 'lucide-react';

const features = [
  {
    icon: <Type className="w-6 h-6" />,
    title: "AI Auto-Captions",
    description: "Generate highly accurate captions automatically and style them like your favorite successful creators."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "One-Tap Effects",
    description: "Access thousands of trending effects, filters, and transitions instantly."
  },
  {
    icon: <ImageOff className="w-6 h-6" />,
    title: "Background Removal",
    description: "Remove video backgrounds without a green screen. Seamless and precise."
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "Trending Templates",
    description: "Edit to the beat with massive library of TikTok-ready templates."
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Pro Drag & Drop",
    description: "Trim, split, and merge clips with desktop-level precision on your phone."
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Everything you need to go viral.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-900/40 border border-white/10 rounded-3xl p-8 hover:bg-gray-800/60 transition-colors group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center text-white mb-6 border border-white/5 group-hover:border-[#00F2DC]/50 group-hover:text-[#00F2DC] transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-[#2563EB]/20 to-purple-900/20 border border-blue-500/30 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:from-[#2563EB]/30 transition-colors"
          >
             <h3 className="text-2xl font-bold text-white mb-2">And much more</h3>
             <p className="text-blue-200 mb-6">Explore thousands of free assets.</p>
             <button className="bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
               Get CapCut Free
             </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
