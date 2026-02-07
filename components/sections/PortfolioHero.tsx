"use client";

const PortfolioHero = () => {
    const metrics = [
        {
            label: "Projects Delivered", value: "50+", icon: (
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            label: "Strategic Partners", value: "30+", icon: (
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            label: "Success Rate", value: "100%", icon: (
                <svg className="w-6 h-6 text-brand-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4L4 8l8 4 8-4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
                </svg>
            )
        },
    ];

    return (
        <section className="relative bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
            {/* Subtle architectural background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 -skew-x-12 translate-x-1/2 z-0" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                <div className="max-w-4xl mx-auto sm:mx-0">
                    <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl leading-tight">
                        Crafted with <span className="gradient-text">Precision & Passion.</span>
                    </h1>
                    <p className="mt-6 text-lg lg:text-xl leading-relaxed text-zinc-600 max-w-3xl mx-auto sm:mx-0">
                        Explore our dual-purpose showcase: a curated archive of successfully delivered projects and a comprehensive suite of digital solutions we engineer for strategic growth.
                    </p>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {metrics.map((metric) => (
                            <div key={metric.label} className="card-base p-8 text-center flex flex-col items-center justify-center">
                                <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center mb-4">
                                    {metric.icon}
                                </div>
                                <span className="text-3xl font-bold text-zinc-900 mb-2">
                                    {metric.value}
                                </span>
                                <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                                    {metric.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioHero;
