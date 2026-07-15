import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-heading">Experience</h2>
      <ol className="mt-7 space-y-8">
        {experience.map((e) => (
          <li key={e.company} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <p className="text-[13px] tabular-nums text-muted sm:pt-[3px]">{e.period}</p>
            <div>
              <h3 className="text-[15px] font-medium">
                {e.role} · <span className="font-normal">{e.company}</span>
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{e.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
