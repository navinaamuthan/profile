export type Article = {
  title: string;
  summary: string;
  tags: string[];
  date: string;
  readingTime: string;
  featured?: boolean;
  status: "published" | "coming-soon";
  link?: string;
};

export const articles: Article[] = [
  {
    title: "How Consulting Teams Can Validate AI-Generated Recommendations: A Quality Assurance Framework",
    summary:
      "AI hallucination is now a consulting risk, not a research curiosity. From the Deloitte GPT-4o scandal to how McKinsey and BCG are adopting AI, this essay builds a practical validation framework for teams shipping AI-assisted work.",
    tags: ["AI Ethics", "Consulting", "Quality Assurance"],
    date: "2026",
    readingTime: "12 min read",
    featured: true,
    status: "published",
  },
  {
    title: "Atlas: A PRD for a Cross-Border Credit Passport",
    summary:
      "A full senior-PM product spec, live as a website. Corridor-based market sizing, competitive positioning against Nova Credit, EU AI Act high-risk compliance mapped to shipped features, north-star metrics with guardrails, and an honest risk register. FinTech thinking, end to end.",
    tags: ["FinTech", "EU AI Act", "Product Strategy", "Case Study"],
    date: "Jul 2026",
    readingTime: "14 min read",
    status: "published",
    link: "https://atlas-prd.vercel.app/",
  },
  {
    title: "MSc Dissertation: An AI Ethics Framework and Tool for Early-Stage Research",
    summary:
      "A practical framework and tool helping early-stage research projects meet EU AI Act and GDPR obligations, with a focus on financial AI. Trinity College Dublin.",
    tags: ["EU AI Act", "GDPR", "Financial AI", "Research"],
    date: "2026",
    readingTime: "Dissertation",
    status: "published",
  },
  {
    title: "More writing coming soon",
    summary: "Product teardowns, AI governance notes, and lessons from building agentic systems.",
    tags: ["Coming soon"],
    date: "Soon",
    readingTime: "",
    status: "coming-soon",
  },
];
