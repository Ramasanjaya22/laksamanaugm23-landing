"use client";
import React, { useState } from "react";
import { TitleText } from "./CustomTexts";

let activeDropdown = 0;

const dropCheck = () => {
  if(activeDropdown !== {id}){
    setIsOpen(false);
  }
}

function QandA() {
  return (
    <div id="FAQ" className="flex justify-center items-center h-screen">
      <div className="w-full md:w-full mx-8 ">
        <TitleText title={<>Frequently Asked Questions</>} textStyles="text-center text-white helvetica" />
        <ul className="flex flex-col items-center justify-center">
          <Accordion
            id="1"
            title="Apa itu LAKSAMANA UGM?"
            content="Laksamana UGM adalah acara tahunan yang diselenggarakan oleh Korps Mahasiswa Komunikasi (KOMAKO) UGM. Acara ini terdiri dari 4 lomba yang akan disajikan oleh 4 badan semi otonom (BSO) Departemen Ilmu Komunikasi."
          />
          <Accordion
            id="2"
            title='Apa makna dari tema besar Laksamana UGM "Freedom of Expression, Breaking the Stereotypes"?'
            content="Tema ini berangkat dari isu stereotip yang terbangun pada masyarakat tertentu. Munculnya berbagai stereotip berdampak pada kebebasan individu dalam mengekspresikan diri melalui media sosial."
          />
          <Accordion
            id="3"
            title="Apa saja lomba yang diselenggarakan Laksamana UGM?"
            content="Ada 5 lomba yang diadakan dalam Laksamana UGM 2023 yaitu lomba Photo Essay, Film Pendek, Speech, Iklan, dan Podcast"
          />
          <Accordion
            id="4"
            title="Bagaimana cara mendaftar lomba-lomba yang tersedia?"
            content="Terdapat Contact Person yang tersedia disetiap seksi keterangan lomba. Untuk informasi pendaftaran bisa menghubungi nomor yang ada atau langsung saja klik tombol daftar pada link di masing-masing bagan lomba"
          />
        </ul>
      </div>
    </div>
  );
}

export default QandA;

const Accordion = ({ id, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    activeDropdown = {id};
  };

  const handleRotate = () => {
    return isOpen ? "rotate-180" : "";
  };

  const handleToggle = () => {
    return isOpen ? "max-h-86" : "max-h-0";
  };

  return (
    <li className="bg-white my-2 w-10/12 justify-center items-center border-[6px]" style={{ borderStyle: 'inset' }} id={{id}}>
      <h2
        onClick={handleClick}
        className="flex flex-row justify-between items-center font-black text-primary-color px-1 cursor-pointer transition-colors"
      >
        <span className="W95FA text-lg">{title}</span>
        <div className="bg-[#D9D9D9] h-[20px] border-4 option" style={{ borderStyle: 'outset' }}>
          <img
            src="arrowdown.png"
            width={15}
            height={15}
          />
        </div>
      </h2>
      <div
        className={`border-l-4 overflow-hidden duration-500 transition-all  border-[#A3A3A3] ${handleToggle()} ${
          isOpen ? "animate-expand" : ""
        }`}
      >
        <p className="p-4 text-primary-color font-medium">{content}</p>
      </div>
    </li>
  );
};

