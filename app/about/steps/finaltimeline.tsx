"use client";
// Reverted to previous design: alternating image + text timeline blocks with central dots.

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface StepItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const steps: StepItem[] = [
  {
    title: "Discovery & Consultation",
    description:
      "We start by understanding your business, goals, and challenges through a detailed consultation.",
    image: "/business.jpg",
    alt: "Discovery meeting",
  },
  {
    title: "Strategy & Planning",
    description:
      "We craft a tailored strategy, define success metrics, timelines, and resource alignment for impact.",
    image: "/Strategy & Planning.jpg",
    alt: "Strategy planning",
  },
  {
    title: "Design & Prototyping",
    description:
      "High‑fidelity visuals and interactive prototypes bring the direction to life for feedback and refinement.",
    image: "/Design & Development.jpg",
    alt: "Design process",
  },
  {
    title: "Development & Build",
    description:
      "We build with performance, scalability, and best practices—integrating systems and ensuring reliability.",
    image: "/developer-testing-website-responsiveness_167857-47281-2.jpg",
    alt: "Development build",
  },
  {
    title: "Launch & Optimization",
    description:
      "Deployment, monitoring, and iterative improvements focused on measurable growth and user experience.",
    image: "/launch.jpeg",
    alt: "Launch process",
  },
];

function TimelineDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [progress, setProgress] = useState(0); // 0 - 1 scroll progress within component
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll progress calculation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function onScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = Math.max(0, vh * 0.1 - rect.top); // when top enters 10% viewport
      const total = rect.height - vh * 0.2; // subtract some for nicer end
      const raw = total > 0 ? start / total : 0;
      setProgress(Math.min(1, Math.max(0, raw)));
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Active step detection with IntersectionObserver
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const idx = stepRefs.current.findIndex(r => r === visible[0].target);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      { root: null, threshold: 0.4 }
    );
    stepRefs.current.forEach(li => li && obs.observe(li));
    return () => obs.disconnect();
  }, []);

  // Build dynamic gradient for vertical line fill
  const lineStyle: React.CSSProperties = {
    background: `linear-gradient(to bottom, rgba(92,6,50,0) 0%, #5C0632 0%, #5C0632 ${progress * 100}%, rgba(92,6,50,0.25) ${progress * 100}%, rgba(92,6,50,0) 100%)`,
    transition: 'background 120ms linear'
  };

  return (
    <section ref={containerRef} className="relative w-full py-20 md:py-28 bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#5C0632] dark:text-[#5C0632] mb-3">
            How we work
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto text-sm md:text-base">
            A clear, collaborative journey from first conversation to sustained success.
          </p>
        </header>

        <div className="relative">
          {/* Central vertical line with animated fill */}
          <div
            className="hidden md:block absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-neutral-200/70 dark:bg-neutral-700/50"
            aria-hidden
          />
          <div
            className="hidden md:block absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full pointer-events-none mix-blend-normal"
            style={lineStyle}
            aria-hidden
          />

          <ol className="space-y-24 md:space-y-40">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0; // even index left image, odd index right image
              return (
                <li
                  key={step.title}
                  ref={(el) => { stepRefs.current[idx] = el; }}
                  className="relative"
                >
                  {/* Dot */}
                  <div
                    className={`hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 w-5 h-5 rounded-full ring-4 ring-white dark:ring-neutral-950 shadow-md transition-all duration-300 ${
                      idx <= activeIndex
                        ? 'bg-gradient-to-br from-[#5C0632] to-[#b83d76] scale-100'
                        : 'bg-neutral-300 dark:bg-neutral-700 scale-75 opacity-70'
                    }`}
                    aria-hidden
                  />

                  <div
                    className={`grid md:grid-cols-2 gap-10 items-start md:items-center md:gap-16 ${
                      isEven ? '' : 'md:[&>div:first-child]:order-2'
                    }`}
                  >
                    {/* Image (hidden on small screens) */}
                    <div className="relative hidden md:block">
                      <div
                        className={`relative rounded-3xl overflow-hidden shadow-xl ring-1 transition-all duration-500 ${
                          idx === activeIndex
                            ? 'shadow-neutral-300/70 dark:shadow-black/60 ring-neutral-300 dark:ring-neutral-600 scale-[1.01]'
                            : 'shadow-neutral-200/50 dark:shadow-black/40 ring-neutral-200/60 dark:ring-neutral-700/60'
                        }`}
                      >
                        <Image
                          src={step.image}
                          alt={step.alt}
                          width={900}
                          height={600}
                          className="w-full h-auto object-cover aspect-[16/9] md:aspect-[5/3] transition-transform duration-700 hover:scale-[1.015]"
                          priority={idx === 0}
                        />
                      </div>
                    </div>

                    {/* Text Block */}
                    <div className={`relative ${isEven ? 'md:pl-6 lg:pl-10' : 'md:pr-6 lg:pr-10'}`}> 
                      <h3 className={`text-2xl md:text-3xl font-bold tracking-tight mb-4 transition-colors ${
                        idx === activeIndex ? 'text-[#5C0632]' : 'text-neutral-900 dark:text-white'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`leading-relaxed text-sm md:text-base max-w-md transition-colors ${
                        idx === activeIndex ? 'text-neutral-700 dark:text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'
                      }`}>
                        {step.description}
                      </p>
                      <div className="mt-6 flex items-center gap-3">
                        <span className={`inline-flex h-2 w-2 rounded-full transition-colors ${
                          idx === activeIndex ? 'bg-[#5C0632]' : 'bg-neutral-400 dark:bg-neutral-500'
                        }`} />
                        <span className="text-xs uppercase tracking-wide font-medium text-neutral-500 dark:text-neutral-400">
                          Step {idx + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

// Provide both named and default exports so existing import { TimelineDemo } works
export { TimelineDemo };
export default TimelineDemo;
