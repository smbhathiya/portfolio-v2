"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleDownloadClick = async (e) => {
        e.preventDefault(); // Prevent default behavior to handle custom download
        setIsLoading(true);
        setIsDisabled(true); // Disable the button while downloading

        // Creating a link element to trigger the download
        const link = document.createElement("a");
        link.href = "/docs/Bhathiya_Lakshan.pdf"; // Path to your CV PDF
        link.download = "Bhathiya_Lakshan.pdf"; // Name of the downloaded file

        // Append the link and programmatically click it to start the download
        document.body.appendChild(link);
        link.click();

        // After triggering the download, remove the link element
        document.body.removeChild(link);

        // Simulate the download process delay, and then reset the button
        setTimeout(() => {
            setIsLoading(false); // Stop the loading animation
            setIsDisabled(false); // Re-enable the button
        }, 1000); // You can adjust this timeout as per the download time
    };

    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Bhathiya",
                                2000,
                                "Backend Developer",
                                2000,
                                "Frontend Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl lg:mb-8 font-bold sm:pr-5">
                        Full-Stack Engineer specializing in Next.js & React for the frontend and .NET for the backend
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-btn_primary hover:bg-slate-600 duration-200 text-white"
                        >
                            Hire Me
                        </Link>
                        <button
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-primary text-background hover:bg-secondary font-bold mt-3"
                            onClick={handleDownloadClick}
                            disabled={isDisabled} // Disable the button during download
                        >
                            <span className="inline-block bg-primary hover:bg-secondary rounded-full px-5 py-2">
                                {isLoading ? (
                                    <div className="animate-spin inline-block w-5 h-5 border-t-2 border-white rounded-full"></div> // Spinner for loading state
                                ) : (
                                    "Download CV"
                                )}
                            </span>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mx-auto sm:mt-0 bg-primary">
                        <Image
                            src="/images/hero-image-2.webp"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={450}
                            height={450}
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
