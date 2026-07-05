"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import RecruiterMode from "@/components/RecruiterMode";
import QuickScan from "@/components/QuickScan";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Projects from "@/components/Projects";
import ThinkingResearch from "@/components/ThinkingResearch";
import Writing from "@/components/Writing";
import Awards from "@/components/Awards";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  const [recruiterOpen, setRecruiterOpen] = useState(false);

  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero onRecruiter={() => setRecruiterOpen(true)} />
      <QuickScan />
      <About />
      <ExperienceTimeline />
      <Projects />
      <ThinkingResearch />
      <Writing />
      <Awards />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingContact />
      <RecruiterMode open={recruiterOpen} onClose={() => setRecruiterOpen(false)} />
    </main>
  );
}
