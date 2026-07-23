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
      "Led a 6-person team delivering corporate strategy and stakeholder-engagement frameworks for a UNESCO water-access programme. The programme team kept using them after handover.",
    tools: [
      "Stakeholder management",
      "Requirements gathering",
      "Workshop facilitation",
      "Project planning",
      "Team leadership",
      "Excel",
    ],
  },
  {
    company: "E2open",
    role: "Associate Implementation Engineer",
    period: "Sep 2024 to Jun 2025",
    summary:
      "Delivered end-to-end data-driven implementations for Fortune 500 clients across 120+ countries in production environments: owned client calls, requirements, and configuration debugging with Python and SQL. Cut client setup time by roughly 70% with standardised configuration templates and playbooks across 3 to 4 enterprise implementations. Built Power BI financial dashboards that surfaced client business performance for stakeholder decisions.",
    tools: [
      "Python",
      "SQL",
      "APIs",
      "Power BI",
      "Data pipelines",
      "ETL",
      "Root cause analysis",
      "Agile",
      "Client delivery",
    ],
  },
  {
    company: "iQube R&D Hub",
    role: "Product Manager",
    period: "Sep 2021 to Dec 2023",
    summary:
      "Shipped 4 to 5 machine learning features to 10,000+ production users, including ML-powered image classification and an NLP customer-service bot, raising CSAT from 3.2 to 4.6. Led and mentored an 8 to 10 person engineering and design team; authored 3 to 4 PRDs and 2 roadmaps.",
    tools: [
      "Python",
      "TensorFlow",
      "NLP",
      "Computer vision",
      "SQL",
      "PRDs",
      "Roadmapping",
      "Agile & Jira",
      "Mentoring",
    ],
  },
  {
    company: "IIT Madras",
    role: "Research Intern",
    period: "Jun 2023 to Aug 2023",
    summary:
      "Conducted statistical analysis and data mining on a 500+ participant behavioural dataset for a character-strengths research project at the Department of Management Studies.",
    tools: ["Python", "Pandas", "Statistical analysis", "EDA", "Data mining", "Research methods"],
  },
  {
    company: "Samsung R&D (PRISM)",
    role: "ML Research Intern",
    period: "Nov 2022 to Mar 2023",
    summary:
      "Achieved 90%+ accuracy on a code-optimisation classification model recommending time and space complexity reductions, validated on 100 to 200 real company code samples.",
    tools: ["Python", "NLP", "TensorFlow", "Model evaluation", "Research", "Technical writing"],
  },
];
