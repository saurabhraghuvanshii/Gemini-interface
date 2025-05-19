import React, { ReactNode, useState } from "react";

interface TooltipProps {
    content: string;
    children: ReactNode;
    side?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, side = "right" }) => {
    const [show, setShow] = useState(false);

    let position = "left-full top-1/2 -translate-y-1/2 ml-2";
    if (side === "top") position = "bottom-full left-1/2 -translate-x-1/2 mb-2";
    if (side === "bottom") position = "top-full left-1/2 -translate-x-1/2 mt-2";
    if (side === "left") position = "right-full top-1/2 -translate-y-1/2 mr-2";

    return (
        <span
            className="relative inline-flex"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
            tabIndex={0}
        >
            {children}
            {show && (
                <span
                    className={`absolute z-50 px-2 py-1 rounded bg-gray-900 text-white text-xs whitespace-nowrap pointer-events-none transition-opacity duration-100 opacity-100 ${position}`}
                >
                    {content}
                </span>
            )}
        </span>
    );
};

export default Tooltip; 
