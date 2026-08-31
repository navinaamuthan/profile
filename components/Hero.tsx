import LocalTime from "@/components/LocalTime";
import { personal } from "@/data/personal";

const nameLines: { text: string; accent?: boolean }[] = [
  { text: "Navina" },
  { text: "Ganapathy", accent: true },
  { text: "Amuthan" },
];

const highlights = [
  { label: "Education", value: "MSc Computer Science, Trinity College Dublin · Distinction" },
  { label: "Location", value: personal.location },
  { label: "Authorisation", value: personal.workAuth },
  { label: "Availability", value: personal.availability },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col px-6 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end pb-14 pt-24 sm:pb-16">
        <div
          className="rise mb-10 flex flex-wrap items-center justify-between gap-3"
          style={{ animationDelay: "900ms" }}
        >
          <p className="meta-chip">
            <span className="breathe inline-block h-1.5 w-1.5 rounded-full bg-leaf" />
            Available immediately
          </p>
          <span className="flex flex-wrap gap-2">
            <span className="meta-chip">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M12 21s-6.5-5.2-6.5-10.2a6.5 6.5 0 1113 0C18.5 15.8 12 21 12 21z" />
                <circle cx="12" cy="10.5" r="2.3" />
              </svg>
              Dublin
            </span>
            <span className="meta-chip">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7.5V12l3 2" strokeLinecap="round" />
              </svg>
              <LocalTime />
            </span>
          </span>
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_26rem] lg:gap-16">
          <div>
            <p
              className="rise mb-4 font-display text-[12px] font-bold uppercase tracking-[0.2em] text-bronze"
              style={{ animationDelay: "200ms" }}
            >
              Product and AI — Development and Management
            </p>
            <h1 className="font-display text-[clamp(2.9rem,8vw,6.2rem)] font-bold leading-[0.98] tracking-[-0.03em]">
              {nameLines.map((l, i) => (
                <span key={l.text} className="mask">
                  <span
                    className={l.accent ? "text-accent" : undefined}
                    style={{ animationDelay: `${i * 110}ms` }}
                  >
                    {l.text}
                  </span>
                </span>
              ))}
            </h1>

            <div
              aria-hidden
              className="draw-line draw-line-brass mt-8 w-full"
              style={{ animationDelay: "500ms" }}
            />

            <p
              className="rise mt-7 max-w-xl text-[17px] font-medium leading-relaxed text-ink/80"
              style={{ animationDelay: "700ms" }}
            >
              Product strategy, software delivery, and applied AI. Dublin.
            </p>
          </div>

          <dl className="rise hidden space-y-5 rounded-2xl border border-line bg-white/80 p-7 lg:block" style={{ animationDelay: "800ms" }}>
            {highlights.map((h) => (
              <div key={h.label}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{h.label}</dt>
                <dd className="mt-1.5 text-[14.5px] leading-relaxed text-ink">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
