
import CountUp from "./CountUp";
import { FaChartBar, FaUserFriends } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";

const THEME_PRIMARY = "#5C0632";
const THEME_ACCENT = "#5C0632";
const THEME_BG = "#fff";
const THEME_TEXT = "#222";

const stats = [
  {
    icon: <FaChartBar size={32} style={{ color: THEME_PRIMARY }} />,
    value: <><span className="text-2xl font-bold" style={{ color: THEME_TEXT }}>₹<CountUp from={0} to={400000} separator="," duration={2} /></span><span className="text-lg font-bold" style={{ color: THEME_ACCENT }}> +</span></>,
    label: "Revenue Generated",
  },
  {
    icon: <FaUserFriends size={32} style={{ color: THEME_PRIMARY }} />,
    value: <><span className="text-2xl font-bold" style={{ color: THEME_TEXT }}><CountUp from={0} to={50} duration={2} /></span><span className="text-lg font-bold" style={{ color: THEME_ACCENT }}> +</span></>,
    label: "Tech Partners",
  },
  {
    icon: <HiLightBulb size={32} style={{ color: THEME_PRIMARY }} />,
    value: <><span className="text-2xl font-bold" style={{ color: THEME_TEXT }}><CountUp from={0} to={100} duration={2} /></span><span className="text-lg font-bold" style={{ color: THEME_ACCENT }}> +</span></>,
    label: "Projects Delivered",
  },
  {
    icon: <FiCalendar size={32} style={{ color: THEME_PRIMARY }} />,
    value: <><span className="text-2xl font-bold" style={{ color: THEME_TEXT }}><CountUp from={0} to={30} duration={2} /></span><span className="text-lg font-bold" style={{ color: THEME_ACCENT }}> +</span></>,
    label: "Community Events",
  },
];

const Score: React.FC = () => (
  <section className="w-full py-16" style={{ background: THEME_BG }}>
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h3 className="font-bold text-lg mb-2 tracking-wide" style={{ color: THEME_PRIMARY }}>OUR ACHIEVEMENTS</h3>
        <h2 className="text-4xl font-extrabold mb-2" style={{ color: THEME_TEXT }}>Making an Impact</h2>
        <div className="w-32 h-1 mx-auto mb-4" style={{ background: THEME_PRIMARY }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="rounded-xl shadow-lg p-8 flex flex-col items-start justify-center min-h-[180px] border relative" style={{ background: THEME_BG, borderColor: THEME_PRIMARY+"22" }}>
            <div className="mb-4">{stat.icon}</div>
            <div className="mb-2">{stat.value}</div>
            <div className="text-base font-medium" style={{ color: THEME_PRIMARY }}>{stat.label}</div>
            <span className="absolute top-0 right-0 w-8 h-8 rounded-bl-xl" style={{ background: THEME_ACCENT+"22" }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);


// --- WhoWeAre Section ---
import React from "react";
import { WorldMap } from "./map";

const WHO_WE_ARE_BG = "#5C0632";
const WHO_WE_ARE_TEXT = "white";
const WHO_WE_ARE_ACCENT = "#FF5F1F";

const whoStats = [
  {
    value: <><span className="text-3xl md:text-4xl font-bold" style={{ color: WHO_WE_ARE_TEXT }}><CountUp from={0} to={100} duration={2} /></span><span className="text-2xl font-bold" style={{ color: WHO_WE_ARE_ACCENT }}>+</span></>,
    label: "Project Done",
  },
  {
    value: <><span className="text-3xl md:text-4xl font-bold" style={{ color: WHO_WE_ARE_TEXT }}><CountUp from={0} to={90} duration={2} /></span><span className="text-2xl font-bold" style={{ color: WHO_WE_ARE_ACCENT }}>+</span></>,
    label: "Happy Client",
  },
  {
    value: <><span className="text-3xl md:text-4xl font-bold" style={{ color: WHO_WE_ARE_TEXT }}><CountUp from={0} to={99} duration={2} /></span><span className="text-2xl font-bold" style={{ color: WHO_WE_ARE_ACCENT }}>%</span></>,
    label: "Employee",
  },
];

const WhoWeAre: React.FC = () => (
  <div style={{ width: '98vw', margin: '2vw auto', borderRadius: '2vw', background: WHO_WE_ARE_BG, overflow: 'hidden', position: 'relative' }}>
    <section className="w-full py-16" style={{ borderRadius: '2vw', background: 'transparent', position: 'relative', overflow: 'hidden' }}>
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none flex items-center justify-center" style={{ opacity: 0.25, maxWidth: '100vw' }}>
        <WorldMap lineColor={WHO_WE_ARE_ACCENT} />
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 rounded-full font-semibold text-sm mb-4" style={{ background: WHO_WE_ARE_ACCENT+"22", color: WHO_WE_ARE_ACCENT }}>@ Who we are?</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: WHO_WE_ARE_TEXT }}>Collaboration is the key to success.</h2>
          <p className="text-base md:text-lg mb-8" style={{ color: "#fff" }}>We work closely with our clients to understand their unique needs, goals, and challenges.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whoStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="mb-2">{stat.value}</div>
              <div className="text-base md:text-lg font-medium" style={{ color: WHO_WE_ARE_TEXT }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default WhoWeAre;