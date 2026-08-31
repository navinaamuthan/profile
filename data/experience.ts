export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
  tools: string[];
};

export const experience: Experience[] = [
  {
    company: "pS-Eau (LEWAP / UNESCO)",
    role: "Project Lead",
    period: "Feb 2026 to May 2026",
    summary:
      "Led end-to-end delivery for a UNESCO-backed initiative supporting the Lebanese Water Actors Platform (LEWAP), owning scope, timeline, and stakeholder relationships independently.",
    points: [
      "Owned stakeholder engagement across senior leadership, including communication cadence and dependency mapping for a multi-party international programme",
      "Designed governance frameworks and scalable outreach systems that moved the organisation closer to financial independence",
      "Automated data collection and reporting pipelines in Python, cutting manual processing overhead by 40%",
      "Operated in an ambiguous, fast-moving environment, turning undefined scope into structured deliverables on a fixed timeline",
    ],
    tools: ["Stakeholder engagement", "Product management", "Python", "Governance", "Reporting"],
  },
  {
    company: "e2open",
    role: "Product Engineer (Implementation), Planning Suite",
    period: "Aug 2024 to Jul 2025",
    summary:
      "Owned enterprise systems implementation and data pipeline management for global supply chain clients spanning 120+ countries.",
    points: [
      "Improved ML model efficiency by 80% by redesigning core planning logic for three Fortune 500 clients",
      "Cut operational overhead 25% across 100,000+ records by building automation scripts across 6+ external logistics providers",
      "Delivered financial dashboards and reporting used by client leadership for revenue and cost tracking",
      "Worked at the intersection of enterprise SaaS delivery and data engineering, translating operational processes into scalable pipelines",
    ],
    tools: [
      "Business intelligence",
      "Python",
      "ML",
      "Data pipelines",
      "Productisation",
      "Client delivery",
    ],
  },
  {
    company: "White House India",
    role: "Business Analyst",
    period: "Jan 2024 to Aug 2024",
    summary:
      "Owned end-to-end business analysis on-site in Chennai, turning production, inventory, and demand data into recommendations for planning and operations teams.",
    points: [
      "Analysed production line and inventory data to identify inefficiencies and demand patterns, presenting findings to planning and merchandising stakeholders",
      "Built early-stage forecasting models on operational datasets, validating outputs against actual production and inventory outcomes",
      "Partnered with merchandising, planning, and operations to scope ambiguous questions into structured, data-backed analysis",
      "Worked hands-on with manufacturing data under tooling constraints, using Python and statistical methods without dedicated data infrastructure",
      "Documented findings and process gaps, contributing to clearer decision-making across cross-functional teams",
    ],
    tools: ["Product management", "Data science", "Python", "Forecasting", "Stakeholder communication"],
  },
  {
    company: "iQube Innovation Center",
    role: "Product Manager, AI/ML Team",
    period: "Feb 2021 to Dec 2023",
    summary:
      "Owned product vision and roadmap for four production AI systems used by 10,000+ people, leading a cross-functional team of 12+ engineers and researchers from discovery to launch.",
    points: [
      "Lifted CSAT from 3.2 to 4.6 by defining success metrics before launch and iterating on evidence",
      "Ran six concurrent AI product initiatives while cutting iteration cycles by 35%",
      "Shipped a chatbot, NLP recommendation engine, ML prediction model, and agent-based automation, generating about €110K in platform revenue",
      "Bridged AI research and shippable product across discovery, delivery, and launch",
    ],
    tools: ["Product management", "Agile delivery", "NLP", "Machine learning", "Roadmapping", "Analytics"],
  },
  {
    company: "Indian Institute of Technology Madras",
    role: "Summer Research Intern",
    period: "Jun 2023 to Aug 2023",
    summary:
      "Applied ensemble machine learning methods to real-world behavioural datasets under academic supervision.",
    points: [
      "Built ensemble models (Random Forest, XGBoost) reaching 92% predictive accuracy on 500+ records",
      "Handled sensitive participant data with methodological rigor, informing later work on responsible data handling and AI governance",
    ],
    tools: ["Random Forest", "XGBoost", "Statistical analysis", "Python"],
  },
  {
    company: "Samsung R&D Institute India",
    role: "Generative AI and Data, Research Intern",
    period: "Nov 2022 to Apr 2023",
    summary:
      "Combined LLM engineering with systems-level optimisation inside Samsung's research infrastructure.",
    points: [
      "Engineered a generative AI chatbot from architecture and prompt design through deployment",
      "Built a pipeline to optimise energy efficiency for code execution, reducing the computational cost of production workloads",
      "Improved production Python algorithm performance by 65%",
      "Built real-time performance monitoring dashboards adopted for operational visibility",
    ],
    tools: ["Python", "Generative AI", "Software development", "Monitoring"],
  },
  {
    company: "Omdena",
    role: "ML Engineer",
    period: "Oct 2022 to Mar 2023",
    summary:
      "Machine learning engineer across Omdena chapters, contributing to a Lublin cost-of-living chatbot and a funded open-source project classifying fake news in a Mongolian political context.",
    points: [
      "Worked with data collection and ML teams to curate datasets, develop pipelines, and integrate components on a distributed global team",
      "Served as lead ML engineer on a funded fake-news classification project, ranking GPT-4 Turbo rationale embeddings with Pinecone and reducing latency by 15%",
      "Fine-tuned the SLM ComprehendIt on Hugging Face, improving accuracy by 10% using web-scraped Mongolian rationales",
    ],
    tools: ["Machine learning", "NLP", "Pinecone", "Hugging Face", "Python"],
  },
];
