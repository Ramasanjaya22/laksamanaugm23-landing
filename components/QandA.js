"use client";
import React from "react";
import { TitleText } from "./CustomTexts";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

// const Accordion = () => {
//   return (
//     <li
//       className="bg-white my-2 w-10/12 justify-center items-center border-[6px]"
//       style={{ borderStyle: "inset" }}
//     >
//       <h2
//         onClick={handleClick}
//         className="flex flex-row justify-between items-center font-black text-primary-color px-1 cursor-pointer transition-colors"
//       >
//         <span className="W95FA text-lg">{title}</span>
//         <div
//           className="bg-[#D9D9D9] h-[20px] border-4 option"
//           style={{ borderStyle: "outset" }}
//         >
//           <img src="arrowdown.png" width={15} height={15} />
//         </div>
//       </h2>
//       <div
//         className={`border-l-4 overflow-hidden duration-500 transition-all border-[#A3A3A3] ${handleToggle()} ${
//           isOpen ? "animate-expand" : ""
//         }`}
//       >
//         {content}
//       </div>
//     </li>
//   );
// };

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto ${
            isEnter && "rotate-180"
          }`}
          src={"/chevron-down.svg"}
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full border-[6px] text-2xl px-2 bg-white ${
          isEnter
        }`, 
        style: { borderStyle: "inset" }
    }}
    contentProps={{
      className: "transition-height duration-200 text-xl ease-out bg-[#D9D9D9] border-[6px] border-t-[0px]",
      style: { borderStyle: "inset" }
    }}
    panelProps={{ className: "p-4" }}
  />
);

function QandA() {
  return (
    <div id="FAQ" className="flex justify-center items-center h-screen">
      <div className="w-full md:w-full mx-8 ">
        <TitleText
          title={<>Frequently Asked Questions</>}
          textStyles="text-center"
        />

        <div className="mx-2 my-4 border-t W95FA">
          <Accordion transition transitionTimeout={200}>
            <AccordionItem header="Apa itu LAKSAMANA UGM?" initialEntered>
              Laksamana UGM adalah acara tahunan yang diselenggarakan oleh Korps
              Mahasiswa Komunikasi (KOMAKO) UGM. Acara ini terdiri dari 5 lomba
              yang akan disajikan oleh 5 badan semi otonom (BSO) Departemen Ilmu
              Komunikasi.
            </AccordionItem>

            <AccordionItem header='Apa makna dari tema besar Laksamana UGM "Freedom of Expression, Breaking the Stereotypes"?'>
              Tema ini berangkat dari isu stereotip yang terbangun pada
              masyarakat tertentu. Munculnya berbagai stereotip berdampak pada
              kebebasan individu dalam mengekspresikan diri melalui media
              sosial.
            </AccordionItem>

            <AccordionItem header="Apa saja lomba yang diselenggarakan Laksamana UGM?">
              Ada 5 lomba yang diadakan dalam Laksamana UGM 2023 yaitu lomba
              Photo Essay, Film Pendek, Speech, Iklan, dan Podcast
            </AccordionItem>
            <AccordionItem header="Bagaimana cara mendaftar lomba-lomba yang tersedia?">
              Terdapat Contact Person yang tersedia disetiap seksi keterangan
              lomba. Untuk informasi pendaftaran bisa menghubungi nomor yang ada
              atau langsung saja klik tombol daftar pada link di masing-masing
              bagan lomba
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
export default QandA;
