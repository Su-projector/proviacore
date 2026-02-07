"use client";

import Link from "next/link";

const Pricing = () => {
    const tiers = [
        {
            name: "Starter",
            description: "Ideal for small projects and individual entrepreneurs.",
            price: "Custom",
            features: [
                "Responsive Website Design",
                "Up to 5 Pages",
                "Basic SEO Setup",
                "Contact Form Integration",
                "1 Month Support",
            ],
            cta: "Get Started",
            href: "/get-started",
            featured: false,
        },
        {
            name: "Professional",
            description: "Best for growing businesses needing custom solutions.",
            price: "Custom",
            subtitle: "Most Popular",
            features: [
                "Everything in Starter",
                "Up to 15 Pages",
                "Advanced SEO & Analytics",
                "E-commerce Integration",
                "3 Months Support",
                "Priority Email Support",
            ],
            cta: "Get Started",
            href: "/get-started",
            featured: true,
        },
        {
            name: "Enterprise",
            description: "Scalable solutions for complex organizational needs.",
            price: "Custom",
            features: [
                "Everything in Professional",
                "Unlimited Pages",
                "Custom Functionality",
                "Advanced Security Audits",
                "6 Months Support",
                "Dedicated Account Lead",
            ],
            cta: "Contact Us",
            href: "/contact",
            featured: false,
        },
    ];

    return (
        <section id="pricing" className="bg-white py-20 lg:py-32">
            <div className="section-container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Transparent <span className="text-brand-blue">Solutions.</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600">
                        Scalable delivery models built to support your growth at every stage of the digital journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`card-base flex flex-col p-8 lg:p-10 relative ${tier.featured ? "ring-2 ring-brand-blue shadow-xl scale-105 z-10" : ""
                                }`}
                        >
                            {tier.featured && (
                                <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-brand-blue to-brand-coral text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {tier.subtitle}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                    {tier.description}
                                </p>
                                <div className="text-3xl font-extrabold text-brand-blue">
                                    {tier.price}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {tier.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={tier.href}
                                className={tier.featured ? "btn-gradient w-full" : "btn-primary bg-gray-50 text-brand-blue border border-gray-200 hover:bg-gray-100 w-full"}
                            >
                                {tier.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
