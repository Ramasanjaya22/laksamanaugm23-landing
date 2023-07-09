"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ dropdown, setDropdown }) => {
  const handleToggle = () => {
    setDropdown((prevState) => !prevState);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-0 shadow-sm`}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex overflow-hidden justify-between bg-white bg-opacity-20 backdrop-blur-lg px-4 py-2 rounded-md`}
      >
        <Link href="/">
          <Image
            src="/logo-laksamana.png"
            alt="logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </Link>

        {/* make a inline navbar */}
        <ul className="flex items-center">
          {/* <li className="mx-8 text-lg genty-demo font-normal text-primary-color hover:text-[#96FF64] transition ease-in-out hidden sm:block">
            <Link href="/berita">Berita</Link>
          </li> */}
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
            <Link href="#footer">Kontak</Link>
          </li>
          <div
            id="nav-icon"
            onClick={handleToggle}
            className={` ${dropdown ? "open" : ""} md:hidden block`}
          >
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
