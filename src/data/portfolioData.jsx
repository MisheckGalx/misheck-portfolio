import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiPython,
    SiPostgresql,
    SiVercel,
    SiGit,
    SiGithub,
    SiTailwindcss,
} from "react-icons/si";

export const portfolioData = {
    personal: {
        name: "Misheck Gogo",
        roles: ["Backend Engineer", "Solutions Architect"],
        profileImage: "/images/profile.jpg",
        about: "I'm a backend engineer moving deliberately into cloud solutions architecture. My foundation is Python and RESTful API design, and I'm actively building on that with Java and hands-on AWS work, designing serverless systems, secure IAM boundaries, automated compliance pipelines, and infrastructure that scales without babysitting. I like architecting systems as much as I like coding them, whether that's a presigned-URL upload pattern, a Lambda-driven remediation pipeline, or a serverless REST API built from scratch on API Gateway and DynamoDB. I learn by building real, working systems end to end, not just studying the diagrams.",
        social: {
            email: "mailto:misheckgogo45@gmail.com",
            github: "https://github.com/MisheckGalx",
            linkedin: "https://linkedin.com/in/misheckgogo/",
        },
        location: "South Africa",
        phone: "+27 680 970 160"
    },
    workExperience: [
        {
            company: "Duck Framework",
            role: "Web Developer",
            logo: "/images/duck-icon.jpg",
            startDate: "Feb 2026",
            endDate: "Present",
            description: "Working on software development and software design as part of the team, contributing to building and maintaining web applications and delivering clean, functional code."
        },
        {
            company: "Chicken Licken",
            role: "Assistant Manager",
            logo: "/images/chicken-licken.jpg",
            startDate: "2022",
            endDate: "2026",
            description: "Oversee daily restaurant operations ensuring smooth and efficient workflow across all departments. Manage and mentor staff, maintaining high standards in service quality and team performance. Ensure consistent customer satisfaction by implementing company policies and resolving issues promptly."
        }
    ],
    projects: [
        {
            id: 1,
            title: "DropForge - Secure S3 Presigned Upload Pattern",
            description: "A FastAPI backend and browser frontend implementing direct-to-S3 uploads via short-lived presigned URLs, with a locked-down IAM identity, private bucket, and least-privilege access policy.",
            image: "/images/dropforge.png",
            liveUrl: "https://github.com/MisheckGalx/dropforge",
            githubUrl: "https://github.com/MisheckGalx/dropforge",
            technologies: ["AWS S3", "IAM", "FastAPI", "Python", "CORS"]
        },
        {
            id: 2,
            title: "AWS Task Manager - Serverless REST API",
            description: "A serverless task management REST API built on API Gateway, Lambda, and DynamoDB, deployed end-to-end with CloudFormation and scoped per-function IAM roles.",
            image: "/images/aws-task-manager.png",
            liveUrl: "https://github.com/MisheckGalx/aws-task-manager",
            githubUrl: "https://github.com/MisheckGalx/aws-task-manager",
            technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation", "Python"]
        },
        {
            id: 3,
            title: "AWS Healthcare Compliance & Automated Remediation",
            description: "A serverless compliance pipeline that continuously watches S3 buckets for public-access violations, alerts via SNS, and auto-remediates with Lambda, with a full CloudTrail audit trail.",
            image: "/images/aws-healthcare-compliance-platform.png",
            liveUrl: "https://github.com/MisheckGalx/aws-healthcare-compliance-platform",
            githubUrl: "https://github.com/MisheckGalx/aws-healthcare-compliance-platform",
            technologies: ["AWS Config", "EventBridge", "Lambda", "SNS", "CloudTrail"]
        },
        {
            id: 4,
            title: "Eland Expert Engineers - Corporate Website",
            description: "A professional corporate website for an Electrical & Instrumentation engineering firm, covering power generation, water treatment, mining, and industrial automation services.",
            image: "/images/eland-expert-engineers.png",
            liveUrl: "https://github.com/MisheckGalx/Eland-expert-engineers",
            githubUrl: "https://github.com/MisheckGalx/Eland-expert-engineers",
            technologies: ["Node.js", "Express", "SQLite", "HTML", "CSS"]
        },
        {
            id: 5,
            title: "Mmanda's Sauce - E-commerce Platform",
            description: "A fully functional e-commerce web application to showcase and sell Mmanda's Sauce products online with shopping cart and order management.",
            image: "/images/mmandas.jpg",
            liveUrl: "https://mmandassauces.netlify.app/",
            githubUrl: "https://github.com/MisheckGalx/Mmanda-s-Sauces",
            technologies: ["Flask", "Python", "HTML", "CSS", "Bootstrap"]
        },
        {
            id: 6,
            title: "SDA Website Project",
            description: "Designed and developed a professional website for the SDA organization to improve online presence and community engagement.",
            image: "/images/sda.jpg",
            liveUrl: "https://clayvillegardenssdachurch.onrender.com/",
            githubUrl: "https://github.com/MisheckGalx/Clayville-Gardens-SDA-Church-Website",
            technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"]
        },
    ],
    skills: [
        { name: "Python", icon: <SiPython className="text-blue-500 dark:text-blue-400" />, color: "blue" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, color: "yellow" },
        { name: "HTML", icon: <SiHtml5 className="text-orange-600" />, color: "orange" },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" />, color: "blue" },
        { name: "React.js", icon: <SiReact className="text-cyan-400" />, color: "cyan" },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600 dark:text-green-500" />, color: "green" },
        { name: "Express.js", icon: <SiExpress className="text-gray-900 dark:text-white" />, color: "white" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 dark:text-blue-400" />, color: "blue" },
        { name: "AWS Cloud", icon: <span className="text-orange-600 text-lg">☁️</span>, color: "orange" },
        { name: "Git", icon: <SiGit className="text-orange-600" />, color: "orange" },
        { name: "GitHub", icon: <SiGithub className="text-gray-900 dark:text-white" />, color: "black" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 dark:text-teal-400" />, color: "teal" },
    ],
}
