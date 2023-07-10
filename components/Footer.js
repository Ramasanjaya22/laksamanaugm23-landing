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
    
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 p-5`}>
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
          <div className="footer-gradient" />
          </p>

          <div className="flex gap-2 items-center">
          <p className="font-bold text-[14px] text-primary-color">
          </p>
            <SocialIcon
              url="https://api.whatsapp.com/send/?phone=6285920052702&text&type=phone_number&app_absent=0"
              target="_blank"
              fgColor="#ffffff"
            />
            <SocialIcon
              url="https://www.instagram.com/laksamana.ugm/"
              target="_blank"
              fgColor="#ffffff"
            />
            <SocialIcon
              url="https://www.tiktok.com/@laksamana.ugm/"
              target="blank"
              fgColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
