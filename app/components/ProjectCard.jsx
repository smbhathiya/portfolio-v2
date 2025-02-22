import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div
        className="h-40 sm:h-48 md:h-56 rounded-t-xl relative bg-box_primary"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay absolute inset-0 bg-background bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center gap-4 transition-all duration-500">
          <Link
            href={gitUrl}
            className="w-12 h-12 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-foreground transition-all duration-300"
            target="_blank"
          >
            <CodeBracketIcon className="w-6 h-6" />
          </Link>
          <Link
            href={previewUrl}
            className="w-12 h-12 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-foreground transition-all duration-300"
            target="_blank"
          >
            <EyeIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="bg-box_primary p-4 rounded-b-xl">
        <h5 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
          {title}
        </h5>
        <p className="text-txt_primary text-sm sm:text-base line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
