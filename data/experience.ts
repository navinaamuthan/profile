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
      "Led a six-person team on corporate strategy and stakeholder engagement for a UNESCO water-access programme. Facilitated workshops, gathered requirements across partners, and left frameworks the programme team continued to use after handover.",
    tools: [
      "Stakeholder management",
      "Requirements gathering",
      "Workshop facilitation",
      "Project planning",
      "Team leadership",
    ],
  },
  {
    company: "E2open",
    role: "Associate Implementation Engineer",
    period: "Sep 2024 to Jun 2025",
    summary:
      "Owned the delivery lifecycle for client-facing data platforms: discovery, requirements, configuration, API integrations, and post-launch support for Fortune 500 accounts across 120+ countries. Reduced onboarding time by about 70% with standard templates and playbooks. Built Power BI reporting and scheduled operational dashboards used for day-to-day decisions, with attention to data quality and delivery controls.",
    tools: [
      "Python",
      "SQL",
      "APIs",
      "Power BI",
      "ETL",
      "Client delivery",
      "Onboarding",
      "Agile",
      "Data quality",
    ],
  },
  {
    company: "iQube R&D Hub",
    role: "Product Manager",
    period: "Sep 2021 to Dec 2023",
    summary:
      "Defined product strategy and roadmap for AI-led features, working with engineering and design to launch 4 to 5 machine learning capabilities to 10,000+ users, including image classification and an NLP support assistant. CSAT moved from 3.2 to 4.6. Led an 8 to 10 person team; wrote PRDs, prioritised against client feedback and technical feasibility, and coordinated delivery in an agile process.",
    tools: [
      "Product strategy",
      "Roadmapping",
      "PRDs",
      "Python",
      "NLP",
      "Computer vision",
      "Analytics",
      "Agile & Jira",
      "Mentoring",
    ],
  },
  {
    company: "IIT Madras",
    role: "Research Intern",
    period: "Jun 2023 to Aug 2023",
    summary:
      "Statistical analysis and data mining on a 500+ participant behavioural dataset at the Department of Management Studies, turning raw research data into findings the faculty team could use.",
    tools: ["Python", "Pandas", "Statistical analysis", "EDA"],
  },
  {
    company: "Samsung R&D (PRISM)",
    role: "ML Research Intern",
    period: "Nov 2022 to Mar 2023",
    summary:
      "Built a code-optimisation classification model recommending time and space complexity improvements, reaching 90%+ accuracy on 100 to 200 internal code samples and documenting results for the research team.",
    tools: ["Python", "NLP", "TensorFlow", "Model evaluation"],
  },
];
