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
      active === id ? "lg:flex-[2.5] flex-[10]" : "lg:flex-[1.5] flex-[1] "
    } flex items-end justify-center min-w-[100px] h-[400px] transition-[flex] duration-[0.6s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt="planet-04"
      width={1000}
      height={1000}
      className="absolute w-full h-full object-cover"
    />

    {active !== id ? (
      <h3 className="font-bold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-40 lg:rotate-[-90deg] lg:origin-[0,0] pixeloid-sans">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-1 flex px-4 justify-start w-full flex-col bg-[rgba(0,0,0,0.8)]">
        <h2 className="mt-4 pixeloid-sans font-semibold sm:text-3xl text-xl text-white flex items-center justify-between">
          <span>{title}</span>
        </h2>
        <p className="font-light text-[12px] lg:text-[14px] leading-[20.16px] helvetica text-white">
          {deskripsi}
        </p>
        <div
          className={`${styles.flexCenter} flex flex-col items-center mb-[16px]`}
        >
          <div className="flex w-full">
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
              <div>
                <p className="font-bold text-[12px] leading-[20.16px] text-sky-500">
                  Contact Person :
                </p>
                <p className="font-bold text-[10px] leading-[20.16px] text-white">
                  {cp}
                </p>
                <p className="font-bold text-[10px] leading-[20.16px] text-white">
                  {cp2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
