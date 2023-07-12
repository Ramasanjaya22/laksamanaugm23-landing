"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { exploreWorlds } from "@/constants";
import { staggerContainer } from "@/utils/motion";
import { ExploreCard, TitleText } from "@/components";
import styles from "@/styles";
import Link from "next/link";

const InfoLomba = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section
      className={`${styles.paddings} flex flex-col justify-center items-center `}
      id="infolomba"
    >
      <TitleText title={<>Mata Lomba</>} textStyles="text-center" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex lg:flex-row flex-col min-h-[60vh] mx-6">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>

      <div className="flex flex-row mx-auto">
        <Link
          href="https://drive.google.com/file/d/1Vfn1ygdkR_ZUwjrKibJ7kgXjfAlFDFQH/view?usp=sharing"
          target="_blank"
        >
          <button className="flex items-center mx-4 my-4 h-fit py-4 px-6 bg-pink-500 hover:bg-pink-700 transition duration-300 ease-in-out rounded-full outline outline-white gap-2">
            <span className="font-normal text-xl text-white genty-demo">
              Guidebook Lomba
            </span>
          </button>
        </Link>
        <Link href="http://bit.ly/RegistrasiLaksamana2023" target="_blank">
          <button className="flex items-center my-4 h-fit py-4 px-8 bg-lime-500 hover:bg-lime-700 transition duration-300 ease-in-out rounded-full outline outline-white gap-2">
            <span className="font-normal text-xl text-sky-600 genty-demo">
              Daftar Lomba!
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default InfoLomba;
