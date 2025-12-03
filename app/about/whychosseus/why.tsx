"use client";

import React from "react";
import { CheckCircle, Users, Heart, BarChart2, DollarSign, Zap } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Lightning Fast Delivery",
    description:
      "Our agile development process ensures rapid delivery without compromising on quality. Get your projects launched faster than ever.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-white" />,
    title: "Proven Track Record",
    description:
      "With 500+ successful projects and 99% client satisfaction rate, our results speak for themselves. Trust in our proven expertise.",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Expert Team",
    description:
      "Our multidisciplinary team of designers, developers, and strategists brings diverse expertise to every project we undertake.",
  },
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    title: "24/7 Support",
    description:
      "We're here when you need us. Our dedicated support team ensures your digital solutions run smoothly around the clock.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-white" />,
    title: "Scalable Solutions",
    description:
      "Our solutions grow with your business. Built with scalability in mind to adapt to your evolving needs and market demands.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    title: "Cost-Effective",
    description:
      "Get maximum value for your investment. Our efficient processes and smart solutions deliver premium results within your budget.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="mb-14 text-center">
        <h2 className="text-5xl font-bold text-[#5C0632] mb-6 tracking-tight">Why Choose Us</h2>
        <p className="text-2xl text-[#3A3F4A] font-medium max-w-3xl mx-auto">
          We combine expertise, innovation, and dedication to deliver exceptional digital solutions that drive your business forward.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start h-full transition-transform hover:-translate-y-2 hover:shadow-xl relative"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5C0632] mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{feature.title}</h3>
            <p className="text-base text-[#333] opacity-80 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
