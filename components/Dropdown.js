'use client';
import React from "react";
import "../styles/globals.css";
import Link from "next/link";

const Dropdown = ({ setDropdown }) => {
  const handleToggle = () => {
    setDropdown(prevState => !prevState);
  };

  return (
    <ul className={'W95FA text-2xl bg-[#D9D9D9] text-left border-[8px]'} style={{ borderStyle: 'outset' }}>
      <li className={'text-primary-color hover:bg-[#04007F] hover:text-white p-3'}><Link href="/about-us" onClick={handleToggle}>About Us</Link></li>
      {/* <li className={'text-primary-color hover:bg-[#04007F] hover:text-white p-3'}><Link href="/berita" onClick={handleToggle}>Berita</Link></li> */}
      <li className={'text-primary-color hover:bg-[#04007F] hover:text-white p-3'}><Link href="#timeline" onClick={handleToggle}>Timeline</Link></li>
      <li className={'text-primary-color hover:bg-[#04007F] hover:text-white p-3'}><Link href="#matalomba" onClick={handleToggle}>Lomba</Link></li>
      <li className={'text-primary-color hover:bg-[#04007F] hover:text-white p-3'}><Link href="#FAQ" onClick={handleToggle}>FAQ</Link></li>
      <li className={'text-primary-color hover:bg-[#04007F] hover:text-white p-3'}><Link href="#sponsor" onClick={handleToggle}>Kontak</Link></li>
    </ul>
  );
}

export default Dropdown;