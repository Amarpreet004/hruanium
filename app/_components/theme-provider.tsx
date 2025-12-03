"use client";

import { useEffect } from "react";

export default function ThemeProvider() {
  useEffect(() => {
    // Always force light mode
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    // Set localStorage to light to maintain consistency
    localStorage.theme = "light";
  }, []);

  return null;
}