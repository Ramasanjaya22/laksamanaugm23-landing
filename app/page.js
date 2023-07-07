"use client";

import { Footer, Navbar, QandA, Sponsors, Timeline } from "@/components";
import Hero from "@/components/Hero";
import InfoLomba from "@/components/InfoLomba";
import Gallery from "@/components/Gallery";
import Dropdown from "@/components/Dropdown";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import React from "react";

export default function Home() {
  const [dropdown, setDropdown] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar z-50" style={{ scaleX }} />
      <div className="snap-y snap-mandatory bg-[#F8FFF0]">
        <div className="sticky top-0 z-50">
          <Navbar setDropdown={setDropdown} dropdown={dropdown} />
        </div>
        {dropdown && (
         <div className="fixed w-full h-full z-50 transition-all">
          <Dropdown setDropdown={setDropdown}/>
        </div> )}
        <div className="snap-start overflow-auto z-0">
          <Hero />
        </div>
        <div className="snap-start overflow-auto z-0">
          <Gallery />
        </div>
        <div className="snap-start overflow-auto z-0">
          <Timeline />
        </div>
        <div className="snap-start overflow-auto z-0">
          <InfoLomba />
        </div>
        <div className="snap-start overflow-auto z-0">
          <QandA />
        </div>
        <div className="snap-start overflow-auto z-0">
          <Sponsors />
        </div>
        <div className="snap-start">
          <Footer />
        </div>
      </div>
    </>
  );
}
