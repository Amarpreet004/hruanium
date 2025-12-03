"use client";

import React, { useEffect, useState, useRef } from "react";

// Reuse the IphoneFrame from iframe.tsx, but since it's not exported, copy its code here

interface IphoneFrameProps {
	src: string;
	style?: React.CSSProperties;
	className?: string;
	zIndex?: number;
}

const IphoneFrame: React.FC<IphoneFrameProps> = React.memo(({ src, style, className, zIndex }) => {
	const [time, setTime] = useState(() => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
		}, 60000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div
			className={`relative flex items-center justify-center ${className || ''}`}
			style={{ width: 260, height: 540, minWidth: 200, minHeight: 400, zIndex, ...style }}
			aria-label="iPhone UI frame"
		>
			{/* iPhone outline with transparent screen */}
			<div
				className="absolute inset-0 z-10 pointer-events-none"
				style={{ borderRadius: 48, border: '7px solid #000', background: 'transparent', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
			/>
			{/* Status bar: time, wifi, battery, with white background */}
			<div
				className="absolute z-9 flex items-center justify-between"
				style={{ top: 7, left: '50%', height: 26, width: '90%', background: 'white', borderTopLeftRadius: 40, borderTopRightRadius: 40, boxSizing: 'border-box', paddingLeft: 18, paddingRight: 18, transform: 'translateX(-50%)' }}
				aria-label="Status bar"
			>
				<span className="text-xs font-semibold text-[#5C0632]" style={{ letterSpacing: 1 }}>{time}</span>
				<div className="flex items-center gap-2">
					<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-label="WiFi" xmlns="http://www.w3.org/2000/svg">
						<path d="M2.93 7.36a12.07 12.07 0 0114.14 0" stroke="#5C0632" strokeWidth="1.5" strokeLinecap="round"/>
						<path d="M5.47 10.02a8.07 8.07 0 019.06 0" stroke="#5C0632" strokeWidth="1.5" strokeLinecap="round"/>
						<path d="M8.01 12.68a4.07 4.07 0 013.98 0" stroke="#5C0632" strokeWidth="1.5" strokeLinecap="round"/>
						<circle cx="10" cy="16" r="1" fill="#5C0632" />
					</svg>
					<svg width="20" height="10" viewBox="0 0 24 12" fill="none" aria-label="Battery" xmlns="http://www.w3.org/2000/svg">
						<rect x="1" y="2" width="20" height="8" rx="2" fill="#222" stroke="#5C0632" strokeWidth="1.5"/>
						<rect x="3" y="4" width="16" height="4" rx="1" fill="#4ade80" />
						<rect x="21" y="4" width="2" height="4" rx="1" fill="#5C0632" />
					</svg>
				</div>
			</div>
			<svg
				className="absolute z-40"
				style={{ left: '50%', top: 18, transform: 'translateX(-50%)' }}
				width={60}
				height={22}
				viewBox="0 0 80 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-label="iPhone notch"
			>
				<rect x="0" y="0" width="80" height="30" rx="15" fill="#000" />
			</svg>
			<div
				className="absolute z-0 w-full h-full"
				style={{ borderRadius: 48, overflow: 'hidden', top: 0, left: 0, paddingTop: 32 }}
			>
				<iframe
					src={src}
					title="Hranium Infotech Internal Preview"
					className="w-full h-full min-h-[320px] bg-white"
					style={{ border: "none", borderRadius: 0 }}
					loading="lazy"
					sandbox="allow-same-origin allow-scripts"
				/>
			</div>
		</div>
	);
});

// Main component: three iPhones side by side


const TripleIphoneFrame: React.FC = () => {
	return (
		<div className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent py-4 px-2">
					<div className="relative flex flex-row items-center justify-between w-full max-w-7xl mx-auto" style={{ minHeight: 600 }}>
						{/* Left content box */}
						<div
							className="bg-white rounded-2xl shadow-sm border border-neutral-100 px-7 py-8 max-w-md w-[300px] flex flex-col items-start justify-center"
							style={{ minWidth: 220 }}
						>
							<h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-3">BUILD APPS <br />THAT INSPIRE ACTION</h1>
							<p className="italic text-xl md:text-2xl text-black mb-6" style={{ fontFamily: 'inherit' }}>
								Transform your vision into beautifully designed, <br />high-performance mobile apps built with modern technologies.
							</p>
							<button className="px-5 py-2 border border-black rounded-full text-black text-base font-medium hover:bg-black hover:text-white transition-colors">
								Contact us 
							</button>
						</div>
						{/* iPhones on the right */}
												<div className="relative flex flex-row items-end justify-end gap-0 z-10" style={{ minWidth: 0 }}>
													{[
														{
															src: "https://amarpreet004.github.io/project-web/home.html",
															style: { transform: 'scale(1.13)' },
															zIndex: 30,
															className: ""
														},
														{
															src: "https://www.hraniuminfotech.com",
															style: { transform: 'translateX(-36px) scale(1.07)' },
															zIndex: 20,
															className: "-ml-16"
														},
														{
															src: "https://www.theuniques.in/",
															style: { transform: 'translateX(-72px) scale(1.04)' },
															zIndex: 10,
															className: "-ml-16"
														}
													].map((props, idx) => (
														<IphoneFrame key={props.src} {...props} />
													))}
												</div>
					</div>
		</div>
	);
};

export default TripleIphoneFrame;
