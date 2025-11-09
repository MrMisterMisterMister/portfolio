export interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    location: string;
    description: string[];
}

export interface Education {
    id: string;
    degree: string;
    field: string;
    institution: string;
    duration: string;
    description?: string;
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
}

export const experiences: Experience[] = [
    {
        id: "1",
        role: "Intern",
        company: "The Digital Capability Company",
        duration: "5 months (Sep 2024 - Jan 2025)",
        location: "Leiden, Netherlands",
        description: [
            "Contributing to the development of a user interface using Mendix low-code platform.",
            "Collaborating with teams to gather requirements and implement features.",
            "Assisting in testing and debugging systems to ensure functionality, security, user experience, and performance.",
        ],
    }
];

export const education: Education[] = [
    {
        id: "1",
        degree: "Bachelor of Science",
        field: "Software Engineering",
        institution: "The Hague University of Applied Sciences",
        duration: "2022 - Current",
        description:
            "Pursuing a Bachelor's degree in Software Engineering with a focus on full stack development, software architecture, and project management.",
    },
];

export const certifications: Certification[] = [
    {
        id: "1",
        name: "Mendix Developer",
        issuer: "Mendix",
        date: "2024",
        credentialUrl: "",
    },
    {
        id: "2",
        name: "Digital Accessibility",
        issuer: "Accessibility Foundation",
        date: "2023",
        credentialUrl:
            "",
    }
];
