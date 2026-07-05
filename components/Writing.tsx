"use client";

import { Section, FadeIn, Tag } from "./ui";
import { articles } from "@/data/writing";

export default function Writing() {
  return (
    <Section id="writing" eyebrow="Writing & case studies" title="I write about what I build, and why it breaks.">
      <div className="grid md:grid-cols-3 gap-5">
        {articles.map((a, i) => (
          <FadeIn key={a.title} delay={i * 0.08} className={a.featured ? "md:col-span-2" : ""}>
            <article
              className={`card p-7 h-full flex flex-col hover:shadow-lift hover:-translate-y-1 transition-all ${
                a.featured ? "bg-ink text-paper border-ink" : ""
              } ${a.status === "coming-soon" ? "border-dashed" : ""}`}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {a.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <h3 className={`font-display leading-snug mb-3 ${a.featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
                {a.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${a.featured ? "text-paper/75" : "text-ink/75"}`}>
                {a.summary}
              </p>
              <p className={`mt-auto font-mono text-xs ${a.featured ? "text-paper/50" : "text-muted"}`}>
                {a.date}
                {a.readingTime ? ` · ${a.readingTime}` : ""}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
