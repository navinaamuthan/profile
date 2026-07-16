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
  { label: "Hackathons", tags: ["Hackathon", "Computer Vision"] },
  { label: "Open source", tags: ["Open Source ML"] },
];

function FolderIcon({ accent }: { accent?: boolean }) {
  return (
    <svg viewBox="0 0 64 48" className="h-11 w-14" aria-hidden>
      <path
        d="M4 10c0-2.2 1.8-4 4-4h16l6 6h26c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V10z"
        fill={accent ? "#A34E27" : "#D8C9B4"}
      />
      <path
        d="M4 18h56v22c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V18z"
        fill={accent ? "#B96038" : "#E7DAC6"}
      />
    </svg>
  );
}

function TrafficLights() {
  return (
    <span className="flex gap-1.5" aria-hidden>
      <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
      <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
      <span className="h-3 w-3 rounded-full bg-[#28C840]" />
    </span>
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

  return (
    <>
      <div className="window overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-4 border-b border-line bg-white/60 px-4 py-3">
          <TrafficLights />
          <p className="flex-1 text-center text-[13px] text-muted">
            ~/navina/projects · {visible.length} items
          </p>
          <span className="w-12" aria-hidden />
        </div>

        <div className="grid sm:grid-cols-[11rem_1fr]">
          {/* Sidebar */}
          <div className="flex gap-1.5 overflow-x-auto border-b border-line bg-white/40 p-3 sm:flex-col sm:border-b-0 sm:border-r">
            {groups.map((g) => (
              <button
                key={g.label}
                onClick={() => setGroup(g)}
                className={`whitespace-nowrap rounded-md px-3 py-1.5 text-left text-[13px] transition-colors ${
                  g.label === group.label
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:bg-line/40 hover:text-ink"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* File grid */}
          <div className="grid min-h-[16rem] grid-cols-2 content-start gap-1 p-4 sm:grid-cols-3 md:grid-cols-4">
            {visible.map((p) => (
              <button
                key={p.name}
                id={p.flagship || p.featured ? undefined : projectId(p.name)}
                onClick={() => setOpenProject(p)}
                className="file-tile flex flex-col items-center gap-2 rounded-lg p-4 text-center"
                title={p.summary}
              >
                <FolderIcon accent={p.flagship || p.featured} />
                <span className="text-[13px] leading-snug">{p.name}</span>
                <span className="text-[11px] text-muted">{p.tag}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-line bg-white/40 px-4 py-2 text-[11px] text-muted">
          Click a folder for the full story. Terracotta folders are the flagship work.
        </div>
      </div>

      {/* Quick Look */}
      {openProject && (
        <div
          className="quicklook-overlay fixed inset-0 z-[70] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
          onClick={() => setOpenProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={openProject.name}
        >
          <div
            className="quicklook window max-h-[85vh] w-full max-w-xl overflow-y-auto bg-paper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center gap-4 border-b border-line bg-paper/95 px-4 py-3 backdrop-blur">
              <button
                onClick={() => setOpenProject(null)}
                aria-label="Close preview"
                className="group flex gap-1.5"
              >
                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#FF5F57] text-[9px] text-ink/0 transition-colors group-hover:text-ink/70">
                  ×
                </span>
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" aria-hidden />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" aria-hidden />
              </button>
              <p className="flex-1 truncate text-center text-[13px] text-muted">
                {openProject.name} — preview
              </p>
              <span className="w-12" aria-hidden />
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent">{openProject.tag}</p>
              <h3 className="mt-2 font-display text-3xl tracking-tight">{openProject.name}</h3>
              <p className="mt-3 font-display text-lg leading-relaxed text-ink/90">
                {openProject.summary}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{openProject.solution}</p>

              {openProject.metrics.length > 0 && (
                <p className="mt-4 text-[13px] text-accent">{openProject.metrics.join(" · ")}</p>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {openProject.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              {(openProject.github || openProject.live) && (
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-[15px]">
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
