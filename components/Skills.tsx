"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { skillCategories } from "@/data/skills";
import { projectId } from "@/lib/slug";

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];

  const jumpToProjects = (names: string[]) => {
    const targets = names
      .map((n) => document.getElementById(projectId(n)))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;
    targets[0].scrollIntoView({ behavior: "smooth", block: "center" });
    for (const t of targets) {
      t.classList.remove("is-highlighted");
      void t.offsetWidth; // restart the pulse if it was already running
      t.classList.add("is-highlighted");
      setTimeout(() => t.classList.remove("is-highlighted"), 2600);
    }
  };

  return (
    <Section id="skills" index="04" label="Capabilities">
      <Reveal>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Skill categories">
          {skillCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`tab ${c.id === activeId ? "is-active" : ""}`}
              aria-pressed={c.id === activeId}
            >
              {c.label}
            </button>
          ))}
        </div>

        <p className="mt-6 font-display text-lg italic text-muted" key={`note-${active.id}`}>
          {active.note}
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5" key={active.id}>
          {active.skills.map((s, i) =>
            s.projects ? (
              <button
                key={s.name}
                className="chip"
                style={{ animationDelay: `${i * 25}ms` }}
                onClick={() => jumpToProjects(s.projects!)}
                title={`Used in ${s.projects.join(", ")}`}
              >
                {s.name}
                <span className="chip-dot" aria-hidden />
              </button>
            ) : (
              <span key={s.name} className="chip" style={{ animationDelay: `${i * 25}ms` }}>
                {s.name}
              </span>
            )
          )}
        </div>

        <p className="mt-6 text-[13px] text-muted">
          A terracotta dot means the skill shows up in one of the projects above. Click it and the
          page will take you there.
        </p>
      </Reveal>
    </Section>
  );
}
