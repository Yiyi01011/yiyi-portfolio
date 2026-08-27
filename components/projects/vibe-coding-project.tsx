import Image from "next/image";
import Link from "next/link";
import { HomeHeader } from "@/components/home/home-header";
import type { Dictionary, Locale } from "@/content/i18n";
import { getVibeCodingContent } from "@/content/projects/vibe-coding";
import { ProjectReveal } from "./project-reveal";
import { VibeCodingCourseMap, VibeCodingMetrics } from "./vibe-coding-course-map";

type VibeCodingProjectProps = { locale: Locale; dictionary: Dictionary };

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M14 6l6 6-6 6" /></svg>;
}

export function VibeCodingProject({ locale, dictionary }: VibeCodingProjectProps) {
  const content = getVibeCodingContent(locale);

  return (
    <div className="project-detail-page vibe-coding-project" data-locale={locale}>
      <HomeHeader locale={locale} navigation={dictionary.navigation} activeItem="projects" />
      <ProjectReveal>
        <main>
          <section className="vibe-coding-hero" id="project-overview">
            <div className="vibe-pixel-signals" aria-hidden="true">{Array.from({ length: 14 }, (_, index) => <i key={index} />)}</div>
            <div className="vibe-coding-hero-inner">
              <div className="vibe-coding-hero-copy" data-project-reveal>
                <Link className="project-back-link" href={`/${locale}#projects`}><span aria-hidden="true">←</span>{content.back}</Link>
                <p className="project-eyebrow">{content.hero.eyebrow}</p>
                <h1>{content.hero.title}</h1>
                <h2>{content.hero.subtitle}</h2>
                <p className="vibe-coding-hero-description">{content.hero.description}</p>
                <ul className="project-tag-list" aria-label="Project tags">{content.hero.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <div className="project-hero-actions">
                  <a className="project-action vibe-primary-action" href="#course-map">{content.hero.viewMap}<ArrowIcon /></a>
                  <a className="project-action vibe-secondary-action" href="#course-results">{content.hero.viewResults}<ArrowIcon /></a>
                </div>
              </div>
              <div className="vibe-coding-hero-visual" data-project-reveal>
                <div className="vibe-coding-cover-frame">
                  <Image src="/portfolio/projects/vibe-coding/cover.png" alt={content.hero.coverAlt} fill priority sizes="(max-width: 900px) 92vw, 48vw" />
                  <span>COURSE / 01—16</span>
                </div>
                <div className="vibe-hero-facts">{content.hero.facts.map((fact) => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}</div>
              </div>
            </div>
          </section>

          <nav className="project-local-nav" aria-label="Project sections"><div>
            <a href="#project-overview">{content.localNav.overview}</a><a href="#course-map">{content.localNav.map}</a>
            <a href="#course-methods">{content.localNav.methods}</a><a href="#course-assessment">{content.localNav.assessment}</a><a href="#course-results">{content.localNav.results}</a>
          </div></nav>

          <section className="project-story-section vibe-rationale-section">
            <div className="project-section-heading" data-project-reveal><span>{content.rationale.index}</span><div><p>{content.rationale.kicker}</p><h2>{content.rationale.title}</h2></div></div>
            <p className="project-section-lead" data-project-reveal>{content.rationale.description}</p>
            <div className="vibe-gap-grid">{content.rationale.gaps.map((item, index) => <article key={item.title} data-project-reveal style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
            <blockquote className="vibe-course-principle" data-project-reveal>{content.rationale.principle}</blockquote>
          </section>

          <section className="vibe-abilities-section">
            <div className="vibe-section-inner">
              <div className="project-section-heading" data-project-reveal><span>{content.abilities.index}</span><div><p>{content.abilities.kicker}</p><h2>{content.abilities.title}</h2></div></div>
              <p className="project-section-lead" data-project-reveal>{content.abilities.description}</p>
              <div className="vibe-ability-grid">{content.abilities.items.map((item, index) => <article key={item.number} data-project-reveal style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}><span>{item.number}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
            </div>
          </section>

          <section className="vibe-course-map-section" id="course-map">
            <div className="vibe-section-inner">
              <div className="project-section-heading" data-project-reveal><span>{content.courseMap.index}</span><div><p>{content.courseMap.kicker}</p><h2>{content.courseMap.title}</h2></div></div>
              <p className="project-section-lead" data-project-reveal>{content.courseMap.description}</p>
              <VibeCodingCourseMap content={content.courseMap} />
            </div>
          </section>

          <section className="project-story-section vibe-methods-section" id="course-methods">
            <div className="project-section-heading" data-project-reveal><span>{content.methods.index}</span><div><p>{content.methods.kicker}</p><h2>{content.methods.title}</h2></div></div>
            <p className="project-section-lead" data-project-reveal>{content.methods.description}</p>
            <div className="vibe-task-grid">{content.methods.tasks.map((task, index) => <article key={task.number} data-project-reveal style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}><span>{task.number}</span><h3>{task.title}</h3><ul>{task.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
            <div className="vibe-method-strip" data-project-reveal><h3>{content.methods.methodsTitle}</h3><div>{content.methods.methodItems.map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.body}</p></article>)}</div></div>
          </section>

          <section className="vibe-assessment-section" id="course-assessment">
            <div className="vibe-section-inner">
              <div className="project-section-heading" data-project-reveal><span>{content.assessment.index}</span><div><p>{content.assessment.kicker}</p><h2>{content.assessment.title}</h2></div></div>
              <p className="project-section-lead" data-project-reveal>{content.assessment.description}</p>
              <ol className="vibe-checkpoint-list" data-project-reveal>{content.assessment.checkpoints.map((item, index) => <li key={item.stage}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{item.stage}</strong><p>{item.deliverable}</p><small>{item.focus}</small></div></li>)}</ol>
              <div className="vibe-score-layout" data-project-reveal><div><h3>{content.assessment.scoreTitle}</h3><p>{content.assessment.principle}</p></div><div className="vibe-score-bars">{content.assessment.scoreItems.map((item) => <div key={item.label}><span>{item.label}</span><i style={{ "--score": `${item.value}%` } as React.CSSProperties} /><strong>{item.value}%</strong></div>)}</div></div>
            </div>
          </section>

          <section className="vibe-results-section" id="course-results">
            <div className="vibe-section-inner">
              <div className="project-section-heading" data-project-reveal><span>{content.results.index}</span><div><p>{content.results.kicker}</p><h2>{content.results.title}</h2></div></div>
              <p className="project-section-lead" data-project-reveal>{content.results.description}</p>
              <VibeCodingMetrics metrics={content.results.metrics} />
              <ol className="vibe-results-path" data-project-reveal>{content.results.path.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ol>
              <div className="vibe-assets" data-project-reveal><h3>{content.results.assetsTitle}</h3><ul>{content.results.assets.map((asset) => <li key={asset}>{asset}</li>)}</ul></div>
            </div>
          </section>

          <section className="vibe-ending">
            <div data-project-reveal><p className="project-eyebrow">{content.ending.eyebrow}</p><h2>{content.ending.title}</h2><span>{content.ending.description}</span><Link className="project-return-link" href={`/${locale}#projects`}>{content.ending.backProjects}<ArrowIcon /></Link></div>
          </section>
        </main>
      </ProjectReveal>
      <footer className="site-footer project-detail-footer vibe-detail-footer">{dictionary.footer.copyright}</footer>
    </div>
  );
}
