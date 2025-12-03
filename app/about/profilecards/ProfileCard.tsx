"use client";

import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import PopupCard from "./popupcard";

type Profile = {
  name: string;
  role: string;
  image: string;
  batch: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
  };
  skills: string[];
  about: string;
  achievements: { title: string; date?: string; desc?: string }[];
};

export function ThreeDCardDemo() {


  return (
    <div className="min-h-screen px-10 py-20">
      <div className="flex flex-col md:flex-row items-start gap-20">
        {/* Left side: 3D card */}
        <CardContainer className="inter-var" containerClassName="p-0">
          <CardBody className="rounded-xl border overflow-hidden shadow-xl bg-gray-50 dark:bg-black border-black/[0.1] dark:border-white/[0.2] w-96 h-[22rem]">
            <CardItem translateZ={100} className="relative w-full h-full">
              <img
                src={"/founder.jpg"}
                alt="card image"
                className="w-full h-full object-cover"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* Right side: Page content */}
        <div className="flex-1 text-black mt-5 md:mt-0">
          <h1 className="text-4xl font-bold">Amarpreet Singh</h1>
          <h4 className="text-1xl font-bold">Founder</h4>
          <p className="mt-4 max-w-xl text-black">
            As the founder of Hranium Infotech, my vision was clear from day one—to create a one-stop digital powerhouse that delivers modern, meaningful, and measurable results. What started as a passion for web design and visual creativity has now grown into a full-fledged digital solutions startup.
At Hranium Infotech, we specialize in website design & development, graphic design, video editing, and digital courses. We've already successfully delivered over 5 modern websites, each tailored to meet our clients’ unique needs. But we don’t just build websites—we take full ownership of our clients' online presence, from social media management to ongoing web maintenance and digital branding.
Our goal is simple: Empower businesses to grow through design, technology, and strategy.
With every project, we aim to blend creativity with functionality, offering not just a service—but a solution.
          </p>
        </div>
      </div>
    </div>
  );
}

function SequentialBurstText({ showSecondCard }: { showSecondCard: boolean }) {
  const [visible, setVisible] = useState<boolean[]>([]);
  const [currentText, setCurrentText] = useState(showSecondCard);

  // Texts for both states
  const texts = showSecondCard
    ? [
        'Meet', 'Alex', 'Kim', '\n',
        'Kapil ', 'is', 'a', 'Product', 'Designer', '&', 'UI/UX', 'Specialist.', 'Explore', 'his', 'portfolio', 'or', 'get', 'in', 'touch', 'to', 'collaborate', 'on', 'your', 'next', 'project!'
      ]
    : [
        'Welcome', 'to', 'Our', 'Platform', '\n',
        'Amarpreet', 'Singh', 'is', 'the', 'Founder.', 'Discover', 'our', 'features', 'and', 'sign', 'up', 'to', 'get', 'started!'
      ];

  useEffect(() => {
    setCurrentText(showSecondCard);
    setVisible(Array(texts.length).fill(false));
    texts.forEach((_, i) => {
      setTimeout(() => {
        setVisible((v) => {
          const copy = [...v];
          copy[i] = true;
          return copy;
        });
      }, i * 50 + 100);
    });
    // eslint-disable-next-line
  }, [showSecondCard]);

  // Split into title and paragraph by \n
  const titleWords: string[] = [];
  const paraWords: string[] = [];
  let foundBreak = false;
  texts.forEach((w) => {
    if (w === '\\n') foundBreak = true;
    else if (!foundBreak) titleWords.push(w);
    else paraWords.push(w);
  });

  let paraIdx = titleWords.length + 1;

  // To prevent layout shift, always render all words (with opacity 0 if not visible)
  return (
    <div className="flex-1 text-gray-800 dark:text-white mt-5 md:mt-0 min-h-[140px]">
      <h1 className="text-4xl font-bold flex flex-wrap gap-2">
        {titleWords.map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: visible[i] ? 1 : 0,
              transform: visible[i] ? 'scale(1)' : 'scale(0.7)',
              transition: 'opacity 0.3s, transform 0.3s',
              transitionDelay: `${i * 50}ms`,
              minWidth: word === '\\n' ? '100%' : undefined,
            }}
          >
            {word === '\\n' ? <br /> : word}
          </span>
        ))}
      </h1>
      <p className="mt-4 max-w-xl flex flex-wrap gap-2">
        {paraWords.map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: visible[paraIdx + i] ? 1 : 0,
              transform: visible[paraIdx + i] ? 'scale(1)' : 'scale(0.7)',
              transition: 'opacity 0.3s, transform 0.3s',
              transitionDelay: `${(paraIdx + i) * 50}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}
