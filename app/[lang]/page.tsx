import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/hero";
import { HomeHeader } from "@/components/home/home-header";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { ExperienceSection } from "@/components/experience/experience-section";
import { ContactSection } from "@/components/contact/contact-section";
import { getDictionary, isLocale } from "@/content/i18n";
import { createLocalizedMetadata } from "@/content/i18n/site";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return createLocalizedMetadata(lang);
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  const projects = [
    { slug: "designspark", href: `/${lang}/projects/designspark`, cover: "/portfolio/projects/designspark/cover.png", ...dictionary.projects.designspark },
    { slug: "life-exchange", href: `/${lang}/projects/life-exchange`, cover: "/portfolio/projects/life-exchange/cover.png", ...dictionary.projects["life-exchange"] },
    { slug: "ai-sales-agent", href: `/${lang}/projects/ai-sales-agent`, cover: "/portfolio/projects/ai-sales-agent/cover.png", ...dictionary.projects["ai-sales-agent"] },
    { slug: "vibe-coding", href: `/${lang}/projects/vibe-coding`, cover: "/portfolio/projects/vibe-coding/cover.png", ...dictionary.projects["vibe-coding"] },
    { slug: "other-works", href: `/${lang}/projects/other-works`, cover: "/portfolio/projects/other-works/cover.png", ...dictionary.projects["other-works"] },
  ];

  return (
    <main className="home-page">
      <HomeHeader locale={lang} navigation={dictionary.navigation} />
      <Hero locale={lang} dictionary={dictionary} />
      <ProjectShowcase
        ariaLabel={dictionary.pages.projects.title}
        heading={dictionary.pages.projects.showcaseTitle}
        readProjectLabel={dictionary.pages.projects.readProjectLabel}
        projects={projects}
      />
      <ExperienceSection locale={lang} ariaLabel={dictionary.pages.experience.title} />
      <ContactSection locale={lang} ariaLabel={dictionary.pages.contact.title} />
    </main>
  );
}
