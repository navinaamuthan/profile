"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { certifications, type Certification } from "@/data/certifications";

const filters: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "languages", label: "Python & code" },
  { id: "ml", label: "ML & deep learning" },
  { id: "mlops", label: "Big data" },
  { id: "governance", label: "Security" },
  { id: "bi", label: "Product" },
];

function issuerInitials(issuer: string) {
  return issuer
    .split(/[·\s]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function CertCard({
  c,
  active,
  dimmed,
}: {
  c: Certification;
  active: boolean;
  dimmed: boolean;
}) {
  const href = c.url;
  const body = (
    <>
      <div className="cert-card-glow" style={{ background: c.color }} aria-hidden />
      <div className="relative flex gap-4">
        {c.image ? (
          <div className="cert-badge-frame shrink-0">
            <Image
              src={c.image}
              alt={`${c.title} badge`}
              width={88}
              height={88}
              className="h-[88px] w-[88px] object-contain"
            />
          </div>
        ) : (
          <div
            className="flex h-[88px] w-[88px] shrink-0 flex-col items-center justify-center rounded-2xl border text-center"
            style={{
              borderColor: `${c.color}55`,
              background: `linear-gradient(145deg, ${c.color}22, ${c.color}08)`,
              color: c.color,
            }}
          >
            <span className="font-display text-2xl font-bold tracking-tight">
              {issuerInitials(c.issuer)}
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] opacity-70">
              Cert
            </span>
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="rounded-full px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.12em]"
              style={{ color: c.color, background: `${c.color}14` }}
            >
              {c.issuer.split("·")[0].trim()}
            </span>
            <span className="text-[12px] tabular-nums text-muted">{c.issued}</span>
          </div>
          <h3 className="mt-2 font-display text-[17px] font-bold leading-snug text-ink">{c.title}</h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{c.summary}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {c.skills.slice(0, 4).map((s) => (
              <span key={s} className="cert-skill-chip">
                {s}
              </span>
            ))}
          </div>
          {(c.credentialId || href) && (
            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted">
              {c.credentialId && (
                <span className="font-mono text-[11px] text-ink/55">ID {c.credentialId}</span>
              )}
              {href && (
                <span className="font-semibold text-bronze">
                  {href.endsWith(".pdf") ? "View PDF →" : "Verify credential →"}
                </span>
              )}
            </p>
          )}
        </div>
      </div>
    </>
  );

  const className = `cert-card block h-full ${active ? "is-active" : ""} ${dimmed ? "is-dimmed" : ""}`;

  if (href) {
    return (
      <a
        id={`cert-${c.id}`}
        href={href}
        className={className}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {body}
      </a>
    );
  }

  return (
    <div id={`cert-${c.id}`} className={className}>
      {body}
    </div>
  );
}

export default function Certifications() {
  const [filter, setFilter] = useState("all");
  const [spotlight, setSpotlight] = useState<string | null>(null);

  useEffect(() => {
    const onSpotlight = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      setSpotlight(id);
      setFilter("all");
      document.getElementById(`cert-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => setSpotlight(null), 2800);
    };
    window.addEventListener("cert-spotlight", onSpotlight);
    return () => window.removeEventListener("cert-spotlight", onSpotlight);
  }, []);

  const featured = useMemo(() => certifications.filter((c) => c.featured && c.image), []);
  const visible = useMemo(
    () =>
      filter === "all"
        ? certifications
        : certifications.filter((c) => c.skillCategories.includes(filter)),
    [filter]
  );

  return (
    <Section id="certifications" index="05" label="Certifications" color="#A67C52">
      <Reveal>
        <p className="max-w-2xl text-[16px] leading-relaxed text-ink/80">
          Verified credentials that back the Skills section: Python, deep learning, big-data ML,
          security, and product. Click a skill chip above and matching badges light up here.
        </p>
      </Reveal>

      {/* Badge medal rail */}
      <Reveal delay={60}>
        <div className="cert-rail mt-10">
          {featured.map((c, i) => (
            <a
              key={c.id}
              href={`#cert-${c.id}`}
              className="cert-medal"
              style={{ animationDelay: `${i * 90}ms` }}
              onClick={(e) => {
                e.preventDefault();
                setSpotlight(c.id);
                document.getElementById(`cert-${c.id}`)?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
                window.setTimeout(() => setSpotlight(null), 2800);
              }}
            >
              <span className="cert-medal-ring" style={{ borderColor: `${c.color}66` }} />
              <Image
                src={c.image!}
                alt={c.title}
                width={120}
                height={120}
                className="relative z-[1] h-[108px] w-[108px] object-contain drop-shadow-md"
              />
              <span className="cert-medal-label">{c.issuer.split("·")[0].trim()}</span>
            </a>
          ))}
          <div className="cert-rail-stat">
            <p className="font-display text-4xl font-bold text-bronze">{certifications.length}</p>
            <p className="mt-1 text-[13px] font-medium leading-snug text-muted">
              credentials
              <br />
              linked to skills
            </p>
          </div>
        </div>
      </Reveal>

      {/* Filters */}
      <Reveal delay={100}>
        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter certifications">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              className={`cert-filter ${filter === f.id ? "is-on" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {visible.map((c, i) => (
          <Reveal key={c.id} delay={Math.min(i * 50, 200)}>
            <CertCard
              c={c}
              active={spotlight === c.id}
              dimmed={Boolean(spotlight) && spotlight !== c.id}
            />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-8 text-[14px] text-muted">No certifications in this filter.</p>
      )}
    </Section>
  );
}
