"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { motion } from "framer-motion";

function Gallery() {
  return (
    <div className="flex flex-col items-center">
      <div
        className={"m-2 border-8 rounded-lg w-4/5 lg:w-1/2 mx-auto items-center bg-[#f7f614]"}
        style={{ borderStyle: "outset" }}
      >
        <div className={"w-full bg-[#6fe828] p-2 border-b-4"}>
          <div className={"w-full flex bg-[#f7f614] h-[10%]"}>
            <p
              className={
                "text-[#74ed2c] text-xl text-center ml-4 pixeloid-sans"
              }
            >
              Gallery
            </p>
            <div
              className={
                "text-md bg-[#74ed2c] rounded-full max-h-8 max-w-8 px-1 text-center border-4 ml-auto pixeloid-sans"
              }
              style={{ borderStyle: "outset" }}
            >
              X
            </div>
          </div>
        </div>
        <motion.div>
            <Carousel
              autoPlay
              emulateTouch
              infiniteLoop
              className="max-w-[1000px] mx-auto"
            >
              <div>
                <img
                  src="/laksamana3.jpg"
                  alt="laksamana-photo"
                  width={500}
                  height={500}
                  className="w-1/2"
                />
              </div>
              <div>
                <img
                  src="/laksamana1.jpg"
                  alt="laksamana-photo"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <img
                  src="/laksamana2.jpg"
                  alt="laksamana-photo"
                  width={500}
                  height={500}
                  className="w-1/2"
                />
              </div>
              <div>
                <img
                  src="/laksamana4.jpg"
                  alt="laksamana-photo"
                  width={500}
                  height={500}
                  className="w-1/2"
                />
              </div>
            </Carousel>
          </motion.div>
      </div>
    </div>
  );
}

export default Gallery;
