import React from "react";

function AboutUs(){
    return(

        <div className={'m-2 border-8 h-full bg-[#D9D9D9]'} style={{ borderStyle: 'outset' }}>
      <div className={'w-full bg-[#D9D9D9] p-2 h-[10%] border-b-4 border-[#A3A3A3]'}>
        <div className={'w-full flex bg-[#00017F] p-2 h-[10%]'}> 
          <p className={'text-white text-2xl px-1 pixeloid-sans'}>
            Timeline
          </p>
          <div className={'text-md bg-[#D9D9D9] h-8 w-8 text-center border-4 ml-auto pixeloid-sans'} style={{ borderStyle: 'outset' }}>X</div>
        </div>
      </div>
      <div className={'h-[90%] p-8 m-auto'}>    
        <ol class="items-center sm:flex">
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0">
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-600 h-1"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900">24 Juli 2023</h3>
                    <p class="text-base font-normal text-gray-500">Pembukaan Pendaftaran & Pengunggahan Karya</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0">
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-600 h-1"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900">20 Agustus 2023</h3>
                    <p class="text-base font-normal text-gray-500">Batas Akhir Pendaftaran & Pengunggahan Karya</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0">
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-600 h-1"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900">21-31 Agustus 2023</h3>
                    <p class="text-base font-normal text-gray-500">Penilaian Hasil Karya</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0">
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-600 h-1"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900">10 September 2023</h3>
                    <p class="text-base font-normal text-gray-500">Pengumuman Finalis</p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-8 h-8 bg-[#74C21D] rounded-full shrink-0">
                    </div>
                </div>
                <div class="mt-3 sm:pr-8">
                    <h3 class="text-lg font-semibold text-gray-900">16 September 2023</h3>
                    <p class="text-base font-normal text-gray-500">Awarding</p>
                </div>
            </li>
        </ol>
      </div>
    </div>
    );
}

export default AboutUs;