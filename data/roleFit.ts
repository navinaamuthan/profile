export type RoleFit = {
  id: string;
  employer: string;
  role: string;
  priority: "primary" | "secondary";
  summary: string;
  matches: string[];
};

/** Dual-track ATS signals for recruiters scanning the page. */
export const roleFits: RoleFit[] = [
  {
    id: "microsoft-se",
    employer: "Microsoft-style SE",
    role: "Software Engineer · full-stack / Identity UX",
    priority: "primary",
    summary:
      "Full-stack end-to-end UX: React components, clean APIs, secure gateways, modular services, and production reliability.",
    matches: [
      "React",
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C",
      "Node.js",
      "REST APIs",
      "Component design",
      "Secure by design",
      "Error handling",
      "CI/CD",
    ],
  },
  {
    id: "jpmc-aiml",
    employer: "J.P. Morgan-style AI/ML",
    role: "AI/ML Associate Engineer",
    priority: "primary",
    summary:
      "Production software for AI/ML: RAG, agents, evaluation harnesses, Python/Java, APIs, Docker, Azure, monitoring for quality and bias.",
    matches: [
      "Python",
      "Java",
      "RAG pipelines",
      "LLM APIs",
      "Agentic AI",
      "Evaluation harnesses",
      "scikit-learn",
      "PyTorch",
      "REST APIs",
      "Docker",
      "CI/CD",
      "Azure",
      "Bias monitoring",
      "Enterprise governance",
    ],
  },
  {
    id: "analyst",
    employer: "Analyst track",
    role: "Data / Business Analyst",
    priority: "secondary",
    summary:
      "SQL, Excel, Power BI and Tableau: turning production data into stakeholder-ready insights (E2open Fortune 500 delivery).",
    matches: ["SQL", "Excel", "Power BI", "Tableau", "Python", "Reporting", "Dashboards"],
  },
];
