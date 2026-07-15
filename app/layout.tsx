import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/personal";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl = "https://navinaamuthan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Navina Ganapathy Amuthan | Business & Data Analyst in Dublin (SQL, Tableau, AI)",
    template: "%s | Navina Ganapathy Amuthan",
  },
  description:
    "Business & Data Analyst in Dublin. SQL, Tableau, Python. Fortune 500 delivery at E2open, TCD MSc Computer Science (Distinction), top 0.5% at Google's Agentic AI Hackathon. Stamp 1G, no sponsorship required.",
  keywords: [
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
    title: "Navina Ganapathy Amuthan | Business & Data Analyst in Dublin",
    description:
      "I turn messy data into decisions people actually trust. SQL, Tableau, Python, shipped AI. Dublin based. Stamp 1G, no sponsorship required.",
    siteName: "Navina Ganapathy Amuthan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navina Ganapathy Amuthan | Business & Data Analyst in Dublin",
    description: "I turn messy data into decisions people actually trust. Dublin based. Stamp 1G, no sponsorship required.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: "Business & Data Analyst",
  email: `mailto:${personal.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Dublin", addressCountry: "IE" },
  alumniOf: ["Trinity College Dublin", "Anna University"],
  sameAs: [personal.linkedin, personal.github],
  knowsAbout: [
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
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="font-body">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
