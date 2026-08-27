import type { Locale } from "@/content/i18n";

export type VibeLesson = {
  number: string;
  title: string;
  focus: string;
  task: string;
  output: string;
};

export type VibeStage = {
  number: string;
  title: string;
  question: string;
  outcome: string;
  lessons: VibeLesson[];
};

export type VibeCodingContent = {
  back: string;
  localNav: { overview: string; map: string; methods: string; assessment: string; results: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    viewMap: string;
    viewResults: string;
    coverAlt: string;
    facts: { value: string; label: string }[];
  };
  rationale: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    gaps: { title: string; body: string }[];
    principle: string;
  };
  abilities: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    items: { number: string; title: string; body: string }[];
  };
  courseMap: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    stageLabel: string;
    lessonLabel: string;
    focusLabel: string;
    taskLabel: string;
    outputLabel: string;
    stages: VibeStage[];
  };
  methods: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    tasks: { number: string; title: string; items: string[] }[];
    methodsTitle: string;
    methodItems: { title: string; body: string }[];
  };
  assessment: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    checkpoints: { stage: string; deliverable: string; focus: string }[];
    scoreTitle: string;
    scoreItems: { label: string; value: number }[];
    principle: string;
  };
  results: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    metrics: { value: string; label: string }[];
    path: string[];
    assetsTitle: string;
    assets: string[];
  };
  ending: { eyebrow: string; title: string; description: string; backProjects: string };
};

const zhLessons: VibeLesson[] = [
  { number: "01", title: "课程导入与 AI Coding 认识", focus: "理解 Vibe Coding、AI Coding 与个人网站项目要求，认识 TRAE、Codex 等工具生态。", task: "梳理个人网站希望解决的问题与展示对象。", output: "个人网站目标与内容清单" },
  { number: "02", title: "个人定位与网站内容策划", focus: "明确个人介绍、专业方向、作品分类、目标受众与展示重点。", task: "完成个人定位、用户与核心内容取舍。", output: "个人网站策划卡" },
  { number: "03", title: "信息架构与页面规划", focus: "建立导航结构、内容层级、页面关系与主要浏览路径。", task: "把内容清单转化为网站地图和关键页面线框。", output: "网站地图、线框图" },
  { number: "04", title: "视觉规范与页面设计", focus: "定义情绪板、色彩、字体、版式、组件与网页视觉规范。", task: "完成核心页面视觉方向并检查可实现性。", output: "核心页面视觉稿" },
  { number: "05", title: "开发环境与网页基础", focus: "认识浏览器、HTML / JS 基础概念、文件结构、本地运行与开发环境。", task: "建立项目并完成一次本地运行。", output: "基础练习网页" },
  { number: "06", title: "第一次 AI Coding 页面搭建", focus: "向 AI 提供页面目标、内容和视觉参考，并拆解首次开发任务。", task: "用结构化任务完成核心页面的第一版。", output: "首页 V0" },
  { number: "07", title: "页面视觉精修", focus: "对照设计稿逐区修正版式、字体、色彩与图片呈现。", task: "记录视觉偏差并用局部指令逐项修正。", output: "修改前后对比" },
  { number: "08", title: "组件与页面复用", focus: "理解导航、按钮、作品卡片等组件复用与局部修改。", task: "整理重复界面并建立页面组件清单。", output: "组件与页面清单" },
  { number: "09", title: "基础交互实现", focus: "实现导航、悬停、展开和页面跳转等常用交互。", task: "为核心浏览路径补充反馈与操作状态。", output: "基础交互版本" },
  { number: "10", title: "多页面联动与内容完善", focus: "补齐首页、个人介绍、作品展示之间的关系与真实内容。", task: "检查导航关系与跨页面内容一致性。", output: "可运行网站 V1" },
  { number: "11", title: "调试与 AI 验证闭环", focus: "练习问题复现、报错分析、局部修复、运行检查与回归验证。", task: "用截图和明确验收条件完成一次问题修复。", output: "问题修复记录" },
  { number: "12", title: "响应式适配与性能优化", focus: "检查不同屏幕尺寸、滚动问题、图片加载与动画表现。", task: "完成主要设备上的布局与运行检查。", output: "可测试网站 V2" },
  { number: "13", title: "同伴测试与页面评审", focus: "从导航、内容层级、视觉一致性与运行问题四方面进行同伴浏览测试。", task: "记录问题、证据与修改优先级。", output: "测试记录" },
  { number: "14", title: "网站迭代冲刺", focus: "分类反馈并优化视觉细节、内容表达与页面体验。", task: "根据优先级完成一轮集中迭代。", output: "最终网站 V3" },
  { number: "15", title: "版本管理、部署与展示包装", focus: "理解 Git / GitHub 基础、网页部署、项目说明与演示录屏。", task: "完成线上发布并整理展示材料。", output: "线上链接与展示初稿" },
  { number: "16", title: "个人网站展示与课程复盘", focus: "演示网站、说明 AI 协作过程、问题修复与个人判断。", task: "完成项目答辩并归档过程证据。", output: "最终展示与项目归档" },
];

const zhStages: VibeStage[] = [
  { number: "01", title: "网站策划", question: "我要在网站中展示什么？", outcome: "网站策划与视觉方案", lessons: zhLessons.slice(0, 4) },
  { number: "02", title: "页面开发", question: "如何把设计方案转化为网页？", outcome: "个人网站页面 V0", lessons: zhLessons.slice(4, 8) },
  { number: "03", title: "交互与调试", question: "如何让网站正常运行并适配？", outcome: "可测试网站 V2", lessons: zhLessons.slice(8, 12) },
  { number: "04", title: "上线与表达", question: "如何完善并展示个人网站？", outcome: "最终个人网站 V3", lessons: zhLessons.slice(12, 16) },
];

const zh: VibeCodingContent = {
  back: "返回精选项目",
  localNav: { overview: "课程概览", map: "课程地图", methods: "任务与方法", assessment: "验收评价", results: "教学结果" },
  hero: {
    eyebrow: "Course case study · 设计教育实践",
    title: "AI 原生交互产品设计",
    subtitle: "与 Vibe Coding 实践",
    description: "以个人网站为统一实践命题，带领设计专业学生从个人定位、信息架构和视觉规范出发，借助 AI 完成网页开发、调试、测试与部署。",
    tags: ["课程研发", "项目制学习", "AI Coding", "设计教育", "个人网站"],
    viewMap: "展开 16 次课程",
    viewResults: "查看教学结果",
    coverAlt: "AI Coding 课程实践项目封面，展示学生、网页界面与协作开发场景",
    facts: [{ value: "64", label: "学时" }, { value: "16", label: "次课" }, { value: "4", label: "阶段" }],
  },
  rationale: {
    index: "01", kicker: "Why this course", title: "技术门槛降低之后，更需要完整的产品设计判断",
    description: "学生通常具备视觉表达基础，却缺少把概念转化为完整数字产品的经验。课程不把 Vibe Coding 当作孤立工具，而是把它放进策划、设计、开发、调试与上线的完整链路。",
    gaps: [
      { title: "内容缺少取舍", body: "能够做视觉表达，却难以明确网站定位、信息层级与展示重点。" },
      { title: "静态稿难以落地", body: "关注单页效果，但不熟悉页面关系、组件复用与基础交互。" },
      { title: "AI 指令过于模糊", body: "容易用一句话要求 AI 完成网站，缺少任务拆解与上下文组织。" },
      { title: "缺少验证闭环", body: "遇到报错难以复现和定位，也容易直接接受 AI 的第一版结果。" },
    ],
    principle: "Vibe Coding 不是课程终点，而是让学生把设计决策转化为真实数字体验的协作媒介。",
  },
  abilities: {
    index: "02", kicker: "Learning outcomes", title: "把一门工具课，重构为四类可迁移能力",
    description: "评价不看代码数量，而看学生能否定义问题、组织内容、完成可运行页面，并通过测试持续修正。",
    items: [
      { number: "01", title: "网站策划能力", body: "围绕个人身份、专业方向与作品内容，明确网站定位、展示重点和页面范围。" },
      { number: "02", title: "信息与视觉设计能力", body: "建立信息架构、导航关系、视觉规范与具有个人辨识度的网页表达。" },
      { number: "03", title: "AI 协作开发能力", body: "用 Prompt、页面规范和任务清单组织上下文，完成生成、修改、调试与迭代。" },
      { number: "04", title: "测试与表达能力", body: "检查运行、跳转、响应式与视觉一致性，并说明设计判断和修改过程。" },
    ],
  },
  courseMap: {
    index: "03", kicker: "16-session course map", title: "一个项目，四个阶段，十六个连续交付节点",
    description: "选择阶段，再点击任意课次，可查看该次课的学习重点、课堂任务与明确产出。",
    stageLabel: "阶段", lessonLabel: "课次", focusLabel: "学习重点", taskLabel: "课堂任务", outputLabel: "本次产出", stages: zhStages,
  },
  methods: {
    index: "04", kicker: "Teaching tasks", title: "把抽象的 AI 协作能力，变成可提交、可观察的任务",
    description: "课程通过模板、现场示范、截图反馈和同伴评审，让每一次 AI 协作都有输入、判断、修改和验证证据。",
    tasks: [
      { number: "01", title: "个人网站策划卡", items: ["个人定位与目标受众", "栏目结构与重点作品", "页面范围与暂不实现项"] },
      { number: "02", title: "网页设计与 AI 协作资料包", items: ["网站策划说明", "视觉规范与组件要求", "Prompt 模板与任务清单"] },
      { number: "03", title: "Agent 任务委派记录", items: ["提供任务目标与上下文", "审核并修改 AI 计划", "检查文件与运行结果"] },
      { number: "04", title: "多模态界面修改", items: ["使用截图定位问题", "区分目标、现状和禁止项", "设置明确验收方式"] },
      { number: "05", title: "网页测试与同伴评审", items: ["交换浏览个人网站", "记录视觉与运行问题", "判断优先级并完成修改"] },
    ],
    methodsTitle: "教学方法",
    methodItems: [
      { title: "项目制学习", body: "16 次课持续推进同一个个人网站。" },
      { title: "阶段性脚手架", body: "用模板与检查表降低初期认知负担。" },
      { title: "教师现场示范", body: "完整呈现任务、修改、报错与验证过程。" },
      { title: "对比式教学", body: "比较模糊指令与结构化上下文的结果差异。" },
      { title: "过程性评价", body: "同时评价定义、决策、修改和验证。" },
    ],
  },
  assessment: {
    index: "05", kicker: "Assessment", title: "四次验收，把策划、设计、开发和部署连成闭环",
    description: "每个阶段都有可检查交付物，避免学生只在结课时展示一个缺少过程证据的最终页面。",
    checkpoints: [
      { stage: "网站策划与视觉方案", deliverable: "定位、内容清单、网站地图、线框与视觉稿", focus: "内容、结构与视觉方向" },
      { stage: "页面原型 V0", deliverable: "首页、核心页面、组件样式与 AI 协作记录", focus: "结构完整与视觉还原" },
      { stage: "可运行网站 V2", deliverable: "运行版本、主要交互、响应式检查与修复记录", focus: "主要浏览路径可用" },
      { stage: "最终网站 V3", deliverable: "线上网站、测试记录、展示材料与课程复盘", focus: "完成度、质量与迭代证据" },
    ],
    scoreTitle: "评分结构",
    scoreItems: [
      { label: "策划与内容组织", value: 20 }, { label: "AI 协作过程", value: 20 }, { label: "视觉与页面完成度", value: 25 },
      { label: "网页实现与运行", value: 15 }, { label: "测试与响应式", value: 10 }, { label: "展示与复盘", value: 10 },
    ],
    principle: "课程不以代码数量作为主要依据，更关注内容策划、视觉表达、网页实现与测试修改是否形成完整实践闭环。",
  },
  results: {
    index: "06", kicker: "Teaching results", title: "从“让 AI 生成页面”，走向“定义、检查并持续修改”",
    description: "本轮课程已形成一套 64 学时的项目制教学路径，并留下可复用的课程材料、验收机制与真实实施数据。",
    metrics: [
      { value: "31", label: "名学生参与" }, { value: "21", label: "人完成个人网站" }, { value: "67.7%", label: "项目完成率" },
      { value: "8", label: "个优秀案例" }, { value: "3", label: "个项目进入作品集" },
    ],
    path: ["策划", "设计", "开发", "测试", "上线"],
    assetsTitle: "沉淀的教学资产",
    assets: ["个人网站策划模板", "网页视觉规范", "结构化 Prompt 模板", "开发任务清单", "问题修复记录", "同伴测试记录", "课程评价标准"],
  },
  ending: {
    eyebrow: "Course summary", title: "让设计学生用 AI 把自己的判断做成可运行的作品",
    description: "这门课程的核心不是替学生生成网页，而是建立从内容策划、视觉决策到 AI 协作开发与验证的完整方法。",
    backProjects: "返回首页项目区",
  },
};

const enLessons: VibeLesson[] = [
  { number: "01", title: "Course introduction and AI Coding", focus: "Understand Vibe Coding, AI Coding, the portfolio brief, and the TRAE/Codex tool ecosystem.", task: "Define the purpose and intended audience of the portfolio.", output: "Website goal and content list" },
  { number: "02", title: "Positioning and content strategy", focus: "Clarify profile, discipline, project categories, audience, and priorities.", task: "Make explicit choices about identity, audience, and content.", output: "Portfolio strategy card" },
  { number: "03", title: "Information architecture", focus: "Plan navigation, hierarchy, page relationships, and browsing paths.", task: "Turn the content list into a sitemap and key wireframes.", output: "Sitemap and wireframes" },
  { number: "04", title: "Visual system and page design", focus: "Define mood, color, type, layout, components, and web constraints.", task: "Design core screens and review implementation feasibility.", output: "Core page visual design" },
  { number: "05", title: "Development environment and web basics", focus: "Learn browser, HTML/JS concepts, file structure, local runtime, and setup.", task: "Create and run a basic project locally.", output: "Practice webpage" },
  { number: "06", title: "First AI Coding build", focus: "Give AI a page goal, real content, references, and a scoped task.", task: "Build the first core page through structured delegation.", output: "Homepage V0" },
  { number: "07", title: "Visual refinement", focus: "Compare the implementation with the design and correct layout, type, color, and imagery.", task: "Record visual gaps and revise them one at a time.", output: "Before-and-after comparison" },
  { number: "08", title: "Components and reuse", focus: "Reuse navigation, buttons, and project cards while making targeted changes.", task: "Identify repeated UI and create a component/page checklist.", output: "Component and page list" },
  { number: "09", title: "Core interactions", focus: "Implement navigation, hover, expansion, and page transitions.", task: "Add feedback and states to the primary browsing path.", output: "Interactive version" },
  { number: "10", title: "Multi-page integration", focus: "Connect home, profile, and work pages with complete real content.", task: "Check navigation and cross-page content consistency.", output: "Working website V1" },
  { number: "11", title: "Debugging and AI verification", focus: "Reproduce issues, analyze errors, patch locally, test, and regress.", task: "Use screenshots and acceptance criteria to complete one repair loop.", output: "Issue-resolution record" },
  { number: "12", title: "Responsive design and performance", focus: "Check screen sizes, scrolling, image loading, and motion.", task: "Validate the layout and runtime on primary devices.", output: "Testable website V2" },
  { number: "13", title: "Peer testing and review", focus: "Review navigation, hierarchy, visual consistency, and runtime issues.", task: "Record evidence and prioritize improvements.", output: "Test record" },
  { number: "14", title: "Iteration sprint", focus: "Classify feedback and refine visual details, content, and experience.", task: "Complete one focused iteration by priority.", output: "Final website V3" },
  { number: "15", title: "Versioning, deployment, and packaging", focus: "Learn Git/GitHub basics, deployment, project notes, and demo recording.", task: "Publish the site and prepare presentation materials.", output: "Live link and presentation draft" },
  { number: "16", title: "Showcase and reflection", focus: "Present the site, AI collaboration, debugging, and personal decisions.", task: "Complete the review and archive process evidence.", output: "Final presentation and archive" },
];

const enStages: VibeStage[] = [
  { number: "01", title: "Strategy", question: "What should the site communicate?", outcome: "Strategy and visual direction", lessons: enLessons.slice(0, 4) },
  { number: "02", title: "Page development", question: "How does the design become a webpage?", outcome: "Portfolio page V0", lessons: enLessons.slice(4, 8) },
  { number: "03", title: "Interaction and debugging", question: "How does the site work and adapt?", outcome: "Testable website V2", lessons: enLessons.slice(8, 12) },
  { number: "04", title: "Launch and presentation", question: "How is the work finished and communicated?", outcome: "Final portfolio V3", lessons: enLessons.slice(12, 16) },
];

const en: VibeCodingContent = {
  ...zh,
  back: "Back to selected projects",
  localNav: { overview: "Overview", map: "Course map", methods: "Tasks & methods", assessment: "Assessment", results: "Results" },
  hero: {
    eyebrow: "Course case study · Design education",
    title: "AI-native Interactive Product Design",
    subtitle: "and Vibe Coding Practice",
    description: "A project-based course that guides design students from personal positioning, information architecture, and visual systems to AI-assisted development, debugging, testing, and deployment through one portfolio website.",
    tags: ["Course Design", "Project-based Learning", "AI Coding", "Design Education", "Portfolio"],
    viewMap: "Explore 16 sessions", viewResults: "View teaching results",
    coverAlt: "AI Coding course project cover with students, webpage interfaces, and collaborative development scenes",
    facts: [{ value: "64", label: "hours" }, { value: "16", label: "sessions" }, { value: "4", label: "stages" }],
  },
  rationale: {
    index: "01", kicker: "Why this course", title: "Lower technical barriers make product judgment more important",
    description: "Students often have visual foundations but little experience turning concepts into complete digital products. The course places Vibe Coding inside a full strategy, design, development, debugging, and launch process.",
    gaps: [
      { title: "Weak content choices", body: "Visual skills do not automatically produce clear positioning, hierarchy, or priorities." },
      { title: "Static designs do not ship", body: "Single-screen polish can hide gaps in navigation, reuse, and interaction." },
      { title: "Vague AI instructions", body: "One-line requests replace task decomposition and useful context." },
      { title: "No verification loop", body: "Errors are hard to reproduce, and first-generation output is too readily accepted." },
    ],
    principle: "Vibe Coding is not the destination. It is a collaborative medium for turning design decisions into real digital experiences.",
  },
  abilities: {
    index: "02", kicker: "Learning outcomes", title: "Reframe a tool course around four transferable abilities",
    description: "Success is not measured by code volume, but by the ability to define, organize, build, test, and improve a working product.",
    items: [
      { number: "01", title: "Website strategy", body: "Define positioning, priorities, scope, and audience from identity and portfolio content." },
      { number: "02", title: "Information and visual design", body: "Build architecture, navigation, visual rules, and a distinctive web expression." },
      { number: "03", title: "AI-assisted development", body: "Organize context with prompts, specifications, and task lists for iterative implementation." },
      { number: "04", title: "Testing and communication", body: "Check runtime, links, responsive behavior, and visual consistency, then explain decisions and revisions." },
    ],
  },
  courseMap: {
    index: "03", kicker: "16-session course map", title: "One project, four stages, sixteen connected delivery points",
    description: "Choose a stage and a session to inspect its learning focus, classroom task, and concrete output.",
    stageLabel: "Stage", lessonLabel: "Session", focusLabel: "Learning focus", taskLabel: "Class task", outputLabel: "Output", stages: enStages,
  },
  methods: {
    index: "04", kicker: "Teaching tasks", title: "Turn abstract AI collaboration into observable work",
    description: "Templates, live demonstrations, screenshot feedback, and peer review give each AI interaction evidence of input, judgment, revision, and verification.",
    tasks: [
      { number: "01", title: "Portfolio strategy card", items: ["Positioning and audience", "Structure and priority work", "Scope and exclusions"] },
      { number: "02", title: "Design and AI collaboration kit", items: ["Strategy brief", "Visual and component rules", "Prompt templates and task list"] },
      { number: "03", title: "Agent delegation record", items: ["Task and context", "Plan review and revision", "Files and runtime inspection"] },
      { number: "04", title: "Multimodal UI revision", items: ["Locate issues with screenshots", "Separate current and target states", "Set acceptance criteria"] },
      { number: "05", title: "Testing and peer review", items: ["Exchange portfolio reviews", "Record visual/runtime issues", "Prioritize and revise"] },
    ],
    methodsTitle: "Teaching methods",
    methodItems: [
      { title: "Project-based learning", body: "All 16 sessions advance the same portfolio." },
      { title: "Stage scaffolding", body: "Templates and checklists reduce early cognitive load." },
      { title: "Live demonstration", body: "Show task definition, revision, errors, and verification end to end." },
      { title: "Comparative teaching", body: "Compare vague requests with structured context." },
      { title: "Process assessment", body: "Evaluate definition, decisions, revisions, and verification." },
    ],
  },
  assessment: {
    index: "05", kicker: "Assessment", title: "Four reviews connect strategy, design, development, and launch",
    description: "Each stage has inspectable deliverables, preventing a final website from hiding the absence of process evidence.",
    checkpoints: [
      { stage: "Strategy and visual direction", deliverable: "Positioning, content list, sitemap, wireframes, visual design", focus: "Content, structure, and direction" },
      { stage: "Page prototype V0", deliverable: "Homepage, core pages, components, and AI collaboration record", focus: "Structure and visual fidelity" },
      { stage: "Working website V2", deliverable: "Runtime, interactions, responsive checks, and fix record", focus: "Primary path usability" },
      { stage: "Final website V3", deliverable: "Live website, tests, presentation, and reflection", focus: "Quality and iteration evidence" },
    ],
    scoreTitle: "Scoring structure",
    scoreItems: [
      { label: "Strategy and content", value: 20 }, { label: "AI collaboration process", value: 20 }, { label: "Visual and page quality", value: 25 },
      { label: "Implementation quality", value: 15 }, { label: "Testing and responsive", value: 10 }, { label: "Presentation and reflection", value: 10 },
    ],
    principle: "The course prioritizes a complete loop of content strategy, visual expression, implementation, testing, and revision over the amount of code produced.",
  },
  results: {
    index: "06", kicker: "Teaching results", title: "Move from “let AI generate it” to “define, inspect, and improve”",
    description: "The course produced a reusable 64-hour project path, assessment system, teaching assets, and documented implementation results.",
    metrics: [
      { value: "31", label: "students participated" }, { value: "21", label: "completed portfolios" }, { value: "67.7%", label: "completion rate" },
      { value: "8", label: "selected cases" }, { value: "3", label: "entered portfolios" },
    ],
    path: ["Strategy", "Design", "Build", "Test", "Launch"],
    assetsTitle: "Reusable teaching assets",
    assets: ["Portfolio strategy template", "Web visual specification", "Structured prompt template", "Development task list", "Issue-resolution record", "Peer-test record", "Assessment rubric"],
  },
  ending: {
    eyebrow: "Course summary", title: "Help design students turn their judgment into working products with AI",
    description: "The course does not generate websites for students. It builds a complete method from content strategy and visual decisions to AI-assisted implementation and verification.",
    backProjects: "Back to homepage projects",
  },
};

export function getVibeCodingContent(locale: Locale) {
  return locale === "en" ? en : zh;
}
