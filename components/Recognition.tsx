import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { awards, type Award } from "@/data/awards";

const isCompetition = (a: Award) => /winner|finalist/i.test(a.outcome);

const competitionColor = (outcome: string) => {
  if (/winner/i.test(outcome)) return "#D97706";
  if (/grand finalist/i.test(outcome)) return "#7048E8";
  return "#6E6E73";
};

/** Distinct accents for leadership roles so the column isn't flat grey. */
const roleColor = (a: Award) => {
  if (/IEEE/i.test(a.title)) return "#0F8B8D";
  if (/Trinity|Class Representative|STEM/i.test(a.title + a.outcome)) return "#1E3A8A";
  if (/FemTech/i.test(a.title)) return "#E4573D";
  return "#2F9E44";
};

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

function Row({ a, icon, color }: { a: Award; icon: React.ReactNode; color: string }) {
  return (
    <div
      className="index-row flex items-start gap-3.5 rounded-xl border bg-white p-4"
      style={{ borderColor: `${color}33` }}
    >
      <span
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ color, background: `${color}17` }}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          {icon}
        </svg>
      </span>
      <div className="min-w-0">
        <p className="text-[15px] font-semibold leading-snug">{a.title}</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold"
            style={{ color, background: `${color}14` }}
          >
            {a.outcome}
          </span>
          <span className="text-[12px] tabular-nums text-muted">{a.year}</span>
          <span className="text-[12px] text-muted">· {a.scale}</span>
        </div>
      </div>
    </div>
  );
}

export default function Recognition() {
  const competitions = awards.filter(isCompetition);
  const roles = awards.filter((a) => !isCompetition(a));

  return (
    <Section id="recognition" index="06" label="Recognition" color="#2F9E44">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Reveal>
            <h3 className="font-display text-2xl font-bold">Competitions</h3>
          </Reveal>
          <div className="mt-5 space-y-3">
            {competitions.map((a, i) => (
              <Reveal key={a.title} delay={Math.min(i * 50, 200)}>
                <Row a={a} icon={<TrophyIcon />} color={competitionColor(a.outcome)} />
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <Reveal>
            <h3 className="font-display text-2xl font-bold">Leadership & community</h3>
          </Reveal>
          <div className="mt-5 space-y-3">
            {roles.map((a, i) => (
              <Reveal key={a.title} delay={Math.min(i * 50, 200)}>
                <Row a={a} icon={<PeopleIcon />} color={roleColor(a)} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
