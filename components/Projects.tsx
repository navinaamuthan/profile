import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { projectId } from "@/lib/slug";

export default function Projects() {
  const featured = projects.filter((p) => p.flagship || p.featured);
  const rest = projects.filter((p) => !p.flagship && !p.featured);

  return (
    <Section id="work" index="03" label="Selected work">
      <div className="space-y-16">
        {featured.map((p, i) => (
          <Reveal key={p.name}>
            <article
              id={projectId(p.name)}
              className="grid scroll-mt-28 gap-6 p-2 md:grid-cols-[auto_1fr] md:gap-10"
            >
              <p className="font-display text-lg text-line md:pt-2 md:text-2xl" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-display text-3xl tracking-tight sm:text-4xl">
                  {p.live || p.github ? (
                    <a
                      href={p.live ?? p.github}
                      className="link arrow-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.name}
                      <span className="arrow" aria-hidden>
                        &#8599;
                      </span>
                    </a>
                  ) : (
                    p.name
                  )}
                </h3>
                <p className="mt-4 max-w-xl font-display text-lg leading-relaxed text-ink/90">
                  {p.summary}
                </p>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{p.solution}</p>
                <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[13px] text-muted">
                  <span className="text-accent">{p.metrics[0]}</span>
                  <span>{p.tech.slice(0, 4).join(", ")}</span>
                  {p.github && p.live && (
                    <a href={p.github} className="link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mt-20 border-t border-line pt-8 font-display text-lg text-muted">
          Also built
        </h3>
      </Reveal>
      <ul className="mt-2">
        {rest.map((p, i) => (
          <li key={p.name} className={i === 0 ? "" : "border-t border-line"}>
            <Reveal delay={Math.min(i * 40, 160)}>
              <div
                id={projectId(p.name)}
                className="index-row grid scroll-mt-28 gap-1 px-2 py-5 sm:grid-cols-[minmax(11rem,14rem)_1fr] sm:gap-8"
              >
                <p className="text-[15px]">
                  {p.github || p.live ? (
                    <a
                      href={p.github ?? p.live}
                      className="link arrow-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.name}
                      <span className="arrow" aria-hidden>
                        &#8599;
                      </span>
                    </a>
                  ) : (
                    <span className="font-medium">{p.name}</span>
                  )}
                </p>
                <p className="text-[15px] leading-relaxed text-muted">{p.summary}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
