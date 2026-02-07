import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import PortfolioCTA from "@/components/sections/PortfolioCTA";
import Pricing from "@/components/sections/Pricing";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import Testimonials from "@/components/sections/Testimonials";
import TechStack from "@/components/sections/TechStack";

export const metadata = {
  title: "ProviaCore | High-Performance Web Development & Digital Solutions",
  description: "ProviaCore builds fast, scalable, and secure websites for businesses, entrepreneurs, and organizations. Launch your project with a proven, UX-first development team.",
  keywords: ["Web development", "custom websites", "digital solutions", "UX-first development", "scalable web apps"],
  openGraph: {
    title: "ProviaCore — Building Solutions That Drive Lasting Productivity",
    description: "We design and build modern digital products that help teams move faster, scale smarter, and operate with clarity.",
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
      <Services />
      <PortfolioCTA />
      <Pricing />
      <WhoWeHelp />
      <Testimonials />
      <TechStack />
    </div>
  );
}
