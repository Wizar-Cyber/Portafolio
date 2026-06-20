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
  {
    nameKey: "certifications.deeplearning.name",
    issuerKey: "certifications.deeplearning.issuer",
    dateKey: "certifications.deeplearning.date",
    credential_url: "",
  },
  {
    nameKey: "certifications.edutinai.name",
    issuerKey: "certifications.edutinai.issuer",
    dateKey: "certifications.edutinai.date",
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
  {
    nameKey: "languages.portuguese.name",
    levelKey: "languages.portuguese.level",
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
    nameKey: "projects.gmailbot.name",
    descriptionKey: "projects.gmailbot.description",
    type: "AI · RAG · NLP",
    isFeatured: true,
    isClient: false,
    tags: [
      { name: "python" },
      { name: "gpt-4o" },
      { name: "langchain" },
      { name: "rag" },
      { name: "embeddings" },
      { name: "fastapi" },
    ],
    visual: "gmail",
    metrics: ["RAG retrieval", "Context ranking", "LLM response quality"],
    source_code_link: "https://github.com/Wizar-Cyber/ai-gmail-bot.git",
  },

  {
    nameKey: "projects.n8npipeline.name",
    descriptionKey: "projects.n8npipeline.description",
    type: "AI · Speech-to-Text",
    isClient: true,
    clientBadge: "EZpermitsTX · Houston TX",
    tags: [
      { name: "n8n" },
      { name: "fal.ai" },
      { name: "whisper" },
      { name: "speech-to-text" },
      { name: "meta-api" },
    ],
    visual: "pipeline",
    metrics: ["Whisper transcription", "Caption extraction", "Text generation"],
    source_code_link: "",
  },

  {
    nameKey: "projects.cantrack.name",
    descriptionKey: "projects.cantrack.description",
    type: "AI · Data Enrichment",
    isClient: false,
    tags: [
      { name: "react-19" },
      { name: "gemini" },
      { name: "groq" },
      { name: "playwright" },
      { name: "lead-scoring" },
      { name: "typescript" },
    ],
    visual: "cantrack",
    metrics: ["Lead scoring", "Feature enrichment", "LLM analysis"],
    source_code_link: "https://github.com/Wizar-Cyber/CanTrack-CRM.git",
  },

  {
    nameKey: "projects.crm.name",
    descriptionKey: "projects.crm.description",
    type: "Full-Stack · CRM",
    isClient: true,
    clientBadge: "EZpermitsTX · Houston TX",
    tags: [
      { name: "react" },
      { name: "typescript" },
      { name: "nodejs" },
      { name: "postgresql" },
      { name: "drizzle" },
      { name: "analytics" },
    ],
    visual: "crm",
    metrics: ["200+ leads", "Operational analytics", "Geospatial data"],
    source_code_link: "https://github.com/Wizar-Cyber/CRM_EZpermitsTX.git",
  },

  {
    nameKey: "projects.pet.name",
    descriptionKey: "projects.pet.description",
    type: "Full-Stack · SaaS",
    isClient: false,
    tags: [
      { name: "react" },
      { name: "nodejs" },
      { name: "postgresql" },
      { name: "redis" },
      { name: "jwt" },
      { name: "dashboards" },
    ],
    visual: "pet",
    metrics: ["RBAC", "Redis sessions", "Clinic dashboard"],
    source_code_link: "https://github.com/Wizar-Cyber/El_Club_Pet.git",
  },

  {
    nameKey: "projects.smartflow.name",
    descriptionKey: "projects.smartflow.description",
    type: "Full-Stack · AI Product",
    isClient: false,
    isOwn: true,
    tags: [
      { name: "react" },
      { name: "typescript" },
      { name: "nodejs" },
      { name: "postgresql" },
      { name: "tailwind" },
      { name: "analytics" },
    ],
    visual: "smartflow",
    metrics: ["AI product strategy", "Data capture", "Conversion analytics"],
    source_code_link: "https://github.com/Wizar-Cyber/SmartFlow.git",
  },

  {
    nameKey: "projects.desercion.name",
    descriptionKey: "projects.desercion.description",
    type: "ML · MLOps · Education",
    tags: [
      { name: "python" },
      { name: "pandas" },
      { name: "numpy" },
      { name: "scikit-learn" },
      { name: "classification" },
      { name: "mlops" },
    ],
    visual: "desercion",
    metrics: ["Predictive modeling", "MLOps pipeline", "Educational data mining"],
    source_code_link: "",
  },

  {
    nameKey: "projects.avatar.name",
    descriptionKey: "projects.avatar.description",
    type: "AI · RAG · LLM",
    tags: [
      { name: "python" },
      { name: "langchain" },
      { name: "rag" },
      { name: "llm" },
      { name: "embeddings" },
    ],
    visual: "avatar",
    metrics: ["RAG retrieval", "LLM integration", "Academic Q&A"],
    source_code_link: "",
  },

  {
    nameKey: "projects.n8nauto.name",
    descriptionKey: "projects.n8nauto.description",
    type: "AI · Automation · n8n",
    isOwn: true,
    tags: [
      { name: "n8n" },
      { name: "python" },
      { name: "chatgpt" },
      { name: "whatsapp" },
      { name: "postgresql" },
      { name: "rest-api" },
    ],
    visual: "n8nauto",
    metrics: ["Data extraction", "WhatsApp automation", "REST APIs"],
    source_code_link: "",
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
