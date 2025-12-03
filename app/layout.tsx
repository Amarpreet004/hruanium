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
  title: "Hruanium | Web Development, UI/UX Design, SEO & Digital Solutions",
  description: "Professional web development, UI/UX design, graphics, video editing, mobile apps, and SEO services. Transform your digital presence with Hruanium's expert solutions.",
  keywords: ["web development", "UI/UX design", "SEO services", "mobile app development", "graphics design", "video editing", "digital solutions", "web design", "software development"],
  metadataBase: new URL("https://hruanium.com"),
  alternates: {
    canonical: "https://hruanium.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hruanium.com",
    siteName: "Hruanium",
    title: "Hruanium | Web Development, UI/UX Design, SEO & Digital Solutions",
    description: "Professional web development, UI/UX design, graphics, video editing, mobile apps, and SEO services. Transform your digital presence with Hruanium's expert solutions.",
    images: [
      {
        url: "https://hruanium.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Hruanium - Digital Solutions",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hruanium | Web Development & Digital Solutions",
    description: "Professional web development, UI/UX design, graphics, video editing, mobile apps, and SEO services.",
    images: ["https://hruanium.com/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/fav.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hruanium",
    "url": "https://hruanium.com",
    "logo": "https://hruanium.com/logo.png",
    "description": "Professional web development, UI/UX design, graphics, video editing, mobile apps, and SEO services.",
    "sameAs": [
      "https://www.facebook.com/hruanium",
      "https://twitter.com/hruanium",
      "https://www.linkedin.com/company/hruanium",
      "https://www.instagram.com/hruanium"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXXXXXXXXX",
      "contactType": "Customer Service"
    },
    "areaServed": "WW",
    "priceRange": "$$"
  };

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics Script - Async loading to prevent render blocking */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
        />
        <script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_ID', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

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
