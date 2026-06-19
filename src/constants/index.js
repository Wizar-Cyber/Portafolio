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
    id: "work",
    titleKey: "nav.work",
  },
  {
    id: "education",
    titleKey: "nav.education",
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
    typeKey: "education.software.type",
  },
  {
    titleKey: "education.genai.title",
    institutionKey: "education.genai.institution",
    dateKey: "education.genai.date",
    typeKey: "education.genai.type",
  },
  {
    titleKey: "education.cybersecurity.title",
    institutionKey: "education.cybersecurity.institution",
    dateKey: "education.cybersecurity.date",
    typeKey: "education.cybersecurity.type",
  },
  {
    titleKey: "education.technician.title",
    institutionKey: "education.technician.institution",
    dateKey: "education.technician.date",
    typeKey: "education.technician.type",
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
    name: "Java",
    icon: java,
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
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const projects = [
  {
    nameKey: "projects.crm.name",
    descriptionKey: "projects.crm.description",
    tags: [
      { name: "react" },
      { name: "typescript" },
      { name: "nodejs" },
      { name: "express" },
      { name: "postgresql" },
      { name: "drizzle" },
      { name: "tailwind" },
    ],
    image: crm1,
    images: [crm1, crm2, crm3, crm4, crm5, crm6],
    source_code_link: "https://github.com/Wizar-Cyber/CRM_EZpermitsTX.git",
  },
  {
    nameKey: "projects.pet.name",
    descriptionKey: "projects.pet.description",
    tags: [
      { name: "react" },
      { name: "vite" },
      { name: "nodejs" },
      { name: "express" },
      { name: "postgresql" },
      { name: "sequelize" },
      { name: "jwt" },
      { name: "redis" },
    ],
    image: pet1,
    images: [pet1, pet2, pet3, pet5],
    source_code_link: "https://github.com/Wizar-Cyber/El_Club_Pet.git",
  },
  {
    nameKey: "projects.smartflow.name",
    descriptionKey: "projects.smartflow.description",
    tags: [
      { name: "react" },
      { name: "typescript" },
      { name: "tailwind" },
      { name: "nodejs" },
      { name: "express" },
      { name: "postgresql" },
    ],
    image: sm1,
    images: [sm1, sm2, sm3, sm4],
    source_code_link: "https://github.com/Wizar-Cyber/SmartFlow.git",
  },
  {
    nameKey: "projects.calculadora.name",
    descriptionKey: "projects.calculadora.description",
    tags: [
      { name: "python" },
      { name: "streamlit" },
      { name: "pandas" },
    ],
    image: nmt1,
    images: [nmt1, nmt2],
    source_code_link: "https://github.com/Wizar-Cyber/Calculadora-de-nomina.git",
  },
  {
    nameKey: "projects.login.name",
    descriptionKey: "projects.login.description",
    tags: [
      { name: "react" },
      { name: "vite" },
      { name: "typescript" },
      { name: "tailwind" },
    ],
    image: lg1,
    images: [lg1, lg2],
    source_code_link: "https://github.com/Wizar-Cyber/Login-React-TypeScript-Vite.git",
  },
  {
    nameKey: "projects.portfolio.name",
    descriptionKey: "projects.portfolio.description",
    tags: [
      { name: "react" },
      { name: "typescript" },
      { name: "tailwind" },
    ],
    image: ptf1,
    images: [ptf1, ptf2, ptf3, ptf4],
    source_code_link: "https://github.com/Wizar-Cyber/Portafolio.git",
  },
];

export {
  services,
  technologies,
  projects,
  education,
  certifications,
  languages,
};
