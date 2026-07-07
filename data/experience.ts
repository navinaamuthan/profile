export type Experience = {
  company: string;
  role: string;
  period: string;
  challenge: string;
  actions: string[];
  impact: string;
  tech: string[];
  lesson: string;
};

export const experience: Experience[] = [
  {
    company: "LEWAP / Ps-Eau (UNESCO)",
    role: "Project Lead (pro bono)",
    period: "Apr 2026 to Jun 2026",
    challenge:
      "A UNESCO water access program needed corporate strategy and stakeholder alignment across partners with very different incentives.",
    actions: [
      "Led a team of 6 across strategy, analysis and stakeholder frameworks",
      "Built analysis and decision frameworks the program could reuse after handover",
    ],
    impact: "Delivered a strategy and stakeholder framework adopted by the program team.",
    tech: ["Strategy", "Stakeholder analysis", "Frameworks"],
    lesson: "Alignment is a deliverable. Treat it like one.",
  },
  {
    company: "E2open",
    role: "Associate Implementation Engineer",
    period: "Sep 2024 to Jun 2025",
    challenge:
      "Fortune 500 supply chain implementations spanning 120+ countries, where setup time was the bottleneck between contract and value.",
    actions: [
      "Delivered 3 to 4 Fortune 500 client implementations end to end",
      "Systematised configuration work that used to be bespoke every time",
      "Built financial dashboards that turned implementation data into client-facing answers",
    ],
    impact: "Cut setup time by roughly 70% across implementations.",
    tech: ["Supply chain systems", "Data mapping", "Client delivery"],
    lesson: "Enterprise customers do not buy software. They buy time to value.",
  },
  {
    company: "iQube - R&D Hub",
    role: "Product Manager",
    period: "Sep 2021 to Dec 2023",
    challenge:
      "A 10,000+ user platform with middling satisfaction and a backlog of AI ideas nobody had validated.",
    actions: [
      "Led a team of 8 to 10 engineers and designers",
      "Shipped 4 to 5 AI/ML features from discovery to launch",
      "Instrumented feedback loops so every release answered a question",
    ],
    impact: "CSAT moved from 3.2 to 4.6 while the user base grew past 10,000.",
    tech: ["Product discovery", "ML features", "Analytics", "Roadmapping"],
    lesson: "Users forgive missing features. They do not forgive ignored feedback.",
  },
  {
    company: "IIT Madras",
    role: "Research Intern",
    period: "Jun 2023 to Aug 2023",
    challenge: "Making sense of psychological and behavioral data at human scale.",
    actions: ["Analysed behavioral data from 500+ participants", "Turned messy human signals into defensible findings"],
    impact: "Research-grade analysis on a 500+ participant dataset.",
    tech: ["Statistical analysis", "Behavioral data", "Research methods"],
    lesson: "Human data is noisy because humans are. Design for it.",
  },
  {
    company: "Samsung R&D (PRISM)",
    role: "ML Research Intern",
    period: "Nov 2022 to Mar 2023",
    challenge: "An NLP problem where accuracy below the bar meant the feature simply would not ship.",
    actions: ["Built and iterated an NLP model against a hard accuracy target"],
    impact: "Delivered an NLP model with 90%+ accuracy.",
    tech: ["NLP", "Python", "Model evaluation"],
    lesson: "A model is a product decision wearing a lab coat.",
  },
];
