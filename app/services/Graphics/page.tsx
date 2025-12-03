"use client"

import DomeGallery from "./DomeGallery";
import WhoAreYou from "./graphictype";
import WebDevToolsCards from "./graphic-tools";
import title from "./title";
import StatsDemoCard from "./last";
import FalconHero from "./hero";
export default function Page() {
  return (
    <>
    
      <div className="mt-8">
        <FalconHero />
      </div>
      <div className="mt-0">
        <WebDevToolsCards/>
      </div>
      <div className="mt-8">
        <WhoAreYou />
      </div>
      <div className="mb-8">
        {title()}
      </div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <DomeGallery />
      </div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <StatsDemoCard />
      </div>
      
    </>
  )
}