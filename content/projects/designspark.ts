import type { Locale } from "@/content/i18n";

type DesignSparkContent = {
  back: string;
  localNav: { overview: string; solution: string; prd: string; demo: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    demo: string;
    readPrd: string;
    coverAlt: string;
    journey: string[];
  };
  problem: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    items: { title: string; body: string }[];
  };
  solution: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    modules: { label: string; title: string; body: string; output: string }[];
    principle: string;
  };
  decisions: {
    index: string;
    kicker: string;
    title: string;
    items: { number: string; title: string; body: string; excluded: string }[];
  };
  prd: {
    eyebrow: string;
    title: string;
    description: string;
    tocLabel: string;
    toc: { href: string; label: string }[];
    contextTitle: string;
    context: string;
    usersTitle: string;
    users: { title: string; need: string }[];
    goalsTitle: string;
    goals: string[];
    nonGoalsTitle: string;
    nonGoals: string[];
    scopeTitle: string;
    scopeHeaders: string[];
    scope: { module: string; status: "done" | "partial" | "planned"; statusLabel: string; detail: string }[];
    flowTitle: string;
    flow: { number: string; title: string; body: string }[];
    architectureTitle: string;
    architectureDescription: string;
    architecture: string[];
    metricsTitle: string;
    metricsNotice: string;
    metrics: { label: string; detail: string }[];
    boundaryTitle: string;
    boundaries: string[];
  };
  demo: {
    eyebrow: string;
    title: string;
    description: string;
    open: string;
    externalNotice: string;
    stepsTitle: string;
    steps: { number: string; title: string; body: string }[];
    backProjects: string;
  };
};

const zh: DesignSparkContent = {
  back: "返回精选项目",
  localNav: { overview: "项目概览", solution: "产品方案", prd: "PRD 文档", demo: "在线体验" },
  hero: {
    eyebrow: "AI 产品实践 · V1",
    title: "DesignSpark",
    subtitle: "设计学生的 AI 创意启动 Agent 与灵感沉淀工具",
    description: "帮助设计学生从模糊任务进入可继续制作的状态，并把对话中产生的火花沉淀为可回看的个人创意资产。",
    tags: ["AI Agent", "产品设计", "Coze", "Supabase"],
    demo: "体验产品",
    readPrd: "阅读 PRD",
    coverAlt: "DesignSpark 项目封面，展示生长中的灵感网络",
    journey: ["模糊任务", "对话澄清", "创意火花", "灵感地图"],
  },
  problem: {
    index: "01",
    kicker: "Problem framing",
    title: "设计早期真正困难的，不是没有想法",
    description: "问题在于任务、兴趣、参考素材与视觉偏好彼此分散。普通聊天可以给出答案，却很难保留任务状态、阶段推进和长期灵感。",
    items: [
      { title: "启动困难", body: "拿到 brief 后不知道从哪里开始，模糊兴趣很难转成可执行方向。" },
      { title: "过程流失", body: "有价值的关键词和视觉线索散落在对话与素材中，下一次又从零开始。" },
      { title: "AI 越界", body: "一次性生成结果容易替用户做决定，缺少澄清、取舍与行动边界。" },
    ],
  },
  solution: {
    index: "02",
    kicker: "Core loop",
    title: "让灵感从一次对话，生长为长期资产",
    description: "V1 收敛为两个互相连接的核心模块：先帮助用户启动，再把过程中的有效信号沉淀下来。",
    modules: [
      { label: "START", title: "创意火花", body: "Sparkie 围绕任务、兴趣与限制追问，帮助用户形成关键词、视觉语言和下一步行动。", output: "输出：结构化火花与会话进度" },
      { label: "GROW", title: "灵感地图", body: "把会话火花和独立捕捉的文字、图片、语音组织为个人创意星系，支持回看与继续探索。", output: "输出：可复用的个人灵感节点" },
    ],
    principle: "AI 提供方向，用户保留选择、保存、调整与删除的控制权。",
  },
  decisions: {
    index: "03",
    kicker: "Product decisions",
    title: "用版本取舍保护核心验证",
    items: [
      { number: "A", title: "从教学管理收敛到个人工具", body: "优先验证设计学生个人的创意启动与沉淀闭环。", excluded: "暂不做教师端、班级、课程与作业管理。" },
      { number: "B", title: "自由对话先于固定表单", body: "设计早期输入天然模糊，由 Agent 根据上下文决定澄清和推进。", excluded: "不要求用户先完整填写复杂任务表。" },
      { number: "C", title: "沉淀过程，不代做终稿", body: "产品记录用户如何形成判断，而不是只交付一次性的最终答案。", excluded: "不定位为最终视觉作品生成器。" },
    ],
  },
  prd: {
    eyebrow: "Structured PRD · V1",
    title: "产品需求文档",
    description: "以下内容由项目原始 PRD 与技术说明整理为网页阅读版本，保留事实边界，不虚构调研样本、线上指标或未验证能力。",
    tocLabel: "文档目录",
    toc: [
      { href: "#prd-context", label: "背景与定位" },
      { href: "#prd-users", label: "用户与目标" },
      { href: "#prd-scope", label: "V1 范围" },
      { href: "#prd-flow", label: "核心流程" },
      { href: "#prd-architecture", label: "系统链路" },
      { href: "#prd-metrics", label: "指标与边界" },
    ],
    contextTitle: "背景与产品定位",
    context: "DesignSpark 是面向设计学生的个人化 AI 创意启动 Agent 与灵感沉淀工具。Sparkie 不是普通 Chatbot，也不是一次性生成器，而是围绕任务状态、用户输入、历史火花与可保存灵感推进设计早期思考。",
    usersTitle: "目标用户与核心需求",
    users: [
      { title: "设计专业学生", need: "完成课程作业、竞赛或作品集项目时，快速理解任务并找到切入点。" },
      { title: "作品集准备者", need: "持续积累主题、关键词、视觉语言和可复盘的过程材料。" },
      { title: "自主练习者", need: "把模糊兴趣转化为可执行的小项目和下一步行动。" },
    ],
    goalsTitle: "V1 产品目标",
    goals: ["完成创意火花主对话闭环", "完成个人灵感地图展示", "支持文本、图片与语音相关输入", "建立 AI 边界与失败降级"],
    nonGoalsTitle: "非目标",
    nonGoals: ["不做教师端、课程端和作业管理", "不做多人协作与团队空间", "不生成最终设计成品", "不承诺完整风格画像或已上线的长期 RAG"],
    scopeTitle: "V1 功能范围与状态",
    scopeHeaders: ["模块", "状态", "范围说明"],
    scope: [
      { module: "账号与鉴权", status: "done", statusLabel: "已实现", detail: "注册、登录、登出、受保护页面与个人设置。" },
      { module: "创意火花", status: "done", statusLabel: "已实现", detail: "Sparkie 对话、会话持久化、图片附件、阶段进度与火花解析。" },
      { module: "会话历史与火花卡", status: "done", statusLabel: "已实现", detail: "会话恢复、重命名、归档、删除，以及从火花继续探索。" },
      { module: "灵感地图", status: "done", statusLabel: "已实现", detail: "主题、火花、关键词与视觉语言的图谱展示。" },
      { module: "独立灵感捕捉", status: "partial", statusLabel: "部分实现", detail: "文字、图片、语音上传、分析与保存，依赖外部 AI 配置。" },
      { module: "风格档案与 RAG", status: "planned", statusLabel: "规划中", detail: "已有概念与表结构，不作为当前已实现核心能力。" },
    ],
    flowTitle: "核心用户流程",
    flow: [
      { number: "01", title: "选择入口", body: "登录后选择“创意火花”或“灵感地图”。" },
      { number: "02", title: "描述任务", body: "用户输入 brief、兴趣、限制或参考素材，Sparkie 发起澄清。" },
      { number: "03", title: "形成火花", body: "对话输出被解析为结构化火花，并与会话进度一起保存。" },
      { number: "04", title: "沉淀与回看", body: "火花进入灵感地图，用户可从已有节点继续新的探索。" },
    ],
    architectureTitle: "AI 与数据链路",
    architectureDescription: "主链路将开放式 Agent 对话转换成用户可控、可持久化的产品数据。",
    architecture: ["Next.js UI", "Route Handler", "Coze Bot SSE", "隐藏标记解析", "Supabase 持久化", "灵感地图"],
    metricsTitle: "拟观察指标与事实边界",
    metricsNotice: "当前没有可公开的真实用户量、留存率、转化率、Agent 准确率或线上性能数据。以下仅为上线后的验证指标。",
    metrics: [
      { label: "激活", detail: "注册到首次发送消息转化率" },
      { label: "启动", detail: "首次会话完成至少一次火花捕捉比例" },
      { label: "沉淀", detail: "火花与独立灵感保存数" },
      { label: "回访", detail: "灵感地图访问率、从火花发起新探索次数" },
      { label: "稳定性", detail: "/api/chat 成功率、Coze 超时率与上传失败率" },
    ],
    boundaryTitle: "当前边界",
    boundaries: [
      "Coze 控制台中的 Workflow 拓扑、知识库绑定和发布状态仍需单独确认。",
      "三方向与启动卡存在历史方案或部分实现，不包装为 V1 当前主链路。",
      "图片和语音能力受外部配置与浏览器能力影响，需要继续补充真实测试。",
    ],
  },
  demo: {
    eyebrow: "Live product",
    title: "进入 DesignSpark 体验完整流程",
    description: "在线版本将在新标签页打开。作品集页面不嵌套外部站点，避免跨域限制影响阅读和交互。",
    open: "打开在线 Demo",
    externalNotice: "外部站点 · yiyi01011.online",
    stepsTitle: "建议体验路径",
    steps: [
      { number: "01", title: "进入创意火花", body: "从一个真实设计任务或模糊兴趣开始。" },
      { number: "02", title: "与 Sparkie 对话", body: "观察 Agent 如何澄清任务、推进阶段并形成火花。" },
      { number: "03", title: "查看灵感地图", body: "回看会话火花与个人灵感节点如何被组织。" },
    ],
    backProjects: "返回首页项目区",
  },
};

const en: DesignSparkContent = {
  ...zh,
  back: "Back to selected projects",
  localNav: { overview: "Overview", solution: "Solution", prd: "PRD", demo: "Live Demo" },
  hero: {
    eyebrow: "AI product practice · V1",
    title: "DesignSpark",
    subtitle: "An AI creative-start agent and inspiration archive for design students",
    description: "It helps design students move from an ambiguous brief to an actionable creative state, then preserves useful sparks as reusable personal inspiration assets.",
    tags: ["AI Agent", "Product Design", "Coze", "Supabase"],
    demo: "Try the product",
    readPrd: "Read the PRD",
    coverAlt: "DesignSpark project cover showing a growing inspiration network",
    journey: ["Ambiguous brief", "Guided dialogue", "Creative spark", "Inspiration map"],
  },
  problem: {
    index: "01", kicker: "Problem framing", title: "The early-design challenge is not a lack of ideas",
    description: "Tasks, interests, references, and visual preferences are fragmented. A generic chatbot may answer questions, but rarely preserves task state, progression, or long-term inspiration.",
    items: [
      { title: "Starting friction", body: "Students receive a brief but struggle to turn vague interests into an actionable direction." },
      { title: "Lost process", body: "Useful keywords and visual cues disappear across chats and assets, forcing every project to restart." },
      { title: "AI overreach", body: "One-shot output can replace user judgment instead of supporting clarification and deliberate choices." },
    ],
  },
  solution: {
    index: "02", kicker: "Core loop", title: "Grow one conversation into a long-term creative asset",
    description: "V1 focuses on two connected modules: helping the user start, then preserving the signals worth revisiting.",
    modules: [
      { label: "START", title: "Creative Spark", body: "Sparkie asks about the task, interests, and constraints to surface keywords, visual language, and next actions.", output: "Output: structured sparks and session progress" },
      { label: "GROW", title: "Inspiration Map", body: "Conversation sparks and captured text, images, or voice become a personal creative galaxy for review and further exploration.", output: "Output: reusable personal inspiration nodes" },
    ],
    principle: "AI proposes directions while the user keeps control over selecting, saving, editing, and deleting.",
  },
  decisions: {
    index: "03", kicker: "Product decisions", title: "Protect the core hypothesis through deliberate scope",
    items: [
      { number: "A", title: "Personal tool over teaching management", body: "Validate the individual creative-start and inspiration loop first.", excluded: "Teacher, class, course, and assignment management are excluded." },
      { number: "B", title: "Open dialogue before fixed forms", body: "Early design input is ambiguous, so the agent decides when to clarify or advance.", excluded: "Users do not need to complete a complex task form first." },
      { number: "C", title: "Preserve process, not final-output automation", body: "The product records how users form decisions rather than delivering only a final answer.", excluded: "It is not positioned as a final artwork generator." },
    ],
  },
  prd: {
    ...zh.prd,
    eyebrow: "Structured PRD · V1",
    title: "Product Requirements Document",
    description: "This web edition is structured from the source PRD and technical notes. It preserves factual boundaries and does not invent research samples, production metrics, or unverified capabilities.",
    tocLabel: "On this page",
    toc: [
      { href: "#prd-context", label: "Context" }, { href: "#prd-users", label: "Users & goals" },
      { href: "#prd-scope", label: "V1 scope" }, { href: "#prd-flow", label: "Core flow" },
      { href: "#prd-architecture", label: "System flow" }, { href: "#prd-metrics", label: "Metrics & limits" },
    ],
    contextTitle: "Context and positioning",
    context: "DesignSpark is a personalized AI creative-start agent and inspiration archive for design students. Sparkie is not a generic chatbot or one-shot generator; it advances early design thinking through task state, user input, historical sparks, and saveable inspiration.",
    usersTitle: "Target users and needs",
    users: [
      { title: "Design students", need: "Understand assignments, competitions, or portfolio briefs and find an entry point." },
      { title: "Portfolio builders", need: "Accumulate themes, keywords, visual language, and reviewable process evidence." },
      { title: "Independent learners", need: "Turn a vague interest into a small executable project and next action." },
    ],
    goalsTitle: "V1 goals",
    goals: ["Complete the Creative Spark conversation loop", "Deliver the personal Inspiration Map", "Support text, image, and voice-related input", "Define AI boundaries and failure handling"],
    nonGoalsTitle: "Non-goals",
    nonGoals: ["No teacher, course, or assignment management", "No multiplayer or team space", "No final artwork generation", "No claim of a complete style profile or deployed long-term RAG"],
    scopeTitle: "V1 scope and status",
    scopeHeaders: ["Module", "Status", "Scope"],
    scope: [
      { module: "Account and auth", status: "done", statusLabel: "Implemented", detail: "Registration, login, logout, protected pages, and settings." },
      { module: "Creative Spark", status: "done", statusLabel: "Implemented", detail: "Sparkie dialogue, persistence, image attachments, stage progress, and spark parsing." },
      { module: "History and spark cards", status: "done", statusLabel: "Implemented", detail: "Restore, rename, archive, delete, and continue from a saved spark." },
      { module: "Inspiration Map", status: "done", statusLabel: "Implemented", detail: "Graph view of themes, sparks, keywords, and visual language." },
      { module: "Independent capture", status: "partial", statusLabel: "Partial", detail: "Text, image, and voice upload, analysis, and save depend on external AI configuration." },
      { module: "Style profile and RAG", status: "planned", statusLabel: "Planned", detail: "Concepts and schemas exist but are not presented as a shipped core capability." },
    ],
    flowTitle: "Core user flow",
    flow: [
      { number: "01", title: "Choose a module", body: "After login, enter Creative Spark or the Inspiration Map." },
      { number: "02", title: "Describe the task", body: "Share a brief, interest, constraint, or reference; Sparkie starts clarifying." },
      { number: "03", title: "Form a spark", body: "The response is parsed into a structured spark and saved with session progress." },
      { number: "04", title: "Preserve and revisit", body: "Sparks enter the map and can seed a new exploration later." },
    ],
    architectureTitle: "AI and data flow",
    architectureDescription: "The main path turns open-ended agent dialogue into user-controlled, persistent product data.",
    architecture: ["Next.js UI", "Route Handler", "Coze Bot SSE", "Hidden-marker parsing", "Supabase persistence", "Inspiration Map"],
    metricsTitle: "Planned metrics and factual boundary",
    metricsNotice: "No public real-world user count, retention, conversion, agent accuracy, or production performance data is available. These are validation metrics only.",
    metrics: [
      { label: "Activation", detail: "Registration-to-first-message conversion" },
      { label: "Start", detail: "First sessions completing at least one spark capture" },
      { label: "Archive", detail: "Saved conversation sparks and independent inspirations" },
      { label: "Return", detail: "Map visits and new explorations started from a spark" },
      { label: "Reliability", detail: "/api/chat success, Coze timeout, and upload failure rates" },
    ],
    boundaryTitle: "Current boundaries",
    boundaries: [
      "Coze workflow topology, knowledge-base bindings, and published versions require separate confirmation.",
      "Three-direction and starter-card concepts are historical or partial and are not presented as the V1 main path.",
      "Image and voice behavior depends on external configuration and browser support and still requires real testing.",
    ],
  },
  demo: {
    eyebrow: "Live product", title: "Experience the DesignSpark loop",
    description: "The live product opens in a new tab. This portfolio does not embed the external site, avoiding cross-origin restrictions and preserving a reliable reading experience.",
    open: "Open live demo", externalNotice: "External site · yiyi01011.online", stepsTitle: "Suggested path",
    steps: [
      { number: "01", title: "Enter Creative Spark", body: "Start with a real design task or a vague interest." },
      { number: "02", title: "Talk with Sparkie", body: "Observe how the agent clarifies context, advances stages, and forms sparks." },
      { number: "03", title: "Open the Inspiration Map", body: "Review how conversation sparks and personal inspiration nodes are organized." },
    ],
    backProjects: "Back to homepage projects",
  },
};

const content: Record<Locale, DesignSparkContent> = { zh, en };

export function getDesignSparkContent(locale: Locale) {
  return content[locale];
}
