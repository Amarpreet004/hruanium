"use client";
import React from "react";
import { Youtube, Instagram, Mic2, MonitorPlay , TrendingUp, PlayCircle, YoutubeIcon} from "lucide-react"; // Lucide icons



const services = [
{
    icon: <Youtube className="w-10 h-10 text-[#660033]" />,
    title: "YouTube Video Editing",
    desc: "Turn your raw footage into engaging YouTube videos with smooth transitions, captions, intros, and hooks that keep viewers watching till the end.",
  },
  {
    icon: <Instagram className="w-10 h-10 text-[#660033]" />,
    title: "Social Media Reels & Shorts",
    desc: "Create viral-ready edits for Instagram, TikTok, and YouTube Shorts. Designed to grab attention fast, boost engagement, and grow your audience organically.",
  },
  {
    icon: <MonitorPlay className="w-10 h-10 text-[#660033]" />,
    title: "Corporate & Promo Videos",
    desc: "Professional, branded edits for corporate presentations, product launches, or marketing campaigns — crafted to reflect your brand’s quality and credibility.",
  },
  {
    icon: <Mic2 className="w-10 h-10 text-[#660033]" />,
    title: "Podcast & Interview Edits",
    desc: "Clean, distraction-free editing that enhances clarity, flow, and audience engagement for podcasts, interviews, or talk shows.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-[#660033]" />,
    title: "Ad & Sales Video Editing",
    desc: "High-performing ad edits tailored for Facebook, YouTube, and Instagram — optimized for conversions, reach, and brand growth.",
  },
   
];

export default function VideoCoreServices() {
	return (
		<section className="w-full bg-white py-16 px-4 flex flex-col items-center">
			<h2 className="text-4xl md:text-5xl font-bold text-[#660033] mb-12 text-center">Our Video Editing Services</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
				{/* Service Cards */}
				{services.slice(0, 3).map((service, idx) => (
					<div
						key={idx}
						className="relative rounded-3xl bg-white border border-[#f3e6ee] shadow-md p-8 flex flex-col min-h-[320px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
					>
						<div className="mb-6 flex items-center justify-center">
							<span className="bg-[#F6F3FA] rounded-xl p-3 flex items-center justify-center">{service.icon}</span>
						</div>
						<h3 className="text-2xl font-bold text-[#660033] mb-3">{service.title}</h3>
						<p className="text-gray-500 text-base leading-relaxed">{service.desc}</p>
					</div>
				))}
				{/* CTA Card */}
				<div className="relative rounded-3xl bg-[#660033] flex flex-col justify-between p-8 min-h-[320px] shadow-md text-white col-span-1">
					<div>
						<span className="block text-white/80 mb-2">• Need help?</span>
						<h3 className="text-3xl font-bold leading-tight mb-6">Free advice.<br />Book a callback</h3>
					</div>
					<button className="mt-8 bg-white text-[#660033] font-semibold rounded-full px-8 py-3 text-lg shadow hover:bg-[#f3e6ee] transition-all">Let's Talk</button>
				</div>
				{/* Next row of service cards */}
				{services.slice(3).map((service, idx) => (
					<div
						key={idx}
						className="relative rounded-3xl bg-white border border-[#f3e6ee] shadow-md p-8 flex flex-col min-h-[320px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
					>
						<div className="mb-6 flex items-center justify-center">
							<span className="bg-[#F6F3FA] rounded-xl p-3 flex items-center justify-center">{service.icon}</span>
						</div>
						<h3 className="text-2xl font-bold text-[#660033] mb-3">{service.title}</h3>
						<p className="text-gray-500 text-base leading-relaxed">{service.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
