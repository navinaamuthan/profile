"use client";

import { FadeIn } from "./ui";
import { personal } from "@/data/personal";

const items: [string, string][] = [
  ["Current role", "MSc Computer Science (Intelligent Systems), TCD. Distinction."],
  ["Education", "TCD MSc + Anna University B.E. (9.2/10 CGPA)"],
  ["Work authorization", personal.workAuth],
  ["Location", personal.location],
  ["Experience", "Product management, Fortune 500 delivery, ML research"],
  ["Industries", "FinTech, finance, BigTech, enterprise SaaS"],
  ["Looking for", "Product Manager, Business Analyst, Data Analyst, or ML roles"],
];

export default function QuickScan() {
  return (
    <section id="quick-scan" className="bg-ink text-paper py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-clay mb-3">Recruiter quick scan</p>
              <h2 className="font-display text-3xl md:text-4xl">Everything you need in 15 seconds.</h2>
            </div>
            <a
              href={personal.resumeUrl}
              className="px-5 py-2.5 rounded-full bg-clay text-paper font-medium hover:bg-clayDeep transition-colors focus-ring"
            >
              Download resume
            </a>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
          {items.map(([k, v], i) => (
            <FadeIn key={k} delay={i * 0.04}>
              <div className="border-t border-paper/20 pt-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-paper/50 mb-1">{k}</p>
                <p className="text-sm text-paper/90 leading-relaxed">{v}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
