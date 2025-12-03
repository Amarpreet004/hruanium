"use client";

import React, { useState } from "react";
import { Code, Palette, Video, Globe, Database, Smartphone, Monitor, Star, Clock, Users, CheckCircle } from "lucide-react";

const ExploreCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses", icon: Globe },
    { id: "web-design", name: "Web Design", icon: Palette },
    { id: "web-development", name: "Web Development", icon: Code },
    { id: "graphic-design", name: "Graphic Design", icon: Monitor },
    { id: "video-editing", name: "Video Editing", icon: Video },
  ];

  const courses = [
    // Web Design Courses
    {
      id: 1,
      title: "UI/UX Design Mastery",
      category: "web-design",
      description: "Master the art of user interface and user experience design with modern tools and techniques.",
      price: "₹12,999",
      originalPrice: "₹19,999",
      duration: "8 weeks",
      students: "2,847",
      rating: 4.8,
      level: "Beginner to Advanced",
      features: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "User Research"],
      image: "/api/placeholder/400/250",
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "Responsive Web Design",
      category: "web-design",
      description: "Learn to create beautiful, responsive websites that work perfectly on all devices.",
      price: "₹8,999",
      originalPrice: "₹14,999",
      duration: "6 weeks",
      students: "1,923",
      rating: 4.7,
      level: "Beginner",
      features: ["HTML5", "CSS3", "Bootstrap", "Flexbox", "Grid Layout"],
      image: "/api/placeholder/400/250"
    },

    // Web Development Courses
    {
      id: 3,
      title: "React.js Complete Course",
      category: "web-development",
      description: "Build modern, interactive web applications with React.js from scratch to deployment.",
      price: "₹15,999",
      originalPrice: "₹24,999",
      duration: "10 weeks",
      students: "3,456",
      rating: 4.9,
      level: "Intermediate",
      features: ["React Hooks", "Context API", "Redux", "Testing", "Deployment"],
      image: "/api/placeholder/400/250",
      badge: "New"
    },
    {
      id: 4,
      title: "Next.js Full Stack Development",
      category: "web-development",
      description: "Master Next.js for building full-stack applications with server-side rendering.",
      price: "₹18,999",
      originalPrice: "₹28,999",
      duration: "12 weeks",
      students: "2,134",
      rating: 4.8,
      level: "Advanced",
      features: ["SSR/SSG", "API Routes", "Authentication", "Database Integration", "Deployment"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Backend Development with Node.js",
      category: "web-development",
      description: "Build scalable backend applications with Node.js, Express, and MongoDB.",
      price: "₹16,999",
      originalPrice: "₹25,999",
      duration: "10 weeks",
      students: "1,867",
      rating: 4.7,
      level: "Intermediate to Advanced",
      features: ["Express.js", "MongoDB", "JWT Auth", "REST APIs", "GraphQL"],
      image: "/api/placeholder/400/250"
    },

    // Graphic Design Courses
    {
      id: 6,
      title: "Adobe Creative Suite Mastery",
      category: "graphic-design",
      description: "Master Photoshop, Illustrator, and InDesign for professional graphic design.",
      price: "₹14,999",
      originalPrice: "₹22,999",
      duration: "8 weeks",
      students: "2,567",
      rating: 4.6,
      level: "Beginner to Advanced",
      features: ["Photoshop", "Illustrator", "InDesign", "Brand Design", "Print Design"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 7,
      title: "Logo Design & Branding",
      category: "graphic-design",
      description: "Create memorable logos and comprehensive brand identities for businesses.",
      price: "₹9,999",
      originalPrice: "₹16,999",
      duration: "6 weeks",
      students: "1,743",
      rating: 4.5,
      level: "Beginner to Intermediate",
      features: ["Logo Design", "Brand Strategy", "Color Theory", "Typography", "Brand Guidelines"],
      image: "/api/placeholder/400/250"
    },

    // Video Editing Courses
    {
      id: 8,
      title: "Professional Video Editing",
      category: "video-editing",
      description: "Master video editing with Adobe Premiere Pro and After Effects for stunning results.",
      price: "₹13,999",
      originalPrice: "₹21,999",
      duration: "8 weeks",
      students: "2,234",
      rating: 4.7,
      level: "Beginner to Advanced",
      features: ["Premiere Pro", "After Effects", "Color Grading", "Motion Graphics", "Audio Editing"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 9,
      title: "YouTube Content Creation",
      category: "video-editing",
      description: "Learn to create engaging YouTube content with professional editing techniques.",
      price: "₹7,999",
      originalPrice: "₹12,999",
      duration: "5 weeks",
      students: "3,123",
      rating: 4.6,
      level: "Beginner",
      features: ["Content Strategy", "Thumbnail Design", "SEO Optimization", "Analytics", "Monetization"],
      image: "/api/placeholder/400/250",
      badge: "Trending"
    }
  ];

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your career with industry-leading courses designed by experts. 
            Learn from real-world projects and get certified in the latest technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group hover:scale-105"
            >
              {/* Course Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                {course.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {course.badge}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      {course.category === "web-design" && <Palette className="w-8 h-8" />}
                      {course.category === "web-development" && <Code className="w-8 h-8" />}
                      {course.category === "graphic-design" && <Monitor className="w-8 h-8" />}
                      {course.category === "video-editing" && <Video className="w-8 h-8" />}
                    </div>
                    <h3 className="text-lg font-bold">{course.title}</h3>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Info */}
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Level */}
                <div className="mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What you'll learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {course.features.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{course.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {course.price}
                    </span>
                    <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                  <div className="text-green-600 dark:text-green-400 font-semibold">
                    {Math.round((1 - parseInt(course.price.replace(/[^\d]/g, '')) / parseInt(course.originalPrice.replace(/[^\d]/g, ''))) * 100)}% OFF
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have transformed their careers with Hranium Infotech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 min-w-[200px]">
              View All Courses
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 min-w-[200px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
