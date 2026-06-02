import Link from "next/link";
import Image from "next/image";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";

const Footer = () => {
    return (
        <footer className="w-full bg-[var(--brand-navy)] text-[var(--brand-white)]">
            
            {/* Top Section - Full Bleed */}
            <CursorSpotlight className="relative w-[100vw] left-[50%] -translate-x-[50%] py-[80px] md:py-[128px] overflow-hidden bg-[var(--brand-navy)]">
                {/* Grid Pattern Overlay */}
                <div 
                    className="absolute inset-0 z-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
                    }}
                />
                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 text-center flex flex-col items-center">
                    <h2 
                        className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] mb-6 max-w-4xl"
                        style={{ textShadow: "0 0 80px rgba(0, 86, 210, 0.3)" }}
                    >
                        Let&apos;s Build Something That Lasts.
                    </h2>
                    <p className="font-body text-[1.125rem] text-[rgba(255,255,255,0.7)] max-w-2xl mb-10">
                        Ready to engineer your next digital ecosystem? We are here to listen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/get-started">
                            <button className="bg-[var(--brand-blue)] text-white rounded-[var(--radius-sm)] px-8 py-3.5 font-body font-semibold text-[0.875rem] tracking-[0.02em] hover:bg-[#004bb8] transition-all hover:-translate-y-[2px] shadow-[var(--shadow-md)]">
                                Start a Project
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-transparent text-white border-[1.5px] border-[rgba(255,255,255,0.3)] rounded-[var(--radius-sm)] px-8 py-3.5 font-body font-semibold text-[0.875rem] tracking-[0.02em] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.5)] transition-all">
                                Contact Advisory
                            </button>
                        </Link>
                    </div>
                </div>
            </CursorSpotlight>

            {/* Middle Section */}
            <div className="bg-[var(--brand-light)] py-[64px] text-[var(--brand-dark-text)]">
                <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        
                        {/* Column 1: Brand */}
                        <div>
                            <Link href="/" className="flex items-center gap-2.5 group w-fit mb-6">
                                <div className="relative w-8 h-8 flex items-center justify-center">
                                    <Image src="/logo.png" alt="ProviaCore Icon" fill className="object-contain" />
                                </div>
                                <span className="text-xl font-bold text-[var(--brand-blue)] transition-colors duration-300 group-hover:text-[var(--brand-dark-text)]">ProviaCore</span>
                            </Link>
                            <p className="font-body text-[1rem] leading-[1.7] text-[var(--brand-gray)]">
                                ProviaCore — Building Solutions That Drive Lasting Productivity
                            </p>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h3 className="font-mono font-medium text-[0.75rem] uppercase tracking-[0.12em] mb-6 text-[var(--brand-dark-text)]">Quick Links</h3>
                            <ul className="space-y-4">
                                {["Services", "Pricing", "Who We Help", "Testimonials", "About", "Contact"].map((item) => {
                                    const isPage = item === "About" || item === "Contact";
                                    const href = isPage ? `/${item.toLowerCase().replace(/ /g, '-')}` : `/#${item.toLowerCase().replace(/ /g, '-')}`;
                                    return (
                                        <li key={item}>
                                            <Link href={href} className="font-body text-[1rem] text-[var(--brand-gray)] hover:text-[var(--brand-blue)] transition-colors inline-block relative group">
                                                {item}
                                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--brand-blue)] transition-all duration-300 group-hover:w-full"></span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Column 3: Sub-Brands */}
                        <div>
                            <h3 className="font-mono font-medium text-[0.75rem] uppercase tracking-[0.12em] mb-6 text-[var(--brand-dark-text)]">Sub-Brands</h3>
                            <ul className="space-y-4">
                                <li><span className="font-body text-[1rem] text-[var(--brand-gray)]">Project Team</span></li>
                                <li><span className="font-body text-[1rem] text-[var(--brand-gray)]">Mastery Coaching</span></li>
                                <li><span className="font-body text-[1rem] text-[var(--brand-gray)]">Brand / Design Advisory</span></li>
                            </ul>
                        </div>

                        {/* Column 4: Newsletter */}
                        <div>
                            <h3 className="font-mono font-medium text-[0.75rem] uppercase tracking-[0.12em] mb-6 text-[var(--brand-dark-text)]">Stay Updated</h3>
                            <form className="flex items-end border-b border-[rgba(0,86,210,0.3)] pb-2 relative group focus-within:border-[var(--brand-blue)] transition-colors">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full bg-transparent border-none outline-none font-body text-[1rem] text-[var(--brand-dark-text)] placeholder-[var(--brand-gray)]"
                                    required
                                />
                                <button type="submit" className="w-[32px] h-[32px] rounded-full bg-[var(--brand-coral)] flex items-center justify-center text-white hover:opacity-90 transition-opacity ml-2 shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[var(--brand-navy)] py-[24px] border-t border-[rgba(255,255,255,0.1)]">
                <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.5)]">
                        &copy; {new Date().getFullYear()} PROVIACORE SYSTEMS. BUILT FOR RESILIENT DELIVERY.
                    </p>
                    <div className="flex gap-6">
                        <a href="https://linkedin.com/company/proviacore" className="text-white opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="https://twitter.com/proviacore" className="text-white opacity-60 hover:opacity-100 transition-opacity" aria-label="Twitter">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/proviacore" className="text-white opacity-60 hover:opacity-100 transition-opacity" aria-label="GitHub">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
