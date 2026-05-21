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
    <section className="py-24 px-4 bg-[#f9fafb] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full mix-blend-multiply"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 pb-2">Everything you need to go viral.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 mb-6 border border-gray-100 group-hover:border-[#00F2DC] group-hover:text-[#00F2DC] transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:from-cyan-100 transition-colors"
          >
             <h3 className="text-2xl font-bold text-gray-900 mb-2">And much more</h3>
             <p className="text-gray-600 mb-6">Explore thousands of free assets.</p>
             <button className="bg-black text-white font-bold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
               Get CapCut Free
             </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
