import React from 'react'
import VideoHeroSection from './heroVideo'
import VideoTools from './VideoTools'
import VideoEditingGallery from './videoediting'
import VideoCoreServices from './video-tools'
import WebDevToolsCards from './tool'
import SeoMarketingPage from './last'

export default function Page() {
  return (
    <>
      <div className="mt-8">
        <VideoHeroSection />
      </div>
      <div className="mt-8">
        <WebDevToolsCards/>
      </div>
      <div className="mt-8">
       <VideoEditingGallery />
      </div>
      <div className="mb-8">
        
        <VideoTools />
      </div>
      <div className="mb-8">
        <VideoCoreServices />
      </div>
      <div className="mb-8">
       < SeoMarketingPage />
      </div>
    </>
  )
}
