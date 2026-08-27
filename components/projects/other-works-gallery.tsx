"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import type {
  OtherWorkCategory,
  OtherWorkItem,
  OtherWorksContent,
} from "@/content/projects/other-works";

type Filter = "all" | OtherWorkCategory;

type OtherWorksGalleryProps = {
  content: OtherWorksContent;
  backHref: string;
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={direction === "left" ? "m14.5 5-7 7 7 7" : "m9.5 5 7 7-7 7"} />
    </svg>
  );
}

export function OtherWorksGallery({ content, backHref }: OtherWorksGalleryProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [direction, setDirection] = useState<-1 | 1>(1);
  const [zoomed, setZoomed] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const filteredItems = useMemo(
    () => filter === "all"
      ? content.items
      : content.items.filter((item) => item.category === filter),
    [content.items, filter],
  );
  const activeIndex = activeId
    ? filteredItems.findIndex((item) => item.id === activeId)
    : -1;
  const activeItem = activeIndex >= 0 ? filteredItems[activeIndex] : null;
  const leftItems = filteredItems.filter((_, index) => index % 2 === 0);
  const rightItems = filteredItems.filter((_, index) => index % 2 === 1);

  const move = useCallback((step: -1 | 1) => {
    if (activeIndex < 0 || filteredItems.length === 0) return;
    const nextIndex = (activeIndex + step + filteredItems.length) % filteredItems.length;
    setDirection(step);
    setZoomed(false);
    setActiveId(filteredItems[nextIndex].id);
  }, [activeIndex, filteredItems]);

  useEffect(() => {
    if (!activeItem) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeItem, move]);

  useEffect(() => {
    if (activeId) return;
    setZoomed(false);
    triggerRef.current?.focus();
  }, [activeId]);

  const openItem = (item: OtherWorkItem, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setDirection(1);
    setZoomed(false);
    setActiveId(item.id);
  };

  const closeFromBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setActiveId(null);
  };

  const renderStreamSet = (
    items: OtherWorkItem[],
    cycle: "primary" | "clone-1" | "clone-2",
  ) => items.map((item) => {
    const image = (
      <Image
        src={item.src}
        alt={cycle === "primary" ? item.title : ""}
        width={item.width}
        height={item.height}
        sizes="(max-width: 720px) 43vw, 24vw"
      />
    );

    if (cycle !== "primary") {
      return (
        <div className="other-work-stream-card" aria-hidden="true" key={`${cycle}-${item.id}`}>
          {image}
        </div>
      );
    }

    return (
      <button
        className="other-work-stream-card"
        type="button"
        key={`${cycle}-${item.id}`}
        aria-label={`${content.gallery.openItem}: ${item.title}`}
        onClick={(event) => openItem(item, event.currentTarget)}
      >
        {image}
        <span aria-hidden="true">↗</span>
      </button>
    );
  });

  return (
    <>
      <section className="other-works-stage">
        <div className="other-works-pixels" aria-hidden="true"><i /><i /><i /></div>
        <div className="other-works-stage-inner">
          <div className="other-works-stage-copy">
            <Link className="project-back-link" href={backHref}>
              <span aria-hidden="true">←</span>
              {content.back}
            </Link>
            <p className="project-eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <h2>{content.hero.subtitle}</h2>
            <p className="other-works-description">{content.hero.description}</p>
            <ul className="project-tag-list" aria-label="Project tags">
              {content.hero.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <div className="other-works-filter" role="group" aria-label={content.hero.title}>
              {(["all", "hand-drawing", "visual-design"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  className={filter === value ? "is-active" : ""}
                  aria-pressed={filter === value}
                  onClick={() => {
                    setFilter(value);
                    setActiveId(null);
                  }}
                >
                  {content.gallery.filters[value]}
                </button>
              ))}
              <span>{String(filteredItems.length).padStart(2, "0")} {content.gallery.itemCount}</span>
            </div>
          </div>

          <div className="other-works-stream-window" key={filter}>
            <div className="other-works-stream-column is-up">
              <div className="other-works-stream-track">
                <div className="other-works-stream-set">{renderStreamSet(leftItems, "primary")}</div>
                <div className="other-works-stream-set">{renderStreamSet(leftItems, "clone-1")}</div>
                <div className="other-works-stream-set">{renderStreamSet(leftItems, "clone-2")}</div>
              </div>
            </div>
            <div className="other-works-stream-column is-down">
              <div className="other-works-stream-track">
                <div className="other-works-stream-set">{renderStreamSet(rightItems, "primary")}</div>
                <div className="other-works-stream-set">{renderStreamSet(rightItems, "clone-1")}</div>
                <div className="other-works-stream-set">{renderStreamSet(rightItems, "clone-2")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeItem && (
        <div
          className="other-works-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onMouseDown={closeFromBackdrop}
        >
          <div className="other-works-lightbox-panel">
            <header>
              <div>
                <span>{String(activeIndex + 1).padStart(2, "0")} / {String(filteredItems.length).padStart(2, "0")}</span>
                <strong>{activeItem.title}</strong>
              </div>
              <div className="other-works-lightbox-actions">
                {activeItem.category === "hand-drawing" && (
                  <button
                    type="button"
                    aria-label={zoomed ? content.dialog.zoomOut : content.dialog.zoomIn}
                    aria-pressed={zoomed}
                    onClick={() => setZoomed((current) => !current)}
                  >
                    {zoomed ? "1:1" : "+"}
                  </button>
                )}
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label={content.dialog.close}
                  onClick={() => setActiveId(null)}
                >
                  ×
                </button>
              </div>
            </header>
            <div
              className={`other-works-lightbox-media${zoomed ? " is-zoomed" : ""}`}
              data-direction={direction}
              key={activeItem.id}
            >
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                width={activeItem.width}
                height={activeItem.height}
                sizes="92vw"
                priority
              />
            </div>
            <button
              className="other-works-lightbox-nav is-previous"
              type="button"
              aria-label={content.dialog.previous}
              onClick={() => move(-1)}
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              className="other-works-lightbox-nav is-next"
              type="button"
              aria-label={content.dialog.next}
              onClick={() => move(1)}
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
