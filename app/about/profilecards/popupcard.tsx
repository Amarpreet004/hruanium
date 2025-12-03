"use client";

import React from "react";

interface PopupCardProps {
  open: boolean;
  onClose: () => void;
  profile: {
    name: string;
    role: string;
    image: string;
    batch?: string;
    socials?: { github?: string; linkedin?: string; instagram?: string };
    skills?: string[];
    about: string;
    achievements: { title: string; date?: string; desc?: string }[];
  } | null;
}

export default function PopupCard({ open, onClose, profile }: PopupCardProps) {
  if (!open || !profile) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-2xl w-full max-w-4xl p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700 dark:hover:text-white"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Profile */}
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="w-48 h-48 rounded-lg overflow-hidden mb-4">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            {profile.batch && (
              <div className="mb-2 px-3 py-1 bg-red-600 text-white text-xs rounded-full font-semibold">
                {profile.batch}
              </div>
            )}
            <h2 className="text-2xl font-bold text-center mb-1">{profile.name}</h2>
            <div className="text-gray-500 dark:text-gray-300 text-center mb-4 italic">{profile.role}</div>
            {/* Socials */}
            <div className="flex gap-4 mb-4">
              {profile.socials?.github && (
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
                  <i className="fab fa-github" /> GitHub
                </a>
              )}
              {profile.socials?.linkedin && (
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 dark:hover:text-blue-400">
                  <i className="fab fa-linkedin" /> Linkedin
                </a>
              )}
              {profile.socials?.instagram && (
                <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:hover:text-pink-400">
                  <i className="fab fa-instagram" /> Instagram
                </a>
              )}
            </div>
            {/* Skills */}
            {profile.skills && (
              <div className="flex flex-wrap gap-2 justify-center">
                {profile.skills.map((skill, i) => (
                  <span key={i} className="bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
          {/* Right: About & Achievements */}
          <div className="md:w-2/3">
            <div className="flex gap-8 border-b pb-2 mb-4">
              <button className="text-red-600 border-b-2 border-red-600 font-semibold px-2">About</button>
              <button className="text-gray-500 hover:text-red-600 px-2">Certificates</button>
              <button className="text-gray-500 hover:text-red-600 px-2">Projects</button>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                {profile.about}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.achievements.map((ach, i) => (
                  <div key={i} className="bg-gray-100 dark:bg-neutral-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block w-6 h-6 bg-gray-300 dark:bg-neutral-700 rounded-full flex items-center justify-center">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5Z"/></svg>
                      </span>
                      <span className="font-semibold text-sm">{ach.title}</span>
                    </div>
                    {ach.date && <div className="text-xs text-gray-500 mb-1">{ach.date}</div>}
                    {ach.desc && <div className="text-xs text-gray-700 dark:text-gray-300">{ach.desc}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
