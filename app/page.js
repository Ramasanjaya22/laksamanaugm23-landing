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
// pusing konflik
      </div>
    </>
  );
}
