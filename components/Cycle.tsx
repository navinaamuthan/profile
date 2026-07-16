"use client";

import { useEffect, useState } from "react";

export default function Cycle({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="cycle">
      <span key={i} className="cycle-inner">
        {words[i]}
      </span>
    </span>
  );
}
