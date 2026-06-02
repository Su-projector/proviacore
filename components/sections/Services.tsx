'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const Services = () => {
    const services = [
        {
            title: "Custom Development",
            description: "Bespoke web solutions built around your business goals, using modern technologies to deliver reliable products.",
            icon: (
                <svg className="w-8 h-8 text-[var(--brand-blue)] group-hover:text-[var(--brand-coral)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
        },
        {
            title: "Responsive Excellence",
            description: "Mobile-first designs that deliver consistent, intuitive experiences across all devices and screen sizes.",
            icon: (
                <svg className="w-8 h-8 text-[var(--brand-blue)] group-hover:text-[var(--brand-coral)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: "SEO Mastery",
            description: "Search-engine-friendly architecture baked in from the start to improve visibility and growth.",
            icon: (
                <svg className="w-8 h-8 text-[var(--brand-blue)] group-hover:text-[var(--brand-coral)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            title: "Brand Advisory",
            description: "Strategic clarity and design direction to help your brand stand out in a crowded digital landscape.",
            icon: (
                <svg className="w-8 h-8 text-[var(--brand-blue)] group-hover:text-[var(--brand-coral)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
        },
        {
            title: "Enterprise Security",
            description: "Robust security practices and infrastructure designed to protect your data, users, and operations.",
            icon: (
                <svg className="w-8 h-8 text-[var(--brand-blue)] group-hover:text-[var(--brand-coral)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            title: "Strategic Evolution",
            description: "Ongoing advisory and technical updates to keep your systems stable and evolving with your scale.",
            icon: (
                <svg className="w-8 h-8 text-[var(--brand-blue)] group-hover:text-[var(--brand-coral)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
    ];

    return (
        <section id="services" className="relative bg-[var(--brand-light)] py-[64px] md:py-[80px] lg:py-[96px] overflow-hidden">
            {/* Noise Texture */}
            <div 
                className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
            />
            
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
                <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
                    <h2 className="font-display font-bold text-[clamp(2rem,5vw,3rem)] tracking-[-0.02em] text-[var(--brand-dark-text)] mb-6 leading-[1.1]">
                        Engineered for <span className="text-[var(--brand-coral)]">Performance.</span>
                    </h2>
                    <p className="font-body text-[1rem] md:text-[1.125rem] text-[var(--brand-gray)] leading-[1.7]">
                        We merge technical precision with creative strategy to build digital ecosystems that do not just work — they excel.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
                    {services.map((service, index) => {
                        // Calculate stagger based on index
                        const isMiddleColumn = index % 3 === 1;
                        return (
                            <ScrollReveal 
                                key={index} 
                                delay={index * 100}
                                className={`lg:${isMiddleColumn ? 'mt-10' : 'mt-0'}`}
                            >
                                <GlassCard className="p-8 md:p-10 flex flex-col items-start group hover:-translate-y-2 hover:border-[rgba(0,86,210,0.3)] transition-all duration-400 h-full">
                                    <div className="w-12 h-12 rounded-[12px] bg-[rgba(0,86,210,0.05)] flex items-center justify-center mb-6 group-hover:bg-[rgba(0,86,210,0.1)] transition-colors">
                                        {service.icon}
                                    </div>
                                    <h3 className="font-display font-bold text-[1.25rem] text-[var(--brand-dark-text)] mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="font-body text-[1rem] text-[var(--brand-gray)] leading-[1.6]">
                                        {service.description}
                                    </p>
                                </GlassCard>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
