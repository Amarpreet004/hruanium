"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LogoProps {
  size?: number;
  color?: string;
  animationType?: "rotate" | "pulse" | "bounce" | "float" | "spin" | "glow";
  speed?: number;
  className?: string;
}

export default function Logo({
  size = 100,
  color = "#3B82F6",
  animationType = "rotate",
  speed = 2,
  className = "",
}: LogoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Animation variants for different motion types
  const animations = {
    rotate: {
      animate: {
        rotate: 360,
      },
      transition: {
        duration: speed,
        ease: "linear" as const,
        repeat: Infinity,
      },
    },
    pulse: {
      animate: {
        scale: [1, 1.2, 1],
      },
      transition: {
        duration: speed,
        ease: "easeInOut" as const,
        repeat: Infinity,
      },
    },
    bounce: {
      animate: {
        y: [0, -20, 0],
      },
      transition: {
        duration: speed,
        ease: "easeInOut" as const,
        repeat: Infinity,
      },
    },
    float: {
      animate: {
        y: [0, -10, 0],
        x: [0, 5, 0],
      },
      transition: {
        duration: speed * 1.5,
        ease: "easeInOut" as const,
        repeat: Infinity,
      },
    },
    spin: {
      animate: {
        rotateY: 360,
      },
      transition: {
        duration: speed,
        ease: "linear" as const,
        repeat: Infinity,
      },
    },
    glow: {
      animate: {
        filter: [
          "drop-shadow(0 0 5px currentColor)",
          "drop-shadow(0 0 20px currentColor)",
          "drop-shadow(0 0 5px currentColor)",
        ],
      },
      transition: {
        duration: speed,
        ease: "easeInOut" as const,
        repeat: Infinity,
      },
    },
  };

  const currentAnimation = animations[animationType];

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        animate={currentAnimation.animate}
        transition={currentAnimation.transition}
        style={{ color }}
        className="flex items-center justify-center"
      >
        {/* Custom Logo SVG */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
          
          {/* Inner Design - Modern Geometric Pattern */}
          <motion.path
            d="M25 35 L50 20 L75 35 L75 65 L50 80 L25 65 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          
          {/* Center Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="12"
            fill="currentColor"
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: speed,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          
          {/* Orbiting Dots */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{
              duration: speed * 2,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ transformOrigin: "50px 50px" }}
          >
            <circle cx="50" cy="25" r="3" fill="currentColor" />
            <circle cx="75" cy="50" r="3" fill="currentColor" />
            <circle cx="50" cy="75" r="3" fill="currentColor" />
            <circle cx="25" cy="50" r="3" fill="currentColor" />
          </motion.g>
          
          {/* Additional Decorative Elements */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{
              duration: speed * 3,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ transformOrigin: "50px 50px" }}
          >
            <line
              x1="35"
              y1="35"
              x2="40"
              y2="40"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="65"
              y1="35"
              x2="60"
              y2="40"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="65"
              y1="65"
              x2="60"
              y2="60"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="35"
              y1="65"
              x2="40"
              y2="60"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}

// Alternative Simple Logo Component
export function SimpleLogo({
  size = 60,
  color = "#3B82F6",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          },
          scale: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        style={{ color }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.rect
            x="20"
            y="20"
            width="10"
            height="10"
            fill="currentColor"
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ transformOrigin: "25px 25px" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

// Text Logo with Animation
export function TextLogo({
  text = "LOGO",
  size = 32,
  color = "#1F2937",
  className = "",
}: {
  text?: string;
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`font-bold ${className}`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 3,
        ease: "linear" as const,
        repeat: Infinity,
      }}
      style={{
        fontSize: `${size}px`,
        background: `linear-gradient(90deg, ${color}, #3B82F6, ${color})`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut" as const,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Continuously Moving Logos Component
export function MovingLogosCarousel({
  logos = [
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  ],
  speed = 15,
  className = "",
}: {
  logos?: { name: string; src: string }[];
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`w-full overflow-hidden py-8 ${className}`}>
      <div className="text-center mb-6">
        <h1 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          OUR PARTNERS
        </h1>
      </div>
      
      <div className="relative flex">
        <motion.div
          className="flex gap-16 items-center min-w-max"
          animate={{
            x: [0, -144 * logos.length], // Move left by (width + gap) * count
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
        >
          {/* Render logos multiple times for seamless infinite loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain grayscale"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const textSpan = target.nextElementSibling as HTMLElement;
                  if (textSpan) {
                    textSpan.classList.remove('hidden');
                  }
                }}
              />
              <span className="hidden text-gray-400 dark:text-gray-500 font-medium text-xs uppercase tracking-wider">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
