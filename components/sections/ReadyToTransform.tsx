"use client";

import Link from "next/link";

const ReadyToTransform = () => {
    return (
        <section className="bg-zinc-900 py-20 lg:py-32 relative overflow-hidden">
            {/* Subtle architectural background element */}
            <div className="absolute top-0 right-0 w-full h-full bg-brand-blue/5 -skew-x-12 translate-x-1/2 z-0" />

            <div className="section-container relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-8">
                        Ready to Build Your <span className="text-brand-blue">Legacy?</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                        Join the strategic partners who have engineered high-impact digital products with ProviaCore. Let's deliver excellence together.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-brand-blue-light transition-all hover:scale-105 active:scale-95"
                        >
                            Book an enquiry appointment
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all"
                        >
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadyToTransform;
