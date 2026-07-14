"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Section, FadeIn, Tag, GitHubIcon } from "./ui";
import { projects, type Project } from "@/data/projects";
import IgnitrixDiagram from "./IgnitrixDiagram";

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectLinks({ p }: { p: Project }) {
  if (!p.github && !p.live) return null;
  return (
    <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-ink/60 hover:text-clay transition-colors focus-ring"
        >
          <GitHubIcon size={14} />
          Code
        </a>
      )}
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-ink/60 hover:text-clay transition-colors focus-ring"
        >
          <ExternalIcon />
          Live
        </a>
      )}
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <motion.span
      aria-hidden
      animate={{ rotate: open ? 45 : 0 }}
      transition={{ duration: 0.25 }}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sand bg-white/70 text-clay text-xl font-light leading-none group-hover:border-clay transition-colors"
    >
      +
    </motion.span>
  );
}

function ProjectCard({
  p,
  open,
  onToggle,
}: {
  p: Project;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  const showcase = p.flagship || p.featured;

  return (
    <motion.div
      layout={reduce ? false : true}
      transition={{ layout: { duration: 0.45, type: "spring", bounce: 0.15 } }}
      className="h-full"
    >
      {/* gradient ring for showcase cards */}
      <div
        className={`h-full rounded-card ${
          showcase
            ? "p-[1.5px] bg-gradient-to-br from-clay via-sand to-clay/30"
            : ""
        }`}
      >
        <div
          role="button"
          tabIndex={0}
          aria-expanded={open}
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onToggle();
            }
          }}
          className={`card group relative h-full cursor-pointer overflow-hidden p-6 md:p-7 transition-all focus-ring ${
            open ? "shadow-lift" : "hover:shadow-lift hover:-translate-y-1"
          }`}
        >
          {/* sheen on hover */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />

          {/* collapsed header */}
          <div className="relative flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="mb-2.5 flex flex-wrap items-center gap-2">
                {p.flagship && (
                  <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-clay text-paper">
                    Flagship
                  </span>
                )}
                {p.featured && (
                  <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-ink text-paper">
                    Featured
                  </span>
                )}
                <Tag>{p.tag}</Tag>
              </div>
              <h3 className="font-display text-2xl md:text-[1.7rem] leading-tight">{p.name}</h3>
              <p className="mt-2 text-sm md:text-[15px] text-ink/70 leading-relaxed">{p.summary}</p>
            </div>
            <Chevron open={open} />
          </div>

          {/* collapsed footer */}
          <div className="relative mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-medium text-clay">{p.metrics[0]}</p>
            <ProjectLinks p={p} />
          </div>

          {/* expanded detail */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="detail"
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduce ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.21, 0.6, 0.35, 1] }}
                className="relative overflow-hidden"
              >
                <div className="mt-6 border-t border-sand pt-6">
                  <div className="grid gap-8 md:grid-cols-2 text-sm md:text-base">
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                      className="space-y-5"
                    >
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-1">Problem</p>
                        <p className="text-ink/80 leading-relaxed">{p.problem}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-1">Solution</p>
                        <p className="text-ink/80 leading-relaxed">{p.solution}</p>
                      </div>
                      {p.architecture && (
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-1">Architecture</p>
                          <p className="text-ink/80 leading-relaxed">{p.architecture}</p>
                        </div>
                      )}
                    </motion.div>
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                      className="space-y-5"
                    >
                      {p.decisions && (
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-2">Product decisions</p>
                          <ul className="space-y-2">
                            {p.decisions.map((d) => (
                              <li key={d} className="text-ink/80 leading-relaxed pl-4 border-l-2 border-clay/40">
                                {d}.
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-2">Metrics</p>
                        <div className="flex flex-wrap gap-2">
                          {p.metrics.map((m) => (
                            <span key={m} className="px-3 py-1.5 rounded-full bg-beige text-sm font-medium">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                      {p.flagship && (
                        <div className="rounded-xl border border-sand bg-white/60 p-4 flex justify-center">
                          <IgnitrixDiagram />
                        </div>
                      )}
                    </motion.div>
                  </div>
                  <motion.div
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                  >
                    <div className="mt-7 flex flex-wrap items-center gap-2">
                      {p.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <p className="mt-6 font-display italic text-xl text-clayDeep max-w-2xl">{p.lesson}</p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ordered = [
    ...projects.filter((p) => p.flagship),
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.flagship && !p.featured),
  ];

  const tags = ["All", ...Array.from(new Set(ordered.map((p) => p.tag)))];
  const [filter, setFilter] = useState("All");
  const [openName, setOpenName] = useState<string | null>(null);

  const visible = filter === "All" ? ordered : ordered.filter((p) => p.tag === filter);

  return (
    <Section id="projects" eyebrow="Projects" title="Built to answer hard questions, not fill a portfolio.">
      {/* Filters above everything, including the flagship */}
      <FadeIn>
        <div className="mb-9 flex flex-wrap gap-2">
          {tags.map((t) => {
            const active = filter === t;
            const count = t === "All" ? ordered.length : ordered.filter((p) => p.tag === t).length;
            return (
              <button
                key={t}
                onClick={() => {
                  setFilter(t);
                  setOpenName(null);
                }}
                className={`relative font-mono text-[11px] uppercase tracking-wider px-4 py-2 rounded-full transition-colors focus-ring ${
                  active ? "text-paper" : "text-ink/60 hover:text-clay"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-clay shadow-lift"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {!active && (
                  <span aria-hidden className="absolute inset-0 rounded-full border border-sand bg-white/60" />
                )}
                <span className="relative">
                  {t} <span className={active ? "opacity-80" : "opacity-50"}>{count}</span>
                </span>
              </button>
            );
          })}
        </div>
      </FadeIn>

      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <motion.div
            key={p.name}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            className={openName === p.name ? "md:col-span-2 lg:col-span-3" : ""}
          >
            <ProjectCard
              p={p}
              open={openName === p.name}
              onToggle={() => setOpenName(openName === p.name ? null : p.name)}
            />
          </motion.div>
        ))}
      </motion.div>

      <FadeIn>
        <p className="mt-8 text-center font-mono text-xs text-muted">
          Click any card for the full story: problem, architecture, decisions, lessons.
        </p>
      </FadeIn>
    </Section>
  );
}
