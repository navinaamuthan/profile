"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, FadeIn } from "./ui";
import { books } from "@/data/books";

export default function Bookshelf() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="bookshelf" eyebrow="Bookshelf" title="Read. Understood. Applied.">
      <FadeIn>
        <p className="text-muted mb-8 max-w-xl">Not a reading list. Each spine opens to what the book changed about how I work. Click one.</p>
      </FadeIn>
      <div className="flex items-end gap-2 overflow-x-auto pb-4">
        {books.map((b, i) => {
          const isOpen = open === i;
          return (
            <motion.button
              key={b.title}
              onClick={() => setOpen(isOpen ? null : i)}
              animate={{ width: isOpen ? 300 : 56 }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              className="relative h-64 shrink-0 rounded-lg shadow-soft text-left overflow-hidden focus-ring"
              style={{ backgroundColor: isOpen ? "#FAF7F2" : b.color, border: isOpen ? `2px solid ${b.color}` : "none" }}
              aria-expanded={isOpen}
            >
              {!isOpen ? (
                <span className="absolute inset-0 flex items-center justify-center [writing-mode:vertical-rl] rotate-180 font-mono text-xs text-paper/90 tracking-wider px-2">
                  {b.title}
                </span>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="p-5 h-full flex flex-col">
                  <p className="font-display text-lg leading-snug mb-1">{b.title}</p>
                  <p className="font-mono text-xs text-muted mb-4">{b.author}</p>
                  <p className="text-sm leading-relaxed text-ink/80 italic">{b.takeaway}</p>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </Section>
  );
}
