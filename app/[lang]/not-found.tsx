import Link from "next/link";
import { lang as currentLang } from "next/root-params";
import { getDictionary, isLocale } from "@/content/i18n";

export default async function NotFound() {
  const value = await currentLang();
  const locale = value && isLocale(value) ? value : "zh";
  const dictionary = getDictionary(locale);

  return (
    <main className="not-found-page">
      <p>404</p>
      <h1>{dictionary.notFound.title}</h1>
      <p>{dictionary.notFound.description}</p>
      <Link className="hero-button hero-button-primary" href={`/${locale}`}>{dictionary.notFound.backHome}</Link>
    </main>
  );
}
