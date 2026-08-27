"use client";

import { useEffect, useRef, useState } from "react";
import type { VibeCodingContent } from "@/content/projects/vibe-coding";

type CourseMapProps = { content: VibeCodingContent["courseMap"] };

export function VibeCodingCourseMap({ content }: CourseMapProps) {
  const [stageIndex, setStageIndex] = useState(0);
  const [lessonIndex, setLessonIndex] = useState(0);
  const stage = content.stages[stageIndex];
  const lesson = stage.lessons[lessonIndex];

  function selectStage(index: number) {
    setStageIndex(index);
    setLessonIndex(0);
  }

  return (
    <div className="vibe-course-map" data-project-reveal>
      <div className="vibe-stage-tabs" role="tablist" aria-label={content.stageLabel}>
        {content.stages.map((item, index) => (
          <button
            aria-selected={stageIndex === index}
            className={stageIndex === index ? "is-active" : undefined}
            key={item.number}
            onClick={() => selectStage(index)}
            role="tab"
            type="button"
          >
            <span>{item.number}</span>
            <strong>{item.title}</strong>
            <small>{item.outcome}</small>
          </button>
        ))}
      </div>

      <div className="vibe-stage-detail">
        <header>
          <p>{content.stageLabel} {stage.number}</p>
          <h3>{stage.question}</h3>
          <span>{stage.outcome}</span>
        </header>
        <div className="vibe-lesson-tabs" role="tablist" aria-label={content.lessonLabel}>
          {stage.lessons.map((item, index) => (
            <button
              aria-selected={lessonIndex === index}
              className={lessonIndex === index ? "is-active" : undefined}
              key={item.number}
              onClick={() => setLessonIndex(index)}
              role="tab"
              type="button"
            >
              <span>{item.number}</span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>
        <article className="vibe-lesson-detail" key={lesson.number} role="tabpanel">
          <div><span>{content.lessonLabel}</span><strong>{lesson.number}</strong></div>
          <section><span>{content.focusLabel}</span><p>{lesson.focus}</p></section>
          <section><span>{content.taskLabel}</span><p>{lesson.task}</p></section>
          <section><span>{content.outputLabel}</span><p>{lesson.output}</p></section>
        </article>
      </div>
    </div>
  );
}

function MetricValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const target = Number.parseFloat(value);
    const suffix = value.replace(/[\d.]/g, "");
    const decimals = value.includes(".") ? 1 : 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const run = () => {
      if (reducedMotion) {
        setDisplay(value);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 900, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(`${(target * eased).toFixed(decimals)}${suffix}`);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      run();
      observer.disconnect();
    }, { threshold: 0.45 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

export function VibeCodingMetrics({ metrics }: { metrics: VibeCodingContent["results"]["metrics"] }) {
  return (
    <div className="vibe-results-metrics" data-project-reveal>
      {metrics.map((metric) => (
        <article key={metric.label}>
          <MetricValue value={metric.value} />
          <p>{metric.label}</p>
        </article>
      ))}
    </div>
  );
}
