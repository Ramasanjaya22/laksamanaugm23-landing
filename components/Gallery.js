"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Gallery() {
  return (
    <div className="flex flex-col items-center">
      <div
        className={
          "m-2 border-8 h-full w-3/5 mx-auto items-center bg-[#D9D9D9]"
        }
        style={{ borderStyle: "outset" }}
      >
        <div className={"w-full bg-[#ffffff] p-2 border-b-4 border-[#A3A3A3]"}>
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
                "text-md bg-[#74ed2c] max-h-8 max-w-8 px-1 rounded-full text-center border-4 ml-auto pixeloid-sans"
              }
              style={{ borderStyle: "outset" }}
            >
              X
            </div>
          </div>
          <Carousel
            interval="2000"
            transitionTime="2000"
            infiniteLoop
            className="w-full outline mt-2 items-center flex flex-col justify-center"
          >
            <div>
              <Image
                src="/laksamana1.png"
                alt="laksamana-photo"
                width={1000}
                height={1000}
              />
              <p className="legend">our event 1</p>
            </div>
            <div>
              <Image
                src="/laksamana2.png"
                alt="laksamana-photo"
                width={1000}
                height={1000}
                className="w-1/2"
              />
              <p className="legend">our event 2</p>
            </div>
            <div>
              <Image
                src="/laksamana3.png"
                alt="laksamana-photo"
                width={1000}
                height={1000}
                className="w-1/2"
              />
              <p className="legend">our event 3</p>
            </div>
            <div>
              <Image
                src="/laksamana4.png"
                alt="laksamana-photo"
                width={1000}
                height={1000}
                className="w-1/2"
              />
              <p className="legend">our event 4</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
