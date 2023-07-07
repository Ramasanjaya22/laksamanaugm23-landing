"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-0`}
  >
    {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
    <div
      className={`${styles.innerWidth} mx-auto flex overflow-hidden justify-between bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg px-4 py-2 rounded-md`}
    >
      <Link href="/">
      <Image
        src="/logo-laksamana.png"
        alt="logo"
        width={120}
        height={120}
        className=
        "object-contain"
      />
      </Link>

      {/* make a inline navbar */}
      <ul className="flex items-center">
        <li className="mx-8 text-lg genty-demo font-normal text-primary-color hover:text-[#96FF64] transition ease-in-out hidden sm:block">
          <Link href="/berita">Berita</Link>
        </li>
        <li className="mx-8 text-lg genty-demo font-normal text-primary-color hover:text-[#96FF64] transition ease-in-out hidden sm:block">
          <Link href="#timeline">Timeline</Link>
        </li>
        <li className="mx-8 text-lg genty-demo font-normal  text-primary-color hover:text-[#96FF64] transition ease-in-out hidden sm:block">
          <Link href="#infolomba">Lomba</Link>
        </li>
        <li className="mx-8 text-lg genty-demo font-normal  text-primary-color hover:text-[#96FF64] transition ease-in-out hidden sm:block">
          <Link href="#FAQ">FAQ</Link>
        </li>
        <li className="mx-8 text-lg genty-demo font-normal  text-primary-color hover:text-[#96FF64] transition ease-in-out hidden sm:block">
          <Link href="#kontak">Kontak</Link>
        </li>

        {/* humburger button */}
        <svg
          viewBox="0 0 100 80"
          width="25"
          height="25"
          className="block sm:hidden"
        >
          <rect width="100" height="20" rx="10"></rect>
          <rect y="30" width="100" height="20" rx="10"></rect>
          <rect y="60" width="100" height="20" rx="10"></rect>
        </svg>
      </ul>
    </div>
  </motion.nav>
);

export default Navbar;
