import ContactHero from "@/components/sections/ContactHero";
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
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ContactHero />
            <ContactDetails />
            <BookACall />
            <ContactForm />
            <ContactFAQ />
        </div>
    );
}
