import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black relative border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Stop wrestling with complicated software.</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Video editing shouldn't take hours or a degree in film.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Problem */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-gray-900/50 border border-gray-800"
          >
            <div className="flex items-center gap-3 mb-6 text-red-400">
              <XCircle className="w-8 h-8" />
              <h3 className="text-2xl font-bold text-white">The Old Way</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Hours spent learning complex tools",
                "Expensive monthly software subscriptions",
                "Computer crashing from heavy files",
                "Manually syncing audio and text",
                "Exporting takes forever"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 mt-1 mt-0.5 max-w-[12px]">•</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-[#00F2DC]/10 to-blue-500/10 border border-[#00F2DC]/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F2DC]/10 blur-3xl rounded-full mix-blend-screen"></div>
            <div className="flex items-center gap-3 mb-6 text-[#00F2DC] relative z-10">
              <CheckCircle2 className="w-8 h-8 text-[#00F2DC]" />
              <h3 className="text-2xl font-bold text-white">The CapCut Way</h3>
            </div>
            <ul className="space-y-4 relative z-10">
              {[
                "Intuitive drag-and-drop interface",
                "100% Free on mobile and desktop",
                "Lightning-fast, AI-optimized performance",
                "Auto-captions generated in 1 click",
                "Instant exports to TikTok & Reels"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#00F2DC] shrink-0 mt-0.5" />
                  <strong className="font-medium text-white">{text}</strong>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
