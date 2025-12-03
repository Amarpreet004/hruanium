"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Search,
  Share2,
  MousePointerClick,
  FileText,
  Mail,
  BarChart3,
} from "lucide-react";

export default function Seo() {
  const router = useRouter();

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      desc: "Boost your rankings with proven on-page and off-page SEO techniques. We optimize your site to drive organic traffic and conversions.",
      icon: <Search className="w-10 h-10 text-[#5C0632]" />,
    },
    {
      title: "Social Media Marketing",
      desc: "Engage your audience with high-impact campaigns on Instagram, Facebook, LinkedIn, and more. Let’s make your brand trend.",
      icon: <Share2 className="w-10 h-10 text-[#5C0632]" />,
    },
    {
      title: "Google Ads & PPC Campaigns",
      desc: "Get immediate results with smart ad strategies that maximize your ROI while reducing wasted spend.",
      icon: <MousePointerClick className="w-10 h-10 text-[#5C0632]" />,
    },
    {
      title: "Content Marketing",
      desc: "High-quality, SEO-optimized blogs, visuals, and videos to establish your authority and attract your target audience.",
      icon: <FileText className="w-10 h-10 text-[#5C0632]" />,
    },
    {
      title: "Email & Automation",
      desc: "Personalized email campaigns that nurture leads and convert them into loyal customers.",
      icon: <Mail className="w-10 h-10 text-[#5C0632]" />,
    },
    {
      title: "Analytics & Reporting",
      desc: "Track your performance in real time with transparent data reports and continuous optimization.",
      icon: <BarChart3 className="w-10 h-10 text-[#5C0632]" />,
    },
  ];

  return (
    <div className="w-[97%] mx-auto py-16 md:py-24 px-6 md:px-10 rounded-3xl">
      {/* Title Section */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          <span className="text-[#5C0632]">Digital Marketing Services</span>
        </h2>
        
      </div>

      {/* Service Boxes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(92, 6, 50, 0.4)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-white text-[#5C0632] p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 cursor-pointer transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-center">
              {service.title}
            </h3>
            <p className="text-[#333] text-sm leading-relaxed text-center">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => router.push("/contact/Bookcall")}
          className="bg-[#5C0632] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#460127] transition-all"
        >
          Get in Touch
        </motion.button>
      </div>
    </div>
  );
}
