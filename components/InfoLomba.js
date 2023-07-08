"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { exploreWorlds } from "@/constants";
import { staggerContainer } from "@/utils/motion";
import { ExploreCard, TitleText, TypingText } from "@/components";
import styles from "@/styles";

const InfoLomba = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.paddings}`} id="infolomba">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* <TypingText title="| Info Lomba" textStyles="text-center" /> */}
        <TitleText
          title={
            <>
              Ikuti Lomba Kami!
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[100vh] gap-3">
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
    </section>
  );
};

export default InfoLomba;
