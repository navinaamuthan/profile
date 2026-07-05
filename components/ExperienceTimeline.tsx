"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, FadeIn, Tag } from "./ui";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section id="experience" eyebrow="Experience" title="Five chapters. One throughline: measurable impact.">
      <div className="relative">
        <div aria-hidden className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-sand" />
        <div className="space-y-4">
          {experience.map((e, i) => {
            const open = openIdx === i;
            return (
              <FadeIn key={e.company} delay={i * 0.05}>
                <div className="relative pl-8 md:pl-12">
                  <span
                    aria-hidden
                    className={`absolute left-0 top-6 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 transition-colors ${
                      open ? "bg-clay border-clay" : "bg-paper border-sand"
                    }`}
                  />
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    className="card w-full text-left p-6 hover:shadow-lift transition-shadow focus-ring"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="font-display text-xl md:text-2xl">{e.role}</h3>
                        <p className="text-clay font-medium">{e.company}</p>
                      </div>
                      <p className="font-mono text-xs text-muted">{e.period}</p>
                    </div>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 grid md:grid-cols-2 gap-6 text-sm">
                            <div>
                              <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-1">Challenge</p>
                              <p className="text-ink/80 leading-relaxed mb-4">{e.challenge}</p>
                              <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-1">Actions</p>
                              <ul className="text-ink/80 leading-relaxed space-y-1">
                                {e.actions.map((a) => (
                                  <li key={a}>{a}.</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-1">Impact</p>
                              <p className="text-ink font-medium leading-relaxed mb-4">{e.impact}</p>
                              <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-2">Toolkit</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {e.tech.map((t) => (
                                  <Tag key={t}>{t}</Tag>
                                ))}
                              </div>
                              <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-1">Lesson learned</p>
                              <p className="font-display italic text-lg text-clayDeep">{e.lesson}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
