"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const ExploreCard = ({
  id,
  imgIcon,
  imgUrl,
  title,
  deskripsi,
  cp,
  cp2,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.95)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[8]" : "lg:flex-[0.5] flex-[1]"
    } flex items-center justify-center min-w-[100px] h-[600px] transition-[flex] duration-[0.6s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt="planet-04"
      width={1000}
      height={1000}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />

    {active !== id ? (
      <h3 className="font-bold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-2 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.8)] sm:rounded-[24px] md:rounded-t-none rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} flex flex-col items-center mb-[16px]`}
        >
          <div className="flex  w-full">
            <div className="flex items-center w-full justify-between">
              <div className="w-[60px] h-[60px] rounded-[24px] glassmorphism mr-[16px]">
                <Image
                  src={imgIcon}
                  alt="ikon lomba"
                  width={50}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>
              <p className="font-bold text-[16px] leading-[20.16px] text-sky-500">
                Contact Person :
              </p>
              <p className="font-bold text-[16px] leading-[20.16px] text-white">
                {cp}
              </p>
              <p className="font-bold text-[16px] leading-[20.16px] text-white">
                {cp2}
              </p>
              </span>
            </div>
          </div>
        </div>

        <p className="font-normal text-[16px] leading-[20.16px] text-white">
        {deskripsi}
        </p>

        <h2 className="mt-4 font-semibold sm:text-3xl text-xl text-white flex items-center justify-between">
  <span>{title}</span>
  <Link href="http://bit.ly/RegistrasiLaksamana2023" target="_blank">
    <button className="flex items-center h-fit py-2 px-4 bg-sky-500 hover:bg-sky-600 transition duration-300 ease-in-out rounded-lg outline-dashed outline-pink-500 gap-2">
      <span className="font-normal text-xl text-white genty-demo">Daftar</span>
    </button>
  </Link>
</h2>

      
        
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
