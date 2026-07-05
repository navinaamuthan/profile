"use client";

import { Section, FadeIn, Tag } from "./ui";
import { projects } from "@/data/projects";
import Spotlight from "./Spotlight";
import IgnitrixDiagram from "./IgnitrixDiagram";

export default function Projects() {
  const flagship = projects.find((p) => p.flagship)!;
  const rest = projects.filter((p) => !p.flagship);

  return (
    <Section id="projects" eyebrow="Projects" title="Built to answer hard questions, not fill a portfolio.">
      {/* Flagship */}
      <FadeIn>
        <Spotlight className="card p-8 md:p-12 mb-10 hover:shadow-lift hover:-translate-y-1 transition-all">
          <div aria-hidden className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-clay/10 blur-3xl" />
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-clay text-paper">
              Flagship
            </span>
            <Tag>{flagship.tag}</Tag>
          </div>
          <h3 className="font-display text-4xl md:text-5xl mb-6">{flagship.name}</h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base">
            <div className="space-y-5">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-1">Problem</p>
                <p className="text-ink/80 leading-relaxed">{flagship.problem}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-1">Solution</p>
                <p className="text-ink/80 leading-relaxed">{flagship.solution}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-1">Architecture</p>
                <p className="text-ink/80 leading-relaxed">{flagship.architecture}</p>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-2">Product decisions</p>
                <ul className="space-y-2">
                  {flagship.decisions.map((d) => (
                    <li key={d} className="text-ink/80 leading-relaxed pl-4 border-l-2 border-clay/40">
                      {d}.
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-2">Metrics</p>
                <div className="flex flex-wrap gap-2">
                  {flagship.metrics.map((m) => (
                    <span key={m} className="px-3 py-1.5 rounded-full bg-beige text-sm font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-sand bg-white/60 p-4 flex justify-center">
                <IgnitrixDiagram />
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {flagship.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <p className="mt-6 font-display italic text-xl text-clayDeep max-w-2xl">{flagship.lesson}</p>
        </Spotlight>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-5">
        {rest.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.08}>
            <Spotlight className="card p-6 h-full flex flex-col hover:shadow-lift hover:-translate-y-1 transition-all">
              <Tag>{p.tag}</Tag>
              <h3 className="font-display text-xl mt-3 mb-2">{p.name}</h3>
              <p className="text-sm text-ink/75 leading-relaxed mb-3">{p.problem}</p>
              <p className="text-sm text-ink/75 leading-relaxed mb-4">{p.solution}</p>
              <div className="mt-auto">
                <p className="text-sm font-medium text-clay mb-3">{p.metrics[0]}</p>
                <p className="text-xs text-muted italic">{p.lesson}</p>
              </div>
            </Spotlight>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
