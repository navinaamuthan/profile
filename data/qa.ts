import { personal } from "@/data/personal";

export type NaviLink = { label: string; href: string };
export type NaviAnswer = { text: string; links?: NaviLink[] };

type Entry = {
  /** Single words that count 1 point each when found in the question. */
  keywords: string[];
  /** Phrases that count 2 points each. */
  phrases?: string[];
  answer: NaviAnswer;
};

const entries: Entry[] = [
  {
    keywords: ["visa", "sponsorship", "sponsor", "authorisation", "authorization", "permit", "eligible"],
    phrases: ["work authorisation", "right to work"],
    answer: {
      text: "No sponsorship required. Navina holds a valid visa and is based in Dublin, so hiring her works like hiring any local candidate.",
    },
  },
  {
    keywords: ["experience", "background", "career", "worked", "history", "summary"],
    phrases: ["tell me about", "who is navina"],
    answer: {
      text: "Short version: MSc Computer Science at Trinity College Dublin (Distinction). Product Manager for AI/ML at iQube, leading 12+ engineers and launching four production systems to 10,000+ users. Product Engineer at e2open, implementing planning systems for clients across 120+ countries. Also: business analysis at White House India, project lead on a UNESCO-backed pS-Eau programme, and ML research at Samsung and IIT Madras.",
      links: [{ label: "Experience section", href: "#experience" }],
    },
  },
  {
    keywords: ["e2open", "implementation", "supply", "chain", "fortune"],
    answer: {
      text: "At e2open (Aug 2024 to Jul 2025) as Product Engineer (Implementation) on the Planning Suite she owned enterprise implementation and data pipelines for supply chain clients across 120+ countries. She improved ML model efficiency by 80% for three Fortune 500 clients, cut operational overhead 25% across 100,000+ records, and delivered financial dashboards used by client leadership.",
      links: [{ label: "Experience section", href: "#experience" }],
    },
  },
  {
    keywords: ["product", "roadmap", "prd", "stakeholder", "launch", "onboarding", "pm"],
    phrases: ["product manager", "product management", "product experience"],
    answer: {
      text: "As Product Manager for the AI/ML team at iQube (Feb 2021 to Dec 2023) she owned vision and roadmap for four production AI systems used by 10,000+ people, leading 12+ engineers and researchers. CSAT moved from 3.2 to 4.6. She shipped a chatbot, NLP recommender, ML prediction model, and agent-based automation, generating about €110K in platform revenue. At e2open she owned client implementation and data pipelines. Atlas is a full product spec published as a live site.",
      links: [
        { label: "Experience", href: "#experience" },
        { label: "Atlas", href: "https://atlas-prd.vercel.app" },
      ],
    },
  },
  {
    keywords: ["ignitrix", "agent", "agentic", "adversarial", "maya", "nash", "hackathon", "google"],
    answer: {
      text: "IGNITRIX is a full-stack dual-agent financial advisor built in 48 hours at the Google Cloud Agentic AI Hackathon: React frontend, Node.js gateway, Maya diagnoses financial health, Nash attacks her conclusions, MCP retrieval for grounding. Top 0.5% of 50,000+ teams, Grand Finalist, handling about 50 to 60 real users' financial data.",
      links: [
        { label: "Project card", href: "#project-ignitrix" },
        { label: "GitHub", href: "https://github.com/navinaamuthan/ignitrix-financial-dual-agent-ai" },
      ],
    },
  },
  {
    keywords: ["auditai", "audit", "fairness", "bias", "compliance"],
    answer: {
      text: "AuditAI is a full-stack EU AI Act audit product: Python services train a credit risk model, quantify bias (statistical parity, disparate impact, equalized odds), classify risk under the Act, and an LLM writes the report. Next.js and TypeScript dashboard on top. GitHub: github.com/navinaamuthan/audit-ai.",
      links: [
        { label: "Project card", href: "#project-auditai" },
        { label: "GitHub", href: "https://github.com/navinaamuthan/audit-ai" },
      ],
    },
  },
  {
    keywords: ["dissertation", "thesis", "eu", "act", "gdpr", "regulation", "regulatory"],
    phrases: ["eu ai act"],
    answer: {
      text: "Her MSc dissertation at Trinity College Dublin turned EU AI Act and GDPR obligations into a practical compliance framework and tool for early-stage research projects, with a focus on financial AI. EIREVAL, a related project, benchmarks how well LLMs actually understand Irish and EU financial regulation.",
      links: [{ label: "Writing section", href: "#writing" }],
    },
  },
  {
    keywords: ["education", "degree", "msc", "trinity", "tcd", "university", "college", "study", "studied"],
    answer: {
      text: "MSc Computer Science (Intelligent Systems) at Trinity College Dublin, finished with distinction. Before that, a B.E. in Information Science & Engineering at Anna University with a 9.2/10 CGPA.",
    },
  },
  {
    keywords: ["skills", "stack", "tools", "technologies", "tech", "python", "sql", "tableau", "know"],
    answer: {
      text: "Product, languages, data, AI and ML, software, and governance. Names that link jump to a project or certification.",
      links: [{ label: "Skills section", href: "#skills" }],
    },
  },
  {
    keywords: ["salary", "pay", "compensation", "rate", "money", "expectations"],
    answer: {
      text: "That conversation is Navina's to have, not mine. Email her and she will give you a straight answer.",
      links: [{ label: `Email ${personal.email}`, href: `mailto:${personal.email}` }],
    },
  },
  {
    keywords: ["location", "dublin", "based", "ireland", "relocate", "remote", "hybrid", "onsite"],
    answer: {
      text: "Dublin, Ireland, and available for onsite, hybrid or remote work there. For anything location-specific, email is the fastest route.",
    },
  },
  {
    keywords: ["contact", "email", "reach", "linkedin", "touch", "call", "connect"],
    answer: {
      text: `Email is fastest: ${personal.email}. LinkedIn and GitHub are linked on the page.`,
      links: [
        { label: "Email", href: `mailto:${personal.email}` },
        { label: "LinkedIn", href: personal.linkedin },
        { label: "GitHub", href: personal.github },
      ],
    },
  },
  {
    keywords: ["available", "availability", "start", "notice", "when", "open"],
    phrases: ["start date"],
    answer: {
      text: "Available immediately, Dublin based, no sponsorship needed.",
      links: [{ label: `Email ${personal.email}`, href: `mailto:${personal.email}` }],
    },
  },
  {
    keywords: ["software", "engineer", "fullstack", "full-stack", "frontend", "react", "javascript", "coding", "code", "microsoft", "identity"],
    phrases: ["software engineer", "full stack", "software engineering"],
    answer: {
      text: "She ships full-stack software: React and TypeScript UIs, Node and Python services, modular design, secure gateways, and production delivery. AuditAI and IGNITRIX are the clearest receipts; E2open shows Fortune 500 production ownership.",
      links: [
        { label: "AuditAI", href: "#project-auditai" },
        { label: "IGNITRIX", href: "#project-ignitrix" },
      ],
    },
  },
  {
    keywords: ["jpmorgan", "jpmc", "chase", "associate", "copilot", "rag", "mlops", "docker", "azure", "genai"],
    phrases: ["ai/ml", "aiml", "associate engineer", "machine learning"],
    answer: {
      text: "Production Python and Java, RAG and agent workflows (IGNITRIX), evaluation harnesses (EIREVAL), bias and fairness monitoring (AuditAI), REST APIs, Docker, CI/CD, and Azure exposure, plus enterprise governance from EU AI Act work.",
      links: [
        { label: "Skills", href: "#skills" },
        { label: "IGNITRIX", href: "#project-ignitrix" },
      ],
    },
  },
  {
    keywords: ["credit", "risk", "reporting", "mis", "ssrs", "paginated", "portfolio", "bofa", "bank"],
    phrases: ["credit risk", "risk analysis", "risk reporting", "power bi"],
    answer: {
      text: "She builds scheduled and ad-hoc reporting with SQL, Power BI, Tableau, and Excel, including Fortune 500 financial dashboards at E2open. AuditAI trains a credit-risk model, runs data-quality and fairness checks, and produces traceable risk reports. Strong on trend analysis, controls-minded documentation, and Python automation.",
      links: [
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "AuditAI", href: "#project-auditai" },
      ],
    },
  },
  {
    keywords: ["solutions", "solution", "gtech", "ads", "scale", "scaling", "client", "clients"],
    phrases: ["solutions engineer", "solutions engineering"],
    answer: {
      text: "She has owned client-facing delivery at E2open (Fortune 500, 120+ countries) and product leadership at iQube. She also builds software end to end: React, Node, Python, APIs. See AuditAI, IGNITRIX, and the Atlas product spec.",
      links: [
        { label: "Experience", href: "#experience" },
        { label: "IGNITRIX", href: "#project-ignitrix" },
      ],
    },
  },
  {
    keywords: ["analyst", "analysis", "dashboard", "reporting", "excel", "tableau", "powerbi", "insights", "visualisation", "visualization"],
    phrases: ["data analyst", "business analyst", "power bi"],
    answer: {
      text: "Data and risk reporting sit alongside her software engineering work. At E2open she owned SQL pipelines and Power BI financial dashboards for Fortune 500 stakeholders. Stack: SQL, Excel (pivots and lookups), Power BI, Tableau, Python, trend analysis, and turning messy data into decisions people can act on.",
      links: [
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
      ],
    },
  },
  {
    keywords: ["writing", "articles", "essays", "blog", "published", "read"],
    answer: {
      text: "Three pieces live on the site: a validation framework for AI-assisted consulting work, the Atlas PRD (a full product spec shipped as a website), and the MSc dissertation on EU AI Act compliance for financial AI.",
      links: [{ label: "Writing section", href: "#writing" }],
    },
  },
  {
    keywords: ["hire", "why", "fit", "strengths", "different", "special", "unique"],
    phrases: ["why should"],
    answer: {
      text: "She combines product leadership, production software, and applied AI. At iQube she set the roadmap and launched ML features to 10,000+ users. At E2open she delivered data platforms for Fortune 500 clients. IGNITRIX placed in the top 0.5% of 50,000+ teams at Google's Cloud Agentic AI Hackathon. AuditAI turns fairness and risk checks into a repeatable pipeline.",
      links: [{ label: "Selected work", href: "#work" }],
    },
  },
  {
    keywords: ["you", "bot", "llm", "chatgpt", "model", "gpt", "ai"],
    phrases: ["are you", "how do you work", "what are you"],
    answer: {
      text: "Honest answer: I am not an LLM. I am a small deterministic script matching your question against Navina's actual record, so I can never make things up about her. She builds AI you can check up on; her portfolio bot should be checkable too.",
    },
  },
  {
    keywords: ["solutions", "solution", "gtech", "ads", "client", "clients", "consulting", "scale", "troubleshoot", "troubleshooting"],
    phrases: ["solutions engineer", "solutions engineering", "client facing"],
    answer: {
      text: "Client-facing delivery is real: at E2open she owned Fortune 500 implementations across 120+ countries, writing Python and SQL, debugging integrations, then explaining root cause in plain language. For software engineering roles, pair that with her full-stack builds (React, Node, Python) on IGNITRIX and AuditAI.",
      links: [
        { label: "Experience", href: "#experience" },
        { label: "IGNITRIX", href: "#project-ignitrix" },
      ],
    },
  },
  {
    keywords: ["awards", "award", "won", "recognition", "prizes", "achievements", "hackathons"],
    answer: {
      text: "Grand Finalist (top 0.5% of 50,000+) at the Google Cloud Agentic AI Hackathon, Grand Finalist at Smart India Hackathon 2022 and the Bosch Fit.Kovai Hackathon 2022, winner of Bloomberg BPuzzled at Trinity, finalist in the Deloitte Case Competition, winner of ICT Youthtalk, and selected as a mentee for the AWS SheBuilds Mentorship Community 2026.",
      links: [{ label: "Recognition section", href: "#recognition" }],
    },
  },
  {
    keywords: ["leadership", "lead", "led", "team", "mentoring", "community", "chair"],
    answer: {
      text: "She led 12+ engineers and researchers as Product Manager for AI/ML at iQube, independently owned delivery on a UNESCO-backed pS-Eau programme, chaired her IEEE Women in Engineering chapter, and was elected Class Representative and STEM Convenor at Trinity College Dublin. FemTechConf named her a Women in Tech Ambassador. In 2026 she was selected as a mentee for the AWS SheBuilds Mentorship Community.",
      links: [{ label: "Recognition section", href: "#recognition" }],
    },
  },
  {
    keywords: ["certifications", "certification", "certified", "gdpr"],
    answer: {
      text: "GDPR certified, with an MSc dissertation that turned EU AI Act and GDPR obligations into a working compliance tool. Responsible AI is a working discipline for her, not a slide.",
      links: [{ label: "Skills section", href: "#skills" }],
    },
  },
  {
    keywords: ["atlas", "prd", "spec", "passport"],
    answer: {
      text: "Atlas is a complete product spec for a cross-border credit passport, published as a live site rather than a PDF: problem framing, user segments, success metrics, EU AI Act compliance mapping, and a rollout strategy.",
      links: [{ label: "Atlas, live", href: "https://atlas-prd.vercel.app" }],
    },
  },
  {
    keywords: ["eireval", "benchmark", "benchmarking", "evaluate", "evaluation"],
    answer: {
      text: "EIREVAL benchmarks how well LLMs actually understand Irish and EU financial regulation, built to put numbers on what models get right and where they hallucinate.",
      links: [{ label: "GitHub", href: "https://github.com/navinaamuthan/eireval" }],
    },
  },
  {
    keywords: ["samsung", "iit", "madras", "research", "intern", "internship"],
    answer: {
      text: "At Samsung R&D Institute India (Nov 2022 to Apr 2023) she built a generative AI chatbot and an energy-efficiency pipeline for code execution, improving production Python performance by 65% and shipping monitoring dashboards. At IIT Madras she applied ensemble models (Random Forest, XGBoost) to a 500+ participant behavioural dataset, reaching 92% predictive accuracy.",
      links: [{ label: "Experience section", href: "#experience" }],
    },
  },
  {
    keywords: ["projects", "work", "built", "portfolio", "case", "studies"],
    answer: {
      text: "Twelve projects live in the folder above. CV-featured first: AuditAI (github.com/navinaamuthan/audit-ai), IGNITRIX (github.com/navinaamuthan/ignitrix-financial-dual-agent-ai), and EIREVAL (github.com/navinaamuthan/eireval). Open any file for the full story.",
      links: [{ label: "Selected work", href: "#work" }],
    },
  },
];

const HELP_TEXT =
  "You can ask me things like: does she need sponsorship? what is IGNITRIX? what is her stack? why should I hire her? Commands work too: projects, skills, contact, clear.";

const commands: Record<string, NaviAnswer> = {
  help: { text: HELP_TEXT },
  contact: {
    text: `Email ${personal.email}, or LinkedIn if you prefer.`,
    links: [
      { label: "Email", href: `mailto:${personal.email}` },
      { label: "LinkedIn", href: personal.linkedin },
    ],
  },
  projects: {
    text: "Scroll up to the projects folder, or jump straight there.",
    links: [{ label: "Selected work", href: "#work" }],
  },
  skills: {
    text: "Six groups: Product, Languages, Data, AI & ML, Software, and Governance.",
    links: [{ label: "Skills", href: "#skills" }],
  },
  whoami: {
    text: "A guest on Navina's site.",
  },
};

export const suggestions = [
  "Does she need sponsorship?",
  "What is her product experience?",
  "What is her stack?",
  "What is AuditAI?",
  "What is IGNITRIX?",
];

export function answer(raw: string): NaviAnswer {
  const q = raw.trim().toLowerCase();
  const cmd = q.replace(/^\//, "");
  if (commands[cmd]) return commands[cmd];

  const words = new Set(q.replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean));
  let best: Entry | null = null;
  let bestScore = 0;
  for (const e of entries) {
    let score = 0;
    for (const k of e.keywords) if (words.has(k)) score += 1;
    for (const p of e.phrases ?? []) if (q.includes(p)) score += 2;
    if (score > bestScore) {
      bestScore = score;
      best = e;
    }
  }
  if (best && bestScore >= 1) return best.answer;
  return {
    text: "I only answer from Navina's actual record, and I do not have that one. " + HELP_TEXT,
  };
}
