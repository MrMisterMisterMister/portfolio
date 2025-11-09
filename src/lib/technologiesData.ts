// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface Technology {
    name: string;
    link: string;
}

// ============================================================================
// TECHNOLOGY DEFINITIONS
// ============================================================================
// Organized by category for easy maintenance
// To add a new technology, just add it to the appropriate array below

export const programmingLanguages: Technology[] = [
    { name: "TypeScript", link: "https://www.typescriptlang.org/" },
    { name: "JavaScript", link: "https://www.javascript.com/" },
    { name: "Python", link: "https://www.python.org/" },
    { name: "C#", link: "https://dotnet.microsoft.com/languages/csharp" },
    { name: "C++", link: "https://isocpp.org/" },
    { name: "C", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { name: "Java", link: "https://www.java.com/" },
    { name: "GDScript", link: "https://godotengine.org/" },
    { name: "Node.js", link: "https://nodejs.org/" },
    { name: "Arduino", link: "https://www.arduino.cc/" },
];

export const frameworks: Technology[] = [
    { name: "React", link: "https://react.dev/" },
    { name: "Next.js", link: "https://nextjs.org/" },
    { name: "Astro", link: "https://astro.build/" },
    { name: ".NET", link: "https://dotnet.microsoft.com/" },
    { name: "Express", link: "https://expressjs.com/" },
    { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
    { name: "Sass", link: "https://sass-lang.com/" },
    { name: "HTML5", link: "https://developer.mozilla.org/docs/Web/HTML" },
    { name: "CSS3", link: "https://developer.mozilla.org/docs/Web/CSS" },
];

export const toolsAndPlatforms: Technology[] = [
    { name: "Git", link: "https://git-scm.com/" },
    { name: "Docker", link: "https://www.docker.com/" },
    { name: "Kubernetes", link: "https://kubernetes.io/" },
    { name: "AWS", link: "https://aws.amazon.com/" },
    { name: "Azure", link: "https://azure.microsoft.com/" },
    { name: "Vercel", link: "https://vercel.com/" },
    { name: "DigitalOcean", link: "https://www.digitalocean.com/" },
    { name: "Nginx", link: "https://www.nginx.com/" },
    { name: "Jenkins", link: "https://www.jenkins.io/" },
    { name: "CI/CD", link: "https://en.wikipedia.org/wiki/CI/CD" },
    { name: "Jest", link: "https://jestjs.io/" },
    { name: "Figma", link: "https://www.figma.com/" },
    { name: "Jira", link: "https://www.atlassian.com/software/jira" },
    { name: "VS Code", link: "https://code.visualstudio.com/" },
    { name: "Postman", link: "https://www.postman.com/" },
    { name: "Linux", link: "https://www.linux.org/" },
    { name: "REST APIs", link: "https://restfulapi.net/" },
    { name: "GraphQL", link: "https://graphql.org/" },
    { name: "Godot", link: "https://godotengine.org/" },
    { name: "Blender", link: "https://www.blender.org/" },
    { name: "Photoshop", link: "https://www.adobe.com/products/photoshop.html" },
    { name: "PHPMyAdmin", link: "https://www.phpmyadmin.net/" },
    { name: "LoRaWAN", link: "https://lora-alliance.org/" },
];

export const databases: Technology[] = [
    { name: "PostgreSQL", link: "https://www.postgresql.org/" },
    { name: "MongoDB", link: "https://www.mongodb.com/" },
    { name: "MySQL", link: "https://www.mysql.com/" },
    { name: "SQLite", link: "https://www.sqlite.org/" },
];

// ============================================================================
// LOOKUP SYSTEM
// ============================================================================
// Allows accessing technologies via dot notation: technology.react, technology.git

/**
 * Map of special cases for technology keys
 * Used when technology names contain special characters
 */
const SPECIAL_KEYS: Record<string, string> = {
    "c#": "csharp",
    "c++": "cpp",
    "c": "c",
    ".net": "dotnet",
    "node.js": "nodejs",
    "next.js": "nextjs",
    "vs code": "vscode",
    "tailwind css": "tailwind",
    "rest apis": "restapi",
    "ci/cd": "cicd",
    "phpmyadmin": "phpmyadmin",
    "lorawan": "lorawan",
};

/**
 * Converts a technology name to a lookup key
 * @example "React" -> "react"
 * @example "C++" -> "cpp"
 * @example "Next.js" -> "nextjs"
 */
function toKey(name: string): string {
    const lower = name.toLowerCase();
    return SPECIAL_KEYS[lower] || lower.replace(/[^a-z0-9]/g, "");
}

/**
 * Lookup object for accessing technologies by key
 * @example technology.react, technology.typescript, technology.git
 */
export const technology: Record<string, Technology> = (
    [
        ...programmingLanguages,
        ...frameworks,
        ...toolsAndPlatforms,
        ...databases,
    ] as const
).reduce((acc, tech) => {
    acc[toKey(tech.name)] = tech;
    return acc;
}, {} as Record<string, Technology>);

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get a technology by name or key (case-insensitive)
 * @example getTechnology("react") // returns React technology
 * @example getTechnology("C++")   // returns C++ technology
 */
export function getTechnology(nameOrKey: string): Technology | undefined {
    return technology[toKey(nameOrKey)];
}

/**
 * Get all technologies as a single array
 */
export function getAllTechnologies(): Technology[] {
    return [
        ...programmingLanguages,
        ...frameworks,
        ...toolsAndPlatforms,
        ...databases,
    ];
}

/**
 * Search technologies by name (case-insensitive partial match)
 * @example searchTechnologies("script") // returns [TypeScript, JavaScript, ...]
 */
export function searchTechnologies(query: string): Technology[] {
    const lowerQuery = query.toLowerCase();
    return getAllTechnologies().filter(
        (tech) => tech.name.toLowerCase().includes(lowerQuery)
    );
}
