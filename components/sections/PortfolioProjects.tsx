'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import ProjectImage from './ProjectImage';

interface Project {
    title: string;
    description: string;
    images: string | string[];
    tags: string[];
    category: string;
    ctaText?: string;
    ctaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
}

const projects: Project[] = [
    {
        title: "School Website",
        description: "Gave enterprise level advise to Krelis Legacy School; then, designed and built a high-fidelity school website that created a stable and dominant online presence. This solution solves the problem of congested onsite admission process.",
        images: [
            "/projectimages/schoolwebsite/Krelis1.png",
            "/projectimages/schoolwebsite/Krelis2.png",
            "/projectimages/schoolwebsite/Krelis3.png",
            "/projectimages/schoolwebsite/Krelis4.png",
        ],
        tags: ["Next.js", "Embedded Map", "Integrated Forms"],
        category: "Web",
        ctaText: "View Website",
        ctaHref: "https://krelislegacy.vercel.app",
        secondaryCtaText: "Build Similar",
        secondaryCtaHref: "/contact",
    },
    {
        title: "Wedding Invitation Website",
        description: "Design and develop a modern, interactive, and immersive digital wedding invitation. Moving beyond static digital cards, this platform provides a narrative experience that guides guests through the couple's journey.",
        images: [
            "/projectimages/weddinginvitation/wedding1.png",
            "/projectimages/weddinginvitation/wedding2.png",
            "/projectimages/weddinginvitation/wedding3.png",
            "/projectimages/weddinginvitation/wedding4.png",
        ],
        tags: ["Reactjs", "TypeScript", "QR Integration"],
        category: "Web",
        ctaText: "View Invitation",
        ctaHref: "https://wedding-invitation-xi-self.vercel.app",
        secondaryCtaText: "Build Similar",
        secondaryCtaHref: "/contact",
    },
    {
        title: "MyDomos",
        description: "Designed a functional prototype of a product that solves the major problem in the Nigeria Housing Sector. The solution provides a seamless and efficient way for users to find and rent properties.",
        images: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
        tags: ["Next.js", "TypeScript", "API & Backend"],
        category: "Systems",
    },
    {
        title: "Professional Portfolio Websites",
        description: "High-fidelity digital archives for creative professionals and executives, focusing on immersive storytelling and optimized asset delivery.",
        images: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
        tags: ["Personal Branding", "Immersive UI", "Performance"],
        category: "Brand",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "Company & Business Websites",
        description: "Strategic corporate platforms engineered for technical excellence, brand authority, and systemic lead generation.",
        images: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        tags: ["Corporate Strategy", "SEO Integrity", "Stability"],
        category: "Web",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "Product & Brand Identity Platforms",
        description: "Experience-driven platforms that translate complex product narratives into cohesive, high-conversion digital ecosystems.",
        images: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80",
        tags: ["Brand Identity", "UX Architecture", "Scale"],
        category: "Brand",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "E-Commerce Platforms",
        description: "Full-stack commerce architectures designed for high-volume transactions, inventory precision, and seamless customer journeys.",
        images: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
        tags: ["Retail Engine", "Secure Checkout", "Inventory Hub"],
        category: "E-Commerce",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "AI-Powered & Smart Web Applications",
        description: "Intelligent systems integrating generative AI, predictive modeling, and real-time data automation to solve complex operational challenges.",
        images: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
        tags: ["Generative AI", "Automation", "Technical Advisory"],
        category: "Systems",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "EdTech Solutions",
        description: "Scalable educational platforms focused on collaborative learning environments, knowledge retention, and intuitive student management.",
        images: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80",
        tags: ["LMS Architecture", "Strategic Onboarding", "Learning Design"],
        category: "EdTech",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "School Management Systems",
        description: "Comprehensive enterprise portals for administrative efficiency, data-driven academics, and streamlined school operations.",
        images: "https://images.unsplash.com/photo-1523050335192-ce6744710bb1?auto=format&fit=crop&q=80",
        tags: ["Operations", "Student CRM", "Academic Ledger"],
        category: "Systems",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "School Portals",
        description: "Interactive gateways for parents, students, and staff to access resources, updates, and communication hubs in real-time.",
        images: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
        tags: ["Community Hub", "Real-time Data", "Accessibility"],
        category: "Systems",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "Online Stores (Lightweight Commerce)",
        description: "Focused commerce solutions for specialized boutiques and emerging brands requiring fast, performance-optimized delivery.",
        images: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
        tags: ["Direct-to-Consumer", "Agile Checkout", "Visual Focus"],
        category: "E-Commerce",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "Website Redesign & Performance Optimization",
        description: "Architectural pivots for existing sites to improve load speeds, SEO standing, and conversion flow through technical engineering.",
        images: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        tags: ["Speed Optimization", "SEO Audit", "UX Refactor"],
        category: "Systems",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "Enterprise Advisory & Technical Consulting",
        description: "High-level strategic guidance on technical stack selection, digital roadmapping, and system scalability for growing organizations.",
        images: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
        tags: ["Consulting", "Architecture", "Strategic Planning"],
        category: "Systems",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "Tech Coaching (Web Development & Systems Thinking)",
        description: "Professional enablement and mentorship for individuals or teams looking to master modern engineering and delivery disiplines.",
        images: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
        tags: ["Enablement", "Mentorship", "Engineering Standards"],
        category: "Systems",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "Internal Tools & Dashboards",
        description: "Custom-built operation hubs and visualization layers that simplify internal workflows and data-driven decision-making.",
        images: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        tags: ["Operational Efficiency", "Data Dashboard", "Internal UX"],
        category: "Systems",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "Landing Pages for Campaigns & Launches",
        description: "Aggressive, high-conversion single-page ecosystems designed to drive immediate action for product launches.",
        images: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80",
        tags: ["Conversion Focused", "Rapid Delivery", "Launch Strategy"],
        category: "Web",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    },
    {
        title: "Maintenance, Support & System Evolution",
        description: "Long-term partnership focused on stability, reactive support, and incremental system enhancements.",
        images: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80",
        tags: ["Lifecycle Support", "System Stability", "Continuous Growth"],
        category: "Systems",
        ctaText: "Build Similar",
        ctaHref: "/contact",
    }
];

const categories = ["All", "Web", "Brand", "Systems", "E-Commerce", "EdTech"];

const PortfolioProjects = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <section className="bg-zinc-50/50 py-16 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Noise Texture */}
            <div 
                className="absolute inset-0 pointer-events-none z-[1] opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
            />
            
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
                {/* Filter Tabs Navigation */}
                <div className="flex justify-center mb-16 relative">
                    <div className="flex items-center gap-1 md:gap-2 bg-[rgba(11,17,32,0.03)] p-1.5 rounded-[12px] border border-[rgba(0,86,210,0.05)] overflow-x-auto max-w-full no-scrollbar">
                        {categories.map((category) => {
                            const isActive = activeFilter === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={`relative px-4 py-2.5 rounded-[8px] font-body font-semibold text-[0.875rem] transition-colors duration-300 whitespace-nowrap z-10 ${
                                        isActive ? "text-white" : "text-[var(--brand-gray)] hover:text-[var(--brand-dark-text)]"
                                    }`}
                                >
                                    {category}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeFilterUnderline"
                                            className="absolute inset-0 bg-[var(--brand-blue)] rounded-[8px] -z-10 shadow-[var(--shadow-sm)]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Grid Masonry container */}
                <div className="portfolio-masonry">
                    <AnimatePresence mode="popLayout">
                        {projects
                            .filter(project => activeFilter === "All" || project.category === activeFilter)
                            .map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    key={project.title}
                                    className="portfolio-item"
                                >
                                    <GlassCard className="rounded-[20px] overflow-hidden flex flex-col group hover:-translate-y-2 hover:border-[rgba(0,86,210,0.3)] transition-all duration-400 h-full border border-[rgba(0,86,210,0.08)] bg-[rgba(255,255,255,0.6)] backdrop-blur-md">
                                        {/* Thumbnail Image Container */}
                                        <div className="w-full aspect-[16/10] overflow-hidden relative bg-zinc-100 border-b border-[rgba(0,86,210,0.05)]">
                                            <ProjectImage images={project.images} alt={project.title} />
                                        </div>

                                        {/* Project Meta and Details */}
                                        <div className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex flex-wrap gap-1.5 mb-4">
                                                    {project.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="font-mono text-[0.6875rem] uppercase tracking-wider text-[var(--brand-blue)] bg-[rgba(0,86,210,0.04)] px-2.5 py-1 rounded-full font-semibold border border-[rgba(0,86,210,0.05)]"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <h3 className="font-display font-bold text-[1.25rem] text-[var(--brand-dark-text)] mb-3 group-hover:text-[var(--brand-blue)] transition-colors duration-300">
                                                    {project.title}
                                                </h3>

                                                <p className="font-body text-[0.875rem] md:text-[0.9375rem] text-[var(--brand-gray)] leading-[1.6] mb-6">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Action buttons */}
                                            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[rgba(0,0,0,0.04)]">
                                                {project.ctaHref && project.ctaText ? (
                                                    <Link
                                                        href={project.ctaHref}
                                                        className="font-body font-bold text-[0.8125rem] text-[var(--brand-blue)] hover:text-[#004bb8] flex items-center gap-1 group/link"
                                                    >
                                                        {project.ctaText}
                                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </Link>
                                                ) : (
                                                    <Link
                                                        href="/contact"
                                                        className="font-body font-bold text-[0.8125rem] text-[var(--brand-blue)] hover:text-[#004bb8] flex items-center gap-1 group/link"
                                                    >
                                                        Inquire Project
                                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </Link>
                                                )}

                                                {project.secondaryCtaHref && project.secondaryCtaText && (
                                                    <Link
                                                        href={project.secondaryCtaHref}
                                                        className="font-body text-[0.8125rem] text-[var(--brand-gray)] hover:text-[var(--brand-dark-text)] ml-auto"
                                                    >
                                                        {project.secondaryCtaText}
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default PortfolioProjects;
