'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

const FounderNote = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Abdusobur Sulaimon",
        jobTitle: "Founder & Lead Project Manager",
        url: "https://proviacore.vercel.app/about",
        image: "https://proviacore.vercel.app/abdusobur.png",
        sameAs: [
            "https://www.linkedin.com/in/abdusobur-sulaimon"
        ],
        worksFor: {
            "@type": "Organization",
            name: "ProviaCore"
        }
    };

    return (
        <section className="bg-[var(--brand-light)] py-[40px] md:py-[80px] lg:py-[96px] relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
                
                {/* Mobile Layout (<md): Horizontal Split */}
                <div className="flex md:hidden flex-row gap-4 items-center border-l-2 border-[var(--brand-blue)] pl-4">
                    {/* Left: Image (40% width) */}
                    <div className="w-[40%] shrink-0">
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[8px] shadow-[0_4px_12px_rgba(11,17,32,0.1)]">
                            <Image
                                src="/abdusobur.png"
                                alt="Abdusobur Sulaimon - Founder, CEO, and Lead Project Manager at ProviaCore"
                                fill
                                className="object-cover object-top"
                                sizes="35vw"
                            />
                        </div>
                    </div>
                    {/* Right: Quote & Credentials (60% width) */}
                    <div className="w-[60%] text-left flex flex-col justify-center">
                        <span className="font-mono text-[0.625rem] text-[var(--brand-blue)] uppercase tracking-[0.12em] font-semibold mb-1">Founder's Note</span>
                        <p className="font-body text-[0.72rem] text-[var(--brand-gray)] leading-[1.5] italic line-clamp-4">
                            &ldquo;At ProviaCore, we believe that great software is not just about writing code — it is about understanding the business imperative behind it. I founded ProviaCore to bridge the gap between strategic vision and technical execution.&rdquo;
                        </p>
                        <div className="mt-2">
                            <h3 className="font-display font-bold text-[0.875rem] text-[var(--brand-dark-text)] leading-tight">
                                Abdusobur Sulaimon
                            </h3>
                            <p className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-[var(--brand-gray)] mt-0.5">
                                Founder & Lead PM
                            </p>
                        </div>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="mt-2.5 text-[var(--brand-blue)] font-mono text-[0.65rem] uppercase tracking-wider font-semibold hover:text-[var(--brand-blue-light)] transition-colors text-left"
                        >
                            Read Full Note →
                        </button>
                    </div>
                </div>

                {/* Desktop & Tablet Layout (>=md) */}
                <div className="hidden md:flex flex-col lg:flex-row gap-12 lg:gap-0 items-center">
                    {/* Image Column — 40% */}
                    <ScrollReveal className="w-full lg:w-[40%] shrink-0">
                        <div className="relative lg:-mt-[60px]">
                            {/* Blue accent line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--brand-blue)] z-20" />
                            
                            <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto lg:mx-0 overflow-hidden rounded-[12px] shadow-[0_20px_60px_rgba(11,17,32,0.15)] group">
                                <Image
                                    src="/abdusobur.png"
                                    alt="Abdusobur Sulaimon - Founder, CEO, and Lead Project Manager at ProviaCore"
                                    fill
                                    className="object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.02]"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                {/* Gradient mask on right edge */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--brand-light)] opacity-60 pointer-events-none hidden lg:block" />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Text Column — 60% */}
                    <ScrollReveal delay={200} className="w-full lg:w-[60%] lg:pl-16">
                        <h2 className="font-display font-bold text-[clamp(2rem,5vw,3rem)] tracking-[-0.02em] text-[var(--brand-dark-text)] mb-8 leading-[1.1]">
                            A Note from the Founder
                        </h2>

                        <div className="space-y-6 font-body text-[1rem] md:text-[1.125rem] text-[var(--brand-gray)] leading-[1.7]">
                            <p>
                                &ldquo;At ProviaCore, we believe that great software is not just about writing code — it is about understanding the business imperative behind it. I founded ProviaCore to bridge the gap between strategic vision and technical execution.
                            </p>
                            <p>
                                With a background rooted in complex system architecture, UX engineering, and technical project management, my goal has always been simple: build digital products that drive lasting productivity. We do not just build websites; we engineer scalable, resilient platforms that solve real operational bottlenecks.
                            </p>
                            <p>
                                Whether you are a startup looking to establish a dominant online presence or an enterprise seeking architectural clarity, my team and I are committed to delivering excellence at every level of the stack. Let us build something enduring.&rdquo;
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-[rgba(0,86,210,0.15)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <a 
                                    href="https://www.google.com/search?q=Who's+Sulaimon+Abdusobur"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center"
                                >
                                    <h3 className="font-display font-semibold text-[1.25rem] text-[var(--brand-dark-text)] group-hover:text-[var(--brand-blue)] transition-colors">
                                        Abdusobur Sulaimon
                                    </h3>
                                </a>
                                <p className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-[var(--brand-blue)] mt-1">
                                    Founder & Lead Project Manager
                                </p>

                                <a
                                    href="https://www.linkedin.com/in/abdusobur-sulaimon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center mt-3 font-body text-[0.875rem] font-medium text-[var(--brand-gray)] hover:text-[var(--brand-blue)] transition-colors group"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    <span className="relative">
                                        Connect on LinkedIn
                                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--brand-blue)] transition-all duration-300 group-hover:w-full" />
                                    </span>
                                </a>
                            </div>

                            <MagneticButton variant="primary" href="/contact" className="w-full sm:w-auto">
                                Book a Strategy Call
                            </MagneticButton>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Mobile Modal Overlay for Full Founder Note */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    />
                    <div className="relative z-10 w-full max-w-[340px] max-h-[85vh] bg-white rounded-[16px] p-6 shadow-2xl border border-[rgba(0,86,210,0.1)] text-left flex flex-col justify-between overflow-y-auto">
                        <div>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-[var(--brand-gray)] hover:text-[var(--brand-dark-text)] font-semibold"
                            >
                                ✕
                            </button>
                            <h3 className="font-display font-bold text-[1.2rem] text-[var(--brand-dark-text)] mb-4">
                                Founder's Note
                            </h3>
                            <div className="space-y-4 font-body text-[0.85rem] text-[var(--brand-gray)] leading-[1.6]">
                                <p>
                                    &ldquo;At ProviaCore, we believe that great software is not just about writing code — it is about understanding the business imperative behind it. I founded ProviaCore to bridge the gap between strategic vision and technical execution.
                                </p>
                                <p>
                                    With a background rooted in complex system architecture, UX engineering, and technical project management, my goal has always been simple: build digital products that drive lasting productivity. We do not just build websites; we engineer scalable, resilient platforms that solve real operational bottlenecks.
                                </p>
                                <p>
                                    Whether you are a startup looking to establish a dominant online presence or an enterprise seeking architectural clarity, my team and I are committed to delivering excellence at every level of the stack. Let us build something enduring.&rdquo;
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-[rgba(0,86,210,0.1)]">
                                <h4 className="font-display font-semibold text-[0.95rem] text-[var(--brand-dark-text)]">
                                    Abdusobur Sulaimon
                                </h4>
                                <p className="font-mono text-[0.65rem] text-[var(--brand-blue)] uppercase tracking-wider mt-0.5">
                                    Founder & Lead Project Manager
                                </p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <MagneticButton variant="primary" href="/contact" className="w-full text-center">
                                Book a Strategy Call
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FounderNote;
