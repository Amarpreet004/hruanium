"use client";

import React, { useState, useEffect } from "react";

const macWebsites = [
  "https://www.falconwebsolution.com",
  "https://www.theuniques.in/"
];

function MacbookShowcase() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % macWebsites.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative flex justify-center items-center h-[600px] md:h-[600px] sm:h-[400px]">
      <div className="relative w-[600px] h-[400px] md:w-[600px] md:h-[400px] sm:w-[350px] sm:h-[220px] flex items-center justify-center">
        <img src="/mac.jpeg" alt="Macbook" className="absolute w-full h-full object-contain z-10 pointer-events-none select-none" />
        {/* Responsive Macbook screen area overlay with iframe */}
        <div
          className="absolute z-20 shadow-lg border-0 border-black/20 rounded-[10px] overflow-hidden"
          style={{
            left: '50%',
            top: '48%',
            width: '80%',
            height: '80%',
            minWidth: '220px',
            minHeight: '120px',
            maxWidth: '100%',
            maxHeight: '100%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
          }}
        >
          <iframe
            src={macWebsites[current]}
            title="Macbook Showcase"
            className="w-full h-full border-none"
            allow="autoplay; encrypted-media"
            sandbox="allow-scripts allow-same-origin allow-popups"
            style={{ minWidth: '200px', minHeight: '100px', maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}
import { motion, AnimatePresence } from "framer-motion";
import { Code, Zap, Globe, Rocket, ArrowRight, Play } from "lucide-react";

const orbitIcons = [
  {
    id: 1,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    angle: 0,
    name: "HTML5",
    glow: "shadow-white/50"
  },
  {
    id: 2,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    angle: 72,
    name: "CSS3",
    glow: "shadow-gray-300/50"
  },
  {
    id: 3,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    angle: 144,
    name: "JavaScript",
    glow: "shadow-gray-400/50"
  },
  {
    id: 4,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    angle: 216,
    name: "React",
    glow: "shadow-white/50"
  },
  {
    id: 5,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    angle: 288,
    name: "Node.js",
    glow: "shadow-gray-500/50"
  },
];

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderOrbitIcons = () => {
    return orbitIcons.map((icon, index) => {
      const radius = 250;
      const x = radius * Math.cos((icon.angle * Math.PI) / 180);
      const y = radius * Math.sin((icon.angle * Math.PI) / 180);
      
      return (
        <motion.div
          key={`hero-orbit-${icon.id}-${icon.name}`}
          className="absolute"
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: index * 0.2,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.div
            className={`w-16 h-16 bg-slate-800/90 backdrop-blur-md rounded-2xl border border-white/10 ${icon.glow} flex items-center justify-center group hover:scale-110 transition-all duration-300`}
            whileHover={{ 
              scale: 1.2,
              rotate: 10,
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src={icon.image}
              alt={`${icon.name} Icon`}
              className="w-8 h-8 object-contain group-hover:brightness-110"
              title={icon.name}
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      );
    });
  };

  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden mt-8 md:mt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* No background, no orbs, no grid. Fully transparent. */}
      </div>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8 relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-[#5C0632]/20 rounded-full text-[#5C0632] text-sm font-medium backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-[#5C0632] rounded-full animate-pulse"></div>
              Currently Available for New Projects
            </motion.div>

            <div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <span className="text-[#5C0632]">Build.</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#660033] to-[#5C0632]">Launch.</span>{" "}
                <span className="text-[#5C0632]">Grow.</span>
                <br />
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#5C0632] to-[#660033]"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Digital Experiences
                </motion.span>
                <span className="text-[#5C0632]">.</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-[#3A3F4A] max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                We design and develop responsive, high-performing websites that help your
                business grow and stand out in the digital universe.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-full overflow-hidden shadow-lg shadow-white/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>

              <motion.button
                className="group px-8 py-4 border border-white/20 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex items-center gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5C0632]">250+</div>
                <div className="text-sm text-[#3A3F4A]">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5C0632]">98%</div>
                <div className="text-sm text-[#3A3F4A]">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5C0632]">24/7</div>
                <div className="text-sm text-[#3A3F4A]">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - 3D Orbit UI */}
          <MacbookShowcase />
        </div>
      </main>
    </div>
  );
}

export default Hero;
