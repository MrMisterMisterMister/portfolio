import { clsx, type ClassValue } from "clsx";

/**
 * Utility function for conditionally joining classNames
 * @param inputs - Class names or conditional class objects
 * @returns A space-separated string of class names
 */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}
