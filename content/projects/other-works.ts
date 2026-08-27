import type { Locale } from "@/content/i18n";

export type OtherWorkCategory = "hand-drawing" | "visual-design";

export type OtherWorkItem = {
  id: string;
  category: OtherWorkCategory;
  src: string;
  width: number;
  height: number;
  title: string;
};

export type OtherWorksContent = {
  back: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
  };
  gallery: {
    filters: Record<"all" | OtherWorkCategory, string>;
    itemCount: string;
    openItem: string;
  };
  dialog: {
    close: string;
    previous: string;
    next: string;
    zoomIn: string;
    zoomOut: string;
  };
  items: OtherWorkItem[];
};

const sourceItems = [
  ["hand-01", "hand-drawing", "/portfolio/projects/other-works/gallery/hand-drawing/hand-01.webp", 703, 494],
  ["hand-02", "hand-drawing", "/portfolio/projects/other-works/gallery/hand-drawing/hand-02.webp", 1800, 1273],
  ["hand-03", "hand-drawing", "/portfolio/projects/other-works/gallery/hand-drawing/hand-03.webp", 1800, 1273],
  ["hand-04", "hand-drawing", "/portfolio/projects/other-works/gallery/hand-drawing/hand-04.webp", 1800, 1273],
  ["hand-05", "hand-drawing", "/portfolio/projects/other-works/gallery/hand-drawing/hand-05.webp", 1800, 1273],
  ["visual-01", "visual-design", "/portfolio/projects/other-works/gallery/visual-design/visual-01.webp", 1754, 998],
  ["visual-02", "visual-design", "/portfolio/projects/other-works/gallery/visual-design/visual-02.webp", 1800, 1027],
  ["visual-03", "visual-design", "/portfolio/projects/other-works/gallery/visual-design/visual-03.webp", 1341, 1423],
  ["visual-04", "visual-design", "/portfolio/projects/other-works/gallery/visual-design/visual-04.webp", 1800, 1025],
  ["visual-05", "visual-design", "/portfolio/projects/other-works/gallery/visual-design/visual-05.webp", 1800, 1022],
  ["visual-06", "visual-design", "/portfolio/projects/other-works/gallery/visual-design/visual-06.webp", 1270, 1800],
  ["visual-07", "visual-design", "/portfolio/projects/other-works/gallery/visual-design/visual-07.webp", 1800, 1297],
  ["visual-08", "visual-design", "/portfolio/projects/other-works/gallery/visual-design/visual-08.webp", 1800, 1186],
  ["visual-09", "visual-design", "/portfolio/projects/other-works/gallery/visual-design/visual-09.webp", 1203, 1800],
  ["visual-10", "visual-design", "/portfolio/projects/other-works/gallery/visual-design/visual-10.webp", 1152, 1394],
  ["visual-11", "visual-design", "/portfolio/projects/other-works/gallery/visual-design/visual-11.webp", 1241, 1306],
] as const;

function createItems(locale: Locale): OtherWorkItem[] {
  let handIndex = 0;
  let visualIndex = 0;

  return sourceItems.map(([id, category, src, width, height]) => {
    const number = category === "hand-drawing" ? ++handIndex : ++visualIndex;
    const label = locale === "zh"
      ? category === "hand-drawing" ? "手绘表达" : "视觉设计"
      : category === "hand-drawing" ? "Hand Drawing" : "Visual Design";

    return {
      id,
      category,
      src,
      width,
      height,
      title: `${label} ${String(number).padStart(2, "0")}`,
    };
  });
}

const zh: Omit<OtherWorksContent, "items"> = {
  back: "返回精选项目",
  hero: {
    eyebrow: "Selected archive · 视觉作品",
    title: "其他作品",
    subtitle: "手绘、视觉与设计表达",
    description: "一组来自手绘练习和设计实践的视觉作品，记录我在不同媒介中的观察与表达。审美判断，也是一种产品能力。",
    tags: ["手绘表达", "视觉设计", "设计实践", "视觉审美"],
  },
  gallery: {
    filters: { all: "全部作品", "hand-drawing": "手绘", "visual-design": "视觉设计" },
    itemCount: "件作品",
    openItem: "查看大图",
  },
  dialog: {
    close: "关闭大图",
    previous: "上一件作品",
    next: "下一件作品",
    zoomIn: "放大细节",
    zoomOut: "恢复完整视图",
  },
};

const en: Omit<OtherWorksContent, "items"> = {
  back: "Back to selected projects",
  hero: {
    eyebrow: "Selected archive · Visual work",
    title: "Other Works",
    subtitle: "Drawing, Visual & Design Expression",
    description: "A collection of drawing and design studies that records how I observe and express ideas across media. Aesthetic judgment is also a product skill.",
    tags: ["Hand Drawing", "Visual Design", "Design Practice", "Visual Craft"],
  },
  gallery: {
    filters: { all: "All Works", "hand-drawing": "Hand Drawing", "visual-design": "Visual Design" },
    itemCount: "works",
    openItem: "Open large view",
  },
  dialog: {
    close: "Close large view",
    previous: "Previous work",
    next: "Next work",
    zoomIn: "Zoom into detail",
    zoomOut: "Reset full view",
  },
};

export function getOtherWorksContent(locale: Locale): OtherWorksContent {
  return { ...(locale === "zh" ? zh : en), items: createItems(locale) };
}
