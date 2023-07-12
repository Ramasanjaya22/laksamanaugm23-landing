"use client";
import { Dropdown, Footer, Navbar } from "@/components";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

export default function ClientComponent({ children }) {
  const [dropdown, setDropdown] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <motion.div className="progress-bar z-50" style={{ scaleX }} />
      <div className="noise">
        <div className="sticky top-0 z-50">
          <Navbar setDropdown={setDropdown} dropdown={dropdown} />
          {dropdown && (
            <div className="fixed w-full h-full z-50 transition-all">
              <Dropdown setDropdown={setDropdown} />
            </div>
          )}
        </div>
        {children}
        <Footer/>
      
      </div>
      </div>
  );
}
