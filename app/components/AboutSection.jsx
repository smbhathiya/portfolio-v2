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
                    <div key={index} className="flex items-start bg-background p-4 rounded-lg shadow-md">
                        {item.icon}
                        <div>
                            <h3 className="font-bold text-txt_primary text-xl">{item.title}</h3>
                            <p className="text-txt_secondary">{item.institution}</p>
                            <p className="text-txt_secondary">{item.duration}</p>
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
                    <div key={index} className="flex items-start bg-background p-4 rounded-lg shadow-md">
                        {item.icon}
                        <div>
                            <h3 className="font-bold text-txt_primary text-xl">{item.title}</h3>
                            <p className="text-txt_secondary">{item.company}</p>
                            <p className="text-txt_secondary">{item.duration}</p>
                            <p className="text-txt_secondary mt-2">Role: <span className="font-semibold">{item.role}</span></p>
                            <p className="text-txt_secondary mt-1">Technologies used: <span className="font-semibold">{item.technologies}</span></p>
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
        <section className="text-white bg-background py-12 rounded-2xl shadow-lg" id="about">
            <div className="container mx-auto flex flex-col md:flex-row items-start gap-8 px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0"
                >
                    <Image
                        src="/images/about-image-1.jpg"
                        width={400}
                        height={400}
                        className="object-cover shadow-lg rounded-2xl"
                        alt="About me"
                    />
                </motion.div>
                <div className="flex flex-col w-full md:w-3/4 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 shadow-xl flex-grow">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                        About Me
                    </h2>
                    <div className="flex items-start">
                        <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed text-justify">
                            {aboutData.content.description}
                        </p>
                    </div>
                    {/*<h2 className="text-3xl lg:text-4xl font-bold text-primary mt-8 mb-6">*/}
                    {/*    More Information*/}
                    {/*</h2>*/}
                    <div className="flex space-x-4 mb-6 mt-8 ">
                        {TAB_DATA.map((tabInfo) => (
                            <TabButton
                                key={tabInfo.id}
                                selectTab={() => handleTabChange(tabInfo.id)}
                                active={tab === tabInfo.id}
                            >
                                {tabInfo.title}
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
                            className="text-txt_secondary"
                        >
                            {TAB_DATA.find((t) => t.id === tab).content}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
