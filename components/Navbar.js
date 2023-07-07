"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";
import { useState } from "react";

const Navbar = ({ dropdown, setDropdown }) => {
  const handleToggle = () => {
    setDropdown(prevState => !prevState);
  };

  return(
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-0 shadow-sm`}
    >
      {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
      <div
        className={`${styles.innerWidth} mx-auto flex overflow-hidden justify-between bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg px-4 py-2 rounded-md`}
      >
        <Image
          src="/logo-laksamana.png"
          alt="logo"
          width={150}
          height={150}
          className="object-contain"
        />

        {/* make a inline navbar */}
        <ul className="flex items-center">
          <li className="mx-10 text-xl genty-demo font-normal text-primary-color hover:text-[#96FF64] transition ease-in-out hidden sm:block">
            <a href="#berita">Berita</a>
          </li>
          <li className="mx-10 text-xl genty-demo font-normal text-primary-color hover:text-[#96FF64] transition ease-in-out hidden sm:block">
            <a href="#timeline">Timeline</a>
          </li>
          <li className="mx-10 text-xl genty-demo font-normal  text-primary-color hover:text-[#96FF64] transition ease-in-out hidden sm:block">
            <a href="#infolomba">Lomba</a>
          </li>
          <li className="mx-10 text-xl genty-demo font-normal  text-primary-color hover:text-[#96FF64] transition ease-in-out hidden sm:block">
            <a href="#FAQ">FAQ</a>
          </li>
          <li className="mx-10 text-xl genty-demo font-normal  text-primary-color hover:text-[#96FF64] transition ease-in-out hidden sm:block">
            <a href="#kontak">Kontak</a>
          </li>
          <div id="nav-icon" onClick={handleToggle} className={` ${dropdown ? 'open' : ''} md:hidden block`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
