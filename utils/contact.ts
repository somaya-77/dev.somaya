import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaSass, FaBootstrap, FaFigma, FaGit, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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
            fieldValue: "Somaya Adel El-khatteb"
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
        description: "Electro is a full-stack e-commerce web application built with Next.js for the frontend and Node.js for the backend. It provides a seamless shopping experience with two user roles: admin and regular user. Admins can manage products through a complete CRUD system, allowing them to add, update, and delete products. Users can browse products, add them to their favorites, compare different items, and complete purchases easily. The project integrates modern technologies such as Tailwind CSS, Redux Toolkit, ShadCN UI, Framer Motion, React Hook Form, and Zod for validation, along with a MongoDB database to handle data efficiently. The application offers a responsive and interactive interface, with secure authentication for both admin and user roles.",
        demo: "https://electro-nextjs.netlify.app",
        github: "https://github.com/somaya-77/Electro-Next-js",
        stack: [{ name: "next.js" }, { name: "mongodb" }, { name: "node.js" }, { name: "typescript" }, { name: "redux-toolkit" }, { name: "shadcn" }, { name: "tailwindcss" }],
        image: "/assets/electro.png",
    },
    {
        num: '02',
        category: "full-stack",
        title: "snapgram",
        description: "Snapgram is a modern social media web application built with Next.js and powered by a Node.js backend and Prisma ORM that allows users to create edit delete and save posts as well as add them to favorites the platform supports image uploads via Cloudinary enables smooth and responsive UI using Tailwind CSS and Radix UI components and integrates authentication and secure data handling using JWT and bcrypt with a fully functional CRUD system for managing posts Snapgram also features responsive design dark mode theme toggling and seamless user experience enhanced by React Query Redux Toolkit and React Hook Form",
        demo: "https://snapgram-social-media-app.netlify.app",
        github: "https://github.com/somaya-77/snapGram",
        stack: [{ name: "nextJS" }, { name: "typescript" }, { name: "prisma" }, { name: "postgress" }, { name: "tailwindcss" }],
        image: "/assets/snapgram.png",
    },
    {
        num: '03',
        category: "frontend",
        title: "comfy-store",
        description: "Comfy Store is a modern and responsive e-commerce web application built with React and Vite, offering users a seamless shopping experience. The platform allows users to browse a wide range of products with powerful filtering and search capabilities. It includes features such as quantity selection, tax calculation, and the ability to add items to the cart and proceed to checkout. The application supports both light and dark themes for an optimized user interface, and utilizes Redux Toolkit for state management, DaisyUI and Tailwind CSS for styling, and React Router for smooth navigation. With a focus on performance and user experience, Comfy Store delivers a complete and interactive online shopping solution.",
        demo: "https://comfy-store-00.netlify.app/",
        github: "https://github.com/somaya-77/Comfy-store",
        stack: [{ name: "reactJs" }, { name: "redux toolkit" }, { name: "api" }, { name: "dasyUI" }, { name: "tailwindcss" }, { name: "react router" }],
        image: "/assets/comfystore.png",
    },
    {
        num: '04',
        category: "frontend",
        title: "travel",
        description: "Travel UI is a visually captivating and fully responsive travel-themed user interface built using HTML, Sass, and JavaScript. The project showcases a refined layout with deeply structured Flexbox design, ensuring fluid alignment and responsiveness across all screen sizes. The interface delivers a clean, modern look, enhanced with professional animations that create smooth transitions and engaging interactions. Sass is used to write modular, maintainable styles with variables and mixins, enabling a scalable and well-organized styling system. The result is a polished frontend project that highlights both design aesthetics and frontend development best practices.",
        demo: "https://travel-photo.netlify.app",
        github: "https://github.com/somaya-77/Travel",
        stack: [{ name: "html" }, { name: "sass" }, { name: "javascript" }],
        image: "/assets/travel.png",
    },
    {
        num: '05',
        category: "frontend",
        title: "arceeh",
        description: "Arceeh UI is a sleek and modern frontend user interface crafted with pure HTML and CSS, inspired by the Archee design style—characterized by clean geometry, bold visuals, and architectural precision. The project delivers a professional layout with carefully structured sections and a strong emphasis on visual hierarchy. Interactive elements are seamlessly integrated, including animated transitions and the ability to open and close modal windows, enhancing user engagement. Custom animations enrich the user experience with smooth effects, while the clean, responsive structure ensures the UI performs well across devices. This project demonstrates a strong grasp of layout composition, animation techniques, and design consistency using only HTML and CSS.",
        github: "https://github.com/somaya-77/Arceeh",
        stack: [{ name: "html" }, { name: "css" }],
        image: "/assets/archee.png",
    },
    {
        num: '06',
        category: "frontend",
        title: "",
        description: "Cointech UI is a sleek and modern frontend user interface crafted with pure HTML and CSS, inspired by the Archee design style—characterized by clean geometry, bold visuals, and architectural precision. The project delivers a professional layout with carefully structured sections and a strong emphasis on visual hierarchy. Interactive elements are seamlessly integrated, including animated transitions and the ability to open and close modal windows, enhancing user engagement. Custom animations enrich the user experience with smooth effects, while the clean, responsive structure ensures the UI performs well across devices. This project demonstrates a strong grasp of layout composition, animation techniques, and design consistency using only HTML and CSS.",
        github: "https://github.com/somaya-77/Demo",
        stack: [{ name: "html" }, { name: "css" }],
        image: "/assets/demo.png",
    },
    {
        num: '07',
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
