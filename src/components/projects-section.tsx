"use client";

import ProjectsTabs from "./projects-tabs";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full px-4 pb-20 pt-20 md:px-10 md:pb-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-10 top-14 h-64 w-64 rounded-full bg-accent/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl space-y-14">
        <div className="text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground backdrop-blur">
            Work
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Selected projects that blend polish, performance, and practicality
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            From SaaS dashboards to desktop utilities, these builds pair modern
            frameworks with human-centered workflows.
          </p>
        </div>

        <ProjectsTabs />
      </div>
    </section>
  );
}
