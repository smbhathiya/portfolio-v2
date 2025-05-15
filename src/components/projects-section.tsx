"use client";

import ProjectsTabs from "./projects-tabs";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full px-4 md:px-10 py-16 md:py-28 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/5 w-[180px] h-[180px] bg-accent/5 rounded-full blur-lg"></div>
      </div>
      
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text inline-block">My Projects</h2>
          <div className="section-divider max-w-[100px] mx-auto"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-6">
            A showcase of my recent work, featuring web and desktop applications built with modern technologies
          </p>
        </div>
        
        <ProjectsTabs />
      </div>
    </section>
  );
}
