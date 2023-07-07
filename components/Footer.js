"use client";
"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import { SocialIcon } from "react-social-icons";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} snap-start py-6 relative overflow-hidden`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 p-5`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="gravitas-one md:text-[52px] text-[40px] text-primary-color">
          IKUT GABUNG LAKSAMANA
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <img
            src="/ikon-lomba.png"
            alt="button"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Daftar Sekarang
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-primary-color">
            laksamana - 2023
          </h4>
          <p className="font-normal text-[14px] text-primary-color opacity-50">
            Copyright © 2023 - All rights reserved.
          </p>

          <div className="flex gap-4">
            <SocialIcon
              url="https://www.instagram.com/"
              target="_blank"
              fgColor="#ffffff"
              bgColor="#000000"
            />
            <SocialIcon
              url="https://www.facebook.com/"
              target="_blank"
              fgColor="#ffffff"
              bgColor="#000000"
            />
            <SocialIcon
              url="https://www.linkedin.com/"
              target="_blank"
              fgColor="#ffffff"
              bgColor="#000000"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
