"use client";

/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import type { Locale } from "@/content/i18n";
import { getAboutContent, type AboutStory } from "@/content/sections/about";
import { LetterDialog } from "./letter-dialog";

const ABOUT_PATH = "/portfolio/environment/about";
const birdFrames = [
  `${ABOUT_PATH}/opening/bird-flock-01.png`,
  `${ABOUT_PATH}/opening/bird-flock-02.png`,
  `${ABOUT_PATH}/opening/bird-flock-03.png`,
] as const;
const birdSequence = [0, 1, 2, 1, 0] as const;

function OpeningSection({ label }: { label: string }) {
  const [birdSequenceIndex, setBirdSequenceIndex] = useState(0);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;

    const syncBirdAnimation = () => {
      if (timer) window.clearInterval(timer);
      if (motionPreference.matches) {
        setBirdSequenceIndex(0);
        return;
      }
      timer = window.setInterval(() => {
        setBirdSequenceIndex((index) => index === birdSequence.length - 1 ? 1 : index + 1);
      }, 160);
    };

    syncBirdAnimation();
    motionPreference.addEventListener("change", syncBirdAnimation);
    return () => {
      if (timer) window.clearInterval(timer);
      motionPreference.removeEventListener("change", syncBirdAnimation);
    };
  }, []);

  return (
    <section className="about-opening" aria-label={label}>
      <div className="mountain-layer" aria-hidden="true">
        <img className="about-pixel-layer about-opening-mountain" src={`${ABOUT_PATH}/opening/mountain-ridge.png.png`} alt="" draggable="false" />
      </div>
      <div className="cloud-layer" aria-hidden="true">
        <img className="about-pixel-layer about-opening-cloud" src={`${ABOUT_PATH}/opening/cloud-layer.png.png`} alt="" draggable="false" />
      </div>
      <div className="bird-layer" aria-hidden="true">
        <img className="about-pixel-layer about-opening-bird" src={birdFrames[birdSequence[birdSequenceIndex]]} alt="" draggable="false" />
      </div>
    </section>
  );
}

function StoryScene({ background, scene }: { background: string; scene: string }) {
  return (
    <div className="about-story-scene" aria-hidden="true">
      <img className="about-story-layer about-story-background" src={background} alt="" draggable="false" />
      <img className="about-story-layer about-story-foreground" src={scene} alt="" draggable="false" />
    </div>
  );
}

function StorySection({ story, index, reversed, methodsLabel, onOpen }: {
  story: AboutStory;
  index: number;
  reversed: boolean;
  methodsLabel: string;
  onOpen: (story: AboutStory) => void;
}) {
  return (
    <section
      className={`about-story about-story-${story.number}${reversed ? " is-reversed" : ""}`}
      style={{ "--about-story-index": index } as CSSProperties}
    >
      <div className="about-story-inner">
        <div className="about-story-copy">
          <span className="about-story-number">{story.number}</span>
          <h2>{story.title}</h2>
          <p>{story.summary}</p>
          {story.tags ? (
            <ul className="about-story-tags" aria-label={methodsLabel}>
              {story.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          ) : null}
          <button className="about-story-button" type="button" onClick={() => onOpen(story)} aria-haspopup="dialog">
            {story.button}
          </button>
        </div>
        <StoryScene background={story.background} scene={story.scene} />
      </div>
    </section>
  );
}

const portalParticles = [
  [18, 26, 4, 0], [30, 18, 3, 1.2], [45, 12, 5, 2.1], [62, 17, 3, 0.7],
  [78, 27, 4, 1.8], [86, 43, 3, 2.7], [75, 58, 5, 0.4], [66, 76, 3, 1.5],
  [49, 84, 4, 2.3], [32, 75, 3, 0.9], [20, 61, 5, 1.9], [13, 44, 3, 2.9],
  [37, 34, 3, 1.1], [56, 29, 4, 2.5], [67, 42, 3, 0.2], [55, 61, 5, 1.7],
  [39, 59, 4, 2.8], [29, 47, 3, 0.5], [46, 45, 5, 1.4], [58, 49, 3, 2.2],
] as const;

const waterGlints = [
  [5, 26, 4, 0.4], [11, 68, 7, 1.7], [18, 43, 3, 2.8], [25, 77, 5, 0.9],
  [33, 30, 8, 2.1], [39, 61, 4, 1.3], [47, 84, 6, 3], [53, 37, 3, 0.2],
  [61, 69, 7, 1.9], [68, 24, 4, 2.6], [75, 52, 8, 0.8], [82, 78, 3, 1.5],
  [89, 34, 6, 2.4], [95, 66, 4, 0.6],
] as const;

function PortalNebula({ reflection = false }: { reflection?: boolean }) {
  return (
    <span className={`about-ending-nebula${reflection ? " is-reflection" : ""}`} aria-hidden="true">
      <span className="about-ending-nebula-core" />
      <span className="about-ending-nebula-orbit">
        {portalParticles.map(([x, y, size, delay], index) => (
          <span
            className="about-ending-nebula-particle"
            key={`${x}-${y}-${index}`}
            style={{
              "--particle-x": `${x}%`, "--particle-y": `${y}%`,
              "--particle-size": `${size}px`, "--particle-delay": `${delay}s`,
            } as CSSProperties}
          />
        ))}
      </span>
    </span>
  );
}

function EndingSection({ label, portalLabel }: { label: string; portalLabel: string }) {
  const [portalAwake, setPortalAwake] = useState(false);

  return (
    <section className="about-ending" aria-label={label}>
      <div className="about-ending-clouds" aria-hidden="true">
        <span className="about-ending-cloud-wrap is-left"><img src={`${ABOUT_PATH}/ending/01-cloud-large-left.png.png`} alt="" draggable="false" /></span>
        <span className="about-ending-cloud-wrap is-right"><img src={`${ABOUT_PATH}/ending/02-cloud-large-right.png.png`} alt="" draggable="false" /></span>
        <span className="about-ending-cloud-wrap is-behind"><img src={`${ABOUT_PATH}/ending/03-cloud-behind-door.png.png`} alt="" draggable="false" /></span>
        <span className="about-ending-cloud-wrap is-distant"><img src={`${ABOUT_PATH}/ending/04-cloud-distant-small.png.png`} alt="" draggable="false" /></span>
      </div>

      <div className="about-ending-water" aria-hidden="true">
        <div className="about-ending-water-lines" />
        {waterGlints.map(([x, y, width, delay], index) => (
          <span
            className="about-ending-water-glint"
            key={`${x}-${y}-${index}`}
            style={{
              "--glint-x": `${x}%`, "--glint-y": `${y}%`,
              "--glint-width": `${width}px`, "--glint-delay": `${delay}s`,
            } as CSSProperties}
          />
        ))}
      </div>

      <div className={`about-ending-portal-scene${portalAwake ? " is-awake" : ""}`}>
        <button className="about-ending-portal" type="button" aria-label={portalLabel} aria-pressed={portalAwake} onClick={() => setPortalAwake((awake) => !awake)}>
          <PortalNebula />
          <img className="about-ending-portal-frame" src={`${ABOUT_PATH}/ending/05-portal-door-frame.png.png`} alt="" draggable="false" />
        </button>
        <div className="about-ending-portal-reflection" aria-hidden="true">
          <PortalNebula reflection />
          <img className="about-ending-portal-frame" src={`${ABOUT_PATH}/ending/05-portal-door-frame.png.png`} alt="" draggable="false" />
        </div>
      </div>
    </section>
  );
}

export function AboutExperience({ locale }: { locale: Locale }) {
  const content = getAboutContent(locale);
  const [letterStory, setLetterStory] = useState<AboutStory | null>(null);
  const closeLetter = useCallback(() => setLetterStory(null), []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".about-story");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.18 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".about-story"));
    let animationFrame = 0;

    const updateStackProgress = () => {
      animationFrame = 0;
      const viewportHeight = window.innerHeight;
      const headerHeight = window.innerWidth <= 639 ? 58 : window.innerWidth <= 1099 ? 64 : 72;
      const transitionStart = viewportHeight * 0.94;
      const transitionEnd = headerHeight + viewportHeight * 0.16;
      const transitionDistance = Math.max(1, transitionStart - transitionEnd);

      sections.forEach((section, index) => {
        const nextSection = sections[index + 1];
        const progress = nextSection
          ? Math.min(1, Math.max(0, (transitionStart - nextSection.getBoundingClientRect().top) / transitionDistance))
          : 0;

        section.style.setProperty("--about-story-exit-opacity", (1 - progress * 0.28).toFixed(3));
        section.style.setProperty("--about-story-exit-offset", `${Math.round(progress * -24)}px`);
        section.style.setProperty("--about-story-exit-scale", (1 - progress * 0.018).toFixed(4));
        section.style.setProperty("--about-story-exit-brightness", (1 - progress * 0.16).toFixed(3));
        section.style.setProperty("--about-story-exit-saturation", (1 - progress * 0.22).toFixed(3));
        section.style.setProperty("--about-story-exit-overlay", (progress * 0.12).toFixed(3));
      });
    };

    const scheduleStackUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateStackProgress);
    };

    updateStackProgress();
    window.addEventListener("scroll", scheduleStackUpdate, { passive: true });
    window.addEventListener("resize", scheduleStackUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleStackUpdate);
      window.removeEventListener("resize", scheduleStackUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      sections.forEach((section) => {
        section.style.removeProperty("--about-story-exit-opacity");
        section.style.removeProperty("--about-story-exit-offset");
        section.style.removeProperty("--about-story-exit-scale");
        section.style.removeProperty("--about-story-exit-brightness");
        section.style.removeProperty("--about-story-exit-saturation");
        section.style.removeProperty("--about-story-exit-overlay");
      });
    };
  }, []);

  return (
    <>
      <OpeningSection label={content.openingLabel} />
      <div className="about-story-stack">
        {content.stories.map((story, index) => (
          <StorySection
            story={story}
            index={index}
            reversed={index % 2 === 1}
            methodsLabel={content.methodsLabel}
            onOpen={setLetterStory}
            key={story.number}
          />
        ))}
      </div>
      <EndingSection label={content.endingLabel} portalLabel={content.portalLabel} />
      {letterStory ? (
        <LetterDialog
          body={letterStory.body}
          chapterNumber={letterStory.number}
          chapterLabel={letterStory.letterLabel}
          labels={content.dialog}
          paginated={letterStory.number === "03"}
          onClose={closeLetter}
        />
      ) : null}
    </>
  );
}
