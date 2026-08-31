"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { experience } from "@/data/experience";

export default function Experience() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Section id="experience" index="02" label="Experience" color="#D4B896" dark>
      <ol className="divide-y divide-paper/15">
        {experience.map((e) => {
          const id = `${e.role}-${e.company}`;
          const isOpen = open === id;
          return (
            <li key={id}>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : id)}
              >
                <span>
                  <span className="block font-display text-lg font-bold sm:text-xl">
                    {e.role}
                  </span>
                  <span className="mt-0.5 block text-[14px] text-paper/60">{e.company}</span>
                </span>
                <span className="shrink-0 pt-1 text-right">
                  <span className="block text-[12px] font-medium tabular-nums text-accentSoft">
                    {e.period}
                  </span>
                  <span className="mt-1 inline-block text-[13px] text-paper/45" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </span>
              </button>
              {isOpen && (
                <div className="pb-5">
                  <p className="max-w-xl text-[15px] leading-relaxed text-paper/75">{e.summary}</p>
                  <ul className="mt-3 max-w-xl space-y-1.5 text-[14.5px] leading-relaxed text-paper/70">
                    {e.points.map((p) => (
                      <li key={p.slice(0, 48)}>
                        <span className="mr-2 text-accentSoft">·</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex max-w-xl flex-wrap gap-1.5">
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
