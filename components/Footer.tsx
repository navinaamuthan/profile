"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/personal";
import { GitHubIcon, LinkedInIcon } from "./ui";

const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

export default function Footer() {
  const [egg, setEgg] = useState(false);

  useEffect(() => {
    let idx = 0;
    const onKey = (e: KeyboardEvent) => {
      idx = e.key === KONAMI[idx] ? idx + 1 : e.key === KONAMI[0] ? 1 : 0;
      if (idx === KONAMI.length) {
        setEgg(true);
        idx = 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <footer className="bg-ink text-paper px-6 md:px-12 py-14">
      <div className="max-w-6xl mx-auto">
        <p className="font-display italic text-2xl md:text-3xl max-w-2xl mb-10 leading-snug">
          &ldquo;The best products are opinions about how the world should work, tested against how it actually does.&rdquo;
        </p>
        {egg && (
          <div className="mb-8 p-5 rounded-card border border-clay/50 bg-clay/10 font-mono text-sm">
            <p className="text-clay mb-1">Developer notes unlocked (Konami code, nice).</p>
            <p className="text-paper/70">
              This site: Next.js App Router, TypeScript, Tailwind, Framer Motion. All content lives in /data so
              updates never touch components. You found the easter egg. We should probably work together.
            </p>
          </div>
        )}
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-paper/15 pt-8">
          <p className="text-sm text-paper/60">
            &copy; {new Date().getFullYear()} {personal.name}. Built with care in Dublin.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="text-paper/70 hover:text-clay transition-colors focus-ring"><LinkedInIcon /></a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="text-paper/70 hover:text-clay transition-colors focus-ring"><GitHubIcon /></a>
            <a href={`mailto:${personal.email}`} className="text-paper/70 hover:text-clay transition-colors focus-ring">Email</a>
            <a href="#top" className="px-4 py-2 rounded-full border border-paper/25 hover:border-clay hover:text-clay transition-colors focus-ring">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
