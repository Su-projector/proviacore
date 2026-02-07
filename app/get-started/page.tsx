import GetStartedHero from "@/components/sections/GetStartedHero";
import HowItWorks from "@/components/sections/HowItWorks";
import WhatWeOffer_GS from "@/components/sections/WhatWeOffer_GS";
import ReadyToTransform from "@/components/sections/ReadyToTransform";

export const metadata = {
    title: "Begin Engagement | ProviaCore Strategic Transformation",
    description: "Initialize your project with ProviaCore. A structured, engineering-first engagement path designed for strategic clarity and technical excellence.",
    keywords: ["Digital transformation", "architectural web design", "high-performance engineering", "ProviaCore engagement"],
    openGraph: {
        title: "Initiate Your Project — ProviaCore Execution Platform",
        description: "Explore a deliberate path to digital maturity with ProviaCore's consultative engagement model.",
    },
};

export default function GetStartedPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <GetStartedHero />
            <HowItWorks />
            <WhatWeOffer_GS />
            <ReadyToTransform />
        </div>
    );
}
