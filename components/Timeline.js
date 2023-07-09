import { motion } from "framer-motion";
import styles from "@/styles";
import { startingFeatures } from "@/constants";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";

const Timeline = () => (
  <section id="timeline" className={`${styles.paddings} relative z-10`}>
    <motion.div
      // variants={staggerContainer}
      // initial="hidden"
      // whileInView="show"
      // viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
      // variants={planetVariants("left")}
      // className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/timeline.jpeg"
          alt="timeline"
          className="w-[80%] h-[80%] object-contain mt-20 mx-auto"
        />
      </motion.div>
      <motion.div
      // variants={fadeIn("left", "tween", 0.2, 1)}
      // className="flex-[0.65] flex justify-center flex-col"
      >
        <div className="mt-[27px] flex flex-col max-w-[350px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "2" : ""} ${index + 5}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Timeline;

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] bg-[#323F5D]`}
    >
      <p className="font-bold text-[20px] text-white">{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);
