"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function GraphicDesignSection() {
  const router = useRouter();

  return (
    <>
      {/* SEO Optimized Metadata */}
      <Head>
        <title>Graphic Design Services | Hranium Infotech</title>
        <meta
          name="description"
          content="Hranium Infotech offers professional graphic design, UI/UX, branding, and digital marketing services. We create designs that elevate your brand and drive engagement."
        />
        <meta
          name="keywords"
          content="Graphic Design, Branding, UI/UX Design, Hranium Infotech, Logo Design, Digital Marketing, SEO Optimization, Social Media Graphics"
        />
        <meta name="author" content="Hranium Infotech" />
      </Head>

      {/* Main Section */}
      <div className="w-[97%] mx-auto bg-white text-white rounded-3xl p-6 sm:p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 mt-12 shadow-2xl overflow-hidden">
        {/* Left Animated Stats Card */}
        <motion.div
          whileHover={{ rotate: -3, scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="bg-[#5C0632] text-white rounded-2xl p-8 sm:p-10 w-full md:w-1/2 shadow-xl cursor-pointer relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />

          <div className="flex flex-col gap-6 text-center md:text-left">
            <div>
              <h2 className="text-5xl sm:text-6xl font-extrabold">600+</h2>
              <p className="text-lg sm:text-xl opacity-90 mt-2">
                Designs Crafted Monthly
              </p>
            </div>

            <div>
              <h2 className="text-5xl sm:text-6xl font-extrabold">100+</h2>
              <p className="text-lg sm:text-xl opacity-90 mt-2">
                Event Branding Projects
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-[#5C0632]">
            Ready to Elevate Your <br className="hidden sm:block" /> Digital
            Presence?
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
            Unlock the power of cutting-edge <strong>graphic design</strong> and
            <strong> digital marketing</strong> with Hranium Infotech. From
            eye-catching logos and <strong>brand identity design</strong> to
            full-scale <strong>UI/UX</strong> and <strong>SEO campaigns</strong>,
            we help your business stand out in today’s competitive market.
          </p>

          <button
            onClick={() => router.push("/contact/Bookcall")}
            className="bg-white text-[#5C0632] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-lg hover:bg-[#5C0632] hover:text-white hover:scale-105"
          >
            Book A Demo
          </button>
        </div>
      </div>

          </>
  );
}
