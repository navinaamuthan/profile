import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { personal } from "@/data/personal";

const stats: [string, string, string][] = [
  ["Top 0.5%", "of 50,000+ teams — full-stack agentic product, Google Cloud Agentic AI Hackathon", "#7048E8"],
  ["10,000+", "production users on AI/ML features I shipped end to end", "#0F8B8D"],
  ["120+", "countries covered by Fortune 500 production implementations I delivered", "#E4573D"],
];

const facts: [string, string][] = [
  ["Location", personal.location],
  ["Work authorisation", personal.workAuth],
  ["Availability", personal.availability],
  ["Education", "MSc Computer Science, Trinity College Dublin, Distinction"],
  ["Open to", personal.openTo],
];

export default function About() {
  return (
    <Section id="about" index="01" label="About" color="#0071E3">
      <div className="grid gap-12 md:grid-cols-[1fr_260px] md:gap-16">
        <Reveal>
          <div className="space-y-5 font-display text-xl font-medium leading-relaxed text-ink sm:text-[1.35rem]">
            {personal.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[15px]" aria-label="Profiles">
            <a href={`mailto:${personal.email}`} className="link">
              Email
            </a>
            <a href={personal.linkedin} className="link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={personal.github} className="link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={personal.resumeUrl} className="link">
              CV
            </a>
          </nav>
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
        <div className="mt-16 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
          {stats.map(([n, label, color]) => (
            <div key={n}>
              <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl" style={{ color }}>
                {n}
              </p>
              <p className="mt-2 max-w-[16rem] text-[13px] leading-relaxed text-muted">{label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <dl className="mt-14 space-y-3 border-t border-line pt-8">
          {facts.map(([k, v]) => (
            <div key={k} className="grid gap-0.5 sm:grid-cols-[12rem_1fr] sm:gap-6">
              <dt className="text-[13px] text-muted sm:pt-[2px]">{k}</dt>
              <dd className="text-[15px] leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
