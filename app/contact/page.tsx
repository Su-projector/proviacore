import ContactDetails from "@/components/sections/ContactDetails";
import BookACall from "@/components/sections/BookACall";
import ContactForm from "@/components/sections/ContactForm";
import ContactFAQ from "@/components/sections/ContactFAQ";

export const metadata = {
    title: "Connect with ProviaCore | Strategic Engineering Advisory",
    description: "Get in touch with ProviaCore to discuss your architectural objectives and technical trajectory. Book a free consultation or send a message to our advisory team.",
    keywords: ["Consultative engineering", "digital transformation advisory", "ProviaCore contact", "hire technical experts"],
    openGraph: {
        title: "Initialize Your Project — ProviaCore Contact Hub",
        description: "Talk to an engineering team focused on architectural clarity, execution, and long-term resilient delivery.",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-50 pt-20 pb-10 md:pt-28 md:pb-20">
            <div className="section-container">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
                    {/* Left Column: 40-45% width */}
                    <div className="w-full md:w-[42%] flex flex-col gap-6 md:gap-8">
                        {/* Get In Touch Heading + Intro */}
                        <div className="flex flex-col text-left">
                            <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-blue)]">Get In Touch</span>
                            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl mt-2 mb-4 leading-tight">
                                Reach through the <span className="text-[var(--brand-blue)]">channel</span> that works best for you.
                            </h1>
                            <p className="text-sm lg:text-base leading-relaxed text-zinc-600">
                                Share your goals, scope, or timeline. If you already have a brief, send it over and we will take it from there.
                            </p>
                        </div>
                        
                        {/* Contact Details Trio */}
                        <ContactDetails />
                        
                        {/* Book a Call block */}
                        <BookACall />
                    </div>

                    {/* Right Column: 55-60% width */}
                    <div className="w-full md:w-[58%] mt-8 md:mt-0">
                        {/* Form and form intro are contained within ContactForm */}
                        <ContactForm />
                    </div>
                </div>
            </div>
            {/* FAQ section immediately follows */}
            <ContactFAQ />
        </div>
    );
}
