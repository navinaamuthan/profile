import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/personal";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"], display: "swap" });

const siteUrl = "https://navinaamuthan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Navina Ganapathy Amuthan | AI Product Manager & Analyst in Dublin",
    template: "%s | Navina Ganapathy Amuthan",
  },
  description:
    "Product Manager, Analyst and AI/ML strategist in Dublin, Ireland. TCD MSc Computer Science (Distinction). Google Cloud Agentic AI Hackathon top 0.5%. Stamp 1G eligible, no sponsorship required.",
  keywords: [
    "Product Manager Dublin",
    "AI Product Manager",
    "Technical Product Manager",
    "Product Analyst",
    "ML Engineer Dublin",
    "AI Strategist",
    "Business Analyst Dublin",
    "Data Analyst Dublin",
    "FinTech Analyst",
    "Analytics Dublin",
    "Technology Analyst Dublin",
    "Application Support Analyst",
    "Technology Risk and Controls",
    "Governance Analyst Dublin",
    "Computer Science Trinity College Dublin",
    "Navina Ganapathy Amuthan",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Navina Ganapathy Amuthan | AI Product Manager & Analyst",
    description:
      "I build AI products that people actually trust. PM, analyst and ML strategist in Dublin. Stamp 1G eligible, no sponsorship required.",
    siteName: "Navina Ganapathy Amuthan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navina Ganapathy Amuthan | AI Product Manager & Analyst",
    description: "I build AI products that people actually trust. Dublin based. Stamp 1G eligible.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: "Product Manager & AI/ML Strategist",
  email: `mailto:${personal.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Dublin", addressCountry: "IE" },
  alumniOf: ["Trinity College Dublin", "Anna University"],
  sameAs: [personal.linkedin, personal.github],
  knowsAbout: ["Product Management", "Artificial Intelligence", "Machine Learning", "Analytics", "EU AI Act", "AI Ethics"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-body grain">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
