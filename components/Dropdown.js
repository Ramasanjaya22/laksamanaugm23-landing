import React from "react";
import "../styles/globals.css";

const Dropdown = ({ setDropdown }) => {
  const handleToggle = () => {
    setDropdown(prevState => !prevState);
  };

  return (
    <ul className={'h-full genty-demo text-4xl grid grid-rows-5 backdrop-blur-xl p-8'}>
      <li className={'hover:translate-x-7 hover:text-[#96FF64] transition-all'}><a href="#berita" onClick={handleToggle}>Berita</a></li>
      <li className={'hover:translate-x-7 hover:text-[#96FF64] transition-all'}><a href="#timeline" onClick={handleToggle}>Timeline</a></li>
      <li className={'hover:translate-x-7 hover:text-[#96FF64] transition-all'}><a href="#infolomba" onClick={handleToggle}>Lomba</a></li>
      <li className={'hover:translate-x-7 hover:text-[#96FF64] transition-all'}><a href="#FAQ" onClick={handleToggle}>FAQ</a></li>
      <li className={'hover:translate-x-7 hover:text-[#96FF64] transition-all'}><a href="#kontak" onClick={handleToggle}>Kontak</a></li>
    </ul>
  );
}

export default Dropdown;
