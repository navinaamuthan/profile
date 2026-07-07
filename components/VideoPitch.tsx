"use client";

import { useState } from "react";
import { FadeIn } from "./ui";
import { personal } from "@/data/personal";

export default function VideoPitch() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(personal.videoUrl);

  return (
    <section id="pitch" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="eyebrow mb-3">The 60 second version</p>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Sixty seconds. <span className="text-clay italic">Then decide.</span>
          </h2>
          <p className="text-ink/70 max-w-xl mb-10">
            Hiring is a bet on a person, not a PDF. Here is mine, face to camera: who I am, what I have shipped,
            and why your analytics team should want me in the room.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {hasVideo ? (
            <div className="relative rounded-card overflow-hidden border border-sand shadow-lift bg-ink aspect-video">
              {playing ? (
                <video
                  src={personal.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-cover"
                  aria-label={`${personal.firstName}'s 60 second pitch video`}
                />
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 flex flex-col items-center justify-center gap-4 focus-ring"
                  aria-label="Play the 60 second pitch video"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-clay text-paper shadow-lift transition-transform group-hover:scale-110">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-paper/80">
                    Press play. It is one minute.
                  </span>
                </button>
              )}
            </div>
          ) : (
            <div className="rounded-card border border-dashed border-clay/40 bg-white/50 p-10 md:p-14 text-center">
              <p className="font-display text-2xl md:text-3xl text-ink/80 mb-3">
                Being filmed this week.
              </p>
              <p className="text-ink/60 max-w-md mx-auto mb-8">
                Until then, the written version is one click away, and the human version is one email away.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={personal.resumeUrl}
                  className="px-5 py-2.5 rounded-full bg-clay text-paper font-medium hover:bg-clayDeep transition-colors focus-ring"
                >
                  Read the resume
                </a>
                <a
                  href={`mailto:${personal.email}?subject=Let's talk`}
                  className="px-5 py-2.5 rounded-full border border-ink/20 hover:border-clay hover:text-clay transition-colors focus-ring"
                >
                  Skip ahead. Email me.
                </a>
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
