"use client";

import { useEffect, useState } from "react";
import LocalTime from "@/components/LocalTime";

const items: { label: string; id: string; color: string }[] = [
  { label: "About", id: "about", color: "#A67C52" },
  { label: "Experience", id: "experience", color: "#5C7C6A" },
  { label: "Work", id: "work", color: "#8B6914" },
  { label: "Skills", id: "skills", color: "#B08D57" },
  { label: "Certs", id: "certifications", color: "#8B6914" },
  { label: "Writing", id: "writing", color: "#1B3A4B" },
  { label: "Recognition", id: "recognition", color: "#2F5D50" },
  { label: "Contact", id: "contact", color: "#D4B896" },
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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 md:px-10">
        <a href="#top" className="font-display text-[15px] font-bold tracking-tight">
          Navina Ganapathy Amuthan
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
                  style={{ ["--nav-color" as string]: i.color }}
                  aria-current={current === i.id ? "true" : undefined}
                  title={visited.has(i.id) && current !== i.id ? `${i.label} · seen` : i.label}
                >
                  {i.label}
                </a>
              );
            })}
          </div>
          <p className="meta-chip shrink-0">
            Dublin · <LocalTime />
          </p>
        </nav>
      </div>
    </header>
  );
}
