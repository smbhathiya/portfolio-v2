"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import projectsData from "@/data/projects";
import ProjectDetailsDialog from "./project-details-dialog";

const categories = ["All", "Web", "Desktop", "Mobile"];

export default function ProjectsFilteredBox() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryCounts = categories.map((cat) => ({
    type: cat,
    count:
      cat === "All"
        ? projectsData.length
        : projectsData.filter((p) => p.tag.includes(cat)).length,
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

  const openDialog = (project: any) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedProject(null);
    setIsDialogOpen(false);
  };

  const filtered =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.tag.includes(activeCategory));

  const visibleProjects = filtered.slice(0, visibleCount);

  return (
    <section className="space-y-6 p-6 rounded-xl shadow-none border-0 bg-gray-100 dark:bg-neutral-900/50">
      <div className="flex flex-wrap gap-4 justify-center">
        {categoryCounts.map(({ type, count }) => (
          <div
            key={type}
            onClick={() => handleCategoryClick(type)}
            className={`lg:w-30 lg:h-20 md:w-30 md:h-20 sm:w-30 sm:h-20 w-20 h-15 flex flex-col items-center justify-center rounded-lg border cursor-pointer ${
              activeCategory === type
                ? "border-primary bg-muted/30 dark:bg-muted/20"
                : "border-border bg-muted/20 dark:bg-muted/10"
            } transition-colors duration-200`}
          >
            <span className="text-lg font-bold text-primary">{count}</span>
            <span className="text-xs text-muted-foreground capitalize">
              {type}
            </span>
          </div>
        ))}
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {visibleProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden hover:scale-[1.02] transition-transform p-0 cursor-pointer shadow-none"
            onClick={() => openDialog(project)}
          >
            <div className="relative w-full h-40">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <CardContent className="p-4 space-y-2 ">
              <h3 className="text-lg font-semibold text-primary">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {project.description}
              </p>
              <div className="flex justify-between items-center pt-2">
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.gitUrl} target="_blank">
                      GitHub
                    </a>
                  </Button>
                  {project.previewUrl && project.previewUrl !== "#" && (
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.previewUrl} target="_blank">
                        Preview
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More / Less */}
      {filtered.length > visibleCount && (
        <div className="flex justify-center pt-6">
          <Button variant="outline" onClick={toggleShowMore}>
            {isExpanded ? "Show Less" : isMobile ? "Show More" : "Show All"}
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
