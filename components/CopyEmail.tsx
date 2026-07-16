"use client";

import { useRef, useState } from "react";

export default function CopyEmail({ email, dark = false }: { email: string; dark?: boolean }) {
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
      className={`${dark ? "link-dark text-paper/50" : "link text-muted"} cursor-pointer text-[13px]`}
      aria-live="polite"
    >
      {copied ? "copied" : "copy address"}
    </button>
  );
}
