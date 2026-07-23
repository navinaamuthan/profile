import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" index="02" label="Experience" color="#D4B896" dark>
      <ol className="timeline timeline-dark space-y-12 pl-8">
        {experience.map((e, i) => (
          <li key={e.company} className="timeline-item relative">
            <span className="timeline-node" style={{ left: "-32px" }} aria-hidden />
            <Reveal delay={Math.min(i * 60, 180)}>
              <p className="text-[13px] font-semibold tabular-nums text-accentSoft">{e.period}</p>
              <h3 className="mt-1.5 font-display text-xl font-bold sm:text-2xl">
                {e.role} <span className="font-medium text-paper/60">· {e.company}</span>
              </h3>
              <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-paper/75">{e.summary}</p>
              <div className="mt-3.5 flex max-w-xl flex-wrap gap-1.5">
                {e.tools.map((t) => (
                  <span key={t} className="chip-dark">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
