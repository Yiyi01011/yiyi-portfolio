"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type FormEvent } from "react";

const CONTACT_PATH = "/portfolio/environment/contact";
const guestbookEmojis = [
  "😀", "😄", "😊", "🥰",
  "😎", "🤖", "👋", "👏",
  "❤️", "✨", "🌱", "🎉",
] as const;

type RobotExpression = "neutral" | "blink" | "look-left" | "look-right";

const robotImages: Record<RobotExpression, string> = {
  neutral: `${CONTACT_PATH}/robot/robot-face-neutral.png.png`,
  blink: `${CONTACT_PATH}/robot/robot-face-blink.png.png`,
  "look-left": `${CONTACT_PATH}/robot/robot-face-look-left.png.png`,
  "look-right": `${CONTACT_PATH}/robot/robot-face-look-right.png.png`,
};

const contactDetails = [
  {
    type: "email",
    label: "Email",
    value: "1023302857@qq.com",
    href: "mailto:1023302857@qq.com",
    description: {
      zh: "我会尽快回复你的邮件",
      en: "I will reply to your email as soon as possible",
    },
    icon: `${CONTACT_PATH}/decorations/envelope-plain.png.png`,
  },
  {
    type: "phone",
    label: "Phone",
    value: "181 7340 2549",
    href: "tel:+8618173402549",
    description: {
      zh: "欢迎通过电话与我联系",
      en: "You are welcome to contact me by phone",
    },
    icon: `${CONTACT_PATH}/contact-icons/phone.png.png`,
  },
  {
    type: "github",
    label: "GitHub",
    value: "github.com/Yiyi01011",
    href: "https://github.com/Yiyi01011",
    description: {
      zh: "查看我的项目与代码",
      en: "View my projects and code",
    },
    icon: `${CONTACT_PATH}/contact-icons/github.png.png`,
  },
] as const;

const copy = {
  zh: {
    greeting: "很高兴认识你！",
    intro: [
      "如果你正在探索 AI 产品、产品创新，",
      "或设计与技术结合的可能性，",
      "欢迎与我交流合作，一起创造有价值的产品。",
    ],
    boardTitle: "留言板",
    notes: [
      { author: "一位访客", message: "你的作品很有温度，期待看到更多有趣的产品。" },
      { author: "设计同行", message: "很喜欢这里的视觉和交互方式，祝求职顺利！" },
      { author: "新朋友", message: "从设计走向AI产品，是一段很特别的旅程。" },
    ],
    message: "留言",
    messagePlaceholder: "写下你的想法或打个招呼吧～",
    emojiLabel: "表情",
    chooseEmoji: "选择表情",
    insertEmoji: "插入",
    submit: "发送留言",
    pending: "留言功能即将开放",
  },
  en: {
    greeting: "Nice to meet you!",
    intro: [
      "If you are exploring AI products and product innovation,",
      "or the possibilities between design and technology,",
      "let's connect and create products with real value.",
    ],
    boardTitle: "Guestbook",
    notes: [
      { author: "A visitor", message: "Your work feels thoughtful. I look forward to seeing more ideas." },
      { author: "A designer", message: "I love the visual language and interactions here. Best of luck!" },
      { author: "A new friend", message: "Moving from design into AI products is a distinctive journey." },
    ],
    message: "Message",
    messagePlaceholder: "Share an idea or say hello",
    emojiLabel: "Emoji",
    chooseEmoji: "Choose an emoji",
    insertEmoji: "Insert",
    submit: "Send message",
    pending: "Guestbook coming soon",
  },
} as const;

function GuestbookNote({ author, message, index }: { author: string; message: string; index: number }) {
  return (
    <article className={`contact-note contact-note-${index + 1}`}>
      <span className="contact-note-pin" aria-hidden="true" />
      <p>{message}</p>
      <small>— {author}</small>
    </article>
  );
}

export function ContactSection({ locale, ariaLabel }: { locale: "zh" | "en"; ariaLabel: string }) {
  const content = copy[locale];
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [expression, setExpression] = useState<RobotExpression>("neutral");
  const [reducedMotion, setReducedMotion] = useState(false);
  const timersRef = useRef<number[]>([]);
  const interactionRef = useRef(false);
  const emojiWrapRef = useRef<HTMLDivElement>(null);

  const clearTimers = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    clearTimers();
    if (reducedMotion) {
      return;
    }

    let cancelled = false;
    const addTimer = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(callback, delay);
      timersRef.current.push(timer);
    };
    const schedule = () => {
      addTimer(() => {
        if (cancelled || interactionRef.current) {
          schedule();
          return;
        }
        setExpression("blink");
        addTimer(() => {
          if (cancelled) return;
          const look = Math.random() > 0.5 ? "look-left" : "look-right";
          setExpression(look);
          addTimer(() => {
            if (cancelled) return;
            setExpression("neutral");
            schedule();
          }, 600 + Math.round(Math.random() * 400));
        }, 140 + Math.round(Math.random() * 40));
      }, 4000 + Math.round(Math.random() * 3000));
    };
    schedule();
    return () => {
      cancelled = true;
      clearTimers();
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (!emojiOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!emojiWrapRef.current?.contains(event.target as Node)) setEmojiOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setEmojiOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [emojiOpen]);

  const handleFocus = () => {
    interactionRef.current = true;
    if (!reducedMotion) setExpression("look-right");
  };

  const handleBlur = () => {
    interactionRef.current = false;
    if (!reducedMotion) setExpression("neutral");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) return;
    interactionRef.current = true;
    setStatus(content.pending);
    if (!reducedMotion) setExpression("blink");
    const timer = window.setTimeout(() => {
      interactionRef.current = false;
      setExpression("neutral");
    }, 170);
    const statusTimer = window.setTimeout(() => setStatus(""), 1800);
    timersRef.current.push(timer, statusTimer);
    // TODO: Replace this local status with the real guestbook API when a backend is approved.
  };

  return (
    <section className="contact-section" id="contact" aria-label={ariaLabel} data-locale={locale}>
      <div className="contact-stage">
        <div className="contact-background" aria-hidden="true">
          <img className="contact-cloud contact-cloud-1" src={`${CONTACT_PATH}/background/cloud-layer-01.png.png`} alt="" />
          <img className="contact-cloud contact-cloud-2" src={`${CONTACT_PATH}/background/cloud-layer-02.png.png`} alt="" />
          <img className="contact-cloud contact-cloud-3" src={`${CONTACT_PATH}/background/cloud-layer-03.png.png`} alt="" />
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <header className="contact-intro">
              <img className="contact-plant contact-intro-plant" src={`${CONTACT_PATH}/decorations/plant-01.png.png`} alt="" />
              <h2>{content.greeting}</h2>
              <p>{content.intro.map((line) => <span key={line}>{line}</span>)}</p>
            </header>

            <div className="contact-guestbook">
              <div className="contact-board">
                <img className="contact-board-frame" src={`${CONTACT_PATH}/guestbook/guestbook-board-frame.png.png`} alt="" />
                <strong className="contact-board-title">{content.boardTitle}</strong>
                <div className="contact-notes">
                  {content.notes.map((note, index) => <GuestbookNote key={note.author} {...note} index={index} />)}
                </div>

                <form className="contact-guestbook-form" onSubmit={handleSubmit}>
                  <img
                    className="contact-guestbook-robot"
                    src={robotImages[reducedMotion ? "neutral" : expression]}
                    alt=""
                    width="40"
                    height="40"
                  />
                  <label className="contact-message-field">
                    <span className="contact-sr-only">{content.message}</span>
                    <textarea
                      name="message"
                      value={message}
                      maxLength={80}
                      rows={1}
                      placeholder={content.messagePlaceholder}
                      onChange={(event) => {
                        setMessage(event.target.value);
                        setStatus("");
                      }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <span className="contact-character-count">{message.length}/80</span>
                  </label>
                  <div className="contact-guestbook-emoji-wrap" ref={emojiWrapRef}>
                    <button
                      className="contact-guestbook-emoji"
                      type="button"
                      aria-label={content.chooseEmoji}
                      aria-expanded={emojiOpen}
                      aria-controls="guestbook-emoji-panel"
                      onClick={() => setEmojiOpen((open) => !open)}
                    >
                      ☺
                    </button>
                    {emojiOpen ? (
                      <div className="contact-guestbook-emoji-panel" id="guestbook-emoji-panel" role="dialog" aria-label={content.emojiLabel}>
                        {guestbookEmojis.map((emoji) => (
                          <button
                            type="button"
                            key={emoji}
                            aria-label={`${content.insertEmoji} ${emoji}`}
                            onClick={() => {
                              setMessage((current) => current.length + emoji.length <= 80 ? `${current}${emoji}` : current);
                              setStatus("");
                              setEmojiOpen(false);
                            }}
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <button className="contact-guestbook-submit" type="submit" disabled={!message.trim()}>{content.submit}</button>
                  <output className="contact-form-status" aria-live="polite">{status}</output>
                </form>

                <img className="contact-bird" src={`${CONTACT_PATH}/decorations/bird.png.png`} alt="" />
                <img className="contact-bird-heart" src={`${CONTACT_PATH}/decorations/bird-heart.png.png`} alt="" />
                <img className="contact-plant contact-board-plant" src={`${CONTACT_PATH}/decorations/plant-02.png.png`} alt="" />
              </div>
            </div>
          </div>

          <aside className="contact-right">
            <div className="contact-card-wrap">
              <img className="contact-envelope" src={`${CONTACT_PATH}/decorations/envelope-heart.png.png`} alt="" />
              <div className="contact-card">
                {contactDetails.map((item) => (
                  <a
                    className="contact-link"
                    href={item.href}
                    key={item.type}
                    target={item.type === "github" ? "_blank" : undefined}
                    rel={item.type === "github" ? "noreferrer" : undefined}
                  >
                    <span className="contact-link-icon"><img src={item.icon} alt="" /></span>
                    <span>
                      <strong>{item.label}</strong>
                      <b>{item.value}</b>
                      <small>{item.description[locale]}</small>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <footer className="contact-footer">© 2026 Hedan | AI Product Manager</footer>
    </section>
  );
}
