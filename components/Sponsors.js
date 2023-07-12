"use client";
import Image from "next/image";
import React from "react";

function Sponsors() {
  return (
    <div className="py-16">
      <div className="rounded-md pt-8 md:mx-auto flex items-center justify-center">
        {/* sponsor */}
        {/* <div className="w-11/12 sm:w-2/3 mx-auto mb-10">
          <h1 className="focus:outline-none xl:text-4xl gravitas-one text-3xl text-center text-gray-800 font-extrabold pt-4">
            OUR SUPPORTED SPONSOR
          </h1>
        </div> */}
        {/* <div className="sm:py-6 px-8 sm:24 flex flex-wrap items-center">
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
        </div> */}
          <Image 
            src="/calling-out-text.png"
            width={1300}
            height={1300}
            className="md:w-1/2 w-3/4 z-10"
          />
      </div>
      <div className="flex items-center justify-center -z-10">
        <div className="pink-bar px-3 w-fit -mt-5 helvetica font-bold italic relative">
          <p className={'z-20 relative md:text-7xl text-2xl text-purple-600 text-center'}>Sponsorship & Media Partner</p>
        </div>
      </div>
      <div className="flex">
        <div className="m-5">
          <p className="rounded-full text-xl bg-white helvetica text-center border-black border-2">CP Sponsorship</p>
          <p className="rounded-full text-xl bg-lime-400 text-center border-black border-2 p-1">+6285726817481 (Ikmal)</p>
        </div>
        <div className="ml-auto m-5">
          <p className="rounded-full text-xl bg-white helvetica text-center border-black border-2">CP Media Partner</p>
          <p className="rounded-full text-xl bg-lime-400 text-center border-black border-2 p-1">+6287891472493 (Endita)</p>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
