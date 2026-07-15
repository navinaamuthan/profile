import { personal } from "@/data/personal";

const links = [
  { label: "Email", href: `mailto:${personal.email}` },
  { label: "LinkedIn", href: personal.linkedin },
  { label: "GitHub", href: personal.github },
  { label: "CV", href: personal.resumeUrl },
];

const facts: [string, string][] = [
  ["Location", personal.location],
  ["Work authorisation", personal.workAuth],
  ["Education", "MSc Computer Science, Trinity College Dublin, Distinction"],
  ["Open to", personal.openTo],
];

export default function Intro() {
  return (
    <header className="pt-16 sm:pt-20">
      <img
        src="/img.jpg"
        alt={personal.name}
        className="h-20 w-20 rounded-full border border-line object-cover"
      />
      <h1 className="mt-7 font-display text-[2rem] leading-tight sm:text-4xl">{personal.name}</h1>
      <p className="mt-2 text-[15px] text-muted">{personal.roleLine}</p>

      <div className="mt-8 space-y-4 font-display text-lg leading-relaxed text-ink/90">
        {personal.intro.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>

      <nav className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[15px]" aria-label="Contact links">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="link"
            {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <dl className="mt-10 space-y-3 border-t border-line pt-8">
        {facts.map(([k, v]) => (
          <div key={k} className="grid gap-0.5 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="text-[13px] text-muted sm:pt-[2px]">{k}</dt>
            <dd className="text-[15px] leading-relaxed">{v}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
