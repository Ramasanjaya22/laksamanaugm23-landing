import Image from "next/image";
import Link from "next/link";
import React from "react";

function Tantangan() {
  return (
    <div className="flex">
      <div className="flex justify-center items-center">
        <div className="w-screen flex flex-col justify-center items-center text-[#26223D]">
          <Image
            src={"/tantangan_laksamana.svg"}
            width={1000}
            height={1000}
            className="text-center my-8 px-4 w-full lg:w-3/4"
            alt="tantangan laksamana"
          />
          <div className="flex flex-col justify-center items-center">
            <Link href={"#matalomba"}>
              {/* <button class="bg-gradient-to-b from-rose-50 to-yellow-500 hover:to-yellow-400 rounded-[32px] mx-8 helvetica text-md lg:text-3xl text-lime-500 font-bold py-6 lg:py-6 px-10 lg:px-20">
                  Daftarkan Dirimu Sekarang!
                </button> */}
              <Image
                src={"/daftarkan-diri.png"}
                alt="daftarkan diri"
                width={1000}
                height={1000}
                className="w-64 lg:w-96 snap-animation"
              />
            </Link>
          </div>

          <Image
            src={"/siaplaksanakan.png"}
            alt="siap laksanakan"
            width={1000}
            height={1000}
            className="w-80 mt-8"
          />
        </div>
      </div>
    </div>
  );
}

export default Tantangan;
