"use client";

import { Section, FadeIn } from "./ui";
import { awards } from "@/data/awards";

export default function Awards() {
  return (
    <Section id="awards" eyebrow="Awards & recognition" title="Proof that showing up prepared works.">
      <p className="text-sm text-muted mb-8 font-mono">Hover a card for the behind-the-scenes story.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {awards.map((a, i) => (
          <FadeIn key={a.title} delay={i * 0.05}>
            <div className="group card p-6 h-full relative overflow-hidden hover:shadow-lift transition-all">
              <div className="transition-opacity duration-300 group-hover:opacity-0">
                <p className="font-mono text-xs text-muted mb-2">{a.year} · {a.scale}</p>
                <h3 className="font-display text-xl mb-2">{a.title}</h3>
                <p className="text-clay font-medium text-sm">{a.outcome}</p>
              </div>
              <div className="absolute inset-0 p-6 bg-clay text-paper flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-display italic text-lg leading-snug">{a.story}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
