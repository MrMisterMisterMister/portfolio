import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerContainerProps {
    children: ReactNode;
    delay?: number;
    staggerDelay?: number;
    className?: string;
}

const StaggerContainer = ({
    children,
    delay = 0,
    staggerDelay = 0.1,
    className = "",
}: StaggerContainerProps) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: staggerDelay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default StaggerContainer;
