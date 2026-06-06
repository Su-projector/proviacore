"use client";

import Link from "next/link";

const BookACall = () => {
    return (
        <div className="w-full card-base bg-white p-6 md:p-8 shadow-sm border-zinc-100 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h2 className="text-lg font-extrabold text-zinc-900">Book a Call</h2>
            </div>

            <p className="text-sm leading-relaxed text-zinc-600 mb-6">
                Initialize your project with a free 15-minute consultation. A focused, no-pressure conversation to understand your objectives and determine the best architectural path forward.
            </p>

            <div className="w-full space-y-4">
                <Link
                    href="https://calendly.com/proviacore"
                    className="inline-flex w-full h-12 items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 text-sm font-bold text-white shadow-lg shadow-brand-blue/10 hover:bg-brand-blue-light transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Book a Free 15-Minute Consultation
                </Link>

                <p className="text-xs text-center w-full text-zinc-400">
                    Prefer email? Reach out at <a href="mailto:proviacore@gmail.com" className="text-brand-blue hover:text-brand-blue-light font-bold transition-colors">proviacore@gmail.com</a> with your availability.
                </p>
            </div>
        </div>
    );
};

export default BookACall;
