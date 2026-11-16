"use client";

import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { impactProjects, type ImpactCategory, type ImpactProject } from "@/data/impactMap";

/**
 * Categories are told apart by fill and outline, not by hue, so the chart
 * stays inside the one-accent palette and still reads without colour vision.
 */
const categories: { id: ImpactCategory; label: string; dot: string }[] = [
  { id: "governance", label: "Governance", dot: "bg-ink border-ink" },
  { id: "ai", label: "AI / ML", dot: "bg-accent border-accent" },
  { id: "product", label: "Product", dot: "bg-surface border-accent" },
  { id: "fullstack", label: "Full-Stack", dot: "bg-surface border-ink" },
  { id: "oss", label: "Open Source", dot: "bg-muted border-muted" },
];

const dotClass = (c: ImpactCategory) => categories.find((x) => x.id === c)!.dot;

function Dot({
  project,
  isActive,
  onClick,
}: {
  project: ImpactProject;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group absolute flex h-10 w-10 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full ${
        isActive ? "z-10" : "z-[1]"
      }`}
      style={{ left: `${project.x}%`, bottom: `${project.y}%` }}
      aria-label={`${project.name}: ${project.tag}`}
      aria-pressed={isActive}
    >
      <span
        className={`block rounded-full border-2 transition-all duration-200 ${dotClass(project.category)} ${
          isActive
            ? "h-5 w-5 ring-4 ring-accent/25"
            : "h-3.5 w-3.5 group-hover:h-[18px] group-hover:w-[18px]"
        }`}
      />
    </button>
  );
}

function Legend() {
  return (
    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
      {categories.map((c) => (
        <span key={c.id} className="label flex items-center gap-2">
          <span className={`inline-block h-3 w-3 rounded-full border-2 ${c.dot}`} />
          {c.label}
        </span>
      ))}
    </div>
  );
}

export default function ImpactMap() {
  const [active, setActive] = useState<ImpactProject | null>(null);

  return (
    <Section id="impact" index="02" label="Impact Map">
      <Reveal>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">
          Where my work sits across technical depth and business impact — from
          strategy-led product specs to deep-tech research, from learning
          projects to production systems.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div>
          <p className="label mb-2">Business Impact ↑</p>
          <div className="relative aspect-[4/3] w-full rounded-card border border-line bg-surface sm:aspect-[2/1]">
            <div className="absolute inset-5 sm:inset-6">
              <div className="pointer-events-none absolute inset-0">
                {[25, 50, 75].map((v) => (
                  <div
                    key={`h-${v}`}
                    className="absolute left-0 right-0 border-t border-dashed border-line"
                    style={{ bottom: `${v}%` }}
                  />
                ))}
                {[25, 50, 75].map((v) => (
                  <div
                    key={`v-${v}`}
                    className="absolute bottom-0 top-0 border-l border-dashed border-line"
                    style={{ left: `${v}%` }}
                  />
                ))}
              </div>

              <span className="pointer-events-none absolute left-[4%] top-[4%] hidden text-xs text-muted md:block">
                Strategy × Production
              </span>
              <span className="pointer-events-none absolute right-[4%] top-[4%] hidden text-xs text-muted md:block">
                Deep Tech × Production
              </span>
              <span className="pointer-events-none absolute bottom-[4%] left-[4%] hidden text-xs text-muted md:block">
                Strategy × Learning
              </span>
              <span className="pointer-events-none absolute bottom-[4%] right-[4%] hidden text-xs text-muted md:block">
                Deep Tech × Learning
              </span>

              {impactProjects.map((p) => (
                <Dot
                  key={p.name}
                  project={p}
                  isActive={active?.name === p.name}
                  onClick={() => setActive(active?.name === p.name ? null : p)}
                />
              ))}
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="label">Strategy</span>
            <span className="label">Deep Tech</span>
          </div>

          <div
            className={`overflow-hidden rounded-card border bg-surface transition-all duration-300 ${
              active ? "mt-6 max-h-60 border-line p-6 opacity-100" : "max-h-0 border-transparent p-0 opacity-0"
            }`}
            aria-live="polite"
          >
            {active && (
              <div className="flex items-start gap-3">
                <span
                  className={`mt-1 inline-block h-3 w-3 flex-shrink-0 rounded-full border-2 ${dotClass(active.category)}`}
                />
                <div>
                  <h3 className="font-display text-base font-bold leading-tight">
                    {active.name}
                    <span className="label ml-2">{active.tag}</span>
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{active.summary}</p>
                </div>
              </div>
            )}
          </div>

          <Legend />
        </div>
      </Reveal>
    </Section>
  );
}
