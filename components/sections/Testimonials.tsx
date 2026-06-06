'use client';

import React, { useState, useRef, useEffect } from 'react';
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

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isInteracting, setIsInteracting] = useState(false);

    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollLeft = container.scrollLeft;
            const children = container.children;
            let closestIndex = 0;
            let minDiff = Infinity;
            
            for (let i = 0; i < children.length - 1; i++) {
                const child = children[i] as HTMLElement;
                const childCenter = child.offsetLeft + child.clientWidth / 2;
                const containerCenter = scrollLeft + container.clientWidth / 2;
                const diff = Math.abs(childCenter - containerCenter);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = i;
                }
            }
            setActiveIndex(closestIndex);
        }
    };

    // Auto-advance every 5.5s on mobile only
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const checkMobile = () => window.innerWidth < 768;
        if (!checkMobile()) return;

        const interval = setInterval(() => {
            if (!isInteracting && scrollRef.current) {
                const nextIndex = (activeIndex + 1) % testimonials.length;
                const container = scrollRef.current;
                const card = container.children[nextIndex] as HTMLElement;
                if (card) {
                    const offsetLeft = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
                    container.scrollTo({ left: offsetLeft, behavior: 'smooth' });
                    setActiveIndex(nextIndex);
                }
            }
        }, 5500);

        return () => clearInterval(interval);
    }, [activeIndex, isInteracting]);

    const handleTouchStart = () => setIsInteracting(true);
    const handleTouchEnd = () => {
        setIsInteracting(false);
        setTimeout(handleScroll, 100);
    };

    return (
        <section id="testimonials" className="bg-white py-[40px] md:py-[80px] lg:py-[96px]">
            <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
                {/* Desktop Heading Block */}
                <div className="hidden md:block">
                    <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
                        <h2 className="font-display font-bold text-[clamp(2rem,5vw,3rem)] tracking-[-0.02em] text-[var(--brand-dark-text)] mb-6 leading-[1.1]">
                            Client <span className="text-[var(--brand-coral)]">Voices.</span>
                        </h2>
                        <p className="font-body text-[1rem] md:text-[1.125rem] text-[var(--brand-gray)] leading-[1.7]">
                            Trust is built through consistent performance. Here is what leading teams say about our execution.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Mobile Heading Block - Compact Label */}
                <div className="block md:hidden mb-6 text-center">
                    <span className="font-mono text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--brand-blue)] bg-[rgba(0,86,210,0.06)] px-3 py-1.5 rounded-full inline-block">
                        Client Voices
                    </span>
                </div>

                {/* Mobile snap carousel */}
                <div className="block md:hidden relative select-none">
                    <div 
                        ref={scrollRef}
                        onScroll={handleScroll}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleTouchStart}
                        onMouseUp={handleTouchEnd}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {testimonials.map((t, index) => (
                            <div 
                                key={index} 
                                className="w-[85vw] shrink-0 snap-center"
                            >
                                <GlassCard className="relative p-6 rounded-[20px] flex flex-col justify-between min-h-[260px] border border-[rgba(0,86,210,0.08)] bg-white shadow-[var(--shadow-sm)]">
                                    <div className="absolute top-2 left-2 text-[clamp(3rem,6vw,4rem)] font-display font-bold text-[var(--brand-blue)] opacity-10 leading-none pointer-events-none select-none">
                                        &ldquo;
                                    </div>
                                    <div className="relative z-10 pt-4 flex-grow">
                                        <blockquote className="font-display font-medium text-[0.95rem] leading-[1.5] tracking-[-0.01em] text-[var(--brand-dark-text)] mb-6">
                                            {t.quote}
                                        </blockquote>
                                    </div>
                                    <div className="flex items-center gap-3 mt-auto relative z-10">
                                        <div className="w-10 h-10 rounded-full bg-[rgba(0,86,210,0.1)] flex items-center justify-center font-bold text-[var(--brand-blue)] font-mono shrink-0 text-sm">
                                            {t.initials}
                                        </div>
                                        <div>
                                            <p className="font-body font-bold text-[var(--brand-dark-text)] leading-tight text-sm mb-0.5">{t.author}</p>
                                            <p className="font-mono text-[0.65rem] text-[var(--brand-gray)] uppercase tracking-[0.05em]">{t.role}</p>
                                        </div>
                                    </div>
                                </GlassCard>
                            </div>
                        ))}
                        <div className="w-[1px] shrink-0" />
                    </div>

                    {/* Pagination indicators */}
                    <div className="flex justify-center gap-2 mt-2">
                        {testimonials.map((_, index) => (
                            <div 
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-[var(--brand-blue)] w-5' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop Grid Layout */}
                <div className="hidden md:block">
                    <div className="testimonials-grid">
                        {testimonials.map((t, index) => (
                            <ScrollReveal key={index} delay={index * 150}>
                                <GlassCard className="relative p-5 md:p-6 lg:p-8 rounded-[20px] flex flex-col justify-between h-full group hover:shadow-[var(--shadow-lg)] transition-all duration-300">
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
            </div>
        </section>
    );
};

export default Testimonials;
