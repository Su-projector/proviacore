'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentHash, setCurrentHash] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };
        window.addEventListener("hashchange", handleHashChange);
        window.addEventListener("popstate", handleHashChange);
        handleHashChange();
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
            window.removeEventListener("popstate", handleHashChange);
        };
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Services", href: "/#services" },
        { name: "Pricing", href: "/#pricing" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const closeMenu = () => setIsOpen(false);

    const darkHeroPages = ["/", "/about"];
    const isDarkBackground = !scrolled && darkHeroPages.includes(pathname);

    return (
        <header 
            className={`fixed top-0 z-50 w-full transition-all duration-400 ease-(--ease-default) ${
                scrolled ? "h-[64px]" : "h-[80px]"
            }`}
        >
            <div 
                className={`absolute inset-0 transition-all duration-400 ease-(--ease-default) -z-10 ${
                    scrolled 
                        ? "bg-[rgba(248,249,251,0.85)] backdrop-blur-lg border-b border-[rgba(0,86,210,0.1)]" 
                        : "bg-transparent border-b border-b-transparent"
                }`}
            />
            <div className="max-w-[1440px] mx-auto flex h-full items-center justify-between px-5 md:px-8 lg:px-12 relative">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2.5 group" onClick={closeMenu}>
                        <div className="relative w-8 h-8 transition-transform duration-300 ease-out group-hover:scale-110 flex items-center justify-center">
                            <Image src="/logo.png" alt="ProviaCore Icon" fill className="object-contain" />
                        </div>
                        <span className={`text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-(--brand-blue) ${isDarkBackground ? 'text-white' : 'text-(--brand-dark-text)'}`}>
                            ProviaCore
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const hashIndex = link.href.indexOf('#');
                        const linkPathname = hashIndex !== -1 ? link.href.slice(0, hashIndex) : link.href;
                        const linkHash = hashIndex !== -1 ? link.href.slice(hashIndex) : "";

                        let isActive = false;
                        if (linkPathname === "/" && pathname === "/") {
                            isActive = currentHash === linkHash;
                        } else if (linkPathname !== "/") {
                            isActive = pathname === linkPathname;
                        }

                        return (
                            <div key={link.name} className="relative group flex flex-col items-center">
                                <Link
                                    href={link.href}
                                    onClick={() => {
                                        setCurrentHash(linkHash);
                                    }}
                                    className={`text-sm font-body font-medium tracking-[0.02em] transition-colors pb-1 ${
                                        isDarkBackground ? 'text-[rgba(255,255,255,0.8)] hover:text-white' : 'text-(--brand-gray) hover:text-(--brand-dark-text)'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                                {/* Underline draw on hover */}
                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-(--brand-blue) transition-all duration-300 ease-(--ease-default) group-hover:w-full" />
                                {/* Active Dot */}
                                {isActive && (
                                    <div className="absolute -bottom-2 w-[4px] h-[4px] rounded-full bg-(--brand-coral)" />
                                )}
                            </div>
                        );
                    })}
                </nav>

                <div className="flex items-center space-x-4">
                    <div className="hidden sm:block">
                        <MagneticButton variant={isDarkBackground ? "ghost" : "primary"} href="/get-started">
                            Start a Project
                        </MagneticButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`flex flex-col justify-center items-center w-8 h-8 lg:hidden z-70 ${isOpen || !isDarkBackground ? 'text-(--brand-dark-text)' : 'text-white'}`}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={`bg-current block transition-all duration-300 ease-out h-[2px] w-[24px] rounded-sm ${isOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1'}`} />
                        <span className={`bg-current block transition-all duration-300 ease-out h-[2px] w-[24px] rounded-sm my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`bg-current block transition-all duration-300 ease-out h-[2px] w-[24px] rounded-sm ${isOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1'}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="fixed inset-0 z-60 bg-[rgba(248,249,251,0.98)] backdrop-blur-[20px] flex flex-col lg:hidden"
                    >
                        <div className="flex h-[80px] items-center justify-between px-5 md:px-8">
                            {/* Logo inside menu for overlay */}
                            <Link href="/" className="flex items-center gap-2.5 group" onClick={closeMenu}>
                                <div className="relative w-8 h-8 flex items-center justify-center">
                                    <Image src="/logo.png" alt="ProviaCore Icon" fill className="object-contain" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-(--brand-dark-text)">ProviaCore</span>
                            </Link>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-start">
                            <nav className="flex flex-col space-y-6 text-center">
                                {navLinks.map((link, i) => {
                                    const hashIndex = link.href.indexOf('#');
                                    const linkHash = hashIndex !== -1 ? link.href.slice(hashIndex) : "";
                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + (i * 0.08), duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="font-display font-medium text-[2rem] text-(--brand-dark-text) hover:text-(--brand-blue) transition-colors inline-block"
                                                onClick={() => {
                                                    setCurrentHash(linkHash);
                                                    closeMenu();
                                                }}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                                className="mt-12 pt-8 border-t border-[rgba(0,86,210,0.1)] px-4"
                            >
                                <Link 
                                    href="/get-started" 
                                    onClick={closeMenu}
                                    className="w-full bg-(--brand-blue) text-white rounded-sm py-4 font-body font-semibold text-lg hover:bg-[#004bb8] transition-colors flex items-center justify-center text-center"
                                >
                                    Start a Project
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
