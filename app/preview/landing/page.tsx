"use client";
import React, { useEffect, useState } from "react";

export default function PreviewLanding() {
  // Always embed the external site in this preview route (used by iframe frames)
  return (
    <div className="w-full h-full min-h-[400px] bg-white">
      <iframe
        src="https://www.hraniumin.com"
        title="Hranium Infotech"
        className="w-full h-full min-h-[400px] border-none"
        style={{ border: "none", height: "100%" }}
        loading="lazy"
      />
    </div>
  );
}
