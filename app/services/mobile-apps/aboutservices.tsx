"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Layers, Zap, Globe, Smartphone, Server, ArrowRight, CheckCircle, Star, Wrench, Megaphone, Search, PenTool } from "lucide-react";

interface WebService {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  color: string;
  gradient: string;
  features: string[];
}

const WebDevelopmentServices: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const webServices: WebService[] = [
{
  id: 1,
  title: "Native App Development",
  description: "We develop high-performance native apps for Android and iOS using Swift, Kotlin, and modern frameworks. Our native solutions ensure optimal speed, security, and user experience tailored to each platform.",
  icon: Smartphone,
  technologies: ["Swift", "Kotlin", "Android Studio", "Xcode", "Firebase", "SQLite"],
  color: "text-gray-300",
  gradient: "from-gray-500 to-white",
  features: ["Platform-Specific Design", "Fast Performance", "Native APIs", "Secure Architecture"]
},
{
  id: 2,
  title: "Cross-Platform App Development",
  description: "We build seamless cross-platform applications using React Native and Flutter that deliver consistent performance across devices. Save time and cost while maintaining native-like quality.",
  icon: Layers,
  technologies: ["React Native", "Flutter", "Expo", "Redux", "TypeScript", "REST APIs"],
  color: "text-gray-400",
  gradient: "from-gray-600 to-gray-300",
  features: ["Single Codebase", "Multi-Device Support", "Faster Deployment", "Cost Efficiency"]
},
{
  id: 3,
  title: "UI/UX Design for Apps",
  description: "Our creative team designs intuitive, visually appealing mobile interfaces that captivate users and boost engagement. Every screen is optimized for conversion, accessibility, and brand consistency.",
  icon: PenTool,
  technologies: ["Figma", "Adobe XD", "Sketch", "Illustrator", "Lottie", "Framer"],
  color: "text-white",
  gradient: "from-white to-gray-400",
  features: ["User Research", "Wireframing", "Prototyping", "App Branding"]
},
{
  id: 4,
  title: "App Store Optimization (ASO)",
  description: "Boost your app visibility and downloads through keyword research, creative visuals, and performance tracking. Our ASO experts ensure your app ranks high on Google Play and the App Store.",
  icon: Search,
  technologies: ["App Store", "Google Play", "Keyword Tools", "Analytics", "A/B Testing", "SEO"],
  color: "text-gray-200",
  gradient: "from-gray-700 to-black",
  features: ["Keyword Optimization", "App Store SEO", "Creative Assets", "Performance Reports"]
},
{
  id: 5,
  title: "Mobile App Marketing",
  description: "Drive installs, engagement, and retention through tailored mobile marketing campaigns. We combine content strategy, social ads, and influencer marketing to grow your app audience organically.",
  icon: Megaphone,
  technologies: ["Meta Ads", "Google Ads", "Influencer Marketing", "Email Automation", "Analytics", "Push Notifications"],
  color: "text-gray-100",
  gradient: "from-gray-400 to-gray-600",
  features: ["Campaign Strategy", "App Promotion", "User Retention", "Ad Optimization"]
},
{
  id: 6,
  title: "App Maintenance & Support",
  description: "Ensure your mobile app stays secure, updated, and optimized post-launch. We provide continuous monitoring, performance enhancements, and feature upgrades to keep your app future-ready.",
  icon: Wrench,
  technologies: ["Firebase", "App Analytics", "Bug Tracking", "CI/CD", "Cloud Monitoring", "Version Control"],
  color: "text-gray-300",
  gradient: "from-gray-600 to-gray-800",
  features: ["Regular Updates", "Bug Fixing", "Security Patches", "24/7 Technical Support"]
}

  ];

  const activeServiceData = webServices.find(service => service.id === activeService);

  if (!isClient) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 via-gray-900/20 to-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse text-gray-400">Loading services...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 px-4 bg-white min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-black">Services We</span>{" "}
            <span className="text-[#5C0632]">Offer</span>
          </h2>
          
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            We build digital experiences that combine cutting-edge technology
            with exceptional design and performance
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Service Navigation */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-8">
              <h3 className="text-2xl font-bold text-black mb-8 hidden lg:block">Our Specializations</h3>
              <div className="flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 lg:overflow-visible">
                {webServices.map((service, index) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 min-w-max lg:min-w-0 backdrop-blur-md border ${
                      activeService === service.id
                        ? `bg-[#5C0632] border-[#5C0632]/20 shadow-lg shadow-[#5C0632]/10 text-white`
                        : 'bg-white border-[#5C0632]/10 hover:border-[#5C0632]/20 text-[#5C0632]'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-[#5C0632] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <motion.div 
                      className={`relative p-3 rounded-xl bg-white shadow`}
                      whileHover={{ rotate: 5 }}
                    >
                      <service.icon className="w-6 h-6 text-[#5C0632]" />
                    </motion.div>
                    <div className="relative text-left">
                      <h4 className={`font-semibold ${activeService === service.id ? 'text-white' : 'text-[#5C0632]'}`}> 
                        {service.title}
                      </h4>
                    </div>
                    {activeService === service.id && (
                      <motion.div
                        className="absolute right-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Service Details */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {activeServiceData && (
                <motion.div
                  key={activeServiceData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Glowing background */}
                  <div className={`absolute -inset-4 bg-[#5C0632] opacity-10 blur-2xl rounded-3xl`}></div>
                  
                  <div className="relative bg-white backdrop-blur-md rounded-3xl border border-[#5C0632]/10 p-8 shadow-2xl">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                      <motion.div 
                        className="p-6 rounded-2xl bg-white shadow-lg"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <activeServiceData.icon className="w-10 h-10 text-[#5C0632]" />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold text-[#5C0632] mb-2">{activeServiceData.title}</h3>
                        <div className="h-1 w-24 rounded-full bg-[#5C0632]" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#5C0632] text-lg leading-relaxed mb-8">{activeServiceData.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-[#5C0632] mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#5C0632]" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeServiceData.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            className="flex items-center gap-3 p-3 bg-[#5C0632]/10 rounded-lg border border-[#5C0632]/20"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-[#5C0632]" />
                            <span className="text-[#5C0632] text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-[#5C0632] mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5 text-[#5C0632]" />
                        Technologies We Use
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {activeServiceData.technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="px-4 py-2 rounded-full text-sm font-medium bg-[#5C0632]/10 backdrop-blur-sm text-[#5C0632] border border-[#5C0632]/20 hover:border-[#5C0632]/40 transition-colors duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-end pt-6 border-t border-[#5C0632]/20 gap-4">
                      <motion.a
                        href="/contact"
                        className="group px-6 py-3 bg-[#5C0632] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get a Quote
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;
