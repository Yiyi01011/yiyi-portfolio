import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPage } from "@/components/site/interior-page";
import { getDictionary, isLocale } from "@/content/i18n";
import { createLocalizedMetadata } from "@/content/i18n/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  return createLocalizedMetadata(lang, "/contact", dictionary.pages.contact.title);
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  return <InteriorPage locale={lang} dictionary={dictionary} {...dictionary.pages.contact} />;
}
