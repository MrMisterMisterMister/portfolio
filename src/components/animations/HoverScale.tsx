import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HoverScaleProps {
    children: ReactNode;
    scale?: number;
    duration?: number;
    className?: string;
}

const HoverScale = ({
    children,
    scale = 1.05,
    duration = 0.2,
    className = "",
}: HoverScaleProps) => {
    return (
        <motion.div
            whileHover={{
                scale,
                transition: {
                    duration,
                    ease: [0.25, 0.4, 0.25, 1],
                },
            }}
            whileTap={{ scale: 0.98 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default HoverScale;
