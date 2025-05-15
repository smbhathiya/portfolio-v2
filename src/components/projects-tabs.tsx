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

const categories = ["All", "Web", "Desktop"];

export default function ProjectsFilteredBox() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id);

  const categoryCounts = categories.map((cat) => ({
    type: cat,
    count:
      cat === "All"
        ? sortedProjects.length
        : sortedProjects.filter((p) => p.tag.includes(cat)).length,
  }));

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(4);
    setIsExpanded(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleShowMore = () => {
    if (isMobile) {
      setVisibleCount(isExpanded ? 3 : 6);
    } else {
      setVisibleCount(isExpanded ? 4 : filtered.length);
    }
    setIsExpanded((prev) => !prev);
  };

  const openDialog = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedProject(null);
    setIsDialogOpen(false);
  };

  const filtered =
    activeCategory === "All"
      ? sortedProjects
      : sortedProjects.filter((p) => p.tag.includes(activeCategory));

  const visibleProjects = filtered.slice(0, visibleCount);

  return (
    <section className="space-y-8 p-8 rounded-xl shadow-lg border border-primary/10 bg-gray-100/70 dark:bg-neutral-900/50 backdrop-blur-sm">
      <AnimatedGroup
        preset="fade"
        className="flex flex-wrap gap-4 justify-center"
      >
        {categoryCounts.map(({ type, count }) => (
          <div
            key={type}
            onClick={() => handleCategoryClick(type)}
            className={`lg:w-32 lg:h-24 md:w-32 md:h-24 sm:w-30 sm:h-20 w-24 h-20 flex flex-col items-center justify-center rounded-xl border cursor-pointer hover-scale ${
              activeCategory === type
                ? "border-primary bg-primary/10 dark:bg-primary/10 shadow-md"
                : "border-border bg-white/30 dark:bg-black/30 hover:bg-primary/5"
            } transition-all duration-300`}
          >
            <span className="text-2xl font-bold text-primary">{count}</span>
            <span className="text-sm text-muted-foreground capitalize mt-1">
              {type}
            </span>
          </div>
        ))}
      </AnimatedGroup>

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
                damping: 20
              }
            }
          }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {visibleProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden hover-scale transition-all duration-500 p-0 cursor-pointer border border-primary/10 rounded-xl shadow-md group"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover rounded-t-xl transition-transform duration-700 group-hover:scale-110"
                onClick={() => openDialog(project)}
              />
              <div className="absolute top-2 right-2 z-20">
                <span className="px-2 py-1 text-xs rounded-full bg-primary/90 text-white font-medium">
                  {project.tag[0]}
                </span>
              </div>
            </div>
            <CardContent className="p-5 space-y-3">
              <div onClick={() => openDialog(project)}>
                <h3 className="text-xl font-semibold text-primary group-hover:text-primary/90 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-between items-center pt-3">
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="rounded-full" asChild>
                    <a 
                      href={project.gitUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-xs md:text-sm">Code</span>
                    </a>
                  </Button>
                  <Button size="sm" variant="default" className="rounded-full bg-primary hover:bg-primary/90" asChild>
                    <a 
                      href={project.previewUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-xs md:text-sm">Demo</span>
                    </a>
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10"
                  onClick={() => openDialog(project)}
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </AnimatedGroup>

      {/* Show More / Less */}
      {filtered.length > visibleCount && (
        <div className="flex justify-center pt-8">
          <Button 
            variant="outline" 
            onClick={toggleShowMore}
            className="px-6 rounded-full border-primary/20 hover:border-primary/50 hover-scale"
          >
            {isExpanded ? "Show Less" : isMobile ? "Show More" : "Show All Projects"}
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
