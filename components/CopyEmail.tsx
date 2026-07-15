"use client";

import { useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable; the mailto link next to this still works */
    }
  };

  return (
    <button
      onClick={copy}
      className="link cursor-pointer text-[13px] text-muted"
      aria-live="polite"
    >
      {copied ? "copied" : "copy address"}
    </button>
  );
}
