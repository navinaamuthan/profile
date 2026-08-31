import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { personal } from "@/data/personal";

const stats: [string, string, string][] = [
  ["Top 0.5%", "Google Cloud Agentic AI Hackathon", "#8B6914"],
  ["10,000+", "users on production AI features", "#5C7C6A"],
  ["120+", "countries, Fortune 500 delivery", "#A67C52"],
];

export default function About() {
  return (
    <Section id="about" index="01" label="About" color="#A67C52">
      <div className="grid items-start gap-10 md:grid-cols-[1fr_220px] md:gap-14">
        <Reveal>
          <div className="space-y-4 font-display text-lg font-medium leading-relaxed text-ink sm:text-xl">
            {personal.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <img
            src="/img.jpg"
            alt={personal.name}
            className="portrait aspect-[4/5] w-full rounded-xl border border-line object-cover"
          />
        </Reveal>
      </div>

      <Reveal delay={80}>
        <div className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
          {stats.map(([n, label, color]) => (
            <div key={n}>
              <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color }}>
                {n}
              </p>
              <p className="mt-1.5 max-w-[14rem] text-[13px] leading-relaxed text-muted">{label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
