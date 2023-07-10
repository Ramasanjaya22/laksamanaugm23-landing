import Link from "next/link";
import React from "react";

function AboutUs() {
  return (
    <div
      className={"m-2 border-8 h-full w-10/12 mx-auto bg-[#D9D9D9]"}
      style={{ borderStyle: "outset" }}
    >
      <div
        className={
          "w-full bg-[#D9D9D9] p-2 h-[10%] border-b-4 border-[#A3A3A3]"
        }
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
      <div className="h-[90%] p-8 m-auto">
        <p className="text-justify text-pink-600 genty-demo animate-pulse text-lg">
          ~ Freedom of Expressions: Breaking the Stereotype
        </p>
        <p className="font-normal text-justify text-primary-color W95FA mb-3 text-md">
          Tema Laksamana UGM 2023 berangkat dari banyaknya isu stereotip yang
          terbangun di masyarakat terhadap kelompok tertentu. Munculnya berbagai
          stereotip tersebut menimbulkan dampak-dampak yang berkaitan dengan
          kebebasan individu dalam mengekspresikan diri. Konteks kebebasan
          berekspresi tersebut kami fokuskan pada lingkup media sosial,
          mengingat jumlah penggunanya yang semakin bertambah dari waktu ke
          waktu. Hal ini kemudian membuat banyak orang menjadi sulit untuk
          mengekspresikan diri secara optimal karena merasakan adanya
          keterbatasan dalam menggunakan media sosial. Hal tersebut
          memperlihatkan kuatnya dampak stereotip yang tetap melekat pada diri
          individu.
        </p>
        <p className="font-normal text-justify text-primary-color W95FA mb-3 text-md">
          Oleh karena itu, Laksamana 2023 mengajak siswa/i SMA/Sederajat untuk
          berkontribusi dalam menghasilkan suatu karya yang menunjukkan
          kreativitas untuk memperlihatkan dan membantu memberikan inspirasi
          kepada masyarakat terkait gerakan melawan stereotip di lingkungan
          masyarakat. Para siswa juga ditantang untuk berkreasi dengan
          kreativitas masing-masing dalam memberikan suatu karya mengenai
          kebebasan berekspresi seorang individu dan melawan stereotip yang ada,
          baik dalam konteks kelompok suku, gender, ras, agama, dan sebagainya
          melalui medianya masing-masing (kehumasan, periklanan, podcast, film,
          dan fotografi).
        </p>
        <p className="font-bold text-justify text-primary-color W95FA mb-3 text-lg">
          Jadilah bagian dari gerakan kebebasan berekspresi. Daftar sekarang
          untuk Lomba Laksamana UGM 2023!
        </p>
      </div>
      <div>
        <div className="text-xl W95FA font-normal text-blue-900 text-center option border-4 border-[#D9D9D9] py-1">
          <Link href="#infolomba">Daftarkan Dirimu Sekarang!</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
