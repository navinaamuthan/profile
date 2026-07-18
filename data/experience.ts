export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  tools: string[];
};

export const experience: Experience[] = [
  {
    company: "LEWAP / Ps-Eau (UNESCO)",
    role: "Project Lead",
    period: "Apr 2026 to Jun 2026",
    summary:
      "Led a team of 6 building strategy and stakeholder frameworks for a UNESCO water access programme. The programme team kept using them after handover.",
    tools: ["Strategy frameworks", "Stakeholder analysis", "Requirements gathering", "Workshop facilitation", "Project planning", "Team leadership", "Excel"],
  },
  {
    company: "E2open",
    role: "Associate Implementation Engineer",
    period: "Sep 2024 to Jun 2025",
    summary:
      "Owned technical delivery for Fortune 500 clients across 120+ countries: Python scripts, SQL pipelines, API integration debugging, and root cause analysis explained to client VPs in language they could act on. Systematised configuration work that used to be bespoke every time, cutting setup time by roughly 70%, and built the financial dashboards clients saw.",
    tools: ["Python", "SQL", "APIs", "Power BI", "Excel", "Data pipelines", "ETL", "Root cause analysis", "Client consulting", "Agile"],
  },
  {
    company: "iQube, R&D Hub",
    role: "Product Manager",
    period: "Sep 2021 to Dec 2023",
    summary:
      "Led 8 to 10 engineers and designers on a platform that grew past 10,000 users. Shipped 4 to 5 AI/ML features from discovery to launch; CSAT moved from 3.2 to 4.6.",
    tools: ["Python", "TensorFlow", "NLP", "Computer vision", "SQL", "Analytics", "Roadmapping", "User research", "Agile & Jira"],
  },
  {
    company: "IIT Madras",
    role: "Research Intern",
    period: "Jun 2023 to Aug 2023",
    summary:
      "Analysed behavioural data from 500+ study participants and turned noisy human signals into research-grade findings.",
    tools: ["Python", "Pandas", "Statistical analysis", "EDA", "Data mining", "Research methods"],
  },
  {
    company: "Samsung R&D (PRISM)",
    role: "ML Research Intern",
    period: "Nov 2022 to Mar 2023",
    summary:
      "Built an NLP model against a hard accuracy bar, because below it the feature would not ship. Delivered at 90%+.",
    tools: ["Python", "NLP", "TensorFlow", "Model evaluation", "Research", "Technical writing"],
  },
];
