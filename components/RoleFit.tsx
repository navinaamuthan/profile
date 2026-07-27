import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { roleFits } from "@/data/roleFit";

export default function RoleFit() {
  return (
    <Section id="fit" index="01b" label="Role fit" color="#A67C52">
      <Reveal>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ink/80">
          Optimised for two primary IC tracks: full-stack software engineering and AI/ML associate
          engineering, with data / business analysis as a secondary fit. Every keyword below maps
          to work on this page.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {roleFits.map((r, i) => (
          <Reveal key={r.id} delay={Math.min(i * 70, 160)}>
            <article
              className={`role-fit-card h-full ${
                r.priority === "primary" ? "role-fit-card--primary" : "role-fit-card--secondary"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-bronze">
                  {r.employer}
                </p>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                    r.priority === "primary"
                      ? "bg-bronze/15 text-bronze"
                      : "bg-ink/5 text-muted"
                  }`}
                >
                  {r.priority}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">{r.role}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{r.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {r.matches.map((m) => (
                  <span key={m} className="role-fit-chip">
                    {m}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
