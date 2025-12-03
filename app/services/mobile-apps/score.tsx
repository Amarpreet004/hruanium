

"use client";
import React from "react";
import dynamic from "next/dynamic";

const CountUp = dynamic(() => import("../../home/score/CountUp"));

const scores = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Team Members" },
];

export default function ScoreSection() {
  return (
    <section className="w-full bg-[#F8F9FA] py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {scores.map(({ value, suffix, label }, idx) => (
            <div key={idx} aria-label={label} className="flex flex-col items-center justify-center">
              <span className="text-6xl md:text-7xl font-extrabold text-[#5C0632] mb-2">
                <CountUp to={value} duration={1.5} className="inline" />{suffix}
              </span>
              <span className="text-2xl text-[#3A3F4A] font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
