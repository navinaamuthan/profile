"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import VideoPitch from "@/components/VideoPitch";
import ProofTicker from "@/components/ProofTicker";
import RecruiterMode from "@/components/RecruiterMode";
import QuickScan from "@/components/QuickScan";
import About from "@/components/About";
import BrainMap from "@/components/BrainMap";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Changelog from "@/components/Changelog";
import Projects from "@/components/Projects";
import ThinkingResearch from "@/components/ThinkingResearch";
import Writing from "@/components/Writing";
import Bookshelf from "@/components/Bookshelf";
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
      <VideoPitch />
      <ProofTicker />
      <QuickScan />
      <About />
      <BrainMap />
      <ExperienceTimeline />
      <Changelog />
      <Projects />
      <ThinkingResearch />
      <Writing />
      <Bookshelf />
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
