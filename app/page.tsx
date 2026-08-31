import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Writing from "@/components/Writing";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Writing />
        <Recognition />
      </main>
      <Contact />
    </>
  );
}
