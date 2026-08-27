"use client";

import { useState } from "react";
import type { LifeExchangeContent, LifeExchangeMode } from "@/content/projects/life-exchange";

type ModeExplorerProps = {
  content: LifeExchangeContent["model"];
};

export function LifeExchangeModeExplorer({ content }: ModeExplorerProps) {
  const [activeId, setActiveId] = useState<LifeExchangeMode["id"]>("event-dual");
  const [view, setView] = useState<"single" | "dual">("dual");
  const activeMode = content.modes.find((mode) => mode.id === activeId) ?? content.modes[1];

  function selectMode(mode: LifeExchangeMode) {
    setActiveId(mode.id);
    setView(mode.id.endsWith("dual") ? "dual" : "single");
  }

  return (
    <div className="life-mode-explorer" data-project-reveal>
      <div className="life-mode-grid" aria-label={content.title}>
        {content.modes.map((mode) => (
          <button
            className="life-mode-button"
            data-active={mode.id === activeId}
            key={mode.id}
            onClick={() => selectMode(mode)}
            type="button"
            aria-pressed={mode.id === activeId}
          >
            <span className="life-mode-icon" aria-hidden="true"><i>A</i><i>B</i></span>
            <small>{mode.code}</small>
            <strong>{mode.title}</strong>
          </button>
        ))}
      </div>

      <article className="life-mode-detail">
        <div className="life-mode-detail-copy">
          <div className="life-view-switch" aria-label={content.viewLabel}>
            <span>{content.viewLabel}</span>
            <button type="button" data-active={view === "single"} onClick={() => setView("single")}>{content.singleLabel}</button>
            <button type="button" data-active={view === "dual"} onClick={() => setView("dual")}>{content.dualLabel}</button>
          </div>
          <h3>{activeMode.title}</h3>
          <dl>
            <div><dt>{activeMode.scope}</dt><dd>{activeMode.participation}</dd></div>
            <div><dt>{activeMode.visibility}</dt><dd>{activeMode.output}</dd></div>
          </dl>
        </div>
        <div className="life-flow-diagram" data-view={view}>
          <span className="life-flow-label">{content.flowLabel}</span>
          <div className="life-flow-track life-flow-track-a"><i>A</i><b /></div>
          <div className="life-flow-track life-flow-track-b"><i>B</i><b /></div>
          <ol>
            {activeMode.steps.map((step, index) => <li key={step}><span>{index + 1}</span><strong>{step}</strong></li>)}
          </ol>
        </div>
      </article>
    </div>
  );
}

type PrivacyRevealProps = {
  content: LifeExchangeContent["privacy"];
};

export function LifeExchangePrivacyReveal({ content }: PrivacyRevealProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="life-privacy-experience" data-revealed={revealed} data-project-reveal>
      <div className="life-privacy-panels">
        <article><span>A</span><small>{content.privateLabel}</small><p>{content.privateBody}</p></article>
        <div className="life-privacy-gate" aria-hidden="true"><i /><b>×</b><i /></div>
        <article><span>A + B</span><small>{content.sharedLabel}</small><p>{content.sharedBody}</p></article>
      </div>
      <button className="life-privacy-toggle" type="button" onClick={() => setRevealed((value) => !value)} aria-expanded={revealed}>
        <span aria-hidden="true">{revealed ? "−" : "+"}</span>{revealed ? content.hide : content.reveal}
      </button>
      <div className="life-privacy-rules" aria-hidden={!revealed}>
        <strong>{content.revealed}</strong>
        <ul>{content.rules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
      </div>
    </div>
  );
}
