export interface PersonalInfo {
    firstName?: string;
    lastName?: string;
    fullName?: string;
    yearsOfExperience?: number;
    currentJob?: string;
    occupation?: string;
    currentCompany?: string;
    contactEmail?: string;
    phone?: string;
    location?: string;
    bio?: string;
    tagline?: string;
    birthYear?: number;
}

export interface SocialLinks {
    github?: string;
    linkedin?: string;
    twitter?: string;
    discord?: string;
    website?: string;
}

// Computed values
export const getAge = (): number => {
    return new Date().getFullYear() - 2002;
};

export const getFullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
};

export const personalInfo: PersonalInfo = {
    firstName: import.meta.env.PUBLIC_FIRST_NAME,
    lastName: import.meta.env.PUBLIC_LAST_NAME,
    fullName: getFullName(import.meta.env.PUBLIC_FIRST_NAME, import.meta.env.PUBLIC_LAST_NAME),
    yearsOfExperience: import.meta.env.PUBLIC_YEARS_OF_EXPERIENCE,
    currentJob: import.meta.env.PUBLIC_CURRENT_JOB,
    occupation: import.meta.env.PUBLIC_OCCUPATION,
    currentCompany: import.meta.env.PUBLIC_CURRENT_COMPANY,
    contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL,
    phone: import.meta.env.PRIVATE_PHONE,
    location: import.meta.env.PUBLIC_LOCATION,
    bio: import.meta.env.PUBLIC_BIO,
    tagline: import.meta.env.PUBLIC_TAGLINE,
};

export const socialLinks: SocialLinks = {
    github: import.meta.env.PUBLIC_GITHUB_URL,
    linkedin: import.meta.env.PUBLIC_LINKEDIN_URL,
    twitter: import.meta.env.PUBLIC_TWITTER_URL,
    discord: import.meta.env.PUBLIC_DISCORD_URL,
    website: import.meta.env.PUBLIC_WEBSITE_URL,
};
