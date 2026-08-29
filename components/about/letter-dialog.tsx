"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type LetterDialogProps = {
  body: readonly string[];
  chapterNumber: string;
  chapterLabel: string;
  labels: {
    label: string;
    close: string;
    pagination: string;
    previous: string;
    next: string;
  };
  paginated?: boolean;
  onClose: () => void;
};

export function LetterDialog({ body, chapterNumber, chapterLabel, labels, paginated = false, onClose }: LetterDialogProps) {
  const [page, setPage] = useState(0);
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const paragraphsPerPage = 4;
  const totalPages = Math.ceil(body.length / paragraphsPerPage);
  const hasPreviousPage = page > 0;
  const hasNextPage = page < totalPages - 1;

  const visibleBody = useMemo(() => {
    if (!paginated) return body;
    const start = page * paragraphsPerPage;
    return body.slice(start, start + paragraphsPerPage);
  }, [body, page, paginated]);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;

      const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button:not([disabled])");
      if (!buttons?.length) return;

      const firstButton = buttons[0];
      const lastButton = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === firstButton) {
        event.preventDefault();
        lastButton.focus();
      } else if (!event.shiftKey && document.activeElement === lastButton) {
        event.preventDefault();
        firstButton.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="about-letter-backdrop"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="about-letter-scene">
        <span className="about-letter-sign" data-chapter={chapterNumber} aria-hidden="true">{chapterLabel}</span>

        <article
          ref={dialogRef}
          className={`about-letter ${paginated ? "is-paginated" : "is-complete"}`}
          role="dialog"
          aria-modal="true"
          aria-label={labels.label}
        >
          <button
            ref={closeButtonRef}
            className="about-letter-close"
            type="button"
            onClick={onClose}
            aria-label={labels.close}
          >
            <span aria-hidden="true">×</span>
          </button>

          <div className="about-letter-content" key={page}>
            <div className="about-letter-body" aria-live={paginated ? "polite" : undefined}>
              {visibleBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            {paginated && (
              <div className="about-letter-footer" aria-label={labels.pagination}>
                {hasPreviousPage && (
                  <button
                    className="about-letter-action"
                    type="button"
                    onClick={() => setPage((current) => current - 1)}
                  >
                    {labels.previous}
                  </button>
                )}
                {hasNextPage && (
                  <button
                    className="about-letter-action"
                    type="button"
                    onClick={() => setPage((current) => current + 1)}
                  >
                    {labels.next}
                  </button>
                )}
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
