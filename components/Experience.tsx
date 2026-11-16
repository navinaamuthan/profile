"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { experience } from "@/data/experience";

export default function Experience() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Section id="experience" index="03" label="Experience" dark>
      <ol>
        {experience.map((e) => {
          const id = `${e.role}-${e.company}`;
          const isOpen = open === id;
          return (
            <li key={id} className="border-b border-paper/20 last:border-b-0">
              <button
                type="button"
                className="exp-row group flex w-full items-center gap-4 py-6 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : id)}
              >
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-xl font-bold text-paper">
                    {e.role}
                  </span>
                  <span className="mt-1 block text-base text-paper/80">{e.company}</span>
                  <span className="mt-2 block text-sm tabular-nums text-accentSoft sm:hidden">
                    {e.period}
                  </span>
                </span>
                <span className="hidden shrink-0 text-sm tabular-nums text-accentSoft sm:block">
                  {e.period}
                </span>
                <span className="expand-btn expand-btn-dark" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="pb-8">
                  <p className="max-w-2xl text-base leading-relaxed text-paper/90">{e.summary}</p>
                  <ul className="mt-4 max-w-2xl space-y-2 text-sm leading-relaxed text-paper/80">
                    {e.points.map((p) => (
                      <li key={p.slice(0, 48)}>
                        <span className="mr-2 text-accentSoft">·</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex max-w-2xl flex-wrap gap-2">
                    {e.tools.map((t) => (
                      <span key={t} className="chip-dark">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
