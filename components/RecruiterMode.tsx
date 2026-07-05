"use client";

import { AnimatePresence, motion } from "framer-motion";
import { personal } from "@/data/personal";

const rows: [string, string][] = [
  ["Looking for", "Product Manager, Business Analyst, Data Analyst, or ML roles"],
  ["Current status", "MSc Computer Science (Intelligent Systems), TCD, Distinction"],
  ["Work authorization", "Stamp 1G eligible. No sponsorship required."],
  ["Location", "Dublin, Ireland"],
  ["Experience", "PM leading 8 to 10 people. Fortune 500 delivery at E2open. ML research at Samsung and IIT Madras."],
  ["Headline proof", "Top 0.5% of 50,000+ at Google Cloud Agentic AI Hackathon. CSAT 3.2 to 4.6 on a 10,000+ user product."],
  ["Industries", "FinTech, finance, BigTech, enterprise SaaS"],
];

export default function RecruiterMode({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-ink/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Recruiter overview"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            className="bg-paper rounded-card shadow-lift max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="eyebrow mb-2">The 30 second version</p>
            <h3 className="font-display text-3xl md:text-4xl mb-6">Hi, hiring team. Here is everything you need.</h3>
            <dl className="space-y-4">
              {rows.map(([k, v]) => (
                <div key={k} className="grid md:grid-cols-[160px_1fr] gap-1 md:gap-4 border-b border-sand/70 pb-3">
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted pt-1">{k}</dt>
                  <dd className="text-ink/85">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${personal.email}`} className="px-5 py-2.5 rounded-full bg-clay text-paper font-medium hover:bg-clayDeep transition-colors focus-ring">
                Email Navina
              </a>
              <a href={personal.resumeUrl} className="px-5 py-2.5 rounded-full border border-ink/20 hover:border-clay hover:text-clay transition-colors focus-ring">
                Download resume
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-ink/20 hover:border-clay hover:text-clay transition-colors focus-ring">
                LinkedIn
              </a>
              <button onClick={onClose} className="ml-auto px-5 py-2.5 rounded-full text-muted hover:text-ink transition-colors focus-ring">
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
