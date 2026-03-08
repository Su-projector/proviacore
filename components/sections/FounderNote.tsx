import Image from "next/image";
import Link from "next/link";

const FounderNote = () => {
    return (
        <section className="bg-white">
            <div className="section-container">
                <div className="card-base p-8 md:p-12 lg:p-16 bg-brand-blue/5 border-none shadow-sm relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
                        {/* Image Container */}
                        <div className="w-full lg:w-1/3 shrink-0 flex justify-center drop-shadow-xl">
                            <div className="relative aspect-square w-full max-w-sm mx-auto [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)] bg-white">
                                <Image
                                    src="/abdusobur.png"
                                    alt="Abdusobur Sulaimon - Founder & CEO"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="w-full lg:w-2/3 flex flex-col justify-center">
                            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-8">
                                A Note from the Founder
                            </h2>

                            <div className="space-y-6 text-lg text-zinc-700 leading-relaxed font-serif">
                                <p>
                                    "At ProviaCore, we believe that great software isn't just about writing code—it's about understanding the business imperative behind it. I founded ProviaCore to bridge the gap between strategic vision and technical execution.
                                </p>
                                <p>
                                    With a background rooted in complex system architecture, UX engineering, and technical project management, my goal has always been simple: build digital products that drive lasting productivity. We don't just build websites; we engineer scalable, resilient platforms that solve real operational bottlenecks.
                                </p>
                                <p>
                                    Whether you're a startup looking to establish a dominant online presence or an enterprise seeking architectural clarity, my team and I are committed to delivering excellence at every level of the stack. Let's build something enduring."
                                </p>
                            </div>

                            <div className="mt-10 pt-8 border-t border-brand-blue/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div>
                                    <a 
                                        href="https://www.google.com/search?q=Who's+Sulaimon+Abdusobur"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center"
                                    >
                                        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-brand-blue transition-colors">
                                            Abdusobur Sulaimon
                                        </h3>
                                    </a>
                                    <p className="text-brand-blue font-medium mt-1">Founder & Lead Project Manager</p>

                                    <a
                                        href="https://www.linkedin.com/in/abdusobur-sulaimon" // Placeholder, can be updated later
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center mt-3 text-sm font-semibold text-zinc-500 hover:text-brand-blue transition-colors"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                        Connect on LinkedIn
                                    </a>
                                </div>

                                <Link
                                    href="/contact"
                                    className="btn-primary whitespace-nowrap shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto"
                                >
                                    Book a Strategy Call
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderNote;
