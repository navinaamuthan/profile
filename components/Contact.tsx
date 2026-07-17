import Reveal from "@/components/Reveal";
import CopyEmail from "@/components/CopyEmail";
import LocalTime from "@/components/LocalTime";
import { personal } from "@/data/personal";

const profiles = [
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    external: false,
    icon: (
      <path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm1 1l7 5 7-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    ),
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    external: true,
    icon: (
      <path d="M6.5 9.5v8M6.5 6.4v.1M11 17.5v-4.6c0-1.6 1-2.6 2.5-2.6s2.5 1 2.5 2.6v4.6M4 4h16v16H4V4z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "GitHub",
    href: personal.github,
    external: true,
    icon: (
      <path d="M12 3a9 9 0 00-2.85 17.54c.45.08.62-.2.62-.44v-1.7c-2.5.55-3.03-1.06-3.03-1.06-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.16.08-2.41 0 0 .76-.24 2.48.92a8.6 8.6 0 014.52 0c1.72-1.16 2.47-.92 2.47-.92.49 1.25.18 2.18.09 2.41.58.63.93 1.44.93 2.42 0 3.47-2.1 4.22-4.11 4.44.32.28.61.83.61 1.67v2.47c0 .24.16.53.62.44A9 9 0 0012 3z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    ),
  },
  {
    label: "CV (PDF)",
    href: personal.resumeUrl,
    external: false,
    icon: (
      <path d="M7 3h7l4 4v14H7V3zm7 0v4h4M10 12h5m-5 3.5h5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-graphite text-paper">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-20 sm:pt-28 md:px-10">
        <Reveal>
          <p className="font-display text-4xl font-bold leading-none text-accentSoft" aria-hidden>
            07
          </p>
          <h2 className="mt-2 font-display text-[15px] font-bold uppercase tracking-[0.14em] text-paper">
            Contact
          </h2>
          <h3 className="mt-8 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-tight">
            Say hello<span className="text-accentSoft">.</span>
          </h3>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-paper/70">
            If you are hiring for data, analytics or AI work in Dublin, I would like to hear about
            it. Email is the fastest way to reach me.
          </p>
          <p className="mt-10">
            <a
              href={`mailto:${personal.email}`}
              className="link-dark font-display text-[clamp(1.3rem,3.4vw,2.4rem)] font-bold tracking-tight"
            >
              {personal.email}
            </a>
          </p>
          <p className="mt-3 text-[13px] text-paper/50">
            <CopyEmail email={personal.email} dark />
          </p>

          <div className="mt-12 flex flex-wrap gap-3" aria-label="Profiles">
            {profiles.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-[14px] font-medium text-paper/85 transition-colors hover:border-accentSoft hover:text-accentSoft"
                {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                  {p.icon}
                </svg>
                {p.label}
              </a>
            ))}
          </div>
        </Reveal>

        <footer className="mt-20 flex flex-wrap items-baseline justify-between gap-2 border-t border-paper/15 pt-6 text-[13px] text-paper/50 sm:mt-28">
          <p>
            © {new Date().getFullYear()} {personal.name}
          </p>
          <p>
            Set in Space Grotesk and Inter · <LocalTime />
          </p>
          <a href="#top" className="link-dark">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
