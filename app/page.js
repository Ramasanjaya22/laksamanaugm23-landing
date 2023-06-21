"use client";

import { Footer, Navbar, QandA, Sponsors } from "@/components";
import Hero from "@/components/Hero";
import InfoLomba from "@/components/InfoLomba";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="snap-y bg-secondary-white snap-mandatory w-screen h-screen">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <div className="snap-start h-screen z-0">
          <Hero />
        </div>
        <div className="snap-start h-screen z-0">
          <InfoLomba />
        </div>
        <div className="snap-start h-screen z-0">
          <QandA />
        </div>
        <div className="snap-start h-screen z-0">
          <Sponsors />
        </div>
        <div className="snap-start">
          <Footer />
        </div>
      </div>
    </>
  );
}
