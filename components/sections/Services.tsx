'use client';

import React, { useRef, useState, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const Services = () => {
    const services = [
        {
            title: "Custom Development",
            subtitle: "Bespoke high-performance web systems.",
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
            subtitle: "Seamless experience across all devices.",
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
            subtitle: "Search-engine-friendly web architectures.",
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
            subtitle: "Strategic design for modern brands.",
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
            subtitle: "Robust security protecting your data.",
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
            subtitle: "Ongoing guidance for scaling platforms.",
            description: "Ongoing advisory and technical updates to keep your systems stable and evolving with your scale.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 24h24M24 12l12 12-12 12" />
                </svg>
            ),
        },
    ];

    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    const [isMobile, setIsMobile] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    const progressRef = useRef(0);
    const directionRef = useRef(1); // 1 = forward, -1 = backward
    const animationRef = useRef<number | null>(null);
    const lastTouchTimeRef = useRef(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(motionQuery.matches);
        
        const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        motionQuery.addEventListener('change', handleMotionChange);

        return () => {
            window.removeEventListener('resize', checkMobile);
            motionQuery.removeEventListener('change', handleMotionChange);
        };
    }, []);

    useEffect(() => {
        if (!isMobile || prefersReducedMotion) return;

        const animate = () => {
            const now = Date.now();
            const shouldPause = isPaused || (now - lastTouchTimeRef.current < 3000);

            if (!shouldPause && row1Ref.current && row2Ref.current) {
                const row1 = row1Ref.current;
                const row2 = row2Ref.current;

                const limit1 = row1.scrollWidth - row1.clientWidth;
                const limit2 = row2.scrollWidth - row2.clientWidth;

                if (limit1 > 0 || limit2 > 0) {
                    const delta = 0.0008; // smooth slow rate
                    progressRef.current += directionRef.current * delta;

                    if (progressRef.current >= 1) {
                        progressRef.current = 1;
                        directionRef.current = -1;
                    } else if (progressRef.current <= 0) {
                        progressRef.current = 0;
                        directionRef.current = 1;
                    }

                    if (limit1 > 0) {
                        row1.scrollLeft = progressRef.current * limit1;
                    }
                    if (limit2 > 0) {
                        row2.scrollLeft = (1 - progressRef.current) * limit2;
                    }
                }
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isMobile, prefersReducedMotion, isPaused]);

    const handleTouchStart = () => {
        setIsPaused(true);
        lastTouchTimeRef.current = Date.now();
    };

    const handleTouchMove = () => {
        lastTouchTimeRef.current = Date.now();
    };

    const handleTouchEnd = (rowNum: number) => {
        lastTouchTimeRef.current = Date.now();
        setIsPaused(false);

        setTimeout(() => {
            if (rowNum === 1 && row1Ref.current) {
                const r1 = row1Ref.current;
                const limit1 = r1.scrollWidth - r1.clientWidth;
                if (limit1 > 0) {
                    progressRef.current = r1.scrollLeft / limit1;
                }
            } else if (rowNum === 2 && row2Ref.current) {
                const r2 = row2Ref.current;
                const limit2 = r2.scrollWidth - r2.clientWidth;
                if (limit2 > 0) {
                    progressRef.current = 1 - (r2.scrollLeft / limit2);
                }
            }
            progressRef.current = Math.max(0, Math.min(1, progressRef.current));
        }, 100);
    };

    return (
        <section id="services" className="relative bg-[var(--brand-white)] py-[40px] md:py-[80px] lg:py-[96px] overflow-hidden">
            {/* Noise Texture */}
            <div 
                className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
            />
            
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
                {/* Desktop Headline Block */}
                <div className="hidden md:block">
                    <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
                        <h2 className="font-display font-bold text-[clamp(2rem,5vw,3rem)] tracking-[-0.02em] text-[var(--brand-dark-text)] mb-6 leading-[1.1]">
                            Engineered for <span className="text-[var(--brand-coral)]">Performance.</span>
                        </h2>
                        <p className="font-body text-[1rem] md:text-[1.125rem] text-[var(--brand-gray)] leading-[1.7]">
                            We merge technical precision with creative strategy to build digital ecosystems that do not just work — they excel.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Mobile Heading - Compact Label */}
                <div className="block md:hidden mb-6 text-center">
                    <span className="font-mono text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--brand-blue)] bg-[rgba(0,86,210,0.06)] px-3 py-1.5 rounded-full inline-block">
                        Engineered for Performance
                    </span>
                </div>

                {/* Mobile Marquee container (Row 1 & Row 2) */}
                <div className="flex md:hidden flex-col gap-4 mb-4 select-none">
                    {/* Row 1 */}
                    <div 
                        ref={row1Ref}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={() => handleTouchEnd(1)}
                        onMouseDown={handleTouchStart}
                        onMouseMove={handleTouchMove}
                        onMouseUp={() => handleTouchEnd(1)}
                        className="flex overflow-x-auto gap-4 py-2 px-4 no-scrollbar snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {services.slice(0, 3).map((service, index) => (
                            <div 
                                key={index}
                                onClick={() => setSelectedService(service)}
                                className="w-[280px] shrink-0 snap-center cursor-pointer"
                            >
                                <GlassCard className="p-5 flex flex-col items-start h-[130px] justify-between border-[rgba(0,86,210,0.08)] bg-white hover:border-[rgba(0,86,210,0.2)] transition-all">
                                    <div className="flex items-center gap-4 w-full">
                                        <div className="w-10 h-10 rounded-[8px] bg-[rgba(0,86,210,0.05)] flex items-center justify-center shrink-0 text-[var(--brand-blue)]">
                                            {service.icon}
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-display font-bold text-[0.95rem] text-[var(--brand-dark-text)] leading-tight">
                                                {service.title}
                                            </h4>
                                            <p className="font-body text-[0.75rem] text-[var(--brand-gray)] mt-1 leading-snug">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="font-mono text-[0.6rem] text-[var(--brand-blue)] uppercase tracking-wider font-semibold">
                                        Tap to read more →
                                    </span>
                                </GlassCard>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div 
                        ref={row2Ref}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={() => handleTouchEnd(2)}
                        onMouseDown={handleTouchStart}
                        onMouseMove={handleTouchMove}
                        onMouseUp={() => handleTouchEnd(2)}
                        className="flex overflow-x-auto gap-4 py-2 px-4 no-scrollbar snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {services.slice(3, 6).map((service, index) => (
                            <div 
                                key={index}
                                onClick={() => setSelectedService(service)}
                                className="w-[280px] shrink-0 snap-center cursor-pointer"
                            >
                                <GlassCard className="p-5 flex flex-col items-start h-[130px] justify-between border-[rgba(0,86,210,0.08)] bg-white hover:border-[rgba(0,86,210,0.2)] transition-all">
                                    <div className="flex items-center gap-4 w-full">
                                        <div className="w-10 h-10 rounded-[8px] bg-[rgba(0,86,210,0.05)] flex items-center justify-center shrink-0 text-[var(--brand-blue)]">
                                            {service.icon}
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-display font-bold text-[0.95rem] text-[var(--brand-dark-text)] leading-tight">
                                                {service.title}
                                            </h4>
                                            <p className="font-body text-[0.75rem] text-[var(--brand-gray)] mt-1 leading-snug">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="font-mono text-[0.6rem] text-[var(--brand-blue)] uppercase tracking-wider font-semibold">
                                        Tap to read more →
                                    </span>
                                </GlassCard>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 services-grid">
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

            {/* Modal Overlay for Mobile card descriptions */}
            {selectedService && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedService(null)}
                    />
                    <div className="relative z-10 w-full max-w-[340px] bg-white rounded-[16px] p-6 shadow-2xl border border-[rgba(0,86,210,0.1)] text-left">
                        <button 
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 text-[var(--brand-gray)] hover:text-[var(--brand-dark-text)] font-semibold"
                        >
                            ✕
                        </button>
                        <div className="w-12 h-12 rounded-[12px] bg-[rgba(0,86,210,0.05)] flex items-center justify-center mb-4 text-[var(--brand-blue)]">
                            {selectedService.icon}
                        </div>
                        <h3 className="font-display font-bold text-[1.2rem] text-[var(--brand-dark-text)] mb-3">
                            {selectedService.title}
                        </h3>
                        <p className="font-body text-[0.875rem] text-[var(--brand-gray)] leading-[1.6]">
                            {selectedService.description}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Services;
