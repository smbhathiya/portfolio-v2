import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-primary text-foreground border-primary"
    : "bg-box_primary text-txt_primary border-box_primary hover:bg-primary/10 hover:text-primary";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-sm sm:text-base font-semibold transition-all duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
