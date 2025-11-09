import { technology, type Technology } from "./technologiesData";

export interface GitHubLink {
    name: string;
    url: string;
}

export interface WebsiteLink {
    name: string;
    url: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: Technology[];
    category: string;
    githubLinks?: GitHubLink[];
    websiteLinks?: WebsiteLink[];
}

export const categories = ["All", "Web App", "Website", "Mobile", "API", "Game", "IoT", "Other"];

export const projects: Project[] = [
    {
        id: "1",
        title: "Fowl Play",
        description: "A brutal roguelike arena chicken fighter game.",
        longDescription: `A collaborative project where I contributed to the development of "Fowl Play",
            a brutal roguelike arena chicken fighter game built with the Godot engine. My work included
            implementing core gameplay mechanics, level design, AI, UI, in-game physics, many bug fixes, and
            performance optimizations to ensure a smooth experience.
            <br><br>
            The game features intense combat, diverse arenas, and a chicken character with unique weapons and abilities.
            "Fowl Play" is available to download and play offline and showcases studio Fishbones's dedication to crafting
            an engaging, challenging game.`,
        image: "https://www.studiofishbones.com/assets/square%20fowlplay-DE1cU3wF.png",
        technologies: [
            technology.godot,
            technology.gdscript,
            technology.blender,
        ],
        category: "Game",
        githubLinks: [
            { name: "Repository", url: "https://github.com/Fishbones-Studio/fowl-play" }
        ],
        websiteLinks: [
            { name: "Studio Fishbones", url: "https://www.studiofishbones.com/" }
        ],
    },
    {
        id: "2",
        title: "Project Accessibility",
        description: "A collaborative web application focused on accessibility for users with disabilities.",
        longDescription: `A collaborative project where I contributed to the development of a comprehensive web application 
            designed with accessibility as a core principle. The application implements WCAG compliance standards, 
            full keyboard navigation support, screen reader compatibility, and responsive design to ensure an inclusive 
            user experience for people with disabilities. Built with a modern tech stack including React for the frontend 
            and .NET for the backend API, deployed on DigitalOcean infrastructure with Nginx as the web server.`,
        image: "https://github.com/MrMisterMisterMister/project-accessibility/raw/refs/heads/main/projectaccessibility/public/favicon.ico",
        technologies: [
            technology.react,
            technology.typescript,
            technology.dotnet,
            technology.digitalocean,
            technology.mysql,
            technology.phpmyadmin,
            technology.nginx,
        ],
        category: "Web App",
        githubLinks: [
            { name: "API Repository", url: "https://github.com/MrMisterMisterMister/project-accessibility-api/" },
            { name: "Frontend Repository", url: "https://github.com/MrMisterMisterMister/project-accessibility/" }
        ],
    },
    {
        id: "3",
        title: "MFM-docs",
        description: "Comprehensive documentation site for the Multiflexmer v3.7.0 open-source hardware project.",
        longDescription: `A detailed documentation website created for the Multiflexmer v3.7.0, an open-source hardware project. 
            Since version 3.7.0 lacked official documentation, I developed this comprehensive resource to guide users through 
            the device's features, assembly instructions, configuration options, and usage guidelines.
            <br><br>
            Built with Astro for optimal performance and SEO, the site features an intuitive navigation structure, 
            interactive diagrams, step-by-step tutorials, and searchable content. The documentation includes detailed 
            hardware specifications, software setup guides, troubleshooting sections, and community contribution guidelines.`,
        image: "https://raw.githubusercontent.com/MrMisterMisterMister/MFM-docs/7bf05513c8c487bee3e3a6f2e1a8eedbad295465/public/favicon.svg",
        technologies: [
            technology.astro,
            technology.typescript,
            technology.tailwind,
        ],
        category: "Website",
        githubLinks: [
            { name: "Repository", url: "https://github.com/MrMisterMisterMister/MFM-docs" },
        ],
        websiteLinks: [
            { name: "Documentation", url: "https://malendemolens.com" }],
    },
    // {
    //     id: "4",
    //     title: "Multiflexmer Device",
    //     description: "An open-source IoT sensor platform for environmental monitoring with LoRaWAN connectivity.",
    //     longDescription: `The Multiflexmeter is an open-source sensor platform designed for frequent, low-cost, and flexible 
    //         environmental measurements. It provides a robust foundation for IoT deployments using LoRaWAN connectivity, 
    //         making it ideal for smart city applications, environmental research, and agricultural monitoring.
    //         <br><br>
    //         The device features modular sensor support, ultra-low power consumption, long-range wireless communication 
    //         via LoRaWAN, and weatherproof enclosure design. Built with Arduino-compatible hardware and programmed in C++, 
    //         it supports various environmental sensors including temperature, humidity, air quality, and soil moisture sensors. 
    //         The platform is fully customizable and includes detailed PCB designs, schematics, and firmware source code.`,
    //     image: "https://avatars.githubusercontent.com/u/26276593?s=200&v=4",
    //     technologies: [
    //         technology.arduino,
    //         technology.cpp,
    //         technology.lorawan,
    //     ],
    //     category: "IoT",
    //     githubLinks: [
    //         { name: "Repository", url: "https://github.com/Multiflexmeter" }
    //     ],
    //     websiteLinks: [
    //         { name: "Multiflexmeter.nl", url: "https://multiflexmeter.nl" },
    //     ],
    // },
    {
        id: "4",
        title: "This Portfolio",
        description: "Responsive portfolio website built with Astro and TypeScript.",
        longDescription: `The source code for this portfolio website, designed to showcase my projects, skills, and professional experience. 
            Built with Astro for optimal performance and TypeScript for type safety, the site features a modern, responsive design 
            with smooth animations and an intuitive user interface.
            <br><br>
            The portfolio implements dark/light theme switching, accessibility best practices including keyboard navigation and 
            ARIA labels, SEO optimization, and fast loading times. Styled with Tailwind CSS for a clean, professional appearance 
            that works seamlessly across all devices. The site is fully open-source and serves as both a portfolio piece and a 
            reference implementation for modern web development practices.`,
    image: "/favicon.svg",
        technologies: [
            technology.astro,
            technology.typescript,
            technology.tailwind,
        ],
        category: "Website",
        githubLinks: [
            { name: "Source Code", url: "https://github.com/MrMisterMisterMister/portfolio" }
        ],
    }
];
