'use client';
import React from "react";
import "../styles/globals.css";
import Link from "next/link";

const Dropdown = ({ setDropdown }) => {
  const handleToggle = () => {
    setDropdown(prevState => !prevState);
  };

  return (
    <ul className={'h-full genty-demo text-4xl grid grid-rows-5 backdrop-blur-lg p-8 text-center'}>
      <li className={'hover:-translate-y-3 text-primary-color hover:text-[#96FF64] transition-all'}><Link href="/berita" onClick={handleToggle}>Berita</Link></li>
      <li className={'hover:-translate-y-3 text-primary-color hover:text-[#96FF64] transition-all'}><Link href="#timeline" onClick={handleToggle}>Timeline</Link></li>
      <li className={'hover:-translate-y-3 text-primary-color hover:text-[#96FF64] transition-all'}><Link href="#infolomba" onClick={handleToggle}>Lomba</Link></li>
      <li className={'hover:-translate-y-3 text-primary-color hover:text-[#96FF64] transition-all'}><Link href="#FAQ" onClick={handleToggle}>FAQ</Link></li>
      <li className={'hover:-translate-y-3 text-primary-color hover:text-[#96FF64] transition-all'}><Link href="#kontak" onClick={handleToggle}>Kontak</Link></li>
    </ul>
  );
}

export default Dropdown;