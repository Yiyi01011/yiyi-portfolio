# 贺丹 AI Product Manager 作品集｜实现规划

> 状态：规划阶段。本文不代表页面已经实现。  
> 主要依据：`docs/design.md`。信息结构参考：`prototypes/portfolio-prototype.html`。  
> 原则：内容证据优先，PC Web 优先，兼顾平板和手机；第一阶段不引入 Three.js、Canvas、数据库、登录、后台或 API。

## 1. 当前技术栈

| 类别 | 当前状态 | 规划说明 |
|---|---|---|
| 框架 | Next.js `16.3.1`，App Router | 正式页面使用 `app` 路由；实现前按 `AGENTS.md` 阅读本地 Next.js 16 文档 |
| UI | React `19.2.8`、React DOM `19.2.8` | 优先使用 Server Components；仅交互组件使用 Client Components |
| 语言 | TypeScript `^5` | 页面数据与公共组件定义明确类型 |
| 样式 | Tailwind CSS `^4`、`@tailwindcss/postcss` | 先建立设计 Token，再组合页面；避免散落的任意色值和尺寸 |
| 字体 | 当前使用 `next/font` 的 Geist / Geist Mono | 中文字体方案待实现阶段确认；不在规划阶段新增字体依赖 |
| 图片 | Next.js `Image` | 位图声明尺寸与响应式 `sizes`；SVG 用于功能图标和流程图 |
| 动效 | 当前无正式动效依赖 | 第一版以 CSS、Web Animations API 和 Intersection Observer 为主；如确有必要，再单独评估现有依赖范围外的方案 |
| 工具 | ESLint 9、eslint-config-next `16.3.1` | 后续每阶段执行 lint、build 和浏览器验证 |

当前 `app/page.tsx`、`app/layout.tsx` 和 `app/globals.css` 仍为 Create Next App 初始内容。`public` 仅包含默认 SVG；正式作品集素材尚未接入。

## 2. 整站路由

| 路由 | 页面 | 核心目标 |
|---|---|---|
| `/` | 首页 | 5 秒内建立姓名、岗位、价值主张、项目入口和简历入口 |
| `/projects` | 项目列表 | 对比三个核心项目的类型、角色、状态和证据 |
| `/projects/designspark` | DesignSpark | 证明垂直 Agent、RAG、工作流、Web 集成和验证能力 |
| `/projects/life-exchange` | 交换人生 | 证明视角转换机制、情感产品判断和 MVP 能力 |
| `/projects/ai-sales-agent` | AI 销售 Agent | 以脱敏方式证明真实业务、PRD、协作、验收和商业结果 |
| `/experience` | 经历 | 串联教育、实习、教学、Vibe Coding 与个人产品实践 |
| `/about` | 关于我 | 说明从环境设计到 AI 产品的转型逻辑与工作方式 |
| `/contact` | 联系 | 提供经确认的邮箱、GitHub、简历和沟通邀请 |
| `not-found` | 404 | 提供返回首页和项目列表的明确路径 |

语言方案在正式实现前确定 URL 策略。默认建议首版以中文为主、英文内容独立维护；是否采用 `/en/...` 路由或页面内语言切换，需在内容齐备后确认。

## 3. 页面结构

### 3.1 首页

1. 全局导航：品牌、关于我、项目、经历、联系、简历入口、语言入口。
2. Hero：`贺 丹`、`AI Product Manager`、核心价值主张、查看项目、下载简历、人物母版与轻量环境层。
3. 三个核心项目预览：项目问题、本人角色、状态、关键结果和详情入口。
4. 产品能力与方法：4—6 个能力模块，每项绑定真实项目证据。
5. 关键经历：时间、角色、场景、职责、结果和经历页入口。
6. 关于我摘要：转型逻辑和 About 入口。
7. 联系与简历：统一站尾转化区。

### 3.2 项目列表

1. 页面标题与项目选择说明。
2. 三个核心项目的可比较信息。
3. 每个项目展示名称、问题、角色、状态、结果、视觉或界面证据。
4. 页尾联系、简历和继续浏览入口。

课程实践不作为第四个核心项目与三张卡并列；它进入经历页和能力证据区，并可在内容充足时形成独立案例模块，但不新增正式路由，除非后续确认。

### 3.3 项目详情

统一叙事顺序：

1. 项目 Hero：名称、命题、时间、角色、团队、平台、状态。
2. Overview：背景、用户、问题、目标。
3. My Role：本人职责、协作对象、交付范围。
4. Challenge：核心挑战和限制。
5. Research / Evidence：调研、访谈、竞品或业务证据。
6. Key Insights：影响产品方向的发现。
7. Product Strategy：范围、优先级、关键决策。
8. Core Flow：用户流程、业务流程或 Agent 工作流。
9. Solution：关键页面、交互与功能。
10. Implementation：技术边界、协作和交付过程。
11. Validation：测试、评估和迭代。
12. Results：经确认的结果、数据和状态。
13. Reflection：不足、学习和下一步。
14. Next Project：上一个/下一个项目、项目列表和联系入口。

不同项目可删减没有证据的章节，但不能跳过“问题—判断—方案—结果”主线。

### 3.4 经历、关于我、联系和 404

- 经历：纵向时间轴与阶段章节，课程项目作为教学和学习产品证据接入。
- 关于我：转型逻辑、设计训练、教学经验、AI 产品实践、当前关注方向和经授权的视觉档案。
- 联系：简短邀请、经确认的联系方式、简历；不实现复杂表单。
- 404：轻量场景、简短说明、返回首页和查看项目按钮。

## 4. 公共组件

| 组件 | 职责 | 交互与可访问性 |
|---|---|---|
| `SiteHeader` | 品牌、主导航、简历/语言入口 | 当前页状态、移动菜单、键盘焦点 |
| `SiteFooter` | 联系邀请、邮箱、GitHub、简历、返回顶部 | 真实链接，不以图片承载文字 |
| `PageShell` | 最大宽度、页面边距与网格 | 统一桌面/平板/手机布局 |
| `SectionHeading` | 编号、标题、摘要 | 保持标题层级正确 |
| `ButtonLink` | 主按钮、次按钮、下载按钮 | 高度至少 44px；hover、active、focus 状态 |
| `ProjectCard` | 项目摘要与详情入口 | 整卡可点击，同时保留明确文字链接 |
| `ProjectMeta` | 角色、时间、团队、平台、状态 | 移动端两列或单列 |
| `CapabilityEvidence` | 能力和对应项目证据 | 无 JS 时内容仍可阅读 |
| `ExperienceTimeline` | 关键经历与关联项目 | DOM 顺序与视觉顺序一致 |
| `CaseSection` | 项目详情标准章节 | 支持标题、正文、媒体和图注 |
| `CaseNavigation` | 章节目录和阅读进度 | PC 轻量吸附；移动端折叠或省略 |
| `MediaFrame` | 截图、流程图、场景图与图注 | 固定宽高比、描述性 `alt`、避免布局跳动 |
| `ContactCTA` | 页内统一求职转化入口 | 联系方式需经本人确认后发布 |
| `LocaleSwitch` | 中文/英文入口 | 语言状态清晰；英文文案独立维护 |
| `ReducedMotionGuard` | 动效降级 | 尊重 `prefers-reduced-motion` |

组件命名是规划建议，正式实现时应按实际代码结构保持最少抽象。

## 5. 项目数据结构

项目内容建议先使用本地 TypeScript 数据，不引入数据库或 CMS：

```ts
type LocalizedText = {
  zh: string;
  en?: string;
};

type ProjectAsset = {
  id: string;
  kind: "hero" | "screenshot" | "flow" | "document" | "environment";
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
  width: number;
  height: number;
  priority?: boolean;
  isRealProjectEvidence: boolean;
};

type ProjectSection = {
  id: string;
  title: LocalizedText;
  summary?: LocalizedText;
  body: LocalizedText[];
  assets?: ProjectAsset[];
};

type PortfolioProject = {
  slug: "designspark" | "life-exchange" | "ai-sales-agent";
  name: LocalizedText;
  proposition: LocalizedText;
  problem: LocalizedText;
  role: LocalizedText;
  period: string;
  team?: LocalizedText;
  platform?: LocalizedText;
  status: LocalizedText;
  result?: LocalizedText;
  confidentiality?: LocalizedText;
  capabilities: string[];
  theme: "sage" | "peach" | "mist";
  sections: ProjectSection[];
};
```

规则：

- 数据字段缺失时保持空缺或标记“待补充”，不补写推测内容。
- 结果数字必须包含口径、时间范围和是否可公开。
- AI 销售 Agent 只存放脱敏后的公开内容，不把原始 PRD、客户数据、Prompt、合同或内部配置纳入仓库。
- 图片元数据声明真实尺寸、用途和是否为项目证据。
- 中英文内容分别维护，不依赖机器直译作为最终发布文案。

## 6. 响应式方案

| 范围 | 网格 | 页面策略 | 视觉策略 |
|---|---|---|---|
| `>= 1200px` | 12 列 | 完整 Hero、三列项目卡、详情章节导航 | 完整但克制的分层场景和轻微视差 |
| `768—1199px` | 8 列 | 项目两列或横向大卡，详情媒体单列 | 减少两侧环境，降低视差 |
| `< 768px` | 4 列 | 全部单列，移动菜单，详情目录折叠/省略 | 人物位于文案后，移除复杂装饰和持续视差 |

- 最大内容宽度 `1440px`；正文宽度 `680—780px`。
- 页面边距按 `docs/design.md` 的四档范围实现。
- 中文和英文分别检查换行；不通过缩小字号解决溢出。
- 按钮和交互目标至少 44px；页面不得出现横向双滚动或内容裁切。
- 装饰层可以隐藏，但核心内容、项目入口、简历和联系方式不能依赖装饰层存在。

## 7. 动效实现方案

### 第一阶段必须实现

- 页面主内容快速淡入和 12—24px 上移。
- 导航当前状态。
- 按钮的 hover、active、focus-visible。
- 项目卡和详情章节进入视口。
- 锚点跳转与返回位置合理恢复。
- `prefers-reduced-motion` 完整降级。

### 第二阶段按素材情况实现

- 云、浮岛、植物的低频 CSS 位移或基于滚动的轻微视差。
- 项目媒体遮罩和主题色过渡。
- 首页人物首次进入时不超过 4—6px 的上浮。
- 项目页尾到下一项目的短转场。

### 技术边界

- 优先 `transform` 和 `opacity`，避免持续改变滤镜、模糊和大阴影。
- Intersection Observer 控制一次性进入动画；页面卸载时清理监听。
- 首屏可读文字在 0.4 秒内出现，总进入时长控制在 1—1.3 秒。
- 不劫持滚轮，不使用全屏 Loading，不要求用户操作人物才能阅读。
- 同屏持续动画最多 2—3 组。
- 第一阶段不实现人物走路、复杂动作、Canvas、WebGL 或 Three.js。

## 8. 图片加载与性能方案

- 姓名、岗位、价值主张、按钮首先以真实 DOM 渲染，不等待图片。
- 人物母版使用真实透明 PNG；环境大图优先 WebP；功能图标和流程图优先 SVG。
- 所有图片声明 `width`、`height` 或稳定 `aspect-ratio`，避免 CLS。
- 首屏只对必要人物/关键场景使用 `priority`；其余图片默认延迟加载。
- `sizes` 与三档布局一致，避免手机加载桌面尺寸图片。
- 为大素材准备合理的响应式输出，不直接加载超大母版。
- 项目截图保留可读分辨率，可提供点击查看大图，但列表页使用较小衍生图。
- 装饰图 `alt=""`；真实界面和流程证据使用描述性 `alt` 与图注。
- 不使用整页视觉稿作为底图，不使用大体积 GIF，不在同页运行多个 Canvas。
- 每阶段检查 LCP、CLS、资源体积、控制台错误和滚动流畅度。

## 9. 实现阶段

1. **文档与内容确认**：完成规划、素材清单、内容模板和公开边界确认。
2. **无图页面骨架**：建立 Token、全局布局、导航、页尾和全部路由骨架。
3. **首页与项目系统**：完成真实 DOM、项目数据层、项目列表和详情模板。
4. **辅助页面**：完成经历、关于我、联系和 404。
5. **人物接入**：只接入确认后的 `avatar-master.png`，先验证尺寸与构图。
6. **项目内容接入**：接入经确认的文案、截图、流程图、PRD 摘要和指标。
7. **环境素材接入**：按远景、中景、主平台、前景和转场层逐步接入。
8. **一级动效**：先完成可访问的基础状态和章节进入。
9. **二级动效**：在性能允许时增加轻量场景运动和转场。
10. **响应式与可访问性**：桌面、平板、手机、键盘和减少动态模式逐页检查。
11. **性能与发布**：执行 lint/build、浏览器回归、资源审计和部署检查。

每阶段都必须保持无素材时可阅读、无动效时可操作、直接进入项目详情时路径完整。
