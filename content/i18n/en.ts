import type { Dictionary } from "./types";

const en: Dictionary = {
  metadata: {
    title: "He Dan | AI Product Manager Portfolio",
    description: "Understanding users through design, building practical products with AI.",
  },
  navigation: {
    portfolio: "Portfolio",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    ariaLabel: "Homepage navigation",
    homeAriaLabel: "Back to the homepage",
  },
  hero: {
    name: "He Dan",
    role: "AI Product Manager",
    tagline: "Understanding users through design, building practical products with AI.",
    viewProjects: "Meet Me",
    downloadResume: "Download Resume",
    greetingLineOne: "Hi, welcome to",
    greetingLineTwo: "my personal space",
    greetingAriaLabel: "Hi, welcome to my personal space",
    scrollAriaLabel: "Scroll down to projects",
  },
  pages: {
    about: { title: "About", pending: "Content pending." },
    projects: {
      title: "Projects",
      pending: "Content pending.",
      showcaseTitle: "Selected Projects",
      readProjectLabel: "View Project",
    },
    experience: { title: "Experience", pending: "Content pending." },
    contact: { title: "Contact", pending: "Content pending." },
    projectDetail: { pending: "Project details pending." },
  },
  projects: {
    designspark: { name: "DesignSpark", title: "Design Education Agent 0-to-1 Development", tags: ["User Research", "Agent Orchestration", "Knowledge Base Design", "0-1 Product Build"] },
    "life-exchange": { name: "Life Exchange", title: "AI Emotional Narrative Product Design", tags: ["Dual-perspective Narrative", "Emotional Experience", "Privacy Mechanics", "Interactive Prototype"] },
    "ai-sales-agent": { name: "AI Sales Agent", title: "E-commerce Customer Service Agent 0-to-1 Development", tags: ["Process Mapping", "PRD", "Agent Architecture", "Testing & Acceptance"] },
    "vibe-coding": { name: "AI Coding Practice", title: "AI-native Interactive Product Design & Vibe Coding Practice", tags: ["Course Design", "Vibe Coding", "Teaching Practice", "Outcome Iteration"] },
    "other-works": { name: "Other Works", title: "Hand Drawing & Design Collection", tags: ["Hand Drawing", "Visual Design", "Aesthetic Judgment"] },
  },
  footer: { copyright: "He Dan Portfolio" },
  notFound: {
    title: "Page not found",
    description: "The page you requested does not exist yet.",
    backHome: "Back to home",
  },
};

export default en;
