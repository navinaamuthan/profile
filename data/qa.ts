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
      text: "Short version: two years as a product manager leading a team of 8 to 10 on a 10,000+ user platform (CSAT 3.2 to 4.6), then a year at E2open delivering Fortune 500 supply chain implementations across 120+ countries, then an MSc in Computer Science at Trinity College Dublin, finished with distinction. Recent work is applied AI: agentic systems, LLM evaluation, EU AI Act compliance.",
      links: [{ label: "Experience section", href: "#experience" }],
    },
  },
  {
    keywords: ["e2open", "implementation", "supply", "chain", "fortune"],
    answer: {
      text: "At E2open (Sep 2024 to Jun 2025) she delivered Fortune 500 supply chain implementations across 120+ countries, systematised configuration work that used to be bespoke every time, and cut setup time by roughly 70%. Stack: Python, SQL, Power BI, data pipelines.",
      links: [{ label: "Experience section", href: "#experience" }],
    },
  },
  {
    keywords: ["iqube", "product", "manager", "pm", "csat", "roadmap"],
    phrases: ["product management"],
    answer: {
      text: "As Product Manager at iQube (Sep 2021 to Dec 2023) she led 8 to 10 engineers and designers, shipped 4 to 5 AI/ML features from discovery to launch, and moved CSAT from 3.2 to 4.6 while the platform grew past 10,000 users.",
      links: [{ label: "Experience section", href: "#experience" }],
    },
  },
  {
    keywords: ["ignitrix", "agent", "agentic", "adversarial", "maya", "nash", "hackathon", "google"],
    answer: {
      text: "IGNITRIX is a dual-agent financial advisor built in 48 hours at the Google Cloud Agentic AI Hackathon: Maya diagnoses your financial health, Nash attacks her conclusions, and a collaboration engine reconciles the argument before anything reaches the user. It placed in the top 0.5% of 50,000+ teams, Grand Finalist.",
      links: [
        { label: "Project card", href: "#project-ignitrix" },
        { label: "GitHub", href: "https://github.com/navinaamuthan/ignitrix-financial-dual-agent-ai" },
      ],
    },
  },
  {
    keywords: ["auditai", "audit", "fairness", "bias", "compliance"],
    answer: {
      text: "AuditAI is an automated EU AI Act audit pipeline: it trains a credit risk model, quantifies bias across protected attributes (statistical parity, disparate impact, equalized odds), classifies the system under the Act, and has an LLM write the audit report so every sentence traces to a number.",
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
      text: "Nine groups, starting with programming languages (Java, C, ReactJS, Python, TypeScript, SQL), then GenAI & agents, machine learning, data science, data engineering, BI, cloud & engineering, product & business, and AI governance. The Skills section lists every one, and chips with a dot jump to the project that proves the skill.",
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
      text: `Email is fastest: ${personal.email}. LinkedIn and GitHub are linked below, and the CV is one click away.`,
      links: [
        { label: "Email", href: `mailto:${personal.email}` },
        { label: "LinkedIn", href: personal.linkedin },
        { label: "CV (PDF)", href: personal.resumeUrl },
      ],
    },
  },
  {
    keywords: ["available", "availability", "start", "notice", "when", "open"],
    phrases: ["start date"],
    answer: {
      text: "Available immediately, Dublin based, no sponsorship needed. She is looking at solutions engineering, data science and AI/ML roles first, with analyst and product roles also on the table.",
      links: [{ label: `Email ${personal.email}`, href: `mailto:${personal.email}` }],
    },
  },
  {
    keywords: ["solutions", "solution", "gtech", "ads", "scale", "scaling", "client", "clients"],
    phrases: ["solutions engineer", "solutions engineering"],
    answer: {
      text: "Solutions engineering is the intersection she works at: build the technical thing, then make it work for the client at scale. At E2open that meant owning delivery for Fortune 500 clients across 120+ countries, from Python and SQL pipelines to explaining root cause to a VP the next morning. IGNITRIX shows the build speed: a production-grade multi-agent system (React, Node.js gateway, Python agents, Firebase) in 48 hours.",
      links: [
        { label: "Experience", href: "#experience" },
        { label: "IGNITRIX", href: "#project-ignitrix" },
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
      text: "Three reasons with receipts. She ships end to end, fast: a production-grade multi-agent AI system built in 48 hours, top 0.5% of 50,000+ teams at Google's agentic AI hackathon. She has real client-delivery scars: Fortune 500 implementations in 120+ countries, SQL pipelines over 100k+ records, setup time cut by 70%. And she translates between the two worlds: the same root cause analysis that fixed the pipeline gets explained to a VP in language they can act on.",
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
      text: "Solutions engineering is her natural habitat: technical and client-facing at the same time. At E2open she owned delivery for Fortune 500 clients across 120+ countries, writing Python and SQL, debugging API integrations, then explaining root cause to VPs in plain language. And she builds fast when it counts: IGNITRIX went from zero to a working multi-agent system (React, Node.js, Python, Firebase) in 48 hours, top 0.5% of 50,000+ teams.",
      links: [
        { label: "Experience", href: "#experience" },
        { label: "IGNITRIX", href: "#project-ignitrix" },
      ],
    },
  },
  {
    keywords: ["awards", "award", "won", "recognition", "prizes", "achievements", "hackathons"],
    answer: {
      text: "Grand Finalist (top 0.5% of 50,000+) at the Google Cloud Agentic AI Hackathon, Grand Finalist at Smart India Hackathon 2022 and the Bosch Fit.Kovai Hackathon 2022, winner of Bloomberg BPuzzled at Trinity, finalist in the Deloitte Case Competition, and winner of ICT Youthtalk.",
      links: [{ label: "Recognition section", href: "#recognition" }],
    },
  },
  {
    keywords: ["leadership", "lead", "led", "team", "mentoring", "community", "chair"],
    answer: {
      text: "She led 8 to 10 engineers and designers as a PM, a team of 6 on a UNESCO water access programme, chaired her IEEE Women in Engineering chapter, and was elected Class Representative and STEM Convenor at Trinity College Dublin. FemTechConf made her a Women in Tech Ambassador.",
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
      text: "Two research stints: an ML research internship at Samsung R&D (PRISM), where she built an NLP model and shipped at 90%+ accuracy, and a research internship at IIT Madras analysing behavioural data from 500+ study participants.",
      links: [{ label: "Experience section", href: "#experience" }],
    },
  },
  {
    keywords: ["projects", "work", "built", "portfolio", "case", "studies"],
    answer: {
      text: "Twelve projects live in the folder above, from IGNITRIX (adversarial financial agents) to AuditAI (EU AI Act audits) to Atlas (a PRD shipped as a product). Open any file for the full story and the skills it proves.",
      links: [{ label: "Selected work", href: "#work" }],
    },
  },
];

const HELP_TEXT =
  "You can ask me things like: does she need sponsorship? what is IGNITRIX? what is her stack? why should I hire her? Commands work too: projects, skills, cv, contact, clear.";

const commands: Record<string, NaviAnswer> = {
  help: { text: HELP_TEXT },
  cv: {
    text: "Here it is.",
    links: [{ label: "CV (PDF)", href: personal.resumeUrl }],
  },
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
    text: "All of them are in the Skills section, starting with programming languages, then GenAI & agents, machine learning, data science, data engineering, BI, cloud & engineering, product, and governance.",
    links: [{ label: "Skills", href: "#skills" }],
  },
  whoami: {
    text: "A guest on Navina's site. If you are hiring in Dublin, you are exactly where you should be.",
  },
};

export const suggestions = [
  "Does she need sponsorship?",
  "Why should I hire her?",
  "What did she do at E2open?",
  "What awards has she won?",
  "Any leadership experience?",
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
