"use client";

const rowA = [
  "Top 0.5% of 50,000+ at Google Cloud Agentic AI Hackathon",
  "CSAT 3.2 to 4.6 on a 10,000+ user product",
  "Fortune 500 implementations in 120+ countries",
  "~70% setup time reduction at E2open",
];
const rowB = [
  "TCD MSc, Distinction",
  "Bloomberg BPuzzled Winner",
  "NLP model at 90%+ accuracy, Samsung R&D",
  "Led teams of 8 to 10",
  "IEEE Women in Engineering Chair",
  "Stamp 1G, no sponsorship required",
  "SQL, Python, Tableau, and hard questions",
];

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="flex w-max gap-8 whitespace-nowrap hover:[animation-play-state:paused]"
      style={{ animation: `ticker 36s linear infinite ${reverse ? "reverse" : ""}` }}
    >
      {doubled.map((p, i) => (
        <span key={i} className="flex items-center gap-8 font-display text-lg md:text-2xl text-paper/90 italic">
          {p}
          <span className="not-italic font-mono text-clay text-sm">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function ProofTicker() {
  return (
    <div className="relative overflow-hidden bg-ink py-6 space-y-4 -rotate-1 scale-[1.02] border-y-2 border-clay" aria-hidden>
      <Row items={rowA} />
      <Row items={rowB} reverse />
    </div>
  );
}
