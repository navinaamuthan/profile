export type Article = {
  title: string;
  summary: string;
  tags: string[];
  date: string;
  readingTime: string;
  featured?: boolean;
  status: "published" | "coming-soon";
  link?: string;
  linkLabel?: string;
};

export const articles: Article[] = [
  {
    title: "How Consulting Teams Can Validate AI-Generated Recommendations: A Quality Assurance Framework",
    summary:
      "Consulting firms using AI face practical risks and business obligations, not only research questions. In the context of the Deloitte GPT-4o controversy and how McKinsey and BCG are adopting AI, this essay develops a validation framework for teams shipping AI-assisted work.",
    tags: ["AI Ethics", "Consulting", "Quality Assurance"],
    date: "2026",
    readingTime: "12 min read",
    featured: true,
    status: "published",
    link: "https://drive.google.com/file/d/1Ymd89PGe-Areki3kzH4hV_GVl7ilcRhs/view?usp=sharing",
    linkLabel: "Read it live →",
  },
  {
    title: "Atlas: A PRD for a Cross-Border Credit Passport",
    summary:
      "Product specification for a cross-border credit passport: market sizing, competitive positioning, compliance mapped to features, success metrics, and a risk register. Published as a site so stakeholders can review it in context.",
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
    link: "https://github.com/navinaamuthan/ai-ethics-framework-tool",
    linkLabel: "View on GitHub →",
  },
];
