export type ImpactCategory = "governance" | "ai" | "product" | "fullstack" | "oss";

export type ImpactProject = {
  name: string;
  tag: string;
  summary: string;
  x: number; // 0–100: Technical Depth (left=strategy, right=deep-tech)
  y: number; // 0–100: Business Impact (bottom=learning, top=production)
  category: ImpactCategory;
};

export const impactProjects: ImpactProject[] = [
  {
    name: "AIEF",
    tag: "AI Governance",
    summary: "Ontology-driven AI ethics assessor — 207 requirements, 4 frameworks, published URI.",
    x: 82,
    y: 78,
    category: "governance",
  },
  {
    name: "AuditAI",
    tag: "Responsible AI",
    summary: "Credit-risk fairness pipeline with automated EU AI Act audit reports.",
    x: 70,
    y: 72,
    category: "governance",
  },
  {
    name: "IGNITRIX",
    tag: "Agentic AI",
    summary: "Dual-agent financial advisor — Top 0.5% of 50,000+ teams at Google Cloud hackathon.",
    x: 75,
    y: 85,
    category: "ai",
  },
  {
    name: "EIREVAL",
    tag: "LLM Evaluation",
    summary: "Benchmarking LLM understanding of Irish and EU financial regulation.",
    x: 85,
    y: 55,
    category: "ai",
  },
  {
    name: "Atlas PRD",
    tag: "Product Strategy",
    summary: "Product spec for a cross-border credit passport — live hosted PRD.",
    x: 20,
    y: 65,
    category: "product",
  },
  {
    name: "PPD Talkbot",
    tag: "AI for Health",
    summary: "Fine-tuned chatbot for postpartum depression early recognition.",
    x: 65,
    y: 60,
    category: "ai",
  },
  {
    name: "RetailCache",
    tag: "Consulting",
    summary: "Customer sentiment research and market sizing for fashion retail — ISCG engagement.",
    x: 30,
    y: 90,
    category: "product",
  },
  {
    name: "Ready72",
    tag: "Civic Tech",
    summary: "Power-outage resilience planner — Build for Ireland hackathon.",
    x: 50,
    y: 70,
    category: "fullstack",
  },
  {
    name: "Omdena (3 projects)",
    tag: "Open Source ML",
    summary: "Smart farming, autism screening, inflation coping — global volunteer ML teams.",
    x: 60,
    y: 45,
    category: "oss",
  },
  {
    name: "iQube (PM)",
    tag: "Product Management",
    summary: "4 production AI systems, 10,000+ users, 12+ engineers managed.",
    x: 25,
    y: 95,
    category: "product",
  },
  {
    name: "e2open",
    tag: "Enterprise Delivery",
    summary: "Fortune 500 supply chain product across 120+ countries.",
    x: 40,
    y: 88,
    category: "product",
  },
];
