import React from "react";
import {FaJsSquare, FaReact, FaJava, FaHtml5} from "react-icons/fa";
import {
    SiCsharp,
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiMysql,
    SiPostgresql,
    SiGit,
    SiCss3,
    SiTypescript
} from "react-icons/si";
import {AiOutlineDotNet} from "react-icons/ai";

const SkillSection = () => {
    const skills = [
        { name: "Dotnet", icon: <AiOutlineDotNet  className="text-4xl text-blue-500" /> },
        { name: "C#", icon: <SiCsharp className="text-4xl text-green-700" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-4xl text-yellow-500" /> },
        {name: "TypeScript", icon: <SiTypescript  className="text-4xl text-blue-700" /> },
        { name: "ReactJS", icon: <FaReact className="text-4xl text-blue-600" /> },
        { name: "NextJS", icon: <SiNextdotjs className="text-4xl text-white" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-4xl text-teal-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-4xl text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-4xl text-orange-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-4xl text-blue-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-400" /> },
        {name: "Git", icon: <SiGit className="text-4xl text-red-500" /> },
        {name: "HTML", icon: <FaHtml5 className="text-4xl text-red-500"/> },
        {name: "CSS", icon: <SiCss3 className="text-4xl text-blue-500" /> }
    ];

    return (
        <section id="skills" className="pb-10">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Skills
            </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 bg-[#181818] rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                            {skill.icon}
                            <h3 className="text-lg text-white mt-3">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
            );
            };

            export default SkillSection;
