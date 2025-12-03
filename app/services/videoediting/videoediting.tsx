"use client";
import React, { useState } from "react";


const TABS = [
  { label: "YouTube Videos" },
  { label: "reels" },
  { label: "Ad Creatives & VSL" },
];

// Separate video arrays for each tab
const YOUTUBE_VIDEOS = [
  {
    video: "https://www.instagram.com/reel/DOWWH70D9tK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    poster: "https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwOjuiwxVPfLxzcYNR8bWB7AXmHo541u0nMpwV",
  },
  {
    video: "https://www.instagram.com/reel/DOWua17kUYE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    poster: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    video: "https://www.instagram.com/reel/DBDx8EySWF0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    poster: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  },
  {
    video: "https://www.instagram.com/reel/DOam2VmDyjc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==4",
    poster: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  },
];

const REELS_VIDEOS = [
  {
    video: "https://www.instagram.com/reel/DOdHajpgEUu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    poster: "",
  },
  {
    video: "https://www.instagram.com/reel/DOdWeiXCdjx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    poster: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    video: "https://www.instagram.com/reel/DHn1YN7ShJX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    poster: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    video: "https://www.instagram.com/reel/DOtFvlYjNh1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    poster: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
];

const AD_VIDEOS = [
  {
    video: "https://www.instagram.com/reel/DObjBDTj0Vg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    poster: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    video: "https://www.instagram.com/reel/DHlpkE6JFKr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    poster: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    video: "https://www.instagram.com/reel/DI6kkZOOcU3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    poster: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    video: "https://www.instagram.com/reel/DM5CFzHpzn_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    poster: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
];

function getVideosForTab(tabIdx: number) {
  if (tabIdx === 0) return YOUTUBE_VIDEOS;
  if (tabIdx === 1) return REELS_VIDEOS;
  if (tabIdx === 2) return AD_VIDEOS;
  return YOUTUBE_VIDEOS;
}

export default function VideoEditingGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const videos = getVideosForTab(activeTab);

  return (
    <section className="w-full min-h-[80vh] bg-white py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#660033] mb-8 text-center">Our Latest Work</h2>
      {/* Tabs */}
      <div className="flex gap-4 mb-10 flex-wrap justify-center">
        {TABS.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={`px-5 py-2 rounded-lg font-medium transition-all border-2 ${activeTab === idx ? 'border-[#660033] bg-[#660033] text-white shadow-lg' : 'border-[#660033] text-[#660033] bg-transparent hover:bg-[#660033]/10'} focus:outline-none`}
            style={{ minWidth: 140 }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {videos.map((video, idx) => {
          const isYouTube = video.video.includes('youtube.com') || video.video.includes('youtu.be');
          const isInstagram = video.video.includes('instagram.com');
          // Convert Instagram reel URL to embed format if needed
          let embedUrl = video.video;
          if (isInstagram) {
            const match = video.video.match(/instagram.com\/reel\/([\w-]+)/);
            if (match && match[1]) {
              embedUrl = `https://www.instagram.com/reel/${match[1]}/embed`;
            }
          }
          return (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden border-2 border-[#660033] group shadow-lg transition-all duration-300 bg-[#660033]/10 flex items-center justify-center`}
              style={
  activeTab === 1 || activeTab === 2
    ? { aspectRatio: '9/16' }
    : { height: 'auto', minHeight: 200, maxHeight: 400 }
}

            >
              {isYouTube ? (
                <iframe
                  src={
                    video.video.includes('embed')
                      ? video.video
                      : video.video.replace('watch?v=', 'embed/')
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover object-center"
                  style={{ border: 0 }}
                />
              ) : isInstagram ? (
                <iframe
                  src={embedUrl}
                  title="Instagram Reel"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full object-cover object-center"
                  style={{ border: 0, minHeight: '400px' }}
                />
              ) : (
                <video
                  src={video.video}
                  poster={video.poster}
                  className="w-auto h-full max-h-[400px] object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
              <div className={`absolute inset-0 rounded-xl pointer-events-none group-hover:shadow-[0_0_0_4px_rgba(102,0,51,0.15)] transition-all duration-300`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}