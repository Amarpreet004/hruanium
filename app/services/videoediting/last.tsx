"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SeoMarketingPage() {
  const router = useRouter();

  return (
    <div className="w-[97%] mx-auto text-white  py-16 md:py-24 px-6 md:px-10 rounded-3xl " >
     
      <div className="mt-20 bg-[#5C0632] rounded-3xl text-center py-12 px-8 md:px-20 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Dominate the Digital Space?
        </h2>
        <p className="text-gray-100 mb-8 text-lg">
          Let Hranium Infotech help you build a strong digital footprint with
          proven marketing strategies that deliver real results.
        </p>
        <button
          onClick={() => router.push("/contact/Bookcall")}
          className="bg-white text-[#5C0632] font-semibold px-10 py-4 rounded-lg hover:bg-[#2a0018] hover:text-white transition-all duration-300"
        >
          Get Your Free Consultation
        </button>
      </div>
    </div>
  );
}
