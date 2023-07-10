"use client";
import React from "react";
import "../styles/globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, ResizeObserver } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";

SwiperCore.use([ResizeObserver]);
function Gallery() {
  return (
    <div className="my-auto">
      <h1 className=" text-center font-bold md:text-[54px] text-primary-color text-[30px] gravitas-one">
        Gallery
      </h1>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            alt="foto"
            width={1500}
            height={1500}
            src="/laksamana1.png"
            className="max-w-full h-auto w-full my-8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="foto"
            width={1500}
            height={1500}
            src="/laksamana2.png"
            className="max-w-full h-auto w-full my-8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="foto"
            width={1500}
            height={1500}
            src="/laksamana3.png"
            className="max-w-full h-auto w-full my-8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="foto"
            width={1500}
            height={1500}
            src="/laksamana4.png"
            className="max-w-full h-auto w-full my-8"
          />
        </SwiperSlide>
      </Swiper>
      <div className="footer-gradient" />
    </div>
  );
}

export default Gallery;
