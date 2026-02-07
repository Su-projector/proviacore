import PortfolioHero from "@/components/sections/PortfolioHero";
import PortfolioProjects from "@/components/sections/PortfolioProjects";
import CustomSolution from "@/components/sections/CustomSolution";
import PortfolioTech from "@/components/sections/PortfolioTech";

export const metadata = {
    title: "Portfolio | ProviaCore Web Development Projects",
    description: "Explore real projects delivered by ProviaCore, from AI-powered applications to high-performance websites and digital platforms.",
    keywords: ["Web development portfolio", "AI web apps", "Next.js projects", "scalable platforms"],
    openGraph: {
        title: "ProviaCore Portfolio — Crafted Digital Products",
        description: "A curated collection of web, AI, and platform projects built with modern technologies and execution discipline.",
    },
};

export default function PortfolioPage() {
    const projectsJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "CreativeWork",
                    "name": "Cinematography — Client Portfolio",
                    "description": "Dedicated cinematography & showreel website showcasing high-resolution stills and motion previews.",
                    "creator": { "@type": "Organization", "name": "ProviaCore" }
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "CreativeWork",
                    "name": "AI-Powered Meal Plan App",
                    "description": "Full-stack AI-powered web app generating personalized weekly meal plans.",
                    "creator": { "@type": "Organization", "name": "ProviaCore" }
                }
            }
            // Additional projects can be mapped similarly
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
            />
            <PortfolioHero />
            <PortfolioProjects />
            <CustomSolution />
            <PortfolioTech />
        </div>
    );
}
