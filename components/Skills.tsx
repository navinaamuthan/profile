"use client";

import { Section, FadeIn, Tag } from "./ui";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <div className="bg-beige/40">
      <Section id="skills" eyebrow="Skills" title="A toolkit that spans the whole product lifecycle.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {skillGroups.map((g, i) => (
            <FadeIn key={g.group} delay={i * 0.05}>
              <div>
                <h3 className="font-display text-xl mb-4 border-b border-sand pb-2">{g.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
