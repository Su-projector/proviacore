import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "ProviaCore | High-Performance Web Development & Digital Solutions",
    template: "%s | ProviaCore",
  },
  description: "ProviaCore builds fast, scalable, and secure websites for businesses, entrepreneurs, and organizations. Launch your project with a proven, UX-first development team.",
  keywords: ["Web development", "custom websites", "digital solutions", "UX-first development", "scalable web apps"],
  authors: [{ name: "Abdusobur Sulaimon" }],
  creator: "Abdusobur Sulaimon",
  publisher: "ProviaCore",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://proviacore.com",
    title: "ProviaCore — Building Solutions That Drive Lasting Productivity",
    description: "We design and build modern digital products that help teams move faster, scale smarter, and operate with clarity.",
    siteName: "ProviaCore",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProviaCore — Building Solutions That Drive Lasting Productivity",
    description: "We design and build modern digital products that help teams move faster, scale smarter, and operate with clarity.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://proviacore.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ProviaCore",
      "url": "https://proviacore.com",
      "logo": "https://proviacore.com/logo.png",
      "description": "Building solutions that drive lasting productivity",
      "founder": {
        "@type": "Person",
        "name": "Abdusobur Sulaimon"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "85 Aladelola, Ikosi-Ketu",
        "addressLocality": "Lagos",
        "addressCountry": "Nigeria"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234 815 176 2900",
        "contactType": "customer service",
        "email": "contact@proviacore.com"
      },
      "sameAs": [
        "https://linkedin.com/company/proviacore",
        "https://twitter.com/proviacore",
        "https://github.com/proviacore"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ProviaCore",
      "url": "https://proviacore.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://proviacore.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-zinc-900 antialiased`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
