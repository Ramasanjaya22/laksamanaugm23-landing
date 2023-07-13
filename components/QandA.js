"use client";
import React from "react";
import { TitleText } from "./CustomTexts";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto bg-lime-300 p-2 rounded-md ${
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
        `flex w-full border-[6px] text-md px-6 py-4 bg-[#294da3] text-white ${isEnter}`,
      style: { borderStyle: "inset" },
    }}
    contentProps={{
      className:
        "transition-height duration-200 text-md ease-out bg-[#D9D9D9] border-[6px] border-t-[0px]",
      style: { borderStyle: "inset" },
    }}
    panelProps={{ className: "p-4" }}
  />
);

function QandA() {
  return (
    <div id="FAQ" className="flex justify-center items-center">
      <div className="w-full md:w-full">
        <TitleText
          title={<>Frequently Asked Questions</>}
          textStyles="text-center"
        />

        <div className="w-full mx-auto justify-center items-center flex helvetica">
          <Accordion transition transitionTimeout={200}>
            {/* <AccordionItem header="Apa itu LAKSAMANA UGM?" initialEntered>
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
            </AccordionItem> */}
            <AccordionItem header="Apakah boleh mengikuti mata lomba lebih dari satu?">
              Boleh, maksimal 2 mata lomba.
            </AccordionItem>
            <AccordionItem header="Apakah boleh menggunakan file karya yang pernah dilombakan sebelumnya">
              <li>
                Untuk lomba Photo Essay, Dilarang menggunakan file karya yang
                pernah dilombakan sebelumnya.
              </li>
              <li>
                Untuk lomba Film Pendek diperbolehkan selama memenuhi syarat
                format dan tema dalam Lomba Film Pendek Laksamana serta tidak
                melanggar hak cipta karya tersebut.
              </li>
              <li>
                Untuk lomba Iklan dan Speech tidak boleh, karya bersifat
                orisinil dan belum pernah dipublikasikan atau dilombakan.
              </li>
            </AccordionItem>
            <AccordionItem header="Ada berapa pemenang di mata lomba iklan?">
              Terdapat 3 finalis yang akan menjadi juara 1, 2, dan 3.
            </AccordionItem>
            <AccordionItem header="Kapan pembayaran fee wajib dilakukan?">
              Saat melakukan SUBMISSION karya.
            </AccordionItem>
            <AccordionItem header="Apakah saat awarding pemenang wajib datang? akomodasi ditanggung oleh siapa?">
              Disarankan untuk datang. Pihak Ilmu Komunikasi UGM TIDAK
              menanggung akomodasi para finalis yang datang dari luar kota
              Yogyakarta.
            </AccordionItem>
            <AccordionItem header="Untuk lomba Photo Essay, Apakah harus menggunakan kamera profesional?">
              Tidak ada batasan device yang digunakan.
            </AccordionItem>
            <AccordionItem header="Untuk lomba Film Pendek, apakah 1 tim boleh terdiri dari berbeda SMA?">
              Boleh, selama masing-masing anggota memenuhi persyaratan lainnya.
            </AccordionItem>
            <AccordionItem header="Untuk lomba Film Pendek, apakah anggota sebuah tim boleh lebih dari 10 siswa? Bagaimana jika keseluruhan kru film melebihi 10 orang?">
              Untuk proses submission maksimal 10 orang, akan tetapi untuk
              selama produksi video total kru dan tim inti boleh lebih dari 10
              orang.
            </AccordionItem>
            <AccordionItem header="Untuk lomba Podcast, apakah cover di dalam podcast itu wajib?">
              Iya, cover menjadi salah satu aspek penilaian juri.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
export default QandA;
