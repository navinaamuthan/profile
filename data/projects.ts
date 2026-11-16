export type Project = {
  name: string;
  flagship?: boolean;
  featured?: boolean;
  tag: string;
  summary: string;
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
    name: "AIEF",
    flagship: true,
    tag: "Research · AI Governance",
    summary:
      "An ontology-driven engine that assesses an AI research proposal against four governance frameworks at once.",
    problem:
      "AI ethics review is fragmented: TCD REAMS, the EU AI Act, Horizon Europe, and ACM/NeurIPS guidelines each demand their own compliance pass, with no shared way to trace a finding back to a specific requirement or fundamental right.",
    solution:
      "My MSc dissertation, built as a real tool: a 207-requirement OWL ontology spanning TCD REAMS, the EU AI Act (Article 27 FRIA), Horizon Europe Ethics by Design, and ACM/NeurIPS guidelines, mapped to the EU Charter of Fundamental Rights. A free-text research proposal goes in; a structured, traceable ethics assessment comes out, backed by a SHACL symbolic assessor and a retrieval-augmented LLM pipeline, with a full diagnostic methodology (perspective-stratified annotation, reliability analysis, perturbation testing) proving the assessor actually works.",
    architecture:
      "OWL ontology and knowledge graph published at a persistent w3id.org URI, SHACL shapes for symbolic rule-based assessment, a Groq/Ollama-backed RAG pipeline for LLM-assisted evaluation, a diagnostic pipeline generating reliability and perturbation results as LaTeX tables, and a Next.js demo webapp.",
    decisions: [
      "Ontology over prompt engineering alone, so every finding traces to a specific requirement, not a model's guess",
      "Four frameworks in one graph instead of four separate checklists, because real research proposals get reviewed against all of them",
      "A full diagnostic methodology, including perturbation testing, so the assessor's reliability is measured, not assumed",
    ],
    tech: ["Python", "OWL", "SHACL", "RDF", "SPARQL", "Groq LLM API", "RAG", "Next.js", "TypeScript"],
    metrics: ["207 governance requirements", "4 frameworks in one ontology", "Published persistent URI (w3id.org/aief)"],
    lesson: "Ethics review that cannot show its work is not review, it is opinion.",
    github: "https://github.com/navinaamuthan/ai-ethics-framework-tool",
    live: "https://w3id.org/aief/",
  },
  {
    name: "AuditAI",
    featured: true,
    tag: "Credit risk · Responsible AI",
    summary:
      "A credit-risk model, fairness checks, and an automated audit report you can rerun when the data changes.",
    problem:
      "Credit and high-risk AI systems need repeatable risk reporting: bias metrics, data quality checks, and documentation that stakeholders can trust, not a one-off spreadsheet.",
    solution:
      "End-to-end product: a Python pipeline trains a credit risk model, quantifies bias across protected attributes (statistical parity, disparate impact, equalized odds), classifies the system under the EU AI Act, and uses an LLM to write the audit report so every sentence traces back to a number. Interactive Next.js dashboard for monitoring outputs.",
    architecture:
      "Modular Python services for data quality, model training, fairness engine, and risk classification; Groq-hosted Llama 3.3 70B for the narrative report; Next.js and TypeScript dashboard with Recharts. Clear module boundaries so each stage is testable and reusable.",
    decisions: [
      "Quantitative findings first, LLM narrative second, so every sentence in the report traces to a number",
      "German Credit dataset because regulators and researchers already use it to study lending bias",
      "Article-by-article EU AI Act mapping instead of a vague compliance score",
    ],
    tech: ["Python", "scikit-learn", "JavaScript", "TypeScript", "Next.js", "React", "Groq LLM API", "Recharts"],
    metrics: ["3 fairness metrics, 2 protected attributes", "EU AI Act Annex III classification", "9-section audit report"],
    lesson: "Compliance is not a checkbox. It is a pipeline you can rerun.",
    github: "https://github.com/navinaamuthan/audit-ai",
  },
  {
    name: "IGNITRIX",
    featured: true,
    tag: "Full-stack · Agentic AI",
    summary:
      "A dual-agent financial advisor with a React frontend, Node gateway, and retrieval grounding.",
    problem:
      "Financial guidance from a single LLM is confident, fluent, and sometimes wrong. Users cannot tell which.",
    solution:
      "A dual-agent adversarial system with a React frontend: Maya diagnoses financial health, Nash attacks her conclusions, and a Collaboration Engine reconciles the argument before anything reaches the user. Grounded through an MCP retrieval layer. Built end to end in 48 hours at the Google Cloud Agentic AI Hackathon; handles about 50 to 60 real users' financial data.",
    architecture:
      "Maya (diagnostic agent), Nash (adversarial strategy agent), Collaboration Engine for challenge cycles and reconciliation, FI Money MCP retrieval layer, React frontend behind a Node.js gateway. Services are modular, actively gated, and never expose unauthenticated reasoning paths.",
    decisions: [
      "Adversarial pairing rather than relying on a single model's self-reported confidence",
      "MCP retrieval instead of full data ingestion, so each agent sees only what its reasoning step needs",
      "Backend gateway between frontend and agents, so no unauthenticated request ever triggers reasoning",
    ],
    tech: ["React", "JavaScript", "Node.js", "Google ADK", "Vertex AI", "MCP", "Firebase", "Python"],
    metrics: ["Top 0.5% of 50,000+ teams", "Grand Finalist", "Built in 48 hours", "~50-60 real users' data"],
    lesson: "Adversarial review between agents surfaces errors that a single model will miss.",
    github: "https://github.com/navinaamuthan/ignitrix-financial-dual-agent-ai",
  },
  {
    name: "EIREVAL",
    featured: true,
    tag: "LLM Evaluation",
    summary:
      "Benchmarking how well LLMs actually understand Irish and EU financial regulation.",
    problem:
      "Nobody knew how well LLMs actually understand Irish and EU financial regulation, and guessing is not a compliance strategy.",
    solution:
      "An evaluation harness benchmarking LLM performance on Irish and EU financial regulation, built to put numbers on what models get right and where they hallucinate. Designed for repeatable, diagnosable runs.",
    tech: ["Python", "LLM Evaluation", "Financial Regulation", "Test harnesses"],
    metrics: ["Regulation-grounded eval set"],
    lesson: "You cannot deploy what you have not measured.",
    github: "https://github.com/navinaamuthan/eireval",
  },
  {
    name: "Ready72",
    tag: "Hackathon · AI for Public Safety",
    summary:
      "A power-outage resilience planner that turns a government emergency booklet into a cited, household-specific emergency plan.",
    problem:
      "Government emergency guides are generic PDFs. When the power goes out, nobody reads 40 pages to figure out what applies to their household.",
    solution:
      "Built at the Build for Ireland hackathon (OpenAI x Give(a)Go x Dogpatch Labs): an AI planner and grounding verifier that takes a government booklet and generates a household-specific emergency plan with citations. A built-in verifier caught planted faults in adversarial testing. Team of 4; led the pitch, built the AI planner and integration layer.",
    tech: ["Python", "OpenAI API", "RAG", "Adversarial Testing"],
    metrics: ["Build for Ireland hackathon", "Adversarial fault detection verified", "Team of 4"],
    lesson: "If the AI can't cite where it got the answer, the answer isn't safe to follow.",
  },
  {
    name: "Atlas PRD",
    tag: "Product Thinking",
    summary:
      "Product specification for a cross-border credit passport, published as a live site.",
    problem:
      "Migrants lose their credit history at every border. A cash credit passport needs a spec before it needs code.",
    solution:
      "Problem framing, user segments, success metrics and a rollout strategy for a product that would let migrants carry their credit history across borders. Published as a site rather than a PDF so people actually read it.",
    tech: ["Product Strategy", "PRD", "Fintech", "UX writing"],
    metrics: ["Live hosted spec"],
    lesson: "A specification is easier to review when it is treated as a product, not a document.",
    github: "https://github.com/navinaamuthan/atlas-prd",
    live: "https://atlas-prd.vercel.app",
  },
  {
    name: "PPD Talkbot (Chatner)",
    tag: "Full-stack · AI for Health",
    summary:
      "A fine-tuned voice-enabled chatbot helping new mothers recognise postpartum depression early.",
    problem:
      "Postpartum depression is underdiagnosed, and new mothers often will not raise symptoms with anyone before they escalate.",
    solution:
      "Final-year project pairing PPD prediction models with a Django chatbot powered by a fine-tuned OpenAI model: multi-turn empathetic chat, Whisper voice input, spoken responses, and guardrails that push severe cases toward professional help.",
    tech: ["Python", "Django", "JavaScript", "Fine-tuned OpenAI model", "Whisper", "scikit-learn", "TTS"],
    metrics: ["EDA to deployed chatbot, end to end", "Team of 3"],
    lesson: "In health AI, the handoff to a human is a feature, not a failure.",
    github: "https://github.com/navinaamuthan/Post-Partum-Depression-Analysis",
  },
  {
    name: "Omdena Open Source Projects",
    tag: "Open Source ML",
    summary:
      "Three distributed ML projects across global health, agriculture, and cost-of-living — each on a volunteer team spanning multiple countries.",
    problem:
      "Real-world ML problems in underserved communities rarely come with clean data, dedicated infrastructure, or co-located teams.",
    solution:
      "Contributed as ML Engineer across three Omdena chapters: autism prediction in toddlers (health screening models where a false negative is a missed child), sustainable farming AI for smallholders in Kano State, Nigeria, and a cost-of-living chatbot for Lublin, Poland. Each project ran on a distributed global volunteer team turning messy data into usable models for a real community.",
    tech: ["Python", "scikit-learn", "NLP", "ML", "Remote Collaboration"],
    metrics: ["3 projects", "3 countries", "Recommendation for high performance"],
    lesson: "Open source teaches you to write code and docs for strangers. So does good product work.",
  },
];
