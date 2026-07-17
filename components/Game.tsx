"use client";

import { useEffect, useRef, useState } from "react";

const W = 1080;
const H = 118;
const GROUND = H - 24;
const PLAYER_X = 56;
const SIZE = 16;
const OFFER_COLORS = ["#E4573D", "#7048E8", "#0F8B8D", "#D97706", "#2F9E44", "#2997FF"];

type Phase = "idle" | "running" | "over";

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef<Phase>("idle");
  const [, setPhase] = useState<Phase>("idle");
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
    let speed = 4.6;
    let offers = 0;
    let nextSpawn = 40;
    let blocks: { x: number; w: number; h: number }[] = [];
    let coins: { x: number; cy: number; c: string; got: boolean }[] = [];

    const setPhaseBoth = (p: Phase) => {
      phaseRef.current = p;
      setPhase(p);
    };

    const reset = () => {
      y = 0;
      vy = 0;
      t = 0;
      speed = 4.6;
      offers = 0;
      nextSpawn = 40;
      blocks = [];
      coins = [];
    };

    actionRef.current = () => {
      if (phaseRef.current !== "running") {
        reset();
        setPhaseBoth("running");
      } else if (y === 0) {
        vy = -9.8;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      ctx.strokeStyle = "rgba(245,245,247,0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, GROUND + SIZE + 1);
      ctx.lineTo(W, GROUND + SIZE + 1);
      ctx.stroke();

      // player
      ctx.fillStyle = "#F5F5F7";
      ctx.beginPath();
      ctx.roundRect(PLAYER_X, GROUND + y, SIZE, SIZE, 4);
      ctx.fill();

      // grey blocks to jump
      for (const b of blocks) {
        ctx.fillStyle = "#6E6E73";
        ctx.beginPath();
        ctx.roundRect(b.x, GROUND + SIZE - b.h, b.w, b.h, 3);
        ctx.fill();
      }

      // offers to catch
      for (const c of coins) {
        if (c.got) continue;
        ctx.fillStyle = c.c;
        ctx.beginPath();
        ctx.arc(c.x, c.cy, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = "rgba(245,245,247,0.7)";
      ctx.font = "11px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.textAlign = "right";
      ctx.fillText(`offers ${offers}`, W - 10, 18);

      ctx.textAlign = "center";
      if (phaseRef.current === "idle") {
        ctx.fillStyle = "rgba(245,245,247,0.85)";
        ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.fillText("click to play: catch the colour", W / 2, H / 2 - 4);
      }
      if (phaseRef.current === "over") {
        ctx.fillStyle = "#F5F5F7";
        ctx.font = "bold 12px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.fillText(`${offers} offers collected. go again?`, W / 2, H / 2 - 4);
      }
    };

    const tick = () => {
      if (phaseRef.current === "running") {
        t += 1;
        speed = 3.8 + Math.min(t / 800, 2.6);

        vy += 0.52;
        y = Math.min(y + vy, 0);
        if (y === 0) vy = 0;

        if (t >= nextSpawn) {
          if (Math.random() < 0.45) {
            blocks.push({ x: W + 10, w: 11 + Math.random() * 9, h: 14 + Math.random() * 18 });
          } else {
            coins.push({
              x: W + 10,
              cy: GROUND - 14 - Math.random() * 26,
              c: OFFER_COLORS[Math.floor(Math.random() * OFFER_COLORS.length)],
              got: false,
            });
          }
          nextSpawn = t + 36 + Math.random() * 46 - Math.min(t / 70, 16);
        }

        for (const b of blocks) b.x -= speed;
        for (const c of coins) c.x -= speed;
        blocks = blocks.filter((b) => b.x + b.w > -5);
        coins = coins.filter((c) => c.x > -8);

        const py = GROUND + y;
        for (const c of coins) {
          if (!c.got && c.x > PLAYER_X - 4 && c.x < PLAYER_X + SIZE + 4 && c.cy > py - 6 && c.cy < py + SIZE + 6) {
            c.got = true;
            offers += 1;
          }
        }
        for (const b of blocks) {
          if (PLAYER_X < b.x + b.w && PLAYER_X + SIZE > b.x && py + SIZE > GROUND + SIZE - b.h) {
            setBest((v) => Math.max(v, offers));
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

  return (
    <div className="overflow-hidden rounded-b-2xl border border-t-0 border-white/10 bg-graphite shadow-xl">
      <div className="flex items-center justify-between px-5 pt-2.5">
        <p className="font-mono text-[11px] text-paper/60">
          offer run · space or click to jump
        </p>
        <p className="font-mono text-[11px] text-paper/40">best: {best}</p>
      </div>
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        tabIndex={0}
        role="img"
        aria-label="A small jumping game. Press space to play."
        onClick={() => actionRef.current()}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "ArrowUp") {
            e.preventDefault();
            actionRef.current();
          }
        }}
        className="block h-auto w-full cursor-pointer outline-none"
      />
    </div>
  );
}
