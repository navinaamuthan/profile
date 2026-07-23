import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/personal";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl = "https://navinaamuthan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Navina Ganapathy Amuthan | Software & AI/ML Engineer Dublin (Python, Java, React, RAG)",
    template: "%s | Navina Ganapathy Amuthan",
  },
  description:
    "Software and AI/ML engineer in Dublin. Production Python, Java, React; RAG, agents, evaluation harnesses, APIs, Docker, Azure. Open to software engineering, AI/ML associate, and data/business analyst roles. TCD MSc CS Distinction. No sponsorship required.",
  keywords: [
    "Software Engineer Dublin",
    "AI ML Associate Engineer Dublin",
    "AI/ML Engineer JPMorgan Dublin",
    "Microsoft Software Engineer Ireland",
    "Full Stack Software Engineer Ireland",
    "React Python Java Engineer",
    "RAG LLM Agent Engineer",
    "GenAI Software Engineer Dublin",
    "MLOps Docker CI/CD Azure",
    "Evaluation harness LLM",
    "Data Analyst Dublin",
    "Business Analyst Dublin",
    "SQL Power BI Tableau Excel",
    "Computer Science Trinity College Dublin",
    "Stamp 1G Ireland",
    "Navina Ganapathy Amuthan",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Navina Ganapathy Amuthan | Software & AI/ML Engineer Dublin",
    description:
      "Production software for AI/ML: Python, Java, React, RAG, agents, APIs, Docker. Dual-fit for Microsoft-style SE and JPMC-style AI/ML Associate roles.",
    siteName: "Navina Ganapathy Amuthan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navina Ganapathy Amuthan | Software & AI/ML Engineer Dublin",
    description:
      "Production software for AI/ML: Python, Java, React, RAG, agents, APIs, Docker. Dublin based, no sponsorship required.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: ["Software Engineer", "AI/ML Associate Engineer"],
  email: `mailto:${personal.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Dublin", addressCountry: "IE" },
  alumniOf: ["Trinity College Dublin", "Anna University"],
  sameAs: [personal.linkedin, personal.github],
  knowsAbout: [
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "RAG",
    "Agentic AI",
    "Python",
    "Java",
    "JavaScript",
    "React",
    "TypeScript",
    "REST APIs",
    "Docker",
    "Azure",
    "CI/CD",
    "scikit-learn",
    "PyTorch",
    "SQL",
    "Power BI",
    "Tableau",
    "Excel",
    "EU AI Act",
    "Responsible AI",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable}`}>
      <body className="font-body">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div aria-hidden className="site-frame" />
        {children}
      </body>
    </html>
  );
}
