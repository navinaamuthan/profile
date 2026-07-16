"use client";

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { skillCategories, evidence, type SkillCategory } from "@/data/skills";
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

  const max = Math.max(...evidence.map((e) => e.count));

  return (
    <Section id="skills" index="04" label="Skills">
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((c, i) => (
          <Reveal key={c.id} delay={Math.min((i % 2) * 80, 160)}>
            <div className="tile h-full">
              <div className="flex items-center gap-3">
                <span className="tile-icon">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                    {icons[c.icon]}
                  </svg>
                </span>
                <h3 className="font-display text-lg">{c.label}</h3>
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
        <p className="mt-5 text-[13px] text-muted">
          Chips with a dot are backed by a project on this page. Click one to jump to it.
        </p>
      </Reveal>

      {/* Evidence chart */}
      <Reveal delay={80}>
        <div className="mt-14 border-t border-line pt-10">
          <h3 className="font-display text-lg">Evidence by domain</h3>
          <p className="mt-1 text-[13px] text-muted">
            Projects and roles on this page that back each domain. Counted, not self-rated.
          </p>
          <div className="mt-6 space-y-4">
            {evidence.map((e, i) => (
              <div key={e.domain} className="grid items-center gap-2 sm:grid-cols-[11rem_1fr_2rem] sm:gap-4">
                <p className="text-[13px] text-ink/85">{e.domain}</p>
                <div className="h-2.5 rounded-full bg-line/60" title={e.note}>
                  <div
                    className="bar h-full rounded-full bg-accent"
                    style={{
                      width: `${(e.count / max) * 100}%`,
                      ["--bar-delay" as string]: `${i * 90}ms`,
                    }}
                  />
                </div>
                <p className="hidden text-[13px] tabular-nums text-muted sm:block">{e.count}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
