import LocalTime from "@/components/LocalTime";
import { personal } from "@/data/personal";

const nameLines: { text: string; italic?: boolean }[] = [
  { text: "Navina" },
  { text: "Ganapathy", italic: true },
  { text: "Amuthan" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col px-6 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end pb-16 pt-28 sm:pb-20">
        <div
          className="rise mb-10 flex flex-wrap items-baseline justify-between gap-3 text-[13px] text-muted"
          style={{ animationDelay: "900ms" }}
        >
          <p className="flex items-center gap-2">
            <span className="breathe inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Open to data science, AI/ML and analyst roles
          </p>
          <p>
            53.35°N, 6.26°W · <LocalTime />
          </p>
        </div>

        <h1 className="font-display text-[clamp(3.2rem,11.5vw,9rem)] leading-[0.98] tracking-[-0.02em]">
          {nameLines.map((l, i) => (
            <span key={l.text} className="mask">
              <span style={{ animationDelay: `${i * 110}ms` }}>
                {l.italic ? <em className="pr-2 text-accent">{l.text}</em> : l.text}
              </span>
            </span>
          ))}
        </h1>

        <div
          aria-hidden
          className="draw-line mt-10 h-px w-full bg-line"
          style={{ animationDelay: "500ms" }}
        />

        <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <p
            className="rise max-w-md text-[15px] leading-relaxed text-muted"
            style={{ animationDelay: "700ms" }}
          >
            Data scientist and AI/ML engineer in Dublin. MSc Computer Science at Trinity College
            Dublin, with distinction. Previously product management and Fortune 500 delivery; these
            days, AI systems you can check up on.
          </p>
          <div
            className="rise hidden items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted sm:flex"
            style={{ animationDelay: "1100ms" }}
          >
            Scroll
            <span className="scroll-cue h-10" aria-hidden>
              <span />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
