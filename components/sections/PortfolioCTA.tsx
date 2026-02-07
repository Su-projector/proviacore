"use client";

import Link from "next/link";

const PortfolioCTA = () => {
    return (
        <section className="bg-brand-blue py-20 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue-light z-0" />

            <div className="section-container relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-8">
                        Ready to Build Something Meaningful?
                    </h2>
                    <p className="text-lg lg:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Explore our portfolio to see the kinds of solutions we’ve designed and delivered. Use any project as a reference; build something similar with us, or take a different path entirely. We design and engineer systems shaped around your goals, not templates.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/get-started"
                            className="bg-white text-brand-blue px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-zinc-50 transition-all hover:scale-105"
                        >
                            Start a Project
                        </Link>
                        <Link
                            href="/portfolio"
                            className="text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all font-sans"
                        >
                            View Portfolio & Expertise
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioCTA;
