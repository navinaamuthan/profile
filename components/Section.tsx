export default function Section({
  id,
  index,
  label,
  children,
  wide = false,
}: {
  id: string;
  index: string;
  label: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section id={id} className="border-t border-line">
      <div
        className={`mx-auto grid max-w-6xl gap-x-16 px-6 py-20 sm:py-24 md:px-10 lg:py-28 ${
          wide ? "" : "lg:grid-cols-[180px_1fr]"
        }`}
      >
        <div className="mb-10 lg:mb-0">
          <p className="section-label lg:sticky lg:top-28">
            <span className="text-accent">{index}</span>
            <span className="mx-2 text-line">/</span>
            {label}
          </p>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
