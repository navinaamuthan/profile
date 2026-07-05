"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, FadeIn } from "./ui";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const [active, setActive] = useState("All");
  const groups = active === "All" ? skillGroups : skillGroups.filter((g) => g.group === active);

  return (
    <div className="bg-beige/40">
      <Section id="skills" eyebrow="Skills" title="One toolkit, three job titles.">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-10">
            {["All", ...skillGroups.map((g) => g.group)].map((g) => (
              <button
                key={g}
                onClick={() => setActive(g)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus-ring ${
                  active === g ? "bg-clay text-paper shadow-soft" : "bg-white/70 border border-sand hover:border-clay"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </FadeIn>
        <AnimatePresence mode="popLayout">
          {groups.map((g) => (
            <motion.div
              key={g.group}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="mb-10"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="font-display text-2xl">{g.group}</h3>
                <span className="font-mono text-xs text-muted">{g.blurb}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-sand text-sm hover:border-clay hover:text-clay hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </Section>
    </div>
  );
}
