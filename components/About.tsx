"use client";

import { Section, FadeIn, Counter } from "./ui";
import Spotlight from "./Spotlight";
import { principles } from "@/data/thinking";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Not a biography. A way of working.">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <FadeIn>
          <div className="space-y-5 text-lg text-ink/80 leading-relaxed">
            <p>
              I have led an 8 to 10 person product team, delivered Fortune 500 implementations across 120+
              countries, and built an adversarial AI system that placed in the top 0.5% of 50,000+ teams. The
              common thread is not a job title. It is a habit: I get obsessed with why something is not working,
              and I do not stop until there is a measurable answer.
            </p>
            <p>
              What excites me right now is the messy middle of AI: the gap between what models can do and what
              people can trust. My dissertation lives there (EU AI Act compliance for financial AI), my flagship
              project lives there (agents that argue with each other before advising you), and my published
              writing lives there (how consultants should validate AI outputs).
            </p>
            <p>
              With teams, I am the person who prototypes during the debate, brings the user quote nobody wants
              to hear, and keeps the metric on the wall. Warm by default, direct when it matters.
            </p>
            <p>
              I also do not sit still: IEEE Women in Engineering Chair in undergrad, Class Representative and
              STEM Convenor at Trinity, open source ML with Omdena, and a standing habit of case competitions,
              including winning Bloomberg&apos;s BPuzzled and reaching the Deloitte Case Competition final.
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

      <FadeIn>
        <h3 className="font-display text-2xl md:text-3xl mb-8">How I think</h3>
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {principles.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <Spotlight className="card group relative p-6 h-full overflow-hidden hover:shadow-lift hover:-translate-y-1 transition-all">
              <span aria-hidden className="absolute -right-2 -top-4 font-display text-7xl text-clay/10 group-hover:text-clay/25 transition-colors select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-xl mb-2 relative">{p.title}</p>
              <p className="text-sm text-muted leading-relaxed relative">{p.note}</p>
              <span aria-hidden className="absolute bottom-0 left-0 h-[3px] w-0 bg-clay group-hover:w-full transition-all duration-500" />
            </Spotlight>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
