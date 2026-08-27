"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/content/i18n";
import { LanguageSwitcher } from "@/components/site/language-switcher";

type ActiveSection = "about" | "projects" | "experience" | "contact";

type ActiveSectionEvent = CustomEvent<{ activeSection: ActiveSection }>;

type HomeHeaderProps = {
  locale: Locale;
  navigation: Dictionary["navigation"];
  activeItem?: ActiveSection;
};

export function HomeHeader({ locale, navigation, activeItem }: HomeHeaderProps) {
  const [activeSection, setActiveSection] = useState<ActiveSection>(activeItem ?? "about");

  useEffect(() => {
    if (activeItem) return;

    const handleActiveSection = (event: Event) => {
      setActiveSection((event as ActiveSectionEvent).detail.activeSection);
    };

    window.addEventListener("portfolio:active-section", handleActiveSection);
    const initialSync = window.requestAnimationFrame(() => window.dispatchEvent(new Event("scroll")));
    return () => {
      window.cancelAnimationFrame(initialSync);
      window.removeEventListener("portfolio:active-section", handleActiveSection);
    };
  }, [activeItem]);

  const currentItem = activeItem ?? activeSection;

  const links = [
    { id: "about", label: navigation.about, href: `/${locale}#top` },
    { id: "projects", label: navigation.projects, href: `/${locale}#projects` },
    { id: "experience", label: navigation.experience, href: `/${locale}#experience` },
    { id: "contact", label: navigation.contact, href: `/${locale}#contact` },
  ];

  return (
    <header className="hero-header">
      <Link className="hero-brand" href={`/${locale}#top`} aria-label={navigation.homeAriaLabel}>
        <span className="hero-brand-mark" aria-hidden="true">HD</span>
        <span className="hero-brand-name">{navigation.portfolio}</span>
      </Link>

      <nav className="hero-nav" aria-label={navigation.ariaLabel}>
        {links.map((item) => (
          <Link
            className={`hero-nav-link${currentItem === item.id ? " is-active" : ""}`}
            key={item.href}
            href={item.href}
            aria-current={currentItem === item.id ? (activeItem === item.id ? "page" : "location") : undefined}
          >
            {item.label}
          </Link>
        ))}
        <LanguageSwitcher locale={locale} />
      </nav>
    </header>
  );
}
