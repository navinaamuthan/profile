"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { personal } from "@/data/personal";

const badges = [
  personal.availability,
  personal.location,
  "Stamp 1G eligible",
  "No sponsorship required",
];

export default function Hero({ onRecruiter }: { onRecruiter: () => void }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 14,
      y: ((e.clientY - r.top) / r.height - 0.5) * 14,
    });
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 pt-24 pb-16"
    >
      {/* Ambient gradients */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-clay/10 blur-3xl"
        animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-48 -left-32 w-[32rem] h-[32rem] rounded-full bg-beige blur-3xl"
        animate={reduce ? undefined : { x: [0, -24, 0], y: [0, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-12 items-center relative">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {badges.map((b, i) => (
              <span
                key={b}
                className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                  i === 0 ? "bg-clay text-paper border-clay" : "bg-white/60 border-sand text-ink/70"
                }`}
              >
                {i === 0 && (
                  <span className="relative mr-2 inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-paper" />
                  </span>
                )}
                {b}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight"
          >
            I build AI products people{" "}
            <span className="text-clay italic">actually trust</span>.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-ink/75 max-w-xl leading-relaxed"
          >
            {personal.positioning}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={onRecruiter}
              className="px-6 py-3 rounded-full bg-clay text-paper font-medium shadow-lift hover:bg-clayDeep transition-colors focus-ring"
            >
              Press if you&apos;re hiring
            </button>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full border border-ink/20 hover:border-clay hover:text-clay transition-colors focus-ring"
            >
              See what I&apos;ve built
            </a>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 font-mono text-xs text-muted"
          >
            {personal.roleLine}
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={reduce ? undefined : { transform: `perspective(900px) rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)` }}
          className="relative mx-auto w-64 h-80 md:w-72 md:h-96"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-beige to-sand rotate-3" />
          <div className="absolute inset-0 rounded-[2rem] bg-white border border-sand shadow-lift flex flex-col items-center justify-center gap-3">
            <div className="w-24 h-24 rounded-full bg-beige border border-sand flex items-center justify-center font-display text-3xl text-clay">
              NA
            </div>
            <p className="font-mono text-xs text-muted px-6 text-center">Headshot placeholder. Drop your photo in /public.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
