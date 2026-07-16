export type Skill = {
  name: string;
  /** Names of projects (from data/projects.ts) where this skill is visible. */
  projects?: string[];
};

export type SkillCategory = {
  id: string;
  label: string;
  icon: "sparkle" | "branch" | "chart" | "database" | "grid" | "cloud" | "kanban" | "shield";
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "genai",
    label: "GenAI & agents",
    icon: "sparkle",
    skills: [
      { name: "LLM APIs (OpenAI, Anthropic)", projects: ["AuditAI", "PPD Talkbot (Chatner)"] },
      { name: "Agentic AI (MCP, LangGraph, Google ADK)", projects: ["IGNITRIX"] },
      { name: "Prompt engineering", projects: ["Few-Shot Learning with LLMs"] },
      { name: "RAG frameworks", projects: ["IGNITRIX"] },
      { name: "Evaluation frameworks & ground truth datasets", projects: ["EIREVAL"] },
      { name: "Hugging Face" },
      { name: "Claude Code" },
      { name: "Fine-tuning", projects: ["PPD Talkbot (Chatner)"] },
    ],
  },
  {
    id: "ml",
    label: "Machine learning",
    icon: "branch",
    skills: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "scikit-learn", projects: ["AuditAI", "Omdena: Autism Prediction in Toddlers"] },
      { name: "XGBoost & Random Forest" },
      { name: "NLP", projects: ["PPD Talkbot (Chatner)", "Omdena: Inflation-Coping Chatbot for Lublin"] },
      { name: "Computer vision", projects: ["Traffic Detection Visual System"] },
      { name: "Statistical modelling & optimisation" },
      { name: "Model validation & monitoring" },
    ],
  },
  {
    id: "data-science",
    label: "Data science & analysis",
    icon: "chart",
    skills: [
      { name: "Python (Pandas, NumPy)" },
      { name: "SQL (advanced)" },
      { name: "R" },
      { name: "Exploratory data analysis", projects: ["PPD Talkbot (Chatner)"] },
      { name: "A/B testing" },
      { name: "Data mining" },
      { name: "Google Analytics" },
    ],
  },
  {
    id: "data-eng",
    label: "Data engineering",
    icon: "database",
    skills: [
      { name: "PostgreSQL" },
      { name: "Data pipelines & ETL" },
      { name: "Spark & Hadoop" },
      { name: "API integration" },
      { name: "Data cleaning & validation" },
      { name: "Automated reporting" },
      { name: "MongoDB" },
      { name: "Palantir Foundry" },
    ],
  },
  {
    id: "bi",
    label: "BI & visualisation",
    icon: "grid",
    skills: [
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "Excel (advanced)" },
      { name: "Jupyter Notebooks" },
      { name: "Dashboard design", projects: ["AuditAI"] },
    ],
  },
  {
    id: "engineering",
    label: "Cloud & engineering",
    icon: "cloud",
    skills: [
      { name: "AWS" },
      { name: "Google Cloud & Vertex AI", projects: ["IGNITRIX"] },
      { name: "Git & CI/CD" },
      { name: "TypeScript & Next.js", projects: ["Nova", "AuditAI"] },
      { name: "React & Node.js", projects: ["Nova"] },
      { name: "RESTful APIs" },
      { name: "Java" },
      { name: "MATLAB" },
      { name: "Bash" },
    ],
  },
  {
    id: "product",
    label: "Product & business",
    icon: "kanban",
    skills: [
      { name: "Requirements gathering" },
      { name: "PRD authoring", projects: ["Atlas PRD"] },
      { name: "Stakeholder management" },
      { name: "Agile & sprint planning" },
      { name: "User stories, Jira & Confluence" },
      { name: "Implementation consulting" },
      { name: "Technical training" },
    ],
  },
  {
    id: "governance",
    label: "AI governance",
    icon: "shield",
    skills: [
      { name: "EU AI Act", projects: ["AuditAI", "EIREVAL"] },
      { name: "GDPR (certified)" },
      { name: "Responsible AI frameworks", projects: ["AuditAI"] },
      { name: "Risk assessment" },
      { name: "Compliance reporting", projects: ["AuditAI"] },
    ],
  },
];

/**
 * Counted from the projects and roles on this site, so the chart stays honest:
 * each count is the number of projects or jobs above that evidence the domain.
 */
export const evidence: { domain: string; count: number; note: string }[] = [
  { domain: "Machine learning", count: 7, note: "PPD Talkbot, autism screening, traffic CV, Samsung NLP, iQube features, smart farming, Lublin chatbot" },
  { domain: "Product & delivery", count: 5, note: "iQube PM, Atlas PRD, E2open delivery, LEWAP, Nova" },
  { domain: "GenAI & agents", count: 4, note: "IGNITRIX, EIREVAL, Few-Shot LLMs, AuditAI" },
  { domain: "Data & analytics", count: 4, note: "E2open dashboards, IIT Madras research, iQube analytics, AuditAI metrics" },
  { domain: "AI governance", count: 3, note: "MSc dissertation, AuditAI, EIREVAL" },
];
