import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HoverLiftProps {
    children: ReactNode;
    distance?: number;
    duration?: number;
    className?: string;
}

const HoverLift = ({
    children,
    distance = -8,
    duration = 0.3,
    className = "",
}: HoverLiftProps) => {
    return (
        <motion.div
            whileHover={{
                y: distance,
                transition: {
                    duration,
                    ease: [0.25, 0.4, 0.25, 1],
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default HoverLift;
