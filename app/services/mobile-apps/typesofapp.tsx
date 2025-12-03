"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  User, 
  Building, 
  BookOpen, 
  Camera, 
  TrendingUp, 
  Users, 
  Globe, 
  Heart, 
  Gamepad2, 
  Briefcase, 
  Newspaper,
  Zap,
  Star,
 
  Wrench,
  ArrowUpRight,
  Activity
} from 'lucide-react';

interface WebsiteType {
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  color: string;
  complexity: 'Simple' | 'Medium' | 'Complex';
  features: string[];
  timeline: string;
}

const websiteTypes: WebsiteType[] = [
  {
  name: "E-Commerce App",
  description: "Powerful mobile shopping app with integrated payment systems, product catalogs, and order tracking for a seamless user experience.",
  icon: <ShoppingCart className="w-7 h-7 text-[#5C0632]" />,
  category: "Business",
  color: "from-gray-500 to-white",
  complexity: "Complex",
  features: ["Secure Payments", "Product Catalog", "Push Notifications", "Order Tracking"],
  timeline: "8–12 weeks"
},
{
  name: "On-Demand Service App",
  description: "Feature-rich platform for booking and managing services such as delivery, cleaning, beauty, or repair — built to scale effortlessly.",
  icon: <Wrench className="w-7 h-7 text-[#5C0632]" />,
  category: "Utility",
  color: "from-gray-400 to-gray-700",
  complexity: "Complex",
  features: ["Booking System", "Real-Time Tracking", "Payment Gateway", "User Dashboard"],
  timeline: "10–14 weeks"
},
{
  name: "Social Networking App",
  description: "Engaging mobile app for connecting people with profiles, chat, media sharing, and community features.",
  icon: <Heart className="w-7 h-7 text-[#5C0632]" />,
  category: "Social",
  color: "from-gray-700 to-black",
  complexity: "Complex",
  features: ["User Profiles", "Messaging System", "Post Feeds", "Push Notifications"],
  timeline: "12–20 weeks"
},
{
  name: "Educational App",
  description: "Interactive e-learning app with video lessons, student dashboards, progress tracking, and certification features.",
  icon: <BookOpen className="w-7 h-7 text-[#5C0632]" />,
  category: "Education",
  color: "from-gray-600 to-black",
  complexity: "Complex",
  features: ["Course Management", "Progress Tracking", "Quiz System", "Live Classes"],
  timeline: "10–16 weeks"
},
{
  name: "Healthcare & Fitness App",
  description: "Personal wellness or telehealth app offering health tracking, doctor consultations, and fitness planning.",
  icon: <Activity className="w-7 h-7 text-[#5C0632]" />,

  category: "Health",
  color: "from-gray-300 to-gray-600",
  complexity: "Medium",
  features: ["Appointment Booking", "Health Tracking", "Chat with Experts", "Reminders"],
  timeline: "6–10 weeks"
},
{
  name: "Startup & Business App",
  description: "Custom mobile solutions tailored for startups and enterprises to showcase services, manage teams, and reach customers effectively.",
  icon: <Building className="w-7 h-7 text-[#5C0632]" />,
  category: "Business",
  color: "from-gray-400 to-gray-700",
  complexity: "Medium",
  features: ["Team Management", "Service Listings", "Analytics", "Lead Capture"],
  timeline: "6–12 weeks"
}

];

const WebsiteTypeCard: React.FC<{ websiteType: WebsiteType; index: number }> = ({ websiteType, index }) => {
  const complexityConfig = {
    Simple: { color: "text-white", bg: "bg-gray-500/20", border: "border-gray-500/30" },
    Medium: { color: "text-gray-200", bg: "bg-gray-600/20", border: "border-gray-600/30" },
    Complex: { color: "text-gray-300", bg: "bg-gray-700/20", border: "border-gray-700/30" }
  };

  const config = complexityConfig[websiteType.complexity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      <div className="relative bg-white rounded-3xl border border-[#5C0632]/10 shadow-lg overflow-hidden h-full">
        {/* ...existing code... */}

        {/* Header with floating icon */}
        <div className="relative p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className="relative p-4 bg-[#F8F9FA] rounded-2xl shadow"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {websiteType.icon}
              {/* Floating particles */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-[#5C0632]/20 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </motion.div>

            {/* Removed category and complexity pill from card header */}
          </div>

          <h3 className="text-xl font-bold text-[#5C0632] mb-3">
            {websiteType.name}
          </h3>
          <p className="text-base text-[#3A3F4A] leading-relaxed">
            {websiteType.description}
          </p>
        </div>

        {/* Features section */}
        <div className="px-6 pb-4">
          <h4 className="text-sm font-semibold text-[#5C0632] mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#5C0632]" />
            Key Features
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {websiteType.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="text-xs text-[#5C0632] bg-[#F8F9FA] px-3 py-2 rounded-lg border border-[#5C0632]/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 pt-2">
          <div className="flex items-center justify-between">
            {/* Removed timeline from card footer */}
            <motion.a
              href="/contact/Bookcall" // Update this path if your Get In Touch form is elsewhere
              className="group/btn px-6 py-2 bg-[#5C0632] border border-[#5C0632]/30 rounded-full text-white font-semibold hover:bg-[#660033] transition-all duration-300 shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
              <ArrowUpRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            </motion.a>
          </div>
        </div>

        {/* ...existing code... */}
      </div>
    </motion.div>
  );
};

export default function AppTypesCards() {
  return (
    <div className="relative bg-transparent py-20 px-4 sm:px-6 overflow-hidden">

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Removed 'Diverse Project Portfolio' pill from header */}

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-black">Mobile App Development </span>{" "}
            
          </h1>
          
          <p className="text-xl text-[#5C0632] max-w-3xl mx-auto leading-relaxed">
            We design and develop user-friendly Android and iOS applications optimized for performance, brand growth, and digital marketing success.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteTypes.map((websiteType, index) => (
            <WebsiteTypeCard key={index} websiteType={websiteType} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-[#5C0632] mb-6">Ready to start your project?</p>
          <motion.button
            className="group relative px-8 py-4 bg-[#5C0632] text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-[#5C0632]/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative flex items-center gap-2">
              <Building className="w-5 h-5 text-white" />
              Discuss Your Project
              <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}