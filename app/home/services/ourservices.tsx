"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ContentLeft from "./contentleft";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "WEB DESIGN & DEVELOPMENT",
    answer: `We offer a wide range of creative and technical services including:
Web Design & Development,
UI/UX Design,
Graphic Design,
Video Editing,
Digital Marketing,
Professional Training Courses in Graphic Design, Editing, and Development.`
  },
  {
    question: "UI/UX DESIGN",
    answer: "We craft intuitive, engaging, and visually stunning user interfaces and experiences tailored to your brand and audience. Our process includes research, wireframing, prototyping, and user testing to ensure the best results."
  },
  {
    question: "Graphics Design & Video Editing",
    answer: "Our creative team delivers professional graphic design for branding, marketing, and digital content, as well as high-quality video editing for promos, ads, and social media. We help your brand stand out visually."
  },
  {
    question: "Digital Marketing & SEO",
    answer: "We provide comprehensive digital marketing solutions including SEO, social media management, content marketing, and paid advertising to boost your online presence and drive targeted traffic to your business."
  },
  {
    question: "Professional Training Courses",
    answer: "We offer hands-on training courses in graphic design, video editing, and web development, empowering you or your team with the latest industry skills and tools."
  },
  
];


export default function ServicesFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full bg-(#5C0632) max-w-7xl mx-auto flex flex-col md:flex-row gap-12 py-16 px-4">
      {/* Left Content */}
      <div className="md:w-1/2 w-full flex-shrink-0 flex items-start justify-center">
        <ContentLeft />
      </div>
      {/* Right FAQ */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:w-1/2 w-full flex flex-col justify-center"
      >
        
        <div className="space-y-4 mb-12">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openItems.includes(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have any questions?{" "}
            <a
              href="mailto:falconsolutions492@gmail.com"
              className="text-[#5C0632] dark:text-blue-400 font-medium hover:text-[#5C0632] transition-colors duration-200"
            >
              Contact us
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
