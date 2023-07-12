"use client";
import { useState } from "react";

import styles from "@/styles";

const MataLomba = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section
      className={`${styles.paddings} flex flex-col justify-center items-center `}
      id="MataLomba"
    >
      <TitleText title={<>Mata Lomba</>} textStyles="text-center" />

      <div>
        <div className="W95FA text-white text-xl">
          <div className="h-[70px] w-[70px] bg-black"></div>
          <p className="">Icon1.png</p>
        </div>
      </div>
    </section>
  );
};

export default MataLomba;
