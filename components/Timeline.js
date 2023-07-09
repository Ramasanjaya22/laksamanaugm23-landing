"use client";

import styles from "@/styles";

const Timeline = () => (
  <section
    id="timeline"
    className={`${styles.paddings} sticky z-10 border h-[2500px]`}
  >
    <div className=" border-r-4 border-solid h-[2500px] w-1/2 border-slate-300 float-left">
      <div className="h-[15%] mb-24">
        <div className="sticky top-1/2" id="node1">
          <div className="bg-green-400 h-[20px] w-[20px] rounded-full float-right absolute -right-3 top-6"></div>
          <p className="float-right tracking-wide md:text-4xl text-2xl mx-5 top-full text-right genty-demo text-pink-600">
            24 Juli<br></br> 2023
          </p>
        </div>
      </div>
      <div className="h-[15%] mb-24">
        <div className="sticky top-1/2" id="node2">
          <div className="bg-green-400 h-[20px] w-[20px] rounded-full float-right absolute -right-3 top-6"></div>
          <p className="float-right tracking-wide md:text-4xl text-2xl mx-5 top-full genty-demo text-right text-pink-600">
            20 Agustus<br></br> 2023
          </p>
        </div>
      </div>
      <div className="h-[15%] mb-24">
        <div className="sticky top-1/2" id="node3">
          <div className="bg-green-400 h-[20px] w-[20px] rounded-full float-right absolute -right-3 top-6"></div>
          <p className="float-right tracking-wide md:text-4xl text-2xl mx-5 top-full genty-demo text-right text-pink-600">
            21-31 Agustus<br></br> 2023
          </p>
        </div>
      </div>
      <div className="h-[15%] mb-24">
        <div className="sticky top-1/2" id="node4">
          <div className="bg-green-400 h-[20px] w-[20px] rounded-full float-right absolute -right-3 top-6"></div>
          <p className="float-right tracking-wide md:text-4xl text-2xl mx-5 top-full genty-demo text-right text-pink-600">
            10 September<br></br> 2023
          </p>
        </div>
      </div>
      <div className="h-[15%]">
        <div className="sticky top-1/2" id="node5">
          <div className="bg-green-400 h-[20px] w-[20px] rounded-full float-right absolute -right-3 top-6"></div>
          <p className="float-right tracking-wide md:text-4xl text-2xl mx-5 top-full genty-demo text-right text-pink-600">
            16 September<br></br> 2023
          </p>
        </div>
      </div>
    </div>
    <div className="w-[50%] h-[2500px] float-right">
      <ul className="h-[15%] font-semibold mb-24 md:text-xl text-lg flex items-center text-primary-color helvetica p-6">
        <li>📅🔓Pembukaan Pendaftaran & Pengunggahan Karya </li>
      </ul>
      <ul className="h-[15%] font-semibold mb-24 md:text-xl text-lg flex items-center text-primary-color helvetica p-6">
        <li>⏰🔒Batas Akhir Pendaftaran & Pengunggahan Karya</li>
      </ul>
      <ul className="h-[15%] font-semibold mb-24 md:text-xl text-lg flex items-center text-primary-color helvetica p-6">
        <li>📝🏆Penilaian Hasil Karya</li>
      </ul>
      <ul className="h-[15%] font-semibold mb-24 md:text-xl text-lg flex items-center text-primary-color helvetica p-6">
        <li>📣🎉Pengumuman Finalis</li>
      </ul>
      <ul className="h-[15%] font-semibold md:text-2xl text-lgfletext-lgitems-center text-primary-color helvetica p-6">
        <li>🏆🎉Awarding</li>
      </ul>
    </div>
  </section>
);

export default Timeline;
