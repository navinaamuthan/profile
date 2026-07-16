"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/personal";

const items = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            <a key={i.label} href={i.href} className="link hidden text-muted sm:inline">
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
