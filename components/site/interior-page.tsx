import Link from "next/link";
import type { Dictionary, Locale } from "@/content/i18n";
import { LanguageSwitcher } from "./language-switcher";

type InteriorPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  title: string;
  pending: string;
};

export function InteriorPage({ locale, dictionary, title, pending }: InteriorPageProps) {
  const navigation = [
    { label: dictionary.navigation.about, href: `/${locale}/about` },
    { label: dictionary.navigation.projects, href: `/${locale}/projects` },
    { label: dictionary.navigation.experience, href: `/${locale}/experience` },
    { label: dictionary.navigation.contact, href: `/${locale}/contact` },
  ];

  return (
    <div className="interior-page">
      <header className="interior-header">
        <Link className="hero-brand" href={`/${locale}`} aria-label={dictionary.navigation.homeAriaLabel}>
          <span className="hero-brand-mark" aria-hidden="true">HD</span>
          <span className="hero-brand-name">{dictionary.navigation.portfolio}</span>
        </Link>
        <nav className="interior-nav" aria-label={dictionary.navigation.ariaLabel}>
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <LanguageSwitcher locale={locale} />
        </nav>
      </header>
      <main className="interior-content">
        <h1>{title}</h1>
        <p>{pending}</p>
      </main>
      <footer className="site-footer">{dictionary.footer.copyright}</footer>
    </div>
  );
}
