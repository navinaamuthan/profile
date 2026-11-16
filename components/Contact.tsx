import Reveal from "@/components/Reveal";
import LocalTime from "@/components/LocalTime";
import { personal } from "@/data/personal";

const primary = [
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    detail: personal.email,
    external: false,
    icon: (
      <path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm1 1l7 5 7-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    ),
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    detail: "linkedin.com/in/navinagamuthan",
    external: true,
    icon: (
      <path d="M6.5 9.5v8M6.5 6.4v.1M11 17.5v-4.6c0-1.6 1-2.6 2.5-2.6s2.5 1 2.5 2.6v4.6M4 4h16v16H4V4z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "GitHub",
    href: personal.github,
    detail: "github.com/navinaamuthan",
    external: true,
    icon: (
      <path d="M12 3a9 9 0 00-2.85 17.54c.45.08.62-.2.62-.44v-1.7c-2.5.55-3.03-1.06-3.03-1.06-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.16.08-2.41 0 0 .76-.24 2.48.92a8.6 8.6 0 014.52 0c1.72-1.16 2.47-.92 2.47-.92.49 1.25.18 2.18.09 2.41.58.63.93 1.44.93 2.42 0 3.47-2.1 4.22-4.11 4.44.32.28.61.83.61 1.67v2.47c0 .24.16.53.62.44A9 9 0 0012 3z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="on-dark bg-navy text-paper">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-16 md:px-10 lg:pt-24">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <p className="font-display text-2xl font-bold leading-none text-accentSoft lg:text-4xl" aria-hidden>
              09
            </p>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-paper">
              Contact
            </h2>
          </div>
          <h3 className="mt-8 font-display text-[clamp(2.25rem,6vw,4rem)] font-bold leading-none tracking-tight">
            Get in touch<span className="text-accentSoft">.</span>
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/80">
            Email is the most reliable way to reach me.
          </p>

          <p className="mt-8">
            <a
              href={`mailto:${personal.email}`}
              className="link-dark break-all font-display text-xl font-bold tracking-tight sm:text-2xl"
            >
              {personal.email}
            </a>
          </p>
          <p className="mt-6">
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path
                  d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm1 1l7 5 7-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              Send email
            </a>
          </p>

          <div className="mt-12 grid gap-3 sm:grid-cols-3" aria-label="Profiles">
            {primary.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="group flex items-center gap-4 rounded-card border border-paper/20 p-4 transition-colors hover:border-accentSoft sm:flex-col sm:items-start sm:p-6"
                {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-paper/10 text-accentSoft">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    {p.icon}
                  </svg>
                </span>
                <div>
                  <p className="font-display text-base font-bold tracking-tight">{p.label}</p>
                  <p className="break-all text-sm text-paper/70 transition-colors group-hover:text-paper sm:mt-1">
                    {p.detail}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <footer className="mt-16 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-paper/20 pt-6 text-sm text-paper/70">
          <p>
            © {new Date().getFullYear()} {personal.name}
          </p>
          <p className="tabular-nums">
            Dublin · <LocalTime />
          </p>
          <a href="#top" className="link-dark inline-flex min-h-10 items-center">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
