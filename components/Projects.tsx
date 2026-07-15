import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.flagship || p.featured);
  const rest = projects.filter((p) => !p.flagship && !p.featured);

  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Selected projects</h2>

      <div className="mt-7 space-y-9">
        {featured.map((p) => (
          <article key={p.name}>
            <h3 className="font-display text-xl">
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
            <p className="mt-2 text-[15px] leading-relaxed">{p.summary}</p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{p.solution}</p>
            <p className="mt-2 text-[13px] text-muted">
              {p.metrics[0]} · {p.tech.slice(0, 4).join(", ")}
              {p.github && p.live && (
                <>
                  {" · "}
                  <a href={p.github} className="link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </>
              )}
            </p>
          </article>
        ))}
      </div>

      <h3 className="mt-12 font-display text-lg text-muted">Also built</h3>
      <ul className="mt-4 space-y-3">
        {rest.map((p) => (
          <li key={p.name} className="text-[15px] leading-relaxed">
            {p.github || p.live ? (
              <a
                href={p.github ?? p.live}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.name}
              </a>
            ) : (
              <span className="font-medium">{p.name}</span>
            )}
            <span className="text-muted"> · {p.summary}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
