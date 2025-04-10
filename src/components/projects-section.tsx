"use client";

import projectsData from "@/data/projects";
import ProjectCountBox from "./project-count";
import ProjectsTabs from "./projects-tabs";

const categories = ["All", "Web", "Desktop", "Mobile"];

export default function ProjectsSection() {
  const categoryCounts = categories.map((cat) => ({
    type: cat,
    count:
      cat === "All"
        ? projectsData.length
        : projectsData.filter((p) => p.tag.includes(cat)).length,
  }));

  return (
    <section id="projects" className="w-full px-4 md:px-10 py-10 md:py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <ProjectCountBox counts={categoryCounts} />
        <ProjectsTabs />
      </div>
    </section>
  );
}
