"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { experience } from "@/data/experience";

export default function Experience() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Section id="experience" index="02" label="Experience" color="#D4B896" dark>
      <ol>
        {experience.map((e) => {
          const id = `${e.role}-${e.company}`;
          const isOpen = open === id;
          return (
            <li key={id} className="border-b border-paper/20 last:border-b-0">
              <button
                type="button"
                className="exp-row group flex w-full items-center gap-4 py-4 text-left sm:py-5"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : id)}
              >
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-lg font-bold text-paper sm:text-xl">
                    {e.role}
                  </span>
                  <span className="mt-1 block text-[16px] font-semibold text-paper">{e.company}</span>
                </span>
                <span className="hidden shrink-0 text-[13px] font-semibold tabular-nums text-gold sm:block">
                  {e.period}
                </span>
                <span className="expand-btn expand-btn-dark" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <p className="pb-1 text-[12.5px] font-medium tabular-nums text-accentSoft sm:hidden">
                {e.period}
              </p>
              {isOpen && (
                <div className="pb-5">
                  <p className="max-w-xl text-[15px] leading-relaxed text-paper/80">{e.summary}</p>
                  <ul className="mt-3 max-w-xl space-y-1.5 text-[14.5px] leading-relaxed text-paper/75">
                    {e.points.map((p) => (
                      <li key={p.slice(0, 48)}>
                        <span className="mr-2 text-gold">·</span>
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
