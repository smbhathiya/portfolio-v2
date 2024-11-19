"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";
import { aboutData } from "../data/aboutData";
import { educationData } from "../data/educationData";
import { experienceData } from "../data/experienceData";

const TAB_DATA = [
    {
        title: "Education",
        id: "education",
        content: (
            <div className="space-y-4">
                {educationData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row items-start gap-4 bg-[#18191E] p-4 rounded-lg hover:bg-[#18191E]/70 transition-colors duration-300"
                    >
                        <div className="flex-shrink-0">
                            {item.icon}
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-white text-lg sm:text-xl">{item.title}</h3>
                            <p className="text-[#ADB7BE] text-sm sm:text-base">{item.institution}</p>
                            <p className="text-[#ADB7BE] text-sm">{item.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <div className="space-y-4">
                {experienceData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row items-start gap-4 bg-[#18191E] p-4 rounded-lg hover:bg-[#18191E]/70 transition-colors duration-300"
                    >
                        <div className="flex-shrink-0">
                            {item.icon}
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-white text-lg sm:text-xl">{item.title}</h3>
                            <p className="text-[#ADB7BE] text-sm sm:text-base">{item.company}</p>
                            <p className="text-[#ADB7BE] text-sm">{item.duration}</p>
                            <div className="pt-2 border-t border-[#33353F]">
                                <p className="text-[#ADB7BE] text-sm sm:text-base">
                                    <span className="font-medium">Role:</span> {item.role}
                                </p>
                                <p className="text-[#ADB7BE] text-sm sm:text-base mt-1">
                                    <span className="font-medium">Technologies:</span> {item.technologies}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white lg:py-16" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 xl:gap-16 sm:px-6 xl:px-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-5 place-self-center hidden lg:block"
                >
                    <div className="rounded-2xl overflow-hidden bg-primary w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/about-image-1.webp"
                            alt="About me"
                            width={400}
                            height={400}
                            className="object-cover rounded-2xl"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-7 place-self-center text-left"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 text-center lg:text-left mt-8">
                        About Me
                    </h2>
                    <p className="text-txt_primary text-center sm:text-center lg:text-left text-base sm:text-lg mb-6 lg:text-xl">
                        {aboutData.content.description}
                    </p>

                    <div className="flex flex-row gap-4  mb-6">
                        {TAB_DATA.map((tabItem) => (
                            <TabButton
                                key={tabItem.id}
                                selectTab={() => handleTabChange(tabItem.id)}
                                active={tab === tabItem.id}
                            >
                                {tabItem.title}
                            </TabButton>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {TAB_DATA.find((t) => t.id === tab).content}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;