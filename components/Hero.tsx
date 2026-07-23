import LocalTime from "@/components/LocalTime";
import Game from "@/components/Game";
import { TerminalWindow } from "@/components/Terminal";

const nameLines: { text: string; accent?: boolean }[] = [
  { text: "Navina" },
  { text: "Ganapathy", accent: true },
  { text: "Amuthan" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col px-6 md:px-10">
      {/* The game bar hangs directly off the nav, full content width */}
      <div
        className="rise mx-auto hidden w-full max-w-6xl pt-[60px] lg:block"
        style={{ animationDelay: "1100ms" }}
      >
        <Game />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end pb-14 pt-12 sm:pb-16">
        <div
          className="rise mb-10 flex flex-wrap items-center justify-between gap-3"
          style={{ animationDelay: "900ms" }}
        >
          <p className="meta-chip">
            <span className="breathe inline-block h-1.5 w-1.5 rounded-full bg-leaf" />
            Open to software engineering, AI/ML and data roles · available immediately
          </p>
          <span className="flex flex-wrap gap-2">
            <span className="meta-chip">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M12 21s-6.5-5.2-6.5-10.2a6.5 6.5 0 1113 0C18.5 15.8 12 21 12 21z" />
                <circle cx="12" cy="10.5" r="2.3" />
              </svg>
              Dublin · 53.35°N, 6.26°W
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

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_27rem] lg:gap-14">
          <div>
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
              className="draw-line mt-8 h-px w-full bg-line"
              style={{ animationDelay: "500ms" }}
            />

            <p
              className="rise mt-7 max-w-lg text-[17px] font-medium leading-relaxed text-ink/80"
              style={{ animationDelay: "700ms" }}
            >
              Full-stack software engineer: React and TypeScript on the front, Python and Node on
              the back, shipped to production. Fortune 500 systems across 120+ countries, an
              agentic product built in 48 hours, and an MSc in Computer Science at Trinity College
              Dublin, with distinction.
            </p>
          </div>

          <div className="rise relative hidden lg:block" style={{ animationDelay: "800ms" }}>
            <div className="glow" aria-hidden />
            <div className="relative">
              <TerminalWindow bodyHeight="h-72" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
