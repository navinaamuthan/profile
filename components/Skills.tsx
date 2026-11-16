"use client";

import Section from "@/components/Section";
import { skillCategories } from "@/data/skills";
import { skillToCerts } from "@/data/certifications";
import { projects } from "@/data/projects";
import { projectId } from "@/lib/slug";

export default function Skills() {
  const jumpToProjects = (names: string[]) => {
    const first = projects.find((p) => p.name === names[0]);
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

  const jumpToCert = (certId: string) => {
    document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent("cert-spotlight", { detail: certId }));
    }, 350);
  };

  return (
    <Section id="skills" index="04" label="Skills">
      <div className="skills-matrix">
        {skillCategories.map((c) => (
          <div key={c.id} className="skills-row">
            <h3 className="label">{c.label}</h3>
            <div className="flex flex-wrap gap-2">
              {c.skills.map((s) => {
                const certs = skillToCerts[s.name];
                const hasProjects = Boolean(s.projects?.length);
                const hasCerts = Boolean(certs?.length);
                const interactive = hasProjects || hasCerts;
                if (!interactive) {
                  return (
                    <span key={s.name} className="skill-pill">
                      {s.name}
                    </span>
                  );
                }
                return (
                  <button
                    key={s.name}
                    type="button"
                    className="skill-pill is-link"
                    onClick={() => {
                      if (hasProjects) jumpToProjects(s.projects!);
                      else jumpToCert(certs![0]);
                    }}
                    title={
                      hasProjects
                        ? `Used in ${s.projects!.join(", ")}`
                        : "Open linked certification"
                    }
                  >
                    {s.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
