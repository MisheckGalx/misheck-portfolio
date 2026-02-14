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
        roles: ["Software Engineer", "Cloud Architect"],
        profileImage: "/images/profile.jpg",
        about: "I'm a results driven Full Stack Software Engineer passionate about building robust, scalable, and high performance applications. I specialize in Python, React.js, and designing RESTful APIs, with a strong focus on backend architecture, cloud technologies, and delivering seamless user experiences. My experience includes API development, database design, cloud platforms, and modern web technologies",
        social: {
            email: "mailto:misheckgogo45@gmail.com",
            github: "https://github.com/MisheckGalx",
            linkedin: "https://linkedin.com/in/misheckgogo/",
            X: "https://x.com/kingboris28"
        },
        location: "South Africa",
        phone: "+27 680 970 160"
    },
    workExperience: [
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
            title: "CoinTrack - Personal Finance Tracker",
            description: "A personal finance tracker for managing income and expenses with transaction tracking, spending categorization, and data visualization.",
            image: "/images/cointrack.jpg",
            liveUrl: "https://github.com/MisheckGalx",
            githubUrl: "https://github.com/MisheckGalx",
            technologies: ["Flask", "Python", "Bootstrap", "SQLite", "OOP"]
        },
        {
            id: 2,
            title: "Mmanda's Sauce - E-commerce Platform",
            description: "A fully functional e-commerce web application to showcase and sell Mmanda's Sauce products online with shopping cart and order management.",
            image: "/images/mmandas.jpg",
            liveUrl: "https://github.com/MisheckGalx",
            githubUrl: "https://github.com/MisheckGalx",
            technologies: ["Flask", "Python", "HTML", "CSS", "Bootstrap"]
        },
        {
            id: 3,
            title: "SDA Website Project",
            description: "Designed and developed a professional website for the SDA organization to improve online presence and community engagement.",
            image: "/images/sda.jpg",
            liveUrl: "https://clayvillegardens.pythonanywhere.com/",
            githubUrl: "https://github.com/MisheckGalx",
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
