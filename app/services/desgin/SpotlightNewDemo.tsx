"use client";
import React, { useState } from "react";
import { Spotlight } from "./spotlight-new";
import Cards from "./explore/exploreservises";

export function SpotlightNewDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Main Component */}
    <div className="h-[20rem] w-full rounded-md flex md:items-center md:justify-center bg-transparent antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
      Explore Our Services
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-400 max-w-lg text-center mx-auto">
          Discover our range of professional web development, UI/UX design, and digital strategy services. We help businesses grow with innovative solutions tailored to your needs.
        </p>
        <div className="mt-8 flex justify-center">
          <button 
            onClick={handleExploreClick}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group hover:scale-110 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-gray-500/25"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E5E7EB_0%,#9CA3AF_50%,#E5E7EB_100%)] group-hover:animate-[spin_1s_linear_infinite]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-all duration-300 group-hover:text-gray-100 group-hover:font-semibold">
              Explore Services
            </span>
          </button>
        </div>
      </div>
    </div>

    {/* Modal Overlay */}
    {isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] w-full mx-4 overflow-hidden">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Modal Content */}
          <div className="overflow-y-auto max-h-[90vh]">
            <div className="text-center p-8 pb-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Explore Our Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Discover our comprehensive range of digital services
              </p>
            </div>
            
            {/* Use existing Cards component */}
            <Cards />

            {/* Call to Action */}
            <div className="p-8 pt-4 text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
