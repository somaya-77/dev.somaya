import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaSass, FaBootstrap, FaFigma, FaGit, FaPhoneAlt,FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiMui, SiDaisyui, SiShadcnui, SiExpress, SiMongodb, SiTailwindcss, SiPostman } from "react-icons/si";
import { TbBrandGraphql } from "react-icons/tb";

export const info = [
    {
        icon: FaPhoneAlt,
        title: "Phone",
        description: "(+20) 120 592 8111",
    },
    {
        icon: FaEnvelope,
        title: "Email",
        description: "alkhtybsmytadl@gmail.com",
    },
    {
        icon: FaMapMarkerAlt,
        title: "Address",
        description: "Cairo, Egypt",
    },
]

export const skills = {
    title: "My skills",
    description: "I have hands-on experience in modern front-end and back-end development, crafting responsive, scalable, and maintainable web applications. My technical expertise spans a wide range of tools and frameworks, enabling me to build seamless digital experiences from concept to deployment.",
    skillsList: [
        {
            icon: FaHtml5,
            name: "html 5",
        },
        {
            icon: FaCss3Alt,
            name: "css 3",
        },
        {
            icon: FaJsSquare,
            name: "javascript",
        },
        {
            icon: BiLogoTypescript,
            name: "typescript",
        },
        {
            icon: FaReact,
            name: "react.js",
        },
        {
            icon: RiNextjsFill,
            name: "next.js",
        },
        {
            icon: TbBrandGraphql,
            name: "graphql",
        },
        {
            icon: FaNode,
            name: "nodeJS",
        },
        {
            icon: SiExpress,
            name: "express",
        },
        {
            icon: SiMongodb,
            name: "mongodb",
        },
        {
            icon: SiTailwindcss,
            name: "tailwind.css",
        },
        {
            icon: FaBootstrap,
            name: "bootstrap.css",
        },
        {
            icon: FaSass,
            name: "sass",
        },
        {
            icon: SiMui,
            name: "material-ui",
        },
        {
            icon: SiDaisyui,
            name: "daisyui",
        },
        {
            icon: SiShadcnui,
            name: "shadcn ui",
        },

        {
            icon: FaFigma,
            name: "figma",
        },
        {
            icon: SiPostman,
            name: "postman",
        },
        {
            icon: FaGit,
            name: "git",
        },
    ]
}
export const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    }
]

export const state = [
    {
        num: 3,
        text: "Years of experience",
    },
    {
        num: 26,
        text: "Projects completed",
    },
    {
        num: 8,
        text: "Technologies mastered",
    },
    {
        num: 500,
        text: "Code commits",
    },
];

export const services = [
    {
        num: "01",
        title: 'Front-end Developer',
        description: "Specializing in translating design into clean, optimized, and maintainable code using frameworks like React and tools like Tailwind CSS to create dynamic and interactive user interfaces.",
        href: "",
    },
    {
        num: "02",
        title: 'FullStack Developer',
        description: "Delivering complete web solutions by developing both client-side and server-side applications, integrating databases, APIs, and ensuring smooth deployment and scalability.",
        href: "",
    },
]

export const about = {
    title: "About me",
    description: `Front-End Developer with over 2 years of experience in building responsive, user-centric, and scalable web 
applications using React.js, TypeScript, and Next.js. Proficient in creating modern, accessible, and elegant user 
interfaces using Tailwind CSS, Material UI, and ShadCN UI. Skilled in writing clean, maintainable code and delivering 
high-performance UIs. Passionate about seamless user experience and working in agile teams to develop impactful 
digital solutions.`,
    info: [
        {
            fieldName: "Name",
            fieldValue: "Somaya El-khatteb"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+20) 120 592 8111"
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ Years"
        },
            {
            fieldName: "WhatsApp",
            fieldValue: "(+20) 120 818 8574"
        },
       
        {
            fieldName: "Nationality",
            fieldValue: "Egyptian"
        },
        {
            fieldName: "Email",
            fieldValue: "alkhtybsmytadl@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "Arabic, English"
        },
    ]
}

export const experience = {
    icon: "",
    title: "My experience",
    description: `Led the development of a scalable and user-friendly control panel for a large-scale project, significantly improving both user experience and system functionality.  including architectural planning, deployment, and seamless GitHub integration with version control best practices.
Collaborated closely with the team leader to delegate tasks, conduct thorough code reviews, and maintain an efficient development workflow.
Enhanced technical expertise in React, Redux Toolkit, Tailwind CSS, Zod, React Query, and other modern front-end technologies.
Acquired in-depth experience in API integration, as well as state and data management in complex applications. Demonstrated strong problem-solving abilities by overcoming technical challenges and consistently applying clean code and industry best practices.`,
    items: [
        {
            company: "Smartive media.",
            position: "Front-End Developer",
            duration: "2024 - Present",
        }
    ]
}

export const education = {
    icon: "",
    title: "My education",
    description: `I hold a strong academic background in software development, having earned a Bachelor’s degree in Computer and Information Systems from Alexandria University. During my academic journey, I developed a solid understanding of web development, programming, and software engineering principles—both in theory and in practice.

My education provided me with the technical foundation and critical thinking skills necessary to design and build efficient, user-centric web applications. I was actively involved in team projects, which not only strengthened my collaboration and communication abilities but also nurtured leadership skills essential for working in dynamic development environments.`,

    items: [
        {
            institution: "Alexandria University",
            degree: "Bachelor’s Degree in Computer and Information Systems",
            duration: "Graduated in 2022",
            specialization: "It Section",
        },
        {
            institution: "Udacity",
            degree: "Professional Web Development Nanodegree",
            specialization: "Front-End Development",
            duration: "Completed in 2022",
        },
        {
            institution: "Manara",
            degree: "Front-End Development Program",
            specialization: "Advanced Front-End Development Training",
            duration: "Ongoing",
        },
    ]

}

export const projects = [
    {
        num: '01',
        category: "full-stack",
        title: "electro",
        description: "gt5g65yh767 7j7u7",
        demo: "electro-nextjs.netlify.app",
        github: "",
        stack: [{ name: "nextJS" }, { name: "css" }, { name: "NodeJS" }],
        image: "http://ghyhtrgregf",
    },
    {
        num: '02',
        category: "full-stack",
        title: "snapgram",
        description: "",
        demo: "snapgram-social-media-app.netlify.app",
        github: "",
        stack: [{ name: "nextJS" }, { name: "prisma" }, { name: "postgress" }],
        image: "http://gerfrefe",
    },
    {
        num: '03',
        category: "frontend",
        title: "comfy-store",
        description: "",
        demo: "comfy-store-00.netlify.app",
        github: "",
        stack: [{ name: "reactJs" }, { name: "redux toolkit" }, { name: "dasyUI" }],
        image: "http://grgref",
    },
    {
        num: '04',
        category: "frontend",
        title: "travel",
        description: "",
        demo: "travel-photo.netlify.app",
        github: "",
        stack: [{ name: "sass" }, { name: "javascript" }, { name: "" }],
        image: "http://grfrefr",
    },
    {
        num: '05',
        category: "frontend",
        title: "",
        description: "",
        demo: "",
        github: "",
        stack: [{ name: "" }, { name: "" }, { name: "" }],
        image: "http://grgreferf",
    },
]
