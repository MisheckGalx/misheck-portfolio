cat > src/data/portfolioData.jsx << 'EOF'
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
    SiAmazonaws
} from "react-icons/si";

export const portfolioData = {
    personal: {
        name: "Misheck Gogo",
        age: 25,
        roles: ["Software Engineer", "Full Stack Developer"],
        about: "I'm a passionate software engineer who transitioned from hospitality management to tech in 12 months through self-study. I specialize in full-stack development with expertise in Python, JavaScript, and cloud platforms. I've built 3 full-stack applications deployed on cloud platforms and was among the top 10 finalists (out of 700) in ALX Africa's Software Engineering program. I'm dedicated to creating clean, responsive web applications and currently pursuing AWS Cloud Engineering certification.",
        social: {
            email: "mailto:misheckgogo45@gmail.com",
            github: "https://github.com/MisheckGalx",
            linkedin: "https://www.linkedin.com/in/misheck-gogo/",
            whatsapp: "https://wa.me/27680970160?text=Hi%20Misheck,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you"
        },
        location: "Zimbabwe",
        phone: "+27 680 970 160"
    },
    workExperience: [
        {
            company: "Chicken Licken",
            role: "Assistant Manager",
            logo: "CL",
            startDate: "2021",
            endDate: "2026",
            description: "Oversee daily restaurant operations ensuring smooth and efficient workflow across all departments. Manage and mentor staff, maintaining high standards in service quality and team performance. Ensure consistent customer satisfaction by implementing company policies and resolving issues promptly."
        }
    ],
    projects: [
        {
            id: 1,
            title: "CoinTrack - Personal Finance Tracker",
            description: "A personal finance tracker for managing income and expenses with transaction tracking, spending categorization, and data visualization.",
            image: "https://via.placeholder.com/400x250/667eea/ffffff?text=CoinTrack",
            liveUrl: "https://github.com/MisheckGalx",
            githubUrl: "https://github.com/MisheckGalx",
            technologies: ["Flask", "Python", "Bootstrap", "SQLite", "OOP"]
        },
        {
            id: 2,
            title: "Mmanda's Sauce - E-commerce Platform",
            description: "A fully functional e-commerce web application to showcase and sell Mmanda's Sauce products online with shopping cart and order management.",
            image: "https://via.placeholder.com/400x250/f093fb/ffffff?text=Mmandas+Sauce",
            liveUrl: "https://github.com/MisheckGalx",
            githubUrl: "https://github.com/MisheckGalx",
            technologies: ["Flask", "Python", "HTML", "CSS", "Bootstrap"]
        },
        {
            id: 3,
            title: "SDA Website Project",
            description: "Designed and developed a professional website for the SDA organization to improve online presence and community engagement.",
            image: "https://via.placeholder.com/400x250/4facfe/ffffff?text=SDA+Website",
            liveUrl: "https://github.com/MisheckGalx",
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
        { name: "AWS Cloud", icon: <SiAmazonaws className="text-orange-600" />, color: "orange" },
        { name: "Git", icon: <SiGit className="text-orange-600" />, color: "orange" },
        { name: "GitHub", icon: <SiGithub className="text-gray-900 dark:text-white" />, color: "black" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 dark:text-teal-400" />, color: "teal" },
    ],
}
EOF
