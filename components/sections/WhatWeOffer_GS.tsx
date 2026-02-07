"use client";

import Link from "next/link";

const WhatWeOffer_GS = () => {
    const capabilities = [
        {
            title: "Architectural Integrity",
            description: "Future-ready structures built with Next.js and Type-safe ecosystems.",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        },
        {
            title: "Performance Lifecycle",
            description: "Optimized Core Web Vitals and resilient asset delivery pipelines.",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        },
        {
            title: "Security & Scale",
            description: "Production-grade security protocols for enterprise-level scalability.",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        },
        {
            title: "Strategic Evolution",
            description: "Built for growth, with clean code and modular design patterns.",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        },
    ];

    return (
        <section className="bg-white py-20 lg:py-32">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-6">Mastery & <span className="text-brand-blue">Execution.</span></h2>
                        <p className="text-lg lg:text-xl text-zinc-600 mb-12 max-w-xl">
                            We deliver technical excellence across every layer of the digital ecosystem. No bloated features, no fragile systems—only high-performing architectures.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {capabilities.map((cap) => (
                                <div key={cap.title} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 transition-all hover:bg-white hover:border-brand-blue/20 hover:shadow-lg hover:shadow-zinc-200/40">
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-blue mb-4 shadow-sm">
                                        {cap.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-zinc-900 mb-2">{cap.title}</h4>
                                    <p className="text-sm leading-relaxed text-zinc-500">{cap.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card-base p-10 lg:p-16 bg-brand-blue flex flex-col items-center text-center text-white overflow-hidden relative">
                        {/* Subtle architectural background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                        <h3 className="text-3xl font-bold mb-6 relative z-10">Ready to Consult?</h3>
                        <p className="text-lg text-white/80 mb-10 leading-relaxed relative z-10">
                            Discuss your architectural vision with our engineering team and discover the ProviaCore difference.
                        </p>
                        <div className="flex flex-col gap-4 w-full max-w-xs relative z-10">
                            <Link
                                href="/contact"
                                className="bg-white text-brand-blue px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-zinc-50 transition-all active:scale-95"
                            >
                                Start a Conversation
                            </Link>
                            <Link
                                href="/portfolio"
                                className="text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                            >
                                Explore Expertise
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer_GS;
