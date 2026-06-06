"use client";

import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [newsletter, setNewsletter] = useState(false);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulating form submission
        setTimeout(() => {
            setStatus("success");
            setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
            setNewsletter(false);
        }, 1500);
    };

    return (
        <div className="w-full flex flex-col">
            <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-blue)]">Send Us a Message</span>
                <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 mt-2 mb-3">
                    We usually reply with the next <span className="text-brand-blue">steps</span>, scope questions, and timing.
                </h2>
            </div>

            <div className="card-base bg-white p-6 md:p-8 shadow-sm border-zinc-100 w-full">
                {status === "success" ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h3 className="text-xl font-extrabold text-zinc-900">Message Delivered</h3>
                        <p className="mt-4 text-zinc-600">Our engineering advisory team will review your inquiry and respond shortly.</p>
                        <button onClick={() => setStatus("idle")} className="mt-8 text-sm font-bold text-brand-blue hover:text-brand-blue-light transition-colors uppercase tracking-widest">Send Another Message</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name and Email side-by-side on desktop/tablet, stacked on mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name*</label>
                                <input type="text" id="fullName" required placeholder="Clinton John" value={formData.fullName} onChange={handleChange} className="block w-full rounded-xl border-zinc-200 bg-zinc-50/50 px-4 py-3 text-zinc-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue transition-all" />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address*</label>
                                <input type="email" id="email" required placeholder="email@example.com" value={formData.email} onChange={handleChange} className="block w-full rounded-xl border-zinc-200 bg-zinc-50/50 px-4 py-3 text-zinc-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue transition-all" />
                            </div>
                        </div>

                        {/* Phone and Subject side-by-side on desktop/tablet, stacked on mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-zinc-400">Phone Number</label>
                                <input type="tel" id="phone" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} className="block w-full rounded-xl border-zinc-200 bg-zinc-50/50 px-4 py-3 text-zinc-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue transition-all" />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-zinc-400">Subject*</label>
                                <input type="text" id="subject" required placeholder="Project Inquiry" value={formData.subject} onChange={handleChange} className="block w-full rounded-xl border-zinc-200 bg-zinc-50/50 px-4 py-3 text-zinc-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue transition-all" />
                            </div>
                        </div>

                        {/* Message field - Full width */}
                        <div className="space-y-1.5">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-400">Message*</label>
                            <textarea id="message" required rows={4} placeholder="Tell us about your project/goals..." value={formData.message} onChange={handleChange} className="block w-full rounded-xl border-zinc-200 bg-zinc-50/50 px-4 py-3 text-zinc-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue transition-all resize-none" />
                        </div>

                        {/* Newsletter Opt-in */}
                        <div className="flex items-start gap-3 p-4 bg-zinc-50 border border-zinc-100 rounded-xl mt-2 select-none">
                            <input 
                                type="checkbox" 
                                id="newsletter" 
                                checked={newsletter} 
                                onChange={(e) => setNewsletter(e.target.checked)}
                                className="mt-1 h-4 w-4 rounded border-zinc-300 text-brand-blue focus:ring-brand-blue cursor-pointer"
                            />
                            <label htmlFor="newsletter" className="text-xs text-zinc-500 leading-normal cursor-pointer">
                                I want occasional newsletters and updates about new services, launches, and useful web growth tips.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" disabled={status === "submitting"} className="inline-flex w-full h-12 items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 text-sm font-bold text-white shadow-lg shadow-brand-blue/10 hover:bg-brand-blue-light transition-all disabled:opacity-50">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                            {status === "submitting" ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
