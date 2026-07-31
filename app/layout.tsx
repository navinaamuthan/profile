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
      "Navina Ganapathy Amuthan | Software Engineer · AI · Data · Dublin (Python, SQL, React)",
    template: "%s | Navina Ganapathy Amuthan",
  },
  description:
    "Software engineer in Dublin working across AI/ML, risk reporting, and data. Python, SQL, Java, React; Tableau, Power BI, Excel; RAG and agents. Fortune 500 delivery at E2open, TCD MSc CS Distinction. No sponsorship required.",
  keywords: [
    "Software Engineer Dublin",
    "AI ML Engineer Dublin",
    "Full Stack Software Engineer Ireland",
    "React Python Java Engineer",
    "Credit Risk Reporting Dublin",
    "Risk Analysis Specialist Dublin",
    "SQL Tableau Power BI Excel",
    "Data Analyst Dublin",
    "Business Analyst Dublin",
    "RAG LLM Agent Engineer",
    "GenAI Software Engineer Dublin",
    "Computer Science Trinity College Dublin",
    "Stamp 1G Ireland",
    "Navina Ganapathy Amuthan",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Navina Ganapathy Amuthan | Software Engineer · AI · Data · Dublin",
    description:
      "Python, SQL, React, Tableau, Power BI. Software engineering, AI/ML, and risk-aware reporting. Dublin based, no sponsorship required.",
    siteName: "Navina Ganapathy Amuthan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navina Ganapathy Amuthan | Software Engineer · AI · Data · Dublin",
    description:
      "Python, SQL, React, Tableau, Power BI. Software engineering, AI/ML, and risk-aware reporting. Dublin based, no sponsorship required.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: ["Software Engineer", "AI/ML Engineer", "Risk Analysis Specialist"],
  email: `mailto:${personal.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Dublin", addressCountry: "IE" },
  alumniOf: ["Trinity College Dublin", "Anna University"],
  sameAs: [personal.linkedin, personal.github],
  knowsAbout: [
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Credit Risk Reporting",
    "Risk Analysis",
    "SQL",
    "Tableau",
    "Power BI",
    "Excel",
    "Python",
    "Java",
    "React",
    "RAG",
    "Agentic AI",
    "Data Quality",
    "ETL",
    "Azure",
    "EU AI Act",
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
