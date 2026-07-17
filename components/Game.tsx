"use client";

import { useEffect, useRef, useState } from "react";

const W = 640;
const H = 150;
const GROUND = H - 26;
const PLAYER_X = 42;
const SIZE = 18;
const COLORS = ["#E4573D", "#7048E8", "#4FD1D9", "#D97706", "#2F9E44"];

type Phase = "idle" | "running" | "over";

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef<Phase>("idle");
  const [phase, setPhase] = useState<Phase>("idle");
  const [best, setBest] = useState(0);
  const actionRef = useRef<() => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let y = 0;
    let vy = 0;
    let t = 0;
    let speed = 4.2;
    let score = 0;
    let nextSpawn = 60;
    let obstacles: { x: number; w: number; h: number; c: string }[] = [];

    const setPhaseBoth = (p: Phase) => {
      phaseRef.current = p;
      setPhase(p);
    };

    const reset = () => {
      y = 0;
      vy = 0;
      t = 0;
      speed = 4.2;
      score = 0;
      nextSpawn = 60;
      obstacles = [];
    };

    actionRef.current = () => {
      if (phaseRef.current !== "running") {
        reset();
        setPhaseBoth("running");
      } else if (y === 0) {
        vy = -10.8;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // ground
      ctx.strokeStyle = "rgba(247,249,252,0.35)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, GROUND + SIZE + 1);
      ctx.lineTo(W, GROUND + SIZE + 1);
      ctx.stroke();

      // player
      ctx.fillStyle = "#F7F9FC";
      const py = GROUND + y;
      ctx.beginPath();
      ctx.roundRect(PLAYER_X, py, SIZE, SIZE, 4);
      ctx.fill();

      // obstacles
      for (const o of obstacles) {
        ctx.fillStyle = o.c;
        ctx.beginPath();
        ctx.roundRect(o.x, GROUND + SIZE - o.h, o.w, o.h, 3);
        ctx.fill();
      }

      // score
      ctx.fillStyle = "rgba(247,249,252,0.65)";
      ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.textAlign = "right";
      ctx.fillText(String(Math.floor(score)).padStart(5, "0"), W - 14, 22);

      if (phaseRef.current === "idle") {
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(247,249,252,0.8)";
        ctx.font = "13px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.fillText("click or press space to start", W / 2, H / 2 - 6);
      }
      if (phaseRef.current === "over") {
        ctx.textAlign = "center";
        ctx.fillStyle = "#F7F9FC";
        ctx.font = "bold 14px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.fillText("rejected. click to reapply", W / 2, H / 2 - 6);
      }
    };

    const tick = () => {
      if (phaseRef.current === "running") {
        t += 1;
        score += 0.15;
        speed = 4.2 + Math.min(t / 900, 3);

        vy += 0.55;
        y = Math.min(y + vy, 0);
        if (y === 0) vy = 0;

        if (t >= nextSpawn) {
          const h = 16 + Math.random() * 22;
          obstacles.push({
            x: W + 10,
            w: 12 + Math.random() * 10,
            h,
            c: COLORS[Math.floor(Math.random() * COLORS.length)],
          });
          nextSpawn = t + 55 + Math.random() * 70 - Math.min(t / 60, 25);
        }
        obstacles = obstacles.filter((o) => o.x + o.w > -5);
        for (const o of obstacles) o.x -= speed;

        const py = GROUND + y;
        for (const o of obstacles) {
          const ox = o.x;
          const oy = GROUND + SIZE - o.h;
          if (PLAYER_X < ox + o.w && PLAYER_X + SIZE > ox && py + SIZE > oy) {
            setBest((b) => Math.max(b, Math.floor(score)));
            setPhaseBoth("over");
            break;
          }
        }
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    draw();
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "ArrowUp") {
      e.preventDefault();
      actionRef.current();
    }
  };

  return (
    <div className="mt-20 hidden sm:block">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-paper">
          The job hunt, playable
        </h3>
        <p className="font-mono text-[12px] text-paper/50">
          best this visit: {best.toString().padStart(5, "0")}
        </p>
      </div>
      <p className="mt-1 text-[13px] text-paper/60">
        Jump the rejections. Space or click. {phase === "over" ? "It happens to everyone." : ""}
      </p>
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        tabIndex={0}
        role="img"
        aria-label="A small jumping game. Press space to play."
        onClick={() => actionRef.current()}
        onKeyDown={onKey}
        className="mt-4 w-full max-w-[40rem] cursor-pointer rounded-xl border border-paper/15 bg-white/5 outline-none focus-visible:border-paper/40"
      />
    </div>
  );
}
