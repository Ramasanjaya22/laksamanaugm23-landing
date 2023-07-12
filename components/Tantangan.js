import Image from "next/image";
import React from "react";

function Tantangan() {
  return (
    <div>
      <div className="flex">
        <div className="flex justify-center items-center h-screen overflow-hidden">
          <div className="md:w-[85%] w-screen flex flex-col justify-center items-center text-[#26223D]">
            <Image
              src={"/tantangan_laksamana.svg"}
              width={1000}
              height={1000}
              alt="tantangan laksamana"
            />

            <p className="text-sm text-[#021F4A] md:text-2xl mb-8 mx-8 text-center px-4 W95FA">
              Lomba Kreasi Siswa SMA se-Nusantara
            </p>
            <p className="p-1 w-3/4 md:text-xl text-justify text-md md:text-center lg:text-center helvetica mt-6">
              Laksamana UGM merupakan sebuah rangkaian acara yang dilaksanakan
              oleh Korps Mahasiswa Komunikasi UGM. Laksamana digelar untuk
              menyalurkan ide dan mengembangkan potensi siswa siswi SMA/
              Sederajat di seluruh Indonesia dalam bidang Ilmu Komunikasi
              melalui berbagai bentuk kompetisi, baik secara lisan maupun
              tertulis.
            </p>
            <div className=".gradient-03 w-full h-full" />
            <img
              src="Sticker2.png"
              alt="stiker"
              className="absolute right-[10%] top-[10%] md:w-[12%] lowfpsleft overflow-hidden w-28"
            />
            <img
              src="Sticker1.png"
              alt="sticker2"
              className="absolute md:right-[5%] bottom-[-12%] md:w-[20%] lowframe overflow-hidden w-[35%] right-[10%]"
            />

            <p className="text-lg text-pink-500 md:text-3xl text-md mt-4 mx-8 text-center px-4 genty-demo">
              Freedom of Expressions: Breaking the Stereotypes
            </p>
            <img
              src="cursor.png"
              alt="cursor"
              className="w-24 animate-spin-slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tantangan;
