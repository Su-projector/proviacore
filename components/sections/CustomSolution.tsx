"use client";

import Link from "next/link";

const CustomSolution = () => {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32">
            {/* Background with accent highlight */}
            <div className="absolute inset-0 bg-brand-blue" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-coral opacity-20" />

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-8">
                        Need a <span className="text-brand-coral italic">unique</span> digital strategy?
                    </h2>
                    <p className="text-lg lg:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
                        Every business is different. Let's design a custom roadmap that fits your specific goals, scope, and vision for the future.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg shadow-black/10"
                        >
                            Start Your Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomSolution;
