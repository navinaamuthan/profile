import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { awards, type Award } from "@/data/awards";

const isCompetition = (a: Award) =>
  /winner|finalist/i.test(a.outcome) || /hackathon/i.test(a.title);

/** Wins get the solid accent; everything else stays neutral. */
const isWin = (a: Award) => /winner/i.test(a.outcome);

function TrophyIcon() {
  return (
    <path d="M8 4h8v3a4 4 0 01-8 0V4zm-4 1h4m12 0h-4M4 5c0 3 2 4.5 4.4 4.9M20 5c0 3-2 4.5-4.4 4.9M12 11v4m-3 5h6m-5-5h4l1 5H8l1-5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  );
}

function PeopleIcon() {
  return (
    <path d="M9 11a3 3 0 100-6 3 3 0 000 6zm-5.5 8a5.5 5.5 0 0111 0M17 10a2.6 2.6 0 100-5.2M15.5 13.6c2.3.4 4 1.9 4.5 4.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  );
}

function Row({ a, icon }: { a: Award; icon: React.ReactNode }) {
  return (
    <div className="card flex items-start gap-4 p-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-paper text-accent">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          {icon}
        </svg>
      </span>
      <div className="min-w-0">
        <p className="text-base font-semibold leading-snug">{a.title}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span
            className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
              isWin(a) ? "bg-accent text-surface" : "bg-paper text-ink"
            }`}
          >
            {a.outcome}
          </span>
          <span className="text-xs tabular-nums text-muted">{a.year}</span>
          {a.scale ? <span className="text-xs text-muted">· {a.scale}</span> : null}
        </div>
      </div>
    </div>
  );
}

export default function Recognition() {
  const competitions = awards.filter(isCompetition);
  const roles = awards.filter((a) => !isCompetition(a));

  return (
    <Section id="recognition" index="08" label="Recognition">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
        <div>
          <Reveal>
            <h3 className="font-display text-xl font-bold">Competitions</h3>
          </Reveal>
          <div className="mt-4 space-y-3">
            {competitions.map((a, i) => (
              <Reveal key={a.title} delay={Math.min(i * 50, 200)}>
                <Row a={a} icon={<TrophyIcon />} />
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <Reveal>
            <h3 className="font-display text-xl font-bold">Leadership & community</h3>
          </Reveal>
          <div className="mt-4 space-y-3">
            {roles.map((a, i) => (
              <Reveal key={a.title} delay={Math.min(i * 50, 200)}>
                <Row a={a} icon={<PeopleIcon />} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
