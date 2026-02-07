"use client";

import Link from "next/link";

const AboutHero = () => {
    return (
        <section className="relative bg-zinc-900 py-24 sm:py-32 overflow-hidden">
            {/* Architectural Texture/Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(#1A66B2_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-transparent to-brand-blue/30" />
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-4xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-tight">
                        Engineered for <span className="text-brand-blue">Scale.</span><br />
                        Built for <span className="text-brand-coral">Delivery.</span>
                    </h1>
                    <p className="mt-8 text-lg lg:text-xl leading-relaxed text-zinc-400 max-w-3xl">
                        ProviaCore is a systems-driven digital development platform. We bridge the gap between architectural vision and production-ready execution, delivering resilient products that drive measurable business outcomes through high-performance engineering.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/get-started"
                            className="inline-flex h-14 items-center justify-center rounded-xl bg-brand-blue px-10 text-lg font-bold text-white shadow-xl shadow-brand-blue/20 hover:bg-brand-blue-light transition-all hover:scale-105 active:scale-95"
                        >
                            Start a Project
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex h-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-10 text-lg font-bold text-white backdrop-blur-sm hover:bg-white/10 transition-all"
                        >
                            Contact Advisory
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
