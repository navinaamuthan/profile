"use client";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { skillCategories, evidence, type SkillCategory } from "@/data/skills";
import { projects } from "@/data/projects";
import { projectId } from "@/lib/slug";

const icons: Record<SkillCategory["icon"], React.ReactNode> = {
  sparkle: (
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 15l.9 2.6L22.5 18.5l-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9L19 15z" />
  ),
  branch: (
    <path d="M6 4a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4zM6 16a2 2 0 100 4 2 2 0 000-4zm0-8v8m12-8v2a4 4 0 01-4 4h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  ),
  chart: (
    <path d="M4 20V10m5.5 10V4M15 20v-7m5 7V8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  ),
  database: (
    <path d="M12 4c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zm-8 3v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="currentColor" strokeWidth="1.6" />
  ),
  grid: (
    <path d="M5 5h6v6H5V5zm8 0h6v6h-6V5zM5 13h6v6H5v-6zm8 3h6v3h-6v-3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  ),
  cloud: (
    <path d="M7 18a4 4 0 01-.6-7.95A5.5 5.5 0 0117.2 8.6 4.2 4.2 0 0117 18H7z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  ),
  kanban: (
    <path d="M5 4h4v16H5V4zm10 0h4v10h-4V4z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  ),
  shield: (
    <path d="M12 3l7 3v5c0 4.5-3 8.4-7 10-4-1.6-7-5.5-7-10V6l7-3zm-2.5 9l2 2 3.5-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export default function Skills() {
  const jumpToProjects = (names: string[]) => {
    const first = projects.find((p) => p.name === names[0]);
    // Projects that live in the Finder open their Quick Look directly.
    if (first && !first.flagship && !first.featured) {
      window.dispatchEvent(new CustomEvent("finder-open", { detail: first.name }));
      return;
    }
    const targets = names
      .map((n) => document.getElementById(projectId(n)))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;
    targets[0].scrollIntoView({ behavior: "smooth", block: "center" });
    for (const t of targets) {
      t.classList.remove("is-highlighted");
      void t.offsetWidth;
      t.classList.add("is-highlighted");
      setTimeout(() => t.classList.remove("is-highlighted"), 2600);
    }
  };

  return (
    <Section id="skills" index="04" label="Skills" color="#D97706">
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((c, i) => (
          <Reveal key={c.id} delay={Math.min((i % 2) * 80, 160)}>
            <div className="tile h-full" style={{ ["--tile-color" as string]: c.color }}>
              <div className="flex items-center gap-3">
                <span className="tile-icon">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                    {icons[c.icon]}
                  </svg>
                </span>
                <h3 className="font-display text-lg font-bold">{c.label}</h3>
                <span className="tile-count">{c.skills.length}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.skills.map((s) =>
                  s.projects ? (
                    <button
                      key={s.name}
                      className="chip"
                      onClick={() => jumpToProjects(s.projects!)}
                      title={`Used in ${s.projects.join(", ")}`}
                    >
                      {s.name}
                      <span className="chip-dot" aria-hidden />
                    </button>
                  ) : (
                    <span key={s.name} className="chip">
                      {s.name}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-6 text-[15px] font-medium text-ink/80">
          A coloured dot on a chip means there is a real project behind it on this page. Click the
          chip and the project opens.
        </p>
      </Reveal>

      {/* Where the proof sits: one dot per project or role */}
      <Reveal delay={80}>
        <div className="mt-14 rounded-2xl border border-line bg-white p-7 sm:p-9">
          <h3 className="font-display text-2xl font-bold">Where the proof sits</h3>
          <p className="mt-1.5 text-[14px] text-muted">
            One dot = one project or job on this page. No self-ratings, just a count.
          </p>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {evidence.map((e) => (
              <div
                key={e.domain}
                className="rounded-xl p-4"
                style={{ background: `${e.color}0D`, border: `1px solid ${e.color}30` }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-display text-[15px] font-bold text-ink">{e.domain}</p>
                  <p className="font-display text-2xl font-bold" style={{ color: e.color }}>
                    {e.count}
                  </p>
                </div>
                <div className="mt-2 flex gap-1.5" aria-hidden>
                  {Array.from({ length: e.count }).map((_, d) => (
                    <span
                      key={d}
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: e.color }}
                    />
                  ))}
                </div>
                <p className="mt-3 text-[12px] leading-relaxed text-muted">{e.note}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
