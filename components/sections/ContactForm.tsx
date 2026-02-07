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
        }, 1500);
    };

    return (
        <section className="bg-zinc-50 pb-20 lg:pb-32">
            <div className="section-container">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 mb-8 px-2">
                        Send us a <span className="text-brand-blue">Message</span>
                    </h2>

                    <div className="card-base bg-white p-8 lg:p-12 shadow-sm border-zinc-100">
                        {status === "success" ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-xl font-extrabold text-zinc-900">Message Delivered</h3>
                                <p className="mt-4 text-zinc-600">Our engineering advisory team will review your inquiry and respond shortly.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-8 text-sm font-bold text-brand-blue hover:text-brand-blue-light transition-colors uppercase tracking-widest"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                        Full Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        required
                                        placeholder="John Doe"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="block w-full rounded-xl border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-zinc-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                        Email Address*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-xl border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-zinc-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="block w-full rounded-xl border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-zinc-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                        Subject*
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        required
                                        placeholder="Project Inquiry"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="block w-full rounded-xl border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-zinc-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                        Message*
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        placeholder="Tell us about your project/goals..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block w-full rounded-xl border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-zinc-900 shadow-sm focus:border-brand-blue focus:ring-brand-blue transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="inline-flex w-full h-14 items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 text-base font-bold text-white shadow-xl shadow-brand-blue/20 hover:bg-brand-blue-light transition-all disabled:opacity-50"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
