export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];

export const projectSlugs = [
  "designspark",
  "life-exchange",
  "ai-sales-agent",
  "vibe-coding",
  "other-works",
] as const;
export type ProjectSlug = (typeof projectSlugs)[number];

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    portfolio: string;
    about: string;
    projects: string;
    experience: string;
    contact: string;
    ariaLabel: string;
    homeAriaLabel: string;
  };
  hero: {
    name: string;
    role: string;
    tagline: string;
    viewProjects: string;
    downloadResume: string;
    greetingLineOne: string;
    greetingLineTwo: string;
    greetingAriaLabel: string;
    scrollAriaLabel: string;
  };
  pages: {
    about: { title: string; pending: string };
    projects: {
      title: string;
      pending: string;
      showcaseTitle: string;
      readProjectLabel: string;
    };
    experience: { title: string; pending: string };
    contact: { title: string; pending: string };
    projectDetail: { pending: string };
  };
  projects: Record<ProjectSlug, { name: string; title: string; tags: readonly string[] }>;
  footer: { copyright: string };
  notFound: { title: string; description: string; backHome: string };
};
