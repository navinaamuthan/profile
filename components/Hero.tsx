import { personal } from "@/data/personal";

function MailIcon() {
  return (
    <path
      d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm1 1l7 5 7-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  );
}

function LinkedInIcon() {
  return (
    <path
      d="M6.5 9.5v8M6.5 6.4v.1M11 17.5v-4.6c0-1.6 1-2.6 2.5-2.6s2.5 1 2.5 2.6v4.6M4 4h16v16H4V4z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function GitHubIcon() {
  return (
    <path
      d="M12 3a9 9 0 00-2.85 17.54c.45.08.62-.2.62-.44v-1.7c-2.5.55-3.03-1.06-3.03-1.06-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.16.08-2.41 0 0 .76-.24 2.48.92a8.6 8.6 0 014.52 0c1.72-1.16 2.47-.92 2.47-.92.49 1.25.18 2.18.09 2.41.58.63.93 1.44.93 2.42 0 3.47-2.1 4.22-4.11 4.44.32.28.61.83.61 1.67v2.47c0 .24.16.53.62.44A9 9 0 0012 3z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  );
}

const social = [
  { label: "Email", href: `mailto:${personal.email}`, icon: <MailIcon />, external: false },
  { label: "LinkedIn", href: personal.linkedin, icon: <LinkedInIcon />, external: true },
  { label: "GitHub", href: personal.github, icon: <GitHubIcon />, external: true },
];

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
              Product and AI: Development &amp; Management
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
              <dd className="mt-3 flex gap-4">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="group flex flex-col items-center gap-1.5"
                    aria-label={s.label}
                    title={s.label}
                    {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className="social-icon">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                        {s.icon}
                      </svg>
                    </span>
                    <span className="text-[11px] font-semibold text-muted group-hover:text-ink">
                      {s.label}
                    </span>
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
