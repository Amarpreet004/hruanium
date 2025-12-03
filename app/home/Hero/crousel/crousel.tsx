"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./movingcrousel";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[55rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden ">
      <div className="flex justify-center items-center mb-4 mt-10">
        <span className="flex items-center px-8 py-3 rounded-full border border-[#cbb6c7] bg-[#f8f7fa] text-2xl font-bold text-[#5C0632]">
          <span className="w-5 h-5 rounded-full bg-[#5C0632] mr-4 inline-block"></span>
          Our Projects
        </span>
      </div>
      <div className="w-full bg-white py-2">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="my-8" />
      <div className="w-full bg-white py-2">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
      <style>{`
        .infinite-moving-card {
          border-color: #5C0632 !important;
        }
      `}</style>
      <style>{`
        .border-zinc-200, .dark\\:border-zinc-700 {
          border-color: #5C0632 !important;
        }
      `}</style>
    </div>
  );
}

const testimonials = [
  {
    quote: "/UNIQUES.png",
    name: "Image 1",
    title: "",
  },
  {
    quote: "/techleran.png",
    name: "Image 2",
    title: "",
  },
  {
    quote: "/bharattech.png",
    name: "Image 3",
    title: "",
  },
  {
    quote: "/amartrevel.png",
    name: "Image 4",
    title: "",
  },
  {
    quote: "/clickmasterweb.png",
    name: "Image 5",
    title: "",
  },
];
