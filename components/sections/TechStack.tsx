"use client";

const TechStack = () => {
    const stack = [
        {
            category: "Frontend",
            tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
            category: "Backend & Infra",
            tools: ["Node.js", "AWS", "Vercel", "PostgreSQL"],
        },
        {
            category: "Strategic Delivery",
            tools: ["CI/CD Pipelines", "Git", "System Design", "Agile"],
        },
    ];

    return (
        <section className="bg-white py-20 lg:py-32">
            <div className="section-container">
                <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        The <span className="text-brand-blue">Core</span> Stack.
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600">
                        We leverage industry-leading technologies to build systems that are fast, secure, and ready to scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stack.map((item, index) => (
                        <div key={index} className="card-base p-10 flex flex-col items-center text-center">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
                                {item.category}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {item.tools.map((tool, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="px-5 py-2 rounded-full border border-gray-100 bg-gray-50/50 text-gray-700 text-sm font-semibold hover:border-brand-blue/20 hover:bg-white transition-all cursor-default"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
