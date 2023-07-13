"use client";

import styles from "@/styles";

const Timeline = () => (
  <section id="timeline" className={`${styles.paddings} flex justify-end items-end mt-24 h-full`}>
    <div
      className={"m-5 border-8 h-full bg-[#D9D9D9]"}
      style={{ borderStyle: "outset" }}
    >
      <div
        className={
          "w-full bg-[#D9D9D9] p-2 h-[10%] border-b-4 border-[#A3A3A3]"
        }
      >
        <div className={"w-full flex bg-[#c0f97f] p-1 h-[10%]"}>
          <p className={"text-[#3242d4] sm:text-3xl text-2xl px-4 W95FA"}>
            Timeline
          </p>
          <div
            className={
              "text-xs bg-[#D9D9D9] max-h-6 max-w-6 px-1 text-center border-4 ml-auto pixeloid-sans m-1"
            }
            style={{ borderStyle: "outset" }}
          >
            X
          </div>
        </div>
      </div>
      <div className={"h-full px-8 mx-auto"}>
        <ol className="items-center sm:flex ">
          <li className="relative mb-6 sm:mb-1">
            <div className="flex items-center mt-4">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-600 h-1"></div>
            </div>
            <div className="mt-2 sm:pr-8">
              <h3 className="text-sm lg:text-xs helvetica font-bold text-blue-700">
                24 Juli 2023
              </h3>
              <p className="text-base lg:text-sm font-normal text-gray-500">
                Pembukaan Pendaftaran & Pengunggahan Karya
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-600 h-1"></div>
            </div>
            <div className="mt-2 lg:pr-16 ">
              <h3 className="text-sm lg:text-xs helvetica font-bold text-blue-700">
                20 Agustus 2023
              </h3>
              <p className="lg:text-sm text-base font-normal text-gray-500">
                Batas Akhir Pendaftaran & Pengunggahan Karya
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-600 h-1"></div>
            </div>
            <div className="mt-2 lg:pr-16">
              <h3 className="text-sm lg:text-xs helvetica font-bold text-blue-700">
                21-31 Agustus 2023
              </h3>
              <p className="lg:text-sm text-base font-normal text-gray-500">
                Penilaian Hasil Karya
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-600 h-1"></div>
            </div>
            <div className="mt-2 sm:pr-12">
              <h3 className="text-sm lg:text-xs helvetica font-bold text-blue-700">
                10 September 2023
              </h3>
              <p className="lg:text-sm text-base font-normal text-gray-500">
                Pengumuman Finalis
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0"></div>
            </div>
            <div className="mt-2 sm:pr-1">
              <h3 className="text-sm lg:text-xs helvetica font-bold text-blue-700">
                16 September 2023
              </h3>
              <p className="lg:text-sm text-base font-normal text-gray-500">
                Awarding
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
);

export default Timeline;
