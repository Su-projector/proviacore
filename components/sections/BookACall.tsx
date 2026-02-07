"use client";

import Link from "next/link";

const BookACall = () => {
    return (
        <section className="bg-zinc-50 pb-16">
            <div className="section-container">
                <div className="max-w-xl mx-auto card-base bg-white p-8 lg:p-12 shadow-sm border-zinc-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <h2 className="text-xl font-extrabold text-zinc-900">Book a Call</h2>
                    </div>

                    <p className="text-sm lg:text-base leading-relaxed text-zinc-600 mb-8">
                        Initialize your project with a free 15-minute consultation. A focused, no-pressure conversation to understand your objectives and determine the best architectural path forward.
                    </p>

                    <div className="space-y-6">
                        <Link
                            href="https://calendly.com/proviacore"
                            className="inline-flex w-full h-14 items-center justify-center rounded-xl bg-brand-blue px-8 text-sm lg:text-base font-bold text-white shadow-xl shadow-brand-blue/20 hover:bg-brand-blue-light transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Book a Free 15-Minute Consultation
                        </Link>

                        <p className="text-xs text-center text-zinc-400">
                            Prefer email? Reach out at <a href="mailto:proviacore@gmail.com" className="text-brand-blue hover:text-brand-blue-light font-bold transition-colors">proviacore@gmail.com</a> with your availability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookACall;
