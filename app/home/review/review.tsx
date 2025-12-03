"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../review/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
     <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Reviews
      </h1><InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Hranium Infotech created an absolutely stunning website for our business. Their design expertise and attention to detail resulted in a professional, modern site that perfectly represents our brand. The quality is exceptional!",
    name: "Sarah Johnson",
    title: "CEO, TechFlow Solutions",
  },
  {
    quote:
      "The website design work by Hranium Infotech exceeded all our expectations. They delivered a beautiful, responsive site with incredible user experience. Our clients are constantly complimenting the design quality.",
    name: "Michael Chen",
    title: "Founder, InnovateNow",
  },
  {
    quote: "Hranium Infotech transformed our online presence with their outstanding web design skills. The website they created is visually stunning, fast, and perfectly captures our brand identity. Truly premium quality work.",
    name: "Emily Rodriguez",
    title: "Marketing Director, Creative Hub",
  },
  {
    quote:
      "The quality of website design and development from Hranium Infotech is top-notch. They created a professional, elegant site that showcases our services beautifully. Their design skills are remarkable.",
    name: "David Thompson",
    title: "Business Owner, Local Services Pro",
  },
  {
    quote:
      "Hranium Infotech delivered exceptional website design and branding services. The quality of their design work is outstanding - clean, modern, and highly professional. Our new site receives compliments daily!",
    name: "Lisa Park",
    title: "Brand Manager, StyleCorp",
  },
  {
    quote:
      "Professional, creative, and detail-oriented - Hranium Infotech created a high-quality website that perfectly represents our company. The design is modern, responsive, and exactly what we envisioned.",
    name: "Robert Kumar",
    title: "CTO, DataTech Systems",
  },
];
