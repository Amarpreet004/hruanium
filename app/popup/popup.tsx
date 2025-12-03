"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type ConsentStatus = "accepted" | "only-necessary" | "rejected" | "custom";

const COOKIE_KEY = "falcon_cookie_consent";
const BANNER_DELAY_MS = 5000; // show banner after 5s
const CONSENT_TTL_DAYS = 30; // consent expires after 30 days
const CONSENT_TTL_MS = CONSENT_TTL_DAYS * 24 * 60 * 60 * 1000;

export default function Popup() {
    const [open, setOpen] = useState(false);
    const [blocked, setBlocked] = useState(false); // if rejected, block site
    const [showBanner, setShowBanner] = useState(false); // bottom banner visible
    const [prefs, setPrefs] = useState({
        functionality: true,
        experience: true,
        measurement: true,
        marketing: true,
    });

    // read stored preferences on mount
    useEffect(() => {
        try {
            const raw = localStorage.getItem(COOKIE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                // check expiry
                if (parsed?.expiresAt && Date.now() > parsed.expiresAt) {
                    // consent expired -> show banner after delay
                    setTimeout(() => setShowBanner(true), BANNER_DELAY_MS);
                    return;
                }
                if (parsed?.status === "rejected") {
                    setOpen(true);
                    setBlocked(true);
                    return;
                }
                // consent exists and not expired -> do nothing
                return;
            }

            // no consent stored -> show bottom banner after a short delay
            setTimeout(() => setShowBanner(true), BANNER_DELAY_MS);
        } catch (e) {
            // On error, still show banner after delay as fallback
            setTimeout(() => setShowBanner(true), BANNER_DELAY_MS);
        }
    }, []);

    function save(status: ConsentStatus, overridePrefs?: Partial<typeof prefs>) {
            const data = {
                status,
                prefs: {
                    necessary: true,
                    functionality: overridePrefs?.functionality ?? prefs.functionality,
                    experience: overridePrefs?.experience ?? prefs.experience,
                    measurement: overridePrefs?.measurement ?? prefs.measurement,
                    marketing: overridePrefs?.marketing ?? prefs.marketing,
                },
                updatedAt: Date.now(),
                expiresAt: Date.now() + CONSENT_TTL_MS,
            };
            localStorage.setItem(COOKIE_KEY, JSON.stringify(data));
    }

    function handleAcceptAll() {
        setPrefs({ functionality: true, experience: true, measurement: true, marketing: true });
        save("accepted", { functionality: true, experience: true, measurement: true, marketing: true });
        setBlocked(false);
        setOpen(false);
        setShowBanner(false);
    }

    function handleOnlyNecessary() {
        setPrefs({ functionality: false, experience: false, measurement: false, marketing: false });
        save("only-necessary", { functionality: false, experience: false, measurement: false, marketing: false });
        setBlocked(false);
        setOpen(false);
        setShowBanner(false);
    }

    function handleRejectAll() {
        // store rejected and keep popup open and block site
        setPrefs({ functionality: false, experience: false, measurement: false, marketing: false });
        save("rejected", { functionality: false, experience: false, measurement: false, marketing: false });
        setBlocked(true);
        setOpen(true);
        setShowBanner(false);
    }

    function handleChooseCookiesFromBanner() {
        // open modal with detailed settings
        setOpen(true);
        setShowBanner(false);
    }

    function togglePref(key: keyof typeof prefs) {
        setPrefs((p) => {
            const next = { ...p, [key]: !p[key] };
            // persist immediately as a custom consent
            save("custom", next);
            return next;
        });
    }

    // accessibility: focus management and keyboard
    const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") {
                if (blocked) return; // don't close when blocked
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("keydown", onKey);
            // focus the close button
            setTimeout(() => closeBtnRef.current?.focus(), 0);
        }
        return () => document.removeEventListener("keydown", onKey);
    }, [open, blocked]);

    return (
        <>
            {/* Banner: show at bottom on initial load when no consent saved */}
            {showBanner && !open && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl">
                    <div className="bg-white rounded-2xl shadow-lg px-6 py-4 flex items-center justify-between gap-4">
                        <div className="text-sm text-[#5C0632] max-w-[70%]">
                            <p className="font-medium">We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. Additional details are available in our <Link href="/cookies" className="underline font-semibold">Cookie Policy</Link>.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={handleChooseCookiesFromBanner} className="text-sm underline text-[#5C0632]">Choose Cookies</button>
                            <button onClick={handleAcceptAll} className="text-sm bg-[#041b35] text-white px-4 py-2 rounded-lg">Accept All Cookies</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal */}
            {open && (
        <div
            aria-modal
            role="dialog"
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${blocked ? "pointer-events-auto" : "pointer-events-auto"}`}
        >
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm ${blocked ? "" : ""}`}
                onClick={() => {
                    // if blocked (rejected), clicking backdrop does nothing
                    if (blocked) return;
                    // allow closing by clicking outside only when not blocked
                    setOpen(false);
                }}
            />

            {/* Panel */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl shadow-2xl p-8 bg-white text-[#5C0632]">
                <button
                    aria-label="Close cookie dialog"
                    ref={closeBtnRef}
                    onClick={() => {
                        if (blocked) return; // cannot close when rejected
                        setOpen(false);
                    }}
                    className="absolute top-4 right-4 text-[#5C0632]/60 hover:text-[#5C0632]"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-semibold mb-4">Information</h2>
                <p className="text-sm text-[#5C0632]/80 mb-6">
                    We and selected third parties use cookies or similar technologies for technical purposes and, with your
                    consent, also for the purposes of functionality, experience, measurement and marketing. You can freely give,
                    refuse or withdraw your consent at any time.
                </p>

                <div className="space-y-4">
                    {[
                        { key: "functionality", label: "Functionality" },
                        { key: "experience", label: "Experience" },
                        { key: "measurement", label: "Measurement" },
                        { key: "marketing", label: "Marketing" },
                    ].map((cat) => (
                        <div key={cat.key} className="flex items-center justify-between bg-white/6 rounded-lg p-3">
                            <div>
                                <p className="font-medium">{cat.label}</p>
                                <p className="text-xs text-[#5C0632]/70">Allow {cat.label.toLowerCase()} cookies</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={(prefs as any)[cat.key]}
                                    onChange={() => togglePref(cat.key as keyof typeof prefs)}
                                />
                                <div className="w-11 h-6 bg-white/20 peer-checked:bg-[#ff8a4b] rounded-full peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-[#ff8a4b] transition-colors" />
                                <span className="ml-3 text-sm">{(prefs as any)[cat.key] ? "On" : "Off"}</span>
                            </label>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="space-x-3">
                        <Link href="/cookies" className="text-sm underline text-[#5C0632]/90 hover:text-[#5C0632]">Cookie Policy</Link>
                        <button onClick={() => { /* show more details - keep here for extension */ }} className="text-sm text-[#5C0632]/70">Find Out More</button>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={handleRejectAll}
                            className="px-4 py-2 rounded-lg bg-[#f3f2f3] text-[#5C0632] hover:bg-[#ecebeb] transition"
                        >
                            Reject Everything
                        </button>
                        <button
                            onClick={handleOnlyNecessary}
                            className="px-4 py-2 rounded-lg bg-[#f7f6f7] text-[#5C0632] hover:bg-[#f0eff0] transition"
                        >
                            Only Necessary
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            className="px-4 py-2 rounded-lg bg-[#ff8a4b] text-white font-semibold hover:brightness-95 transition"
                        >
                            Accept Everything
                        </button>
                    </div>
                </div>

                {blocked && (
                    <div className="mt-6 text-center text-sm text-[#5C0632]/90">
                        You have chosen to reject all non-essential cookies. The site is blocked until you accept cookies or
                        change preferences.
                        <div className="mt-3">
                            <button
                                onClick={() => {
                                    // allow user to change preferences while still keeping overlay
                                    // simply keep popup open but allow toggles to be used
                                }}
                                className="underline"
                            >
                                Change Preferences
                            </button>
                        </div>
                    </div>
                )}
            </div>
                </div>
            )}
        </>
    );
}


