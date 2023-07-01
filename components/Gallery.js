import React from "react";
import "../styles/globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { ResizeObserver } from "swiper";

SwiperCore.use([ResizeObserver]);

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Gallery() {
  return (
    <div class="my-20">
      <h1 class="mt-[32px] text-center font-bold md:text-[54px] text-primary-color text-[30px] gravitas-one">
        Gallery
      </h1>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        class="my-20 w-screen overflow-hidden"
      >
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/tarik-tambang.jpeg"
            className="max-w-full h-auto w-1/2 m-8"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/tarik-tambang.jpeg"
            className="max-w-full h-auto w-1/2 m-8"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/tarik-tambang.jpeg"
            className="max-w-full h-auto w-1/2 m-8"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/tarik-tambang.jpeg"
            className="max-w-full h-auto w-1/2 m-8"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/tarik-tambang.jpeg"
            className="max-w-full h-auto w-1/2 m-8"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Gallery;
