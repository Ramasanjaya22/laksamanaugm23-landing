"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { motion } from "framer-motion";

function Gallery() {
  return (
    <div className="flex flex-col items-center">
      <div
        className={"m-2 border-8 w-5/6 lg:w-1/2 mx-auto items-center bg-[#D9D9D9]"}
        style={{ borderStyle: "outset" }}
      >
        <div className={"w-full bg-[#D9D9D9] p-2 border-b-4 border-[#A3A3A3]"}>
          <div className={"w-full flex bg-[#f7f614] p-2 h-[10%]"}>
            <p
              className={
                "text-[#74ed2c] text-3xl text-center px-4 pixeloid-sans"
              }
            >
              Gallery
            </p>
            <div
              className={
                "text-md bg-[#74ed2c] max-h-8 max-w-8 px-1 text-center border-4 ml-auto pixeloid-sans"
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
              showThumbs={true}
              className="max-w-[1000px] mx-auto"
            >
              <div>
                <Image
                  src="/laksamana3.jpg"
                  alt="laksamana-photo"
                  width={500}
                  height={500}
                  className="w-1/2"
                />
              </div>
              <div>
                <Image
                  src="/laksamana1.jpg"
                  alt="laksamana-photo"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <Image
                  src="/laksamana2.jpg"
                  alt="laksamana-photo"
                  width={500}
                  height={500}
                  className="w-1/2"
                />
              </div>
              <div>
                <Image
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
