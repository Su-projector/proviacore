"use client";

const PortfolioTech = () => {
    const technologies = [
        "React", "TypeScript", "Node.js", "Python", "AWS", "Google Cloud",
        "PostgreSQL", "Docker", "Next.js", "GraphQL", "Tailwind CSS", "Prisma"
    ];

    return (
        <section className="bg-white py-20 lg:py-32">
            <div className="section-container">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        Technologies We <span className="text-brand-blue">Master.</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-zinc-600">
                        We leverage cutting-edge technical architectures to deliver high-performance, resilient, and scalable digital solutions.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    {technologies.map((tech) => (
                        <div
                            key={tech}
                            className="bg-white border border-zinc-200 px-8 py-5 rounded-2xl text-center shadow-sm transition-all hover:border-brand-blue hover:translate-y-[-2px]"
                        >
                            <span className="text-sm font-bold tracking-wide text-zinc-900">
                                {tech}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioTech;
