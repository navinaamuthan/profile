export default function Section({
  id,
  index,
  label,
  dark = false,
  children,
}: {
  id: string;
  index: string;
  label: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={dark ? "on-dark bg-navy text-paper" : "border-t border-line"}>
      <div className="mx-auto grid max-w-6xl gap-x-16 px-6 py-16 md:px-10 lg:grid-cols-[160px_1fr] lg:py-24">
        <div className="mb-8 lg:mb-0">
          <div className="flex items-baseline gap-3 lg:sticky lg:top-24 lg:block">
            <p
              className={`font-display text-2xl font-bold leading-none lg:text-4xl ${
                dark ? "text-accentSoft" : "text-accent"
              }`}
              aria-hidden
            >
              {index}
            </p>
            <h2
              className={`font-display text-sm font-bold uppercase tracking-[0.12em] lg:mt-3 ${
                dark ? "text-paper" : "text-ink"
              }`}
            >
              {label}
            </h2>
          </div>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
