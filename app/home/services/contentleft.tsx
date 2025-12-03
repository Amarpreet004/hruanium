"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContentLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto flex flex-col items-start justify-center py-16 px-4"
    >
      {/* Icon and label row */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f8e6ee]">
          {/* Briefcase icon for services */}
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#5C0632" strokeWidth="2">
            <rect x="3" y="7" width="18" height="13" rx="2" stroke="#5C0632" strokeWidth="2"/>
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#5C0632" strokeWidth="2"/>
            <path d="M3 13h18" stroke="#5C0632" strokeWidth="2"/>
          </svg>
        </span>
        <span className="text-lg font-medium text-gray-700">Services</span>
      
      </motion.div>
      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8"
      >
        Driving Growth<br />
        Through Innovation<br />
        And Expertise
      </motion.h1>
      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="text-lg text-gray-500 mb-12 max-w-2xl"
      >
        We combine smart strategy, innovative technology, and personalized support to help your business grow, adapt, and lead in today’s fast-paced world.
      </motion.p>
      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#5C0632] text-white font-semibold text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#7b2ff2]/40 transition-all duration-200"
      >
        View all services
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="ml-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </motion.div>
  );
}
