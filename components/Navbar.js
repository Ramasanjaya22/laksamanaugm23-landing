"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 sticky z-10`}
  >
    {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
    <div className={`${styles.innerWidth} mx-auto flex justify-between`}>
    <Image
        src="/logo-laksamana.png"
        alt="logo"
        width={200}
        height={200}
        className="object-contain"
      />

      {/* make a inline navbar */}
      <ul className="flex items-center">
        <li className="mx-4 font-bold text-primary-color">
          <a href="#timeline">Timeline</a>
        </li>
        <li className="mx-4 font-bold text-primary-color">
          <a href="#lomba">Lomba</a>
        </li>
        <li className="mx-4 font-bold text-primary-color">
          <a href="#FAQ">FAQ</a>
        </li>
        <li className="mx-4 font-bold text-primary-color">
          <a href="#kontak">Kontak</a>
        </li>
        </ul>

    </div>
  </motion.nav>
);

export default Navbar;
