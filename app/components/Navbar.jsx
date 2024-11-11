"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#services", label: "Services" },
    { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background text-white px-6 py-4 shadow-lg fixed w-full z-10"
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" aria-label="Bhathiya's Homepage" className="sm:hidden text-3xl font-extrabold text-secondary">

                </Link>

                {/* Centered navigation items on larger screens */}
                <ul className="hidden sm:flex space-x-6 text-lg font-semibold items-center flex-grow justify-center">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="hover:text-secondary">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                        aria-expanded={isMobileMenuOpen}
                        className="text-white text-3xl"
                    >
                        {isMobileMenuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Animated Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="sm:hidden bg-background text-white text-lg font-semibold space-y-4 p-4 text-center"
                    >
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className="block hover:text-secondary">
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
