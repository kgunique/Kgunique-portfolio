const skillsByCategory = [
    {
        id: "frontend",
        type: "Frontend",
        skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "React Query", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
        id: "ui-engineering",
        type: "UI engineering",
        skills: ["Reusable component architecture", "Responsive design", "Forms & validation", "RBAC"],
    },
    {
        id: "backend",
        type: "Backend & APIs",
        skills: ["Node.js", "Express.js", "REST APIs", "SQL", "NoSQL"],
    },
    {
        id: "tools-ai",
        type: "Tools & AI",
        skills: ["Git", "Webpack", "Postman", "Docker", "SonarQube", "Generative AI", "AI-assisted coding"],
    },
    {
        id: "leadership",
        type: "Leadership",
        skills: ["Team mentoring", "Code reviews", "Sprint planning", "Task delegation", "Agile/Scrum"],
    },
]

export const MySkills = skillsByCategory.map(({ id, type, skills }) => ({
    id,
    type,
    list: skills.map((name) => ({ name })),
}))
