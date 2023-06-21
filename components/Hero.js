import React from 'react';
import '../styles/globals.css';

function Hero() {
  return (
    <div class="w-screen h-screen flex">
      <div class="w-[40%] h-screen flex items-center relative -m-36">
        <img src="Casette.png" alt="CD" class="w-[200%] absolute top-[70%] -left-[27%] transform -translate-y-1/2"></img>
      </div>
      <div class="w-3/4 flex flex-col justify-center text-[#26223D]">
        <h1 class="text-8xl gravitas-one">Laksamana</h1>
        <p class="helvetica w-7/10 p-1 w-3/4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Phasellus pulvinar justo lacus, nec pellentesque tellus dapibus vitae. 
        Quisque dignissim magna ut elit maximus, vel euismod lectus bibendum. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh odio, laoreet et</p>
        <button class="genty-demo outline-black outline w-fit rounded-2xl p-2 pl-11 pr-11 text-xl">Pukul aku!</button>
      </div>
    </div>
  )
}

export default Hero