import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface ScaleInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    scale?: number;
    className?: string;
}

const ScaleIn = ({
    children,
    delay = 0,
    duration = 0.4,
    scale = 0.95,
    className = "",
}: ScaleInProps) => {
    const variants: Variants = {
        hidden: {
            opacity: 0,
            scale,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScaleIn;
