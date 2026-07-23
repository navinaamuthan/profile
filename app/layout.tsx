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
      "Navina Ganapathy Amuthan | Software Engineer in Dublin (React, Python, Java, AI/ML)",
    template: "%s | Navina Ganapathy Amuthan",
  },
  description:
    "Software engineer in Dublin open to software engineering, AI/ML and data roles. Full-stack React, TypeScript, Python, Java, C. Fortune 500 production delivery at E2open, TCD MSc Computer Science (Distinction), top 0.5% at Google Cloud Agentic AI Hackathon. No sponsorship required.",
  keywords: [
    "Software Engineer Dublin",
    "Full Stack Software Engineer Ireland",
    "React Developer Dublin",
    "JavaScript Python Java Engineer",
    "Frontend Engineer Dublin",
    "Software Engineer Identity",
    "Microsoft Software Engineer Ireland",
    "AI ML Engineer Dublin",
    "Data Scientist Dublin",
    "Machine Learning Engineer Dublin",
    "Node.js React TypeScript",
    "Distributed Systems Engineer",
    "Computer Science Trinity College Dublin",
    "Stamp 1G Ireland",
    "Navina Ganapathy Amuthan",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Navina Ganapathy Amuthan | Software Engineer in Dublin",
    description:
      "Full-stack software engineer: React, Python, Java. Open to software engineering, AI/ML and data roles. Dublin based, no sponsorship required, available immediately.",
    siteName: "Navina Ganapathy Amuthan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navina Ganapathy Amuthan | Software Engineer in Dublin",
    description:
      "Full-stack software engineer: React, Python, Java. Open to software engineering, AI/ML and data roles. Dublin based, no sponsorship required.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: "Software Engineer",
  email: `mailto:${personal.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Dublin", addressCountry: "IE" },
  alumniOf: ["Trinity College Dublin", "Anna University"],
  sameAs: [personal.linkedin, personal.github],
  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "React",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C",
    "Node.js",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
    "SQL",
    "AWS",
    "Azure",
    "Google Cloud",
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
