"use client";

import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { impactProjects, type ImpactProject } from "@/data/impactMap";

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
      className={`group absolute z-[1] -translate-x-1/2 -translate-y-1/2 p-2 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        isActive ? "z-10" : ""
      }`}
      style={{
        left: `${project.x}%`,
        bottom: `${project.y}%`,
      }}
      aria-label={`${project.name}: ${project.tag}`}
      aria-pressed={isActive}
    >
      {isActive && (
        <span
          className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full opacity-20"
          style={{ background: project.color }}
        />
      )}
      <span
        className={`relative block rounded-full border-2 border-paper transition-all duration-200 ${
          isActive ? "h-5 w-5 shadow-lg" : "h-3 w-3 group-hover:h-4 group-hover:w-4"
        }`}
        style={{ background: project.color }}
      />
    </button>
  );
}

function Legend() {
  const categories = [
    { label: "Governance", color: "#0F8B8D" },
    { label: "AI / ML", color: "#8B6914" },
    { label: "Product", color: "#A67C52" },
    { label: "Full-Stack", color: "#E4573D" },
    { label: "Open Source", color: "#2F5D50" },
  ];
  return (
    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
      {categories.map((c) => (
        <span
          key={c.label}
          className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: c.color }} />
          {c.label}
        </span>
      ))}
    </div>
  );
}

export default function ImpactMap() {
  const [active, setActive] = useState<ImpactProject | null>(null);

  return (
    <Section id="impact" index="02" label="Impact Map" color="#0F8B8D">
      <Reveal>
        <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-muted">
          Where my work sits across technical depth and business impact — from
          strategy-led product specs to deep-tech research, from learning
          projects to production systems.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="relative">
          <div className="relative mb-8 aspect-[16/10] w-full rounded-lg border border-line bg-paper/50 sm:aspect-[2/1]">
            <div className="absolute inset-3 sm:inset-5">
            <div className="pointer-events-none absolute inset-0">
              {[25, 50, 75].map((v) => (
                <div
                  key={`h-${v}`}
                  className="absolute left-0 right-0 border-t border-dashed border-line/40"
                  style={{ bottom: `${v}%` }}
                />
              ))}
              {[25, 50, 75].map((v) => (
                <div
                  key={`v-${v}`}
                  className="absolute bottom-0 top-0 border-l border-dashed border-line/40"
                  style={{ left: `${v}%` }}
                />
              ))}
            </div>

            <span className="absolute -bottom-7 left-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted/60">
              Strategy
            </span>
            <span className="absolute -bottom-7 right-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted/60">
              Deep Tech
            </span>
            <span className="pointer-events-none absolute -top-1 left-0 -translate-y-full text-[10px] font-semibold uppercase tracking-[0.14em] text-muted/60">
              Business Impact ↑
            </span>

            <span className="pointer-events-none absolute left-[12%] top-[18%] hidden text-[10px] font-medium text-muted/25 sm:block">
              Strategy × Production
            </span>
            <span className="pointer-events-none absolute right-[8%] top-[18%] hidden text-[10px] font-medium text-muted/25 sm:block">
              Deep Tech × Production
            </span>
            <span className="pointer-events-none absolute left-[12%] bottom-[12%] hidden text-[10px] font-medium text-muted/25 sm:block">
              Strategy × Learning
            </span>
            <span className="pointer-events-none absolute right-[8%] bottom-[12%] hidden text-[10px] font-medium text-muted/25 sm:block">
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

          <div
            className={`overflow-hidden rounded-lg border border-line bg-paper transition-all duration-300 ${
              active ? "max-h-48 p-5 opacity-100" : "max-h-0 border-transparent p-0 opacity-0"
            }`}
          >
            {active && (
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 inline-block h-3 w-3 flex-shrink-0 rounded-full"
                  style={{ background: active.color }}
                />
                <div>
                  <h3 className="font-display text-[15px] font-bold leading-tight">
                    {active.name}
                    <span className="ml-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                      {active.tag}
                    </span>
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted">{active.summary}</p>
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
