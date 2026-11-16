"use client";

import { useEffect, useState } from "react";
import LocalTime from "@/components/LocalTime";

const items: { label: string; id: string }[] = [
  { label: "About", id: "about" },
  { label: "Impact", id: "impact" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Certs", id: "certifications" },
  { label: "Work", id: "work" },
  { label: "Writing", id: "writing" },
  { label: "Recognition", id: "recognition" },
  { label: "Contact", id: "contact" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);
  const [visited, setVisited] = useState<Set<string>>(new Set());

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setCurrent(id);
            setVisited((v) => (v.has(id) ? v : new Set(v).add(id)));
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow] duration-300 ${
        solid ? "nav-solid" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:px-10">
        <a
          href="#top"
          className="flex h-10 items-center whitespace-nowrap font-display text-base font-bold tracking-tight"
          aria-label="Navina Ganapathy Amuthan, back to top"
        >
          <span className="sm:hidden">Navina G. Amuthan</span>
          <span className="hidden sm:inline">Navina Ganapathy Amuthan</span>
        </a>
        <nav className="flex items-center gap-3" aria-label="Site">
          <div className="nav-pill hidden lg:flex">
            {items.map((i) => {
              const state =
                current === i.id ? "is-current" : visited.has(i.id) ? "is-visited" : "";
              return (
                <a
                  key={i.id}
                  href={`#${i.id}`}
                  className={`nav-item ${state}`}
                  aria-current={current === i.id ? "true" : undefined}
                  title={visited.has(i.id) && current !== i.id ? `${i.label} · seen` : i.label}
                >
                  {i.label}
                </a>
              );
            })}
          </div>
          <label className="sr-only" htmlFor="section-jump">
            Jump to section
          </label>
          <select
            id="section-jump"
            className="nav-jump lg:hidden"
            value={current ?? "about"}
            onChange={(e) => {
              const id = e.target.value;
              setCurrent(id);
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {items.map((i) => (
              <option key={i.id} value={i.id}>
                {i.label}
              </option>
            ))}
          </select>
          <p className="meta-chip hidden shrink-0 sm:inline-flex lg:hidden xl:inline-flex">
            Dublin · <LocalTime />
          </p>
        </nav>
      </div>
    </header>
  );
}
