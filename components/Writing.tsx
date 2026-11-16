import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { articles } from "@/data/writing";

export default function Writing() {
  const published = articles.filter((a) => a.status === "published");

  return (
    <Section id="writing" index="07" label="Writing">
      <div>
        {published.map((a, i) => (
          <div key={a.title} className={i === 0 ? "" : "border-t border-line"}>
            <Reveal delay={Math.min(i * 60, 180)}>
              <article className={`index-row pb-8 ${i === 0 ? "" : "pt-8"}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
                  <h3 className="max-w-xl font-display text-xl font-bold leading-snug">
                    {a.link ? (
                      <a
                        href={a.link}
                        className="link arrow-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {a.title}
                        <span className="arrow" aria-hidden>
                          &#8599;
                        </span>
                      </a>
                    ) : (
                      a.title
                    )}
                  </h3>
                  <p className="index-num shrink-0 text-sm tabular-nums text-muted">
                    {[a.date, a.readingTime].filter(Boolean).join(" · ")}
                  </p>
                </div>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">{a.summary}</p>
              </article>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
