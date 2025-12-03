"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../newNav/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();

  // Function to check if a menu item is active
  const isMenuItemActive = (item: string) => {
    switch (item.toLowerCase()) {
      case 'home':
        return pathname === '/';
      case 'about':
        return pathname.startsWith('/about');
      case 'services':
        return pathname.startsWith('/services');
      case 'contact':
        return pathname.startsWith('/contact');
      case 'courses':
        return pathname.startsWith('/courses');
      default:
        return false;
    }
  };
  return (
    <div
      className={cn("fixed top-10 inset-x-0 w-full mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Logo - Always visible */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/hraniumlogo.png"
              alt="Hranium Infotech Logo"
              className="h-7 w-20 sm:h-8 sm:w-28 md:h-10 md:w-46 lg:h-15 lg:w-44 object-contain transition-all duration-300"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </a>
        </div>

        {/* Navigation Items - Only visible on desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="Home" 
            isActive={isMenuItemActive('Home') && active === null} 
            href="/"
          />

          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="About" 
            isActive={isMenuItemActive('About') && active === null} 
            href="/about"
          />

          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="Services" 
            isActive={isMenuItemActive('Services') && active === null} 
            href="/services"
          >
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-bold mb-2 text-black dark:text-white">Development</h4>
                <HoveredLink href="/services/web-development">Web Development</HoveredLink>
                <HoveredLink href="/services/mobile-apps">Mobile Apps</HoveredLink>
                
              </div>
              <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-bold mb-2 text-black dark:text-white">Marketing</h4>
                <HoveredLink href="/services/seo">SEO & Digital Marketing</HoveredLink>
                <HoveredLink href="/services/Graphics">Graphics Design</HoveredLink>
                <HoveredLink href="/services/videoediting">Video Editing</HoveredLink>
              </div>
            </div>
          </MenuItem>

          

          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="Contact" 
            isActive={isMenuItemActive('Contact') && active === null} 
            href="/contact"
          />
        </div>

        {/* Get in Touch Button - Always visible */}
        <div className="flex items-center">
          <a
            href="/contact/Bookcall"
            className="max-w-xs sm:max-w-sm md:max-w-fit px-3 sm:px-4 py-2 sm:py-2.5 bg-[#5C0632] border border-transparent text-white rounded-lg font-medium transition-all duration-300 text-base sm:text-lg md:text-base text-center"
            style={{ minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            Get in Touch
          </a>
        </div>
      </Menu>
    </div>
  );
}
