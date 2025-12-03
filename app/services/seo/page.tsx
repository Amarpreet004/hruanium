"use client"
import Hero from "./hero";

import Seo from "./services";
import MarketingSoftware from "./types";
import WhoWeAre from "./score/score";
import SeoMarketingPage from "./realast";

export default function Page() {
  return (
    <>
    
      <div className="mt-14">
        <Hero />
      

        <Seo />
    
      <WhoWeAre />
      
        <MarketingSoftware />
        <SeoMarketingPage />
      </div>
      
    </>
  )
}