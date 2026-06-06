'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
        }
    };

    return (
        <div className="w-full">
            <button
                className="w-full p-5 flex items-center justify-between gap-4 text-left transition-colors duration-200 hover:bg-zinc-50/50 focus-visible:outline-none focus-visible:bg-zinc-50"
                onClick={onToggle}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                aria-expanded={isOpen}
            >
                <span className="font-display font-bold text-base text-[var(--brand-dark-text)] pr-2">
                    {question}
                </span>
                
                <div className="shrink-0">
                    <svg 
                        className={`w-4 h-4 text-[var(--brand-blue)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>
            
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 pt-1 border-t border-zinc-50">
                            <p className="font-body text-sm text-[var(--brand-gray)] leading-[1.6]">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ContactFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
        <section className="bg-[var(--brand-light)] py-10 md:py-16">
            <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
                <div className="max-w-3xl mx-auto">
                    <ScrollReveal className="text-center mb-8">
                        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--brand-dark-text)]">
                            Frequently Asked <span className="text-[var(--brand-coral)]">Questions</span>
                        </h2>
                    </ScrollReveal>

                    {/* Accordion container with minimal spacing in a tight card */}
                    <ScrollReveal>
                        <div className="card-base bg-white shadow-sm border-[rgba(0,86,210,0.1)] divide-y divide-zinc-100 overflow-hidden">
                            {faqs.map((faq, index) => (
                                <FAQItem 
                                    key={index} 
                                    question={faq.question} 
                                    answer={faq.answer} 
                                    isOpen={activeIndex === index}
                                    onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default ContactFAQ;
