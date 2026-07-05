"use client";

import { personal } from "@/data/personal";

export default function FloatingContact() {
  return (
    <a
      href={`mailto:${personal.email}`}
      aria-label="Email Navina"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-clay text-paper shadow-lift flex items-center justify-center hover:bg-clayDeep hover:scale-105 transition-all focus-ring"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    </a>
  );
}
