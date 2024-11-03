"use client"
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background text-white border-t border-secondary z-10"
        >
            <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
                <span className="text-secondary  text-lg">
                    BHATHIYA LAKSHAN
                </span>
                <p className="text-txt_secondary font-bold mt-4 sm:mt-0 text-sm sm:text-base">
                    © {new Date().getFullYear()} All rights reserved
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;
