import Link from "next/link";

const AboutSubBrands = () => {
    return (
        <section className="bg-white py-12 border-t border-zinc-100">
            <div className="section-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
                    <p className="text-sm font-bold uppercase tracking-wider text-zinc-400">Ecosystem Partners</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <Link href="/contact" className="text-lg font-bold text-zinc-900 hover:text-brand-blue transition-colors">
                            Mastery Coaching
                        </Link>
                        <Link href="/contact" className="text-lg font-bold text-zinc-900 hover:text-brand-blue transition-colors">
                            Brand Advisory
                        </Link>
                        <Link href="/contact" className="text-lg font-bold text-zinc-900 hover:text-brand-blue transition-colors">
                            Project Team
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSubBrands;
