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
  carrent,
  jobit,
  tripguide,
  threejs,
  vue,
  django,
  premier,
  aftereffect,
} from "../assets";
import { GiSofa } from 'react-icons/gi';
import { FaDraftingCompass, FaPaintBrush } from 'react-icons/fa';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const projectSections = [
  { id: "projects-interior", title: "Interior" },
  { id: "projects-architecture", title: "Architecture" },
  { id: "projects-branding", title: "Branding" },
];

const services = [
  {
    title: "Interior Design",
    icon: GiSofa,
  },
  {
    title: "Architectural Design",
    icon: FaDraftingCompass,
  },
  {
    title: "Branding Design",
    icon: FaPaintBrush,
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
    name: "Vuejs",
    icon: vue,
  },
  // {
  //   name: "Django",
  //   icon: django,
  // },
  {
    name: "figma",
    icon: figma,
  },  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "After Effect",
  //   icon: aftereffect,
  // },
  // {
  //   name: "Premier Pro",
  //   icon: premier,
  // },
];

const experiences = [
  {
    title: "Full Stack Developer | Intern",
    company_name: "RDX",
    icon: starbucks,
    iconBg: "#FF7F50",
    date: "July 2023 - Dec 2023",
    points: [
      "Developed a habit tracker web app .",
      "Implemented the front end using Tailwind CSS and React.js",
      "Constructed a RESTful API using Node.js and Express.js",
      "Utilized MongoDB as the database solution",
      "Actively collaborated with the team using GitHub for version control",
    ],
  },
  {
    title: "Graphics Designn",
    company_name: "Upwork",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2023 - Present",
    points: [
      "Proficient in Adobe Illustrator and  Canva ",
      "Skilled in logo Design and Branding",
    ],
  },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
