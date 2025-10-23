"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import projectsData from "@/data/projects";
import ProjectDetailsDialog from "./project-details-dialog";
import { AnimatedGroup } from "@/components/ui/animated-group";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}
const INITIAL_COUNT = 3;

export default function ProjectsFilteredBox() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id);

  // No category filtering: we always show the projects list (all projects)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleShowMore = () => {
    if (isExpanded) {
      setVisibleCount(Math.min(filtered.length, INITIAL_COUNT));
      setIsExpanded(false);
      return;
    }

    setVisibleCount(filtered.length);
    setIsExpanded(true);
  };

  const openDialog = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedProject(null);
    setIsDialogOpen(false);
  };

  const filtered = sortedProjects;

  useEffect(() => {
    if (isExpanded) return;

    const initialCount = Math.min(filtered.length, INITIAL_COUNT);
    if (visibleCount !== initialCount) {
      setVisibleCount(initialCount);
    }
  }, [filtered.length, isExpanded, visibleCount]);

  const visibleProjects = filtered.slice(0, visibleCount);

  return (
    <section className="space-y-10 rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-10 shadow-xl shadow-primary/10 backdrop-blur-xl">
      {/* Category tabs removed - showing default list of projects */}

      {/* Project cards */}
      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          },
          item: {
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            },
          },
        }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {visibleProjects.map((project) => (
          <Card
            key={project.id}
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-0 text-left shadow-xl shadow-primary/5 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-primary/40"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onClick={() => openDialog(project)}
              />
              <div className="absolute left-3 top-3 z-20 flex gap-2">
                {project.tag
                  .filter((tag) => tag !== "All")
                  .map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
            <CardContent className="space-y-4 p-6">
              <div
                className="flex items-start justify-between gap-3"
                onClick={() => openDialog(project)}
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border-white/20 bg-white/5 backdrop-blur"
                    asChild
                  >
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="size-4" />
                      <span className="text-xs md:text-sm">Code</span>
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-full bg-primary px-4 text-white shadow-primary/20 hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="size-4" />
                      <span className="text-xs md:text-sm">Live</span>
                    </a>
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-transparent bg-white/5 backdrop-blur transition hover:border-primary/40"
                  onClick={() => openDialog(project)}
                >
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </AnimatedGroup>

      {/* Show More / Less */}
      {filtered.length > INITIAL_COUNT && (
        <div className="flex justify-center pt-8">
          <Button
            variant="outline"
            onClick={toggleShowMore}
            className="rounded-full border-white/20 bg-white/5 px-6 backdrop-blur hover:border-primary/50"
          >
            {isExpanded ? "Show Less" : "Show All"}
          </Button>
        </div>
      )}

      {/* Dialog */}
      {isDialogOpen && selectedProject && (
        <ProjectDetailsDialog project={selectedProject} onClose={closeDialog} />
      )}
    </section>
  );
}
