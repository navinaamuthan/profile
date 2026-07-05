"use client";

import { useRef, useState } from "react";

export default function Spotlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -999, y: -999 });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setPos({ x: -999, y: -999 })}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, rgba(192,81,47,0.12), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
