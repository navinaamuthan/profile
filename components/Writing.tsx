import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { articles } from "@/data/writing";

export default function Writing() {
  const published = articles.filter((a) => a.status === "published");

  return (
    <Section id="writing" index="05" label="Writing" color="#1B3A4B">
      <div>
        {published.map((a, i) => (
          <div key={a.title} className={i === 0 ? "" : "border-t border-line"}>
            <Reveal delay={Math.min(i * 60, 180)}>
              <article className="index-row py-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
                  <h3 className="max-w-xl font-display text-xl font-bold leading-snug sm:text-2xl">
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
                  <p className="index-num shrink-0 text-[13px] tabular-nums text-muted">
                    {[a.date, a.readingTime].filter(Boolean).join(" · ")}
                  </p>
                </div>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{a.summary}</p>
              </article>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
