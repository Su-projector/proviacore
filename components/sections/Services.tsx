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
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 12L8 24L16 36" />
                    <path d="M32 12L40 24L32 36" />
                    <circle cx="24" cy="24" r="3" fill="#0056D2" stroke="none" />
                    <line x1="19" y1="24" x2="16" y2="24" stroke="#0056D2" />
                    <line x1="29" y1="24" x2="32" y2="24" stroke="#0056D2" />
                    <circle cx="16" cy="24" r="1.5" fill="#E63946" stroke="none" />
                    <circle cx="32" cy="24" r="1.5" fill="#E63946" stroke="none" />
                </svg>
            ),
        },
        {
            title: "Responsive Excellence",
            description: "Mobile-first designs that deliver consistent, intuitive experiences across all devices and screen sizes.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="8" y="8" width="12" height="32" rx="2" />
                    <rect x="24" y="12" width="16" height="24" rx="2" />
                    <rect x="44" y="16" width="4" height="16" rx="2" />
                </svg>
            ),
        },
        {
            title: "SEO Mastery",
            description: "Search-engine-friendly architecture baked in from the start to improve visibility and growth.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="20" cy="20" r="8" />
                    <line x1="26" y1="26" x2="36" y2="36" />
                    <rect x="30" y="12" width="4" height="12" />
                    <rect x="36" y="16" width="4" height="8" />
                </svg>
            ),
        },
        {
            title: "Brand Advisory",
            description: "Strategic clarity and design direction to help your brand stand out in a crowded digital landscape.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8h24v24H12z" />
                    <circle cx="24" cy="20" r="4" />
                    <path d="M24 24v4" />
                </svg>
            ),
        },
        {
            title: "Enterprise Security",
            description: "Robust security practices and infrastructure designed to protect your data, users, and operations.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M24 4l20 8v12c0 10-6 19-20 22C10 33 4 24 4 14V6l20-2z" />
                    <rect x="20" y="22" width="8" height="8" rx="2" />
                </svg>
            ),
        },
        {
            title: "Strategic Evolution",
            description: "Ongoing advisory and technical updates to keep your systems stable and evolving with your scale.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 24h24M24 12l12 12-12 12" />
                </svg>
            ),
        },
    ];

    return (
        <section id="services" className="relative bg-[var(--brand-white)] py-[64px] md:py-[80px] lg:py-[96px] overflow-hidden">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 services-grid">
                    {services.map((service, index) => {
                        const isMiddleColumn = index % 3 === 1;
                        return (
                            <ScrollReveal 
                                key={index} 
                                delay={index * 100}
                            >
                                <div className={isMiddleColumn ? "lg:translate-y-6" : ""}>
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
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
