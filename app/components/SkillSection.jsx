"use client"
import React from "react";
import skillData from "../data/skillData";

    
    const SkillSection = () => {
        return (
            <section id="skills" className="pb-10">
                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                    My Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 cursor-pointer">
                    {skillData.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 pt-6 pb-6 bg-box_primary rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-gray-500"
                        >
                            {skill.icon}
                            <h3 className={`text-lg mt-3 ${skill.textColor}`}>{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        );
    };
    
    export default SkillSection;
    
