"use client";
import React from "react";
import skillData from "../data/skillData";
import { motion } from "framer-motion";

const SkillSection = () => {
  return (
    <section id="skills" className="py-10 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-center text-3xl sm:text-4xl font-bold text-foreground mb-6 lg:mb-8 leading-tight">
          My Skills
        </h2> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 ">
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-4 bg-box_primary/90 rounded-xl shadow-md hover:shadow-lg hover:border-primary/40 border border-transparent transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-primary text-2xl sm:text-3xl">
                {skill.icon}
              </div>
              <h3
                className={`text-base sm:text-lg mt-2 text-foreground font-medium ${skill.textColor}`}
              >
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
