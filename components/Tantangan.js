import Image from "next/image";
import React from "react";

function Tantangan() {
  return (
    <div>
      <div className="flex">
        <div className="flex justify-center items-center h-screen overflow-hidden">
          <div className="md:full w-screen flex flex-col justify-center items-center text-[#26223D]">
            <Image
              src={"/tantangan_laksamana.svg"}
              width={1000}
              height={1000}
              className="text-center mb-8 px-4"
              alt="tantangan laksamana"
            />
            <div className="flex flex-col justify-center items-center">
              <button class="bg-gradient-to-b from-rose-50 to-yellow-500 rounded-[32px] mx-8 helvetica text-lg lg:text-3xl text-lime-500 font-bold lg:py-7 px-10 lg:px-24">
                Daftarkan Dirimu Sekarang!
              </button>
            </div>
            <Image
              src={'/siaplaksanakan.png'}
              alt="siap laksanakan"
              width={1000}
              height={1000}
              className="w-96 mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tantangan;
