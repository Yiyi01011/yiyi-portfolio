import type { Metadata } from "next";
import { getDictionary, type Locale } from "./index";

export const resumeFiles: Record<Locale, string> = {
  zh: "/resume/HeDan_AI_Product_Manager_Resume_CN.pdf.pdf",
  // Use the confirmed Chinese resume until a real English PDF is provided.
  en: "/resume/HeDan_AI_Product_Manager_Resume_CN.pdf.pdf",
};

export function localizedPath(locale: Locale, path = ""): string {
  return `/${locale}${path}`;
}

export function createLocalizedMetadata(
  locale: Locale,
  path = "",
  pageTitle?: string,
): Metadata {
  const dictionary = getDictionary(locale);
  const title = pageTitle
    ? `${pageTitle} | ${locale === "zh" ? "贺丹作品集" : "He Dan Portfolio"}`
    : dictionary.metadata.title;

  return {
    title,
    description: dictionary.metadata.description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages: {
        "zh-CN": localizedPath("zh", path),
        en: localizedPath("en", path),
        "x-default": localizedPath("zh", path),
      },
    },
  };
}
