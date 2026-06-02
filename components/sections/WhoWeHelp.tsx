'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const WhoWeHelp = () => {
    const categories = [
        {
            title: "Small Businesses",
            description: "From startups to established companies, we build strong, reliable online presences that support day-to-day operations.",
            icon: (
                <svg className="w-6 h-6 text-[var(--brand-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            title: "Entrepreneurs",
            description: "We work with solo founders and creators to present products, services, or portfolios clearly and professionally.",
            icon: (
                <svg className="w-6 h-6 text-[var(--brand-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
        },
        {
            title: "Organizations",
            description: "Non-profits and educational institutions trust us to deliver solutions aligned with their mission and long-term goals.",
            icon: (
                <svg className="w-6 h-6 text-[var(--brand-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="who-we-help" className="bg-[var(--brand-light)] py-[64px] md:py-[80px] lg:py-[96px]">
            <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
                <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="font-display font-bold text-[clamp(2rem,5vw,3rem)] tracking-[-0.02em] text-[var(--brand-dark-text)] mb-6 leading-[1.1]">
                        Who We <span className="text-[var(--brand-coral)]">Empower.</span>
                    </h2>
                    <p className="font-body text-[1rem] md:text-[1.125rem] text-[var(--brand-gray)] leading-[1.7]">
                        Tailored digital expertise for those who value precision, clarity, and sustainable growth.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <ScrollReveal key={index} delay={index * 150}>
                            <div className="bg-white rounded-[var(--radius-lg)] p-8 md:p-10 flex flex-col items-start hover:-translate-y-2 hover:shadow-[var(--shadow-md)] transition-all duration-400 border border-[rgba(0,0,0,0.03)] h-full">
                                <div className="w-12 h-12 rounded-[12px] bg-[rgba(0,86,210,0.05)] flex items-center justify-center mb-6">
                                    {category.icon}
                                </div>
                                <h3 className="font-display font-bold text-[1.25rem] text-[var(--brand-dark-text)] mb-3">{category.title}</h3>
                                <p className="font-body text-[1rem] text-[var(--brand-gray)] leading-[1.6]">
                                    {category.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeHelp;
