"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/personal";

const items = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Writing", href: "#writing", id: "writing" },
  { label: "Recognition", href: "#recognition", id: "recognition" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);

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
          if (entry.isIntersecting) setCurrent(entry.target.id);
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
      <div className="mx-auto flex max-w-6xl items-baseline justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-[15px] tracking-tight">
          Navina Ganapathy Amuthan
        </a>
        <nav className="flex items-baseline gap-5 text-[13px]" aria-label="Site">
          {items.map((i) => (
            <a
              key={i.label}
              href={i.href}
              className={`link nav-link hidden text-muted sm:inline ${
                current === i.id ? "is-current" : ""
              }`}
              aria-current={current === i.id ? "true" : undefined}
            >
              {i.label}
            </a>
          ))}
          <a href={personal.resumeUrl} className="link text-accent">
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
