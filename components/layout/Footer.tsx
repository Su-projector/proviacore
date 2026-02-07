import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t border-zinc-200 bg-zinc-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
                    {/* Brand Column */}
                    <div className="md:col-span-12 lg:col-span-5">
                        <Link href="/" className="text-xl font-bold text-brand-blue">
                            ProviaCore
                        </Link>
                        <p className="mt-6 text-base font-semibold text-zinc-900">
                            ProviaCore — Building Solutions That Drive Lasting Productivity
                        </p>
                        <p className="mt-4 text-base text-zinc-600 max-w-sm">
                            We are known for building smart, user-centered, and business-aligned digital products designed to help tomorrow’s businesses succeed.
                            Let’s connect and create something amazing together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-4 lg:col-span-2">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">Quick Links</h3>
                        <ul className="mt-6 space-y-4">
                            {["Services", "Pricing", "Who We Help", "Testimonials", "About", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "About" || item === "Contact" ? `/${item.toLowerCase().replace(/ /g, '-')}` : `/#${item.toLowerCase().replace(/ /g, '-')}`}
                                        className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sub-Brands */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">Sub-Brands</h3>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <span className="text-sm text-zinc-500">Project Team</span>
                            </li>
                            <li>
                                <span className="text-sm text-zinc-500">Mastery Coaching</span>
                            </li>
                            <li>
                                <span className="text-sm text-zinc-500">Brand / Design Advisory</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
                        &copy; {new Date().getFullYear()} ProviaCore Systems. Built for Resilient Delivery.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="mailto:proviacore@gmail.com"
                            className="text-zinc-400 hover:text-brand-blue transition-colors"
                            title="Email Us"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </a>
                        <a
                            href="tel:+2348151762900"
                            className="text-zinc-400 hover:text-brand-coral transition-colors"
                            title="Call Us"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </a>
                        <a
                            href="https://wa.me/2348151762900"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-green-600 transition-colors"
                            title="WhatsApp"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.3.298-.499.1-.197.05-.37-.025-.519-.075-.149-.67-1.613-.918-2.214-.242-.585-.487-.506-.67-.506-.174-.003-.374-.006-.574-.006-.2 0-.525.075-.798.374-.273.3-.1.734-.1 1.838 0 1.103.805 2.169.917 2.317.112.147 1.583 2.417 3.832 3.391.535.231.954.369 1.28.473.537.171 1.026.147 1.412.089.431-.064 1.32-.54 1.506-1.061.187-.521.187-.966.131-1.061-.056-.094-.207-.15-.504-.298zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.517 5.864L0 24l6.31-1.657C7.94 23.368 9.9 24 12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 22.064c-1.91 0-3.72-.513-5.286-1.486l-.379-.236-3.839.99 1.026-3.766-.264-.42c-.939-1.492-1.434-3.235-1.434-5.045 0-5.358 4.361-9.721 9.721-9.721 5.359 0 9.72 4.363 9.72 9.721 0 5.361-4.361 9.721-9.721 9.721z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
