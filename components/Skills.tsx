import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" index="04" label="Capabilities">
      <dl>
        {skillGroups.map((g, i) => (
          <div key={g.group} className={i === 0 ? "" : "border-t border-line"}>
            <Reveal delay={Math.min(i * 60, 180)}>
              <div className="grid gap-2 py-7 sm:grid-cols-[minmax(11rem,14rem)_1fr] sm:gap-8">
                <dt className="font-display text-lg">{g.group}</dt>
                <dd className="text-[15px] leading-loose text-muted">{g.items.join("  ·  ")}</dd>
              </div>
            </Reveal>
          </div>
        ))}
      </dl>
    </Section>
  );
}
