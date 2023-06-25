import React from "react";
import "../styles/globals.css";

function Gallery() {
  return (
    <div class="py-20">
        <h1 class="helvetica text-6xl text-center font-bold">Gallery</h1>
        <div class="grid gap-5 grid-cols-4 grid-rows-4 m-9">
            <div class="rounded-xl bg-slate-400 transition ease-in-out h-52 ">1</div>
            <div class="rounded-xl bg-slate-400 transition ease-in-out">2</div>
            <div class="rounded-xl bg-slate-400 transition ease-in-out">3</div>
            <div class="rounded-xl bg-slate-400 transition ease-in-out">4</div>
            <div class="rounded-xl bg-slate-400 transition ease-in-out">5</div>
            <div class="rounded-xl bg-slate-400 transition ease-in-out">6</div>
            <div class="rounded-xl bg-slate-400 transition ease-in-out">7</div>
            <div class="rounded-xl bg-slate-400 transition ease-in-out">8</div>
            <div class="rounded-xl bg-slate-400 transition ease-in-out">9</div>
            <div class="rounded-xl bg-slate-400 transition ease-in-out">10</div>
            <div class="rounded-xl bg-slate-400 transition ease-in-out">11</div>
            <div class="rounded-xl bg-slate-400 transition ease-in-out">12</div>
        </div>
    </div>
  );
}

export default Gallery;
