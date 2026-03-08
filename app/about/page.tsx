import AboutHero from "@/components/sections/AboutHero";
import AboutCards from "@/components/sections/AboutCards";
import FounderNote from "@/components/sections/FounderNote";
import AboutStats from "@/components/sections/AboutStats";
import AboutSubBrands from "@/components/sections/AboutSubBrands";

export const metadata = {
    title: "About ProviaCore | Product-Focused Web Development Team",
    description: "Learn about ProviaCore, a modern digital development brand focused on clarity, craftsmanship, and high-performing web solutions.",
    keywords: ["About ProviaCore", "web development team", "digital product studio", "UX-first engineering"],
    openGraph: {
        title: "About ProviaCore — Design-First. Performance-Minded.",
        description: "A systems-driven team building scalable, well-crafted digital products for modern businesses.",
    },
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHero />
            <AboutCards />
            <FounderNote />
            <AboutStats />
            <AboutSubBrands />
        </div>
    );
}
