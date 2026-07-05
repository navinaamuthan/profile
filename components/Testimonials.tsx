"use client";

import { Section, FadeIn } from "./ui";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="What people say.">
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <figure className="card p-7 h-full flex flex-col hover:shadow-lift hover:-translate-y-1 transition-all">
              <span aria-hidden className="font-display text-5xl text-clay/40 leading-none mb-3">&ldquo;</span>
              <blockquote className="text-ink/70 italic leading-relaxed mb-6">{t.quote}</blockquote>
              <figcaption className="mt-auto">
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
