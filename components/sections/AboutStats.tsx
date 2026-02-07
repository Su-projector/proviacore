const AboutStats = () => {
    const stats = [
        { label: "Deployed Architectures", value: "24+" },
        { label: "Technical Tenure", value: "5 Yrs" },
        { label: "Strategic Alignment", value: "100%" },
    ];

    return (
        <section className="bg-white py-20 lg:py-32">
            <div className="section-container">
                <div className="card-base p-12 lg:p-20 bg-zinc-50 border-zinc-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-zinc-400 text-sm font-bold uppercase tracking-[0.2em] mb-12 text-center lg:text-left">System Telemetry</h2>
                        <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-3">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col items-center lg:items-start">
                                    <p className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-brand-blue mb-4">
                                        {stat.value}
                                    </p>
                                    <p className="text-base font-bold text-zinc-500 uppercase tracking-wide">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStats;
