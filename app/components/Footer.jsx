import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-secondary border-l-transparent border-r-transparent border-b-transparent text-white">
            <div className="container p-5 pr-2 flex justify-between items-center">
                <span className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <div className="ml-0 text-secondary">BHATHIYA LAKSHAN</div>
                </span>
                <p className="text-txt_secondary font-bold">All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
