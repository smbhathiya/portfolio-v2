"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutData } from "../data/aboutData";

const AboutSection = () => {
  return (
    <section
      className="py-12 lg:py-16 bg-background text-foreground"
      id="about"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Image (Left Side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 lg:col-span-4 place-self-center relative"
        >
          <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] mx-auto relative overflow-hidden rounded-2xl shadow-xl group">
            <Image
              src="/images/h4.png"
              alt="About me"
              width={350}
              height={350}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content (Right Side) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-1 lg:col-span-8 place-self-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 lg:mb-8 text-center lg:text-left leading-tight tracking-tight">
            About Me
          </h2>
          <p className="text-txt_primary text-lg sm:text-xl lg:text-2xl text-center lg:text-left max-w-md mx-auto lg:mx-0 leading-relaxed">
            {aboutData.content.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
