"use client";

import { useEffect, useRef, useState } from "react";
import { Section, FadeIn } from "./ui";

const NODES = [
  { label: "Data", thought: "SQL, Tableau, dashboards. Where every good decision starts." },
  { label: "AI", thought: "Agentic systems, LLM-as-Judge, fine-tuning. Built, shipped, judged." },
  { label: "Product", thought: "10,000+ users taught me more than any framework." },
  { label: "Ethics", thought: "EU AI Act, GDPR. The rules of the game, read cover to cover." },
  { label: "Systems", thought: "Distributed systems, gRPC, consensus. How things actually run." },
  { label: "People", thought: "Teams of 8 to 10, Fortune 500 clients, teenage coding students." },
  { label: "Strategy", thought: "UNESCO stakeholders to FinTech roadmaps. Same muscle." },
  { label: "Writing", thought: "Published on AI validation. Clarity is a feature." },
  { label: "Finance", thought: "Financial AI, real user financial data, risk-aware thinking." },
];

export default function BrainMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const hoverRef = useRef<number | null>(null);
  hoverRef.current = hover;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const pts = NODES.map((_, i) => ({
      bx: 0.5 + 0.38 * Math.cos((i / NODES.length) * Math.PI * 2),
      by: 0.5 + 0.38 * Math.sin((i / NODES.length) * Math.PI * 2),
      ph: Math.random() * Math.PI * 2,
    }));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = (t: number) => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const pos = pts.map((p) => ({
        x: (p.bx + (reduce ? 0 : Math.sin(t / 2400 + p.ph) * 0.02)) * W,
        y: (p.by + (reduce ? 0 : Math.cos(t / 2900 + p.ph) * 0.02)) * H,
      }));
      const h = hoverRef.current;
      for (let i = 0; i < pos.length; i++)
        for (let j = i + 1; j < pos.length; j++) {
          const lit = h === i || h === j;
          ctx.strokeStyle = lit ? "rgba(192,81,47,0.5)" : "rgba(227,213,194,0.55)";
          ctx.lineWidth = (lit ? 1.6 : 0.7) * dpr;
          ctx.beginPath();
          ctx.moveTo(pos[i].x, pos[i].y);
          ctx.lineTo(pos[j].x, pos[j].y);
          ctx.stroke();
        }
      pos.forEach((p, i) => {
        const lit = h === i;
        ctx.beginPath();
        ctx.arc(p.x, p.y, (lit ? 9 : 6) * dpr, 0, Math.PI * 2);
        ctx.fillStyle = lit ? "#C0512F" : "#1B1714";
        ctx.fill();
        ctx.font = `${11 * dpr}px monospace`;
        ctx.fillStyle = lit ? "#C0512F" : "#6B6156";
        ctx.textAlign = "center";
        ctx.fillText(NODES[i].label, p.x, p.y - 14 * dpr);
      });
      (canvas as HTMLCanvasElement & { _pos?: { x: number; y: number }[] })._pos = pos;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = (e.clientX - r.left) * dpr;
      const y = (e.clientY - r.top) * dpr;
      const pos = (canvas as HTMLCanvasElement & { _pos?: { x: number; y: number }[] })._pos || [];
      let found: number | null = null;
      pos.forEach((p, i) => {
        if (Math.hypot(p.x - x, p.y - y) < 26 * dpr) found = i;
      });
      setHover(found);
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", () => setHover(null));
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <Section id="brain" eyebrow="The map" title="Everything connects. That is the point.">
      <FadeIn>
        <div className="card p-4 md:p-8">
          <canvas ref={canvasRef} className="w-full h-[340px] md:h-[440px] cursor-crosshair" aria-label="Interactive map of knowledge areas" />
          <div className="min-h-[3rem] flex items-center justify-center px-4">
            <p className="font-display italic text-lg text-center text-clayDeep">
              {hover !== null ? NODES[hover].thought : "Hover a node."}
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
