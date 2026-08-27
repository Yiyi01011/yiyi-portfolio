# 贺丹 AI Product Manager 作品集｜整站视觉素材规划

> 状态：2026-08-16 起，首页底部环境改为“五组场景模块”；停止执行旧 P0-A/P0-B 零散拼接方案和单张大地形方案。  
> 唯一构图依据：`docs/references/homepage-reference-final.png`。尺寸定位依据：`prototypes/p0-five-scene-layout.html`。  
> 数量口径：原“34 张、P0 10 张”的口径已失效，待五组位置确认后统一重算。当前活动 P0 清单为 8 张图片资产：5 张待生成场景组、2 张已生成云层、1 张已生成瀑布 Sprite；人物母版不计入生成数量。旧 P0-A/P0-B 和被拒绝的 `hero-terrain-main.png` 仅保留文件，不计入活动清单。

## 1. 视觉方向与边界

- 首页唯一构图依据为 `docs/references/homepage-reference-final.png`：暖白底、低饱和马卡龙、二维像素颗粒、阶梯硬边、柔和光照、五组场景留白与底部轻雾过渡。
- 功能层使用真实 HTML/CSS：导航、标题、正文、按钮、标签、卡片、数字、链接、天空底色和可访问性状态。
- 首页世界层使用五张场景组透明 PNG；每组内部完整包含本组所需的石材、草坪、台阶、植物和静态物件。云层、人物与瀑布水流继续作为独立动态层。
- 功能图标和流程图优先 SVG；正式项目界面、研究、测试和结果必须使用真实文件，生成素材不能替代证据。
- 不生成整页合成大图，不把标题、按钮、项目名、数字、Logo 或水印烘焙进图片。
- 不改成人物公仔、写实 3D、黏土、高清通用游戏素材、蓝紫霓虹或重度玻璃拟态风格。

## 2. 文件格式规则

1. 所有生成和编辑母版统一保存为具有真实 Alpha 的透明 PNG。
2. 当前活动 P0 不使用 WebP 作为正式母版；历史三张浮岛文件继续以 `hero-island-center.png`、`hero-island-left.png`、`hero-island-right.png` 原名保留，但不再参与正式首页组合。
3. 网站开发阶段可以从 PNG 母版派生 WebP/AVIF 性能副本，但不得覆盖或删除 PNG 母版。
4. 母版不得包含棋盘格、伪透明底色、文字、水印或被画布裁断的主体。
5. 大尺寸母版只允许等比缩放、透明画布扩展和无损裁切，不允许非等比拉伸。

## 3. 素材分类

| 分类 | 内容 | 实现或来源 |
|---|---|---|
| 已有真实图片 | 首页参考图、透明人物母版、四张无文字项目封面 | 保留原文件，不重新生成 |
| 需要生成的位图 | 首页五组场景模块，以及 P1—P3 尚未取消的环境与装饰素材 | 独立透明 PNG 母版；总数待五组确认后重算 |
| 透明独立图层 | 首页五组场景、云层、人物、水流；内页环境、物件与转场 | 首页不再把建筑、道路、植物拆成零散拼接层 |
| HTML/CSS | 天空底色、排版、导航、按钮、项目卡、时间轴、联系信息 | 真实 DOM 和响应式 CSS |
| SVG | 功能图标、箭头、流程图、章节进度 | 代码或可编辑矢量文件 |
| 动效代码 | 视差、漂浮、进入、遮罩、sprite 播放、减少动态模式 | CSS/React 动效逻辑，不烘焙进静态图 |
| 后期确定 | 真实项目截图、课程证据、照片、手绘与新人物动作 | 内容、授权和页面尺寸确认后处理 |

## 4. 首页当前图层：五组场景与四个独立动态层

标题安全区域是 z-index 30 的静态 HTML 区域。天空底色由 CSS 实现。五组场景只允许整组定位或入场，不拆分内部建筑、道路、台阶和植物，也不设置内部持续漂浮。

| 顺序 | 图层 | 素材编号/来源 | 1440×900 目标范围 | z-index | 独立动态 | 状态 |
|---:|---|---|---|---:|---|---|
| 1 | 远景云层 | HOM-CLD-001 | `x=-80, y=18, 1600×400` | 1 | 水平慢移 | 已生成，继续使用 |
| 2 | 中景云层 | HOM-CLD-002 | `x=0, y=216, 1440×320` | 2 | 反向慢移、轻微 Y 视差 | 已生成，继续使用 |
| 3 | 左侧遗迹与草地组 | HOM-SCN-001 | `x=0, y=495, 330×285` | 4 | 无持续动态 | 待确认后生成 |
| 4 | 中央人物平台与草地组 | HOM-SCN-002 | `x=330, y=545, 660×265` | 5 | 无持续动态 | 待确认后生成 |
| 5 | 最右侧台阶建筑组 | HOM-SCN-004 | `x=1220, y=425, 220×350` | 5 | 无持续动态 | 待确认后生成 |
| 6 | 右侧电脑台、水池与瀑布出口组 | HOM-SCN-003 | `x=930, y=500, 290×290` | 6 | 无持续动态 | 待确认后生成 |
| 7 | 路牌小组 | HOM-SCN-005 | `x=1270, y=620, 130×150` | 7 | 无持续动态 | 待确认后生成 |
| 8 | 瀑布水流 Sprite | HOM-WTR-001 | `x=1135, y=600, 45×90` | 8 | 四帧循环 | 已生成，继续使用 |
| 9 | 人物 | `avatar-master.png` | `left=850, bottom=295, 200×300` | 10 | 首次进入与轻微待机 | 已验收并冻结 |

五组场景之间允许保留浅暖白背景留白，不要求物理连接，不使用悬空细桥。所有组底部在组内完成浅暖白雾化过渡。`prefers-reduced-motion` 下关闭云层视差、人物待机和瀑布帧切换。

## 5. P0：Hero 当前活动素材（8 张图片资产）

以下五组坐标以 `prototypes/p0-five-scene-layout.html` 的 1440×900 原型为当前定位依据；确认前不得调用 ImageGen。场景组的最终 PNG 母版尺寸、透明边距和手机策略在逐组生成前单独确认。

| 编号 | 素材与文件名 | PC 目标显示 | 手机目标显示 | PNG 母版 / 比例 | 透明边距与主体安全区 | 锚点 / z-index | 响应式 | 动效 / 最大位移 | 状态 |
|---|---|---:|---:|---|---|---|---|---|---|
| HOM-CLD-001 | 远景云层 `hero-clouds-far.png` | 1600x400 | 640x160 裁切 | 3200x800 / 4:1 | X10%、Y12%；中央保持稀疏 | top center / 1 | 共用裁切 | 向右 / 20px | 已生成；RGBA/Alpha 检查通过 |
| HOM-CLD-002 | 中景云层 `hero-clouds-mid.png` | 1440x320 | 540x120 裁切 | 2880x640 / 4.5:1 | 四周 8%；标题和人物处留缺口 | center / 2 | 共用裁切 | 向左及 Y 视差 / 16px、8px | 已生成；RGBA/Alpha 检查通过 |
| HOM-SCN-001 | 左侧遗迹与草地组 `hero-scene-left-ruins.png` | 330x285 | 待确认 | 待确认 | 组内包含遗迹、草地、台阶和植物；底部雾化 | bottom left / 4 | 待确认 | 整组入场，不持续漂浮 | 待确认后生成 |
| HOM-SCN-002 | 中央人物平台与草地组 `hero-scene-center-platform.png` | 660x265 | 待确认 | 待确认 | 组内包含完整站立平台、草地、石材、台阶和植物；鞋底锚线 y=598 | bottom center / 5 | 待确认 | 整组入场，不持续漂浮 | 待确认后生成 |
| HOM-SCN-003 | 右侧电脑台、水池与瀑布出口组 `hero-scene-right-workspace.png` | 290x290 | 待确认 | 待确认 | 组内包含电脑台、水池、出口、石材、台阶和植物；预留瀑布叠加槽 | bottom center / 6 | 待确认 | 整组入场，不持续漂浮 | 待确认后生成 |
| HOM-SCN-004 | 最右侧台阶建筑组 `hero-scene-far-right-stairs.png` | 220x350 | 待确认 | 待确认 | 组内包含建筑、宽台阶、草地和植物；底部雾化 | bottom right / 5 | 待确认 | 整组入场，不持续漂浮 | 待确认后生成 |
| HOM-SCN-005 | 路牌小组 `hero-scene-signpost.png` | 130x150 | 待确认 | 待确认 | 组内包含路牌基座、局部草地、石材和植物；不得生成文字 | bottom center / 7 | 待确认 | 整组入场或静态 | 待确认后生成 |
| HOM-WTR-001 | 瀑布四帧 Sprite `hero-waterfall-sprite.png` | 单帧 90x180 | 隐藏 | 1024x512；每帧 256x512 / 单帧 1:2 | 每帧四周 12%；四帧起点、落点和轮廓对齐 | top center / 8 | 768 竖屏和手机隐藏 | 帧切换 / 2px | 已生成；四帧共同 Alpha 轮廓检查通过 |

P0 保存目录：`public/portfolio/environment/home/`。手机端暂不规划第二套图片。

### 5.1 P0 生成边界

- 五组场景必须逐组生成，每次只生成一组；不得先生成整页大图再裁切。
- 每组内部完整包含本组所需的建筑或物件、石材、草坪、台阶和植物；后续禁止再次拆成零散图层互相拼接。
- 五组之间允许显示页面暖白底色，不需要物理连接，不生成悬空细桥。
- 每组底部在图片内部自然淡入浅暖白雾气；边缘完整并保留透明定位余量。
- 中央组不含人物；右侧电脑水景组不含瀑布水流；云层、人物和瀑布 Sprite 保持独立。
- 五组共享参考图的像素颗粒、柔和光照、米白石材、浅草绿色和观察角度。

### 5.2 P0-A 历史输出（首页组合策略已废弃）

以下文件继续保留，不删除、不覆盖，但不得再作为正式首页“三岛并列”主体。

| 编号 | 正式路径 | 实际尺寸 | Alpha 检查 | 透明边距（左/上/右/下） | 锚点 | 状态 |
|---|---|---:|---|---|---|---|
| HOM-ISL-001 | `public/portfolio/environment/home/hero-island-center.png` | 1600x900 | RGBA；四角 Alpha 0；无键色残留 | 159、192、173、136px | bottom center | 已生成并通过检查 |
| HOM-ISL-002 | `public/portfolio/environment/home/hero-island-left.png` | 720x560 | RGBA；四角 Alpha 0；无键色残留 | 98、176、102、71px | bottom left | 已生成并通过检查 |
| HOM-ISL-003 | `public/portfolio/environment/home/hero-island-right.png` | 800x608 | RGBA；四角 Alpha 0；无键色残留 | 83、152、83、129px | bottom right | 已生成并通过检查 |

三张图片均不含人物、建筑、云层、道路、台阶、植物组、瀑布、光点、文字或水印。中央岛保留站立平台；左右岛只保留后续独立建筑图层所需的平面，右岛另保留不含水流的石质接口。组合检查见 `prototypes/p0-islands-preview.html`。

### 5.3 P0-B 历史输出（首页零散拼接策略已废弃）

以下文件继续保留，不删除、不覆盖，但不得再将建筑、道路和植物作为正式首页的独立拼接层。

| 编号 | 正式路径 | 实际尺寸 | Alpha 检查 | 主体边界 / 透明边距（左/上/右/下） | 锚点 | 状态 |
|---|---|---:|---|---|---|---|
| HOM-BLD-001 | `public/portfolio/environment/home/hero-architecture-left.png` | 480x480 | 32bpp RGBA；四角 Alpha 0；无色键残留 | 24,142–455,431 / 24、142、24、48px | bottom center | 已生成并通过检查 |
| HOM-BLD-002 | `public/portfolio/environment/home/hero-architecture-right.png` | 640x540 | 32bpp RGBA；四角 Alpha 0；无色键残留 | 59,43–580,496 / 59、43、59、43px | bottom center | 已生成并通过检查 |
| HOM-PTH-001 | `public/portfolio/environment/home/hero-paths-stairs.png` | 2400x1080 | 32bpp RGBA；四角 Alpha 0；无色键残留 | 360,520–2159,788 / 360、520、240、291px | bottom center | 已重新组合并通过 1440x900 检查 |
| HOM-PLT-001 | `public/portfolio/environment/home/hero-plants.png` | 2400x780 | 32bpp RGBA；四角 Alpha 0；无色键残留 | 193,209–2207,330 / 193、209、192、449px | bottom center | 已重新组合并通过 1440x900 检查 |

四项素材均为独立透明图层：建筑不含岛体，路径不含草地底板，植物簇之间保留透明间隔；全部不含人物、云层、瀑布、光点、文字、Logo 或水印。检查页见 `prototypes/p0-scene-components-preview.html`。

组合复核时移除了道路层中的无目标悬浮石板、未接触岛面的短台阶和无目标长桥，保留并重新定位现有左右连接道路及中央下行台阶；植物层移除了会映射到岛体下方的下排六组，保留八组现有植物并调整一组横向位置。两张母版均未重新生成、未拉伸，保留像素比例不变。

### 5.4 P0-C 实际输出

| 编号 | 正式路径 | 实际尺寸 | Alpha 检查 | 主体边界 / 透明边距（左/上/右/下） | 锚点 | 状态 |
|---|---|---:|---|---|---|---|
| HOM-CLD-001 | `public/portfolio/environment/home/hero-clouds-far.png` | 3200x800 | 32bpp RGBA；四角 Alpha 0；无色键残留 | 378,96–2821,703 / 378、96、378、96px | top center | 已生成并通过检查 |
| HOM-CLD-002 | `public/portfolio/environment/home/hero-clouds-mid.png` | 2880x640 | 32bpp RGBA；四角 Alpha 0；无色键残留 | 240,70–2641,573 / 240、70、238、66px | center | 已生成并通过检查 |
| HOM-WTR-001 | `public/portfolio/environment/home/hero-waterfall-sprite.png` | 1024x512 | 32bpp RGBA；四角 Alpha 0；无色键残留 | 每帧 43,61–213,448 / 共同 Alpha 轮廓 | top center | 已生成并通过四帧循环检查 |

远景云和中景云均保留横向视差安全空间，中央人物区与左侧标题区保持稀疏；瀑布四帧使用完全一致的起点、落点和 Alpha 外轮廓，只改变内部水纹颜色相位。检查页见 `prototypes/p0-environment-preview.html`。

### 5.5 已拒绝但保留的单张大地形

| 文件 | 实际尺寸 | 文件处理 | 首页使用状态 |
|---|---:|---|---|
| `public/portfolio/environment/home/hero-terrain-main.png` | 2400x1080 | 保留原文件，不删除、不覆盖 | 视觉方案已拒绝；不得作为正式首页 Hero 场景 |

旧 P0-A/P0-B 的“三座独立浮岛 + 细桥 + 建筑/道路/植物零散拼接”与 `hero-terrain-main.png` 的“一整块透明大地形”均停止执行。当前唯一活动方向为五组场景模块；位置确认原型和截图分别为 `prototypes/p0-five-scene-layout.html`、`prototypes/p0-five-scene-layout-1440x900.png`。

## 6. P1：首页补充、公共环境与转场（原 11 张，当前 10 项活动）

| 编号 | 素材 | 使用页面与位置 | PNG 母版建议 | 锚点 / 动效 | 保存路径 | 状态 |
|---|---|---|---|---|---|---|
| HOM-CLD-003 | 首页前景云层 | 首页 Hero 底部 | 页面宽度确认后，建议 >=2400px 宽 | bottom center / 慢移 | `public/portfolio/environment/home/hero-clouds-foreground.png` | 待生成 |
| HOM-DEC-001 | 浮空嫩芽盆栽 | 首页 Hero 上部小装饰 | 512x512 内 | center / 轻浮 | `public/portfolio/environment/home/hero-floating-sprout.png` | 待生成 |
| HOM-DEC-002 | 电脑与路牌物件组 | 已分别并入 HOM-SCN-003 与 HOM-SCN-005 | 不再单独生成 | — | `public/portfolio/environment/home/hero-tech-props.png` | 已废弃；无文件 |
| HOM-LNK-001 | 首页项目区衔接云台 | Hero 到项目预览的底部衔接 | 建议 >=2400px 宽，具体高度待骨架确认 | bottom center / 滚动衔接 | `public/portfolio/environment/home/hero-project-bridge.png` | 待生成 |
| SHR-CLD-001 | 公共云朵素材包 | 项目列表、普通页面、404 | 建议 2048x1024 内 | center / 按页面裁切 | `public/portfolio/environment/shared/shared-cloud-pack.png` | 待生成 |
| SHR-ISL-001 | 公共小浮岛素材包 | 项目列表与章节装饰 | 建议 2048x1024 内 | bottom center / 轻浮 | `public/portfolio/environment/shared/shared-small-islands.png` | 待生成 |
| SHR-PLT-001 | 公共植物素材包 | 多页面边缘点缀 | 建议 2048x1024 内 | bottom center / 轻摆 | `public/portfolio/environment/shared/shared-plant-pack.png` | 待生成 |
| TRN-001 | 暖白云阶通用转场 | 普通页面转场 | 建议 2400x1200，最终依页面测试 | center / 遮罩展开 | `public/portfolio/environment/transitions/transition-neutral-cloud.png` | 待生成 |
| TRN-002 | DesignSpark 项目转场 | 首页/项目列表到 DesignSpark | 建议 2400x1200，最终依页面测试 | center / 主题色展开 | `public/portfolio/environment/transitions/transition-designspark.png` | 待生成 |
| TRN-003 | 交换人生项目转场 | 首页/项目列表到交换人生 | 建议 2400x1200，最终依页面测试 | center / 主题色展开 | `public/portfolio/environment/transitions/transition-life-exchange.png` | 待生成 |
| TRN-004 | AI 销售项目转场 | 首页/项目列表到 AI 销售 Agent | 建议 2400x1200，最终依页面测试 | center / 主题色展开 | `public/portfolio/environment/transitions/transition-ai-sales.png` | 待生成 |

P1 的正式尺寸必须在 P0 分层合成和页面衔接容器完成后确认；表中尺寸不是生成指令。

## 7. P2：内页场景与项目详情装饰（9 张）

| 编号 | 素材 | 页面与用途 | 尺寸状态 | 保存路径 | 状态 |
|---|---|---|---|---|---|
| EXP-SCN-001 | 经历路径浮岛 | 经历页纵向路径背景 | 待经历骨架确认 | `public/portfolio/environment/experience/experience-route-island.png` | 待生成 |
| EXP-DEC-001 | 经历里程碑路牌组 | 时间轴节点装饰 | 待经历骨架确认 | `public/portfolio/environment/experience/experience-milestone-signs.png` | 待生成 |
| ABT-SCN-001 | 关于我像素工作室岛 | 关于我视觉场景 | 待真实内容位置确认 | `public/portfolio/environment/about/about-studio-island.png` | 待生成 |
| ABT-DEC-001 | 设计物件组 | 环境设计、手绘与学习线索 | 待真实作品确认 | `public/portfolio/environment/about/about-design-objects.png` | 待生成 |
| CON-SCN-001 | 联系终端浮岛 | 联系页主场景 | 待联系内容确认 | `public/portfolio/environment/contact/contact-terminal-island.png` | 待生成 |
| CON-DEC-001 | 邮箱与植物物件组 | 联系入口点缀 | 待联系内容确认 | `public/portfolio/environment/contact/contact-mail-props.png` | 待生成 |
| PRJ-DS-001 | DesignSpark 章节装饰 | 项目详情章节间隔 | 待真实证据位置确认 | `public/portfolio/projects/designspark/designspark-section-decoration.png` | 待生成 |
| PRJ-LE-001 | 交换人生章节装饰 | 项目详情章节间隔 | 待真实证据位置确认 | `public/portfolio/projects/life-exchange/life-exchange-section-decoration.png` | 待生成 |
| PRJ-SA-001 | AI 销售章节装饰 | 项目详情章节间隔 | 待真实证据位置确认 | `public/portfolio/projects/ai-sales-agent/ai-sales-section-decoration.png` | 待生成 |

项目详情装饰不得替代真实界面、流程图、PRD 摘要、测试记录或结果证据。

## 8. P3：非必要装饰与 404（4 张）

| 编号 | 素材 | 页面与用途 | 尺寸状态 | 保存路径 | 状态 |
|---|---|---|---|---|---|
| HOM-FX-001 | 首页像素光点 | 不属于当前四个独立动态层 | — | `public/portfolio/environment/home/hero-pixel-sparkles.png` | 暂停；不得生成 |
| NFD-SCN-001 | 404 迷路浮岛 | 404 主场景 | 待 404 骨架确认 | `public/portfolio/environment/not-found/not-found-lost-island.png` | 待生成 |
| NFD-DEC-001 | 404 断路路牌 | 404 辅助装饰 | 待 404 骨架确认 | `public/portfolio/environment/not-found/not-found-broken-sign.png` | 待生成 |
| SHR-PLT-002 | 公共微型植物组 | 页面小型空白处点缀 | 待性能预算确认 | `public/portfolio/environment/shared/shared-micro-plants.png` | 待生成 |

P3 只有在性能预算允许且确有视觉必要时生成。

## 9. 按页面的素材使用关系

| 页面 | 已有真实图片 | 计划生成位图 | HTML/CSS 或 SVG | 后期确定 |
|---|---|---|---|---|
| 首页 | 人物母版、远/中景云、瀑布 Sprite、四张项目封面（后续接入） | 五组 P0 场景模块；P1 首页补充项待五组确认后复核 | 天空、标题、按钮、项目卡、能力与经历结构 | 项目真实截图和简历 |
| 项目列表 | 四张项目封面 | SHR-CLD-001、SHR-ISL-001、SHR-PLT-001 | 卡片、标签、箭头和筛选状态 | 真实项目元信息 |
| 项目详情 | 项目封面和后续真实证据 | TRN-002—004、PRJ-DS/LE/SA-001 | 正文、元信息、流程图、章节导航 | 界面、调研、测试、结果与授权 |
| 经历 | 后续课程与工作证据 | EXP-SCN-001、EXP-DEC-001 | 时间轴、职责、结果和链接 | 真实课程资料和脱敏经历证据 |
| 关于我 | 后续本人作品和照片 | ABT-SCN-001、ABT-DEC-001 | 转型叙事、价值观与作品说明 | 本人确认公开的作品和生活内容 |
| 联系 | 无 | CON-SCN-001、CON-DEC-001 | 邮箱、GitHub、简历入口和状态 | 本人确认的联系方式 |
| 404 | 无 | NFD-SCN-001、NFD-DEC-001、可复用公共云 | 错误说明和返回链接 | 无 |
| 公共转场 | 无 | TRN-001—004、共享环境包 | 页面进入退出与 reduced-motion 降级 | 最终路由容器尺寸 |

## 10. 生成批次

| 批次 | 数量 | 范围 | 开始条件 |
|---|---:|---|---|
| P0 | 8 | 已有远/中景云与瀑布 Sprite；待生成五组场景模块 | 五组 1440×900 位置原型经用户确认 |
| P1 | 原 11，当前 10 项活动 | 首页前景与衔接、公共环境和四组转场；HOM-DEC-002 已并入 P0 | 五组场景合成验证通过 |
| P2 | 9 | 经历、关于、联系和三个项目详情装饰 | 相应页面内容与真实证据位置确认 |
| P3 | 原 4，当前 3 项活动、1 项暂停 | 404、微型植物；首页光点暂停 | 性能预算允许且确有视觉必要 |

P0 当前执行顺序：冻结已生成的远/中景云、瀑布 Sprite 和人物 → 确认五组位置原型 → 按 HOM-SCN-001 至 HOM-SCN-005 一组一组生成。每组检查内部完整性、Alpha、底部雾化、尺寸、风格和与人物/瀑布的接触关系后，再进入下一组。

## 11. 素材验收

1. 文件路径、编号、尺寸和批次与 `docs/asset-manifest.md` 一致。
2. PNG 具有 Alpha 通道，四角和主体外部存在真实透明像素，不含棋盘格背景。
3. 主体完整且未贴边，透明边距覆盖锚点位移和视差范围。
4. 生成素材不包含文字、Logo、按钮、水印、项目数据或人物替代品。
5. 五组素材在像素颗粒、光向、透视、石材和草地色阶上属于同一视觉世界；每组内部构件完整，不依赖跨组零件补齐。
6. WebP/AVIF 仅在开发阶段从 PNG 母版派生；母版永久保留。
7. 五组 P0 场景通过 1440×900 构图确认及六个基准视口的组合检查后，才能开始 P1。
