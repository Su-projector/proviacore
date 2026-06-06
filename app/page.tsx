import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Services from "@/components/sections/Services";
import FounderNote from "@/components/sections/FounderNote";
import PortfolioCTA from "@/components/sections/PortfolioCTA";
import Pricing from "@/components/sections/Pricing";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import Testimonials from "@/components/sections/Testimonials";
import TechStack from "@/components/sections/TechStack";
import { WaveDivider, DiagonalDivider } from "@/components/ui/SectionDivider";

export const metadata = {
  title: "ProviaCore | High-Performance Web Development & Digital Solutions",
  description: "ProviaCore builds fast, scalable, and secure websites for businesses, entrepreneurs, and organizations. Launch your project with a proven, UX-first development team.",
  keywords: ["Web development", "custom websites", "digital solutions", "UX-first development", "scalable web apps"],
  openGraph: {
    title: "ProviaCore — Building Solutions That Drive Lasting Productivity",
    description: "We design and build modern digital products that help teams move faster, scale smarter, and operate with clarity.",
  },
  alternates: {
    canonical: "/",
  },
};


export default function Home() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Development",
    "provider": {
      "@type": "Organization",
      "name": "ProviaCore"
    },
    "areaServed": "Global",
    "description": "UX-first, scalable web development for businesses, entrepreneurs, and organizations.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mastery Coaching",
            "description": "Learning and enablement for digital professionals."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand / Design Advisory",
            "description": "Strategic clarity and design direction for modern brands."
          }
        }
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <div className="hidden md:block">
        <WaveDivider fill="#F8F9FB" />
        <StatsBar />
        <DiagonalDivider from="#F8F9FB" to="#FFFFFF" />
      </div>
      <div className="block md:hidden">
        <DiagonalDivider from="#0056D2" to="#FFFFFF" />
      </div>
      <Services />
      <FounderNote />
      <DiagonalDivider from="#F8F9FB" to="#0B1120" />
      <PortfolioCTA />
      <DiagonalDivider from="#0B1120" to="#FFFFFF" />
      <Pricing />
      <WhoWeHelp />
      <Testimonials />
      <TechStack />
      <DiagonalDivider from="#F8F9FB" to="#0B1120" />
    </div>
  );
}
