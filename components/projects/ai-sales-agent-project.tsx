import Image from "next/image";
import Link from "next/link";
import { HomeHeader } from "@/components/home/home-header";
import type { Dictionary, Locale } from "@/content/i18n";
import { getSalesAgentContent } from "@/content/projects/ai-sales-agent";
import { ProjectReveal } from "./project-reveal";

type SalesAgentProjectProps = { locale: Locale; dictionary: Dictionary };

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M14 6l6 6-6 6" /></svg>;
}

export function SalesAgentProject({ locale, dictionary }: SalesAgentProjectProps) {
  const content = getSalesAgentContent(locale);
  const ownerLabel = { agent: content.workflow.agentLabel, system: content.workflow.systemLabel, human: content.workflow.humanLabel };

  return (
    <div className="project-detail-page sales-agent-project" data-locale={locale}>
      <HomeHeader locale={locale} navigation={dictionary.navigation} activeItem="projects" />
      <ProjectReveal>
        <main>
          <section className="sales-agent-hero" id="project-overview">
            <div className="sales-agent-signals" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div>
            <div className="sales-agent-hero-inner">
              <div className="sales-agent-hero-copy" data-project-reveal>
                <Link className="project-back-link" href={`/${locale}#projects`}><span aria-hidden="true">←</span>{content.back}</Link>
                <p className="project-eyebrow">{content.hero.eyebrow}</p>
                <h1>{content.hero.title}</h1>
                <h2>{content.hero.subtitle}</h2>
                <p className="sales-agent-hero-description">{content.hero.description}</p>
                <ul className="project-tag-list" aria-label="Project tags">{content.hero.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <div className="project-hero-actions">
                  <a className="project-action sales-agent-primary-action" href="#prd">{content.hero.readPrd}<ArrowIcon /></a>
                  <a className="project-action sales-agent-secondary-action" href="#architecture">{content.hero.viewArchitecture}<ArrowIcon /></a>
                </div>
              </div>
              <div className="sales-agent-hero-visual" data-project-reveal>
                <div className="sales-agent-cover-frame">
                  <Image src="/portfolio/projects/ai-sales-agent/cover.png" alt={content.hero.coverAlt} fill priority sizes="(max-width: 900px) 92vw, 48vw" />
                  <span>AI SALES AGENT / PRD</span>
                </div>
                <div className="sales-agent-mini-flow" aria-hidden="true">
                  {content.architecture.chain.slice(0, 5).map((item, index) => <span key={item}><i>{String(index + 1).padStart(2, "0")}</i>{item}</span>)}
                </div>
              </div>
            </div>
          </section>

          <nav className="project-local-nav" aria-label="Project sections"><div>
            <a href="#project-overview">{content.localNav.overview}</a><a href="#workflow">{content.localNav.workflow}</a>
            <a href="#architecture">{content.localNav.architecture}</a><a href="#prd">{content.localNav.prd}</a><a href="#sales-prd-validation">{content.localNav.validation}</a>
          </div></nav>

          <section className="project-story-section project-problem-section">
            <div className="project-section-heading" data-project-reveal><span>{content.problem.index}</span><div><p>{content.problem.kicker}</p><h2>{content.problem.title}</h2></div></div>
            <p className="project-section-lead" data-project-reveal>{content.problem.description}</p>
            <div className="sales-agent-problem-grid">{content.problem.items.map((item, index) => <article key={item.title} data-project-reveal style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </section>

          <section className="sales-agent-workflow-section" id="workflow">
            <div className="sales-agent-section-inner">
              <div className="project-section-heading" data-project-reveal><span>{content.workflow.index}</span><div><p>{content.workflow.kicker}</p><h2>{content.workflow.title}</h2></div></div>
              <p className="project-section-lead" data-project-reveal>{content.workflow.description}</p>
              <div className="sales-agent-legend" data-project-reveal><span data-owner="agent">{content.workflow.agentLabel}</span><span data-owner="system">{content.workflow.systemLabel}</span><span data-owner="human">{content.workflow.humanLabel}</span></div>
              <ol className="sales-agent-workflow" data-project-reveal>
                {content.workflow.nodes.map((node, index) => (
                  <li key={node.number} data-owner={node.owner} tabIndex={0} style={{ "--node-delay": `${index * 90}ms` } as React.CSSProperties}>
                    <span>{node.number}</span><strong>{node.title}</strong><small>{ownerLabel[node.owner]}</small>
                    <div><b>{node.role}</b><p>{node.output}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="project-story-section project-decisions-section">
            <div className="project-section-heading" data-project-reveal><span>{content.decisions.index}</span><div><p>{content.decisions.kicker}</p><h2>{content.decisions.title}</h2></div></div>
            <div className="project-decision-list">{content.decisions.items.map((item) => <article key={item.number} data-project-reveal><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.body}</p><small>{item.boundary}</small></div></article>)}</div>
          </section>

          <section className="sales-agent-architecture-section" id="architecture">
            <div className="sales-agent-section-inner">
              <div className="project-section-heading" data-project-reveal><span>{content.architecture.index}</span><div><p>{content.architecture.kicker}</p><h2>{content.architecture.title}</h2></div></div>
              <p className="project-section-lead" data-project-reveal>{content.architecture.description}</p>
              <div className="sales-agent-layer-grid">{content.architecture.layers.map((layer, index) => <article key={layer.label} data-project-reveal style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}><span>{layer.label}</span><h3>{layer.title}</h3><p>{layer.body}</p></article>)}</div>
              <ol className="sales-agent-architecture-chain" data-project-reveal>{content.architecture.chain.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ol>
            </div>
          </section>

          <section className="project-prd-section sales-agent-prd-section" id="prd">
            <header className="project-prd-header" data-project-reveal><p>{content.prd.eyebrow}</p><h2>{content.prd.title}</h2><span>{content.prd.description}</span></header>
            <div className="project-prd-layout">
              <aside className="project-prd-toc" data-project-reveal><strong>{content.prd.tocLabel}</strong><nav>{content.prd.toc.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></aside>
              <article className="project-prd-document">
                <section id="sales-prd-context" data-project-reveal><h3>{content.prd.contextTitle}</h3><p>{content.prd.context}</p><h4>{content.prd.valuesTitle}</h4><div className="sales-agent-value-grid">{content.prd.values.map((item) => <div key={item.title}><strong>{item.title}</strong><p>{item.body}</p></div>)}</div></section>
                <section id="sales-prd-users" data-project-reveal><h3>{content.prd.usersTitle}</h3><div className="project-user-list sales-agent-user-list">{content.prd.users.map((user) => <div key={user.title}><strong>{user.title}</strong><p>{user.need}</p></div>)}</div><h4>{content.prd.scenariosTitle}</h4><ul className="sales-agent-scenario-list">{content.prd.scenarios.map((item) => <li key={item}>{item}</li>)}</ul></section>
                <section id="sales-prd-modules" data-project-reveal><h3>{content.prd.modulesTitle}</h3><div className="project-scope-table" role="table"><div className="project-scope-row sales-agent-module-row project-scope-head" role="row">{content.prd.moduleHeaders.map((header) => <strong key={header} role="columnheader">{header}</strong>)}</div>{content.prd.modules.map((row) => <div className="project-scope-row sales-agent-module-row" role="row" key={row.module}><strong role="cell">{row.module}</strong><span role="cell">{row.owner}</span><p role="cell">{row.detail}</p></div>)}</div></section>
                <section id="sales-prd-rag" data-project-reveal><h3>{content.prd.ragTitle}</h3><p>{content.prd.ragDescription}</p><ol className="sales-agent-rag-chain">{content.prd.ragChain.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ol><h4>{content.prd.profileTitle}</h4><p>{content.prd.profileDescription}</p><ul className="sales-agent-profile-fields">{content.prd.profileFields.map((field) => <li key={field}>{field}</li>)}</ul></section>
                <section id="sales-prd-data" data-project-reveal><h3>{content.prd.dataTitle}</h3><p>{content.prd.dataDescription}</p><div className="sales-agent-data-grid">{content.prd.dataRows.map((row) => <article key={row.type}><strong>{row.type}</strong><p>{row.examples}</p><span>{row.method}</span></article>)}</div></section>
                <section id="sales-prd-fallback" data-project-reveal><h3>{content.prd.fallbackTitle}</h3><p>{content.prd.fallbackDescription}</p><div className="sales-agent-fallback-list">{content.prd.fallbackRows.map((row) => <div key={row.issue}><strong>{row.issue}</strong><span>{row.response}</span></div>)}</div></section>
                <section id="sales-prd-validation" data-project-reveal><h3>{content.prd.validationTitle}</h3><p className="project-fact-notice">{content.prd.validationNotice}</p><div className="sales-agent-validation-grid">{content.prd.validations.map((item) => <article key={item.number}><span>{item.number}</span><h4>{item.title}</h4><ul>{item.checks.map((check) => <li key={check}>{check}</li>)}</ul></article>)}</div></section>
              </article>
            </div>
          </section>

          <section className="sales-agent-ending">
            <div data-project-reveal><p className="project-eyebrow">{content.ending.eyebrow}</p><h2>{content.ending.title}</h2><span>{content.ending.description}</span><Link className="project-return-link" href={`/${locale}#projects`}>{content.ending.backProjects}<ArrowIcon /></Link></div>
          </section>
        </main>
      </ProjectReveal>
      <footer className="site-footer project-detail-footer sales-agent-detail-footer">{dictionary.footer.copyright}</footer>
    </div>
  );
}
