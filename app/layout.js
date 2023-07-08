"use client";
import { Dropdown, Footer, Navbar } from "@/components";
import "@/styles/globals.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
export const metadata = {
  title: "Laksamana 2023",
  description: "Lomba",
};

export default function RootLayout({ children }) {
  const [dropdown, setDropdown] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <html lang="en">
      <body>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <div className="snap-y snap-mandatory bg-[#F8FFF0] noise">
          <div className="sticky top-0 z-50">
            <Navbar setDropdown={setDropdown} dropdown={dropdown} />
            {dropdown && (
         <div className="fixed w-full h-full z-50 transition-all">
          <Dropdown setDropdown={setDropdown}/>
        </div> )}
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
