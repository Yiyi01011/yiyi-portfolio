import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DesignSparkProject } from "@/components/projects/designspark-project";
import { SalesAgentProject } from "@/components/projects/ai-sales-agent-project";
import { LifeExchangeProject } from "@/components/projects/life-exchange-project";
import { VibeCodingProject } from "@/components/projects/vibe-coding-project";
import { OtherWorksProject } from "@/components/projects/other-works-project";
import { getDictionary, isLocale } from "@/content/i18n";
import { createLocalizedMetadata } from "@/content/i18n/site";
import { projectSlugs, type ProjectSlug } from "@/content/i18n/types";

function isProjectSlug(value: string): value is ProjectSlug {
  return projectSlugs.some((slug) => slug === value);
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isProjectSlug(slug)) notFound();
  const dictionary = getDictionary(lang);
  return createLocalizedMetadata(lang, `/projects/${slug}`, dictionary.projects[slug].name);
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isProjectSlug(slug)) notFound();
  const dictionary = getDictionary(lang);
  if (slug === "designspark") {
    return <DesignSparkProject locale={lang} dictionary={dictionary} />;
  }
  if (slug === "life-exchange") {
    return <LifeExchangeProject locale={lang} dictionary={dictionary} />;
  }
  if (slug === "ai-sales-agent") {
    return <SalesAgentProject locale={lang} dictionary={dictionary} />;
  }
  if (slug === "vibe-coding") {
    return <VibeCodingProject locale={lang} dictionary={dictionary} />;
  }
  if (slug === "other-works") {
    return <OtherWorksProject locale={lang} dictionary={dictionary} />;
  }
  return notFound();
}
