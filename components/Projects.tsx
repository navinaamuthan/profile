"use client";

import { Section, FadeIn, Tag } from "./ui";
import { projects } from "@/data/projects";
import Spotlight from "./Spotlight";
import IgnitrixDiagram from "./IgnitrixDiagram";

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

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
          <a
            href={flagship.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-ink/60 hover:text-clay transition-colors focus-ring"
          >
            <GitHubIcon />
            View code
          </a>
          <p className="mt-6 font-display italic text-xl text-clayDeep max-w-2xl">{flagship.lesson}</p>
        </Spotlight>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-5">
        {rest.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.08}>
            <Spotlight className="card group p-6 h-full flex flex-col hover:shadow-lift hover:-translate-y-1 transition-all">
              <Tag>{p.tag}</Tag>
              <h3 className="font-display text-xl mt-3 mb-2">{p.name}</h3>
              <p className="text-sm text-ink/75 leading-relaxed mb-3">{p.problem}</p>
              <p className="text-sm text-ink/75 leading-relaxed mb-4">{p.solution}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <p className="text-sm font-medium text-clay mb-2">{p.metrics[0]}</p>
                <p className="text-xs text-muted italic mb-3">{p.lesson}</p>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-ink/60 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:text-clay focus-ring"
                >
                  <GitHubIcon />
                  View code
                </a>
              </div>
            </Spotlight>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
