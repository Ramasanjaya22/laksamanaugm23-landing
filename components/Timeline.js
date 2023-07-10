"use client";

import styles from "@/styles";

const Timeline = () => (
  <section id="timeline" className={`${styles.paddings} h-full`}>
    <div
      className={"m-3 border-8 h-full bg-[#D9D9D9]"}
      style={{ borderStyle: "outset" }}
    >
      <div
        className={
          "w-full bg-[#D9D9D9] p-2 h-[10%] border-b-4 border-[#A3A3A3]"
        }
      >
        <div className={"w-full flex bg-[#00017F] p-1 h-[10%]"}>
          <p className={"text-white text-3xl px-4 W95FA"}>Timeline</p>
          <div
            className={
              "text-xs bg-[#D9D9D9] h-6 w-6 text-center border-4 ml-auto pixeloid-sans m-1"
            }
            style={{ borderStyle: "outset" }}
          >
            X
          </div>
        </div>
      </div>
      <div className={"h-[90%] p-8 m-auto"}>
        <ol className="items-center sm:flex">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-600 h-1"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900">
                24 Juli 2023
              </h3>
              <p className="text-base font-normal text-gray-500">
                Pembukaan Pendaftaran & Pengunggahan Karya
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-600 h-1"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900">
                20 Agustus 2023
              </h3>
              <p className="text-base font-normal text-gray-500">
                Batas Akhir Pendaftaran & Pengunggahan Karya
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-600 h-1"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900">
                21-31 Agustus 2023
              </h3>
              <p className="text-base font-normal text-gray-500">
                Penilaian Hasil Karya
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0"></div>
              <div className="hidden sm:flex w-full bg-gray-600 h-1"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900">
                10 September 2023
              </h3>
              <p className="text-base font-normal text-gray-500">
                Pengumuman Finalis
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900">
                16 September 2023
              </h3>
              <p className="text-base font-normal text-gray-500">Awarding</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
);

export default Timeline;
