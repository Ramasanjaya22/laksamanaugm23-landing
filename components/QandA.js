'use client'
import React, { useState } from "react";
import { TitleText } from "./CustomTexts";

function QandA() {
  return (
    <div id="FAQ" className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-10/12 md:w-full mx-8">
      <TitleText
          title={
            <>
              FAQ
            </>
          }
          textStyles="text-center"
        />
        <ul className="flex flex-col items-center justify-center">
          <Accordion
            title="Apa itu LAKSAMANA UGM?"
            content="Laksamana UGM adalah acara tahunan yang diselenggarakan oleh Korps Mahasiswa Komunikasi (KOMAKO) UGM. Acara ini terdiri dari 4 lomba yang akan disajikan oleh 4 badan semi otonom (BSO) Departemen Ilmu Komunikasi."
          />
          <Accordion
            title='Apa makna dari tema besar Laksamana UGM "Freedom of Expression, Breaking the Stereotypes"?'
            content="Tema ini berangkat dari isu stereotip yang terbangun pada masyarakat tertentu. Munculnya berbagai stereotip berdampak pada kebebasan individu dalam mengekspresikan diri melalui media sosial."
          />
          <Accordion
            title="Apa saja lomba yang diselenggarakan Laksamana UGM?"
            content="Ada 5 lomba yang diadakan dalam Laksamana UGM 2023 yaitu lomba Photo Essay, Film Pendek, Speech, Iklan, dan Podcast"
          />
          <Accordion
            title="Bagaimana cara mendaftar lomba-lomba yang tersedia?"
            content="Terdapat Contact Person yang tersedia disetiap seksi keterangan lomba. Untuk informasi pendaftaran bisa menghubungi nomor yang ada atau langsung saja klik tombol daftar pada link di masing-masing bagan lomba"
          />
        </ul>
      </div>
    </div>
  );
}

export default QandA;

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleRotate = () => {
    return isOpen ? "rotate-180" : "";
  };

  const handleToggle = () => {
    return isOpen ? "max-h-96" : "max-h-0";
  };

  return (
    <li className="bg-white bg-opacity-50 backdrop-blur-lg my-2 rounded-lg w-10/12 justify-center items-center shadow-sm">
      <h2
        onClick={handleClick}
        className="flex flex-row justify-between items-center font-black text-primary-color p-3 cursor-pointer"
      >
        <span>{title}</span>
        <svg
          className={`fill-current text-sky-500 h-6 w-6 transform transition-transform duration-500 ${handleRotate()}`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        className={`border-l-8 border-lime-500 overflow-hidden duration-500 transition-all ${handleToggle()}`}
      >
        <p className="p-4 text-primary-color font-medium">{content}</p>
      </div>
    </li>
  );
};
