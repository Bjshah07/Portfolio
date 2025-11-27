import {
  backend,
  web,

  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  fire,
  bootstrap,
  powerBI,
  express,

  pentagon,
  codSoft,
  proace,

  travel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "FIrebase",
    icon: fire,
  },
  {
    name: "Power BI",
    icon: powerBI,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
];

const experiences = [
  {
    title: "Industrial Training",
    company_name: "Pro-Ace Infotech",
    icon: proace,
    iconBg: "#2f2f2f",
    date: "Jun 2024 - July 2024",
    points: [
      "Completed a 6-week industrial/web designing training at PRO-ACE INFOTECH, an ISO-certified organization specializing in IT, and web technologies.",
      "Received training exposure backed by the company’s decade-long expertise in Web Designing, Web Development, and modern IT skills.",
      "The program emphasized delivering high-quality, industry-relevant learning, focusing on both technical depth and practical application.",
      "Training was officially confirmed for June 2024 under the B.Tech Computer Engineering curriculum, ensuring structured guidance and professional development.",
    ],
  },
  {
    title: "Frontend Intern",
    company_name: "CodSoft IT Services",
    icon: codSoft,
    iconBg: "#E6DEDD",
    date: "1 July 2024 - 31 July 2024",
    points: [
      "Developed a responsive Amazon homepage clone using HTML and CSS, implementing real-world UI/UX elements such as a search bar, navigation panel, and product grid.",
      "Built a JavaScript-based calculator with dynamic DOM manipulation and styled it using custom CSS for a clean and interactive user interface",
      " Created a fully functional Personal Portfolio website using Tailwind CSS, integrating dark mode, smooth scrolling, and a responsive hamburger menu.",
    ],
  },
  {
    title: "MERN Stack Trainee",
    company_name: "Pentagon Space",
    icon: pentagon,
    iconBg: "#040404",
    date: "July 2025 - Nov 2025",
    points: [
      "Developed a responsive MERN-based tourism platform with React, Node.js, Express, MongoDB, Vite, Tailwind, and a separate admin panel.",
      "Implemented JWT + Firebase authentication, destination management, booking flow, Razorpay payments, Cloudinary media handling, and role-based admin controls.",
      "Improved application reliability with ~95% frontend test coverage and optimized APIs to ~150ms, sustaining ~50 concurrent requests/sec.",
      "Utilized Git/GitHub, Postman, dotenv, Bcrypt, Multer, and Agile practices with CI/CD-ready deployments.",
    ],
  },
];


const projects = [
  {
    name: "Travel Karnataka",
    description:
      "Travel Karnataka is a full-stack MERN web application showcasing Karnataka’s tourism, featuring destination exploration, secure authentication, real-time bookings, payment integration, and an admin dashboard — built with a responsive React frontend and a scalable Node.js/Express/MongoDB backend.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "razorpay",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/Bjshah07/Travel-Karnataka",
  },
];

export { services, technologies, experiences, projects };
