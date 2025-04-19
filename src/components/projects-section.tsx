"use client";

import ProjectsTabs from "./projects-tabs";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full px-4 md:px-10 py-10 md:py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <ProjectsTabs />
      </div>
    </section>
  );
}
