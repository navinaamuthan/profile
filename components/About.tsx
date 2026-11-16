import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { personal } from "@/data/personal";

const stats: [string, string][] = [
  ["Top 0.5%", "Google Cloud Agentic AI Hackathon"],
  ["10,000+", "users on production AI features"],
  ["120+", "countries, Fortune 500 delivery"],
];

export default function About() {
  return (
    <Section id="about" index="01" label="About">
      <div className="grid items-start gap-10 md:grid-cols-[1fr_224px] md:gap-12">
        <Reveal>
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-ink">
            {personal.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Image
            src="/img.jpg"
            alt={personal.name}
            width={640}
            height={640}
            sizes="(min-width: 768px) 224px, 60vw"
            className="aspect-[4/5] w-full max-w-[224px] rounded-card border border-line object-cover"
          />
        </Reveal>
      </div>

      <Reveal delay={80}>
        <div className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
          {stats.map(([n, label]) => (
            <div key={n}>
              <p className="font-display text-4xl font-bold tracking-tight text-accent">
                {n}
              </p>
              <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-muted">{label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
