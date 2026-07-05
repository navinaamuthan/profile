"use client";

import { Section, FadeIn } from "./ui";

const releases = [
  { v: "v4.1", date: "2026", title: "AI Governance Layer", notes: "Shipped MSc dissertation: EU AI Act compliance tool for financial AI. Led UNESCO water access strategy team of 6." },
  { v: "v4.0", date: "2025", title: "The Dublin Release", notes: "TCD MSc with Distinction. IGNITRIX ships: top 0.5% of 50,000+. Bloomberg BPuzzled winner. Deloitte Case finalist." },
  { v: "v3.0", date: "2024", title: "Enterprise Scale", notes: "E2open: Fortune 500 implementations across 120+ countries. Setup time cut ~70%. Learned that enterprises buy time to value." },
  { v: "v2.0", date: "2021-23", title: "Product Leadership", notes: "PM at iQube. Team of 8 to 10, 4 to 5 AI/ML features shipped, CSAT 3.2 to 4.6, 10,000+ users. Samsung and IIT Madras research in parallel." },
  { v: "v1.0", date: "2021", title: "Initial Release", notes: "B.E. Information Science, 9.2/10 CGPA. Smart India Hackathon Grand Finalist. Core modules: curiosity, shipping, stubbornness about users." },
];

export default function Changelog() {
  return (
    <div className="bg-ink text-paper">
      <Section id="changelog" eyebrow="Release notes" title="Navina, versioned. Every release shipped something real.">
        <div className="space-y-0">
          {releases.map((r, i) => (
            <FadeIn key={r.v} delay={i * 0.05}>
              <div className="group grid gap-2 border-t border-paper/15 py-6 transition-colors hover:bg-paper/5 md:grid-cols-[100px_100px_1fr] md:gap-8 md:px-4">
                <span className="font-mono text-clay">{r.v}</span>
                <span className="font-mono text-sm text-paper/50">{r.date}</span>
                <div>
                  <p className="font-display text-xl mb-1">{r.title}</p>
                  <p className="text-sm leading-relaxed text-paper/70">{r.notes}</p>
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-paper/15 py-6 md:px-4">
            <span className="font-mono text-clay">v5.0</span>
            <span className="ml-6 font-mono text-sm text-paper/50">In development.</span>
            <span className="ml-3 text-sm text-paper/70">Could be shipping at your company.</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
