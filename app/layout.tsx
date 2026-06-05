// Layout for ProviaCore application
import type { Metadata, Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ProviaCore | High-Performance Web Development & Digital Solutions",
    template: "%s | ProviaCore",
  },
  description:
    "ProviaCore builds fast, scalable, and secure websites for businesses, entrepreneurs, and organizations. Launch your project with a proven, UX-first development team.",
  keywords: [
    "Web development",
    "custom websites",
    "digital solutions",
    "UX-first development",
    "scalable web apps",
  ],
  authors: [{ name: "Abdusobur Sulaiman" }],
  creator: "Abdusobur Sulaiman",
  publisher: "ProviaCore",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "ProviaCore — Building Solutions That Drive Lasting Productivity",
    description:
      "We design and build modern digital products that help teams move faster, scale smarter, and operate with clarity.",
    siteName: "ProviaCore",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProviaCore — Building Solutions That Drive Lasting Productivity",
    description:
      "We design and build modern digital products that help teams move faster, scale smarter, and operate with clarity.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://proviacore.vercel.app"),
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
      name: "ProviaCore",
      url: "https://proviacore.com",
      logo: "https://proviacore.com/logo.png",
      description: "Building solutions that drive lasting productivity",
      founder: { "@type": "Person", name: "Abdusobur Sulaiman" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "85 Aladelola, Ikosi-Ketu",
        addressLocality: "Lagos",
        addressCountry: "Nigeria",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+234 815 176 2900",
        contactType: "customer service",
        email: "proviacore@gmail.com",
      },
      sameAs: [
        "https://linkedin.com/company/proviacore",
        "https://twitter.com/proviacore",
        "https://github.com/proviacore",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ProviaCore",
      url: "https://proviacore.vercel.app",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://proviacore.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ];
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" 
          rel="stylesheet"
        />
        <link 
          rel="preload" 
          href="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoBWUvdHT0DmE_WLMnE.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-(--brand-white) text-(--brand-dark-text) antialiased">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}