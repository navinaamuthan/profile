"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personal } from "@/data/personal";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Writing", "#writing"],
  ["Awards", "#awards"],
  ["Contact", "#contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ids = links.map(([, h]) => h.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-paper/85 backdrop-blur border-b border-sand/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <a href="#top" className="font-display text-xl focus-ring" aria-label="Back to top">
          N<span className="text-clay">.</span>A
        </a>
        <div className="hidden md:flex items-center gap-7">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-sm focus-ring transition-colors ${
                active === href.slice(1) ? "text-clay" : "text-ink/70 hover:text-ink"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            className="text-sm font-medium px-4 py-2 rounded-full bg-ink text-paper hover:bg-clay transition-colors focus-ring"
          >
            Resume
          </a>
        </div>
        <button
          className="md:hidden focus-ring p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="w-6 space-y-1.5">
            <span className={`block h-0.5 bg-ink transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-ink transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper border-b border-sand overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="text-lg focus-ring">
                  {label}
                </a>
              ))}
              <a href={personal.resumeUrl} className="text-lg text-clay font-medium focus-ring">
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
