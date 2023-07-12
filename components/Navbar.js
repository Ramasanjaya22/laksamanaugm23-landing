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
        className={`${styles.innerWidth} mx-auto flex overflow-hidden justify-between bg-[#D9D9D9] border-[7px] px-2 pb-1`}
        style={{ borderStyle: 'outset' }}
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
          {/* <li className="text-xl W95FA font-normal text-primary-color hidden sm:block">
            <Link href="/berita">Berita</Link>
          </li> */}
          <li className="text-xl W95FA font-normal text-primary-color hidden sm:block option border-4 border-[#D9D9D9] h-full px-2">
            <Link href="#timeline">Timeline</Link>
          </li>
          <li className="text-xl W95FA font-normal  text-primary-color hidden sm:block option border-4 border-[#D9D9D9] h-full px-2">
            <Link href="#infolomba">Lomba</Link>
          </li>
          <li className="text-xl W95FA font-normal  text-primary-color hidden sm:block option border-4 border-[#D9D9D9] h-full px-2">
            <Link href="#FAQ">FAQ</Link>
          </li>
          <li className="text-xl W95FA font-normal  text-primary-color hidden sm:block option border-4 border-[#D9D9D9] h-full px-2">
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
