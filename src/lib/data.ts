import {
  Experience,
  Knowledge,
  KnowledgeSidebarLinks,
  Link,
  Project,
} from "./definitions";

const links: Link[] = [
  {
    id: 1,
    url: "/",
    name: "Home",
  },
  {
    id: 2,
    url: "/knowledge",
    name: "Knowledge",
  },
  {
    id: 3,
    url: "/experience",
    name: "Experience",
  },
  {
    id: 4,
    url: "/projects",
    name: "Projects",
  },
  {
    id: 5,
    url: "/about",
    name: "About",
  },
  {
    id: 6,
    url: "/contact",
    name: "Contact",
  },
  {
    id: 7,
    url: "/cv",
    name: "CV",
  },
];

const experience: Experience[] = [
  {
    id: 1,
    title: "Infantry Cadet - Air Force Academy",
    date: "Jan 21 - Jul 22",
    img_url: "/images/experience/military-2.jpg",
    img_url_2: "/images/experience/military.jpg",
    description:
      "Completed over a year of military formation focused on leadership, resilience, ethical decision-making, and collective responsibility, while developing mental discipline and a commitment to public service.",
    badges: ["Discipline", "Leadership", "Teamwork", "Ethics"],
  },
  {
    id: 2,
    title: "Bachelor's in Software Engineering - PUC Minas",
    date: "Jan 23 - Dec 26",
    img_url: "/images/experience/puc-2.jpg",
    img_url_2: "/images/experience/puc.jpg",
    description:
      "Enrolled in a program focused on developing modern software solutions with scalable architectures, practical application of agile methodologies, and strong foundations in software engineering theory and practice.",
    badges: ["Scrum", "Architecture", "Agile", "OOP", "DB Design"],
  },
  {
    id: 3,
    title: "Tech Lead at WebTech - PUC Minas Extension Project",
    date: "May 23 - Dec 23",
    img_url: "/images/home/webtech.jpg",
    img_url_2: "/images/experience/webtech.jpg",
    description:
      "Led the redesign of the postgraduate education portal at PUC Minas, focusing on usability, accessibility, and a cleaner information architecture to better serve prospective and current students.",
    badges: ["React.js", "TailwindCSS", "Leadership", "Comunication"],
  },
  {
    id: 4,
    title: "Web Interface Development Monitor - PUC Minas",
    date: "Aug 23 - Dec 23",
    img_url: "/images/experience/workshop.jpg",
    description:
      "Mentored students in web interface design principles, providing personalized guidance and organizing hands-on workshops to bridge theoretical learning with real-world tools and practices.",
    badges: ["HTML", "CSS", "JavaScript", "Git", "Teaching"],
  },
  {
    id: 5,
    title: "Software Development Intern - DTI Digital",
    date: "Oct 24 - Jan 25",
    img_url: "/images/experience/dti-2.png",
    img_url_2: "/images/experience/dti.jpg",
    description:
      "Contributed to high-availability digital solutions for enterprise clients, ensuring continuous delivery and close alignment with user needs through direct client interaction and agile delivery pipelines.",
    badges: ["React.js", "C#", "Agile", "Client Communication"],
  },
  {
    id: 6,
    title: "Software Development Intern & Software Development Junior - 90TI",
    date: "Jan 25 - Today",
    description:
      "Collaborating on the evolution of a comprehensive ERP platform tailored for the civil construction industry. The system optimizes project workflows, cost estimation, and resource allocation for engineering firms across Brazil.",
    badges: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "C#", "Scrum"],
  },
];

const projects: Project[] = [
  {
    id: "1",
    title: "Nextree",
    description:
      "A Visual Studio Code extension that provides an interactive dependency visualizer for Next.js applications, analyzing project structure and creating visual dependency trees.",
    github: "https://github.com/bragap/nextree",
    deploy: "",
    img_url: "/images/projects/nextree.png",
    img_url_lp: "/images/projects/nextree.png",
    summary:
      "VS Code extension that scans Next.js projects and creates interactive dependency graphs showing how pages, components, and stores are connected.",
    motivation:
      "Help developers understand component relationships and navigate large Next.js codebases more effectively through visual dependency analysis.",
    role: "Solo developer responsible for the entire extension architecture, file analysis algorithms, and React-based visualization interface.",
    techs: ["TypeScript", "VS Code API", "ReactFlow", "Node.js", "Regex"],
    ui: "Interactive dependency graphs with color-coded nodes (client components in green, server components in blue, stores in orange) and smooth navigation using ReactFlow.",
    challenges:
      "Implementing accurate file parsing with regex patterns, handling complex import resolution, and creating performant visualizations for large codebases.",
    lessons:
      "Learned VS Code extension development, advanced file system operations, and how to build interactive data visualizations. Improved understanding of static code analysis techniques.",
  },
  {
    id: "2",
    title: "MindRush",
    description:
      "A gamification-based learning platform inspired by Kahoot! that facilitates the teaching-learning process through interactive real-time quizzes with AI-generated content.",
    github: "https://github.com/bragap/mindrush",
    deploy: "",
    figma: "https://www.figma.com/design/DcDtqzVkWQUl8jz5oM1LvG/MindRUSH?node-id=2-2&t=upprFYfSZKp2itA4-1",
    img_url: "/images/projects/mindrush.png",
    img_url_lp: "/images/projects/mindrush-lp.png",
    summary:
      "Educational platform that allows educators to create and apply personalized quizzes in real-time, while students participate synchronously with immediate feedback and dynamic rankings.",
    motivation:
      "Enhance the learning experience by creating an interactive environment that increases student engagement through gamification and AI-powered quiz generation.",
    role: "Mobile developer in a 6-person team, responsible for the development and real-time quiz functionality.",
    techs: ["Next.js", "React.js", "TypeScript", "WebSockets", "Flutter", "AI Integration"],
    ui: "Gamified interface with real-time leaderboards, interactive quiz components, and responsive design optimized for both web and mobile experiences.",
    challenges:
      "Implementing real-time synchronization between multiple users, integrating AI for quiz generation, and coordinating development between web and mobile platforms.",
    lessons:
      "Gained experience in real-time applications, team collaboration in larger projects, and integrating AI services into educational workflows.",
  },
  {
    id: "3",
    title: "PUC Minas Postgraduate Website",
    description:
      "Official website for the Digital Technologies Postgraduate program at PUC Minas, built with React.js and Node.js.",
    github: "https://github.com/webtech-network",
    deploy: "https://icei.pucminas.br/latosensu/",
    img_url: "/images/projects/puc.png",
    img_url_lp: "/images/projects/puc-lp.png",
    summary:
      "Institutional website for the Postgraduate Program in Digital Technologies at PUC Minas, providing course information, application steps, and contact channels.",
    motivation:
      "Create a professional digital presence that aligns with the university's quality standards.",
    role: "front-end developer responsible for building the UI components, integrating APIs, and ensuring responsiveness.",
    techs: ["React.js", "CSS", "ContextAPI", "Axios"],
    ui: "Used Bootstrap grid system for layout, ensured clear visual hierarchy and mobile compatibility across pages.",
    challenges:
      "This project marked my first experience with React.js. It was a great opportunity to dive into its component-based architecture and better understand state management.",
    lessons:
      "Built a strong foundation in React.js fundamentals, including component architecture, props, and state management. This experience also improved my ability to read documentation and debug issues independently.",
  },
  {
    id: "4",
    title: "Accessibility NextJS Starter Kit",
    description:
      "A straightforward and user-friendly Next.js 15 starter template designed with a strong focus on accessibility.",
    github: "https://github.com/bragap/nextjs-accessibility-starter",
    deploy: "https://nextjs-accessibility-starter.vercel.app/",
    img_url: "/images/projects/acc.png",
    img_url_lp: "/images/projects/acc-lp.png",
    summary:
      "Starter kit for building accessible web apps with Next.js 15 and TailwindCSS, including keyboard navigation and screen reader support.",
    motivation:
      "Make accessibility the default instead of an afterthought for new Next.js projects.",
    role: "Sole developer and designer. Responsible for architecture, component system, and accessibility standards implementation.",
    techs: ["Next.js", "TailwindCSS", "ESLint a11y plugin", "TypeScript"],
    ui: "Design inspired by minimalism and high contrast ratios to improve visual accessibility. Uses semantic HTML and ARIA labels.",
    challenges:
      "Ensuring compliance with WCAG 2.1 standards and testing keyboard-only navigation edge cases.",
    lessons:
      "Learned how to bake accessibility into the development lifecycle and not treat it as a separate step.",
  },
  {
    id: "5",
    title: "E-commerce - Atacarejo Fernando",
    description:
      "Award-winning interdisciplinary academic project. Built a full-stack e-commerce platform tailored to the client's business needs.",
    github:
      "https://github.com/bragap/e-commerce-atacarejo-fernando",
    deploy: "",
    figma:"https://www.figma.com/design/3egYX6j86KNv1zrJxrmLni/Atacarejo-Fernando---TI4?node-id=0-1&t=ER9Vns0j2Ic4PrZq-1",
    img_url: "/images/projects/atacarejo.png",
    img_url_lp: "/images/projects/atacarejo.png",
    summary:
      "End-to-end e-commerce platform simulating real client needs, including product catalog, cart system, and admin dashboard.",
    motivation:
      "Translate a real-world business scenario into a full-stack application with direct stakeholder feedback.",
    role: "Fullstack developer with focus on front-end UX and product listing flow.",
    techs: ["React.js", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    ui: "Prioritized intuitive flows for add-to-cart and admin inventory management. Used card-based UI for product display.",
    challenges:
      "Coordinating front-end and backend between a 4-person team; integrated payment flow mock and stock control system.",
    lessons:
      "Learned to work under constraints and balance technical implementation with user needs and client vision.",
  },
  {
    id: "6",
    title: "Netflix UI Clone with React.js and Tailwind",
    description:
      "Deepened front-end skills through a responsive, mobile-first Netflix UI clone, integrating The Movie DB API for dynamic content.",
    github: "https://github.com/bragap/netflix-react-tailwind",
    deploy: "https://netflix-react-tailwind-seven.vercel.app/",
    img_url: "/images/projects/netflix.png",
    img_url_lp: "/images/projects/netflix.png",
    summary:
      "Clone of Netflix's main UI with dynamic movie data, simulating streaming experience including hover previews and responsive layout.",
    motivation:
      "Practice integrating external APIs and creating a polished UI with modern front-end tools.",
    role: "Solo developer. Built all features from scratch including dynamic routing and API handling.",
    techs: ["React.js", "TailwindCSS", "The Movie DB API", "Vite"],
    ui: "Faithful reproduction of Netflix's design. Implemented carousels, modal previews, and mobile optimization.",
    challenges:
      "Carousel scrolling logic and handling image resolutions across devices.",
    lessons:
      "Strengthened API integration knowledge and attention to detail in replicating commercial-grade UIs.",
  },
  {
    id: "7",
    title: "E-commerce - De Pinho Multimídia",
    description:
      "E-commerce platform developed using JavaScript, Java, and PostgreSQL for a local multimedia company. Deployed with Vercel.",
    github: "https://github.com/bragap/de-pinho-multimidias",
    deploy:
      "https://plf-es-2024-1-ti3-8966100-de-pinho-multimidias.vercel.app/",
    img_url: "/images/projects/depinho.png",
    img_url_lp: "/images/projects/depinho-lp.png",
    summary:
      "Platform for selling multimedia products (cameras, accessories, etc.) with product filtering, authentication, and admin dashboard.",
    motivation:
      "Help a local business prototype their online store using modern web technologies.",
    role: "front-end lead in a 4-person team. Worked on the product pages, filters, and checkout experience.",
    techs: ["JavaScript", "Java (Spring Boot)", "PostgreSQL", "TailwindCSS"],
    ui: "Used clean typography and large product imagery to emphasize product value. Applied consistent spacing for better scannability.",
    challenges:
      "Connecting front-end with Spring Boot backend; managing filter state and authentication flow.",
    lessons:
      "Improved teamwork in full-stack scenarios and learned to deliver in academic sprints while meeting business goals.",
  },
];

const knowledge_sidebar: KnowledgeSidebarLinks[] = [
  {
    id: 1,
    title: "Next.js",
    link: "/knowledge/next-js",
  },
  {
    id: 2,
    title: "React.js",
    link: "/knowledge/react-js",
  },
  {
    id: 3,
    title: "CSS",
    link: "/knowledge/css",
  },
  {
    id: 4,
    title: "Life",
    link: "/knowledge/life",
  },
];

const popular_content: KnowledgeSidebarLinks[] = [
  {
    id: 1,
    title: "How to center a div",
    link: "/knowledge/next-js",
  },
  {
    id: 2,
    title: "Why Tanstack Query?",
    link: "/knowledge/react-js",
  },
  {
    id: 3,
    title: "CSR? SSR? WHAT??",
    link: "/knowledge/css",
  },
];

const knowledge: Knowledge[] = [
  {
    id: 1,
    title: "How to center a div",
    subtitle: "Content generated by ChatGPT",
    resume: "Content generated by ChatGPT",
    link: "/knowledge/css/how-to-center-a-div",
    content: "Content generated by ChatGPT",
    subcontent: "Content generated by ChatGPT",
    references: "Content generated by ChatGPT",
    topics: [
      {
        id: 1,
        name: "Horizontal Centering (Block)",
        url: "#horizontal-block-centering",
      },
      {
        id: 2,
        name: "Horizontal Centering (Inline)",
        url: "#horizontal-inline-centering",
      },
      { id: 3, name: "Flexbox Centering", url: "#flexbox-centering" },
      { id: 4, name: "CSS Grid Centering", url: "#css-grid-centering" },
      {
        id: 5,
        name: "Absolute Positioning & Transform",
        url: "#absolute-positioning-transform",
      },
    ],
  },
];

export {
  links,
  experience,
  projects,
  knowledge_sidebar,
  popular_content,
  knowledge,
};
