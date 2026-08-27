# 贺丹 AI Product Manager 作品集｜素材清单

> 状态：首页正式 Hero V1 已接入独立视觉图层；人物母版、首页参考图和四张项目封面已确认，其他真实项目证据仍待准备。  
> 禁止用空白文件、伪图片或生成图替代真实项目证据。  
> `可生成`仅表示可在后续经确认后制作，不代表本阶段生成。

## 1. 已有素材

| 素材 | 当前文件 | 用途 | 当前状态 |
|---|---|---|---|
| 首页视觉规范 | `docs/design.md` | 整站视觉、页面结构、动效与素材规范 | 已有 |
| 信息架构原型 | `prototypes/portfolio-prototype.html` | 内容顺序、能力/方法交互和项目证据结构参考 | 已有；不是正式视觉稿 |
| 首页最终参考图 | `docs/references/homepage-reference-final.png` | 首页构图、色彩和分层参考 | 已确认；1672x941；不直接上线 |
| 首页分层组合参考图 | `docs/references/home-visual-layers-preview-v2-1440x900.png` | 正式 Hero 图层定位和 1440x900 构图对照 | 已确认；1440x900；不直接上线 |
| 透明人物母版 | `public/portfolio/avatar/avatar-master.png` | 首页身份识别 | 已确认；1024x1536；32bpp RGBA，背景真实透明，不含不透明棋盘格；不得重生成 |
| 首页静态环境总图层 V2 | `public/portfolio/environment/home/hero-layers/home-environment-layer-v2.png` | 正式首页 Hero 底部环境 | 已接入；2048x682；PNG 原文件；保持静态 |
| 首页远景云层 V1 | `public/portfolio/environment/home/hero-layers/cloud-layer-far-v1.png` | 正式首页 Hero 远景漂移 | 已接入；2048x768；透明 PNG 原文件 |
| 首页近景云层 V2 | `public/portfolio/environment/home/hero-layers/cloud-layer-near-v2.png` | 正式首页 Hero 近景漂移 | 已接入；1672x941；透明 PNG 原文件；手机隐藏 |
| 左侧悬浮盆栽 V1 | `public/portfolio/environment/home/hero-layers/floating-planter-left-v1.png` | 正式首页 Hero 左侧小幅漂移 | 已接入；130x140；透明 PNG 原文件；手机隐藏 |
| 右上悬浮嫩芽 V1 | `public/portfolio/environment/home/hero-layers/floating-planter-sprout-v1.png` | 正式首页 Hero 右上小幅漂移 | 已接入；76x99；透明 PNG 原文件 |
| 中央人物浮岛 | `public/portfolio/environment/home/hero-island-center.png` | 首页 Hero 中央人物平台 | 已生成并检查通过；1600x900；RGBA；真实透明背景；不含人物 |
| 左环境岛 | `public/portfolio/environment/home/hero-island-left.png` | 首页 Hero 左侧环境层 | 已生成并检查通过；720x560；RGBA；真实透明背景；不含建筑 |
| 右环境岛 | `public/portfolio/environment/home/hero-island-right.png` | 首页 Hero 右侧环境层 | 已生成并检查通过；800x608；RGBA；真实透明背景；不含建筑和水流 |
| DesignSpark 无文字封面 | `public/portfolio/projects/designspark/cover.png` | 项目封面 | 已确认；1619x972；本阶段不接入 |
| 交换人生无文字封面 | `public/portfolio/projects/life-exchange/cover.png` | 项目封面 | 已确认；1619x971；本阶段不接入 |
| AI 销售 Agent 无文字封面 | `public/portfolio/projects/ai-sales-agent/cover.png` | 项目封面 | 已确认；1496x1051；本阶段不接入 |
| Vibe Coding 无文字封面 | `public/portfolio/projects/vibe-coding/cover.png` | AI Coding 课程实践封面 | 已确认；1619x971；最终归属为 AI Coding 课程实践；本阶段不接入 |
| 默认框架图标 | `public/file.svg`、`globe.svg`、`next.svg`、`vercel.svg`、`window.svg` | Create Next App 初始页 | 已有；不作为作品集正式素材 |

首页参考图、透明人物母版和四张无文字封面均已使用单一 `.png` 扩展名，最终路径已确认。

## 2. 缺失素材总表

| 优先级 | 素材 | 建议路径 | 用途 | 建议尺寸 | 格式 | 透明背景 | 使用页面 | 来源边界 |
|---|---|---|---|---|---|---|---|---|
| 已有 | 中文简历 | `public/resume/HeDan_AI_Product_Manager_Resume_CN.pdf.pdf` | 下载简历 | 原始 PDF | PDF | 不适用 | 首页 | 真实文件已确认可读取；保留当前文件名 |
| P0 | 三个项目基础文案与元信息 | 不作为图片保存 | 支撑项目卡和详情页 | 不适用 | 文本 | 不适用 | 项目列表与详情 | 必须由本人确认 |
| P0 | DesignSpark 真实界面截图 | `public/portfolio/projects/designspark/` | 证明真实产品体验和实现 | 原图；展示版建议 1600—2400px 宽 | PNG/WebP | 否 | 首页项目卡、列表、详情 | 必须使用真实项目文件 |
| P0 | 交换人生真实界面截图 | `public/portfolio/projects/life-exchange/` | 证明 MVP 核心流程与状态 | 原图；展示版建议 1600—2400px 宽 | PNG/WebP | 否 | 首页项目卡、列表、详情 | 必须使用真实项目文件 |
| P0 | AI 销售 Agent 脱敏证据 | `public/portfolio/projects/ai-sales-agent/` | 证明业务流程、本人职责、PRD/验收思路 | 流程图宽 1600—2400px；文档图按可读性输出 | SVG/PNG/WebP | 视素材 | 项目列表、详情 | 必须由本人/公司授权；不可直接上传内部原件 |
| P1 | DesignSpark Agent 工作流 | `public/portfolio/projects/designspark/` | 解释任务编排、RAG、状态和人工干预 | SVG viewBox；导出图建议 >= 1800px 宽 | SVG 优先 | 是或无背景 | DesignSpark 详情 | 基于真实架构重新整理，不可凭空生成 |
| P1 | DesignSpark 测试与结果证据 | 同上 | 证明测试、日志、回归或用户任务结果 | 按原始证据；展示宽 1200—2000px | PNG/WebP/SVG | 视素材 | DesignSpark 详情 | 必须使用真实数据或明确标记待验证 |
| P1 | 交换人生核心流程图 | `public/portfolio/projects/life-exchange/` | 解释邀请、表达、交换、对照和记忆流程 | SVG viewBox；展示宽 >= 1600px | SVG 优先 | 是或无背景 | 交换人生详情 | 基于真实产品流程绘制 |
| P1 | 交换人生测试/迭代记录 | 同上 | 证明已实现、进行中和待验证内容 | 按原始证据 | PNG/WebP/文本 | 否 | 交换人生详情 | 必须使用真实记录 |
| P1 | AI 销售 Agent 匿名业务流程 | `public/portfolio/projects/ai-sales-agent/` | 展示咨询、需求、推荐、预约、订单链路 | SVG viewBox；展示宽 >= 1800px | SVG 优先 | 是或无背景 | AI 销售 Agent 详情 | 真实流程脱敏重绘，发布前确认 |
| P1 | 脱敏 PRD 摘要图/结构 | 同上 | 展示需求、规则、异常和验收 | 适配正文宽度；文字保持真实 DOM 优先 | SVG/PNG/HTML | 视素材 | AI 销售 Agent 详情 | 必须重写脱敏，不上传原始 PRD |
| P1 | 联系方式资料 | 不作为图片保存 | 邮箱、GitHub、城市等真实链接 | 不适用 | 文本/URL | 不适用 | 联系、导航、页尾 | 必须由本人确认公开 |
| P2 | 首页远景云层 | `public/portfolio/environment/clouds/` | 首页远景和轻微移动 | 单层建议 1600—2560px 宽 | WebP | 是 | 首页、404 可复用 | 可以生成或由设计稿拆分 |
| P2 | 首页浮岛 | `public/portfolio/environment/islands/` | 主平台、中景项目区域 | 单体建议 800—1600px 宽 | WebP/PNG | 是 | 首页、项目列表、404 | 可以生成；需符合设计规范 |
| P2 | 植物与路牌 | `public/portfolio/environment/plants/` | 前景点缀与阅读引导 | 单体建议 128—512px | WebP/PNG | 是 | 多页面装饰 | 可以生成 |
| P2 | 建筑、电脑、瀑布 | `public/portfolio/environment/buildings/` | 项目世界隐喻和环境层 | 单体建议 256—1024px | WebP/PNG | 是 | 首页、项目页过渡 | 可以生成；不得承载正式文字 |
| P2 | 项目主题场景 | 各项目目录 | 区分三个核心项目的视觉区域 | 桌面建议 1600—2400px 宽；另备移动裁切 | WebP | 可选 | 项目卡、项目 Hero | 可以生成，但不能替代真实项目截图 |
| P2 | 页面过渡遮罩 | `public/portfolio/environment/transitions/` | 项目主题转场和章节过渡 | 视口比例；建议 >= 1920x1080 | WebP/PNG | 是 | 首页到项目、项目间 | 可以生成；非首版必需 |
| P2 | 功能图标 | `public/portfolio/icons/` | 下载、箭头、菜单、外链等 | 24x24 viewBox | SVG | 是 | 全站 | 可自行绘制或使用一致图标集；不生成位图文字 |
| P3 | 纹理 | `public/portfolio/textures/` | 极轻量纸张/像素质感 | 可平铺 256—1024px | WebP/PNG | 可选 | 局部背景 | 可以生成；无必要可不做 |
| P3 | 视觉档案作品 | 待确定，建议另建经确认目录 | 手绘、环境设计、视觉研究 | 原图优先；展示版长边 1600—2400px | JPG/WebP/PNG | 通常否 | 关于我 | 必须使用本人真实作品 |
| P3 | 个人照片或生活内容 | 待确定 | 关于我中的少量个人补充 | 原图；展示版长边 1600—2000px | JPG/WebP | 否 | 关于我 | 必须本人选择并确认公开 |
| P3 | 课程项目资料 | 待确认目录 | 经历页中的课程产品证据 | 课程地图 1600—2400px；作品按原图 | PDF/PNG/WebP/SVG | 视素材 | 经历、能力区 | 课程结构必须真实；学生作品需授权或匿名化 |

## 3. 可生成素材

后续在视觉方向和页面尺寸确认后，可以生成或制作：

- 云朵、浮岛、植物、路牌、建筑、瀑布等低饱和二维像素环境。
- 三个项目的主题场景插画，但不得替代真实产品界面和流程证据。
- 页面过渡遮罩和非必要纹理。
- 不含文字、Logo、客户信息和项目数据的装饰性像素物件。
- 基于已确认真实流程重新绘制的通用 SVG 流程图；绘制内容必须由真实资料驱动。

生成要求：拆分为可复用透明层，不生成覆盖整页的大底图；不使用蓝紫霓虹、玻璃拟态、写实 3D 或默认 AI 图标语言。

生成和编辑母版统一保存为真实透明 PNG。WebP/AVIF 仅允许在网站开发阶段由 PNG 母版派生用于性能优化，不得覆盖或删除 PNG 母版；当前 P0 不使用 WebP 作为正式文件。

## 4. 必须使用真实文件的素材

- `avatar-master.png` 人物母版及其等比缩放版本。
- 本人简历 PDF。
- DesignSpark 与交换人生的真实界面、Demo 截图和真实状态。
- 真实项目研究、测试、日志、反馈和结果数据。
- AI 销售 Agent 经授权的脱敏流程、本人职责、指标口径和 PRD 摘要。
- 教学课程结构、任务、评价记录和经授权/匿名化的学生成果。
- 本人的手绘、环境设计、视觉设计、照片和生活内容。
- 邮箱、GitHub、城市、求职状态等联系方式。

## 5. 素材验收规则

1. 每个真实项目素材注明项目、版本、时间、用途和是否可公开。
2. 所有结果数字注明统计范围、口径、个人贡献和授权状态。
3. 所有界面截图先清理账号、客户、订单、内部域名和其他敏感信息。
4. 学生作品必须取得授权或彻底匿名化。
5. 人物母版只允许透明背景处理、等比缩放和响应式输出，不改色、不重绘、不重生成。
6. 正式文字、项目名、数字、按钮和导航使用真实 DOM，不烘焙进生成图片。
7. 大图提交原始文件；前端衍生尺寸在实现阶段统一处理。

## 6. 新增视觉组件索引

完整尺寸、安全区、锚点、PC/手机用法、动效和生成提示词见 `docs/visual-assets-plan.md`。

| 编号 | 视觉组件 | 保存路径 | 批次 | 状态 |
|---|---|---|---|---|
| HOM-CLD-001 | 首页远景云层 | `public/portfolio/environment/home/hero-clouds-far.png` | P0 | 已生成；检查通过 |
| HOM-CLD-002 | 首页中景云层 | `public/portfolio/environment/home/hero-clouds-mid.png` | P0 | 已生成；检查通过 |
| HOM-ISL-001 | 中央人物浮岛 | `public/portfolio/environment/home/hero-island-center.png` | P0 | 已生成；检查通过 |
| HOM-ISL-002 | 左环境岛 | `public/portfolio/environment/home/hero-island-left.png` | P0 | 已生成；检查通过 |
| HOM-ISL-003 | 右环境岛 | `public/portfolio/environment/home/hero-island-right.png` | P0 | 已生成；检查通过 |
| HOM-BLD-001 | 左侧遗迹建筑 | `public/portfolio/environment/home/hero-architecture-left.png` | P0 | 已生成；检查通过 |
| HOM-BLD-002 | 右侧建筑与电脑台 | `public/portfolio/environment/home/hero-architecture-right.png` | P0 | 已生成；检查通过 |
| HOM-PTH-001 | 道路与台阶组 | `public/portfolio/environment/home/hero-paths-stairs.png` | P0 | 已生成；检查通过 |
| HOM-PLT-001 | 首页植物组 | `public/portfolio/environment/home/hero-plants.png` | P0 | 已生成；检查通过 |
| HOM-WTR-001 | 瀑布帧序列 | `public/portfolio/environment/home/hero-waterfall-sprite.png` | P0 | 已生成；四帧循环检查通过 |
| HOM-CLD-003 | 首页前景云层 | `public/portfolio/environment/home/hero-clouds-foreground.png` | P1 | 待生成 |
| HOM-DEC-001 | 浮空嫩芽盆栽 | `public/portfolio/environment/home/hero-floating-sprout.png` | P1 | 待生成 |
| HOM-DEC-002 | 电脑与路牌物件组 | `public/portfolio/environment/home/hero-tech-props.png` | P1 | 待生成 |
| HOM-LNK-001 | 首页项目区衔接云台 | `public/portfolio/environment/home/hero-project-bridge.png` | P1 | 待生成 |
| SHR-CLD-001 | 公共云朵素材包 | `public/portfolio/environment/shared/shared-cloud-pack.png` | P1 | 待生成 |
| SHR-ISL-001 | 公共小浮岛素材包 | `public/portfolio/environment/shared/shared-small-islands.png` | P1 | 待生成 |
| SHR-PLT-001 | 公共植物素材包 | `public/portfolio/environment/shared/shared-plant-pack.png` | P1 | 待生成 |
| TRN-001 | 暖白云阶通用转场 | `public/portfolio/environment/transitions/transition-neutral-cloud.png` | P1 | 待生成 |
| TRN-002 | DesignSpark 项目转场 | `public/portfolio/environment/transitions/transition-designspark.png` | P1 | 待生成 |
| TRN-003 | 交换人生项目转场 | `public/portfolio/environment/transitions/transition-life-exchange.png` | P1 | 待生成 |
| TRN-004 | AI 销售项目转场 | `public/portfolio/environment/transitions/transition-ai-sales.png` | P1 | 待生成 |
| EXP-SCN-001 | 经历路径浮岛 | `public/portfolio/environment/experience/experience-route-island.png` | P2 | 待生成 |
| EXP-DEC-001 | 经历里程碑路牌组 | `public/portfolio/environment/experience/experience-milestone-signs.png` | P2 | 待生成 |
| ABT-SCN-001 | 关于我像素工作室岛 | `public/portfolio/environment/about/about-studio-island.png` | P2 | 待生成 |
| ABT-DEC-001 | 设计物件组 | `public/portfolio/environment/about/about-design-objects.png` | P2 | 待生成 |
| CON-SCN-001 | 联系终端浮岛 | `public/portfolio/environment/contact/contact-terminal-island.png` | P2 | 待生成 |
| CON-DEC-001 | 邮箱与植物物件组 | `public/portfolio/environment/contact/contact-mail-props.png` | P2 | 待生成 |
| PRJ-DS-001 | DesignSpark 章节装饰 | `public/portfolio/projects/designspark/designspark-section-decoration.png` | P2 | 待生成 |
| PRJ-LE-001 | 交换人生章节装饰 | `public/portfolio/projects/life-exchange/life-exchange-section-decoration.png` | P2 | 待生成 |
| PRJ-SA-001 | AI 销售章节装饰 | `public/portfolio/projects/ai-sales-agent/ai-sales-section-decoration.png` | P2 | 待生成 |
| HOM-FX-001 | 首页像素光点 | `public/portfolio/environment/home/hero-pixel-sparkles.png` | P3 | 待生成 |
| NFD-SCN-001 | 404 迷路浮岛 | `public/portfolio/environment/not-found/not-found-lost-island.png` | P3 | 待生成 |
| NFD-DEC-001 | 404 断路路牌 | `public/portfolio/environment/not-found/not-found-broken-sign.png` | P3 | 待生成 |
| SHR-PLT-002 | 公共微型植物组 | `public/portfolio/environment/shared/shared-micro-plants.png` | P3 | 待生成 |

## 7. 素材生成批次

| 批次 | 数量 | 范围 | 开始条件 |
|---|---:|---|---|
| P0 | 10 | 首页远/中景云、三座岛、左右建筑、道路台阶、植物和水流 | 无图 Hero 骨架与桌面/手机安全区确认 |
| P1 | 11 | 首页前景与项目衔接、公共环境、四组页面转场 | P0 分层合成验证通过 |
| P2 | 9 | 经历、关于、联系和三个项目详情装饰 | 相应页面内容和真实证据位置确认 |
| P3 | 4 | 首页光点、404 和微型植物 | 性能预算允许且确有视觉必要 |

总计计划生成 **34 张透明背景位图**。透明人物母版和四张项目封面均已确认，不计入生成数量。

## 8. P0 Hero 尺寸确认

详细视口坐标、可视范围和裁切规则见 `docs/hero-layout-spec.md`；尺寸测量原型见 `prototypes/hero-asset-layout.html`。

| 编号 | PC 显示 | 手机显示 | 实际生成尺寸 / 比例 | 透明边距与安全区 | 锚点 / z-index | 响应式 | 动效 / 最大位移 | 状态 |
|---|---:|---:|---|---|---|---|---|---|
| HOM-CLD-001 | 1600x400 | 640x160 裁切 | 3200x800 / 4:1 | X10%、Y12%；中央稀疏 | top center / 1 | 共用 | 向右 / 20px | 已生成；RGBA/Alpha 检查通过 |
| HOM-CLD-002 | 1440x320 | 540x120 裁切 | 2880x640 / 4.5:1 | 四周 8%；标题人物缺口 | center / 2 | 共用 | 向左及 Y 视差 / 16px、8px | 已生成；RGBA/Alpha 检查通过 |
| HOM-ISL-001 | 640x360 | 340x191 或 327x184 | 1600x900 / 16:9 | X8%、上10%、下6%；中央站立平台 | bottom center / 5 | 共用重排 | 上下 / 6px | 已生成；RGBA/Alpha 检查通过 |
| HOM-ISL-002 | 360x280 | 隐藏 | 720x560 / 9:7 | 四周 10%；左岛建筑区 | bottom left / 4 | 手机隐藏 | 视差 / 12px | 已生成；RGBA/Alpha 检查通过 |
| HOM-ISL-003 | 400x304 | 隐藏 | 800x608 / 25:19 | 四周 8%；右岛建筑和水流接口 | bottom right / 4 | 768 竖屏和手机隐藏 | 视差 / 12px | 已生成；RGBA/Alpha 检查通过 |
| HOM-BLD-001 | 240x240 | 隐藏 | 480x480 / 1:1 | 四周 10%；底面锚区 | bottom center / 6 | 768 竖屏和手机隐藏 | 随左岛进入 / 12px | 已生成；RGBA/Alpha 检查通过 |
| HOM-BLD-002 | 320x270 | 隐藏 | 640x540 / 32:27 | 四周 8%；底面和屏幕安全区 | bottom center / 6 | 768 竖屏和手机隐藏 | 随右岛进入 / 12px | 已生成；RGBA/Alpha 检查通过 |
| HOM-PTH-001 | 1200x540 | 340x153 或 327x147 | 2400x1080 / 20:9 | 四周 6%；中央短台阶可裁切 | bottom center / 7 | 共用裁切 | 进入向上 / 16px | 已生成；RGBA/Alpha 检查通过 |
| HOM-PLT-001 | 1200x390 | 340x111 或 327x106 | 2400x780 / 40:13 | 四周 8%；植物簇可分切 | bottom center / 9 | 共用裁切 | 轻摆 / 4px 或 2deg | 已生成；RGBA/Alpha 检查通过 |
| HOM-WTR-001 | 单帧 90x180 | 隐藏 | 1024x512；每帧 256x512 / 单帧 1:2 | 每帧四周 12%；帧间对齐 | top center / 8 | 768 竖屏和手机隐藏 | 帧切换 / 2px | 已生成；共同 Alpha 轮廓检查通过 |

- 全部 P0 使用透明高密度母版，约为最大显示尺寸的 2 倍。
- 手机优先复用、重排或裁切桌面素材，不规划独立手机图片。
- P0 生成前置的 Hero 容器和安全区已经通过尺寸原型定义；完成六视口浏览器验证后即可进入逐张生成。

## 9. P0-A 三座浮岛实际检查

| 编号 | 实际文件 | 实际尺寸 | Alpha | 主体边界 / 透明边距（左/上/右/下） | 内容边界 | 检查结果 |
|---|---|---:|---|---|---|---|
| HOM-ISL-001 | `public/portfolio/environment/home/hero-island-center.png` | 1600x900 | 32bpp RGBA；四角 Alpha 0 | 159,192—1426,763 / 159、192、173、136px | 仅岛体、平台与必要地形；无人物和其他图层 | 通过 |
| HOM-ISL-002 | `public/portfolio/environment/home/hero-island-left.png` | 720x560 | 32bpp RGBA；四角 Alpha 0 | 98,176—617,488 / 98、176、102、71px | 仅岛体与必要地形；无建筑和其他图层 | 通过 |
| HOM-ISL-003 | `public/portfolio/environment/home/hero-island-right.png` | 800x608 | 32bpp RGBA；四角 Alpha 0 | 83,152—716,478 / 83、152、83、129px | 仅岛体、建筑预留面和水流接口石台；无建筑、水流和其他图层 | 通过 |

- 三张图片均无烘焙棋盘格、文字、Logo 或水印，主体边缘未被裁切。
- 纯品红抠图背景已移除，正式 PNG 中未检测到品红键色残留。
- 三张岛共享同一低饱和鼠尾草绿、暖象牙石材、薄泥土层、像素颗粒、观察角度与左上柔光。
- 检查页：`prototypes/p0-islands-preview.html`。

## 10. P0-B 场景组件实际检查

| 编号 | 实际文件 | 实际尺寸 | Alpha | 主体边界 / 透明边距（左/上/右/下） | 内容边界 | 检查结果 |
|---|---|---:|---|---|---|---|
| HOM-BLD-001 | `public/portfolio/environment/home/hero-architecture-left.png` | 480x480 | 32bpp RGBA；四角 Alpha 0 | 24,142–455,431 / 24、142、24、48px | 仅低矮残缺遗迹；无岛体、植物和标识 | 通过 |
| HOM-BLD-002 | `public/portfolio/environment/home/hero-architecture-right.png` | 640x540 | 32bpp RGBA；四角 Alpha 0 | 59,43–580,496 / 59、43、59、43px | 仅建筑、电脑台和空白屏幕；无岛体、文字和标识 | 通过 |
| HOM-PTH-001 | `public/portfolio/environment/home/hero-paths-stairs.png` | 2400x1080 | 32bpp RGBA；四角 Alpha 0 | 360,520–2159,788 / 360、520、240、291px | 仅左右连接道路和中央下行台阶；无无目标石板、无草地底板 | 重新组合；1440x900 检查通过 |
| HOM-PLT-001 | `public/portfolio/environment/home/hero-plants.png` | 2400x780 | 32bpp RGBA；四角 Alpha 0 | 193,209–2207,330 / 193、209、192、449px | 八组分离的低矮植物；全部映射至三座岛草地表面 | 重新组合；1440x900 检查通过 |

- 四张正式文件均未检测到烘焙棋盘格、纯色背景、色键残留、文字、Logo 或水印。
- 两座建筑、道路和植物均可独立定位，未合并岛体、人物、云层、瀑布或光点。
- 三座已验收浮岛未被覆盖，SHA-256 与 P0-A 验收记录一致。
- 检查页：`prototypes/p0-scene-components-preview.html`。
- 组合定位复核后，道路与植物只重新排列既有像素簇，没有重新生成、复制、拉伸或改变像素比例；预览人物只通过 CSS 缩小和下移。

## 11. P0-C 云层与瀑布实际检查

| 编号 | 实际文件 | 实际尺寸 | Alpha | 主体边界 / 透明边距（左/上/右/下） | 内容边界 | 检查结果 |
|---|---|---:|---|---|---|---|
| HOM-CLD-001 | `public/portfolio/environment/home/hero-clouds-far.png` | 3200x800 | 32bpp RGBA；四角 Alpha 0 | 378,96–2821,703 / 378、96、378、96px | 七组低对比远景云；中央区域保持稀疏 | 通过 |
| HOM-CLD-002 | `public/portfolio/environment/home/hero-clouds-mid.png` | 2880x640 | 32bpp RGBA；四角 Alpha 0 | 240,70–2641,573 / 240、70、238、66px | 四组中景云；左侧标题区和人物区保留缺口 | 通过 |
| HOM-WTR-001 | `public/portfolio/environment/home/hero-waterfall-sprite.png` | 1024x512；4x 256x512 | 32bpp RGBA；四角 Alpha 0 | 每帧 43,61–213,448；四帧完全一致 | 仅瀑布与底部水雾；内部水纹分四相位变化 | 通过 |

- 三张正式文件均未检测到烘焙棋盘格、纯色背景、色键残留、文字、Logo 或水印。
- 云层双副本接缝、瀑布四帧静态和 `800ms` 循环、完整 1440x900 P0 合成均记录在 `prototypes/p0-environment-preview.html`。
- 人物、P0-A、P0-B 和组合坐标继续冻结，文件哈希与本阶段开始时一致。

## 12. 正式首页 Hero V1 图层包

- 来源压缩包：`materials/homepage-visual-layers-v1.zip`。
- 正式图层目录：`public/portfolio/environment/home/hero-layers/`。
- 压缩包内容按原始字节解压，未重新生成、编辑、压缩或转码。
- 当前正式 Hero 使用静态环境总图层、两层云、两枚盆栽和既有人物母版；标题、导航、气泡、按钮及下滑提示均由真实 HTML 渲染。
- `hero-master-desktop.png`、`hero-terrain-main.png`、旧三座浮岛及旧 P0-A/P0-B 组合素材继续保留，但不作为正式首页 Hero 主体。
- 首页瀑布暂用环境总图层中的静态画面，局部水流动画留待后续单独叠加。

| 正式文件 | 实际尺寸 | 页面用法 | 动效 | 状态 |
|---|---:|---|---|---|
| `hero-layers/cloud-layer-far-v1.png` | 2048x768 | 远景云层 | 80s 水平漂移，最大位移 3% | 已接入并通过四视口检查 |
| `hero-layers/cloud-layer-near-v2.png` | 1672x941 | 近景云层 | 52s 水平漂移，最大位移 5%；手机隐藏 | 已接入并通过四视口检查 |
| `hero-layers/home-environment-layer-v2.png` | 2048x682 | 底部静态环境 | 无 | 已接入并通过四视口检查 |
| `hero-layers/floating-planter-left-v1.png` | 130x140 | 左侧悬浮花草 | 8s 小幅漂移；手机隐藏 | 已接入并通过四视口检查 |
| `hero-layers/floating-planter-sprout-v1.png` | 76x99 | 右上悬浮嫩芽 | 11s 小幅漂移 | 已接入并通过四视口检查 |
| `public/portfolio/avatar/avatar-master.png` | 1024x1536 | 静态人物 | 无 | 复用既有母版；鞋底落点通过检查 |

`prefers-reduced-motion: reduce` 下关闭云层与盆栽持续动画。正式页面不使用整图底图或透明点击热区。
