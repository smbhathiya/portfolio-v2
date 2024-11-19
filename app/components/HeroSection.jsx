"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
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
                        <Link
                            href="/"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-primary text-background hover:bg-secondary font-bold mt-3"
                        >
                            <span className="inline-block bg-primary hover:bg-secondary rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>
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
