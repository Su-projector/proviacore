"use client";

const WhoWeHelp = () => {
    const categories = [
        {
            title: "Small Businesses",
            description: "From startups to established companies, we build strong, reliable online presences that support day-to-day operations.",
            icon: (
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            title: "Entrepreneurs",
            description: "We work with solo founders and creators to present products, services, or portfolios clearly and professionally.",
            icon: (
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
        },
        {
            title: "Organizations",
            description: "Non-profits and educational institutions trust us to deliver solutions aligned with their mission and long-term goals.",
            icon: (
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="who-we-help" className="bg-white py-20 lg:py-32">
            <div className="section-container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Who We <span className="text-brand-coral">Empower.</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600">
                        Tailored digital expertise for those who value precision, clarity, and sustainable growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="card-base p-10 flex flex-col items-center text-center hover:border-brand-blue/20 transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center mb-6">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {category.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeHelp;
