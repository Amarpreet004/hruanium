"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Layers, Database, Code, Palette ,Film,
  Scissors,
  PenTool,
  Sparkle,} from "lucide-react";

interface ToolCard {
  name: string;
  image: string;
  color: string;
  icon: React.ReactNode;
}

  const webDevTools: ToolCard[] = [
  {
    name: "Adobe Photoshop",
    image:
      "/Adobe_Photoshop_CC_icon.svg.png",
    color: "from-purple-600 to-indigo-900",
    icon: <Film className="w-4 h-4" />,
  },
  {
  name: "Adobe XD",
  image: "/Adobe_XD_CC_icon.svg.png",
  color: "from-gray-500 to-black",
  icon: <Scissors className="w-4 h-4" />,
},
  {
    name: "Adobe Illustrato",
    image:
      "/Adobe-Illustrator.webp",
    color: "from-sky-600 to-blue-900",
    icon: <Film className="w-5 h-4" />,
  },
  {
    name: "Creative Cloud",
    image:
      "/creative cloude.png",
    color: "from-gray-700 to-gray-900",
    icon: <Scissors className="w-4 h-4" />,
  },
  
  {
    name: "Canva",
    image:
      "/canva-icon-logo-symbol-free-png Background Removed.png",
    color: "from-cyan-400 to-blue-600",
    icon: <PenTool className="w-4 h-4" />,
  },
  {
    name: "Figma",
    image:
      "/Figma-logo.svg.png",
    color: "from-cyan-400 to-blue-600",
    icon: <PenTool className="w-4 h-4" />,
  },
  
];const ToolCard: React.FC<{ tool: ToolCard; index: number }> = ({ tool, index }) => {
  return (
    <motion.div 
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.05 }}
    >
      <div className="relative bg-[#5C0632] rounded-2xl border border-white/10 p-6 overflow-hidden h-full">
        <div className="relative z-10 flex flex-col items-center text-center h-full">
          {/* Icon container */}
          <motion.div 
            className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src={tool.image} 
              alt={tool.name} 
              className="w-10 h-10 object-contain filter brightness-110" 
            />
            {/* Floating particles */}
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-white/60 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          </motion.div>

          {/* Content */}
          <h3 className="text-lg font-bold text-white mb-2 transition-all duration-300">
            {tool.name}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            {tool.icon}
          </div>

          {/* ...existing code... */}
        </div>
      </div>
    </motion.div>
  );
};

export default function WebDevToolsCards() {
  const [showThirdCard, setShowThirdCard] = useState(false);

  // Show first 8 cards by default, last 4 only when showThirdCard is true
  const visibleTools = showThirdCard
    ? webDevTools
    : webDevTools.slice(0, 8);

  return (
    <div className="relative bg-transparent py-20 px-4 sm:px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#5C0632] border border-[#5C0632]/20 rounded-full text-white text-sm font-medium backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            Cutting-Edge Technology Stack
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#5C0632]">Modern Designing </span>{" "}
            <span className="text-[#5C0632]">Software</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Powerful technologies and frameworks we use to build exceptional,
            scalable, and future-ready web experiences
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleTools.map((tool, index) => (
            <ToolCard key={index} tool={tool} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          
        </motion.div>
      </div>
    </div>
  );
}
