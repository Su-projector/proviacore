'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    };

    return (
        <ScrollReveal delay={index * 100}>
            <GlassCard 
                className="rounded-[20px] border border-[rgba(0,86,210,0.1)] hover:border-[rgba(0,86,210,0.3)] transition-all duration-300 cursor-pointer overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--brand-blue)]"
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
            >
                <div className="p-6 md:p-8 flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="font-display font-bold text-[1.125rem] text-[var(--brand-dark-text)] transition-colors duration-300">
                            {question}
                        </h3>
                        
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4">
                                        <p className="font-body text-[0.9375rem] md:text-[1rem] text-[var(--brand-gray)] leading-[1.6]">
                                            {answer}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="shrink-0 mt-1">
                        <svg 
                            className={`w-5 h-5 text-[var(--brand-blue)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </GlassCard>
        </ScrollReveal>
    );
};

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
        <section className="bg-[var(--brand-light)] py-[64px] md:py-[80px] lg:py-[96px]">
            <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
                <div className="max-w-3xl mx-auto">
                    <ScrollReveal className="text-center mb-12">
                        <h2 className="font-display font-bold text-[clamp(2rem,5vw,3rem)] tracking-[-0.02em] text-[var(--brand-dark-text)] mb-6">
                            Frequently Asked <span className="text-[var(--brand-coral)]">Questions</span>
                        </h2>
                    </ScrollReveal>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem 
                                key={index} 
                                question={faq.question} 
                                answer={faq.answer} 
                                index={index} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFAQ;
