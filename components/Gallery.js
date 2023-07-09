'use client'
import React from "react";
import "../styles/globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { ResizeObserver } from "swiper";

SwiperCore.use([ResizeObserver]);

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";

function Gallery() {
  return (
    <div className="my-20">
      <h1 className="mt-[32px] text-center font-bold md:text-[54px] text-primary-color text-[30px] gravitas-one">
        Gallery
      </h1>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="my-20 w-screen overflow-hidden"
      >
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            alt="foto"
            width={1000}
            height={1000}
            src="/tarik-tambang.jpeg"
            className="max-w-full h-auto w-full md:w-1/2 m-8"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            alt="foto"
            width={1000}
            height={1000}
            src="/tarik-tambang.jpeg"
            className="max-w-full h-auto w-full md:w-1/2 m-8"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            alt="foto"
            width={1000}
            height={1000}
            src="/tarik-tambang.jpeg"
            className="max-w-full h-auto w-full md:w-1/2 m-8"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            alt="foto"
            width={1000}
            height={1000}
            src="/tarik-tambang.jpeg"
            className="max-w-full h-auto w-full md:w-1/2 m-8"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            alt="foto"
            width={1000}
            height={1000}
            src="/tarik-tambang.jpeg"
            className="max-w-full h-auto w-full md:w-1/2 m-8"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Gallery;
