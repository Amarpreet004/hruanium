"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function InfiniteMovingCardsDemo() {
  const testimonials = [
    { quote: "/UNIQUES.png", name: "Image 1", title: "" },
    { quote: "/techleran.png", name: "Image 2", title: "" },
    { quote: "/bharattech.png", name: "Image 3", title: "" },
    { quote: "/amartrevel.png", name: "Image 4", title: "" },
    { quote: "/clickmasterweb.png", name: "Image 5", title: "" },
  ];

  return (
    <div className="h-[55rem] flex flex-col items-center justify-center bg-white relative overflow-hidden">
      
      {/* Both Carousels */}
      <div className="relative flex justify-center items-center gap-16">
        {/* Carousel 1 */}
        <InfiniteMovingCards
          items={testimonials}
          direction="up"
          speed="slow"
          offset={0}
        />
        {/* Carousel 2 (starts opposite) */}
        <InfiniteMovingCards
          items={testimonials}
          direction="down"
          speed="slow"
          offset={-200} // Adjust this to align visually (half the card height)
        />
      </div>

      <style>{`
        .infinite-moving-card {
          border-color: #5C0632 !important;
        }
      `}</style>
    </div>
  );
}

function InfiniteMovingCards({
  items,
  direction = "up",
  speed = "slow",
  offset = 0,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "up" | "down";
  speed?: "slow" | "fast";
  offset?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let scrollAmount = offset;
    let requestId: number;

    const move = () => {
      if (!scroller) return;
      const scrollSpeed = speed === "fast" ? 1.5 : 0.5;
      scrollAmount += direction === "up" ? -scrollSpeed : scrollSpeed;
      scroller.style.transform = `translateY(${scrollAmount}px)`;

      const resetPoint = scroller.scrollHeight / 2;
      if (Math.abs(scrollAmount) >= resetPoint) {
        scrollAmount = offset; // reset to same offset
      }

      requestId = requestAnimationFrame(move);
    };

    requestId = requestAnimationFrame(move);

    return () => cancelAnimationFrame(requestId);
  }, [direction, speed, offset]);

  return (
    <div className="relative h-[400px] w-[350px] overflow-hidden">
      <div ref={scrollerRef} className="flex flex-col items-center gap-8">
        {items.concat(items).map((item, i) => (
          <div
            key={i}
            className="infinite-moving-card border border-[#5C0632] rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src={item.quote}
              alt={item.name}
              width={350}
              height={220}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
