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
    default: "Navina Ganapathy Amuthan | Data Scientist & Solutions Engineer in Dublin (Python, SQL, AI)",
    template: "%s | Navina Ganapathy Amuthan",
  },
  description:
    "Data scientist and solutions engineer in Dublin. Python, SQL, APIs, shipped AI. Fortune 500 technical delivery across 120+ countries at E2open, TCD MSc Computer Science (Distinction), top 0.5% at Google's Cloud Agentic AI Hackathon. No sponsorship required.",
  keywords: [
    "Solutions Engineer Dublin",
    "Ads Solutions Engineer",
    "Technical Solutions Consultant Dublin",
    "Business Analyst Dublin",
    "Data Analyst Dublin",
    "Technology Analyst Dublin",
    "Strategy Analyst Dublin",
    "SQL Tableau Analyst Dublin",
    "FinTech Analyst",
    "Analytics Dublin",
    "AI Analyst Dublin",
    "Data Scientist Dublin",
    "AI Product Manager",
    "Technical Product Manager",
    "ML Engineer Dublin",
    "Governance Analyst Dublin",
    "Graduate Analyst Ireland Stamp 1G",
    "Computer Science Trinity College Dublin",
    "Navina Ganapathy Amuthan",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Navina Ganapathy Amuthan | Data Scientist & Solutions Engineer in Dublin",
    description:
      "I build technical solutions for clients, then make them scale. Python, SQL, APIs, shipped AI. Dublin based, no sponsorship required, available immediately.",
    siteName: "Navina Ganapathy Amuthan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navina Ganapathy Amuthan | Data Scientist & Solutions Engineer in Dublin",
    description:
      "I build technical solutions for clients, then make them scale. Dublin based, no sponsorship required, available immediately.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: "Data Scientist & Solutions Engineer",
  email: `mailto:${personal.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Dublin", addressCountry: "IE" },
  alumniOf: ["Trinity College Dublin", "Anna University"],
  sameAs: [personal.linkedin, personal.github],
  knowsAbout: [
    "Solutions Engineering",
    "Business Analysis",
    "Data Analysis",
    "SQL",
    "Tableau",
    "Power BI",
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "Product Management",
    "EU AI Act",
    "AI Ethics",
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
