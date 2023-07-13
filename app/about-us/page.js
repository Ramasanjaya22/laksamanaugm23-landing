import Link from "next/link";
import React from "react";
import { Gallery } from "@/components";

function AboutUs() {
  return (
    <div>
      <div
        className={
          "m-2 border-8 h-full w-4/5 mx-auto items-center bg-[#D9D9D9]"
        }
        style={{ borderStyle: "outset" }}
      >
        <div
          className={"w-full bg-[#D9D9D9] h-[10%] border-b-4 border-[#A3A3A3]"}
        >
          <div className={"w-full flex bg-[#00017F] p-2 h-[10%]"}>
            <p className={"text-white text-xl text-center px-4 pixeloid-sans"}>
              ABOUT LAKSAMANA UGM 2023
            </p>
            <div
              className={
                "text-md bg-[#D9D9D9] max-h-8 max-w-8 px-1 text-center border-4 ml-auto pixeloid-sans"
              }
              style={{ borderStyle: "outset" }}
            >
              X
            </div>
          </div>
        </div>
        <div className="h-[80%] p-8 m-auto">
          <p className="text-center text-pink-600 genty-demo animate-pulse text-xl">
            ~ Freedom of Expressions: Breaking the Stereotype
          </p>
          <p className="font-normal text-justify lg:text-center text-primary-color W95FA mb-3 text-sm lg:text-base">
            Tema Laksamana UGM 2023 berangkat dari banyaknya isu stereotip yang
            terbangun di masyarakat terhadap kelompok tertentu. Munculnya
            berbagai stereotip tersebut menimbulkan dampak-dampak yang berkaitan
            dengan kebebasan individu dalam mengekspresikan diri.
          </p>
          <p className="font-normal text-justify lg:text-center text-primary-color W95FA mb-3 text-sm lg:text-base">
            Konteks kebebasan berekspresi tersebut kami fokuskan pada lingkup
            media sosial, mengingat jumlah penggunanya yang semakin bertambah
            dari waktu ke waktu. Hal ini kemudian membuat banyak orang menjadi
            sulit untuk mengekspresikan diri secara optimal karena merasakan
            adanya keterbatasan dalam menggunakan media sosial. Hal tersebut
            memperlihatkan kuatnya dampak stereotip yang tetap melekat pada diri
            individu.
          </p>
          <p className="font-normal text-justify lg:text-center text-primary-color W95FA mb-3 text-sm lg:text-base">
            Oleh karena itu, Laksamana 2023 mengajak siswa/i SMA/Sederajat untuk
            berkontribusi dalam menghasilkan suatu karya yang menunjukkan
            kreativitas untuk memperlihatkan dan membantu memberikan inspirasi
            kepada masyarakat terkait gerakan melawan stereotip di lingkungan
            masyarakat.
          </p>
          <p className="font-normal text-justify lg:text-center text-primary-color W95FA mb-3 text-sm lg:text-base">
            Para siswa juga ditantang untuk berkreasi dengan kreativitas
            masing-masing dalam memberikan suatu karya mengenai kebebasan
            berekspresi seorang individu dan melawan stereotip yang ada, baik
            dalam konteks kelompok suku, gender, ras, agama, dan sebagainya
            melalui medianya masing-masing (kehumasan, periklanan, podcast,
            film, dan fotografi).
          </p>
          <p className="font-bold text-center text-primary-color W95FA text-lg">
            Jadilah bagian dari gerakan kebebasan berekspresi. Daftar sekarang
            untuk Lomba Laksamana UGM 2023 !!
          </p>
        </div>
        {/* <img
            src="Sticker6.png"
            alt="stiker"
            className="z-50 absolute right-[3%] top-[65%] md:w-[12%] lowfpsleft overflow-hidden w-28"
          /> */}
        <div>
          <Link href="#matalomba">
            <div className="text-2xl genty-demo font-normal text-blue-900 py-2 text-center option border-2 border-[#D9D9D9] hover:bg-lime-400 transition-all ease-in-out">
              <div>Daftarkan Dirimu Sekarang!</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="z-0">
        <Gallery />
      </div>
    </div>
  );
}

export default AboutUs;
