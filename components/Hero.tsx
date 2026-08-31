import { personal } from "@/data/personal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[calc(100svh-4.5rem)] flex-col px-6 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_22rem] lg:gap-20">
          <div>
            <p
              className="rise mb-5 font-display text-[12px] font-bold uppercase tracking-[0.2em] text-bronze"
              style={{ animationDelay: "120ms" }}
            >
              Product and AI — Development and Management
            </p>
            <h1 className="font-display text-[clamp(2.9rem,8vw,6.2rem)] font-bold leading-[0.98] tracking-[-0.03em]">
              {["Navina", "Ganapathy", "Amuthan"].map((l, i) => (
                <span key={l} className="mask">
                  <span
                    className={i === 1 ? "text-accent" : undefined}
                    style={{ animationDelay: `${i * 110}ms` }}
                  >
                    {l}
                  </span>
                </span>
              ))}
            </h1>
            <div
              aria-hidden
              className="draw-line draw-line-brass mt-8 max-w-md"
              style={{ animationDelay: "400ms" }}
            />
            <p
              className="rise mt-7 max-w-md text-[17px] font-medium leading-relaxed text-ink/80"
              style={{ animationDelay: "550ms" }}
            >
              Product strategy, software delivery, and applied AI.
            </p>
          </div>

          <dl
            className="rise space-y-6 border-l border-line pl-8"
            style={{ animationDelay: "700ms" }}
          >
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Education</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed">
                MSc Computer Science, Trinity College Dublin
                <span className="mt-0.5 block text-muted">Distinction</span>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Status</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed">
                Available immediately
                <span className="mt-0.5 block text-muted">{personal.workAuth}</span>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Contact</dt>
              <dd className="mt-2 flex flex-col gap-1.5 text-[15px]">
                <a href={`mailto:${personal.email}`} className="link">
                  {personal.email}
                </a>
                <a href={personal.linkedin} className="link" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={personal.github} className="link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
