import React from 'react';
import '../styles/globals.css';
import { FollowCursor } from '@/utils/buttonTrail';

function Hero() {
  return (
    <div class="w-screen h-screen flex">
      <FollowCursor />
      <div class="w-[40%] h-screen flex items-center relative -m-36">
        <img src="Casette.png" alt="CD" class="w-[200%] absolute top-[30%] -left-[27%] animate-spin-slow"></img>
      </div>
      <div class="w-3/4 flex flex-col justify-center text-[#26223D] relative">
        <h1 class="text-8xl gravitas-one">Laksamana</h1>
        <p class="helvetica w-7/10 p-1 w-3/4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Phasellus pulvinar justo lacus, nec pellentesque tellus dapibus vitae. 
        Quisque dignissim magna ut elit maximus, vel euismod lectus bibendum. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh odio, laoreet et</p>
        <button id="button1" class="genty-demo outline-black outline w-fit rounded-2xl p-2 pl-11 pr-11 text-3xl self-center left-[40%] absolute bottom-[20%] bg-[#F4F4F4] z-30">
          Tombol!
        </button>
        <button id="button2" class="genty-demo w-[190px] h-[52px] rounded-2xl p-2 pl-11 pr-11 text-3xl self-center left-[40%] absolute bottom-[19%] bg-yellow-300 z-20"></button>
        <button id="button3" class="genty-demo w-[190px] h-[52px] rounded-2xl p-2 pl-11 pr-11 text-3xl self-center left-[40%] absolute bottom-[18%] bg-blue-600 z-10"></button>
      </div>
    </div>
  )
}

export default Hero