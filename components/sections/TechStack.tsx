'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const TechStack = () => {
    const stack = [
        {
            category: "Frontend",
            tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
            category: "Backend & Infra",
            tools: ["Node.js", "AWS", "Vercel", "PostgreSQL"],
        },
        {
            category: "Strategic Delivery",
            tools: ["CI/CD Pipelines", "Git", "System Design", "Agile"],
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-[var(--brand-light)] py-[40px] md:py-[80px] lg:py-[96px] relative overflow-hidden">
            {/* Noise Texture */}
            <div 
                className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
            />
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
                {/* Desktop Heading Block */}
                <div className="hidden md:block">
                    <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
                        <h2 className="font-display font-bold text-[clamp(2rem,5vw,3rem)] tracking-[-0.02em] text-[var(--brand-dark-text)] mb-6 leading-[1.1]">
                            The Core <span className="text-[var(--brand-coral)]">Stack.</span>
                        </h2>
                        <p className="font-body text-[1rem] md:text-[1.125rem] text-[var(--brand-gray)] leading-[1.7]">
                            We leverage industry-leading technologies to build systems that are fast, secure, and ready to scale.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Mobile Heading Block - Compact Label */}
                <div className="block md:hidden mb-6 text-center">
                    <span className="font-mono text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--brand-blue)] bg-[rgba(0,86,210,0.06)] px-3 py-1.5 rounded-full inline-block">
                        The Core Stack
                    </span>
                </div>

                {/* Mobile Tab Control Bar */}
                <div className="flex md:hidden w-full border-b border-[rgba(0,0,0,0.08)] mb-6 select-none justify-around">
                    {stack.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`pb-3 text-[0.75rem] font-mono uppercase tracking-wider font-semibold transition-all border-b-2 ${
                                activeTab === index 
                                ? 'border-[var(--brand-blue)] text-[var(--brand-blue)]' 
                                : 'border-transparent text-[var(--brand-gray)]'
                            }`}
                        >
                            {item.category.split(' & ')[0]}
                        </button>
                    ))}
                </div>

                {/* Mobile Shared Content Panel */}
                <div className="block md:hidden max-h-[40vh] overflow-y-auto bg-white rounded-[12px] p-6 border border-[rgba(0,86,210,0.08)] shadow-[var(--shadow-sm)]">
                    <h3 className="font-mono text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--brand-gray)] mb-4">
                        {stack[activeTab].category}
                    </h3>
                    <ul className="flex flex-col gap-4">
                        {stack[activeTab].tools.map((tool, tIndex) => (
                            <li
                                key={tIndex}
                                className="group flex items-center gap-3"
                            >
                                <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] shrink-0"></span>
                                <span className="font-mono text-[0.95rem] text-[var(--brand-dark-text)]">
                                    {tool}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Grid Layout */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stack.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 150}>
                            <div className="p-8 flex flex-col items-start border-l-[1px] border-[rgba(0,0,0,0.05)] h-full">
                                <h3 className="font-mono text-[0.875rem] font-bold uppercase tracking-[0.12em] text-[var(--brand-gray)] mb-8">
                                    {item.category}
                                </h3>
                                <ul className="flex flex-col gap-4">
                                    {item.tools.map((tool, tIndex) => (
                                        <li
                                            key={tIndex}
                                            className="group flex items-center gap-3 cursor-default"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></span>
                                            <span className="font-mono text-[1rem] text-[var(--brand-dark-text)]">
                                                {tool}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
