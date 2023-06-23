import React from "react";
import "../styles/globals.css";
import { FollowCursor } from "@/utils/buttonTrail";

function Hero() {
  return (
    <div className="flex h-screen">
      <FollowCursor />
      <div class="w-[40%] h-screen flex justify-center items-center absolute -m-36">
        <img
          src="Casette.png"
          alt="CD"
          class="w-[200%]  top-[30%] -left-[30%] absolute animate-spin-slow "
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/4 flex flex-col justify-center items-center text-[#26223D]">
          <h1 className="text-8xl gravitas-one">Laksamana</h1>
          <p className="helvetica w-7/10 p-1 w-3/4 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pulvinar justo lacus, nec pellentesque tellus dapibus vitae. Quisque
            dignissim magna ut elit maximus, vel euismod lectus bibendum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh
            odio, laoreet et
          </p>
          <div>
            <button
              id="button1"
              className="mt-20 genty-demo outline-black outline w-fit rounded-2xl p-2 pl-11 pr-11 text-3xl self-center left-[40%] absolute bottom-[20%] bg-[#F4F4F4] z-30"
            >
              Tombol!
            </button>
            <button
              id="button2"
              className="genty-demo w-[190px] h-[52px] rounded-2xl p-2 pl-11 pr-11 text-3xl self-center left-[40%] absolute bottom-[19%] bg-yellow-300 z-20"
            ></button>
            <button
              id="button3"
              className="genty-demo w-[190px] h-[52px] rounded-2xl p-2 pl-11 pr-11 text-3xl self-center left-[40%] absolute bottom-[18%] bg-blue-600 z-10"
            ></button>
            <button
              id="button4"
              className="genty-demo w-[190px] h-[52px] rounded-2xl p-2 pl-11 pr-11 text-3xl self-center left-[40%] absolute bottom-[17%] bg-green-500 z-0"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
