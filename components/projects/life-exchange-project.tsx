import Image from "next/image";
import Link from "next/link";
import { HomeHeader } from "@/components/home/home-header";
import type { Dictionary, Locale } from "@/content/i18n";
import { getLifeExchangeContent } from "@/content/projects/life-exchange";
import { LifeExchangeModeExplorer, LifeExchangePrivacyReveal } from "./life-exchange-explorer";
import { ProjectReveal } from "./project-reveal";

const demoUrl = "https://exchange-life.786383431.workers.dev/";

type LifeExchangeProjectProps = { locale: Locale; dictionary: Dictionary };

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M14 6l6 6-6 6" /></svg>;
}

function ExternalIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 5h10v10M19 5 8 16M15 19H5V9" /></svg>;
}

export function LifeExchangeProject({ locale, dictionary }: LifeExchangeProjectProps) {
  const content = getLifeExchangeContent(locale);

  return (
    <div className="project-detail-page life-exchange-project" data-locale={locale}>
      <HomeHeader locale={locale} navigation={dictionary.navigation} activeItem="projects" />
      <ProjectReveal>
        <main>
          <section className="life-exchange-hero" id="project-overview">
            <div className="life-ambient-cloud life-ambient-cloud-left" aria-hidden="true" />
            <div className="life-ambient-cloud life-ambient-cloud-right" aria-hidden="true" />
            <div className="life-particle-cloud" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div>
            <div className="life-exchange-hero-inner">
              <div className="life-exchange-hero-copy" data-project-reveal>
                <Link className="project-back-link" href={`/${locale}#projects`}><span aria-hidden="true">←</span>{content.back}</Link>
                <p className="project-eyebrow">{content.hero.eyebrow}</p>
                <h1>{content.hero.title}</h1>
                <h2>{content.hero.subtitle}</h2>
                <p className="life-exchange-hero-description">{content.hero.description}</p>
                <ul className="project-tag-list" aria-label="Project tags">{content.hero.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <div className="project-hero-actions">
                  <a className="project-action project-action-primary" href={demoUrl} target="_blank" rel="noreferrer">{content.hero.demo}<ExternalIcon /></a>
                  <a className="project-action project-action-secondary" href="#prd">{content.hero.readPrd}<ArrowIcon /></a>
                </div>
              </div>
              <div className="life-exchange-hero-visual" data-project-reveal>
                <div className="life-exchange-cover-frame">
                  <Image src="/portfolio/projects/life-exchange/cover.png" alt={content.hero.coverAlt} fill priority sizes="(max-width: 900px) 92vw, 48vw" />
                  <span>LIFE EXCHANGE / V1.0</span>
                </div>
                <div className="life-dual-tracks" aria-hidden="true">
                  <div><b>A</b><span>{content.hero.trackA}</span><i /></div>
                  <div><b>B</b><span>{content.hero.trackB}</span><i /></div>
                  <strong>{content.hero.shared}</strong>
                </div>
              </div>
            </div>
          </section>

          <nav className="project-local-nav" aria-label="Project sections"><div>
            <a href="#project-overview">{content.localNav.overview}</a><a href="#model">{content.localNav.model}</a>
            <a href="#privacy">{content.localNav.privacy}</a><a href="#prd">{content.localNav.prd}</a><a href="#demo">{content.localNav.demo}</a>
          </div></nav>

          <section className="project-story-section project-problem-section">
            <div className="project-section-heading" data-project-reveal><span>{content.problem.index}</span><div><p>{content.problem.kicker}</p><h2>{content.problem.title}</h2></div></div>
            <p className="project-section-lead" data-project-reveal>{content.problem.description}</p>
            <div className="project-problem-grid">{content.problem.items.map((item, index) => <article key={item.title} data-project-reveal style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </section>

          <section className="life-model-section" id="model">
            <div className="life-section-inner">
              <div className="project-section-heading" data-project-reveal><span>{content.model.index}</span><div><p>{content.model.kicker}</p><h2>{content.model.title}</h2></div></div>
              <p className="project-section-lead" data-project-reveal>{content.model.description}</p>
              <LifeExchangeModeExplorer content={content.model} />
            </div>
          </section>

          <section className="project-story-section life-privacy-section" id="privacy">
            <div className="project-section-heading" data-project-reveal><span>{content.privacy.index}</span><div><p>{content.privacy.kicker}</p><h2>{content.privacy.title}</h2></div></div>
            <p className="project-section-lead" data-project-reveal>{content.privacy.description}</p>
            <LifeExchangePrivacyReveal content={content.privacy} />
          </section>

          <section className="project-story-section project-decisions-section">
            <div className="project-section-heading" data-project-reveal><span>{content.decisions.index}</span><div><p>{content.decisions.kicker}</p><h2>{content.decisions.title}</h2></div></div>
            <div className="project-decision-list">{content.decisions.items.map((item) => <article key={item.number} data-project-reveal><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.body}</p><small>{item.boundary}</small></div></article>)}</div>
          </section>

          <section className="project-prd-section life-prd-section" id="prd">
            <header className="project-prd-header" data-project-reveal><p>{content.prd.eyebrow}</p><h2>{content.prd.title}</h2><span>{content.prd.description}</span></header>
            <div className="project-prd-layout">
              <aside className="project-prd-toc" data-project-reveal><strong>{content.prd.tocLabel}</strong><nav>{content.prd.toc.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></aside>
              <article className="project-prd-document">
                <section id="life-prd-context" data-project-reveal><h3>{content.prd.contextTitle}</h3><p>{content.prd.context}</p></section>
                <section id="life-prd-users" data-project-reveal><h3>{content.prd.usersTitle}</h3><div className="project-user-list">{content.prd.users.map((user) => <div key={user.title}><strong>{user.title}</strong><p>{user.need}</p></div>)}</div><div className="project-goal-columns"><div><h4>{content.prd.goalsTitle}</h4><ul>{content.prd.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul></div><div><h4>{content.prd.nonGoalsTitle}</h4><ul>{content.prd.nonGoals.map((goal) => <li key={goal}>{goal}</li>)}</ul></div></div></section>
                <section id="life-prd-modes" data-project-reveal><h3>{content.prd.modesTitle}</h3><div className="project-scope-table" role="table"><div className="project-scope-row life-mode-table-row project-scope-head" role="row">{content.prd.modeHeaders.map((header) => <strong key={header} role="columnheader">{header}</strong>)}</div>{content.model.modes.map((mode) => <div className="project-scope-row life-mode-table-row" role="row" key={mode.id}><strong role="cell">{mode.title}</strong><span role="cell">{mode.participation}</span><p role="cell">{mode.visibility}</p><p role="cell">{mode.output}</p></div>)}</div></section>
                <section id="life-prd-flows" data-project-reveal><h3>{content.prd.flowsTitle}</h3><ol className="project-flow-list life-prd-flow">{content.prd.flows.map((step) => <li key={step.number}><span>{step.number}</span><div><strong>{step.title}</strong><p>{step.body}</p></div></li>)}</ol></section>
                <section id="life-prd-ai" data-project-reveal><h3>{content.prd.aiTitle}</h3><p>{content.prd.aiDescription}</p><ul className="life-boundary-list">{content.prd.aiBoundaries.map((item) => <li key={item}>{item}</li>)}</ul></section>
                <section id="life-prd-mvp" data-project-reveal><h3>{content.prd.mvpTitle}</h3><p className="project-fact-notice">{content.prd.mvpNotice}</p><dl className="life-mvp-list">{content.prd.mvpItems.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.detail}</dd></div>)}</dl></section>
                <section id="life-prd-metrics" data-project-reveal><h3>{content.prd.metricsTitle}</h3><p className="project-fact-notice">{content.prd.metricsNotice}</p><dl className="project-metrics-list">{content.prd.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.detail}</dd></div>)}</dl></section>
              </article>
            </div>
          </section>

          <section className="project-demo-section life-demo-section" id="demo">
            <div className="project-demo-inner">
              <div className="project-demo-copy" data-project-reveal><p>{content.demo.eyebrow}</p><h2>{content.demo.title}</h2><span>{content.demo.description}</span><a className="project-action project-action-primary" href={demoUrl} target="_blank" rel="noreferrer">{content.demo.open}<ExternalIcon /></a><small>{content.demo.externalNotice}</small></div>
              <div className="project-demo-window" data-project-reveal><div className="project-demo-browserbar"><i /><i /><i /><span>exchange-life.786383431.workers.dev</span></div><div className="project-demo-preview"><Image src="/portfolio/projects/life-exchange/cover.png" alt="" fill sizes="(max-width: 860px) 92vw, 48vw" /></div><p className="life-demo-boundary"><strong>{content.demo.currentLabel}</strong>{content.demo.currentBody}</p></div>
            </div>
            <div className="project-demo-steps" data-project-reveal><h3>{content.demo.focusTitle}</h3><ol>{content.demo.focus.map((item) => <li key={item.number}><span>{item.number}</span><strong>{item.title}</strong><p>{item.body}</p></li>)}</ol></div>
            <Link className="project-return-link" href={`/${locale}#projects`}>{content.demo.backProjects}<ArrowIcon /></Link>
          </section>
        </main>
      </ProjectReveal>
      <footer className="site-footer project-detail-footer life-detail-footer">{dictionary.footer.copyright}</footer>
    </div>
  );
}
