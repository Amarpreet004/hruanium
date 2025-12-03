
import { IphoneUIUX } from "./iframe";
import  Link  from "next/link";
import React from "react";

export default function MobileAppHero() {
	return (
		<section className="relative w-full flex flex-col md:flex-row items-center justify-between bg-[#F7F6FA] pt-12 pb-8 px-4 md:px-16 overflow-hidden">
			{/* Left: Headline and CTA */}
			<div className="flex-1 flex flex-col justify-center z-10 max-w-xl ">
				<h1 className="text-5xl md:text-7xl font-extrabold text-[#23191A] leading-tight tracking-tight">
					PLAN YOUR <br />
					<span className="italic font-normal">ESCAPE</span>
				</h1>
				<div className="mt-10 bg-[#5C0632] rounded-3xl p-10 md:p-16 w-[90vw] min-h-[420px] md:min-h-[490px] mx-auto">
					<p className="text-lg md:text-xl text-[#fff] mb-6">
						We have the largest selection of unique tours. <br />
						Try our easy and quick tour selection for any request. <br /> 24-hour support is always happy to answer all your questions.
					</p>
					<button className="bg-[#FF5F1F] text-white text-lg font-semibold rounded-full px-8 py-3 mb-4 transition hover:bg-[#3a2c2d]" >
						<Link href="/contact/Bookcall">Get Started</Link>
					</button>
			
					<div className="flex items-center gap-3 mt-2">
						<span className="text-sm text-[#fff]">The mobile app is available now</span>
						<a href="#" className="inline-block" aria-label="App Store">
							<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="18" cy="18" r="18" fill="white"/>
								<path d="M23.5 19.5c-.1-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-0.8-1.5.1-2.9.9-3.7 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1 1.5 2.1 2.6 2.1 1.1 0 1.4-.7 2.7-.7 1.3 0 1.5.7 2.7.7 1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3 0-.1-2.1-.8-2.1-3.1z" fill="#23191A"/>
							</svg>
						</a>
						<a href="#" className="inline-block" aria-label="Google Play">
							<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="18" cy="18" r="18" fill="white"/>
								<path d="M13.5 10.5l9 7.5-9 7.5V10.5z" fill="#23191A"/>
								<path d="M24 18l-2.5 2.1-2.5-2.1 2.5-2.1L24 18z" fill="#E7E4F7"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
			{/* Right: Phone Mockup */}
			<div className="flex-1 flex justify-center items-end mt-12 md:mt-0 z-10 ">
				   <div className="w-full max-w-lg">
					   <IphoneUIUX />
				   </div>
			</div>
			
		</section>
	);
}
