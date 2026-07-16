import Reveal from "@/components/Reveal";
import CopyEmail from "@/components/CopyEmail";
import LocalTime from "@/components/LocalTime";
import { personal } from "@/data/personal";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy text-paper">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-20 sm:pt-28 md:px-10">
        <Reveal>
          <p className="section-label text-paper/50">
            <span className="text-accent">07</span>
            <span className="mx-2 text-paper/20">/</span>
            Contact
          </p>
          <h2 className="mt-8 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.02] tracking-tight">
            Say hello<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-paper/70">
            If you are hiring for data, analytics or AI work in Dublin, I would like to hear about
            it. Email is the fastest way to reach me.
          </p>
          <p className="mt-10">
            <a
              href={`mailto:${personal.email}`}
              className="link-dark font-display text-[clamp(1.3rem,3.4vw,2.4rem)] tracking-tight"
            >
              {personal.email}
            </a>
          </p>
          <p className="mt-3 text-[13px] text-paper/50">
            <CopyEmail email={personal.email} dark />
          </p>
          <nav
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-paper/80"
            aria-label="Profiles"
          >
            <a href={personal.linkedin} className="link-dark" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={personal.github} className="link-dark" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={personal.resumeUrl} className="link-dark">
              CV
            </a>
          </nav>
        </Reveal>

        <footer className="mt-20 flex flex-wrap items-baseline justify-between gap-2 border-t border-paper/15 pt-6 text-[13px] text-paper/50 sm:mt-28">
          <p>
            © {new Date().getFullYear()} {personal.name}
          </p>
          <p>
            Set in Space Grotesk and Inter · <LocalTime />
          </p>
          <a href="#top" className="link-dark">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
