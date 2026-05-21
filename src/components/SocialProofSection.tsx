import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "TikTok Creator (2M+)",
    content: "I shifted entirely to CapCut. I can edit a full vlog in 15 minutes instead of 3 hours on my PC. It's unreal.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Sarah Jenkins",
    role: "Small Business Owner",
    content: "The auto-captions alone save me so much time. Since using their trending templates, my reel views 10x'd.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "David Kim",
    role: "YouTube Vlogger",
    content: "The easiest, most powerful mobile editor I've ever used. The fact that it's this good AND free is insane.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
  }
];

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black border-y border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">Used by over <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00F2DC]">500 Million</span> creators.</h2>
          <p className="text-gray-400 text-lg">Join the fastest growing community of mobile editors.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-3xl"
            >
              <div className="flex text-yellow-400 mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-white text-lg font-medium mb-6">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover bg-gray-800" />
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center items-center gap-8 flex-wrap opacity-50 grayscale select-none pointer-events-none">
           <span className="text-2xl font-bold font-sans">App Store Winner</span>
           <span className="text-2xl font-bold font-sans">Google Play Best Of</span>
           <span className="text-2xl font-bold font-sans">#1 Top Free App</span>
        </div>
      </div>
    </section>
  );
};
