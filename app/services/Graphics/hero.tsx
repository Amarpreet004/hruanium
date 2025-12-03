"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FalconHero() {
  const testimonials = [
    { quote: "/UNIQUES.png", name: "Image 1" },
    { quote: "/techleran.png", name: "Image 2" },
    { quote: "/bharattech.png", name: "Image 3" },
    { quote: "/amartrevel.png", name: "Image 4" },
    { quote: "/clickmasterweb.png", name: "Image 5" },
  ];

  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 relative overflow-hidden min-h-[70vh] md:min-h-screen">
      {/* Left Section (text) */}
      <div className="max-w-xl space-y-6 text-center md:text-left z-10 mt-20 md:mt-0">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Expert <span className="text-[#5C0632]">UI/UX & Graphic Design</span>{" "}
          That Builds Your Brand
        </h1>
        <p className="text-gray-600">
          We create stunning, user-centric designs that convert visitors into
          customers. From logos and branding to complete web solutions, we bring
          your vision to life.
        </p>

        {/* Redirect button */}
        <Link href="/contact/Bookcall">
          <button className="px-8 py-3 bg-[#5C0632] text-white font-medium rounded-full shadow-md hover:bg-[#400224] transition">
            Get Your Free Quote
          </button>
        </Link>
      </div>

      {/* Right Section — hidden on mobile */}
      <div className="hidden md:flex relative md:w-[580px] h-auto md:h-[650px] justify-center items-center mt-12 md:mt-0 overflow-hidden">
        <div className="absolute inset-0 flex justify-center gap-12">
          <InfiniteMovingCards
            items={testimonials}
            direction="up"
            speed="slow"
            offset={0}
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="down"
            speed="slow"
            offset={-200}
          />
        </div>

        {/* Gradient fades top and bottom */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
}

function InfiniteMovingCards({
  items,
  direction = "up",
  speed = "slow",
  offset = 0,
}: {
  items: { quote: string; name: string }[];
  direction?: "up" | "down";
  speed?: "slow" | "fast";
  offset?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(offset);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let requestId: number;
    const scrollSpeed = speed === "fast" ? 1.2 : 0.5;

    const animate = () => {
      positionRef.current += direction === "up" ? -scrollSpeed : scrollSpeed;
      const resetPoint = scroller.scrollHeight / 2;
      if (Math.abs(positionRef.current) >= resetPoint) {
        positionRef.current = 0;
      }
      scroller.style.transform = `translateY(${positionRef.current}px)`;
      requestId = requestAnimationFrame(animate);
    };

    requestId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestId);
  }, [direction, speed]);

  return (
    <div className="relative w-[520px] h-[650px] overflow-hidden rounded-3xl">
      <div ref={scrollerRef} className="flex flex-col items-center gap-10">
        {items.concat(items).map((item, i) => (
          <div
            key={i}
            className="border border-[#5C0632] rounded-3xl overflow-hidden shadow-md bg-white"
          >
            <Image
              src={item.quote}
              alt={item.name}
              width={520}
              height={300}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
