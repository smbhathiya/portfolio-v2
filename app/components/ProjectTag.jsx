import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? "text-black border-primary bg-primary duration-300"
        : "text-primary border-txt_primary text-txt_primary hover:border-secondary hover:text-secondary duration-300";
    return (
        <button
            className={`${buttonStyles} rounded-2xl border-2 px-5 pr-5 p-2 text-black border-primary text-sm sm:text-xl lg:text-xl font-bold cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
};

export default ProjectTag;