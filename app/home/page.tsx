"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";

export default function HomePage() {
  return <HeroParallaxDemo />;
}

function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

// Non-exported products array
const products = [
  {
    title: "Moonbeam",
    link: "https://www.techlearns.in",
    thumbnail:
      "/techleran.png",
  },
  {
    title: "Cursor",
    link: "https://www.theuniques.in",
    thumbnail:
      "/uniquesimage.png",
  },
  {
    title: "Rogue",
    link: "https://amarpreet004.github.io/project-web/home.html",
    thumbnail:
      "/amartrevel.png",
  },

  {
    title: "Editorially",
    link: "https://bharat-tech-xperience.theuniques.in",
    thumbnail:
      "/bharattech.png",
  },
  {
    title: "Editrix AI",
    link: "https://amarpreet004.github.io/project-web/home.html",
    thumbnail:
      "/amartrevel.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://global-future-summit.theuniques.in",
    thumbnail:
      "/Global.png",
  },

  {
    title: "Algochurn",
    link: "https://bharat-tech-xperience.theuniques.in",
    thumbnail:
      "/bharattech.png",
  },
  {
    title: "Aceternity UI",
    link: "https://www.theuniques.in",
    thumbnail:
      "/uniquesimage.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/bharattech.png",
  },
  {
    title: "SmartBridge",
    link: "https://amarpreet004.github.io/project-web/home.html",
    thumbnail:
      "/amartrevel.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://global-future-summit.theuniques.in",
    thumbnail:
      "/Global.png",
  },

  {
    title: "Creme Digital",
    link: "https://bharat-tech-xperience.theuniques.in",
    thumbnail:
      "/bharattech.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://www.techlearns.in",
    thumbnail:
      "/techleran.png",
  },
  {
    title: "Invoker Labs",
    link: "https://www.theuniques.in",
    thumbnail:
      "/uniquesimage.png",
  },
  {
    title: "E Free Invoice",
    link: "https://amarpreet004.github.io/project-web/home.html",
    thumbnail:
      "/amartrevel.png",
  },
];
