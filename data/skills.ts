export type Skill = {
  name: string;
  /** Names of projects (from data/projects.ts) where this skill is visible. */
  projects?: string[];
};

export type SkillCategory = {
  id: string;
  label: string;
  note: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "data-science",
    label: "Data science",
    note: "The day-to-day craft: interrogating data until it gives a straight answer.",
    skills: [
      { name: "Statistical analysis" },
      { name: "Predictive modelling", projects: ["Omdena: Autism Prediction in Toddlers", "PPD Talkbot (Chatner)"] },
      { name: "Exploratory data analysis", projects: ["PPD Talkbot (Chatner)"] },
      { name: "A/B testing & experimentation" },
      { name: "Data mining" },
      { name: "Large dataset processing" },
      { name: "Data storytelling" },
      { name: "Python (Pandas, NumPy)" },
      { name: "SQL (advanced)" },
      { name: "R" },
    ],
  },
  {
    id: "ml-ai",
    label: "Machine learning & AI",
    note: "Built and shipped, not just coursework.",
    skills: [
      { name: "scikit-learn", projects: ["AuditAI", "Omdena: Autism Prediction in Toddlers"] },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "NLP", projects: ["PPD Talkbot (Chatner)", "Omdena: Inflation-Coping Chatbot for Lublin"] },
      { name: "Computer vision", projects: ["Traffic Detection Visual System"] },
      { name: "Model evaluation & tuning", projects: ["EIREVAL"] },
      { name: "Fine-tuning", projects: ["PPD Talkbot (Chatner)"] },
      { name: "Prompt engineering", projects: ["Few-Shot Learning with LLMs"] },
      { name: "LLMs (OpenAI, Anthropic, Llama, Gemini)", projects: ["AuditAI", "Few-Shot Learning with LLMs"] },
      { name: "Agentic systems (MCP, LangGraph, Google ADK)", projects: ["IGNITRIX"] },
      { name: "LLM evaluation", projects: ["EIREVAL", "Few-Shot Learning with LLMs"] },
      { name: "Responsible AI & EU AI Act", projects: ["AuditAI", "EIREVAL"] },
      { name: "Fairness auditing", projects: ["AuditAI"] },
    ],
  },
  {
    id: "engineering",
    label: "Engineering & cloud",
    note: "Where the models actually have to run.",
    skills: [
      { name: "Google Cloud & Vertex AI", projects: ["IGNITRIX"] },
      { name: "AWS" },
      { name: "Azure" },
      { name: "Spark" },
      { name: "Hadoop" },
      { name: "Data pipelines & ETL" },
      { name: "Docker" },
      { name: "Git & CI/CD" },
      { name: "gRPC" },
      { name: "TypeScript & React", projects: ["Nova", "AuditAI"] },
      { name: "Streamlit", projects: ["Few-Shot Learning with LLMs"] },
      { name: "Java" },
      { name: "Go" },
    ],
  },
  {
    id: "bi",
    label: "BI & visualisation",
    note: "If a decision-maker cannot read it, it does not count.",
    skills: [
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "Excel modelling" },
      { name: "Dashboard design", projects: ["AuditAI"] },
      { name: "KPI & metric design", projects: ["Atlas PRD"] },
    ],
  },
  {
    id: "product",
    label: "Product & delivery",
    note: "Two years of it, with a CSAT curve to show for it.",
    skills: [
      { name: "Product discovery & roadmaps" },
      { name: "PRDs & product specs", projects: ["Atlas PRD"] },
      { name: "User research & feedback loops" },
      { name: "Fortune 500 client consulting" },
      { name: "Stakeholder management" },
      { name: "Team leadership (8 to 10)" },
      { name: "Agile delivery" },
      { name: "Coaching & mentoring" },
    ],
  },
];
