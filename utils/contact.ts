import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaSass, FaBootstrap, FaFigma, FaGit, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDocker } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiMui, SiDaisyui, SiShadcnui, SiExpress, SiMongodb, SiTailwindcss, SiPostman, SiReactquery, SiRedux, SiAuth0, SiKubernetes } from "react-icons/si";
import { TbBrandGraphql } from "react-icons/tb";

export const info = [
    {
        icon: FaPhoneAlt,
        title: "Phone",
        description: "(+20) 120 818 8574",
    },
    {
        icon: FaEnvelope,
        title: "Email",
        description: "dev.somayaadelelkhateeb@gmail.com",
    },
    {
        icon: FaMapMarkerAlt,
        title: "Address",
        description: "Egypt",
    },
]

export const skills = {
    title: "My skills",
    description: `Frontend Developer with 3 years of experience in creating scalable web applications, enterprise dashboards, and multi-tenant SaaS platforms. Skilled in React.js, Next.js, TypeScript, Tailwind CSS, Material UI, ShadCN UI, and modern backend technologies. Passionate about building maintainable, high-performance applications and delivering seamless user experiences.`,
    skillsList: [
        // Core Web
        { icon: FaHtml5, name: "HTML5" },
        { icon: FaCss3Alt, name: "CSS3" },
        { icon: FaJsSquare, name: "JavaScript (ES6+)" },
        { icon: BiLogoTypescript, name: "TypeScript" },

        // Frontend Frameworks
        { icon: FaReact, name: "React.js" },
        { icon: RiNextjsFill, name: "Next.js (App Router & Pages Router)" },

        // State & Data
        { icon: TbBrandGraphql, name: "GraphQL" },
        { icon: SiReactquery, name: "React Query (TanStack Query)" },
        { icon: SiRedux, name: "Redux Toolkit" },

        // Styling & UI
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: FaSass, name: "Sass / SCSS" },
        { icon: SiMui, name: "Material UI" },
        { icon: SiDaisyui, name: "DaisyUI" },
        { icon: SiShadcnui, name: "ShadCN UI" },
        { icon: FaBootstrap, name: "Bootstrap" },

        // Auth & Architecture
        { icon: SiAuth0, name: "NextAuth.js" },

        // DevOps (Knowledge Level)
        { icon: FaDocker, name: "Docker (Fundamentals)" },
        { icon: SiKubernetes, name: "Kubernetes (Basic Concepts)" },

        // Tools
        { icon: FaGit, name: "Git & GitHub" },
        { icon: SiPostman, name: "Postman" },
        { icon: FaFigma, name: "Figma" },
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
        num: 17,
        text: "Projects completed",
    },
    {
        num: 5,
        text: "Technologies mastered",
    },
    {
        num: 273,
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
    description: `Frontend Developer with 3 years of experience in creating scalable web applications, enterprise dashboards, and multi-tenant SaaS platforms. Skilled in React.js, Next.js, TypeScript, Tailwind CSS, Material UI, ShadCN UI, and modern backend technologies. Passionate about building maintainable, high-performance applications and delivering seamless user experiences.`,

    info: [
        {
            fieldName: "Name",
            fieldValue: "Somaya Adel El-khatteb"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+20) 128 906 0375"
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
            fieldName: "Address",
            fieldValue: "Egypt"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Egyptian"
        },

        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "Arabic, English"
        },
        {
            fieldName: "Email",
            fieldValue: "dev.somayaadelelkhateeb@gmail.com"
        },
    ]
}

export const experience = {
    icon: "",
    title: "My Experience",
    description: `Frontend Developer with hands-on experience working in two professional environments, 
building real-world web applications using Next.js, TypeScript, and modern frontend tools. 

Experienced in implementing authentication flows, dashboards, and multi-page websites, 
with a strong focus on clean architecture, reusable components, and maintainable code. 
Worked extensively with NextAuth for session-based authentication and React Query 
for efficient server-state management.

Comfortable collaborating within teams, translating UI/UX designs into functional interfaces, 
and developing scalable features such as dark/light mode, multi-language support (Arabic & English), 
and role-based dashboards. Actively seeking opportunities to grow as a frontend developer 
in a challenging, product-driven environment.
`,
    items: [
        { company: "ComplyMarket", position: "Frontend Developer", duration: "April 2025 – Present" },
        { company: "Smartive Media", position: "Frontend Developer", duration: "March 2024 – June 2025" },
    ]
}

export const education = {
    icon: "",
    title: "My Education",
    description: `Bachelor’s degree in Computer and Information Systems from Alexandria University, with a strong foundation in web development, software engineering, and programming principles. Additional professional training in Frontend development through Udacity and Manara.`,
    items: [
        { institution: "Elevate", degree: "Frontend Development Program", specialization: "Advanced Frontend Training", duration: "Ongoing" },
        { institution: "Manara", degree: "Frontend Development Program", specialization: "Advanced Frontend Training", duration: "Ongoing" },
        { institution: "Alexandria University", degree: "Bachelor’s Degree in Computer and Information Systems", specialization: "IT Section", duration: "Graduated 2022" },
        { institution: "Udacity", degree: "Professional Web Development", specialization: "Frontend Development", duration: "Completed 2022" },
    ]
}

export const projects = [
    {
        num: '1',
        category: "frontend",
        title: "rose app",
        description:
            "A full-featured web application with authentication, website, and dashboard modules. The project supports dark and light mode, multi-language (Arabic and English localization, and secure session-based authentication using NextAuth. Built with Next.js and TypeScript, leveraging React Query for efficient server-state management, and a modern, accessible UI implemented with Shadcn and Tailwind CSS.",
        demo: "https://roseapplication.netlify.app",
        github: "https://github.com/somaya-77/RoseApp",
        stack: [{ name: "next.js" }, { name: "react query" }, { name: "typescript" }, { name: "next auth" }, { name: "shadcn" }, { name: "tailwindcss" }, { name: "i18n (EN / AR)" },
        { name: "Dark / Light Mode" },],
        image: "/assets/rose.png",
        status: "progress",
    },
    {
        num: '2',
        category: "frontend",
        title: "exam app",
        description:
            "A frontend-focused exam application featuring authentication, protected routes, and a dashboard-based architecture. Implemented using Next.js and TypeScript, with NextAuth for session management, React Query for server state handling, and Shadcn UI components styled with Tailwind CSS.",
        demo: "https://examapp3.netlify.app",
        github: "https://github.com/somaya-77/exam-app",
        stack: [{ name: "next.js" }, { name: "nextAuth" }, { name: "typescript" }, { name: "react query" }, { name: "shadcn" }, { name: "tailwindcss" }],
        image: "/assets/exam.png",

    },
    {
        num: '3',
        category: "full-stack",
        title: "electro",
        description: "Electro is a full-stack e-commerce web application built with Next.js for the frontend and Prisma ORM for the backend. It provides a seamless shopping experience with two user roles: admin and regular user. Admins can manage products through a complete CRUD system, allowing them to add, update, and delete products. Users can browse products, add them to their favorites, compare different items, and complete purchases easily. The project integrates modern technologies such as Tailwind CSS, Redux Toolkit, ShadCN UI, Framer Motion, React Hook Form, and Zod for validation, along with Prisma ORM to efficiently handle the database and data models. The application offers a responsive and interactive interface, with secure authentication for both admin and user roles.",
        demo: "https://electro-nextjs.netlify.app",
        github: "https://github.com/somaya-77/Electro-Next-js",
        stack: [{ name: "next.js" }, { name: "prisma ORM" }, { name: "typescript" }, { name: "redux-toolkit" }, { name: "shadcn" }, { name: "tailwindcss" }],
        image: "/assets/electro.png",
        status: "progress",
    },
    {
        num: '4',
        category: "full-stack",
        title: "snapgram",
        description: "Snapgram is a modern social media web application built with Next.js and powered by a Node.js backend and Prisma ORM that allows users to create edit delete and save posts as well as add them to favorites the platform supports image uploads via Cloudinary enables smooth and responsive UI using Tailwind CSS and Radix UI components and integrates authentication and secure data handling using JWT and bcrypt with a fully functional CRUD system for managing posts Snapgram also features responsive design dark mode theme toggling and seamless user experience enhanced by React Query Redux Toolkit and React Hook Form",
        demo: "https://snapgram-social-media-app.netlify.app",
        github: "https://github.com/somaya-77/snapGram",
        stack: [{ name: "nextJS" }, { name: "typescript" }, { name: "prisma" }, { name: "postgress" }, { name: "tailwindcss" }],
        image: "/assets/snapgram.png",
    },
    {
        num: '5',
        category: "frontend",
        title: "comfy-store",
        description: "Comfy Store is a modern and responsive e-commerce web application built with React and Vite, offering users a seamless shopping experience. The platform allows users to browse a wide range of products with powerful filtering and search capabilities. It includes features such as quantity selection, tax calculation, and the ability to add items to the cart and proceed to checkout. The application supports both light and dark themes for an optimized user interface, and utilizes Redux Toolkit for state management, DaisyUI and Tailwind CSS for styling, and React Router for smooth navigation. With a focus on performance and user experience, Comfy Store delivers a complete and interactive online shopping solution.",
        demo: "https://comfy-store-00.netlify.app/",
        github: "https://github.com/somaya-77/Comfy-store",
        stack: [{ name: "reactJs" }, { name: "redux toolkit" }, { name: "api" }, { name: "dasyUI" }, { name: "tailwindcss" }, { name: "react router" }],
        image: "/assets/comfystore.png",
    },
    {
        num: '6',
        category: "frontend",
        title: "travel",
        description: "Travel UI is a visually captivating and fully responsive travel-themed user interface built using HTML, Sass, and JavaScript. The project showcases a refined layout with deeply structured Flexbox design, ensuring fluid alignment and responsiveness across all screen sizes. The interface delivers a clean, modern look, enhanced with professional animations that create smooth transitions and engaging interactions. Sass is used to write modular, maintainable styles with variables and mixins, enabling a scalable and well-organized styling system. The result is a polished frontend project that highlights both design aesthetics and frontend development best practices.",
        demo: "https://travel-photo.netlify.app",
        github: "https://github.com/somaya-77/Travel",
        stack: [{ name: "html" }, { name: "sass" }, { name: "javascript" }],
        image: "/assets/travel.png",
    },
    {
        num: '7',
        category: "frontend",
        title: "arceeh",
        description: "Arceeh UI is a sleek and modern frontend user interface crafted with pure HTML and CSS, inspired by the Archee design style—characterized by clean geometry, bold visuals, and architectural precision. The project delivers a professional layout with carefully structured sections and a strong emphasis on visual hierarchy. Interactive elements are seamlessly integrated, including animated transitions and the ability to open and close modal windows, enhancing user engagement. Custom animations enrich the user experience with smooth effects, while the clean, responsive structure ensures the UI performs well across devices. This project demonstrates a strong grasp of layout composition, animation techniques, and design consistency using only HTML and CSS.",
        github: "https://github.com/somaya-77/Arceeh",
        stack: [{ name: "html" }, { name: "css" }],
        image: "/assets/archee.png",
    },
    {
        num: '8',
        category: "frontend",
        title: "Cointech",
        description: "Cointech UI is a sleek and modern frontend user interface crafted with pure HTML and CSS, inspired by the Archee design style—characterized by clean geometry, bold visuals, and architectural precision. The project delivers a professional layout with carefully structured sections and a strong emphasis on visual hierarchy. Interactive elements are seamlessly integrated, including animated transitions and the ability to open and close modal windows, enhancing user engagement. Custom animations enrich the user experience with smooth effects, while the clean, responsive structure ensures the UI performs well across devices. This project demonstrates a strong grasp of layout composition, animation techniques, and design consistency using only HTML and CSS.",
        github: "https://github.com/somaya-77/Demo",
        stack: [{ name: "html" }, { name: "css" }],
        image: "/assets/demo.png",
    },
    {
        num: '9',
        category: "frontend",
        title: "brave",
        description: "Brave UI is a sleek and modern frontend user interface crafted with pure HTML and CSS, inspired by the Archee design style—characterized by clean geometry, bold visuals, and architectural precision. The project delivers a professional layout with carefully structured sections and a strong emphasis on visual hierarchy. Interactive elements are seamlessly integrated, including animated transitions and the ability to open and close modal windows, enhancing user engagement. Custom animations enrich the user experience with smooth effects, while the clean, responsive structure ensures the UI performs well across devices. This project demonstrates a strong grasp of layout composition, animation techniques, and design consistency using only HTML and CSS.",
        github: "https://github.com/somaya-77/Brave",
        stack: [{ name: "html" }, { name: "css" }],
        image: "/assets/brave.png",
    },
    //     {
    //     num: '05',
    //     category: "frontend",
    //     title: "",
    //     description: "",
    //     demo: "",
    //     github: "",
    //     stack: [{ name: "" }, { name: "" }, { name: "" }],
    //     image: "http://grgreferf",
    // },
    //     {
    //     num: '05',
    //     category: "frontend",
    //     title: "archee",
    //     description: "",
    //     demo: "",
    //     github: "",
    //     stack: [{ name: "" }, { name: "" }, { name: "" }],
    //     image: "http://grgreferf",
    // },

]
