

import Score from "./home/score/score";
import React from "react";

import { InfiniteMovingCardsDemo } from "./home/review/review";
import {FAQ} from "../app/contact/faq";
import DEV from "./home/Hero/DEV";
import { InfiniteMovingCardsDemo as Crousel } from "./home/Hero/crousel/crousel";
import WhoAreYou from "./home/whoareyou/whoareyou";


import ServicesFAQ from "./home/services/ourservices";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Desktop */}
      <section className="w-full hidden md:block mt-28">
        <DEV />
      </section>
      {/* WhoAreYou Section - Desktop */}
      <section className="w-full hidden md:block">
        <WhoAreYou />
      </section>
      {/* Crousel Section - Desktop */}
      <section className="w-full hidden md:block">
        <Crousel />
      </section>
      {/* Our Services Section - Desktop */}
      <section className="w-full hidden md:block">
        <ServicesFAQ />
      </section>
      
      {/* Hero Section - Mobile */}
      <section className="w-full block md:hidden mt-28">
        <DEV />
      </section>
      {/* Crousel Section - Mobile */}
      <section className="w-full block md:hidden">
        <Crousel />
      </section>
      {/* Our Services Section - Mobile */}
      <section className="w-full block md:hidden">
        <ServicesFAQ />
      </section>
      
      {/* Services Section with proper spacing */}
      {/* <section className="w-full bg-white dark:bg-black pt-20 mt-20">
        <FeaturesSectionDemo/>
      </section> */}
      {/* Other Sections with spacing */}
      {/* <div className="mt-20">
        <StickyScrollRevealDemo/>
      </div> */}
      <div className="mt-20">
        <Score />
      </div>
      {/* <div className="mt-20">
        <ProjectsShowcase />
      </div> */}
      <div className="mt-20">
        <InfiniteMovingCardsDemo/>
      </div>
      <FAQ />
    </div>
  );
}
