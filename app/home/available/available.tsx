"use client";

import React, { useState } from "react";

const projects = [
  {
    name: "The Uniques Community",
    logo: "/theuniquesCommunity-CaNp0pLp.png",
    url: "https://www.theuniques.in/",
  },
  {
    name: "Global Future Summit",
    logo: "/glob-Dzyn9PLW.png",
    url: "https://global-future-summit.theuniques.in",
  },
  {
    name: "Elevate 2024",
    logo: "/elevate_logo.png",
    url: "https://elevate.theuniques.in/#ideajam", // Replace with actual URL
  },
  {
    name: "Godigitify",
    logo: "/Godigitify.png",
    url: "https://www.theuniques.in/", // Replace with actual URL
  },
  {
    name: "Click Masters",
    logo: "/click masters logo.png",
    url: "https://www.theuniques.in/", // Replace with actual URL
  },
  {
    name: "Bhart-Tech Hackathon 2.0",
    logo: "/2.0logo.eb68755e126d8cfbb6ab.png",
    url: "https://bharat-tech-xperience.theuniques.in", // Replace with actual URL
  },
  {
    name: "Amar Travel Agency",
    logo: "/gvuvg.png",
    url: "https://amarpreet004.github.io/project-web/home.html", // Replace with actual URL
  },
  {
    name: "TechLearn Academy",
    logo: "/Logo-2.png",
    url: "https://www.techlearns.in", // Replace with actual URL
  },
];

export default function ProjectsShowcase() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white py-4 px-2">
      <h2 className="text-4xl md:text-6xl font-bold text-[#5C0632] text-center mb-10 tracking-wide">OUR PROJECTS</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl items-start justify-center">
        {/* Left: Project names as glassmorphism buttons, 4 visible, scrollable */}
        <div
          className="flex flex-col gap-6 flex-1 max-w-sm w-80% items-end overflow-y-auto hide-scrollbar md:items-end items-center md:w-80% w-full"
          style={{ maxHeight: 6 * 72 + 18 }}
        > {/* 4 buttons, 72px each incl. gap */}
<style jsx>{`
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
          {projects.map((project, idx) => (
            <button
              key={project.name}
              onClick={() => setSelected(idx)}
              className={`w-full flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none border-2 border-[#5C0632] text-lg font-semibold tracking-wide ${
                selected === idx
                  ? "text-[#5C0632] bg-white/80"
                  : "hover:bg-[#5C0632]/40 opacity-100 text-[#5C0632]"
              } h-16 glass-btn`}
              style={{
                minHeight: 64,
                minWidth: 320,
                maxWidth: 600,
                WebkitBackdropFilter: 'blur(18px)',
                backdropFilter: 'blur(18px)',
                border: '2px solid #5C0632',
                background: selected === idx
                  ? 'rgba(255,255,255,0.85)'
                  : 'rgba(92,6,50,0.13)',
                color: '#5C0632',
                marginBottom: 0,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glass shine overlay */}
              <span style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.10) 100%)',
                pointerEvents: 'none',
                borderRadius: '9999px',
                zIndex: 1,
              }} />
              <span style={{ position: 'relative', zIndex: 2 }}>{project.name}</span>
            </button>
          ))}
        </div>
        {/* Right: Website preview */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="w-full max-w-3xl aspect-video rounded-[26px] border-8 border-[#5C0632] overflow-hidden shadow-2xl bg-white">
            <iframe
              key={projects[selected].url}
              src={projects[selected].url}
              title={projects[selected].name}
              className="w-full h-full min-h-[600px]"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
