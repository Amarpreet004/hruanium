import React from "react";
import { StickyScroll } from "../stickyscroll/sticky-scroll-reveal";

const content = [
  {
    title: "Our Philosophy",
    description:
  "At Hranium Infotech, we don’t just build digital products — we engineer experiences that resonate. With a blend of innovation, strategic thinking, and next-gen tools, we create tailored solutions that deliver value far beyond the screen. Every project is a journey, and we’re with you from idea to impact — on time, on budget, and always on point.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white font-bold text-xl">
        <img
          src="/business.jpg"
          alt="Luxentra Team"
          className="rounded-xl shadow-lg w-full h-72 object-cover"
        />
      </div>
    ),
  },
  {
    title: "Our Method",
description:
  "We follow an agile and transparent process that brings your ideas to life — faster. Every step, from research to deployment, is handled with care, creativity, and collaboration. We listen. We prototype. We perfect. And we deliver with excellence.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] text-white font-bold text-xl">
        <img
          src="/meets.jpg"
          alt="Luxentra Collaboration"
          className="rounded-xl shadow-lg w-full h-72 object-cover"
        />
      </div>
    ),
  },
{
  title: "Our Promise",
  description:
    "We're not just service providers — we're your digital partners. Expect proactive communication, continuous support, and results that scale. With Hranium Infotech, your brand doesn’t just grow — it takes flight.",
  content: (
    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white font-bold text-xl">
      <img
        src="/work.jpg"
        alt="Why Choose Luxentra"
        className="rounded-xl shadow-lg w-full h-72 object-cover"
      />
    </div>
  ),
},
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center mb-20 px-4">
        <h1 className="text-2xl md:text-7xl font-bold text-black dark:text-white text-center font-sans">
          How We Work at Hranium Infotech
        </h1>
      </div>
      <div className="w-full">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}

// Place your images in the public directory with the names:
// /about-team.jpg, /approach-collaboration.jpg, /why-choose-us.jpg
// or update the src paths to match your actual image filenames.