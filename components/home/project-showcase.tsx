"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";

type ProjectCard = {
  slug: string;
  href: string;
  cover: string;
  name: string;
  title: string;
  tags: readonly string[];
};

type ProjectShowcaseProps = {
  ariaLabel: string;
  heading: string;
  readProjectLabel: string;
  projects: ProjectCard[];
};

export function ProjectShowcase({ ariaLabel, heading, readProjectLabel, projects }: ProjectShowcaseProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    grid.classList.add("is-motion-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        grid.classList.add("is-visible");
        observer.disconnect();
      },
      { threshold: 0.18 },
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects" aria-label={ariaLabel}>
      <div className="projects-panel">
        <div className="projects-heading">
          <h2>{heading}</h2>
          <div className="projects-progress" aria-label={`1 / ${projects.length}`}>
            <span>01</span>
            <span aria-hidden="true">—</span>
            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="projects-carousel-shell">
          <div className="projects-grid" ref={gridRef}>
            {projects.map((project, projectIndex) => {
              return (
                <Link
                  className="project-card"
                  href={project.href}
                  key={project.slug}
                  aria-label={`${project.name}: ${project.title}. ${project.tags.join(", ")}. ${readProjectLabel}`}
                  style={{ "--project-order": projectIndex } as CSSProperties}
                >
                  <div className="project-card-media">
                    <Image
                      src={project.cover}
                      alt=""
                      fill
                      sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 899px) 44vw, (max-width: 1279px) 29vw, 18vw"
                    />
                    <ul className="project-card-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <li key={tag} style={{ "--tag-order": tagIndex } as CSSProperties}>{tag}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-card-content">
                    <div>
                      <strong>{project.name}</strong>
                      <p>{project.title}</p>
                    </div>
                    <span className="project-card-action" aria-hidden="true">
                      <span>{readProjectLabel}</span>
                      <svg viewBox="0 0 24 24"><path d="M5 12h14M14 6l6 6-6 6" /></svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
