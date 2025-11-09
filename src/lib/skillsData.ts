export interface SkillCategory {
    category: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        category: "Programming Languages",
        skills: ["TypeScript", "JavaScript", "Python", "C#", "C++", "Java", "GDScript"]
    },
    {
        category: "Frameworks & Libraries",
        skills: ["React", "Astro", ".NET", "Tailwind CSS", "Sass"]
    },
    {
        category: "Tools & Platforms",
        skills: ["Git", "Vercel", "DigitalOcean", "Nginx", "CI/CD", "Figma", "Linux", "REST APIs", "Godot"]
    }
];
