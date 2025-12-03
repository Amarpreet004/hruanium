"use client"

import React, { useState, useEffect } from 'react';
import { Clock, Star, Play, Check, Phone, User, ChevronRight, Rocket, Code, Palette, Smartphone, Globe, BarChart2, Sparkles, Link } from 'lucide-react';


function VideoHeroSection() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [activeTool, setActiveTool] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const tools = [
    { icon: <Code size={20} />, name: "Clean Code", color: "#660033", bg: "#660033" },
    { icon: <Palette size={20} />, name: "UI Design", color: "#660033", bg: "#660033" },
    { icon: <Smartphone size={20} />, name: "Responsive", color: "#660033", bg: "#660033" },
    { icon: <Globe size={20} />, name: "SEO Optimized", color: "#660033", bg: "#660033" },
    { icon: <BarChart2 size={20} />, name: "Analytics", color: "#660033", bg: "#660033" }
  ];

  useEffect(() => {
    setIsAnimated(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    const toolInterval = setInterval(() => {
      setActiveTool(prev => (prev + 1) % tools.length);
    }, 2000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(toolInterval);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-[80vh] flex items-center">
      {/* Animated Background Blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-tr from-green-200 via-blue-200 to-purple-200 rounded-full opacity-30 blur-2xl animate-float" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-br from-blue-200 via-purple-200 to-green-200 rounded-full opacity-30 blur-2xl animate-float-delay" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-20 blur-lg animate-float" />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/30 backdrop-blur-sm"
          style={{
            width: `${6 + (i % 3) * 2}px`,
            height: `${6 + (i % 3) * 2}px`,
            top: `${10 + i * 10}%`,
            left: `${10 + (i * 12) % 80}%`,
            animation: `float ${12 + i}s linear infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      {/* Floating UI Elements */}
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 animate-bounce-slow group"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <Rocket className="text-purple-500 w-full h-full group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center p-2 animate-bounce-slow-delay group"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        <Star className="text-yellow-400 w-full h-full group-hover:rotate-12 transition-transform duration-500" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto w-full relative z-10 gap-12">
        {/* Left Side - Content */}
        <div className={`flex-1 max-w-2xl transition-all duration-1000 ${isAnimated ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}> 
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm mb-6 border border-gray-100 group hover:shadow-md transition-shadow duration-300">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">Transform Your Footage into Powerful Stories</span>
            <ChevronRight className="ml-2 w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform duration-200" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            Professional Video Editing Services <span className="text-[#660033]">for Brands &</span>
            <span className="relative inline-block ml-2">
              <span className="text-[#660033] relative z-10"> Creators</span>
              <Sparkles className="absolute -top-4 -right-6 w-6 h-6 text-yellow-400 animate-spin-slow" />
            </span>
          </h1>

          {/* Description */}
          <p className="text-black text-lg mb-8 max-w-lg leading-relaxed">
            At Hranium Infotech, we create stunning and impactful videos that make your brand stand out and drive real results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-6 py-3.5 bg-gradient-to-r from-[#660033] to-[#660033] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-green-400">
              <Play className="mr-2 w-4 h-4 group-hover:scale-125 transition-transform" />
              <span className="font-medium"> Book A Call</span>
            </button>
            
          </div>

          {/* Tools Carousel */}
          <div className="relative max-w-md h-14">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 flex items-center space-x-3 px-4 py-3 bg-white rounded-lg shadow-sm transition-all duration-500 ${activeTool === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                aria-hidden={activeTool !== index}
              >
                <div className={`${tool.bg} p-2 rounded-lg ${tool.color} shadow`}>{tool.icon}</div>
                <span className="font-medium text-gray-700">{tool.name}</span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image and UI Elements */}
        <div className={`flex-1 relative w-full max-w-lg mx-auto transition-all duration-1000 delay-300 ${isAnimated ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
            <img
              src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwOjuiwxVPfLxzcYNR8bWB7AXmHo541u0nMpwV"
              alt="Video content production studio"
              className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
              draggable={false}
            />
            {/* Floating metrics */}
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow duration-300 animate-float">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Check className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Client Satisfaction</p>
                  <p className="font-bold text-gray-800">100%</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow duration-300 animate-float-delay">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Avg. Load Time</p>
                  <p className="font-bold text-gray-800">0.8s</p>
                </div>
              </div>
            </div>
          </div>
          {/* User testimonial bubble */}
          <div className="absolute -bottom-12 right-0 bg-white p-4 rounded-xl shadow-lg max-w-xs border border-gray-100 group hover:shadow-xl transition-shadow duration-300 animate-bounce-slow">
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-lg mr-3 group-hover:rotate-6 transition-transform duration-300">
                <User className="text-purple-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-1">"This design increased our conversions by 40%! Absolutely stunning work."</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 bg-white p-1 rounded-full shadow-sm">
              <div className="bg-green-100 p-1 rounded-full">
                <Check className="text-green-600 w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes bounce-slow-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 9s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
        .animate-bounce-slow-delay { animation: bounce-slow-delay 6s ease-in-out infinite 1s; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}</style>
    </section>
  );
}

export default VideoHeroSection;