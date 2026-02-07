"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Services", href: "/#services" },
        { name: "Pricing", href: "/#pricing" },
        { name: "Who We Help", href: "/#who-we-help" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900" onClick={closeMenu}>
                        ProviaCore
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:ml-6 md:flex md:space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-600 transition-colors hover:text-brand-blue"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <Link
                        href="/get-started"
                        className="hidden sm:inline-flex h-10 items-center justify-center rounded-md bg-brand-blue px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-blue-light focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                    >
                        Start a Project
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex items-center p-2 text-zinc-600 md:hidden"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                <div className="flex h-16 items-center justify-between px-4 sm:px-6">
                    <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900" onClick={closeMenu}>
                        ProviaCore
                    </Link>
                    <button
                        className="p-2 text-zinc-600"
                        aria-label="Close menu"
                        onClick={closeMenu}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col space-y-8 px-6 py-12">
                    {navLinks.filter(l => l.name !== "Home").map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-semibold text-zinc-900 transition-colors hover:text-brand-blue"
                            onClick={closeMenu}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="pt-8">
                        <Link
                            href="/get-started"
                            className="flex h-14 items-center justify-center rounded-xl bg-brand-blue text-lg font-bold text-white transition-colors hover:bg-brand-blue-light shadow-lg"
                            onClick={closeMenu}
                        >
                            Start a Project
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
