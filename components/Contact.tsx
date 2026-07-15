import { personal } from "@/data/personal";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-heading">Get in touch</h2>
      <p className="mt-6 font-display text-lg leading-relaxed text-ink/90">
        If you are hiring for data, analytics or AI work in Dublin, I would like to hear about it.
        Email is the fastest way to reach me:{" "}
        <a href={`mailto:${personal.email}`} className="link">
          {personal.email}
        </a>
        . My CV is{" "}
        <a href={personal.resumeUrl} className="link">
          here as a PDF
        </a>
        , and the longer trail is on{" "}
        <a href={personal.linkedin} className="link" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        and{" "}
        <a href={personal.github} className="link" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
