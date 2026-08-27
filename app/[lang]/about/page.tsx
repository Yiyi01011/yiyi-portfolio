import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutExperience } from "@/components/about/about-experience";
import { HomeHeader } from "@/components/home/home-header";
import { getDictionary, isLocale } from "@/content/i18n";
import { createLocalizedMetadata } from "@/content/i18n/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  return createLocalizedMetadata(lang, "/about", dictionary.pages.about.title);
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  return (
    <main className="about-page" data-locale={lang}>
      <HomeHeader locale={lang} navigation={dictionary.navigation} activeItem="about" />
      <AboutExperience locale={lang} />
    </main>
  );
}
