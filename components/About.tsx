"use client";

import { Section, FadeIn, Counter } from "./ui";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Not a biography. A way of working.">
      <div className="grid md:grid-cols-2 gap-12">
        <FadeIn>
          <div className="space-y-5 text-lg text-ink/80 leading-relaxed">
            <p>
              I have led an 8 to 10 person product team, delivered Fortune 500 implementations across 120+
              countries, and built an adversarial AI system that placed in the top 0.5% of 50,000+ teams. The
              common thread is a habit: I get obsessed with why something is not working, and I do not stop
              until there is a measurable answer.
            </p>
            <p>
              What excites me right now is the gap between what AI models can do and what people can trust. My
              dissertation lives there (EU AI Act compliance for financial AI), and so does almost everything I
              build.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="card p-8 grid grid-cols-2 gap-8 h-fit">
            <Counter to={50000} suffix="+" label="Hackathon field, top 0.5%" />
            <Counter to={10000} suffix="+" label="Users on product I led" />
            <Counter to={120} suffix="+" label="Countries implemented in" />
            <Counter to={70} suffix="%" label="Setup time reduction" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
