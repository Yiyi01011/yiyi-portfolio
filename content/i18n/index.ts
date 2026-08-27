import en from "./en";
import zh from "./zh";
import { locales, type Dictionary, type Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = { zh, en };

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export { locales };
export type { Dictionary, Locale, ProjectSlug } from "./types";
