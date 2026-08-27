import type { Locale } from "@/content/i18n";

export type AboutStory = {
  number: string;
  title: string;
  englishTitle: string;
  summary: string;
  tags?: readonly string[];
  button: string;
  letterLabel: string;
  background: string;
  scene: string;
  body: readonly string[];
};

export type AboutContent = {
  stories: readonly AboutStory[];
  openingLabel: string;
  methodsLabel: string;
  endingLabel: string;
  portalLabel: string;
  dialog: {
    label: string;
    close: string;
    pagination: string;
    previous: string;
    next: string;
  };
};

const ABOUT_PATH = "/portfolio/environment/about";
const assets = [
  [`${ABOUT_PATH}/sections/about-01-background-aligned.png`, `${ABOUT_PATH}/sections/about-01-scene.png`],
  [`${ABOUT_PATH}/sections/about-02-background-aligned.png`, `${ABOUT_PATH}/sections/about-02-scene.png`],
  [`${ABOUT_PATH}/sections/about-03-background-aligned.png`, `${ABOUT_PATH}/sections/about-03-scene.png`],
  [`${ABOUT_PATH}/sections/about-04-background-aligned.png`, `${ABOUT_PATH}/sections/about-04-scene.png`],
] as const;

const zh: AboutContent = {
  openingLabel: "About 环境开屏",
  methodsLabel: "工作方法",
  endingLabel: "海面上的星云之门",
  portalLabel: "星云入口，后续内容准备中",
  dialog: {
    label: "展开阅读",
    close: "关闭阅读层",
    pagination: "信件分页",
    previous: "上一页",
    next: "下一页",
  },
  stories: [
    {
      number: "01", title: "我是谁", englishTitle: "WHO I AM",
      summary: "嗨，你好，我是贺丹，一名从设计走向 AI 产品领域的产品实践者。我关注设计、技术与人的关系，也希望把对用户和场景的理解，转化为真正可用的产品体验。",
      button: "了解我的产品观 →", letterLabel: "了解我的产品观",
      background: assets[0][0], scene: assets[0][1],
      body: [
        "嗨，你好，我是贺丹，一名从设计转向 AI 产品领域的产品实践者。",
        "AI 的出现，让我开始关注设计与技术、人与技术之间的关系。我也开始思考：那些设计中的问题、生活中的问题，在 AI 时代是否能够拥有更好的解决方案。",
        "相比单纯完成一个视觉方案，我更享受理解用户、组织信息、定义产品，并推动一个想法逐渐成为真实体验的过程。",
        "我希望创造的产品，不只具备完整的逻辑和清晰的功能，也能够尊重人的感受，真正进入具体的使用场景。",
        "对我而言，AI 不是附加在产品上的功能标签，而是一种需要重新理解用户、任务与交互关系的产品能力。",
      ],
    },
    {
      number: "02", title: "我如何工作", englishTitle: "HOW I WORK",
      summary: "我习惯先理解用户所处的真实场景，再梳理需求、行为与信息关系，最后把模糊的问题逐步转化为产品结构、核心流程和可验证的方案。",
      tags: ["理解真实场景", "组织复杂问题", "验证并持续迭代"],
      button: "查看我的工作方法 →", letterLabel: "我如何工作",
      background: assets[1][0], scene: assets[1][1],
      body: [
        "七年的环境设计学习，让我建立了较强的调研、观察与系统思考能力。面对一个问题时，我通常会先理解用户所处的真实场景，再梳理需求、行为、信息与关系，而不是直接进入方案设计。",
        "在产品实践中，我能够将模糊的需求逐步转化为产品结构、核心流程、功能原型和 PRD，并通过测试、反馈与数据持续验证和调整方案。",
        "我也持续学习 AI 产品相关的方法，实践 Agent 编排、知识增强、多模态交互、上下文管理与评测迭代，尝试在产品体验、技术能力与实际落地之间建立连接。",
      ],
    },
    {
      number: "03", title: "为什么走向 AI 产品", englishTitle: "WHY AI PRODUCT",
      summary: "我逐渐发现，自己真正投入的并不只是完成一个设计结果，而是理解复杂问题，并推动一个想法从概念走向真实使用。",
      button: "阅读完整的转行故事 →", letterLabel: "为什么走向 AI 产品",
      background: assets[2][0], scene: assets[2][1],
      body: [
        "2026 年对我而言，是重新拓展边界的一年。其实早在读研期间，我就开始接触 AI，并尝试将 GPT-4 等工具应用于设计实践与科研中。",
        "一方面，这让我深刻意识到 AI 技术的巨大潜力；另一方面，行业环境的变化也促使我重新审视自己的职业方向。我逐渐发现，自己真正感兴趣的并不只是完成某一个设计结果，而是理解需求、组织复杂问题，并参与主导一个产品从概念到落地的全过程。",
        "AI 产品方向恰好能将我已有的设计与产品能力、对 AI 的兴趣以及技术认知结合起来。为此，我在学校时主动接触产品设计相关课程，也开始尝试将产品方法带入自己的教学与设计实践。",
        "进入教育行业后，我希望把 AI 能力引入真实的课程与创作场景。于是，我开始搭建 Agent、设计 AI 产品课程、完成独立产品项目，也参加黑客松，与不同角色的伙伴共同推进产品构想、原型与实现。",
        "这些经历让我逐渐确认：产品创造是一件让我持续感到好奇并愿意投入的事情。它既需要理解人，也需要面对技术、业务与现实限制，并在不断判断和取舍中，让一个想法真正被使用。",
        "这也是我选择走向 AI 产品方向的原因。",
      ],
    },
    {
      number: "04", title: "工作之外", englishTitle: "BEYOND WORK",
      summary: "游泳、徒步和手绘，让我保持对节奏、路径与细节的感受力。它们也影响着我理解产品的方式。",
      button: "打开我的手绘本 →", letterLabel: "工作之外",
      background: assets[3][0], scene: assets[3][1],
      body: [
        "工作之外，我喜欢游泳、徒步和手绘。",
        "游泳让我在重复的节奏中保持专注；徒步让我享受缓慢探索一条路径的过程；手绘则延续了我对环境、人物与细节的观察。",
        "这些兴趣也影响着我理解产品的方式：保持感受力，留意那些容易被忽略的细节，同时愿意为一个长期目标持续投入。",
        "我仍在学习，也仍在拓展自己的边界。但我越来越清楚，自己希望成为一个能够理解用户、理解技术，并推动产品真正发生的人。",
      ],
    },
  ],
};

const en: AboutContent = {
  openingLabel: "About opening landscape",
  methodsLabel: "Working principles",
  endingLabel: "A nebula gateway above the sea",
  portalLabel: "Nebula gateway; more content is on the way",
  dialog: {
    label: "Expanded story",
    close: "Close story",
    pagination: "Story pages",
    previous: "Previous",
    next: "Next",
  },
  stories: [
    {
      number: "01", title: "Who I am", englishTitle: "INTRODUCTION",
      summary: "Hi, I am He Dan, a product practitioner moving from design into AI products. I care about the relationship between people, technology, and design, and I turn an understanding of users and contexts into products that are genuinely useful.",
      button: "Read my product perspective →", letterLabel: "My product perspective",
      background: assets[0][0], scene: assets[0][1],
      body: [
        "Hi, I am He Dan, a product practitioner transitioning from design into AI products.",
        "AI led me to think more deeply about design and technology, and about the relationship between people and technology. It also made me ask whether design and everyday problems could have better solutions in the AI era.",
        "More than producing a visual outcome, I enjoy understanding users, organizing information, defining products, and moving an idea toward a real experience.",
        "I want to create products with clear logic and useful functionality that also respect how people feel in specific situations.",
        "To me, AI is not a feature label added to a product. It is a product capability that asks us to rethink users, tasks, and interactions.",
      ],
    },
    {
      number: "02", title: "How I work", englishTitle: "PROCESS",
      summary: "I start by understanding the user's real context, then map needs, behaviors, and information before turning an ambiguous problem into a product structure, core flow, and testable solution.",
      tags: ["Understand real contexts", "Structure complex problems", "Validate and iterate"],
      button: "Explore my working method →", letterLabel: "How I work",
      background: assets[1][0], scene: assets[1][1],
      body: [
        "Seven years of environmental-design study built my research, observation, and systems-thinking skills. I begin with the user's real context and map needs, behavior, information, and relationships before designing a solution.",
        "In product work, I translate ambiguous needs into product structures, core flows, functional prototypes, and PRDs, then validate and refine them through testing, feedback, and data.",
        "I continue to practice AI product methods including agent orchestration, knowledge augmentation, multimodal interaction, context management, evaluation, and iteration, connecting product experience with technical feasibility and delivery.",
      ],
    },
    {
      number: "03", title: "Why AI products", englishTitle: "DIRECTION",
      summary: "I realized that what engages me most is not simply completing a design outcome, but understanding a complex problem and moving an idea from concept into real use.",
      button: "Read the full transition story →", letterLabel: "Why I moved into AI products",
      background: assets[2][0], scene: assets[2][1],
      body: [
        "For me, 2026 is a year of expanding boundaries. I first encountered AI during graduate school and began applying tools such as GPT-4 to design practice and research.",
        "AI revealed enormous technical potential, while changes in the industry encouraged me to reconsider my direction. I found that I was less interested in producing a single design outcome than in understanding needs, structuring complex problems, and helping lead a product from concept to delivery.",
        "AI product work brings together my design and product skills, my curiosity about AI, and my growing technical understanding. I explored product-design courses at school and began applying product methods in teaching and design practice.",
        "After entering education, I wanted to bring AI into real learning and creative contexts.",
        "I built agents, designed AI product courses, completed independent products, and joined hackathons where multidisciplinary teams developed concepts, prototypes, and implementations together.",
        "These experiences confirmed that product creation keeps me curious and committed. It requires empathy for people, engagement with technology and business, and continuous judgment under real constraints so an idea can become something people use.",
        "That is why I chose to move toward AI product management.",
      ],
    },
    {
      number: "04", title: "Beyond work", englishTitle: "LIFE & CURIOSITY",
      summary: "Swimming, hiking, and drawing keep me attentive to rhythm, paths, and detail. They also shape how I understand products.",
      button: "Open my sketchbook →", letterLabel: "Beyond work",
      background: assets[3][0], scene: assets[3][1],
      body: [
        "Outside work, I enjoy swimming, hiking, and drawing.",
        "Swimming helps me focus through repetition; hiking lets me explore a path slowly; and drawing keeps me observant of environments, people, and detail.",
        "These interests shape how I approach products: stay perceptive, notice details that are easy to miss, and remain committed to long-term goals.",
        "I am still learning and expanding my boundaries, but I increasingly know that I want to understand users and technology and help meaningful products become real.",
      ],
    },
  ],
};

export function getAboutContent(locale: Locale): AboutContent {
  return locale === "zh" ? zh : en;
}
