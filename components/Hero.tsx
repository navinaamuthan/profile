import LocalTime from "@/components/LocalTime";
import { TerminalWindow } from "@/components/Terminal";

const nameLines: { text: string; accent?: boolean }[] = [
  { text: "Navina" },
  { text: "Ganapathy", accent: true },
  { text: "Amuthan" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col px-6 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end pb-14 pt-28 sm:pb-16">
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

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_25rem] lg:gap-14">
          <div>
            <h1 className="font-display text-[clamp(2.9rem,8vw,6.2rem)] font-medium leading-[0.98] tracking-[-0.03em]">
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
              className="draw-line mt-8 h-px w-full bg-line"
              style={{ animationDelay: "500ms" }}
            />

            <p
              className="rise mt-7 max-w-lg text-[17px] font-medium leading-relaxed text-ink/80"
              style={{ animationDelay: "700ms" }}
            >
              Data scientist and AI/ML engineer in Dublin. MSc Computer Science at Trinity College
              Dublin, with distinction. Previously product management and Fortune 500 delivery.
            </p>
          </div>

          <div className="rise relative hidden lg:block" style={{ animationDelay: "800ms" }}>
            <div className="glow" aria-hidden />
            <div className="relative">
              <TerminalWindow bodyHeight="h-64" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
