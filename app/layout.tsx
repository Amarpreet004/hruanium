import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo as Navbar } from "./_components/newNav/Navnew";
import { MobileNavigation } from "./_components/mobilenav/mobailenav";
import Footer from "./_components/footer";
import ThemeProvider from "./_components/theme-provider";
import Popup from "./popup/popup";
import { Analytics } from '@vercel/analytics/next';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hranium Infotech",
  description: "Hranium Infotech provides top-quality professional services including web development, design, and digital solutions.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '256x256' },
      { url: '/fav.png', type: 'image/png' }
    ],
    apple: [
      { url: '/fav.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {/* Glass bubbles background effect on all pages */}
       
        {/* <GlobalCoolMode options={{ particleCount: 10, speedHorz: 8, speedUp: 28 }}> */}
        <ThemeProvider />
        {/* Top Navbar - Responsive (full on desktop, simplified on mobile) */}
        <Navbar />
        {/* Mobile Bottom Navigation - Only visible on mobile */}
        <MobileNavigation />
        <main>{children}</main>
        <Footer />
        <Popup />
        {/* </GlobalCoolMode> */}
      </body>
    </html>
  );
}
