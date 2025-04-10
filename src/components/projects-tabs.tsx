"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import projectsData from "@/data/projects";
import ProjectDetailsDialog from "./project-details-dialog";

// Define the Project type
interface Project {
  id: number;
  title: string;
  description: string;
  tag: string[];
  images: string[];
  gitUrl: string;
  previewUrl: string;
}

const categories = ["All", "Web", "Desktop", "Mobile"];

export default function ProjectsTabs() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Function to open the dialog
  const openDialog = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <Tabs defaultValue="All" className="space-y-4">
      <TabsList className="w-full flex flex-wrap gap-2 justify-start overflow-x-auto h-12">
        {categories.map((cat) => (
          <TabsTrigger
            key={cat}
            value={cat}
            className="capitalize cursor-pointer 
            data-[state=active]:text-white 
            data-[state=active]:bg-primary
            dark:data-[state=active]:text-black 
            dark:data-[state=active]:bg-primary"
          >
            {cat}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((cat) => {
        const filtered =
          cat === "All"
            ? projectsData
            : projectsData.filter((p) => p.tag.includes(cat));

        const visibleProjects = filtered.slice(0, visibleCount);
        const hasMore = visibleCount < filtered.length;

        return (
          <TabsContent key={cat} value={cat}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {visibleProjects.map((project: Project) => (
                <Card key={project.id} className="overflow-hidden p-0">
                  {/* Image section */}
                  <div className="relative w-full h-40 m-0">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    {/* Project title */}
                    <h3 className="text-lg font-semibold text-primary dark:text-primary">
                      {project.title}
                    </h3>

                    {/* Project description */}
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>

                    {/* Read More button */}
                    <div className="flex justify-end">
                      <span
                        className="text-sm text-primary cursor-pointer"
                        onClick={() => openDialog(project)}
                      >
                        Read More
                      </span>
                    </div>

                    {/* Buttons section */}
                    <div className="flex gap-2 pt-2">
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
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Show more / Show less button */}
            {filtered.length > 4 && (
              <div className="flex justify-center pt-6">
                <Button
                  variant="outline"
                  onClick={() =>
                    setVisibleCount((prev) => (hasMore ? prev + 4 : 4))
                  }
                >
                  {hasMore ? "Show More" : "Show Less"}
                </Button>
              </div>
            )}
          </TabsContent>
        );
      })}

      {/* Dialog for Read More */}
      {isDialogOpen && selectedProject && (
        <ProjectDetailsDialog project={selectedProject} onClose={closeDialog} />
      )}
    </Tabs>
  );
}
