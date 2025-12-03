"use client";
import { Suspense } from "react";
import { WorldMapDemo } from "../home/worldservice/mappage";
import ProfileCardI from "./profilecards/ProfileCardI";

import { InfiniteMovingCardsDemo } from "../home/review/review";
import WebDevToolsCards from "./whychosseus/why";
import ScoreSection from "./score/score";
import { TimelineDemo } from "./steps/finaltimeline";
import { TeamCard } from "./Team/team";


function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );
}

export default function About() {
  return (
    <main>
      <Suspense fallback={<LoadingFallback />} >
        <div className="mt-25">
          <WorldMapDemo/>
        </div>
      </Suspense>
      <div className="flex justify-center my-8 w-full">
        <ScoreSection />
      </div>
      <div className="flex justify-center my-8 w-full">
        <WebDevToolsCards />
      </div>
      
      
      <Suspense fallback={<LoadingFallback />}>
        <div className="flex justify-center my-8 w-full">
          <TimelineDemo />
        </div>
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ProfileCardI />
      </Suspense>
      
      <div className="flex justify-center my-8 w-full">
        <TeamCard />
      </div>
      <Suspense fallback={<LoadingFallback />}> 
        <InfiniteMovingCardsDemo/>
      </Suspense>
      
    </main>
  );
}