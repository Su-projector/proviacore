const AboutCards = () => {
    const cards = [
        {
            title: "Our Mission",
            copy: "To engineer digital ecosystems that empower modern brands through clarity, security, and technical excellence.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        },
        {
            title: "Our Approach",
            copy: "System-level thinking applied to front-end fidelity and back-end resilience, ensuring scalable delivery at every layer.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        },
        {
            title: "Core Values",
            copy: "Craftsmanship over mass production. Clarity over complexity. Continuous architectural evolution.",
            icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
        },
    ];

    return (
        <section className="bg-zinc-50/50 py-20 lg:py-32">
            <div className="section-container">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="flex flex-col card-base p-10 bg-white transition-all hover:shadow-xl hover:shadow-zinc-200/50 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-brand-blue mb-8 transition-colors group-hover:bg-brand-blue group-hover:text-white">
                                {card.icon}
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-4">
                                {card.title}
                            </h2>
                            <p className="text-base lg:text-lg leading-relaxed text-zinc-600">
                                {card.copy}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutCards;
