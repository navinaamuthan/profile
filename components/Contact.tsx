"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "./ui";
import { personal } from "@/data/personal";

export default function Contact() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="px-6 md:px-12 py-24 md:py-32 max-w-6xl mx-auto text-center">
      <FadeIn>
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[1.03] tracking-tight max-w-4xl mx-auto">
          Let&apos;s build something people will <span className="text-clay italic">remember</span>.
        </h2>
        <p className="mt-6 text-lg text-ink/70 max-w-xl mx-auto leading-relaxed">
          Hiring for product, analytics, or ML? Building something at the intersection of AI and trust? My inbox
          is open and my response time is embarrassing in a good way.
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${personal.email}`} className="px-7 py-3.5 rounded-full bg-clay text-paper font-medium shadow-lift hover:bg-clayDeep transition-colors focus-ring">
            {personal.email}
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full border border-ink/20 hover:border-clay hover:text-clay transition-colors focus-ring">
            LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full border border-ink/20 hover:border-clay hover:text-clay transition-colors focus-ring">
            GitHub
          </a>
          <a href={personal.resumeUrl} className="px-7 py-3.5 rounded-full border border-ink/20 hover:border-clay hover:text-clay transition-colors focus-ring">
            Resume
          </a>
        </div>
        <p className="mt-4 font-mono text-xs text-muted">Calendar link placeholder: add your Calendly here.</p>
      </FadeIn>

      {/* Self-writing signature */}
      <svg
        ref={ref}
        viewBox="0 0 320 90"
        className="mx-auto mt-14 w-56 md:w-72"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M20 65 C 30 25, 45 20, 50 45 C 54 65, 58 70, 66 50 C 74 30, 80 30, 86 50 C 92 68, 100 66, 108 44 C 114 28, 122 26, 126 44 C 130 62, 138 64, 148 42 C 156 26, 166 26, 170 46 C 174 64, 184 62, 194 40 C 202 24, 214 26, 218 46 C 222 64, 232 60, 244 38 C 254 20, 268 24, 272 44 C 276 62, 288 58, 300 40"
          stroke="#C0512F"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
      </svg>
      <p className="font-display italic text-lg text-muted mt-2">Navina</p>
    </section>
  );
}
