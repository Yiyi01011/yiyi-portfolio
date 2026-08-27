import type { Locale } from "@/content/i18n";

export type LifeExchangeMode = {
  id: "event-single" | "event-dual" | "life-single" | "life-dual";
  code: string;
  title: string;
  scope: string;
  participation: string;
  visibility: string;
  output: string;
  steps: string[];
};

export type LifeExchangeContent = {
  back: string;
  localNav: { overview: string; model: string; privacy: string; prd: string; demo: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    demo: string;
    readPrd: string;
    coverAlt: string;
    trackA: string;
    trackB: string;
    shared: string;
  };
  problem: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    items: { title: string; body: string }[];
  };
  model: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    modes: LifeExchangeMode[];
    viewLabel: string;
    singleLabel: string;
    dualLabel: string;
    flowLabel: string;
  };
  privacy: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    privateLabel: string;
    privateBody: string;
    sharedLabel: string;
    sharedBody: string;
    reveal: string;
    hide: string;
    revealed: string;
    rules: string[];
  };
  decisions: {
    index: string;
    kicker: string;
    title: string;
    items: { number: string; title: string; body: string; boundary: string }[];
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
    modesTitle: string;
    modeHeaders: string[];
    flowsTitle: string;
    flows: { number: string; title: string; body: string }[];
    aiTitle: string;
    aiDescription: string;
    aiBoundaries: string[];
    mvpTitle: string;
    mvpNotice: string;
    mvpItems: { label: string; detail: string }[];
    metricsTitle: string;
    metricsNotice: string;
    metrics: { label: string; detail: string }[];
  };
  demo: {
    eyebrow: string;
    title: string;
    description: string;
    open: string;
    externalNotice: string;
    currentLabel: string;
    currentBody: string;
    focusTitle: string;
    focus: { number: string; title: string; body: string }[];
    backProjects: string;
  };
};

const zh: LifeExchangeContent = {
  back: "返回精选项目",
  localNav: { overview: "项目概览", model: "双视角模型", privacy: "隐私机制", prd: "PRD 文档", demo: "在线体验" },
  hero: {
    eyebrow: "AI 情感叙事产品 · 产品方案 V1.0",
    title: "交换人生",
    subtitle: "让两个版本，在不互相打断的前提下被完整看见",
    description: "面向彼此熟悉、却难以把一段经历说清楚的两个人。产品通过私密表达、分别确认与共同叙事，帮助双方重新理解同一件事或一段人生。",
    tags: ["双人叙事", "隐私设计", "AI 辅助表达", "Next.js + Supabase"],
    demo: "体验当前 Demo",
    readPrd: "阅读结构化 PRD",
    coverAlt: "交换人生项目封面，两个人在桥上回望共同经历",
    trackA: "我的版本",
    trackB: "你的版本",
    shared: "共同故事",
  },
  problem: {
    index: "01",
    kicker: "Problem framing",
    title: "有些经历不是没人想说，而是缺少不被打断的表达空间",
    description: "即时聊天容易被反应打断，日记又过于私密；通用 AI 还能生成内容，却没有明确处理双人关系中的同意、可见性和发布边界。",
    items: [
      { title: "表达被打断", body: "解释刚刚开始，就可能被追问、辩解或情绪反应带走，双方都难以完整讲述。" },
      { title: "材料无法共享", body: "私人记录保留了细节，却缺少合适的整理与交付方式，公开社交平台也不适合承载。" },
      { title: "权限边界模糊", body: "AI 可以帮助组织语言，但不能替用户同意、替对方发言，或提前暴露另一方的私密内容。" },
    ],
  },
  model: {
    index: "02",
    kicker: "Dual-perspective model",
    title: "两个选择轴，组成四条叙事路径",
    description: "先选择讲述同一事件还是一段人生，再选择独自完成还是邀请对方共同参与。点击四种组合，查看流程与结果如何变化。",
    viewLabel: "流程视角",
    singleLabel: "单人",
    dualLabel: "双人",
    flowLabel: "当前流程",
    modes: [
      { id: "event-single", code: "M1", title: "同一事件 · 只有我", scope: "一次具体事件", participation: "单人完成", visibility: "作者确认后发送给对方", output: "个人故事 / 绘本", steps: ["事件卡", "私密表达", "确认内容", "生成并发送"] },
      { id: "event-dual", code: "M2", title: "同一事件 · 双方参与", scope: "一次具体事件", participation: "双方独立提交", visibility: "双方提交前互不可见", output: "共同故事 / 绘本", steps: ["分别表达", "独立提交", "共同节点", "双方确认"] },
      { id: "life-single", code: "M3", title: "一段人生 · 只有我", scope: "一段时间与多件事", participation: "单人持续记录", visibility: "完成整理后由作者决定", output: "个人时间线 / 绘本", steps: ["建立时期", "累积记录", "回看整理", "生成并发送"] },
      { id: "life-dual", code: "M4", title: "一段人生 · 双方参与", scope: "一段时间与多件事", participation: "双方独立时间线", visibility: "双方提交后再共同呈现", output: "双轨时间线 / 共同绘本", steps: ["双轨记录", "分别提交", "时间线对照", "共同确认"] },
    ],
  },
  privacy: {
    index: "03",
    kicker: "Privacy by design",
    title: "先保护表达，再建立共同理解",
    description: "双人模式下，两条叙事线在提交前彼此不可见。共同结果默认先于原始稿出现，原始内容是否开放由双方预先确认的规则决定。",
    privateLabel: "提交前 · 私密区",
    privateBody: "每个人只看到自己的草稿、AI 建议和确认状态。另一方无法预览、催促或修改。",
    sharedLabel: "双方提交后 · 共同区",
    sharedBody: "系统基于锁定快照生成共同故事，保留共同线索、双方视角和仍未达成一致的部分。",
    reveal: "查看可见性规则",
    hide: "收起可见性规则",
    revealed: "规则已展开",
    rules: ["AI 不自动发送，也不替任何一方同意", "默认先阅读共同故事，再按约定开放原始内容", "争议段落可标记，解决前不进入最终归档"],
  },
  decisions: {
    index: "04",
    kicker: "Product decisions",
    title: "把理解做成结果，而不是把关系做成评分",
    items: [
      { number: "A", title: "AI 只辅助组织", body: "AI 负责追问、整理和生成候选内容，所有发布内容仍由用户确认。", boundary: "不判断谁对谁错，不诊断关系。" },
      { number: "B", title: "单人也能完整结束", body: "用户不必等待邀请被接受，单人故事可以独立完成并选择是否发送。", boundary: "不通过提醒、连续签到或排名制造压力。" },
      { number: "C", title: "共同结果保留差异", body: "共同故事同时呈现共识、A 的视角、B 的视角和仍然不同的部分。", boundary: "不虚构对话、动机或和解结局。" },
    ],
  },
  prd: {
    eyebrow: "Structured PRD · V1.0",
    title: "产品需求文档",
    description: "以下内容由现有完整 PRD 整理为网页阅读版。方案仍处于待未决问题确认后进入开发拆解的阶段；已实现 Demo 与正式方案的能力边界在文末单独说明。",
    tocLabel: "文档目录",
    toc: [
      { href: "#life-prd-context", label: "背景与定位" },
      { href: "#life-prd-users", label: "用户与目标" },
      { href: "#life-prd-modes", label: "四种组合" },
      { href: "#life-prd-flows", label: "端到端流程" },
      { href: "#life-prd-ai", label: "AI 与隐私边界" },
      { href: "#life-prd-mvp", label: "MVP 与当前 Demo" },
      { href: "#life-prd-metrics", label: "拟观察指标" },
    ],
    contextTitle: "背景与产品定位",
    context: "交换人生是一款面向两位熟人关系的桌面优先 Web 产品。它把难以直接解释的经历整理成可阅读的个人故事或共同绘本，并通过明确的提交、可见性与确认机制保护双方的表达边界。产品目标是帮助彼此看见，而不是强制达成一致。",
    usersTitle: "目标用户与核心需求",
    users: [
      { title: "亲密关系中的两个人", need: "希望完整讲述同一事件，又担心即时对话变成争辩。" },
      { title: "长期关系中的双方", need: "希望整理一段共同生活中的多个节点，理解彼此不同的时间线。" },
      { title: "先独自表达的人", need: "希望先完成自己的版本，再决定是否邀请、发送或开放原始内容。" },
    ],
    goalsTitle: "产品目标",
    goals: ["降低开始表达的压力", "保证 AI 可选且所有结果需确认", "双人模式在双方提交前保持独立", "让一段人生按时间与事件持续积累"],
    nonGoalsTitle: "非目标",
    nonGoals: ["不做陌生人匹配或公开社区", "不做即时聊天与无限反馈流", "不做关系诊断、评分与建议", "不通过连续任务制造参与压力"],
    modesTitle: "四种产品组合",
    modeHeaders: ["模式", "表达方式", "公开时机", "核心输出"],
    flowsTitle: "端到端关键流程",
    flows: [
      { number: "01", title: "创建规则", body: "选择叙事范围、参与方式、交付与可见性规则，再创建关系空间。" },
      { number: "02", title: "私密表达", body: "用户独立写作，按需调用 AI 追问或整理，并确认用于生成的来源。" },
      { number: "03", title: "提交与锁定", body: "双人模式分别提交快照；双方完成前，另一方无法查看原始内容。" },
      { number: "04", title: "共同生成", body: "AI 生成保留差异的共同故事或绘本，双方分别校对并确认。" },
      { number: "05", title: "阅读与归档", body: "根据预设权限阅读、回应与决定是否开放原始稿，争议内容解决后再归档。" },
    ],
    aiTitle: "AI 角色与隐私边界",
    aiDescription: "AI 是表达辅助者，不是关系裁判。它只能基于用户确认过的材料组织候选结果，不能越过发布和权限规则。",
    aiBoundaries: ["不自动发送或代替用户同意", "不虚构对话、动机和和解", "每段共同结果保留来源可追溯性", "用户可拒绝建议、重新生成或标记争议"],
    mvpTitle: "MVP 与当前 Demo 边界",
    mvpNotice: "当前 Demo 可作为“同一事件”基础流程的体验样本，不代表完整 PRD 已全部实现。正式 MVP 仍需要后端状态机、真实身份与关系空间、双人提交快照和 Supabase RLS 等能力。",
    mvpItems: [
      { label: "可延续", detail: "现有事件写作、整理、预览与阅读组件。" },
      { label: "需新增", detail: "人生时间线、双人快照、共同生成、双方校对与确认。" },
      { label: "需重构", detail: "用服务端状态机与 Supabase RLS 替代浏览器状态权限。" },
    ],
    metricsTitle: "拟观察指标",
    metricsNotice: "以下为方案提出的验证指标，不是已取得的真实线上数据。",
    metrics: [
      { label: "创建", detail: "规则设置与创建流程完成率" },
      { label: "表达", detail: "首次有效内容与 AI 候选采用情况" },
      { label: "协作", detail: "邀请接受率、双方提交率与有效完成天数" },
      { label: "阅读", detail: "打开率、读完率与轻量回应选择" },
      { label: "确认", detail: "争议标记、重新生成与双方确认率" },
    ],
  },
  demo: {
    eyebrow: "Current prototype",
    title: "体验“同一事件”的当前基础流程",
    description: "Demo 将在新标签页打开。它用于展示当前可体验的产品方向，不将 PRD 中尚未实现的双人状态机、人生时间线与完整权限机制包装为现成功能。",
    open: "打开交换人生 Demo",
    externalNotice: "外部站点 · exchange-life.786383431.workers.dev",
    currentLabel: "当前体验边界",
    currentBody: "当前 Demo 是正式产品方案的基础样本；设备要求、登录条件与完整体验路径仍待补充确认。",
    focusTitle: "建议从这些产品判断点观察",
    focus: [
      { number: "01", title: "表达如何开始", body: "观察产品如何降低讲述一件事的启动压力。" },
      { number: "02", title: "AI 如何介入", body: "关注 AI 是提供整理候选，还是替用户做决定。" },
      { number: "03", title: "结果如何被阅读", body: "关注从私人表达走向可阅读故事的结构变化。" },
    ],
    backProjects: "返回首页项目区",
  },
};

const en: LifeExchangeContent = {
  ...zh,
  back: "Back to selected projects",
  localNav: { overview: "Overview", model: "Dual-view model", privacy: "Privacy", prd: "PRD", demo: "Live demo" },
  hero: {
    eyebrow: "AI emotional narrative product · Plan V1.0",
    title: "Life Exchange",
    subtitle: "Let both versions be fully seen without interrupting each other",
    description: "Designed for two people who know each other but struggle to explain an experience. Private expression, separate confirmation, and shared narrative help both sides revisit the same event or period of life.",
    tags: ["Dual Narrative", "Privacy Design", "AI-assisted Expression", "Next.js + Supabase"],
    demo: "Try the current demo",
    readPrd: "Read the structured PRD",
    coverAlt: "Life Exchange cover showing two people revisiting a shared experience on a bridge",
    trackA: "My version",
    trackB: "Your version",
    shared: "Shared story",
  },
  problem: {
    index: "01", kicker: "Problem framing", title: "Some experiences remain untold because there is no uninterrupted space",
    description: "Instant chat invites reactions before a story is complete, while diaries remain private. Generic AI may generate text but rarely defines consent, visibility, and publishing boundaries for two people.",
    items: [
      { title: "Interrupted expression", body: "Questions, defenses, or emotion can redirect a story before either person explains it fully." },
      { title: "Unshareable material", body: "Private notes preserve details but lack an appropriate way to organize and deliver them." },
      { title: "Unclear permissions", body: "AI may help with language, but it cannot consent, publish, or expose the other person's private content." },
    ],
  },
  model: {
    index: "02", kicker: "Dual-perspective model", title: "Two choice axes create four narrative paths",
    description: "Choose an event or a period of life, then decide whether to complete it alone or invite the other person. Select a combination to see how its flow and outcome change.",
    viewLabel: "Flow view", singleLabel: "Solo", dualLabel: "Together", flowLabel: "Current flow",
    modes: [
      { id: "event-single", code: "M1", title: "One event · Only me", scope: "One specific event", participation: "Completed alone", visibility: "Sent after author confirmation", output: "Personal story / picture book", steps: ["Event card", "Private expression", "Confirm content", "Generate and send"] },
      { id: "event-dual", code: "M2", title: "One event · Both", scope: "One specific event", participation: "Independent submissions", visibility: "Hidden until both submit", output: "Shared story / picture book", steps: ["Separate expression", "Independent submit", "Shared nodes", "Dual confirmation"] },
      { id: "life-single", code: "M3", title: "A life period · Only me", scope: "A period and multiple events", participation: "Ongoing solo record", visibility: "Author decides after organizing", output: "Personal timeline / picture book", steps: ["Create period", "Add records", "Review", "Generate and send"] },
      { id: "life-dual", code: "M4", title: "A life period · Both", scope: "A period and multiple events", participation: "Independent timelines", visibility: "Shared after both submit", output: "Dual timeline / shared book", steps: ["Dual records", "Separate submit", "Compare timelines", "Shared confirmation"] },
    ],
  },
  privacy: {
    index: "03", kicker: "Privacy by design", title: "Protect expression before building shared understanding",
    description: "In dual mode, both narrative tracks remain invisible to each other before submission. Shared output appears before source drafts, whose visibility follows rules confirmed in advance.",
    privateLabel: "Before submission · Private", privateBody: "Each person sees only their draft, AI suggestions, and confirmation state. The other person cannot preview, rush, or edit it.",
    sharedLabel: "After both submit · Shared", sharedBody: "The system builds a shared story from locked snapshots while preserving common clues, both viewpoints, and unresolved differences.",
    reveal: "Reveal visibility rules", hide: "Hide visibility rules", revealed: "Rules revealed",
    rules: ["AI never sends or consents for either person", "The shared story appears first; source access follows the agreed rule", "Disputed passages can be flagged and stay out of the final archive"],
  },
  decisions: {
    index: "04", kicker: "Product decisions", title: "Make understanding the outcome, not a relationship score",
    items: [
      { number: "A", title: "AI organizes, users decide", body: "AI asks, structures, and drafts candidates; users confirm everything that is published.", boundary: "No judgment, diagnosis, or relationship scoring." },
      { number: "B", title: "Solo journeys can finish", body: "A user can complete a personal story without waiting for an invitation to be accepted.", boundary: "No streaks, rankings, or pressure loops." },
      { number: "C", title: "Shared output preserves difference", body: "The result includes common ground, A's view, B's view, and what remains unresolved.", boundary: "No invented dialogue, motives, or reconciliation." },
    ],
  },
  prd: {
    ...zh.prd,
    eyebrow: "Structured PRD · V1.0", title: "Product requirements document",
    description: "This web reading version is organized from the complete PRD. The plan still awaits open-question confirmation before engineering breakdown; the current demo and formal-product boundaries are stated separately.",
    tocLabel: "Contents",
    toc: [
      { href: "#life-prd-context", label: "Context and position" }, { href: "#life-prd-users", label: "Users and goals" },
      { href: "#life-prd-modes", label: "Four combinations" }, { href: "#life-prd-flows", label: "End-to-end flow" },
      { href: "#life-prd-ai", label: "AI and privacy" }, { href: "#life-prd-mvp", label: "MVP and current demo" },
      { href: "#life-prd-metrics", label: "Proposed metrics" },
    ],
    contextTitle: "Context and positioning",
    context: "Life Exchange is a desktop-first web product for two people in an existing relationship. It turns hard-to-explain experiences into readable personal or shared stories, while explicit submission, visibility, and confirmation rules protect both people's boundaries. Its goal is to help both sides see, not force agreement.",
    usersTitle: "Target users and core needs",
    users: [
      { title: "Two people in a close relationship", need: "Tell the same event completely without turning an instant conversation into an argument." },
      { title: "People in a long-term relationship", need: "Organize multiple moments across a shared period and compare different timelines." },
      { title: "Someone who starts alone", need: "Finish their version first, then decide whether to invite, send, or reveal source content." },
    ],
    goalsTitle: "Product goals", goals: ["Reduce the pressure of starting", "Keep AI optional and require confirmation", "Keep dual narratives independent before submission", "Accumulate a life period through time and events"],
    nonGoalsTitle: "Non-goals", nonGoals: ["No stranger matching or public community", "No instant chat or endless reaction feed", "No relationship diagnosis, scoring, or advice", "No streaks or participation pressure"],
    modesTitle: "Four product combinations", modeHeaders: ["Mode", "Expression", "Reveal timing", "Core output"],
    flowsTitle: "End-to-end flow",
    flows: [
      { number: "01", title: "Set the rules", body: "Choose scope, participation, delivery, and visibility before creating the relationship space." },
      { number: "02", title: "Express privately", body: "Write independently, optionally use AI, and confirm the source material for generation." },
      { number: "03", title: "Submit and lock", body: "Dual mode locks separate snapshots; neither source is visible until both submit." },
      { number: "04", title: "Build shared output", body: "AI drafts a shared story that preserves differences; both people review and confirm separately." },
      { number: "05", title: "Read and archive", body: "Read, respond, and reveal source drafts according to the agreed policy; resolve disputes before archive." },
    ],
    aiTitle: "AI role and privacy boundary",
    aiDescription: "AI assists expression; it is not a relationship judge. It can only organize user-confirmed material and cannot bypass publishing or access rules.",
    aiBoundaries: ["Never send or consent for users", "Never invent dialogue, motives, or reconciliation", "Keep generated passages traceable to sources", "Allow rejection, regeneration, and dispute flags"],
    mvpTitle: "MVP and current demo boundary",
    mvpNotice: "The current demo is a base-flow sample for one event, not evidence that the complete PRD is implemented. A formal MVP still needs server-side state, real identity and relationship spaces, dual snapshots, and Supabase RLS.",
    mvpItems: [
      { label: "Retain", detail: "Current event writing, organization, preview, and reading components." },
      { label: "Add", detail: "Life timeline, dual snapshots, shared generation, proofreading, and dual confirmation." },
      { label: "Refactor", detail: "Replace browser-state permissions with a server state machine and Supabase RLS." },
    ],
    metricsTitle: "Proposed validation metrics", metricsNotice: "These are proposed metrics, not claimed production results.",
    metrics: [
      { label: "Create", detail: "Rule setup and creation completion" }, { label: "Express", detail: "First valid content and AI candidate adoption" },
      { label: "Collaborate", detail: "Invitation acceptance, dual submission, and effective days" }, { label: "Read", detail: "Open, completion, and lightweight response" },
      { label: "Confirm", detail: "Dispute flags, regeneration, and dual confirmation" },
    ],
  },
  demo: {
    eyebrow: "Current prototype", title: "Experience the current one-event foundation",
    description: "The demo opens in a new tab. It demonstrates the current product direction without presenting the planned dual state machine, life timeline, or full permission model as finished features.",
    open: "Open the Life Exchange demo", externalNotice: "External site · exchange-life.786383431.workers.dev",
    currentLabel: "Current boundary", currentBody: "This demo is a foundation sample for the formal plan. Device requirements, login conditions, and the complete recommended path are still pending confirmation.",
    focusTitle: "Product questions worth observing",
    focus: [
      { number: "01", title: "How expression starts", body: "Notice how the product lowers the pressure of beginning one story." },
      { number: "02", title: "How AI participates", body: "Check whether AI offers structure without taking over user decisions." },
      { number: "03", title: "How output is read", body: "Observe the transition from private expression to a readable story." },
    ],
    backProjects: "Back to homepage projects",
  },
};

export function getLifeExchangeContent(locale: Locale) {
  return locale === "en" ? en : zh;
}
