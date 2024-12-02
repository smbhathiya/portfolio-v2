// File: TabButton.js

import React from "react";
import { motion } from "framer-motion";

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? "text-txt_primary block bg-box_primary p-2 px-5 pr-5 rounded-xl"
        : "text-txt_secondary";

    return (
        <button
            onClick={selectTab}
            role="tab"
            aria-selected={active}
            className="relative"
        >
            <p className={`mr-3 font-semibold ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                transition={{ type: "spring", stiffness: 200 }}
                className="h-1 bg-primary-500 mt-2 mr-3"
            ></motion.div>
        </button>
    );
};

export default TabButton;
