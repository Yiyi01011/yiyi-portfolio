import type { Locale } from "@/content/i18n";

export type SalesAgentContent = {
  back: string;
  localNav: { overview: string; workflow: string; architecture: string; prd: string; validation: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    readPrd: string;
    viewArchitecture: string;
    coverAlt: string;
  };
  problem: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    items: { title: string; body: string }[];
  };
  workflow: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    agentLabel: string;
    systemLabel: string;
    humanLabel: string;
    nodes: { number: string; title: string; owner: "agent" | "system" | "human"; role: string; output: string }[];
  };
  decisions: {
    index: string;
    kicker: string;
    title: string;
    items: { number: string; title: string; body: string; boundary: string }[];
  };
  architecture: {
    index: string;
    kicker: string;
    title: string;
    description: string;
    layers: { label: string; title: string; body: string }[];
    chain: string[];
  };
  prd: {
    eyebrow: string;
    title: string;
    description: string;
    tocLabel: string;
    toc: { href: string; label: string }[];
    contextTitle: string;
    context: string;
    valuesTitle: string;
    values: { title: string; body: string }[];
    usersTitle: string;
    users: { title: string; need: string }[];
    scenariosTitle: string;
    scenarios: string[];
    modulesTitle: string;
    moduleHeaders: string[];
    modules: { module: string; owner: string; detail: string }[];
    ragTitle: string;
    ragDescription: string;
    ragChain: string[];
    profileTitle: string;
    profileDescription: string;
    profileFields: string[];
    dataTitle: string;
    dataDescription: string;
    dataRows: { type: string; examples: string; method: string }[];
    fallbackTitle: string;
    fallbackDescription: string;
    fallbackRows: { issue: string; response: string }[];
    validationTitle: string;
    validationNotice: string;
    validations: { number: string; title: string; checks: string[] }[];
  };
  ending: { eyebrow: string; title: string; description: string; backProjects: string };
};

const zh: SalesAgentContent = {
  back: "返回精选项目",
  localNav: { overview: "项目概览", workflow: "业务流程", architecture: "能力架构", prd: "PRD 文档", validation: "测试验收" },
  hero: {
    eyebrow: "企业 AI 产品 · PRD 方案",
    title: "AI Sales Agent",
    subtitle: "面向海外独立站的智能客服与销售辅助产品",
    description: "以大语言模型完成自然语言理解，通过 RAG 接入商家私有知识、Workflow 控制关键流程，并连接 SKU、订单与客户数据，为商品咨询、需求澄清、推荐和订单服务提供统一能力。",
    tags: ["AI Agent", "RAG", "Coze Workflow", "用户画像", "业务 API"],
    readPrd: "阅读结构化 PRD",
    viewArchitecture: "查看能力架构",
    coverAlt: "AI Sales Agent 项目封面，展示智能销售客服及业务能力连接",
  },
  problem: {
    index: "01",
    kicker: "Business problem",
    title: "从标准问答走向复杂需求理解，关键不只是换一个模型",
    description: "海外独立站的商品、规则和品牌话术彼此独立。要让 AI 真正进入销售服务链路，需要同时解决知识差异、动态数据、连续对话、用户信息沉淀与异常兜底。",
    items: [
      { title: "复杂表达难理解", body: "关键词与固定 SOP 能处理标准问题，却难以覆盖自然语言变体、模糊需求和连续追问。" },
      { title: "商家知识不通用", body: "SKU、商品参数、售后规则和品牌表达属于各自商家，无法直接复用一套通用答案。" },
      { title: "服务与销售割裂", body: "被动应答没有继续识别预算、购买对象、使用场景和关键偏好，推荐依据不足。" },
      { title: "数据没有形成闭环", body: "咨询中产生的偏好与关注商品未结构化沉淀，知识、订单和客户数据也分散在不同系统。" },
    ],
  },
  workflow: {
    index: "02",
    kicker: "Controlled workflow",
    title: "让每次回答都经过可追踪的业务链路",
    description: "流程不是让 Agent 自由发挥，而是在意图识别、知识检索、动态数据查询和输出校验之间建立明确路由。将鼠标或键盘焦点移到节点上，可查看该节点的职责与产出。",
    agentLabel: "Agent / AI",
    systemLabel: "规则与系统",
    humanLabel: "人工兜底",
    nodes: [
      { number: "01", title: "消息接入", owner: "system", role: "接收并预处理用户输入", output: "规范化 Query 与必要上下文" },
      { number: "02", title: "意图识别", owner: "agent", role: "识别咨询、推荐、订单、售后或人工诉求", output: "业务意图与置信度" },
      { number: "03", title: "Workflow 路由", owner: "system", role: "按规则选择 RAG、API、澄清或 SOP", output: "可控的处理路径" },
      { number: "04", title: "知识与数据", owner: "system", role: "检索稳定知识并查询实时业务数据", output: "可信上下文与业务结果" },
      { number: "05", title: "Prompt + LLM", owner: "agent", role: "结合画像、上下文与业务约束生成回复", output: "自然语言候选回复" },
      { number: "06", title: "输出校验", owner: "system", role: "检查事实依据、规则和异常状态", output: "可返回结果或降级信号" },
      { number: "07", title: "人工转接", owner: "human", role: "承接低置信度、投诉与连续失败场景", output: "可靠的人工服务接续" },
    ],
  },
  decisions: {
    index: "03",
    kicker: "Product decisions",
    title: "把生成能力放进业务边界，而不是让业务迁就模型",
    items: [
      { number: "A", title: "稳定知识与实时数据分层", body: "商品介绍、FAQ 和政策通过 RAG 管理；库存、订单、物流及部分价格通过 API 获取。", boundary: "高时效数据不得只依赖静态知识库。" },
      { number: "B", title: "关键节点由 Workflow 控制", body: "意图、规则与条件共同决定知识检索、数据查询、回复和转人工路径。", boundary: "退款、投诉和订单异常不完全依赖模型自主判断。" },
      { number: "C", title: "用户画像最小化推断", body: "仅沉淀用户明确表达或高置信度提取的预算、偏好、场景与关注商品。", boundary: "模型推测不得直接写成确定字段。" },
      { number: "D", title: "能力异常可以降级", body: "RAG、API 或模型不可用时，按关键词、FAQ、Rule/SOP 和人工客服逐级回退。", boundary: "无可靠依据时不生成商品事实。" },
    ],
  },
  architecture: {
    index: "04",
    kicker: "AI capability architecture",
    title: "通用 AI 底座之上，加载商家级知识、规则与数据",
    description: "同一套能力架构支持不同商家独立配置知识库、Prompt、Workflow 与品牌语气，并通过业务接口连接各自的 SKU、客户和订单数据。",
    layers: [
      { label: "UNDERSTAND", title: "理解层", body: "意图识别、上下文指代、需求字段提取与澄清。" },
      { label: "ORCHESTRATE", title: "编排层", body: "Coze Workflow、业务规则、SOP 与人工转接条件。" },
      { label: "GROUND", title: "知识与数据层", body: "RAG 私有知识、向量检索、SKU、订单、物流与客户 API。" },
      { label: "RESPOND", title: "生成与校验层", body: "Prompt 组装、LLM 回复、事实约束与异常降级。" },
    ],
    chain: ["用户输入", "意图 / 规则", "Workflow", "RAG / API / 画像", "Prompt", "LLM", "输出校验"],
  },
  prd: {
    eyebrow: "Structured PRD",
    title: "产品需求文档",
    description: "以下内容由现有《销售专家 Agent 产品需求文档》整理为网页阅读版，保留产品定位、能力边界、数据策略、异常机制和测试标准，不补写文档中没有的上线指标或实现结论。",
    tocLabel: "文档目录",
    toc: [
      { href: "#sales-prd-context", label: "定位与价值" },
      { href: "#sales-prd-users", label: "用户与场景" },
      { href: "#sales-prd-modules", label: "核心模块" },
      { href: "#sales-prd-rag", label: "RAG 与画像" },
      { href: "#sales-prd-data", label: "数据接入" },
      { href: "#sales-prd-fallback", label: "异常兜底" },
      { href: "#sales-prd-validation", label: "测试验收" },
    ],
    contextTitle: "产品定位与核心价值",
    context: "销售专家 Agent 是一套面向海外独立站商家的 AI 智能客服与销售辅助产品。它用大语言模型理解和生成自然语言，以 RAG 提供有依据的商家知识，以 Workflow 和规则约束关键服务流程，并结合用户画像和业务数据完成咨询、推荐、订单与基础销售辅助。",
    valuesTitle: "双侧价值",
    values: [
      { title: "商家侧", body: "减少重复咨询成本，统一知识与服务规则，并支持商家级知识、Prompt、Workflow 和品牌语气配置。" },
      { title: "消费者侧", body: "减少重复描述需求的成本，获得基于预算、偏好和使用场景的连续咨询与商品推荐。" },
    ],
    usersTitle: "目标用户与核心场景",
    users: [
      { title: "独立站消费者", need: "完成商品浏览、参数咨询、推荐、下单、订单查询与售后服务。" },
      { title: "独立站商家", need: "管理商品知识、客服配置、品牌规则和客户运营，并连接已有业务数据。" },
    ],
    scenariosTitle: "核心场景",
    scenarios: ["商品参数咨询", "模糊需求澄清", "个性化商品推荐", "多轮商品对比", "价格与库存查询", "订单及物流查询", "售后 FAQ", "人工客服转接"],
    modulesTitle: "核心能力模块",
    moduleHeaders: ["模块", "主要负责人", "职责"],
    modules: [
      { module: "意图识别", owner: "LLM + 规则", detail: "判断商品咨询、推荐、物流、售后和人工客服等主要诉求。" },
      { module: "Coze Workflow", owner: "流程系统", detail: "控制知识检索、数据查询、回复生成和兜底路径。" },
      { module: "RAG 知识库", owner: "知识系统", detail: "提供商品、FAQ、品牌和售后等企业私有知识。" },
      { module: "用户画像", owner: "画像服务", detail: "保存明确预算、偏好、购买场景、关注 SKU 与核心顾虑。" },
      { module: "业务 API", owner: "业务系统", detail: "获取 SKU、库存、订单、物流和客户等结构化数据。" },
      { module: "Prompt + LLM", owner: "Agent", detail: "组合角色、规则、上下文、知识与业务数据，生成自然语言回复。" },
      { module: "人工转接", owner: "人工客服", detail: "处理无法可靠完成、高风险或明确要求人工介入的场景。" },
    ],
    ragTitle: "RAG 处理链路",
    ragDescription: "知识准确性不能只在最终回答处检查，需要沿检索链路定位问题。未召回可靠知识时，不允许生成未经验证的商品参数。",
    ragChain: ["Data", "Chunking", "Embedding", "Vector Retrieval", "Rerank", "Context", "Prompt", "LLM"],
    profileTitle: "会话上下文与用户画像",
    profileDescription: "系统保留当前会话必要上下文，用于理解“这个”“第二款”“便宜一点”等连续表达；画像只更新用户明确表达或高置信度提取的信息。",
    profileFields: ["预算", "商品类别", "颜色偏好", "风格偏好", "材质偏好", "购买对象", "使用场景", "关注 SKU", "核心顾虑"],
    dataTitle: "数据实时性分层",
    dataDescription: "根据变更频率选择接入方式，避免把动态业务事实固化在静态知识中。",
    dataRows: [
      { type: "稳定 / 低频变更", examples: "商品介绍、FAQ、售后政策、品牌说明", method: "数据同步 + RAG" },
      { type: "实时 / 高频变更", examples: "库存、订单、物流、部分价格", method: "业务 API 查询或实时同步" },
    ],
    fallbackTitle: "异常处理与降级",
    fallbackDescription: "当检索、接口或模型无法可靠完成任务时，系统需要给出明确反馈并进入可控的下一条路径。",
    fallbackRows: [
      { issue: "意图无法判断", response: "请求补充信息或选择问题类型" },
      { issue: "RAG 无有效召回", response: "不生成无依据内容，继续澄清或转人工" },
      { issue: "API 请求失败", response: "提示稍后重试或转人工" },
      { issue: "商品知识冲突", response: "以业务系统或确认后的知识源为准" },
      { issue: "连续无法解决", response: "进入人工客服" },
    ],
    validationTitle: "测试与验收标准",
    validationNotice: "以下为 PRD 中定义的验收方向与测试 Case，不代表已经取得线上准确率或转化数据。",
    validations: [
      { number: "01", title: "商品事实准确性", checks: ["召回对应 SKU 知识", "回复与知识库一致", "不混入其他商品参数"] },
      { number: "02", title: "多轮上下文", checks: ["正确识别连续指代", "保持当前 SKU 上下文", "理解比较关系"] },
      { number: "03", title: "模糊商品推荐", checks: ["信息不足时补充关键需求", "推荐符合预算", "商品来自当前商家 SKU"] },
      { number: "04", title: "知识缺失控制", checks: ["不生成未经验证的信息", "明确提示暂未查询到", "支持澄清或人工确认"] },
      { number: "05", title: "用户画像使用", checks: ["继续使用已确认预算", "新旧冲突时采用最新明确表达", "不把推测写为事实"] },
    ],
  },
  ending: {
    eyebrow: "Product summary",
    title: "让 AI 回答问题，也让每一步回答有业务依据",
    description: "该方案将自然语言能力、企业私有知识、动态业务数据与可控流程组合在同一产品架构中，并把幻觉控制、异常降级和人工接续纳入核心需求。",
    backProjects: "返回首页项目区",
  },
};

const en: SalesAgentContent = {
  ...zh,
  back: "Back to selected projects",
  localNav: { overview: "Overview", workflow: "Workflow", architecture: "Architecture", prd: "PRD", validation: "Validation" },
  hero: {
    eyebrow: "Enterprise AI product · PRD plan",
    title: "AI Sales Agent",
    subtitle: "An intelligent customer-service and sales-assistance product for independent e-commerce sites",
    description: "LLMs handle natural-language understanding, RAG grounds answers in merchant knowledge, workflows control key processes, and business APIs connect SKU, order, and customer data for consultation, clarification, recommendation, and order service.",
    tags: ["AI Agent", "RAG", "Coze Workflow", "User Profile", "Business API"],
    readPrd: "Read the structured PRD",
    viewArchitecture: "View architecture",
    coverAlt: "AI Sales Agent project cover showing an intelligent sales assistant connected to business capabilities",
  },
  problem: {
    index: "01", kicker: "Business problem", title: "Moving beyond standard Q&A requires more than replacing the model",
    description: "Independent stores have distinct products, policies, and brand language. AI needs merchant-specific knowledge, dynamic data, conversation continuity, profile updates, and reliable fallback to enter the sales-service flow.",
    items: [
      { title: "Complex language", body: "Keywords and fixed SOPs handle standard questions but struggle with vague needs, variants, and follow-ups." },
      { title: "Merchant-specific knowledge", body: "SKU, product facts, policies, and brand language cannot be answered from one generic knowledge set." },
      { title: "Service-sales gap", body: "Passive answers do not uncover budget, recipient, use case, and preferences needed for recommendations." },
      { title: "Disconnected data", body: "Consultation signals are not structured into profiles, while knowledge, orders, and customers remain siloed." },
    ],
  },
  workflow: {
    index: "02", kicker: "Controlled workflow", title: "Make every response follow a traceable business path",
    description: "The agent does not improvise freely. Intent, retrieval, dynamic queries, and output validation form an explicit route. Hover or focus a node to inspect its responsibility and output.",
    agentLabel: "Agent / AI", systemLabel: "Rules and systems", humanLabel: "Human fallback",
    nodes: [
      { number: "01", title: "Message intake", owner: "system", role: "Receive and preprocess user input", output: "Normalized query and required context" },
      { number: "02", title: "Intent detection", owner: "agent", role: "Identify consultation, recommendation, order, after-sales, or human intent", output: "Business intent and confidence" },
      { number: "03", title: "Workflow routing", owner: "system", role: "Choose RAG, API, clarification, or SOP based on rules", output: "Controlled processing path" },
      { number: "04", title: "Knowledge and data", owner: "system", role: "Retrieve stable knowledge and query live business data", output: "Grounded context and business results" },
      { number: "05", title: "Prompt + LLM", owner: "agent", role: "Combine profile, context, and constraints", output: "Natural-language response candidate" },
      { number: "06", title: "Output validation", owner: "system", role: "Check evidence, rules, and exception states", output: "Returnable answer or fallback signal" },
      { number: "07", title: "Human handoff", owner: "human", role: "Handle low confidence, complaints, or repeated failure", output: "Reliable service continuation" },
    ],
  },
  decisions: {
    index: "03", kicker: "Product decisions", title: "Place generation inside business boundaries",
    items: [
      { number: "A", title: "Separate stable knowledge and live data", body: "RAG manages descriptions, FAQs, and policies; APIs provide inventory, orders, logistics, and some prices.", boundary: "High-volatility facts cannot rely on static knowledge alone." },
      { number: "B", title: "Control critical nodes with workflows", body: "Intent, rules, and conditions route retrieval, queries, replies, and human handoff.", boundary: "Refunds, complaints, and order exceptions do not rely solely on model judgment." },
      { number: "C", title: "Minimize profile inference", body: "Store only explicit or high-confidence budget, preference, scenario, and SKU signals.", boundary: "Model guesses cannot become confirmed profile fields." },
      { number: "D", title: "Degrade safely", body: "When RAG, APIs, or models fail, fall back through keywords, FAQ, Rule/SOP, and human service.", boundary: "Never invent product facts without reliable evidence." },
    ],
  },
  architecture: {
    index: "04", kicker: "AI capability architecture", title: "Load merchant knowledge, rules, and data on a shared AI foundation",
    description: "The architecture lets each merchant configure its own knowledge base, prompts, workflows, and brand voice while connecting its SKU, customer, and order systems.",
    layers: [
      { label: "UNDERSTAND", title: "Understanding", body: "Intent, references, requirement extraction, and clarification." },
      { label: "ORCHESTRATE", title: "Orchestration", body: "Coze Workflow, business rules, SOPs, and handoff conditions." },
      { label: "GROUND", title: "Knowledge and data", body: "Private RAG, vector retrieval, SKU, order, logistics, and customer APIs." },
      { label: "RESPOND", title: "Generation and validation", body: "Prompt assembly, LLM response, fact constraints, and fallback." },
    ],
    chain: ["User input", "Intent / rules", "Workflow", "RAG / API / profile", "Prompt", "LLM", "Validation"],
  },
  prd: {
    ...zh.prd,
    eyebrow: "Structured PRD", title: "Product requirements document",
    description: "This web version is organized from the existing Sales Expert Agent PRD. It preserves positioning, boundaries, data strategy, fallback, and test standards without inventing implementation results or production metrics.",
    tocLabel: "Contents",
    toc: [
      { href: "#sales-prd-context", label: "Position and value" }, { href: "#sales-prd-users", label: "Users and scenarios" },
      { href: "#sales-prd-modules", label: "Core modules" }, { href: "#sales-prd-rag", label: "RAG and profile" },
      { href: "#sales-prd-data", label: "Data access" }, { href: "#sales-prd-fallback", label: "Fallback" },
      { href: "#sales-prd-validation", label: "Validation" },
    ],
    contextTitle: "Positioning and core value",
    context: "AI Sales Agent is an intelligent customer-service and sales-assistance product for independent e-commerce merchants. LLMs handle language, RAG supplies grounded merchant knowledge, workflows constrain service paths, and profiles plus business data support consultation, recommendation, orders, and sales assistance.",
    valuesTitle: "Value for both sides",
    values: [
      { title: "Merchant", body: "Reduce repetitive support work, unify knowledge and rules, and configure knowledge, prompts, workflows, and brand voice per merchant." },
      { title: "Customer", body: "Avoid repeating needs and receive continuous consultation and recommendations based on budget, preferences, and use cases." },
    ],
    usersTitle: "Target users and scenarios",
    users: [
      { title: "Store customer", need: "Browse, ask about products, receive recommendations, order, track, and access after-sales support." },
      { title: "Independent merchant", need: "Manage product knowledge, service configuration, brand rules, customer operations, and business-data connections." },
    ],
    scenariosTitle: "Core scenarios",
    scenarios: ["Product facts", "Need clarification", "Personalized recommendation", "Multi-turn comparison", "Price and inventory", "Order and logistics", "After-sales FAQ", "Human handoff"],
    modulesTitle: "Core capability modules", moduleHeaders: ["Module", "Primary owner", "Responsibility"],
    modules: [
      { module: "Intent detection", owner: "LLM + rules", detail: "Identify consultation, recommendation, logistics, after-sales, and human-support intent." },
      { module: "Coze Workflow", owner: "Process system", detail: "Control retrieval, data queries, response generation, and fallback." },
      { module: "RAG knowledge", owner: "Knowledge system", detail: "Provide private product, FAQ, brand, and after-sales knowledge." },
      { module: "User profile", owner: "Profile service", detail: "Store confirmed budget, preference, use case, watched SKU, and concerns." },
      { module: "Business API", owner: "Business system", detail: "Fetch SKU, inventory, order, logistics, and customer data." },
      { module: "Prompt + LLM", owner: "Agent", detail: "Assemble role, rules, context, knowledge, and business data into a response." },
      { module: "Human handoff", owner: "Support agent", detail: "Handle unreliable, high-risk, or explicitly requested human cases." },
    ],
    ragTitle: "RAG processing chain",
    ragDescription: "Knowledge quality must be diagnosed along the retrieval chain. Without reliable retrieval, the system must not generate unverified product facts.",
    ragChain: ["Data", "Chunking", "Embedding", "Vector Retrieval", "Rerank", "Context", "Prompt", "LLM"],
    profileTitle: "Conversation context and profile",
    profileDescription: "The session retains context for references such as “this one,” “the second item,” or “something cheaper.” Profiles update only from explicit or high-confidence information.",
    profileFields: ["Budget", "Category", "Color", "Style", "Material", "Recipient", "Use case", "Watched SKU", "Core concern"],
    dataTitle: "Data freshness layers", dataDescription: "Choose access methods by update frequency so live business facts do not become stale knowledge.",
    dataRows: [
      { type: "Stable / low frequency", examples: "Descriptions, FAQ, policies, brand information", method: "Synchronization + RAG" },
      { type: "Live / high frequency", examples: "Inventory, orders, logistics, some prices", method: "Business API or real-time sync" },
    ],
    fallbackTitle: "Exception handling and fallback", fallbackDescription: "When retrieval, APIs, or models cannot finish reliably, the system states the issue and enters a controlled next path.",
    fallbackRows: [
      { issue: "Unknown intent", response: "Request more information or a problem category" },
      { issue: "No valid RAG result", response: "Do not invent; clarify or hand off" },
      { issue: "API failure", response: "Suggest retry or human support" },
      { issue: "Knowledge conflict", response: "Prefer the business system or verified source" },
      { issue: "Repeated failure", response: "Transfer to human support" },
    ],
    validationTitle: "Test and acceptance criteria",
    validationNotice: "These are PRD-defined validation directions and test cases, not claimed production accuracy or conversion results.",
    validations: [
      { number: "01", title: "Product fact accuracy", checks: ["Retrieve the matching SKU", "Match the knowledge source", "Do not mix product facts"] },
      { number: "02", title: "Multi-turn context", checks: ["Resolve follow-up references", "Keep the current SKU context", "Understand comparisons"] },
      { number: "03", title: "Vague recommendation", checks: ["Ask for missing requirements", "Stay within budget", "Use current merchant SKUs"] },
      { number: "04", title: "Missing knowledge", checks: ["Do not generate unverified facts", "State that data is unavailable", "Support clarification or human confirmation"] },
      { number: "05", title: "Profile use", checks: ["Reuse confirmed budget", "Prefer the latest explicit statement", "Never store inference as fact"] },
    ],
  },
  ending: {
    eyebrow: "Product summary", title: "Let AI answer, and let every answer have business evidence",
    description: "The plan combines natural-language capability, private enterprise knowledge, live business data, and controlled workflows while treating hallucination control, fallback, and human continuation as core requirements.",
    backProjects: "Back to homepage projects",
  },
};

export function getSalesAgentContent(locale: Locale) {
  return locale === "en" ? en : zh;
}
