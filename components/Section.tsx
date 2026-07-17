export default function Section({
  id,
  index,
  label,
  color = "#1E3A8A",
  dark = false,
  children,
}: {
  id: string;
  index: string;
  label: string;
  color?: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={dark ? "bg-navy text-paper" : "border-t border-line"}>
      <div className="mx-auto grid max-w-6xl gap-x-16 px-6 py-20 sm:py-24 md:px-10 lg:grid-cols-[180px_1fr] lg:py-28">
        <div className="mb-10 lg:mb-0">
          <div className="lg:sticky lg:top-28">
            <p className="font-display text-4xl font-bold leading-none" style={{ color }} aria-hidden>
              {index}
            </p>
            <h2
              className={`mt-2 font-display text-[15px] font-bold uppercase tracking-[0.14em] ${
                dark ? "text-paper" : "text-ink"
              }`}
            >
              {label}
            </h2>
            <div className="mt-3 h-1 w-8 rounded-full" style={{ background: color }} aria-hidden />
          </div>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
