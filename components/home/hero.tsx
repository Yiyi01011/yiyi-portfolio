/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import type { Dictionary, Locale } from "@/content/i18n";
import { resumeFiles } from "@/content/i18n/site";

const HERO_LAYER_PATH = "/portfolio/environment/home/hero-layers";

export function Hero({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title" data-locale={locale}>
      <div className="hero-visual" aria-hidden="true">
        <img className="hero-layer hero-cloud hero-cloud-far" src={`${HERO_LAYER_PATH}/cloud-layer-far-v1.png`} width="2048" height="768" alt="" draggable="false" />
        <img className="hero-layer hero-cloud hero-cloud-near" src={`${HERO_LAYER_PATH}/cloud-layer-near-v2.png`} width="1672" height="941" alt="" draggable="false" />
        <img className="hero-layer hero-environment" src={`${HERO_LAYER_PATH}/home-environment-layer-v2.png`} width="2048" height="682" alt="" draggable="false" />
        <img className="hero-layer hero-planter hero-planter-left" src={`${HERO_LAYER_PATH}/floating-planter-left-v1.png`} width="130" height="140" alt="" draggable="false" />
        <img className="hero-layer hero-planter hero-planter-sprout" src={`${HERO_LAYER_PATH}/floating-planter-sprout-v1.png`} width="76" height="99" alt="" draggable="false" />
        <img className="hero-layer hero-avatar" src="/portfolio/avatar/avatar-master.png" width="1024" height="1536" alt="" draggable="false" />
        {/* TODO: Overlay localized waterfall frames after the static Hero composition is approved. */}
      </div>

      <div className="hero-copy">
        <h1 id="hero-title">
          <span className="hero-title-name">{dictionary.hero.name}</span>
          <span className="hero-title-role">{dictionary.hero.role}</span>
        </h1>
        <p>{dictionary.hero.tagline}</p>
        <div className="hero-actions">
          <Link className="hero-button hero-button-primary" href={`/${locale}/about`}>
            <span>{dictionary.hero.viewProjects}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M14 6l6 6-6 6" /></svg>
          </Link>
          <a className="hero-button hero-button-secondary" href={resumeFiles[locale]} download>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
            <span>{dictionary.hero.downloadResume}</span>
          </a>
        </div>
      </div>

      <div className="hero-bubble" aria-label={dictionary.hero.greetingAriaLabel}>
        <span>{dictionary.hero.greetingLineOne}</span>
        <span>{dictionary.hero.greetingLineTwo}</span>
      </div>

      <Link className="hero-scroll-cue" href={`/${locale}#projects`} aria-label={dictionary.hero.scrollAriaLabel}>
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 4v15M6.5 13.5 12 19l5.5-5.5" /></svg>
      </Link>
    </section>
  );
}
