import { FaJsSquare, FaReact, FaJava, FaHtml5 } from "react-icons/fa";
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
import { AiOutlineDotNet } from "react-icons/ai";
import { color } from "framer-motion";

const skillData = [
    { name: "Dotnet", icon: <AiOutlineDotNet className="text-4xl text-blue-500" />, textColor: "text-blue-500", color: "text-blue-500" },
    { name: "C#", icon: <SiCsharp className="text-4xl text-green-700" />, textColor: "text-green-700" },
    { name: "JavaScript", icon: <FaJsSquare className="text-4xl text-yellow-500" />, textColor: "text-yellow-500" },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-700" />, textColor: "text-blue-700" },
    { name: "ReactJS", icon: <FaReact className="text-4xl text-blue-600" />, textColor: "text-blue-600" },
    { name: "NextJS", icon: <SiNextdotjs className="text-4xl text-white" />, textColor: "text-white" },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-4xl text-teal-400" />, textColor: "text-teal-400" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-4xl text-purple-500" />, textColor: "text-purple-500" },
    { name: "Java", icon: <FaJava className="text-4xl text-orange-500" />, textColor: "text-orange-500" },
    { name: "MySQL", icon: <SiMysql className="text-4xl text-blue-500" />, textColor: "text-blue-500" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-400" />, textColor: "text-blue-400" },
    { name: "Git", icon: <SiGit className="text-4xl text-red-500" />, textColor: "text-red-500" },
    { name: "HTML", icon: <FaHtml5 className="text-4xl text-red-500" />, textColor: "text-red-500" },
    { name: "CSS", icon: <SiCss3 className="text-4xl text-blue-500" />, textColor: "text-blue-500" }
];

export default skillData;
