"use client";

import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import type { Locale } from "@/content/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const targetLocale: Locale = locale === "zh" ? "en" : "zh";
  const targetPath = pathname.replace(/^\/(zh|en)(?=\/|$)/, `/${targetLocale}`);
  const label = locale === "zh" ? "EN" : "中文";
  const ariaLabel = locale === "zh" ? "Switch to English" : "Switch to Chinese";

  function switchLanguage(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    router.push(`${targetPath}${window.location.search}${window.location.hash}`);
  }

  return (
    <a
      className="language-switcher"
      href={targetPath}
      hrefLang={targetLocale === "zh" ? "zh-CN" : "en"}
      aria-label={ariaLabel}
      onClick={switchLanguage}
    >
      {label}
    </a>
  );
}
