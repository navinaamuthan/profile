import { awards } from "@/data/awards";

export default function Recognition() {
  return (
    <section id="recognition" className="section">
      <h2 className="section-heading">Recognition</h2>
      <ul className="mt-7 space-y-3">
        {awards.map((a) => (
          <li key={a.title} className="flex items-baseline justify-between gap-6 text-[15px]">
            <span className="leading-relaxed">
              {a.title}
              <span className="text-muted">, {a.outcome}</span>
            </span>
            <span className="shrink-0 text-[13px] tabular-nums text-muted">{a.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
