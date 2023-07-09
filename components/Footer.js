'use client'
const { motion } = require("framer-motion");
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const Footer = () => (
  <motion.footer
  id="footer"
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} snap-start py-4 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 p-5`}>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h4 className="gravitas-one md:text-[52px] text-[40px] text-primary-color gravitas-demo">
          IKUTI LOMBA!!
        </h4>
        <Link href={'http://bit.ly/RegistrasiLaksamana2023'} target="_blank">
        <button
          type="button"
          className="flex items-center h-fit py-2 px-10 bg-[#34a5f5] hover:bg-[#2387ce] transition ease-in-out rounded-[32px] outline-dashed outline-[#EA618D] gap-4"
          >
          <span className="font-normal genty-demo text-[24px] text-white">
            Daftar
          </span>
        </button>
        </Link>
      </div>
      <h4 className="font-extrabold gravitas-one text-[24px] text-primary-color">
            laksamana UGM - 2023
          </h4>

      <div className="flex flex-col">
        <div className="mb-[20px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="font-normal text-[14px] text-primary-color opacity-50">
            Powered By NasgorLab
          </p>
          <p className="font-normal text-[14px] text-primary-color opacity-50">
            Copyright © 2023 - All rights reserved.
          </p>

          <div className="flex gap-2 items-center">
          <p className="font-bold text-[14px] text-primary-color">
            For Sponsorship (CP Ikmal)
          </p>
            <SocialIcon
              url="https://api.whatsapp.com/send/?phone=6285726817481&text&type=phone_number&app_absent=0"
              target="_blank"
              fgColor="#ffffff"
            />
            <SocialIcon
              url="https://www.instagram.com/laksamana.ugm/"
              target="_blank"
              fgColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
