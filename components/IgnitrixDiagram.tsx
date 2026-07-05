"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { x: 60, y: 60, label: "Proposer" },
  { x: 240, y: 60, label: "Critic" },
  { x: 150, y: 150, label: "Judge" },
  { x: 150, y: 230, label: "User" },
];

const paths = [
  "M 95 60 L 205 60",
  "M 225 80 L 170 135",
  "M 75 80 L 130 135",
  "M 150 172 L 150 210",
];

export default function IgnitrixDiagram() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 300 260" className="w-full max-w-sm" role="img" aria-label="IGNITRIX architecture: proposer and critic agents feed an LLM judge before reaching the user">
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} stroke="#E3D5C2" strokeWidth="2" fill="none" />
          {!reduce && (
            <motion.circle
              r="4"
              fill="#C0512F"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
              style={{ offsetPath: `path("${d}")` }}
            />
          )}
        </g>
      ))}
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="24" fill="#FAF7F2" stroke="#C0512F" strokeWidth="2" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="10" fontFamily="monospace" fill="#1B1714">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
