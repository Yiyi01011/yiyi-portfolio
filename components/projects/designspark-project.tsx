import Image from "next/image";
import Link from "next/link";
import { HomeHeader } from "@/components/home/home-header";
import type { Dictionary, Locale } from "@/content/i18n";
import { getDesignSparkContent } from "@/content/projects/designspark";
import { ProjectReveal } from "./project-reveal";

const demoUrl = "https://yiyi01011.online/";

type DesignSparkProjectProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M14 6l6 6-6 6" /></svg>;
}

function ExternalIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 5h10v10M19 5 8 16M15 19H5V9" /></svg>;
}

export function DesignSparkProject({ locale, dictionary }: DesignSparkProjectProps) {
  const content = getDesignSparkContent(locale);

  return (
    <div className="project-detail-page designspark-project" data-locale={locale}>
      <HomeHeader locale={locale} navigation={dictionary.navigation} activeItem="projects" />
      <ProjectReveal>
        <main>
          <section className="designspark-hero" id="project-overview">
            <div className="designspark-hero-sparks" aria-hidden="true">
              <i /><i /><i /><i /><i />
            </div>
            <div className="designspark-hero-inner">
              <div className="designspark-hero-copy" data-project-reveal>
                <Link className="project-back-link" href={`/${locale}#projects`}>
                  <span aria-hidden="true">←</span>{content.back}
                </Link>
                <p className="project-eyebrow">{content.hero.eyebrow}</p>
                <h1>{content.hero.title}</h1>
                <h2>{content.hero.subtitle}</h2>
                <p className="designspark-hero-description">{content.hero.description}</p>
                <ul className="project-tag-list" aria-label="Project tags">
                  {content.hero.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-hero-actions">
                  <a className="project-action project-action-primary" href={demoUrl} target="_blank" rel="noreferrer">
                    {content.hero.demo}<ExternalIcon />
                  </a>
                  <a className="project-action project-action-secondary" href="#prd">
                    {content.hero.readPrd}<ArrowIcon />
                  </a>
                </div>
              </div>

              <div className="designspark-hero-visual" data-project-reveal>
                <div className="designspark-cover-frame">
                  <Image
                    src="/portfolio/projects/designspark/cover.png"
                    alt={content.hero.coverAlt}
                    fill
                    priority
                    sizes="(max-width: 860px) 92vw, 48vw"
                  />
                  <span className="designspark-cover-label">DESIGNSPARK / V1</span>
                </div>
                <ol className="designspark-journey" aria-label={content.solution.title}>
                  {content.hero.journey.map((step, index) => (
                    <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <nav className="project-local-nav" aria-label="Project sections">
            <div>
              <a href="#project-overview">{content.localNav.overview}</a>
              <a href="#solution">{content.localNav.solution}</a>
              <a href="#prd">{content.localNav.prd}</a>
              <a href="#demo">{content.localNav.demo}</a>
            </div>
          </nav>

          <section className="project-story-section project-problem-section">
            <div className="project-section-heading" data-project-reveal>
              <span>{content.problem.index}</span>
              <div><p>{content.problem.kicker}</p><h2>{content.problem.title}</h2></div>
            </div>
            <p className="project-section-lead" data-project-reveal>{content.problem.description}</p>
            <div className="project-problem-grid">
              {content.problem.items.map((item, index) => (
                <article key={item.title} data-project-reveal style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}>
                  <span aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="project-story-section designspark-solution" id="solution">
            <div className="project-section-heading" data-project-reveal>
              <span>{content.solution.index}</span>
              <div><p>{content.solution.kicker}</p><h2>{content.solution.title}</h2></div>
            </div>
            <p className="project-section-lead" data-project-reveal>{content.solution.description}</p>
            <div className="designspark-module-map" data-project-reveal>
              {content.solution.modules.map((module) => (
                <article key={module.label}>
                  <span>{module.label}</span><h3>{module.title}</h3><p>{module.body}</p><small>{module.output}</small>
                </article>
              ))}
              <div className="designspark-module-bridge" aria-hidden="true"><i /><i /><i /></div>
            </div>
            <p className="designspark-principle" data-project-reveal>{content.solution.principle}</p>
          </section>

          <section className="project-story-section project-decisions-section">
            <div className="project-section-heading" data-project-reveal>
              <span>{content.decisions.index}</span>
              <div><p>{content.decisions.kicker}</p><h2>{content.decisions.title}</h2></div>
            </div>
            <div className="project-decision-list">
              {content.decisions.items.map((item) => (
                <article key={item.number} data-project-reveal>
                  <span>{item.number}</span><div><h3>{item.title}</h3><p>{item.body}</p><small>{item.excluded}</small></div>
                </article>
              ))}
            </div>
          </section>

          <section className="project-prd-section" id="prd">
            <header className="project-prd-header" data-project-reveal>
              <p>{content.prd.eyebrow}</p><h2>{content.prd.title}</h2><span>{content.prd.description}</span>
            </header>
            <div className="project-prd-layout">
              <aside className="project-prd-toc" data-project-reveal>
                <strong>{content.prd.tocLabel}</strong>
                <nav>{content.prd.toc.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
              </aside>
              <article className="project-prd-document">
                <section id="prd-context" data-project-reveal><h3>{content.prd.contextTitle}</h3><p>{content.prd.context}</p></section>
                <section id="prd-users" data-project-reveal>
                  <h3>{content.prd.usersTitle}</h3>
                  <div className="project-user-list">{content.prd.users.map((user) => <div key={user.title}><strong>{user.title}</strong><p>{user.need}</p></div>)}</div>
                  <div className="project-goal-columns">
                    <div><h4>{content.prd.goalsTitle}</h4><ul>{content.prd.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul></div>
                    <div><h4>{content.prd.nonGoalsTitle}</h4><ul>{content.prd.nonGoals.map((goal) => <li key={goal}>{goal}</li>)}</ul></div>
                  </div>
                </section>
                <section id="prd-scope" data-project-reveal>
                  <h3>{content.prd.scopeTitle}</h3>
                  <div className="project-scope-table" role="table">
                    <div className="project-scope-row project-scope-head" role="row">{content.prd.scopeHeaders.map((header) => <strong key={header} role="columnheader">{header}</strong>)}</div>
                    {content.prd.scope.map((row) => <div className="project-scope-row" role="row" key={row.module}><strong role="cell">{row.module}</strong><span role="cell" data-status={row.status}>{row.statusLabel}</span><p role="cell">{row.detail}</p></div>)}
                  </div>
                </section>
                <section id="prd-flow" data-project-reveal>
                  <h3>{content.prd.flowTitle}</h3>
                  <ol className="project-flow-list">{content.prd.flow.map((step) => <li key={step.number}><span>{step.number}</span><div><strong>{step.title}</strong><p>{step.body}</p></div></li>)}</ol>
                </section>
                <section id="prd-architecture" data-project-reveal>
                  <h3>{content.prd.architectureTitle}</h3><p>{content.prd.architectureDescription}</p>
                  <ol className="project-architecture-flow">{content.prd.architecture.map((item) => <li key={item}>{item}</li>)}</ol>
                </section>
                <section id="prd-metrics" data-project-reveal>
                  <h3>{content.prd.metricsTitle}</h3><p className="project-fact-notice">{content.prd.metricsNotice}</p>
                  <dl className="project-metrics-list">{content.prd.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.detail}</dd></div>)}</dl>
                  <h4>{content.prd.boundaryTitle}</h4><ul>{content.prd.boundaries.map((boundary) => <li key={boundary}>{boundary}</li>)}</ul>
                </section>
              </article>
            </div>
          </section>

          <section className="project-demo-section" id="demo">
            <div className="project-demo-inner">
              <div className="project-demo-copy" data-project-reveal>
                <p>{content.demo.eyebrow}</p><h2>{content.demo.title}</h2><span>{content.demo.description}</span>
                <a className="project-action project-action-primary" href={demoUrl} target="_blank" rel="noreferrer">{content.demo.open}<ExternalIcon /></a>
                <small>{content.demo.externalNotice}</small>
              </div>
              <div className="project-demo-window" data-project-reveal>
                <div className="project-demo-browserbar"><i /><i /><i /><span>yiyi01011.online</span></div>
                <div className="project-demo-preview"><Image src="/portfolio/projects/designspark/cover.png" alt="" fill sizes="(max-width: 860px) 92vw, 48vw" /></div>
              </div>
            </div>
            <div className="project-demo-steps" data-project-reveal>
              <h3>{content.demo.stepsTitle}</h3>
              <ol>{content.demo.steps.map((step) => <li key={step.number}><span>{step.number}</span><strong>{step.title}</strong><p>{step.body}</p></li>)}</ol>
            </div>
            <Link className="project-return-link" href={`/${locale}#projects`}>{content.demo.backProjects}<ArrowIcon /></Link>
          </section>
        </main>
      </ProjectReveal>
      <footer className="site-footer project-detail-footer">{dictionary.footer.copyright}</footer>
    </div>
  );
}

