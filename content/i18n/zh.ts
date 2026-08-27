import type { Dictionary } from "./types";

const zh: Dictionary = {
  metadata: {
    title: "贺丹｜AI 产品经理作品集",
    description: "用设计理解用户，用 AI 构建可落地的产品。",
  },
  navigation: {
    portfolio: "个人作品集",
    about: "关于我",
    projects: "项目",
    experience: "经历",
    contact: "联系",
    ariaLabel: "首页导航",
    homeAriaLabel: "返回首页顶部",
  },
  hero: {
    name: "贺 丹",
    role: "AI Product Manager",
    tagline: "用设计理解用户，用 AI 构建可落地的产品",
    viewProjects: "认识一下我",
    downloadResume: "下载简历",
    greetingLineOne: "嗨，欢迎来到",
    greetingLineTwo: "我的个人空间",
    greetingAriaLabel: "嗨，欢迎来到我的个人空间",
    scrollAriaLabel: "向下滚动到项目区",
  },
  pages: {
    about: { title: "关于我", pending: "待补充" },
    projects: {
      title: "项目",
      pending: "待补充",
      showcaseTitle: "精选项目",
      readProjectLabel: "阅读项目",
    },
    experience: { title: "经历", pending: "待补充" },
    contact: { title: "联系", pending: "待补充" },
    projectDetail: { pending: "项目详情待补充" },
  },
  projects: {
    designspark: { name: "DesignSpark", title: "设计教育 Agent 0-1 搭建", tags: ["用户调研", "Agent 编排", "知识库设计", "0-1 产品搭建"] },
    "life-exchange": { name: "交换人生", title: "AI 情感叙事产品设计", tags: ["双视角叙事", "情绪体验设计", "隐私机制", "交互原型"] },
    "ai-sales-agent": { name: "AI 销售 Agent", title: "电商智能客服 Agent 0-1 搭建", tags: ["业务流程梳理", "PRD", "Agent 架构", "测试验收"] },
    "vibe-coding": { name: "AI Coding 课程实践", title: "AI 原生交互产品设计与 Vibe Coding 实践", tags: ["课程设计", "Vibe Coding", "教学实践", "成果迭代"] },
    "other-works": { name: "其他作品", title: "手绘与设计作品合集", tags: ["手绘表达", "视觉设计", "审美判断"] },
  },
  footer: { copyright: "贺丹个人作品集" },
  notFound: {
    title: "页面未找到",
    description: "你访问的页面尚不存在。",
    backHome: "返回首页",
  },
};

export default zh;
