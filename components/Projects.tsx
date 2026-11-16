"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Finder from "@/components/Finder";
import { projects } from "@/data/projects";
import { projectId } from "@/lib/slug";

export default function Projects() {
  const featured = projects.filter((p) => p.flagship || p.featured);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Section id="work" index="06" label="Selected work">
      <div className="grid gap-4 sm:grid-cols-2">
        {featured.map((p) => {
          const isOpen = open === p.name;
          return (
            <article
              key={p.name}
              id={projectId(p.name)}
              className="project-card scroll-mt-24"
            >
              <div className="project-card-front p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="tag-pill">{p.tag}</span>
                  <button
                    type="button"
                    className="expand-btn"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? `Hide ${p.name} details` : `Show ${p.name} details`}
                    onClick={() => setOpen(isOpen ? null : p.name)}
                  >
                    {isOpen ? "−" : "+"}
                  </button>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
                  {p.live || p.github ? (
                    <a
                      href={p.live ?? p.github}
                      className="link arrow-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.name}
                      <span className="arrow" aria-hidden>
                        &#8599;
                      </span>
                    </a>
                  ) : (
                    p.name
                  )}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{p.summary}</p>
                {isOpen && (
                  <div className="mt-4 border-t border-line pt-4">
                    <p className="text-sm leading-relaxed text-ink">{p.solution}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="metric-pill">{p.metrics[0]}</span>
                      <span className="text-sm text-muted">{p.tech.slice(0, 4).join(", ")}</span>
                      {p.github && p.live && (
                        <a
                          href={p.github}
                          className="link text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <Reveal>
        <h3 className="mt-12 font-display text-xl font-bold text-ink">
          Additional work
        </h3>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-4">
          <Finder />
        </div>
      </Reveal>
    </Section>
  );
}
