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
      "Navina Ganapathy Amuthan | Product Manager & AI Engineer · Dublin",
    template: "%s | Navina Ganapathy Amuthan",
  },
  description:
    "Product management, AI engineering, data science, business analysis, and tech consulting in Dublin. TCD MSc Computer Science, Distinction. No sponsorship required.",
  keywords: [
    "Product Manager Dublin",
    "AI Product Dublin",
    "Software Engineer Dublin",
    "Data Product Manager Ireland",
    "Python SQL React",
    "Machine Learning Dublin",
    "Trinity College Dublin",
    "Navina Ganapathy Amuthan",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Navina Ganapathy Amuthan | Product Manager & AI Engineer",
    description:
      "AI products from roadmap to production to audit. Product, data, consulting, and engineering in Dublin. No sponsorship required.",
    siteName: "Navina Ganapathy Amuthan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navina Ganapathy Amuthan | Product Manager & AI Engineer",
    description:
      "AI products from roadmap to production to audit. Product, data, consulting, and engineering in Dublin. No sponsorship required.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: ["Product Manager", "AI Engineer", "Software Engineer"],
  email: `mailto:${personal.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Dublin", addressCountry: "IE" },
  alumniOf: ["Trinity College Dublin", "Anna University"],
  sameAs: [personal.linkedin, personal.github],
  knowsAbout: [
    "Product Management",
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Platforms",
    "APIs",
    "SQL",
    "Python",
    "React",
    "Cloud",
    "Stakeholder Management",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable}`}>
      <body className="font-body">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
