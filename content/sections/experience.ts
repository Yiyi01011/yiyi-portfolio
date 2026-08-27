import type { Locale } from "@/content/i18n";

export type ExperienceContent = {
  workTitle: string;
  educationTitle: string;
  work: readonly {
    date: string;
    company: string;
    role: string;
    bullets: readonly string[];
    outcomeLabel: string;
    outcome?: string;
    tags?: readonly string[];
  }[];
  education: readonly {
    school: string;
    program: string;
    date: string;
  }[];
};

const zh: ExperienceContent = {
  workTitle: "工作经历",
  educationTitle: "教育背景",
  work: [
    {
      date: "2025.02 — 至今",
      company: "广州美术学院城市学院",
      role: "AI 产品设计专任教师",
      bullets: [
        "负责视觉传达与产品设计专业课程的开发及教学。",
        "将 AIGC、AI 产品设计与 Vibe Coding 融入项目实践，培养学生视觉表达、产品思维与 AI Coding 能力。",
        "引导学生完成创意构思与视觉方案表达，逐步构建并落地 AI 产品原型。",
      ],
      outcomeLabel: "核心产出：",
      tags: ["AI 编程", "Vibe Coding", "Coze 智能体", "DesignSpark"],
    },
    {
      date: "2024.02 — 2024.09",
      company: "广州盛竹贸易有限公司",
      role: "AI 产品经理实习生",
      bullets: [
        "参与 AI 电商产品需求梳理与功能设计，负责 PRD 撰写与产品架构梳理。",
        "参与销售策略与订单相关流程设计，支持关键业务链路设计与迭代。",
        "协同研发团队推进需求评审、开发与功能验收。",
      ],
      outcomeLabel: "核心成果：",
      outcome: "核心功能 PRD、产品原型、RAG 检索、Coze Workflow/Prompt、用户画像及测试验收方案",
    },
  ],
  education: [
    { school: "广州美术学院", program: "艺术设计（全日制专硕）", date: "2021.09 — 2024.06" },
    { school: "湖南师范大学（211，双一流）", program: "环境设计（全日制本科）", date: "2017.09 — 2021.06" },
  ],
};

const en: ExperienceContent = {
  workTitle: "Experience",
  educationTitle: "Education",
  work: [
    {
      date: "2025.02 — Present",
      company: "City College, Guangzhou Academy of Fine Arts",
      role: "Lecturer, AI Product Design",
      bullets: [
        "Develop and teach courses in visual communication and product design.",
        "Integrate AIGC, AI product design, and Vibe Coding into project-based learning to build students' visual, product-thinking, and AI Coding skills.",
        "Guide students from creative concepts and visual proposals to functional AI product prototypes.",
      ],
      outcomeLabel: "Core outputs:",
      tags: ["AI Coding", "Vibe Coding", "Coze Agents", "DesignSpark"],
    },
    {
      date: "2024.02 — 2024.09",
      company: "Guangzhou Shengzhu Trading Co., Ltd.",
      role: "AI Product Manager Intern",
      bullets: [
        "Mapped requirements and designed features for an AI e-commerce product, including PRDs and product architecture.",
        "Designed sales-strategy and order-related flows and supported iteration of critical business journeys.",
        "Partnered with engineering on requirement reviews, development, and acceptance testing.",
      ],
      outcomeLabel: "Deliverables:",
      outcome: "PRDs, prototypes, RAG retrieval, Coze workflows/prompts, personas, and acceptance plans",
    },
  ],
  education: [
    { school: "Guangzhou Academy of Fine Arts", program: "MFA in Art and Design, full-time", date: "2021.09 — 2024.06" },
    { school: "Hunan Normal University", program: "BFA in Environmental Design, full-time", date: "2017.09 — 2021.06" },
  ],
};

export function getExperienceContent(locale: Locale): ExperienceContent {
  return locale === "zh" ? zh : en;
}
