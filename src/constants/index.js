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
  python,
  tailwind,
  nodejs,
  postgresql,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  crm1,
  crm2,
  crm3,
  crm4,
  crm5,
  crm6,
  pet1,
  pet2,
  pet3,
  pet5,
  sm1,
  sm2,
  sm3,
  sm4,
  nmt1,
  nmt2,
  lg1,
  lg2,
  ptf1,
  ptf2,
  ptf3,
  ptf4,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    titleKey: "nav.about",
  },
  {
    id: "education",
    titleKey: "nav.education",
  },
  {
    id: "work",
    titleKey: "nav.work",
  },
  {
    id: "certifications",
    titleKey: "nav.certifications",
  },
  {
    id: "languages",
    titleKey: "nav.languages",
  },
  {
    id: "contact",
    titleKey: "nav.contact",
  },
];

const services = [
  {
    titleKey: "services.softwareEngineering",
    icon: web,
  },
  {
    titleKey: "services.frontend",
    icon: mobile,
  },
  {
    titleKey: "services.backend",
    icon: backend,
  },
  {
    titleKey: "services.ai",
    icon: creator,
  },
];

const education = [
  {
    titleKey: "education.software.title",
    institutionKey: "education.software.institution",
    dateKey: "education.software.date",
  },
  {
    titleKey: "education.genai.title",
    institutionKey: "education.genai.institution",
    dateKey: "education.genai.date",
  },
  {
    titleKey: "education.cybersecurity.title",
    institutionKey: "education.cybersecurity.institution",
    dateKey: "education.cybersecurity.date",
  },
  {
    titleKey: "education.technician.title",
    institutionKey: "education.technician.institution",
    dateKey: "education.technician.date",
  },
];

const certifications = [
  {
    nameKey: "certifications.cybersecurity.name",
    issuerKey: "certifications.cybersecurity.issuer",
    dateKey: "certifications.cybersecurity.date",
    credential_url: "",
  },
  {
    nameKey: "certifications.security.name",
    issuerKey: "certifications.security.issuer",
    dateKey: "certifications.security.date",
    credential_url: "",
  },
  {
    nameKey: "certifications.oracle.name",
    issuerKey: "certifications.oracle.issuer",
    dateKey: "certifications.oracle.date",
    credential_url: "",
  },
];

const languages = [
  {
    nameKey: "languages.spanish.name",
    levelKey: "languages.spanish.level",
  },
  {
    nameKey: "languages.english.name",
    levelKey: "languages.english.level",
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
    name: "Python",
    icon: python,
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
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Java",
    icon: java,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    nameKey: "projects.crm.name",
    descriptionKey: "projects.crm.description",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "purple-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "postgresql",
        color: "cyan-text-gradient",
      },
      {
        name: "drizzle",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: crm1,
    images: [crm1, crm2, crm3, crm4, crm5, crm6],
    source_code_link: "https://github.com/Wizar-Cyber/CRM_EZpermitsTX.git",
  },
  {
    nameKey: "projects.pet.name",
    descriptionKey: "projects.pet.description",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "cyan-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "postgresql",
        color: "purple-text-gradient",
      },
      {
        name: "sequelize",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "orange-text-gradient",
      },
      {
        name: "redis",
        color: "red-text-gradient",
      },
    ],
    image: pet1,
    images: [pet1, pet2, pet3, pet5],
    source_code_link: "https://github.com/Wizar-Cyber/El_Club_Pet.git",
  },
  {
    nameKey: "projects.smartflow.name",
    descriptionKey: "projects.smartflow.description",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "purple-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "postgresql",
        color: "cyan-text-gradient",
      },
    ],
    image: sm1,
    images: [sm1, sm2, sm3, sm4],
    source_code_link: "https://github.com/Wizar-Cyber/SmartFlow.git",
  },
  {
    nameKey: "projects.calculadora.name",
    descriptionKey: "projects.calculadora.description",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "cyan-text-gradient",
      },
      {
        name: "pandas",
        color: "yellow-text-gradient",
      },
    ],
    image: nmt1,
    images: [nmt1, nmt2],
    source_code_link: "https://github.com/Wizar-Cyber/Calculadora-de-nomina.git",
  },
  {
    nameKey: "projects.login.name",
    descriptionKey: "projects.login.description",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "purple-text-gradient",
      },
      {
        name: "typescript",
        color: "cyan-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: lg1,
    images: [lg1, lg2],
    source_code_link: "https://github.com/Wizar-Cyber/Login-React-TypeScript-Vite.git",
  },
  {
    nameKey: "projects.portfolio.name",
    descriptionKey: "projects.portfolio.description",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "purple-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "postgresql",
        color: "cyan-text-gradient",
      },
    ],
    image: ptf1,
    images: [ptf1, ptf2, ptf3, ptf4],
    source_code_link: "https://github.com/Wizar-Cyber/Mi-portafolio.git",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education,
  certifications,
  languages,
};
