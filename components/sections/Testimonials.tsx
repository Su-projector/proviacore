"use client";

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Working with this team was a game-changer for our digital transformation. Our new website is fast, intuitive, and improved engagement by 250%.",
            author: "Esther Nwosu",
            role: "Product Manager, FinFlow",
            initials: "EN",
        },
        {
            quote: "The attention to detail and communication throughout the project were excellent. We finally have a platform that reflects our brand and supports growth.",
            author: "Kelechi Adeyemi",
            role: "Operations Lead, KelMarket",
            initials: "KA",
        },
        {
            quote: "From the initial strategy sessions to launch, everything was seamless. Our learning portal is now easy to use and has helped us reach more students.",
            author: "Tomiwa Daramola",
            role: "Founder, LearnSmart Africa",
            initials: "TD",
        },
    ];

    const StarIcon = () => (
        <svg className="w-5 h-5 text-brand-coral fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );

    return (
        <section id="testimonials" className="bg-gray-50/50 py-20 lg:py-32">
            <div className="section-container">
                <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Client <span className="text-brand-blue">Voices.</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600">
                        Trust is built through consistent performance. Here is what leading teams say about our execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="card-base p-10 flex flex-col justify-between">
                            <div>
                                <div className="flex gap-1 mb-6">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                                <blockquote className="text-gray-700 font-medium leading-relaxed mb-10 text-lg">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center font-bold text-brand-blue shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 leading-none mb-1">{t.author}</p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
