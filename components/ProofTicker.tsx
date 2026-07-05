"use client";

const proofs = [
  "Top 0.5% of 50,000+ at Google Cloud Agentic AI Hackathon",
  "CSAT 3.2 to 4.6 on a 10,000+ user product",
  "Fortune 500 implementations in 120+ countries",
  "~70% setup time reduction at E2open",
  "TCD MSc, Distinction",
  "NLP model at 90%+ accuracy, Samsung R&D",
  "Led teams of 8 to 10",
  "Stamp 1G, no sponsorship required",
];

export default function ProofTicker() {
  const row = [...proofs, ...proofs];
  return (
    <div className="relative overflow-hidden border-y border-sand bg-white/50 py-4" aria-hidden>
      <div className="flex w-max animate-ticker gap-10 whitespace-nowrap">
        {row.map((p, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-xs uppercase tracking-wider text-ink/60">
            {p}
            <span className="text-clay">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}
