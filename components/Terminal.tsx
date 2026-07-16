"use client";

import { useEffect, useRef, useState } from "react";
import { answer, suggestions, type NaviAnswer } from "@/data/qa";

type Msg = { who: "guest" | "navi"; text: string; links?: NaviAnswer["links"] };

const GREETING: Msg = {
  who: "navi",
  text:
    "Hi, I'm Navi. Ask me anything about Navina's work: sponsorship, stack, projects, availability. I answer from her actual record only. Type help for more.",
};

export function TerminalWindow({
  bodyHeight = "h-80",
  onClose,
}: {
  bodyHeight?: string;
  onClose?: () => void;
}) {
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [msgs]);

  const send = (raw: string) => {
    const q = raw.trim();
    if (!q) return;
    setInput("");
    if (q.toLowerCase().replace(/^\//, "") === "clear") {
      setMsgs([GREETING]);
      return;
    }
    const a = answer(q);
    setMsgs((m) => [...m, { who: "guest", text: q }, { who: "navi", ...a }]);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-ink/60 bg-[#14171A] shadow-2xl">
      <div className="flex items-center gap-4 border-b border-paper/10 px-4 py-2.5">
        {onClose ? (
          <button onClick={onClose} aria-label="Close" className="group flex gap-1.5">
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#FF5F57] text-[9px] text-ink/0 transition-colors group-hover:text-ink/70">
              ×
            </span>
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" aria-hidden />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" aria-hidden />
          </button>
        ) : (
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </span>
        )}
        <p className="flex-1 text-center font-mono text-[12px] text-paper/50">
          navi — ask about Navina
        </p>
        <span className="w-12" aria-hidden />
      </div>

      <div
        ref={bodyRef}
        className={`${bodyHeight} space-y-4 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed`}
      >
        {msgs.map((m, i) =>
          m.who === "guest" ? (
            <p key={i} className="text-paper/90">
              <span className="text-accentSoft">guest@navina ~ %</span> {m.text}
            </p>
          ) : (
            <div key={i} className="term-msg text-paper/70">
              <p>{m.text}</p>
              {m.links && (
                <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {m.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="link-dark text-paper/90"
                      {...(l.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {l.label}
                    </a>
                  ))}
                </p>
              )}
            </div>
          )
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 border-t border-paper/10 px-4 pt-3">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => send(s)}
            className="rounded-full border border-paper/20 px-2.5 py-1 font-mono text-[11px] text-paper/60 transition-colors hover:border-accentSoft hover:text-accentSoft"
          >
            {s}
          </button>
        ))}
      </div>

      <form
        className="flex items-center gap-2 px-4 py-3 font-mono text-[13px]"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <span className="shrink-0 text-accentSoft">guest@navina ~ %</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent text-paper placeholder:text-paper/30 focus:outline-none"
          placeholder="type a question"
          aria-label="Your question"
        />
      </form>
    </div>
  );
}

/** Floating launcher for small screens; on desktop the terminal lives in the hero. */
export default function Terminal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="term-launcher fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-[13px] text-paper shadow-lg"
        aria-expanded={open}
      >
        <span className="font-mono text-accentSoft">&gt;_</span>
        Ask about my work
        <span className="cursor-blink font-mono" aria-hidden>
          ▌
        </span>
      </button>
      {open && (
        <div className="term-window fixed bottom-20 right-5 z-[60] w-[min(26rem,calc(100vw-2.5rem))]">
          <TerminalWindow onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
