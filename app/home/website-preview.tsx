"use client";

import React from "react";

export default function WebsitePreview() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white py-4 px-2">
      <h2 className="text-4xl md:text-6xl font-bold text-[#5C0632] text-center mb-10 tracking-wide">
        WEBSITE PREVIEW
      </h2>
      <div className="flex items-center justify-center w-full">
        <div className="w-full max-w-3xl aspect-video rounded-[26px] border-8 border-[#5C0632] overflow-hidden shadow-2xl bg-white">
          <iframe
            src="https://www.falconwebsolution.com"
            title="Hranium Infotech"
            className="w-full h-full min-h-[600px]"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
