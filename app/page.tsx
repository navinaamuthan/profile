import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RoleFit from "@/components/RoleFit";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";

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
        <RoleFit />
        <Experience />
        <Projects />
        <Skills />
        <Writing />
        <Recognition />
      </main>
      <Contact />
      <Terminal />
    </>
  );
}
