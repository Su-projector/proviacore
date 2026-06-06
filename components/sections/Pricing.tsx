'use client';

import React, { useState, useRef, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface PricingTier {
    name: string;
    description: string;
    price: string;
    subtitle?: string;
    features: string[];
    cta: string;
    href: string;
    featured: boolean;
}

const PricingCardMobile = ({ tier, isFeatured }: { tier: PricingTier; isFeatured: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-[85vw] shrink-0 snap-center">
            <GlassCard 
                elevated={isFeatured}
                overflowHidden={false}
                className={`flex flex-col p-6 min-h-[260px] relative transition-all border-[1px] bg-white
                    ${isFeatured 
                        ? "border-[rgba(0,86,210,0.3)] shadow-[var(--shadow-lg)]" 
                        : "border-[rgba(0,86,210,0.08)] shadow-[var(--shadow-sm)]"}
                `}
            >
                {isFeatured && tier.subtitle && (
                    <div className="absolute top-0 right-6 -translate-y-1/2 bg-[var(--brand-coral)] text-white text-[0.65rem] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-[0_4px_14px_rgba(230,57,70,0.25)]">
                        {tier.subtitle}
                    </div>
                )}

                <div className="mb-4">
                    <h3 className="font-display font-bold text-[1.2rem] text-[var(--brand-dark-text)] mb-1">{tier.name}</h3>
                    <p className="font-body text-[0.8rem] text-[var(--brand-gray)] leading-snug mb-3 min-h-[36px]">
                        {tier.description}
                    </p>
                    <div className="font-display font-bold text-[2rem] text-[var(--brand-blue)] leading-none">
                        {tier.price}
                    </div>
                </div>

                {/* View Features Accordion */}
                <div className="mb-4">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex justify-between items-center py-2 text-left font-mono text-[0.7rem] uppercase tracking-wider font-semibold text-[var(--brand-blue)] border-t border-[rgba(0,86,210,0.08)] cursor-pointer"
                    >
                        <span>{isOpen ? 'Hide Features' : 'View Features'}</span>
                        <span>{isOpen ? '▲' : '▼'}</span>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="space-y-2.5 pb-2">
                          {tier.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-[var(--brand-coral)] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="font-body text-[0.8rem] text-[var(--brand-gray)]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-auto">
                    <MagneticButton 
                        variant={isFeatured ? "primary" : "secondary"} 
                        href={tier.href}
                        className="w-full text-center py-2.5 text-[0.8rem]"
                    >
                        {tier.cta}
                    </MagneticButton>
                </div>
            </GlassCard>
        </div>
    );
};

const Pricing = () => {
    const tiers = [
        {
            name: "Starter",
            description: "Ideal for small projects and individual entrepreneurs.",
            price: "Custom",
            features: [
                "Responsive Website Design",
                "Up to 5 Pages",
                "Basic SEO Setup",
                "Contact Form Integration",
                "1 Month Support",
            ],
            cta: "Get Started",
            href: "/get-started",
            featured: false,
        },
        {
            name: "Professional",
            description: "Best for growing businesses needing custom solutions.",
            price: "Custom",
            subtitle: "Most Popular",
            features: [
                "Everything in Starter",
                "Up to 15 Pages",
                "Advanced SEO & Analytics",
                "E-commerce Integration",
                "3 Months Support",
                "Priority Email Support",
            ],
            cta: "Get Started",
            href: "/get-started",
            featured: true,
        },
        {
            name: "Enterprise",
            description: "Scalable solutions for complex organizational needs.",
            price: "Custom",
            features: [
                "Everything in Professional",
                "Unlimited Pages",
                "Custom Functionality",
                "Advanced Security Audits",
                "6 Months Support",
                "Dedicated Account Lead",
            ],
            cta: "Contact Us",
            href: "/contact",
            featured: false,
        },
    ];

    const pricingContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (pricingContainerRef.current) {
            const container = pricingContainerRef.current;
            const children = container.children;
            // Wait slightly for browser layout to initialize accurately
            setTimeout(() => {
                if (children && children[1]) {
                    const card = children[1] as HTMLElement;
                    const offsetLeft = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
                    container.scrollLeft = offsetLeft;
                }
            }, 100);
        }
    }, []);

    return (
        <section id="pricing" className="bg-white py-[40px] md:py-[80px] lg:py-[96px]">
            <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
                {/* Desktop Heading Block */}
                <div className="hidden md:block">
                    <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
                        <h2 className="font-display font-bold text-[clamp(2rem,5vw,3rem)] tracking-[-0.02em] text-[var(--brand-dark-text)] mb-6 leading-[1.1]">
                            Transparent <span className="text-[var(--brand-coral)]">Solutions.</span>
                        </h2>
                        <p className="font-body text-[1rem] md:text-[1.125rem] text-[var(--brand-gray)] leading-[1.7]">
                            Scalable delivery models built to support your growth at every stage of the digital journey.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Mobile Heading Block - Compact Label */}
                <div className="block md:hidden mb-6 text-center">
                    <span className="font-mono text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--brand-blue)] bg-[rgba(0,86,210,0.06)] px-3 py-1.5 rounded-full inline-block">
                        Transparent Solutions
                    </span>
                </div>

                {/* Mobile snap carousel */}
                <div className="block md:hidden relative select-none">
                    <div 
                        ref={pricingContainerRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {tiers.map((tier, index) => (
                            <PricingCardMobile 
                                key={index} 
                                tier={tier} 
                                isFeatured={tier.featured} 
                            />
                        ))}
                        <div className="w-[1px] shrink-0" />
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <ScrollReveal key={index} delay={index * 150} className={tier.featured ? "z-10" : "z-0"}>
                            <GlassCard 
                                elevated={tier.featured}
                                overflowHidden={!tier.featured}
                                className={`flex flex-col p-8 lg:p-10 h-full relative transition-all duration-400 border-[1px]
                                    ${tier.featured 
                                        ? "scale-100 md:scale-105 border-[rgba(0,86,210,0.3)] shadow-[var(--shadow-xl)] bg-[rgba(255,255,255,0.85)] backdrop-blur-[20px]" 
                                        : "border-[rgba(0,0,0,0.05)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] bg-white"}
                                    ${!tier.featured && 'hover:border-transparent group'}
                                `}
                            >
                                {/* Gradient hover border for non-featured cards */}
                                {!tier.featured && (
                                    <div className="absolute inset-0 rounded-[var(--radius-lg)] p-[1px] bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-coral)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }}></div>
                                )}

                                {tier.featured && (
                                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-[var(--brand-coral)] text-white text-[0.75rem] font-mono font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_4px_14px_rgba(230,57,70,0.4)]">
                                        {tier.subtitle}
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="font-display font-bold text-[1.5rem] text-[var(--brand-dark-text)] mb-3">{tier.name}</h3>
                                    <p className="font-body text-[1rem] text-[var(--brand-gray)] leading-[1.6] mb-6 min-h-[48px]">
                                        {tier.description}
                                    </p>
                                    <div className="font-display font-bold text-[2.5rem] text-[var(--brand-blue)] leading-none">
                                        {tier.price}
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {tier.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-[var(--brand-coral)] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-body text-[0.875rem] md:text-[1rem] text-[var(--brand-gray)]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <MagneticButton 
                                    variant={tier.featured ? "primary" : "secondary"} 
                                    href={tier.href}
                                    className="w-full"
                                >
                                    {tier.cta}
                                </MagneticButton>
                            </GlassCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
