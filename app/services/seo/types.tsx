"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Database, UserCog, Users } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SeoMarketingPage() {
  const router = useRouter();

  const features = [
    {
      title: "Real-Time Analytics Access",
      icon: <Database className="w-8 h-8 text-[#5C0632]" />,
    },
    {
      title: "24/7 Expert Support",
      icon: <UserCog className="w-8 h-8 text-white" />,
      highlight: true,
    },
    {
      title: "Quick & Easy Report Downloads",
      icon: <Download className="w-8 h-8 text-[#5C0632]" />,
    },
    {
      title: "Manage Multiple Campaigns",
      icon: <Users className="w-8 h-8 text-[#5C0632]" />,
    },
  ];

  return (
    <>
      {/* ✅ Use <Head> properly for SEO */}
      <Head>
        <title>SEO & Digital Marketing | Hranium Infotech</title>
        <meta
          name="description"
          content="Boost your online presence with Hranium Infotech’s SEO and digital marketing services. Grow your business with proven strategies and expert support."
        />
        <meta
          name="keywords"
          content="SEO services, Hranium Infotech, digital marketing, PPC campaigns, content marketing, analytics, social media optimization"
        />
      </Head>

      {/* ✅ Main Page Content */}
      <div className="w-[97%] mx-auto bg-white text-gray-900 py-20 px-6 md:px-12 rounded-3xl shadow-xl">
        {/* Title Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Explore Our <br />
            <span className="text-[#5C0632]">Smart Marketing Tools</span>
          </h2>
          
        </div>

        {/* Feature Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className={`p-8 rounded-2xl text-center font-semibold shadow-md cursor-pointer transition-all duration-300 border border-gray-200 ${
                feature.highlight
                  ? "bg-[#5C0632] text-white shadow-lg hover:shadow-[#5C0632]/40"
                  : "bg-white text-gray-900 hover:border-[#5C0632] hover:shadow-[#5C0632]/20"
              }`}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <p className="text-lg font-semibold">{feature.title}</p>
            </motion.div>
          ))}

          {/* Wide Folder Box */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.push("/contact/Bookcall")}
            className="lg:col-span-2 bg-[#5C0632] text-white rounded-[2rem] flex flex-col justify-between p-12 shadow-lg hover:shadow-[#5C0632]/50 min-h-[280px] cursor-pointer"
          >
            <div>
              <h3 className="text-4xl font-bold leading-tight mb-8">
                Explore <br /> Our Smart <br /> Marketing Tools
              </h3>
            </div>
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.4 }}
              className="bg-white/20 w-14 h-14 flex items-center justify-center rounded-full self-end hover:bg-white/30 transition-all"
            >
              <ArrowUpRight className="text-white w-7 h-7" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
