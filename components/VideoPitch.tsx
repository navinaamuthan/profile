"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./ui";

export default function VideoPitch() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideo, setHasVideo] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasVideo]);

  return (
    <section id="pitch" className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
      <FadeIn>
        <p className="eyebrow mb-3 text-center">The 30 second pitch</p>
        <h2 className="font-display text-3xl md:text-4xl text-center mb-8">
          Too busy to scroll? Watch this instead.
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative rounded-card overflow-hidden shadow-lift border border-sand bg-ink aspect-video"
        >
          {hasVideo ? (
            <>
              <video
                ref={videoRef}
                src="/pitch.mp4"
                muted={muted}
                loop
                playsInline
                className="w-full h-full object-cover"
                onError={() => setHasVideo(false)}
              />
              <button
                onClick={() => setMuted(!muted)}
                className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-paper/90 text-ink text-sm font-medium backdrop-blur hover:bg-paper transition-colors focus-ring"
              >
                {muted ? "Unmute" : "Mute"}
              </button>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-paper/70">
              <div className="w-16 h-16 rounded-full border-2 border-clay flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#C0512F" aria-hidden><path d="M8 5v14l11-7z" /></svg>
              </div>
              <p className="font-mono text-xs">Video pitch loading soon. The scrollable version is just as good.</p>
            </div>
          )}
        </motion.div>
      </FadeIn>
    </section>
  );
}
