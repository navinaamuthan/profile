"use client";

import { Section, FadeIn } from "./ui";
import Spotlight from "./Spotlight";
import { principles } from "@/data/thinking";

export default function HowIThink() {
  return (
    <Section id="how-i-think" eyebrow="Principles" title="How I think.">
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
