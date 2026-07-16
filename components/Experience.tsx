import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" index="02" label="Experience">
      <ol>
        {experience.map((e, i) => (
          <li key={e.company} className={i === 0 ? "" : "border-t border-line"}>
            <Reveal delay={Math.min(i * 60, 180)}>
              <div className="index-row grid gap-2 py-8 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <p className="index-num text-[13px] tabular-nums text-muted sm:pt-1.5">{e.period}</p>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl">
                    {e.role} <span className="text-muted">· {e.company}</span>
                  </h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">{e.summary}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
