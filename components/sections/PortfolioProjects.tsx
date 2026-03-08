"use client";

import Link from "next/link";
import ProjectImage from "./ProjectImage";

interface Project {
    title: string;
    description: string;
    images: string | string[]; // Updated to accept array
    tags: string[];
    ctaText?: string;
    ctaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
}

const projects: Project[] = [
    {
        title: "School Website",
        description: "Gave enterprise level advise to Krelis Legacy School; then, then designed and built a high-fidelity school website that created a stable and dominant online presence for Krelis Legacy School. This solution solves the problem of congested onsite admission process and makes it easier for parents to get information about the school",
        images: [
            "/projectimages/schoolwebsite/Krelis1.png",
            "/projectimages/schoolwebsite/Krelis2.png",
            "/projectimages/schoolwebsite/Krelis3.png",
            "/projectimages/schoolwebsite/Krelis4.png",
        ],
        tags: ["Next.js", "Embedded Map", "Integrated Forms"],
        ctaText: "View Website",
        ctaHref: "https://krelislegacy.vercel.app",
        secondaryCtaText: "Build Something Like This",
        secondaryCtaHref: "/contact",
    },
    {
        title: "Wedding Invitation Website",
        description: "Design and develop a modern, interactive, and immersive digital wedding invitation. Moving beyond static digital cards, this platform provides a narrative experience that guides guests through the couple's journey, event details, and logistical information.",
        images: [
            "/projectimages/weddinginvitation/wedding1.png",
            "/projectimages/weddinginvitation/wedding2.png",
            "/projectimages/weddinginvitation/wedding3.png",
            "/projectimages/weddinginvitation/wedding4.png",
        ],
        tags: ["Reactjs", "TypeScript", "QR Code Integration"],
        ctaText: "View Invitation",
        ctaHref: "https://wedding-invitation-xi-self.vercel.app",
        secondaryCtaText: "Build Something Like This",
        secondaryCtaHref: "/contact",
    },
    {
        title: "MyDomos",
        description: "Designed a functional prototype of a product that solves the major problem in the Nigeria Housing Sector. The solution provides a seamless and efficient way for users to find and rent properties that meet their specific needs and preferences",
        images: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
        tags: ["Next.js", "TypeScript", "API & Backend Integration"],
    },
    {
        title: "Professional Portfolio Websites",
        description: "High-fidelity digital archives for creative professionals and executives, focusing on immersive storytelling and optimized asset delivery.",
        images: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
        tags: ["Personal Branding", "Immersive UI", "Performance"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "Company & Business Websites",
        description: "Strategic corporate platforms engineered for technical excellence, brand authority, and systemic lead generation.",
        images: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        tags: ["Corporate Strategy", "SEO Integrity", "Stability"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "Product & Brand Identity Platforms",
        description: "Experience-driven platforms that translate complex product narratives into cohesive, high-conversion digital ecosystems.",
        images: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80",
        tags: ["Brand Identity", "UX Architecture", "Scale"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "E-Commerce Platforms",
        description: "Full-stack commerce architectures designed for high-volume transactions, inventory precision, and seamless customer journeys.",
        images: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
        tags: ["Retail Engine", "Secure Checkout", "Inventory Hub"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "AI-Powered & Smart Web Applications",
        description: "Intelligent systems integrating generative AI, predictive modeling, and real-time data automation to solve complex operational challenges.",
        images: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
        tags: ["Generative AI", "Automation", "Technical Advisory"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "EdTech Solutions",
        description: "Scalable educational platforms focused on collaborative learning environments, knowledge retention, and intuitive student management.",
        images: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80",
        tags: ["LMS Architecture", "Strategic Onboarding", "Learning Design"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "School Management Systems",
        description: "Comprehensive enterprise portals for administrative efficiency, data-driven academics, and streamlined school operations.",
        images: "https://images.unsplash.com/photo-1523050335192-ce6744710bb1?auto=format&fit=crop&q=80",
        tags: ["Operations", "Student CRM", "Academic Ledger"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "School Portals",
        description: "Interactive gateways for parents, students, and staff to access resources, updates, and communication hubs in real-time.",
        images: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
        tags: ["Community Hub", "Real-time Data", "Accessibility"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "Online Stores (Lightweight Commerce)",
        description: "Focused commerce solutions for specialized boutiques and emerging brands requiring fast, performance-optimized delivery.",
        images: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
        tags: ["Direct-to-Consumer", "Agile Checkout", "Visual Focus"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "Website Redesign & Performance Optimization",
        description: "Architectural pivots for existing sites to improve load speeds, SEO standing, and conversion flow through technical engineering.",
        images: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        tags: ["Speed Optimization", "SEO Audit", "UX Refactor"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "Enterprise Advisory & Technical Consulting",
        description: "High-level strategic guidance on technical stack selection, digital roadmapping, and system scalability for growing organizations.",
        images: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
        tags: ["Consulting", "Architecture", "Strategic Planning"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "Tech Coaching (Web Development & Systems Thinking)",
        description: "Professional enablement and mentorship for individuals or teams looking to master modern engineering and delivery disiplines.",
        images: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
        tags: ["Enablement", "Mentorship", "Engineering Standards"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "Internal Tools & Dashboards",
        description: "Custom-built operation hubs and visualization layers that simplify internal workflows and data-driven decision-making.",
        images: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        tags: ["Operational Efficiency", "Data Dashboard", "Internal UX"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "Landing Pages for Campaigns & Launches",
        description: "Aggressive, high-conversion single-page ecosystems designed to drive immediate action for product launches and campaigns.",
        images: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80",
        tags: ["Conversion Focused", "Rapid Delivery", "Launch Strategy"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    },
    {
        title: "Maintenance, Support & System Evolution",
        description: "Long-term partnership focused on stability, reactive support, and incremental system enhancements to maintain digital excellence.",
        images: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80",
        tags: ["Lifecycle Support", "System Stability", "Continuous Growth"],
        ctaText: "Build Something Like This",
        ctaHref: "/contact",
    }
];

const PortfolioProjects = () => {
    return (
        <section className="bg-zinc-50/50 py-20 lg:py-32">
            <div className="section-container">
                <div className="grid grid-cols-1 gap-12 lg:gap-20">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex flex-col md:flex-row gap-8 lg:gap-12 items-center"
                        >
                            {/* Image Container */}
                            <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-xl shadow-zinc-200/50 bg-zinc-100 relative">
                                <ProjectImage images={project.images} alt={project.title} />
                            </div>

                            {/* Content Container */}
                            <div className="w-full md:w-1/2 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] uppercase tracking-widest font-bold text-brand-blue bg-brand-blue/5 px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 group-hover:text-brand-blue transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                {/* CTAs Container */}
                                <div className="flex flex-wrap gap-4 mt-auto">
                                    {project.ctaHref && project.ctaText && (
                                        <Link
                                            href={project.ctaHref}
                                            className="inline-flex items-center px-8 py-4 rounded-xl bg-brand-blue text-white font-bold hover:bg-brand-blue-light transition-all shadow-md active:scale-95"
                                        >
                                            {project.ctaText}
                                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    )}

                                    {project.secondaryCtaHref && project.secondaryCtaText && (
                                        <Link
                                            href={project.secondaryCtaHref}
                                            className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-brand-blue text-brand-blue font-bold hover:bg-brand-blue/5 transition-all active:scale-95"
                                        >
                                            {project.secondaryCtaText}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioProjects;
