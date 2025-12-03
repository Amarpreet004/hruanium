"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does Falcon Solutions offer?",
answer: `We offer a wide range of creative and technical services including:
Web Design & Development,
UI/UX Design,
Graphic Design,
Video Editing,
Digital Marketing,
Professional Training Courses in Graphic Design, Editing, and Development`
  },
  
  {
    question: " What technologies do you use for web development?",
    answer: "We use modern, scalable technologies like React.js, Next.js, Node.js, Tailwind CSS, Bootstrap, and more. We always pick the right stack based on your project’s needs."
  },
  {
    question: "Can you help redesign an existing website?",
    answer: "Absolutely! Whether you want a full redesign or just performance and UI improvements, we can breathe new life into your existing website or platform."
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Items */}
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
            className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
}
