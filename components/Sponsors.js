"use client";
import Image from "next/image";
import React from "react";

function Sponsors() {
  return (
    <div className="py-16">
      <div className="sm:max-w-6xl rounded-md pt-8 mx-4 sm:mx-8 md:mx-auto">
        <div className="w-11/12 sm:w-2/3 mx-auto mb-10">
          <h1 className="focus:outline-none xl:text-4xl gravitas-one text-3xl text-center text-gray-800 font-extrabold pt-4">
            OUR SUPPORTED SPONSOR
          </h1>
        </div>
        <div className="sm:py-6 px-8 sm:24 flex flex-wrap items-center">
          <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
            <Image
              className="focus:outline-none w-12 sm:w-16"
              src="/ikon-lomba.png"
              width={100}
              height={100}
              alt="Adidas"
              role="img"
            />
          </div>
          <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
            <Image
              className="focus:outline-none w-12 sm:w-16"
              src="/ikon-lomba.png"
              width={100}
              height={100}
              alt="Adidas"
              role="img"
            />
          </div>
          <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
            <Image
              className="focus:outline-none w-12 sm:w-16"
              src="/ikon-lomba.png"
              width={100}
              height={100}
              alt="Adidas"
              role="img"
            />
          </div>
          <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
            <Image
              className="focus:outline-none w-12 sm:w-16"
              src="/ikon-lomba.png"
              width={100}
              height={100}
              alt="Adidas"
              role="img"
            />
          </div>
          <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
            <Image
              className="focus:outline-none w-12 sm:w-16"
              src="/ikon-lomba.png"
              width={100}
              height={100}
              alt="Adidas"
              role="img"
            />
          </div>
          <div className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
            <Image
              className="focus:outline-none w-12 sm:w-16"
              src="/ikon-lomba.png"
              width={100}
              height={100}
              alt="Adidas"
              role="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
