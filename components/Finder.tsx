"use client";

import { useEffect, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { projectId } from "@/lib/slug";

const groups: { label: string; tags: string[] | null }[] = [
  { label: "All projects", tags: null },
  { label: "AI & agents", tags: ["Agentic AI", "LLM Evaluation", "LLM Education"] },
  { label: "Responsible AI", tags: ["Responsible AI"] },
  { label: "ML for health", tags: ["AI for Health"] },
  { label: "Product", tags: ["Product Thinking", "Personal Build"] },
  { label: "Hackathons", tags: ["Hackathon", "Hackathon · AI for Public Safety", "Computer Vision"] },
  { label: "Open source", tags: ["Open Source ML"] },
];

function FolderIcon({ flagship }: { flagship: boolean }) {
  return (
    <svg
      viewBox="0 0 64 48"
      className={`h-9 w-12 ${flagship ? "text-accent" : "text-muted"}`}
      aria-hidden
    >
      <path
        d="M4 10c0-2.2 1.8-4 4-4h16l6 6h26c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V10z"
        fill="currentColor"
        opacity="0.55"
      />
      <path d="M4 18h56v22c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V18z" fill="currentColor" />
    </svg>
  );
}

export default function Finder() {
  const [group, setGroup] = useState(groups[0]);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const visible = group.tags ? projects.filter((p) => group.tags!.includes(p.tag)) : projects;

  useEffect(() => {
    if (!openProject) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenProject(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openProject]);

  // Skill chips elsewhere on the page open a project's Quick Look directly.
  useEffect(() => {
    const onOpen = (e: Event) => {
      const name = (e as CustomEvent<string>).detail;
      const p = projects.find((x) => x.name === name);
      if (!p) return;
      setGroup(groups[0]);
      setOpenProject(p);
    };
    window.addEventListener("finder-open", onOpen);
    return () => window.removeEventListener("finder-open", onOpen);
  }, []);

  return (
    <>
      <div className="window overflow-hidden">
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
          <p className="label">Projects</p>
          <p className="text-sm tabular-nums text-muted">{visible.length} items</p>
        </div>

        <div className="grid sm:grid-cols-[11rem_1fr]">
          {/* Category filter */}
          <div className="flex gap-1 overflow-x-auto border-b border-line p-2 sm:flex-col sm:border-b-0 sm:border-r sm:p-3">
            {groups.map((g) => (
              <button
                key={g.label}
                type="button"
                onClick={() => setGroup(g)}
                aria-pressed={g.label === group.label}
                className={`min-h-10 whitespace-nowrap rounded-sm px-3 py-2 text-left text-sm transition-colors ${
                  g.label === group.label
                    ? "bg-navy font-semibold text-paper"
                    : "text-muted hover:text-ink"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid min-h-[16rem] grid-cols-2 content-start gap-1 p-3 sm:grid-cols-3 sm:p-4 md:grid-cols-4">
            {visible.map((p) => {
              const flagship = Boolean(p.flagship || p.featured);
              return (
                <button
                  key={p.name}
                  type="button"
                  id={flagship ? undefined : projectId(p.name)}
                  onClick={() => setOpenProject(p)}
                  className="file-tile flex flex-col items-center gap-2 px-2 py-4 text-center"
                  title={p.summary}
                >
                  <FolderIcon flagship={flagship} />
                  <span className="text-sm font-semibold leading-snug">
                    {flagship && (
                      <span className="mr-1 text-accent" aria-hidden>
                        ★
                      </span>
                    )}
                    {p.name}
                  </span>
                  <span className="text-xs leading-snug text-muted">{p.tag}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-t border-line px-4 py-3 text-xs text-muted">
          ★ and bronze folders mark the flagship work. Click any folder for the full story.
        </div>
      </div>

      {/* Quick Look */}
      {openProject && (
        <div
          className="quicklook-overlay fixed inset-0 z-[70] flex items-center justify-center bg-navy/60 p-4"
          onClick={() => setOpenProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={openProject.name}
        >
          <div
            className="quicklook window max-h-[85vh] w-full max-w-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between gap-4 border-b border-line bg-surface py-2 pl-6 pr-2">
              <p className="label truncate">{openProject.name} · preview</p>
              <button
                type="button"
                onClick={() => setOpenProject(null)}
                aria-label="Close preview"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-paper hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="tag-pill">{openProject.tag}</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{openProject.name}</h3>
              <p className="mt-4 text-base leading-relaxed text-ink">
                {openProject.summary}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{openProject.solution}</p>

              {openProject.metrics.length > 0 && (
                <p className="mt-4 text-sm font-semibold text-accent">{openProject.metrics.join(" · ")}</p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {openProject.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              {(openProject.github || openProject.live) && (
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-4 text-base">
                  {openProject.live && (
                    <a
                      href={openProject.live}
                      className="link arrow-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live site
                      <span className="arrow" aria-hidden>
                        &#8599;
                      </span>
                    </a>
                  )}
                  {openProject.github && (
                    <a
                      href={openProject.github}
                      className="link arrow-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                      <span className="arrow" aria-hidden>
                        &#8599;
                      </span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
