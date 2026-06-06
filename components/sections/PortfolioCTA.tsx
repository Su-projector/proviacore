'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CursorSpotlight } from '@/components/ui/CursorSpotlight';

const PortfolioCTA = () => {
    return (
        <CursorSpotlight className="hidden md:block relative w-full py-[64px] md:py-[80px] lg:py-[128px] overflow-hidden bg-gradient-to-r from-[var(--brand-navy)] via-[var(--brand-blue)] to-[var(--brand-navy)] bg-[length:200%_auto] animate-[gradient-shift_8s_ease_infinite]">
            {/* Noise Texture */}
            <div 
                className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
            />
            
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 text-center">
                <ScrollReveal className="max-w-4xl mx-auto flex flex-col items-center">
                    <h2 className="font-display font-bold text-[clamp(2.5rem,6vw,4rem)] tracking-[-0.02em] text-white mb-8 leading-[1.1]">
                        Ready to Build Something Meaningful?
                    </h2>
                    <p className="font-body text-[1rem] md:text-[1.125rem] text-[rgba(255,255,255,0.8)] leading-[1.7] mb-12 max-w-3xl">
                        Explore our portfolio to see the kinds of solutions we have designed and delivered. Use any project as a reference; build something similar with us, or take a different path entirely. We design and engineer systems shaped around your goals, not templates.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                        <MagneticButton variant="primary" href="/get-started" className="w-full sm:w-auto bg-[var(--brand-blue)] hover:bg-[#004bb8]">
                            Start a Project
                        </MagneticButton>
                        <Link 
                            href="/portfolio" 
                            className="w-full sm:w-auto bg-transparent text-white border-[1.5px] border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.5)] rounded-[8px] px-[32px] py-[14px] font-body font-semibold text-[0.875rem] tracking-[0.02em] transition-all duration-300 flex items-center justify-center text-center"
                        >
                            View Portfolio & Expertise
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </CursorSpotlight>
    );
};

export default PortfolioCTA;
