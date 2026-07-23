"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/personal";

const items: { label: string; id: string; color: string; icon: React.ReactNode }[] = [
  {
    label: "About",
    id: "about",
    color: "#A67C52",
    icon: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />,
  },
  {
    label: "Fit",
    id: "fit",
    color: "#C9A66B",
    icon: <path d="M12 3l2.2 4.5L19 8.2l-3.5 3.4.8 4.9L12 14.8 7.7 16.5l.8-4.9L5 8.2l4.8-.7L12 3z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
  },
  {
    label: "Experience",
    id: "experience",
    color: "#5C7C6A",
    icon: <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-9 0h10a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />,
  },
  {
    label: "Work",
    id: "work",
    color: "#8B6914",
    icon: <path d="M4 7c0-1.1.9-2 2-2h5l2 2h7a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
  },
  {
    label: "Skills",
    id: "skills",
    color: "#B08D57",
    icon: <path d="M5 5h5v5H5V5zm9 0h5v5h-5V5zM5 14h5v5H5v-5zm9 0h5v5h-5v-5z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
  },
  {
    label: "Writing",
    id: "writing",
    color: "#1B3A4B",
    icon: <path d="M4 20l4-1L20 7l-3-3L5 16l-1 4zm11-14l3 3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
  },
  {
    label: "Recognition",
    id: "recognition",
    color: "#2F5D50",
    icon: <path d="M12 15a5 5 0 100-10 5 5 0 000 10zm-3 0l-1 6 4-2 4 2-1-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
  },
  {
    label: "Contact",
    id: "contact",
    color: "#D4B896",
    icon: <path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm1 1l7 5 7-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
  },
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
        <nav className="flex items-center gap-2" aria-label="Site">
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
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
                    {i.icon}
                  </svg>
                  {i.label}
                </a>
              );
            })}
          </div>
          <a
            href={personal.resumeUrl}
            className="rounded-full bg-navy px-4 py-1.5 text-[13px] font-semibold text-gold transition-colors hover:bg-bronze hover:text-paper"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
