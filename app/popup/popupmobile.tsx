"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "falcon_cookie_consent";
const CONSENT_TTL_DAYS = 30;
const CONSENT_TTL_MS = CONSENT_TTL_DAYS * 24 * 60 * 60 * 1000;

export default function PopupMobile() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		try {
			const raw = localStorage.getItem(COOKIE_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (parsed?.expiresAt && Date.now() > parsed.expiresAt) {
					// expired
					setTimeout(() => setVisible(true), 5000);
					return;
				}
				// consent exists -> do not show
				return;
			}
			// no consent -> show on mobile after a short delay
			setTimeout(() => setVisible(true), 5000);
		} catch (e) {
			setTimeout(() => setVisible(true), 5000);
		}
	}, []);

	function save(status: string) {
		const data = {
			status,
			prefs: { necessary: true },
			updatedAt: Date.now(),
			expiresAt: Date.now() + CONSENT_TTL_MS,
		};
		try {
			localStorage.setItem(COOKIE_KEY, JSON.stringify(data));
		} catch (e) {
			// ignore
		}
	}

	function handleAcceptAll() {
		save("accepted");
		setVisible(false);
	}

	function handleChoose() {
		// save that user opened settings (optional) and hide banner
		setVisible(false);
	}

	return (
		// show only on small screens
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ y: 200, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 200, opacity: 0 }}
					transition={{ type: "spring", stiffness: 120, damping: 20 }}
					className="md:hidden fixed left-1/2 -translate-x-1/2 bottom-4 z-50 w-[94%] max-w-xl"
				>
					<div className="bg-white rounded-2xl shadow-lg p-4 flex items-start gap-3">
						<div className="flex-1">
							<p className="text-sm text-[#5C0632] font-medium leading-tight">
								We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. Additional details are available in our{' '}
								<Link href="/cookies" className="underline font-semibold">Cookie Policy</Link>.
							</p>
						</div>

						<div className="flex flex-col items-end gap-2">
							<button
								onClick={handleChoose}
								className="text-sm underline text-[#5C0632]"
								aria-label="Choose cookies"
							>
								<Link href="/cookies">Choose</Link>
							</button>

							<button
								onClick={handleAcceptAll}
								className="text-sm bg-[#041b35] text-white px-4 py-2 rounded-lg"
								aria-label="Accept all cookies"
							>
								Accept All
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

