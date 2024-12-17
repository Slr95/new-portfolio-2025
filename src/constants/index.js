import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  project1,
  project2,
  project3,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
  {
    id: "linkedin",
    title: "Linkedin",
    link: "https://www.linkedin.com/in/renzo-soler-847654196/",
  },
];

const services = [
  {
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FrontEnd Developer",
    company_name: "Esolutions",
    icon: javascript,
    iconBg: "#383E56",
    date: "Octubre 2021 - Agosto 2023",
    points: [
      "Desarrollo de aplicaciones web con React, Next,Typescript y Node: creación de componentes reutilizables, colaboración efectiva en equipos multidisciplinarios, diseño responsive y mantenimiento continuo.",
      "Análisis y estimaciones: Aplicación de metodologías ágiles para planificar y estimar tareas de manera precisa y eficiente.",
      "Code review: revisiones de codigo detallado, brindando retroalimentación constructiva y promoviendo el trabajo en equipo.",
      "Mentorías: Tutorías y orientación a nuevos miembros del equipo, además de colaborar en la creación de programas de formación interna.",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "Codefend",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Septiembre 2023 - Actualidad",
    points: [
      "Desarrollo de funcionalidades en un dashboard interactivo utilizando React y TypeScript, asegurando una experiencia de usuario fluida y optimizada. ",
      "Implementacion componentes reutilizables y modulares para mejorar la mantenibilidad y escalabilidad del código.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Colaboracion en la integración de APIs REST para mostrar datos dinámicos y en tiempo real en un dashboard.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio Web",
    description:
      "Este repositorio es mi porfolio personal, construido con React.js, Three.js, React Three Fiber y Tailwind CSS. Utilizo EmailJS para formularios de contacto y Vite para un desarrollo rápido. El proyecto demuestra mis habilidades como desarrollador frontend, creando experiencias interactivas y responsivas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind ",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Slr95/new-portfolio-2025",
  },
  {
    name: "Horoscope landing",
    description:
      "Aplicación web interactiva desarrollada con React para consultar predicciones diarias de los signos del zodiaco. Permite visualizar los horóscopos en formato de lista o cuadrícula, con opciones de filtrado y ordenamiento. La aplicación consume una API externa para obtener las predicciones, cuenta con manejo de errores mediante un ErrorBoundary e incluye pruebas unitarias con React Testing Library utilizando datos mock para simular la respuesta de la API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Slr95/horoscope-landing/tree/master",
  },
  {
    name: "Portfolio anterior",
    description: "Una versión anterior de mi portfolio web con nextjs",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Slr95/Portfolio2",
  },
];

export { services, technologies, experiences, testimonials, projects };
