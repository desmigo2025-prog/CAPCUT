import React from 'react';
import { motion } from 'motion/react';
import { Apple, Play } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: 'apple' | 'play';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon, 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-transform active:scale-95";
  
  const variants = {
    primary: "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:bg-gray-100 border border-white/50",
    secondary: "bg-[#00F2DC] text-black shadow-[0_0_20px_rgba(0,242,220,0.4)] hover:shadow-[0_0_40px_rgba(0,242,220,0.8)] hover:bg-[#00ffff] font-black border border-[#00F2DC]",
    outline: "bg-black/50 backdrop-blur-md border border-white/30 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] hover:bg-white hover:text-black hover:border-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base md:text-lg",
    lg: "px-8 py-4 text-lg md:text-xl"
  };
  
  const IconProps = { className: "w-5 h-5 sm:mr-2" };

  return (
    <motion.button 
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props as any}
    >
      {icon === 'apple' && <Apple className="w-5 h-5 sm:mr-2 flex-shrink-0" fill="currentColor" />}
      {icon === 'play' && <Play className="w-5 h-5 sm:mr-2 flex-shrink-0" fill="currentColor" />}
      <span className={icon ? "hidden sm:inline" : ""}>{children}</span>
    </motion.button>
  );
};
