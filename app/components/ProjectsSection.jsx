"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import projectsData from "../data/projectsData";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // Stats Data
  const stats = {
    totalProjects: projectsData.length,
    webProjects: projectsData.filter((p) => p.tag.includes("Web")).length,
    mobileProjects: projectsData.filter((p) => p.tag.includes("Mobile")).length,
    desktopProjects: projectsData.filter((p) => p.tag.includes("Desktop"))
      .length,
  };

  return (
    <section id="projects" className="py-10 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-box_primary/95 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-primary/40 mb-8 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
        >
          {[
            { label: "Total Projects", value: stats.totalProjects },
            { label: "Web", value: stats.webProjects },
            { label: "Mobile", value: stats.mobileProjects },
            { label: "Desktop", value: stats.desktopProjects },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <p className="text-2xl sm:text-3xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-txt_primary mt-1">
                {stat.label}
              </p>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 py-4">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Desktop"
            isSelected={tag === "Desktop"}
          />
        </div>

        {/* Project Grid */}
        <ul
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
