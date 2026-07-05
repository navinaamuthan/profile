export type Project = {
  name: string;
  flagship?: boolean;
  tag: string;
  problem: string;
  solution: string;
  architecture: string;
  decisions: string[];
  tech: string[];
  metrics: string[];
  lesson: string;
  github?: string;
};

export const projects: Project[] = [
  {
    name: "IGNITRIX",
    flagship: true,
    tag: "Agentic AI",
    problem:
      "Financial guidance from a single LLM is confident, fluent, and sometimes wrong. Users cannot tell which.",
    solution:
      "A dual-agent adversarial system: one agent proposes, a second attacks the proposal, and an LLM-as-Judge scores the exchange before anything reaches the user. Grounded through an MCP retrieval layer.",
    architecture:
      "Proposer agent, adversarial critic agent, MCP retrieval layer for grounding, LLM-as-Judge evaluation loop.",
    decisions: [
      "Adversarial pairing over single-model confidence scores, because self-reported confidence is theatre",
      "MCP retrieval instead of fine-tuning, so grounding stays auditable",
      "Judge scores exposed to users, because trust needs receipts",
    ],
    tech: ["Google Cloud", "Agentic AI", "MCP", "LLM-as-Judge", "Python"],
    metrics: ["Top 0.5% of 50,000+ teams", "Grand Finalist", "Real financial data from ~50 to 60 users"],
    lesson: "The fastest way to make AI trustworthy is to make it argue with itself in public.",
    github: "https://github.com/navinaamuthan",
  },
  {
    name: "Omdena: Cost of Living Chatbot",
    tag: "Open Source ML",
    problem: "People hit hardest by inflation are the least likely to have access to financial guidance.",
    solution:
      "Open source conversational AI for people affected by high inflation and rising cost of living, built with a distributed volunteer team.",
    architecture: "Conversational AI pipeline built collaboratively across a global contributor team.",
    decisions: ["Optimised for accessibility and plain language over feature breadth"],
    tech: ["NLP", "Python", "Conversational AI"],
    metrics: ["Final push recognition for high contribution"],
    lesson: "Open source teaches you to write code and docs for strangers. So does good product work.",
  },
  {
    name: "Omdena: Autism Prediction in Toddlers",
    tag: "ML for Health",
    problem: "Early autism screening is inconsistent and access depends heavily on geography.",
    solution: "ML models predicting autism likelihood in toddlers from screening data, as part of an open source team.",
    architecture: "Supervised ML pipeline with careful attention to class balance and screening bias.",
    decisions: ["Prioritised recall and interpretability over leaderboard accuracy"],
    tech: ["Python", "scikit-learn", "ML"],
    metrics: ["Recommendation received for high performance"],
    lesson: "In health ML, a false negative is not a metric. It is a missed child.",
  },
  {
    name: "Traffic Detection Visual System",
    tag: "Computer Vision",
    problem: "Urban traffic monitoring in Indian cities needed detection that works in chaotic, dense conditions.",
    solution: "ML-based visual traffic detection system, built for the Bosch Fit.Kovai Hackathon 2022.",
    architecture: "Computer vision detection pipeline over live traffic feeds.",
    decisions: ["Designed for messy real footage, not benchmark datasets"],
    tech: ["Computer Vision", "ML", "Python"],
    metrics: ["Grand Finalist, Bosch Fit.Kovai Hackathon 2022"],
    lesson: "Real-world CV is 20% model, 80% dealing with the real world.",
  },
];
