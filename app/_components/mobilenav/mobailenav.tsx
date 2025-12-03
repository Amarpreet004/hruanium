"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Dock from './Dock';
import { VscHome, VscPerson, VscTools, VscMail } from 'react-icons/vsc';

export function MobileNavigation() {
  const pathname = usePathname();

  const items = [
    { 
      icon: <VscHome size={18} />, 
      label: 'Home', 
      onClick: () => window.location.href = '/',
      isActive: pathname === '/'
    },
    { 
      icon: <VscPerson size={18} />, 
      label: 'About', 
      onClick: () => window.location.href = '/about',
      isActive: pathname === '/about'
    },
    { 
      icon: <VscTools size={18} />, 
      label: 'Services', 
      onClick: () => window.location.href = '/services',
      isActive: pathname === '/services'
    },
    { 
      icon: <VscMail size={18} />, 
      label: 'Contact', 
      onClick: () => window.location.href = '/contact',
      isActive: pathname === '/contact'
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}