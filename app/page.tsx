"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import ProofTicker from "@/components/ProofTicker";
import RecruiterMode from "@/components/RecruiterMode";
import QuickScan from "@/components/QuickScan";
// import VideoPitch from "@/components/VideoPitch"; // no video pitch on the site
import About from "@/components/About";
import HowIThink from "@/components/HowIThink";
import BrainMap from "@/components/BrainMap";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Changelog from "@/components/Changelog";
import Projects from "@/components/Projects";
import ThinkingResearch from "@/components/ThinkingResearch";
import Writing from "@/components/Writing";
import Bookshelf from "@/components/Bookshelf";
import Awards from "@/components/Awards";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  const [recruiterOpen, setRecruiterOpen] = useState(false);

  return (
    <main>
      <ScrollProgress />
      <Navbar onRecruiter={() => setRecruiterOpen(true)} />
      <Hero onRecruiter={() => setRecruiterOpen(true)} />
      <ProofTicker />
      <QuickScan />
      {/* <VideoPitch /> */}

      {/* What a hirer needs first: who, what she can do, where she has done it */}
      <About />
      <Skills />
      <ExperienceTimeline />
      <HowIThink />
      <Projects />
      <Awards />

      {/* Depth and personality below the fold */}
      <ThinkingResearch />
      <Writing />
      <Changelog />
      <BrainMap />
      <Bookshelf />

      <Contact />
      <Footer />
      <FloatingContact />
      <RecruiterMode open={recruiterOpen} onClose={() => setRecruiterOpen(false)} />
    </main>
  );
}
