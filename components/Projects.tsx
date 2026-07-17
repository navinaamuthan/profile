import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Finder from "@/components/Finder";
import { projects } from "@/data/projects";
import { projectId } from "@/lib/slug";

const cardColors = ["#1E3A8A", "#0F8B8D", "#E4573D"];

export default function Projects() {
  const featured = projects.filter((p) => p.flagship || p.featured);

  return (
    <Section id="work" index="03" label="Selected work" color="#7048E8">
      <div className="space-y-12">
        {featured.map((p, i) => {
          const color = cardColors[i % cardColors.length];
          return (
            <Reveal key={p.name}>
              <article
                id={projectId(p.name)}
                className="project-card scroll-mt-28"
                style={{ ["--card-color" as string]: color }}
              >
                <div className="project-card-front overflow-hidden p-7 sm:p-9">
                  <span className="project-num font-display" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="tag-pill">{p.tag}</span>
                  <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
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
                  <p className="mt-4 max-w-xl font-display text-lg font-medium leading-relaxed text-ink/90">
                    {p.summary}
                  </p>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                    {p.solution}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="metric-pill">{p.metrics[0]}</span>
                    <span className="text-[13px] text-muted">{p.tech.slice(0, 4).join(", ")}</span>
                    {p.github && p.live && (
                      <a
                        href={p.github}
                        className="link text-[13px]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <h3 className="mt-20 border-t border-line pt-10 font-display text-2xl font-bold text-ink">
          Everything else I&apos;ve built
        </h3>
        <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink/70">
          Twelve folders, colour-coded by category. Click around.
        </p>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-6">
          <Finder />
        </div>
      </Reveal>
    </Section>
  );
}
