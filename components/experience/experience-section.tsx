"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Locale } from "@/content/i18n";
import { getExperienceContent } from "@/content/sections/experience";

const EXPERIENCE_PATH = "/portfolio/environment/experience";

function WorkCard({
  date,
  company,
  role,
  icon,
  children,
  outcomeLabel,
  outcome,
  tags,
}: {
  date: string;
  company: string;
  role: string;
  icon: string;
  children: ReactNode;
  outcomeLabel: string;
  outcome?: string;
  tags?: readonly string[];
}) {
  return (
    <article className="experience-card">
      <img className="experience-card-icon" src={icon} alt="" width="92" height="92" />
      <div className="experience-card-heading">
        <time>{date}</time>
        <h3>{company}</h3>
        <span>{role}</span>
      </div>
      <div className="experience-card-body">{children}</div>
      <div className="experience-card-outcome">
        <strong>{outcomeLabel}</strong>
        {tags ? (
          <ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        ) : (
          <p>{outcome}</p>
        )}
      </div>
    </article>
  );
}

function EducationCard({ image, school, program, date }: {
  image: string;
  school: string;
  program: string;
  date: string;
}) {
  return (
    <article className="education-card">
      <img src={image} alt="" width="190" height="150" />
      <div>
        <h3>{school}</h3>
        <p>{program}</p>
        <time>{date}</time>
      </div>
    </article>
  );
}

export function ExperienceSection({ locale, ariaLabel }: { locale: Locale; ariaLabel: string }) {
  const content = getExperienceContent(locale);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const projects = document.getElementById("projects");
    if (!section) return;

    let animationFrame = 0;
    let lastActiveSection = "";
    const updateEntryProgress = () => {
      animationFrame = 0;
      const viewportHeight = window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, (viewportHeight - sectionTop) / (viewportHeight * 0.9)));
      const exitProgress = Math.min(1, Math.max(0, (progress - 0.08) / 0.72));
      const contact = document.getElementById("contact");
      const contactTop = contact?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const contactProgress = Math.min(1, Math.max(0, (viewportHeight - contactTop) / (viewportHeight * 0.9)));
      const contactExitProgress = Math.min(1, Math.max(0, (contactProgress - 0.08) / 0.72));

      section.style.setProperty("--experience-entry-opacity", (0.18 + progress * 0.82).toFixed(3));
      section.style.setProperty("--experience-entry-offset", `${Math.round((1 - progress) * 46)}px`);
      section.style.setProperty("--experience-decoration-shift", `${Math.round((1 - progress) * 5)}px`);
      section.dataset.transitionProgress = progress.toFixed(3);

      projects?.style.setProperty("--projects-exit-opacity", (1 - exitProgress).toFixed(3));
      projects?.style.setProperty("--projects-exit-offset", `${Math.round(exitProgress * -26)}px`);
      section.style.setProperty("--experience-contact-opacity", (1 - contactExitProgress).toFixed(3));
      section.style.setProperty("--experience-contact-offset", `${Math.round(contactExitProgress * -28)}px`);
      contact?.style.setProperty("--contact-entry-opacity", (0.18 + contactProgress * 0.82).toFixed(3));
      contact?.style.setProperty("--contact-entry-offset", `${Math.round((1 - contactProgress) * 36)}px`);
      contact?.style.setProperty("--contact-decoration-shift", `${Math.round((1 - contactProgress) * 5)}px`);
      if (contactProgress >= 0.14) contact?.classList.add("is-visible");

      if (progress >= 0.16) setIsVisible(true);

      const projectTop = projects?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const activeSection = contactProgress >= 0.45
        ? "contact"
        : progress >= 0.45
          ? "experience"
          : projectTop <= viewportHeight * 0.45
            ? "projects"
            : "about";

      if (activeSection !== lastActiveSection) {
        lastActiveSection = activeSection;
        window.dispatchEvent(new CustomEvent("portfolio:active-section", { detail: { activeSection } }));
      }
    };
    const scheduleEntryUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateEntryProgress);
    };
    updateEntryProgress();
    window.addEventListener("scroll", scheduleEntryUpdate, { passive: true });
    window.addEventListener("resize", scheduleEntryUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleEntryUpdate);
      window.removeEventListener("resize", scheduleEntryUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      projects?.style.removeProperty("--projects-exit-opacity");
      projects?.style.removeProperty("--projects-exit-offset");
      section.style.removeProperty("--experience-contact-opacity");
      section.style.removeProperty("--experience-contact-offset");
      const contact = document.getElementById("contact");
      contact?.style.removeProperty("--contact-entry-opacity");
      contact?.style.removeProperty("--contact-entry-offset");
      contact?.style.removeProperty("--contact-decoration-shift");
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`experience-section${isVisible ? " is-visible" : ""}`}
      id="experience"
      aria-label={ariaLabel}
    >
      <div className="experience-section-inner">
        <img className="experience-cloud experience-cloud-large" src={`${EXPERIENCE_PATH}/clouds/cloud-large-peach.png.png`} alt="" />
        <img className="experience-cloud experience-cloud-small" src={`${EXPERIENCE_PATH}/clouds/cloud-small-cream.png.png`} alt="" />

        <div className="experience-layout">
          <section className="experience-work" aria-labelledby="experience-work-title">
            <div className="experience-intro experience-section-heading">
              <div className="experience-heading-row">
                <img className="experience-heading-icon" src={`${EXPERIENCE_PATH}/decorations/floating-plant.png.png`} alt="" />
                <h2 id="experience-work-title">{content.workTitle}</h2>
              </div>
              <img className="experience-computer-icon" src={`${EXPERIENCE_PATH}/decorations/pixel-computer.png.png`} alt="" width="180" height="180" />
            </div>

            <div className="experience-timeline">
              {content.work.map((item, index) => (
                <WorkCard
                  date={item.date}
                  company={item.company}
                  role={item.role}
                  icon={`${EXPERIENCE_PATH}/cards/${index === 0 ? "ai-teaching" : "ai-intern"}-icon.png.png`}
                  outcomeLabel={item.outcomeLabel}
                  outcome={item.outcome}
                  tags={item.tags}
                  key={item.company}
                >
                  <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </WorkCard>
              ))}
            </div>
          </section>

          <div className="experience-divider" aria-hidden="true" />

          <section className="experience-education" aria-labelledby="experience-education-title">
            <div className="experience-education-title experience-section-heading">
              <div className="experience-heading-row">
                <img className="experience-heading-icon" src={`${EXPERIENCE_PATH}/decorations/flower-patch.png.png`} alt="" />
                <h2 id="experience-education-title">{content.educationTitle}</h2>
              </div>
            </div>
            <div className="experience-education-cards">
              {content.education.map((item, index) => (
                <EducationCard
                  image={`${EXPERIENCE_PATH}/education/${index === 0 ? "gafa" : "hnu"}-building.png.png`}
                  {...item}
                  key={item.school}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
