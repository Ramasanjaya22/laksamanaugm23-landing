"use client";
import Image from "next/image";
import React from "react";

function Sponsors() {
  return (
    <div id="sponsor" className="py-16">
      <div className="rounded-md mt-16 md:mx-auto">
        <div className="w-11/12 sm:w-2/3 mx-auto mb-10">
          <h1 className="focus:outline-none xl:text-7xl gravitas-one text-5xl text-center text-primary-blue genty-demo font-extrabold pt-4">
            Our Sponsor
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center gap-4">
        <div className="sm:py-3 w-full lg:w-96 px-8 sm:24 flex flex-col justify-center items-center transform hover:scale-90 transition duration-300 drop-shadow-xl">
            <Image
              className="focus:outline-none w-[400px]"
              src="/Yamie Panda.png"
              width={1000}
              height={1000}
              alt="Yamie Panda"
              role="img"
            />
          </div>
          <div className="sm:py-3 w-full lg:w-96 px-8 sm:24 flex flex-col justify-center items-center transform hover:scale-90 transition duration-300 drop-shadow-xl">
            <Image
              className="focus:outline-none w-[400px]"
              src="/Si Geboy.png"
              width={1000}
              height={1000}
              alt="si Geboy"
              role="img"
            />
          </div>
          <div className="sm:py-3 w-full lg:w-96 px-8 sm:24 flex flex-col justify-center items-center transform hover:scale-90 transition duration-300 drop-shadow-xl">
          <Image
              className="focus:outline-none w-[400px]"
              src="/sate-ratu.png"
              width={1000}
              height={1000}
              alt="Sate Ratu"
              role="img"
            />
          </div>
          <div className="sm:py-3 w-full lg:w-96 px-8 sm:24 flex flex-col justify-center items-center transform hover:scale-90 transition duration-300 drop-shadow-xl">
          <Image
              className="focus:outline-none w-[400px]"
              src="/Logo-Wardah.jpg"
              width={1000}
              height={1000}
              alt="Wardah"
              role="img"
            />
          </div>
          <div className="sm:py-3 w-full lg:w-96 px-8 sm:24 flex flex-col justify-center items-center transform hover:scale-90 transition duration-300 drop-shadow-xl">
          <Image
              className="focus:outline-none w-[400px]"
              src="/logo-bata.png"
              width={1000}
              height={1000}
              alt="sponsor bata"
              role="img"
            />
          </div>
          <div className="sm:py-3 w-full lg:w-96 px-8 sm:24 flex flex-col justify-center items-center transform hover:scale-90 transition duration-300 drop-shadow-xl">
          <Image
              className="focus:outline-none w-[400px]"
              src="/logo-waroeng.png"
              width={1000}
              height={1000}
              alt="sponsor waroeng"
              role="img"
            />
          </div>
          <div className="sm:py-3 w-full lg:w-96 px-8 sm:24 flex flex-col justify-center items-center transform hover:scale-90 transition duration-300 drop-shadow-xl">
          <Image
              className="focus:outline-none w-[400px]"
              src="/logo-auto-royal.png"
              width={1000}
              height={1000}
              alt="sponsor auto royal"
              role="img"
            />
          </div>
        </div>
        
      </div>
      <div className="w-2/3 m-auto">
        <div className="rounded-md mt-4 md:mx-auto flex items-center justify-center">
          <Image 
            src="/calling-out-text.png"
            width={1300}
            height={1300}
          className="md:w-1/2 w-3/4 z-10"
          alt="calling out sponsor"
          />
        </div>
        <div className="flex items-center justify-center -z-10">
          <div className="pink-bar px-3 w-fit -mt-5 helvetica font-bold italic relative">
            <p className={'z-20 relative md:text-5xl text-2xl text-purple-600 text-center'}>Sponsorship & Media Partner</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-fit">
            <p className="rounded-full md:text-xl text-md sm:text-sm bg-white helvetica text-center border-black border-2">CP Sponsorship</p>
            <p className="rounded-full md:text-xl text-md sm:text-sm bg-lime-400 text-center border-black border-2 p-1">+6285726817481 (Ikmal)</p>
          </div>
          <div className="ml-auto w-fit">
            <p className="rounded-full md:text-xl text-md sm:text-sm bg-white helvetica text-center border-black border-2">CP Media Partner</p>
            <p className="rounded-full md:text-xl text-md sm:text-sm bg-lime-400 text-center border-black border-2 p-1">+6287891472493 (Endita)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
