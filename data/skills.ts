export type Skill = {
  name: string;
  /** Names of projects (from data/projects.ts) where this skill is visible. */
  projects?: string[];
  /** Rendered with stronger visual weight in the Skills section. */
  emphasis?: boolean;
};

export type SkillCategory = {
  id: string;
  label: string;
  icon: "code" | "sparkle" | "branch" | "chart" | "database" | "grid" | "cloud" | "kanban" | "shield";
  color: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Programming languages",
    icon: "code",
    color: "#A67C52",
    skills: [
      { name: "Python", emphasis: true, projects: ["AuditAI", "IGNITRIX"] },
      { name: "SQL", emphasis: true },
      { name: "Java", emphasis: true },
      { name: "JavaScript", emphasis: true, projects: ["Nova", "IGNITRIX"] },
      { name: "C", emphasis: true },
      { name: "TypeScript", projects: ["Nova", "AuditAI"] },
      { name: "R" },
      { name: "MATLAB" },
      { name: "Bash" },
    ],
  },
  {
    id: "reporting",
    label: "Reporting, BI & risk analytics",
    icon: "kanban",
    color: "#B08D57",
    skills: [
      { name: "SQL & relational databases", emphasis: true },
      { name: "Complex queries & data extraction", emphasis: true },
      { name: "Tableau", emphasis: true },
      { name: "Power BI", emphasis: true },
      { name: "Excel (pivot tables, lookups, analysis)", emphasis: true },
      { name: "Scheduled & production reporting" },
      { name: "Dashboard design", projects: ["AuditAI"] },
      { name: "Trend & portfolio analysis" },
      { name: "Ad-hoc analysis & stakeholder requests" },
      { name: "Credit risk modelling & reporting", projects: ["AuditAI"] },
      { name: "Data quality & control checks", projects: ["AuditAI"] },
      { name: "Reporting documentation & controls" },
    ],
  },
  {
    id: "genai",
    label: "GenAI, RAG & agents",
    icon: "sparkle",
    color: "#8B6914",
    skills: [
      { name: "LLM APIs (OpenAI, Anthropic)", emphasis: true, projects: ["AuditAI", "PPD Talkbot (Chatner)"] },
      { name: "RAG pipelines", emphasis: true, projects: ["IGNITRIX", "AIEF"] },
      { name: "Agentic AI (MCP, LangGraph, Google ADK)", emphasis: true, projects: ["IGNITRIX"] },
      { name: "Prompt engineering & prompt management", projects: ["Few-Shot Learning with LLMs"] },
      { name: "AI-assisted process improvement (Copilot-style workflows)" },
      { name: "Embeddings & retrieval grounding", projects: ["IGNITRIX"] },
      { name: "Evaluation harnesses", projects: ["EIREVAL"] },
      { name: "Safety & bias mitigations", projects: ["AuditAI"] },
      { name: "Fine-tuning", projects: ["PPD Talkbot (Chatner)"] },
    ],
  },
  {
    id: "ml",
    label: "Machine learning",
    icon: "branch",
    color: "#5C7C6A",
    skills: [
      { name: "scikit-learn", emphasis: true, projects: ["AuditAI", "Omdena: Autism Prediction in Toddlers"] },
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "XGBoost & Random Forest" },
      { name: "Pandas / Spark", emphasis: true },
      { name: "NLP", projects: ["PPD Talkbot (Chatner)", "Omdena: Inflation-Coping Chatbot for Lublin"] },
      { name: "Computer vision", projects: ["Traffic Detection Visual System"] },
      { name: "Model evaluation, monitoring & iteration", projects: ["EIREVAL", "AuditAI"] },
    ],
  },
  {
    id: "engineering",
    label: "Software engineering",
    icon: "cloud",
    color: "#1B3A4B",
    skills: [
      { name: "RESTful APIs", emphasis: true, projects: ["IGNITRIX"] },
      { name: "Backend services & integrations", emphasis: true, projects: ["IGNITRIX", "AuditAI"] },
      { name: "Unit & integration testing mindset", emphasis: true, projects: ["EIREVAL"] },
      { name: "Git & CI/CD", emphasis: true },
      { name: "Docker / containerisation", emphasis: true },
      { name: "Node.js", projects: ["IGNITRIX"] },
      { name: "React", emphasis: true, projects: ["Nova", "IGNITRIX"] },
      { name: "Modular, maintainable design", projects: ["IGNITRIX", "AuditAI"] },
      { name: "Agile collaboration with technology teams" },
      { name: "Error handling & observability", projects: ["IGNITRIX"] },
    ],
  },
  {
    id: "data-eng",
    label: "Data engineering & cloud",
    icon: "database",
    color: "#3D5A4C",
    skills: [
      { name: "Data pipelines & ETL", emphasis: true },
      { name: "PostgreSQL" },
      { name: "Spark & Hadoop" },
      { name: "Azure", emphasis: true },
      { name: "AWS" },
      { name: "Google Cloud & Vertex AI", projects: ["IGNITRIX"] },
      { name: "Data management & governance", projects: ["AuditAI", "AIEF"] },
      { name: "Firebase", projects: ["IGNITRIX"] },
    ],
  },
  {
    id: "frontend",
    label: "Frontend & UX",
    icon: "grid",
    color: "#0F8B8D",
    skills: [
      { name: "Next.js", projects: ["AuditAI", "Nova", "AIEF"] },
      { name: "Component design", projects: ["IGNITRIX", "AuditAI"] },
      { name: "TypeScript UI", projects: ["AuditAI"] },
      { name: "Dashboard UX", projects: ["AuditAI"] },
      { name: "Responsive layouts", projects: ["Nova"] },
      { name: "Vite", projects: ["Nova"] },
    ],
  },
  {
    id: "governance",
    label: "Risk, security & AI governance",
    icon: "shield",
    color: "#2F5D50",
    skills: [
      { name: "Credit risk & fairness analysis", emphasis: true, projects: ["AuditAI"] },
      { name: "Risk assessment & compliance reporting", projects: ["AuditAI", "AIEF"] },
      { name: "Enterprise security & data handling", projects: ["IGNITRIX", "AuditAI"] },
      { name: "Secure service design", projects: ["IGNITRIX"] },
      { name: "EU AI Act", projects: ["AuditAI", "EIREVAL", "AIEF"] },
      { name: "GDPR (certified)" },
      { name: "Responsible AI frameworks", projects: ["AuditAI", "AIEF"] },
    ],
  },
];

/**
 * Counted from the projects and roles on this site, so the chart stays honest:
 * each count is the number of projects or jobs above that evidence the domain.
 */
export const evidence: { domain: string; count: number; note: string; color: string }[] = [
  { domain: "Reporting & analytics", color: "#B08D57", count: 5, note: "E2open Power BI, AuditAI dashboards, IIT Madras analysis, iQube analytics, AIEF assessments" },
  { domain: "Software & APIs", color: "#1B3A4B", count: 5, note: "IGNITRIX, AuditAI, Nova, PPD Talkbot, E2open production delivery" },
  { domain: "GenAI & agents", color: "#8B6914", count: 5, note: "IGNITRIX, EIREVAL, Few-Shot LLMs, AuditAI, AIEF" },
  { domain: "Machine learning", color: "#5C7C6A", count: 7, note: "PPD Talkbot, autism screening, traffic CV, Samsung NLP, iQube features, smart farming, Lublin chatbot" },
  { domain: "Risk & governance", color: "#2F5D50", count: 4, note: "MSc dissertation / AIEF, AuditAI credit-risk fairness, EIREVAL, GDPR" },
];
