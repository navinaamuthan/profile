"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { certifications, type Certification } from "@/data/certifications";

const filters: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "languages", label: "Code" },
  { id: "ai", label: "AI & ML" },
  { id: "data", label: "Data" },
  { id: "governance", label: "Security" },
  { id: "product", label: "Product" },
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
    <div className="flex gap-4">
      <div className="cert-thumb">
        {c.image ? (
          <Image
            src={c.image}
            alt={`${c.title} badge`}
            width={64}
            height={64}
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="font-display text-xl font-bold tracking-tight text-accent" aria-hidden>
            {issuerInitials(c.issuer)}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="flex flex-wrap items-baseline gap-x-2 text-xs">
          <span className="font-semibold uppercase tracking-[0.12em] text-accent">
            {c.issuer.split("·")[0].trim()}
          </span>
          <span className="tabular-nums text-muted">{c.issued}</span>
        </p>
        <h3 className="mt-1 font-display text-lg font-bold leading-snug text-ink">{c.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{c.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {c.skills.slice(0, 4).map((s) => (
            <span key={s} className="cert-skill-chip">
              {s}
            </span>
          ))}
        </div>
        {(c.credentialId || href) && (
          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
            {c.credentialId && <span className="break-all tabular-nums">ID {c.credentialId}</span>}
            {href && (
              <span className="text-sm font-semibold text-accent">
                {href.endsWith(".pdf") ? "View PDF →" : "Verify credential →"}
              </span>
            )}
          </p>
        )}
      </div>
    </div>
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
    <Section id="certifications" index="05" label="Certifications">
      <Reveal>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Verified credentials that back the Skills section: Python, deep learning, big-data ML,
          security, and product.
        </p>
      </Reveal>

      {/* Badge medal rail */}
      <Reveal delay={60}>
        <div className="cert-rail mt-8">
          {featured.map((c) => (
            <a
              key={c.id}
              href={`#cert-${c.id}`}
              className="cert-medal"
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
              <Image
                src={c.image!}
                alt=""
                width={72}
                height={72}
                className="h-[72px] w-[72px] object-contain"
              />
              <span>
                <span className="block text-sm font-semibold text-ink">{c.title}</span>
                <span className="label mt-1 block">{c.issuer.split("·")[0].trim()}</span>
              </span>
            </a>
          ))}
        </div>
      </Reveal>

      {/* Filters */}
      <Reveal delay={100}>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter certifications">
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

      <div className="mt-6 grid gap-4 md:grid-cols-2">
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
        <p className="mt-8 text-sm text-muted">No certifications in this filter.</p>
      )}
    </Section>
  );
}
