import {
    SiDotnet,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiMysql,
    SiPostgresql,
    SiGit,
    SiHtml5,
    SiCss3,
  } from 'react-icons/si';
  import type { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa';
import { PiFileCSharpBold } from 'react-icons/pi';
  
  export type Skill = {
    name: string;
    Icon: IconType;
  };
  
  export const skills: Skill[] = [
    { name: 'C#', Icon: PiFileCSharpBold  },
    { name: '.NET', Icon: SiDotnet },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'ReactJS', Icon: SiReact },
    { name: 'NextJS', Icon: SiNextdotjs },
    { name: 'TailwindCSS', Icon: SiTailwindcss },
    { name: 'Bootstrap', Icon: SiBootstrap },
    { name: 'Java', Icon: FaJava },
    { name: 'MySQL', Icon: SiMysql },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'Git', Icon: SiGit },
    { name: 'HTML', Icon: SiHtml5 },
    { name: 'CSS', Icon: SiCss3 },
  ];
  