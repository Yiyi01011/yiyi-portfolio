import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPage } from "@/components/site/interior-page";
import { getDictionary, isLocale } from "@/content/i18n";
import { createLocalizedMetadata } from "@/content/i18n/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/experience">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  return createLocalizedMetadata(lang, "/experience", dictionary.pages.experience.title);
}

export default async function ExperiencePage({ params }: PageProps<"/[lang]/experience">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  return <InteriorPage locale={lang} dictionary={dictionary} {...dictionary.pages.experience} />;
}
