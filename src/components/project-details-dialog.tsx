import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type ProjectDetailsDialogProps = {
  project: {
    id: number;
    title: string;
    description: string;
    images: string[];
    gitUrl: string;
    previewUrl: string;
  };
  onClose: () => void;
};

const ProjectDetailsDialog = ({ project, onClose }: ProjectDetailsDialogProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>

        {/* Image section */}
        <div className="relative w-full h-60 mb-4">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Project description */}
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

        {/* Buttons section */}
        <div className="flex gap-2 pt-4">
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

        {/* Close button */}
        <DialogClose asChild>
          <Button variant="outline" className="mt-4" onClick={onClose}>
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
