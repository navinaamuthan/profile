export type Skill = {
  name: string;
  projects?: string[];
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "product",
    label: "Product",
    skills: [
      { name: "Strategy", projects: ["Atlas PRD"] },
      { name: "Roadmaps", projects: ["Atlas PRD"] },
      { name: "PRDs", projects: ["Atlas PRD"] },
      { name: "Backlog Management" },
      { name: "Feature Prioritisation" },
      { name: "RICE / MoSCoW" },
      { name: "KPI Definition" },
      { name: "Product Metrics" },
      { name: "A/B Testing" },
      { name: "Stakeholders" },
      { name: "Launch" },
      { name: "Agile" },
      { name: "User insights" },
      { name: "Automation" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Python", projects: ["AuditAI", "IGNITRIX"] },
      { name: "SQL" },
      { name: "Java" },
      { name: "JavaScript", projects: ["Nova", "IGNITRIX"] },
      { name: "TypeScript", projects: ["Nova", "AuditAI"] },
      { name: "C" },
      { name: "R" },
      { name: "MATLAB" },
      { name: "Bash" },
    ],
  },
  {
    id: "data",
    label: "Data",
    skills: [
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "Excel" },
      { name: "Snowflake" },
      { name: "ETL" },
      { name: "Data Modeling" },
      { name: "Statistical Analysis" },
      { name: "Hypothesis Testing" },
      { name: "PostgreSQL" },
      { name: "Spark" },
      { name: "AWS" },
      { name: "Azure" },
      { name: "GCP", projects: ["IGNITRIX"] },
      { name: "Firebase", projects: ["IGNITRIX"] },
    ],
  },
  {
    id: "ai",
    label: "AI & ML",
    skills: [
      { name: "MCP (Model Context Protocol)", projects: ["IGNITRIX"] },
      { name: "Multi-Agent Systems", projects: ["IGNITRIX"] },
      { name: "Tool-calling", projects: ["IGNITRIX"] },
      { name: "Function Calling", projects: ["IGNITRIX"] },
      { name: "Prompt Engineering", projects: ["Few-Shot Learning with LLMs"] },
      { name: "LangChain" },
      { name: "LLMs", projects: ["AuditAI", "PPD Talkbot (Chatner)"] },
      { name: "RAG", projects: ["IGNITRIX", "AIEF"] },
      { name: "Fine-tuning", projects: ["PPD Talkbot (Chatner)"] },
      { name: "Evaluation", projects: ["EIREVAL"] },
      { name: "scikit-learn", projects: ["AuditAI", "Omdena: Autism Prediction in Toddlers"] },
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "XGBoost" },
      { name: "NLP", projects: ["PPD Talkbot (Chatner)", "Omdena: Inflation-Coping Chatbot for Lublin"] },
      { name: "Computer vision", projects: ["Traffic Detection Visual System"] },
    ],
  },
  {
    id: "engineering",
    label: "Software",
    skills: [
      { name: "System Design" },
      { name: "Distributed Systems" },
      { name: "REST APIs", projects: ["IGNITRIX"] },
      { name: "SQL Server" },
      { name: "Relational Databases" },
      { name: "Node.js", projects: ["IGNITRIX"] },
      { name: "Express.js", projects: ["IGNITRIX"] },
      { name: "React", projects: ["Nova", "IGNITRIX"] },
      { name: "Next.js", projects: ["AuditAI", "Nova", "AIEF"] },
      { name: "Docker" },
      { name: "Git & CI/CD" },
      { name: "Testing", projects: ["EIREVAL"] },
    ],
  },
  {
    id: "governance",
    label: "Governance",
    skills: [
      { name: "Bias Detection", projects: ["AuditAI"] },
      { name: "Fairness", projects: ["AuditAI"] },
      { name: "Model Interpretability", projects: ["AuditAI"] },
      { name: "Data Privacy" },
      { name: "EU AI Act", projects: ["AuditAI", "EIREVAL", "AIEF"] },
      { name: "GDPR" },
      { name: "Responsible AI", projects: ["AuditAI", "AIEF"] },
      { name: "Credit risk", projects: ["AuditAI"] },
      { name: "Secure design", projects: ["IGNITRIX"] },
    ],
  },
];
