"use client";

import { Section, FadeIn } from "./ui";
import { productTopics, researchTopics } from "@/data/productThinking";

function TopicGrid({ topics }: { topics: { title: string; note: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {topics.map((t, i) => (
        <FadeIn key={t.title} delay={i * 0.05}>
          <div className="card p-6 h-full hover:border-clay/50 transition-colors">
            <p className="font-medium mb-2">{t.title}</p>
            <p className="text-sm text-muted leading-relaxed">{t.note}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export default function ThinkingResearch() {
  return (
    <>
      <Section id="product-thinking" eyebrow="Product thinking" title="The craft behind the shipping.">
        <TopicGrid topics={productTopics} />
      </Section>
      <div className="bg-beige/40">
        <Section id="research" eyebrow="Research" title="Where AI meets rules, ethics, and reality.">
          <TopicGrid topics={researchTopics} />
        </Section>
      </div>
    </>
  );
}
