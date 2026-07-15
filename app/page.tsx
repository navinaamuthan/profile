import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-10">
      <Intro />
      <Experience />
      <Projects />
      <Skills />
      <Writing />
      <Recognition />
      <Contact />
      <Footer />
    </main>
  );
}
