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
    color: "#0071E3",
    skills: [
      { name: "Java", emphasis: true },
      { name: "C", emphasis: true },
      { name: "JavaScript", emphasis: true, projects: ["Nova", "IGNITRIX"] },
      { name: "Python", emphasis: true, projects: ["AuditAI", "IGNITRIX"] },
      { name: "TypeScript", projects: ["Nova", "AuditAI"] },
      { name: "SQL" },
      { name: "R" },
      { name: "MATLAB" },
      { name: "Bash" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend & UX",
    icon: "grid",
    color: "#0F8B8D",
    skills: [
      { name: "React", emphasis: true, projects: ["Nova", "IGNITRIX"] },
      { name: "Next.js", projects: ["AuditAI", "Nova"] },
      { name: "Component design", projects: ["IGNITRIX", "AuditAI"] },
      { name: "TypeScript UI", projects: ["AuditAI"] },
      { name: "Responsive layouts", projects: ["Nova"] },
      { name: "Dashboard UX", projects: ["AuditAI"] },
      { name: "Vite", projects: ["Nova"] },
    ],
  },
  {
    id: "engineering",
    label: "Software engineering",
    icon: "cloud",
    color: "#0B7285",
    skills: [
      { name: "Node.js", projects: ["IGNITRIX"] },
      { name: "RESTful APIs" },
      { name: "Modular service design", projects: ["IGNITRIX", "AuditAI"] },
      { name: "Error handling & observability", projects: ["IGNITRIX"] },
      { name: "Git & CI/CD" },
      { name: "Docker" },
      { name: "Automated testing mindset", projects: ["EIREVAL"] },
      { name: "Secure by design", projects: ["IGNITRIX", "AuditAI"] },
    ],
  },
  {
    id: "genai",
    label: "GenAI & agents",
    icon: "sparkle",
    color: "#7048E8",
    skills: [
      { name: "LLM APIs (OpenAI, Anthropic)", projects: ["AuditAI", "PPD Talkbot (Chatner)"] },
      { name: "Agentic AI (MCP, LangGraph, Google ADK)", projects: ["IGNITRIX"] },
      { name: "Prompt engineering", projects: ["Few-Shot Learning with LLMs"] },
      { name: "RAG frameworks", projects: ["IGNITRIX"] },
      { name: "Evaluation frameworks & ground truth datasets", projects: ["EIREVAL"] },
      { name: "Hugging Face" },
      { name: "Fine-tuning", projects: ["PPD Talkbot (Chatner)"] },
    ],
  },
  {
    id: "ml",
    label: "Machine learning",
    icon: "branch",
    color: "#3B5BDB",
    skills: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "scikit-learn", projects: ["AuditAI", "Omdena: Autism Prediction in Toddlers"] },
      { name: "XGBoost & Random Forest" },
      { name: "NLP", projects: ["PPD Talkbot (Chatner)", "Omdena: Inflation-Coping Chatbot for Lublin"] },
      { name: "Computer vision", projects: ["Traffic Detection Visual System"] },
      { name: "Model validation & monitoring" },
    ],
  },
  {
    id: "data-science",
    label: "Data science & analysis",
    icon: "chart",
    color: "#1E3A8A",
    skills: [
      { name: "Python (Pandas, NumPy)" },
      { name: "SQL (advanced)" },
      { name: "Exploratory data analysis", projects: ["PPD Talkbot (Chatner)"] },
      { name: "A/B testing" },
      { name: "Data mining" },
      { name: "Statistical analysis" },
    ],
  },
  {
    id: "data-eng",
    label: "Data engineering & cloud",
    icon: "database",
    color: "#D97706",
    skills: [
      { name: "PostgreSQL" },
      { name: "Data pipelines & ETL" },
      { name: "Spark & Hadoop" },
      { name: "API integration" },
      { name: "AWS" },
      { name: "Azure" },
      { name: "Google Cloud & Vertex AI", projects: ["IGNITRIX"] },
      { name: "MongoDB" },
      { name: "Firebase", projects: ["IGNITRIX"] },
    ],
  },
  {
    id: "bi",
    label: "BI & visualisation",
    icon: "kanban",
    color: "#E4573D",
    skills: [
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "Excel (advanced)" },
      { name: "Jupyter Notebooks" },
      { name: "Dashboard design", projects: ["AuditAI"] },
      { name: "Recharts", projects: ["AuditAI"] },
    ],
  },
  {
    id: "governance",
    label: "Security, reliability & AI governance",
    icon: "shield",
    color: "#2F9E44",
    skills: [
      { name: "Secure service design", projects: ["IGNITRIX"] },
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
export const evidence: { domain: string; count: number; note: string; color: string }[] = [
  { domain: "Full-stack software", color: "#0071E3", count: 5, note: "IGNITRIX, AuditAI, Nova, PPD Talkbot, Atlas" },
  { domain: "Machine learning", color: "#3B5BDB", count: 7, note: "PPD Talkbot, autism screening, traffic CV, Samsung NLP, iQube features, smart farming, Lublin chatbot" },
  { domain: "GenAI & agents", color: "#7048E8", count: 4, note: "IGNITRIX, EIREVAL, Few-Shot LLMs, AuditAI" },
  { domain: "Data & analytics", color: "#1E3A8A", count: 4, note: "E2open dashboards, IIT Madras research, iQube analytics, AuditAI metrics" },
  { domain: "AI governance", color: "#2F9E44", count: 3, note: "MSc dissertation, AuditAI, EIREVAL" },
];
