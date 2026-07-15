import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-heading">Skills</h2>
      <dl className="mt-7 space-y-4">
        {skillGroups.map((g) => (
          <div key={g.group} className="grid gap-0.5 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="text-[13px] text-muted sm:pt-[2px]">{g.group}</dt>
            <dd className="text-[15px] leading-relaxed">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
