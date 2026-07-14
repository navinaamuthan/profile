export type Project = {
  name: string;
  flagship?: boolean;
  featured?: boolean;
  tag: string;
  problem: string;
  solution: string;
  architecture?: string;
  decisions?: string[];
  tech: string[];
  metrics: string[];
  lesson: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "IGNITRIX",
    flagship: true,
    tag: "Agentic AI",
    problem:
      "Financial guidance from a single LLM is confident, fluent, and sometimes wrong. Users cannot tell which.",
    solution:
      "A dual-agent adversarial system: Maya diagnoses financial health, Nash attacks her conclusions, and a Collaboration Engine reconciles the argument before anything reaches the user. Grounded through an MCP retrieval layer. Built end to end in 48 hours at the Google Cloud Agentic AI Hackathon.",
    architecture:
      "Maya (diagnostic agent), Nash (adversarial strategy agent), Collaboration Engine for challenge cycles and reconciliation, FI Money MCP retrieval layer, React frontend behind a Node.js gateway.",
    decisions: [
      "Adversarial pairing over single-model confidence scores, because self-reported confidence is theatre",
      "MCP retrieval instead of full data ingestion, so each agent sees only what its reasoning step needs",
      "Backend gateway between frontend and agents, so no unauthenticated request ever triggers reasoning",
    ],
    tech: ["Google ADK", "Vertex AI", "MCP", "Node.js", "React", "Firebase"],
    metrics: ["Top 0.5% of 50,000+ teams", "Grand Finalist", "Built in 48 hours"],
    lesson: "The fastest way to make AI trustworthy is to make it argue with itself in public.",
    github: "https://github.com/navinaamuthan/ignitrix-financial-dual-agent-ai",
  },
  {
    name: "AuditAI",
    featured: true,
    tag: "Responsible AI",
    problem:
      "The EU AI Act makes fairness audits mandatory for high-risk AI, but most compliance work is manual, expensive, and inconsistent.",
    solution:
      "An automated audit pipeline: it trains a credit risk model, quantifies bias across protected attributes (statistical parity, disparate impact, equalized odds), classifies the system under the EU AI Act, and has an LLM write the consulting-grade audit report. Interactive dashboard included.",
    architecture:
      "Python audit pipeline (data quality, model training, fairness engine, risk classifier), Groq-hosted Llama 3.3 70B for the narrative report, Next.js dashboard with recharts.",
    decisions: [
      "Quantitative findings first, LLM narrative second, so every sentence in the report traces to a number",
      "German Credit dataset because regulators and researchers already use it to study lending bias",
      "Article-by-article EU AI Act mapping instead of a vague compliance score",
    ],
    tech: ["Python", "scikit-learn", "Groq LLM API", "Next.js", "TypeScript", "Recharts"],
    metrics: ["3 fairness metrics, 2 protected attributes", "EU AI Act Annex III classification", "9-section audit report"],
    lesson: "Compliance is not a checkbox. It is a pipeline you can rerun.",
    github: "https://github.com/navinaamuthan/audit-ai",
  },
  {
    name: "EIREVAL",
    tag: "LLM Evaluation",
    problem:
      "Nobody knew how well LLMs actually understand Irish and EU financial regulation, and guessing is not a compliance strategy.",
    solution:
      "An evaluation harness benchmarking LLM performance on Irish and EU financial regulation, built to put numbers on what models get right and where they hallucinate.",
    tech: ["Python", "LLM Evaluation", "Financial Regulation"],
    metrics: ["Regulation-grounded eval set"],
    lesson: "You cannot deploy what you have not measured.",
    github: "https://github.com/navinaamuthan/eireval",
  },
  {
    name: "Atlas PRD",
    tag: "Product Thinking",
    problem:
      "Migrants lose their credit history at every border. A cash credit passport needs a spec before it needs code.",
    solution:
      "A full product requirements document for a cross-border credit passport, shipped as a hosted site: problem framing, user segments, success metrics, and rollout strategy.",
    tech: ["Product Strategy", "PRD", "Fintech"],
    metrics: ["Live hosted spec"],
    lesson: "A PRD is a product. Ship it like one.",
    github: "https://github.com/navinaamuthan/atlas-prd",
    live: "https://atlas-prd.vercel.app",
  },
  {
    name: "PPD Talkbot (Chatner)",
    tag: "AI for Health",
    problem:
      "Postpartum depression is underdiagnosed, and new mothers often will not raise symptoms with anyone before they escalate.",
    solution:
      "Final-year project pairing PPD prediction models with a Django chatbot powered by a fine-tuned OpenAI model: multi-turn empathetic chat, Whisper voice input, spoken responses, and guardrails that push severe cases toward professional help.",
    tech: ["Django", "Fine-tuned OpenAI model", "Whisper", "scikit-learn", "TTS"],
    metrics: ["EDA to deployed chatbot, end to end", "Team of 3"],
    lesson: "In health AI, the handoff to a human is a feature, not a failure.",
    github: "https://github.com/navinaamuthan/Post-Partum-Depression-Analysis",
  },
  {
    name: "Omdena: Smart Farming, Kano State",
    tag: "Open Source ML",
    problem:
      "Smallholder farmers in Kano State, Nigeria needed AI-backed guidance for sustainable agriculture, with none of the data luxuries of a Silicon Valley problem.",
    solution:
      "AI for sustainable agriculture built with the Omdena Kano chapter: a distributed volunteer team turning messy agricultural data into usable models for a real community.",
    tech: ["Python", "ML", "Remote Collaboration"],
    metrics: ["Omdena chapter project, Nigeria"],
    lesson: "Open source teaches you to write code and docs for strangers. So does good product work.",
    github: "https://github.com/navinaamuthan/KanoNigeriaChapter_SmartFarming",
  },
  {
    name: "Few-Shot Learning with LLMs",
    tag: "LLM Education",
    problem:
      "Few-shot learning is the cheapest capability upgrade in modern LLMs, and most people still learn it by trial and error.",
    solution:
      "An interactive Streamlit app teaching prompt engineering hands-on: three task types, 0 to 5 shots, real-time prompt construction, and accuracy-versus-cost analysis with interactive charts.",
    tech: ["Python", "Streamlit", "Prompt Engineering", "Data Viz"],
    metrics: ["3 task types, 0-5 shot interactive demos"],
    lesson: "If you can teach a technique interactively, you actually understand it.",
    github: "https://github.com/navinaamuthan/Few_Shot_Learning_with_LLM-s",
  },
  {
    name: "SIH 2022: AUV Speed Measurement",
    tag: "Hackathon",
    problem:
      "Autonomous underwater vehicles need reliable speed measurement in conditions where GPS does not exist and sensors disagree.",
    solution:
      "Grand Finalist solution at Smart India Hackathon 2022 (problem NR1173): speed measurement for autonomous underwater vehicles.",
    tech: ["Python", "Signal Processing", "Embedded"],
    metrics: ["Grand Finalist, Smart India Hackathon 2022"],
    lesson: "Constraints you cannot google are the ones worth solving.",
    github: "https://github.com/navinaamuthan/SiH-2022-Ignitriz",
  },
  {
    name: "Nova",
    tag: "Personal Build",
    problem:
      "Manifestation apps charge subscriptions for what a browser can do for free.",
    solution:
      "A fairy-tale manifestation companion built solo: daily affirmations, 369 tracking, gratitude journaling, mood orbs, four visual realms. Runs entirely in the browser on localStorage, $0/month.",
    tech: ["React", "Vite", "Web Speech API", "localStorage"],
    metrics: ["Zero-cost, zero-server, installable as a PWA"],
    lesson: "The best side projects solve your own problem beautifully.",
  },
  {
    name: "Traffic Detection Visual System",
    tag: "Computer Vision",
    problem:
      "Urban traffic monitoring in Indian cities needed detection that works in chaotic, dense conditions.",
    solution:
      "ML-based visual traffic detection system, built for the Bosch Fit.Kovai Hackathon 2022.",
    tech: ["Computer Vision", "ML", "Python"],
    metrics: ["Grand Finalist, Bosch Fit.Kovai Hackathon 2022"],
    lesson: "Real-world CV is 20% model, 80% dealing with the real world.",
    github: "https://github.com/navinaamuthan/BGSW---Fit.Kovai-Hackathon-22",
  },
  {
    name: "Omdena: Autism Prediction in Toddlers",
    tag: "AI for Health",
    problem: "Early autism screening is inconsistent and access depends heavily on geography.",
    solution:
      "ML models predicting autism likelihood in toddlers from screening data, built as an ML Engineer on an open source team.",
    tech: ["Python", "scikit-learn", "ML"],
    metrics: ["Recommendation received for high performance"],
    lesson: "In health ML, a false negative is not a metric. It is a missed child.",
  },
  {
    name: "Omdena: Inflation-Coping Chatbot for Lublin",
    tag: "Open Source ML",
    problem:
      "Residents of Lublin, Poland were being squeezed by rising inflation, and the people hit hardest are the least likely to have access to financial guidance.",
    solution:
      "Open source conversational AI helping Lublin residents cope with increased inflation and cost of living, built as an ML Engineer on a distributed global volunteer team.",
    tech: ["NLP", "Python", "Conversational AI"],
    metrics: ["Final push recognition for high contribution"],
    lesson: "Accessibility and plain language beat feature breadth.",
  },
];
