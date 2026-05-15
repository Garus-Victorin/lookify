import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garusvictorin.dev"),
  title: {
    default: "Garus Victorin — Développeur Full-Stack & IA",
    template: "%s | Garus Victorin",
  },
  description:
    "Développeur Full-Stack & IA spécialisé dans les plateformes SaaS, les applications mobiles et les systèmes intelligents. Je construis des produits web, mobile & IA scalables.",
  keywords: [
    "Développeur Full Stack",
    "Développeur IA",
    "Développeur SaaS",
    "Développeur Flutter",
    "Développeur React",
    "Développeur Next.js",
    "TypeScript",
    "Node.js",
    "Garus Victorin",
  ],
  authors: [{ name: "Garus Victorin", url: "https://garusvictorin.dev" }],
  creator: "Garus Victorin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://garusvictorin.dev",
    title: "Garus Victorin — Développeur Full-Stack & IA",
    description:
      "Développeur Full-Stack & IA spécialisé dans les plateformes SaaS, les applications mobiles et les systèmes intelligents.",
    siteName: "Portfolio Garus Victorin",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Garus Victorin — Full-Stack & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garus Victorin — Développeur Full-Stack & IA",
    description:
      "Développeur Full-Stack & IA spécialisé dans les plateformes SaaS, les applications mobiles et les systèmes intelligents.",
    images: ["/og-image.png"],
    creator: "@garusvictorin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Garus Victorin",
    url: "https://garusvictorin.dev",
    jobTitle: "Full-Stack & AI Developer",
    description:
      "Full-Stack & AI Developer specialized in SaaS platforms, mobile applications and intelligent systems.",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Flutter",
      "AI/ML",
      "SaaS",
    ],
    sameAs: [
      "https://github.com/garusvictorin",
      "https://linkedin.com/in/garusvictorin",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: "#050505", color: "#ffffff" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
