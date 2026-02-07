"use client";

import Link from "next/link";

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery & Alignment",
            copy: "We begin with a strategic audit of your vision. Explore our portfolio to identify technical patterns and architectural styles that align with your long-term objectives.",
            cta: { text: "View Work", href: "/portfolio" },
            icon: (
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Architectural Mapping",
            copy: "Our engineers translate your requirements into a structural blueprint. We define the tech stack, security protocols, and scalability paths before a single line of code is written.",
            cta: { text: "Start a Conversation", href: "/contact" },
            icon: (
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Execution & Delivery",
            copy: "With a blueprint locked, we move into high-velocity execution. You receive regular builds, transparent telemetry, and a final product built for production-grade performance.",
            cta: { text: "Launch Your Project", href: "/contact" },
            icon: (
                <svg className="w-6 h-6 text-brand-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
    ];

    return (
        <section className="bg-zinc-50/50 py-20 lg:py-32">
            <div className="section-container">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-6">How We <span className="text-brand-blue">Build.</span></h2>
                    <p className="text-lg lg:text-xl text-zinc-600">A structured engagement model designed for clarity, velocity, and technical excellence.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {steps.map((step) => (
                        <div key={step.number} className="relative flex flex-col gap-8 card-base p-10 group bg-white">
                            <div className="flex items-center justify-between">
                                <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center transition-colors group-hover:bg-brand-blue/5">
                                    {step.icon}
                                </div>
                                <span className="text-4xl font-bold text-zinc-100 transition-colors group-hover:text-brand-blue/10 leading-none select-none">{step.number}</span>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{step.title}</h3>
                                <p className="text-base lg:text-lg leading-relaxed text-zinc-600 mb-8">
                                    {step.copy}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <Link
                                    href={step.cta.href}
                                    className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-blue px-6 text-sm font-bold text-white transition-all hover:bg-brand-blue-light hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-blue/10"
                                >
                                    {step.cta.text}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
