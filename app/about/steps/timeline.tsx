"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image?: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Framer Motion scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Animate the vertical line's height based on scroll progress
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  const springHeight = useTransform(heightTransform, value => value);
  const springOpacity = useTransform(opacityTransform, value => value);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="mb-8 w-full flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#5C0632] mb-4 text-center tracking-tight">
          How we work
        </h2>
        <div className="w-16 h-1 bg-[#5C0632] rounded-full mx-auto mb-4" />
        <p className="text-lg md:text-xl text-[#374151] text-center max-w-2xl">
          step to work
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 px-2 md:px-0">
        {/* Center vertical line (desktop only) */}
        <div
          style={{ height: height + "px" }}
          className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%]  to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: springHeight, opacity: springOpacity }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#5C0632] via-[#660033] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>

        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start md:items-center justify-between pt-12 md:pt-40 md:gap-10 pl-8 md:pl-0"
            >
              {/* Mobile left vertical guide & dot */}
              <div className="md:hidden absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#5C0632]/40 to-transparent" aria-hidden />
              <div className="md:hidden absolute left-0 top-6 w-4 h-4 rounded-full bg-[#5C0632] ring-4 ring-white dark:ring-neutral-950" aria-hidden />
              {/* Timeline entry row */}
              {isEven ? (
                <>
                  {/* Image left */}
                  <div className="hidden md:flex w-full md:w-1/2 justify-end md:pr-10 order-2 md:order-1">
                    {item.image && (
                      <div className="w-full flex justify-end md:justify-end items-center">
                        {item.image}
                      </div>
                    )}
                  </div>
                  {/* Content right */}
                  <div className="flex w-full md:w-1/2 justify-start md:pl-10 order-1 md:order-2">
                    <div className="w-full text-left md:text-right">
                      <h3 className="text-2xl md:text-4xl font-bold mb-4" style={{ color: '#5C0632' }}>
                        {item.title}
                      </h3>
                      {item.content}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Content left */}
                  <div className="flex w-full md:w-1/2 justify-end md:pr-10 order-2 md:order-1">
                    <div className="w-full text-right md:text-left">
                      <h3 className="text-2xl md:text-4xl font-bold mb-4" style={{ color: '#5C0632' }}>
                        {item.title}
                      </h3>
                      {item.content}
                    </div>
                  </div>
                  {/* Image right */}
                  <div className="hidden md:flex w-full md:w-1/2 justify-start md:pl-10 order-1 md:order-2">
                    {item.image && (
                      <div className="w-full flex justify-start md:justify-start items-center">
                        {item.image}
                      </div>
                    )}
                  </div>
                </>
              )}
              {/* Center dot */}
              <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 z-40 flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
