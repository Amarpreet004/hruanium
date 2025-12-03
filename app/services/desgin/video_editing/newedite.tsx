"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function VideoEditingSection() {
  const router = useRouter();

  return (
    <div className="w-[97%] mx-auto bg-white rounded-3xl py-16 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 shadow-lg">
      {/* Left Side - Video */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl"
      >
        <iframe
          className="w-full h-64 md:h-80 lg:h-[380px] rounded-2xl"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // replace with your video link
          title="Video Editing Showcase"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 text-center lg:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#5C0632] mb-4 leading-snug">
          Professional <span className="text-gray-900">Video Editing</span>
        </h2>
        <p className="text-gray-900 mb-6 text-base md:text-lg leading-relaxed">
          At <span className="font-semibold text-[#5C0632]">Hranium Infotech</span>, 
          we turn your raw clips into cinematic stories. Whether it’s 
          for business promotions, social media reels, or brand videos — 
          our creative editors ensure every frame delivers impact, emotion, 
          and professionalism.
        </p>

        <div className="flex justify-center lg:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.push("/contact/Bookcall")}
            className="bg-[#5C0632] hover:bg-[#450526] text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
