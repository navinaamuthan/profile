import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { awards } from "@/data/awards";

export default function Recognition() {
  return (
    <Section id="recognition" index="06" label="Recognition">
      <ul>
        {awards.map((a, i) => (
          <li key={a.title} className={i === 0 ? "" : "border-t border-line"}>
            <Reveal delay={Math.min(i * 40, 160)}>
              <div className="index-row flex items-baseline justify-between gap-6 py-4 text-[15px]">
                <p className="leading-relaxed">
                  {a.title}
                  <span className="text-muted">, {a.outcome}</span>
                </p>
                <p className="index-num shrink-0 text-[13px] tabular-nums text-muted">{a.year}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
