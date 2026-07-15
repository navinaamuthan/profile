import { articles } from "@/data/writing";

export default function Writing() {
  const published = articles.filter((a) => a.status === "published");

  return (
    <section id="writing" className="section">
      <h2 className="section-heading">Writing</h2>
      <div className="mt-7 space-y-7">
        {published.map((a) => (
          <article key={a.title}>
            <h3 className="text-[15px] font-medium leading-snug">
              {a.link ? (
                <a href={a.link} className="link" target="_blank" rel="noopener noreferrer">
                  {a.title}
                </a>
              ) : (
                a.title
              )}
            </h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{a.summary}</p>
            <p className="mt-1.5 text-[13px] text-muted">
              {[a.date, a.readingTime].filter(Boolean).join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
