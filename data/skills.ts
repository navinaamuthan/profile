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
      { name: "Java", emphasis: true },
      { name: "JavaScript", emphasis: true, projects: ["Nova", "IGNITRIX"] },
      { name: "C", emphasis: true },
      { name: "TypeScript", projects: ["Nova", "AuditAI"] },
      { name: "SQL", emphasis: true },
      { name: "R" },
      { name: "MATLAB" },
      { name: "Bash" },
    ],
  },
  {
    id: "genai",
    label: "GenAI, RAG & agents",
    icon: "sparkle",
    color: "#8B6914",
    skills: [
      { name: "LLM APIs (OpenAI, Anthropic)", emphasis: true, projects: ["AuditAI", "PPD Talkbot (Chatner)"] },
      { name: "RAG pipelines", emphasis: true, projects: ["IGNITRIX"] },
      { name: "Agentic AI (MCP, LangGraph, Google ADK)", emphasis: true, projects: ["IGNITRIX"] },
      { name: "Prompt engineering & prompt management", projects: ["Few-Shot Learning with LLMs"] },
      { name: "Embeddings & retrieval grounding", projects: ["IGNITRIX"] },
      { name: "Evaluation harnesses", projects: ["EIREVAL"] },
      { name: "Safety & bias mitigations", projects: ["AuditAI"] },
      { name: "Fine-tuning", projects: ["PPD Talkbot (Chatner)"] },
      { name: "Hugging Face" },
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
      { name: "Modular, maintainable design", projects: ["IGNITRIX", "AuditAI"] },
      { name: "Error handling & observability", projects: ["IGNITRIX"] },
      { name: "Documentation for reliability", projects: ["AuditAI"] },
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
      { name: "Dashboard UX", projects: ["AuditAI"] },
      { name: "Responsive layouts", projects: ["Nova"] },
      { name: "Vite", projects: ["Nova"] },
    ],
  },
  {
    id: "mlops",
    label: "MLOps & cloud",
    icon: "database",
    color: "#3D5A4C",
    skills: [
      { name: "Azure", emphasis: true },
      { name: "AWS" },
      { name: "Google Cloud & Vertex AI", projects: ["IGNITRIX"] },
      { name: "CI/CD for ML services", projects: ["EIREVAL"] },
      { name: "Model lifecycle: experiment → evaluate → deploy → monitor", projects: ["AuditAI", "EIREVAL"] },
      { name: "Monitoring: quality, bias, performance, cost", projects: ["AuditAI"] },
      { name: "Data pipelines & ETL" },
      { name: "PostgreSQL" },
      { name: "Firebase", projects: ["IGNITRIX"] },
    ],
  },
  {
    id: "data-science",
    label: "Data science & analysis",
    icon: "chart",
    color: "#1E3A8A",
    skills: [
      { name: "SQL (advanced)", emphasis: true },
      { name: "Python (Pandas, NumPy)", emphasis: true },
      { name: "Exploratory data analysis", projects: ["PPD Talkbot (Chatner)"] },
      { name: "Reporting & actionable insights" },
      { name: "A/B testing" },
      { name: "Statistical analysis" },
    ],
  },
  {
    id: "bi",
    label: "BI & visualisation",
    icon: "kanban",
    color: "#B08D57",
    skills: [
      { name: "Power BI", emphasis: true },
      { name: "Excel (advanced)", emphasis: true },
      { name: "Tableau", emphasis: true },
      { name: "Dashboard design", projects: ["AuditAI"] },
      { name: "Reporting & stakeholder visuals" },
      { name: "Jupyter Notebooks" },
      { name: "Recharts", projects: ["AuditAI"] },
    ],
  },
  {
    id: "governance",
    label: "Security, reliability & AI governance",
    icon: "shield",
    color: "#2F5D50",
    skills: [
      { name: "Enterprise security & data handling", projects: ["IGNITRIX", "AuditAI"] },
      { name: "Secure service design", projects: ["IGNITRIX"] },
      { name: "EU AI Act", projects: ["AuditAI", "EIREVAL"] },
      { name: "GDPR (certified)" },
      { name: "Responsible AI frameworks", projects: ["AuditAI"] },
      { name: "Risk assessment & compliance reporting", projects: ["AuditAI"] },
    ],
  },
];

/**
 * Counted from the projects and roles on this site, so the chart stays honest:
 * each count is the number of projects or jobs above that evidence the domain.
 */
export const evidence: { domain: string; count: number; note: string; color: string }[] = [
  { domain: "Software & APIs", color: "#1B3A4B", count: 5, note: "IGNITRIX, AuditAI, Nova, PPD Talkbot, E2open production delivery" },
  { domain: "GenAI & agents", color: "#8B6914", count: 4, note: "IGNITRIX, EIREVAL, Few-Shot LLMs, AuditAI" },
  { domain: "Machine learning", color: "#5C7C6A", count: 7, note: "PPD Talkbot, autism screening, traffic CV, Samsung NLP, iQube features, smart farming, Lublin chatbot" },
  { domain: "Data & analytics", color: "#1E3A8A", count: 4, note: "E2open dashboards, IIT Madras research, iQube analytics, AuditAI metrics" },
  { domain: "AI governance", color: "#2F5D50", count: 3, note: "MSc dissertation, AuditAI, EIREVAL" },
];
