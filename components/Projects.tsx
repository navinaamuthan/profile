"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Finder from "@/components/Finder";
import { projects } from "@/data/projects";
import { projectId } from "@/lib/slug";

const cardColors = ["#A67C52", "#8B6914", "#1B3A4B", "#5C7C6A"];

export default function Projects() {
  const featured = projects.filter((p) => p.flagship || p.featured);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Section id="work" index="05" label="Selected work" color="#8B6914">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
        {featured.map((p, i) => {
          const color = cardColors[i % cardColors.length];
          const isOpen = open === p.name;
          return (
            <article
              key={p.name}
              id={projectId(p.name)}
              className="project-card scroll-mt-28"
              style={{ ["--card-color" as string]: color }}
            >
              <div className="project-card-front overflow-hidden p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
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
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight sm:text-2xl">
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
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink/80">{p.summary}</p>
                {isOpen && (
                  <div className="mt-3 border-t border-line pt-3">
                    <p className="text-[14px] leading-relaxed text-muted">{p.solution}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="metric-pill">{p.metrics[0]}</span>
                      <span className="text-[12.5px] text-muted">{p.tech.slice(0, 4).join(", ")}</span>
                      {p.github && p.live && (
                        <a
                          href={p.github}
                          className="link text-[13px]"
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
        <h3 className="mt-12 border-t border-line pt-8 font-display text-xl font-bold text-ink">
          Additional work
        </h3>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-5">
          <Finder />
        </div>
      </Reveal>
    </Section>
  );
}
