'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Working with ProviaCore on our school's digital transformation was a remarkable experience. Their approach to UI/UX design showed a deep understanding of both functionality and human-centered design. The website they designed perfectly captured our school's identity.",
            author: "Mr. Abayomi Kareem",
            role: "Director, Krelis Legacy School",
            initials: "AK",
        },
        {
            quote: "Abdusobur balanced creativity with technical execution, ensuring our milestones were met efficiently. His ability to coordinate developers, clarify tasks, and maintain a shared vision made a major difference in our progress.",
            author: "Demi Enoch",
            role: "Founder, DomosX / DETOVA LABS",
            initials: "DE",
        },
        {
            quote: "The rebranding was a turning point for our consultancy. Their enterprise design thinking and strategic input helped us redefine how we communicate our value.",
            author: "Mr. Sulaimon S. Aribito",
            role: "Founder/CEO, GreenFingers Edu-Connect",
            initials: "SA",
        },
    ];

    return (
        <section id="testimonials" className="bg-white py-[64px] md:py-[80px] lg:py-[96px]">
            <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
                <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
                    <h2 className="font-display font-bold text-[clamp(2rem,5vw,3rem)] tracking-[-0.02em] text-[var(--brand-dark-text)] mb-6 leading-[1.1]">
                        Client <span className="text-[var(--brand-coral)]">Voices.</span>
                    </h2>
                    <p className="font-body text-[1rem] md:text-[1.125rem] text-[var(--brand-gray)] leading-[1.7]">
                        Trust is built through consistent performance. Here is what leading teams say about our execution.
                    </p>
                </ScrollReveal>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <ScrollReveal key={index} delay={index * 150}>
                            <GlassCard className="relative p-5 md:p-6 lg:p-8 rounded-[20px] flex flex-col justify-between h-full group hover:shadow-[var(--shadow-lg)] transition-all duration-300">
                                {/* Large decorative quote */}
                                <div className="absolute top-2 left-2 text-[clamp(4rem,8vw,8rem)] font-display font-bold text-[var(--brand-blue)] opacity-10 leading-none pointer-events-none select-none">
                                    &ldquo;
                                </div>
                                
                                <div className="relative z-10 pt-4">
                                    <blockquote className="font-display font-medium text-[1.125rem] md:text-[1.25rem] leading-[1.4] tracking-[-0.01em] text-[var(--brand-dark-text)] mb-8">
                                        {t.quote}
                                    </blockquote>
                                </div>

                                <div className="flex items-center gap-4 mt-auto relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-[rgba(0,86,210,0.1)] flex items-center justify-center font-bold text-[var(--brand-blue)] font-mono shrink-0">
                                        {t.initials}
                                    </div>
                                    <div>
                                        <p className="font-body font-bold text-[var(--brand-dark-text)] leading-tight mb-1">{t.author}</p>
                                        <p className="font-mono text-[0.75rem] text-[var(--brand-gray)] uppercase tracking-[0.05em]">{t.role}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
