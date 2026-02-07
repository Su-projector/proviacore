"use client";

const ContactFAQ = () => {
    const faqs = [
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on architectural complexity. Most strategic deployments are completed within 2–6 weeks from discovery to delivery.",
        },
        {
            question: "Do you offer ongoing support?",
            answer: "Yes. We provide structured technical maintenance and performance lifecycle packages to ensure long-term stability and growth.",
        },
        {
            question: "What is included in your pricing?",
            answer: "Our engagement covers strategy, design, technical execution, and deployment. Scopes are defined during discovery to ensure complete transparency.",
        },
        {
            question: "Can you work with my existing brand?",
            answer: "Absolutely. We engineer within existing brand systems or provide strategic advisory to evolve your current digital identity.",
        },
    ];

    return (
        <section className="bg-zinc-50 py-20 lg:py-32">
            <div className="section-container">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 mb-12 text-center lg:text-left">
                        Frequently Asked <span className="text-brand-blue">Questions</span>
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="card-base bg-white p-8 shadow-sm border-zinc-100 group hover:border-brand-blue/30 transition-colors">
                                <h3 className="text-lg font-bold text-zinc-900 mb-4 group-hover:text-brand-blue transition-colors">
                                    {faq.question}
                                </h3>
                                <p className="text-sm lg:text-base leading-relaxed text-zinc-500">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFAQ;
