import React from "react";
import "../styles/globals.css";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex">
      <div className="w-[40%] h-screen md:flex justify-center items-center absolute -m-36 hidden">
        <img
          src="Casette.png"
          alt="CD"
          className="w-[200%]  top-[30%] -left-[30%] absolute animate-spin-slow"
        />
      </div>

      <div className="flex justify-center items-center h-screen overflow-hidden">
        <div className="md:w-[85%] w-screen flex flex-col justify-center items-center text-[#26223D]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="660"
            height="80"
            viewBox="0 0 748 137"
            fill="none"
            className="md:w-full w-[400px] h-auto"
          >
            <path
              d="M63.22 86.02C63.82 86.38 64.24 86.92 64.48 87.64C64.72 88.36 64.6 89.02 64.12 89.62C61.36 94.42 58.84 98.86 56.56 102.94C54.28 106.9 52.18 110.2 50.26 112.84C50.14 113.08 49.66 113.86 48.82 115.18C48.1 116.38 47.14 117.82 45.94 119.5C44.86 121.06 43.6 122.68 42.16 124.36C40.72 126.04 39.34 127.48 38.02 128.68C36.7 129.88 35.2 130.96 33.52 131.92C31.84 132.88 29.98 133.66 27.94 134.26C25.9 134.86 23.74 134.92 21.46 134.44C19.18 134.08 17.2 133.42 15.52 132.46C13.84 131.38 12.4 130.24 11.2 129.04C10.12 127.84 9.16 126.64 8.32 125.44C6.88 123.4 5.86 121.6 5.26 120.04C3.82 116.92 2.62 113.08 1.66 108.52C0.7 103.84 0.22 99.34 0.22 95.02C0.22 92.86 0.28 90.82 0.4 88.9C0.52 86.86 0.7 85.12 0.94 83.68C1.18 82.24 1.36 81.1 1.48 80.26C1.72 79.42 1.84 79 1.84 79C2.08 77.56 2.44 76 2.92 74.32C3.28 72.88 3.7 71.26 4.18 69.46C4.66 67.54 5.2 65.56 5.8 63.52C7.12 59.32 8.5 55.12 9.94 50.92C11.38 46.6 12.7 43.06 13.9 40.3C14.38 39.1 15.1 37.36 16.06 35.08C17.02 32.8 18.16 30.34 19.48 27.7C20.92 24.94 22.54 22.12 24.34 19.24C26.14 16.24 28.18 13.42 30.46 10.78C32.62 8.13999 35.08 5.86 37.84 3.94C40.6 1.9 43.36 0.759993 46.12 0.519989C47.8 0.279992 49.72 0.519993 51.88 1.23999C54.16 1.96 56.02 3.58 57.46 6.09999C58.54 8.13999 59.2 10.24 59.44 12.4C59.68 16.6 59.2 20.32 58 23.56C56.8 26.8 55.9 29.08 55.3 30.4C54.58 31.84 53.62 33.64 52.42 35.8C51.34 37.84 50.2 39.82 49 41.74C47.8 43.54 46.78 45.1 45.94 46.42C45.1 47.62 44.68 48.22 44.68 48.22C44.68 48.22 44.2 48.94 43.24 50.38C42.28 51.7 41.14 53.26 39.82 55.06C38.5 56.86 37.12 58.72 35.68 60.64C34.24 62.56 33.04 64.12 32.08 65.32C31.36 66.28 30.22 67.66 28.66 69.46C27.22 71.26 25.54 73.18 23.62 75.22C21.82 77.14 19.9 79 17.86 80.8C15.94 82.48 14.26 83.62 12.82 84.22C12.58 85.54 12.34 87.16 12.1 89.08C11.98 90.88 11.98 92.92 12.1 95.2C12.1 99.04 12.52 102.94 13.36 106.9C14.2 110.86 15.16 113.92 16.24 116.08C16.72 117.04 17.38 118.24 18.22 119.68C19.06 121 20.08 122.14 21.28 123.1C22.48 124.06 23.8 124.54 25.24 124.54C26.8 124.54 28.78 123.94 31.18 122.74C31.9 122.38 32.98 121.6 34.42 120.4C35.86 119.2 37.72 117.28 40 114.64C42.28 111.88 45.04 108.28 48.28 103.84C51.52 99.4 55.3 93.76 59.62 86.92C59.98 86.32 60.52 85.9 61.24 85.66C61.96 85.42 62.62 85.54 63.22 86.02ZM34.96 20.5C33.64 22.9 32.44 25.36 31.36 27.88C30.28 30.4 29.26 32.8 28.3 35.08C27.46 37.24 26.68 39.28 25.96 41.2C25.36 43.12 24.82 44.68 24.34 45.88C23.38 48.4 22.18 51.58 20.74 55.42C19.42 59.26 18.22 63.1 17.14 66.94C18.46 64.9 19.66 63.1 20.74 61.54C21.82 59.86 22.66 58.54 23.26 57.58C24.22 56.38 25.3 54.88 26.5 53.08C27.82 51.28 29.14 49.54 30.46 47.86C31.9 45.82 33.4 43.78 34.96 41.74C36.4 39.58 37.78 37.42 39.1 35.26C40.18 33.46 41.26 31.6 42.34 29.68C43.54 27.76 44.44 26.14 45.04 24.82C45.64 23.62 46.48 21.94 47.56 19.78C48.76 17.62 49.72 15.4 50.44 13.12C51.16 10.84 51.28 8.97999 50.8 7.54C49.84 5.49999 48.76 4.71999 47.56 5.19999C46.48 5.67999 45.16 6.7 43.6 8.26C42.04 9.69999 40.54 11.5 39.1 13.66C37.66 15.82 36.28 18.1 34.96 20.5ZM75.2195 110.734C75.2195 114.797 76.7039 118 79.6727 120.344C82.6414 122.688 86.157 123.859 90.2195 123.859C95.1674 123.859 99.9591 122.714 104.595 120.422C112.407 116.62 116.313 110.396 116.313 101.75V90.4219C114.595 91.5156 112.381 92.4271 109.673 93.1562C106.964 93.8854 104.308 94.4062 101.704 94.7188L93.1883 95.8125C88.0841 96.4896 84.256 97.5573 81.7039 99.0156C77.381 101.464 75.2195 105.37 75.2195 110.734ZM109.282 82.2969C112.511 81.8802 114.673 80.526 115.766 78.2344C116.391 76.9844 116.704 75.1875 116.704 72.8438C116.704 68.0521 114.985 64.5885 111.548 62.4531C108.162 60.2656 103.292 59.1719 96.9383 59.1719C89.5945 59.1719 84.3862 61.151 81.3133 65.1094C79.5945 67.2969 78.4747 70.5521 77.9539 74.875H64.8289C65.0893 64.5625 68.4227 57.401 74.8289 53.3906C81.2872 49.3281 88.7612 47.2969 97.2508 47.2969C107.095 47.2969 115.089 49.1719 121.235 52.9219C127.329 56.6719 130.376 62.5052 130.376 70.4219V118.625C130.376 120.083 130.662 121.255 131.235 122.141C131.86 123.026 133.136 123.469 135.063 123.469C135.688 123.469 136.391 123.443 137.173 123.391C137.954 123.286 138.787 123.156 139.673 123V133.391C137.485 134.016 135.818 134.406 134.673 134.562C133.527 134.719 131.964 134.797 129.985 134.797C125.141 134.797 121.626 133.078 119.438 129.641C118.292 127.818 117.485 125.24 117.016 121.906C114.152 125.656 110.037 128.911 104.673 131.672C99.3081 134.432 93.3966 135.812 86.9383 135.812C79.1779 135.812 72.8237 133.469 67.8758 128.781C62.9799 124.042 60.532 118.13 60.532 111.047C60.532 103.286 62.9539 97.2708 67.7977 93C72.6414 88.7292 78.9956 86.099 86.8602 85.1094L109.282 82.2969ZM155.588 18.2344H169.104V84.875L205.198 49.3281H223.166L191.135 80.6562L224.963 133H206.995L180.901 90.8125L169.104 101.594V133H155.588V18.2344ZM246.66 106.75C247.077 111.438 248.249 115.031 250.176 117.531C253.717 122.062 259.863 124.328 268.613 124.328C273.822 124.328 278.405 123.208 282.363 120.969C286.322 118.677 288.301 115.161 288.301 110.422C288.301 106.828 286.712 104.094 283.535 102.219C281.504 101.073 277.493 99.7448 271.504 98.2344L260.332 95.4219C253.197 93.651 247.936 91.6719 244.551 89.4844C238.509 85.6823 235.488 80.4219 235.488 73.7031C235.488 65.7865 238.327 59.3802 244.004 54.4844C249.733 49.5885 257.415 47.1406 267.051 47.1406C279.655 47.1406 288.743 50.8385 294.316 58.2344C297.806 62.9219 299.499 67.974 299.395 73.3906H286.113C285.853 70.2135 284.733 67.3229 282.754 64.7188C279.525 61.0208 273.926 59.1719 265.957 59.1719C260.645 59.1719 256.608 60.1875 253.848 62.2188C251.139 64.25 249.785 66.9323 249.785 70.2656C249.785 73.9115 251.582 76.8281 255.176 79.0156C257.259 80.3177 260.332 81.4635 264.395 82.4531L273.691 84.7188C283.796 87.1667 290.566 89.5365 294.004 91.8281C299.473 95.4219 302.207 101.073 302.207 108.781C302.207 116.229 299.368 122.661 293.691 128.078C288.066 133.495 279.473 136.203 267.91 136.203C255.462 136.203 246.634 133.391 241.426 127.766C236.27 122.089 233.509 115.083 233.145 106.75H246.66ZM331.482 110.734C331.482 114.797 332.966 118 335.935 120.344C338.904 122.688 342.42 123.859 346.482 123.859C351.43 123.859 356.222 122.714 360.857 120.422C368.67 116.62 372.576 110.396 372.576 101.75V90.4219C370.857 91.5156 368.643 92.4271 365.935 93.1562C363.227 93.8854 360.571 94.4062 357.966 94.7188L349.451 95.8125C344.347 96.4896 340.518 97.5573 337.966 99.0156C333.643 101.464 331.482 105.37 331.482 110.734ZM365.545 82.2969C368.774 81.8802 370.935 80.526 372.029 78.2344C372.654 76.9844 372.966 75.1875 372.966 72.8438C372.966 68.0521 371.248 64.5885 367.81 62.4531C364.425 60.2656 359.555 59.1719 353.201 59.1719C345.857 59.1719 340.649 61.151 337.576 65.1094C335.857 67.2969 334.737 70.5521 334.216 74.875H321.091C321.352 64.5625 324.685 57.401 331.091 53.3906C337.55 49.3281 345.024 47.2969 353.513 47.2969C363.357 47.2969 371.352 49.1719 377.498 52.9219C383.591 56.6719 386.638 62.5052 386.638 70.4219V118.625C386.638 120.083 386.925 121.255 387.498 122.141C388.123 123.026 389.399 123.469 391.326 123.469C391.951 123.469 392.654 123.443 393.435 123.391C394.216 123.286 395.05 123.156 395.935 123V133.391C393.748 134.016 392.081 134.406 390.935 134.562C389.789 134.719 388.227 134.797 386.248 134.797C381.404 134.797 377.888 133.078 375.701 129.641C374.555 127.818 373.748 125.24 373.279 121.906C370.414 125.656 366.3 128.911 360.935 131.672C355.571 134.432 349.659 135.812 343.201 135.812C335.44 135.812 329.086 133.469 324.138 128.781C319.242 124.042 316.795 118.13 316.795 111.047C316.795 103.286 319.216 97.2708 324.06 93C328.904 88.7292 335.258 86.099 343.123 85.1094L365.545 82.2969ZM470.601 91.75H456.851V105.5H443.101V91.75H429.351V133H401.851V36.75H415.601V50.5H429.351V64.25H443.101V78H456.851V64.25H470.601V50.5H484.351V36.75H498.101V133H470.601V91.75ZM525.795 110.734C525.795 114.797 527.279 118 530.248 120.344C533.216 122.688 536.732 123.859 540.795 123.859C545.742 123.859 550.534 122.714 555.17 120.422C562.982 116.62 566.888 110.396 566.888 101.75V90.4219C565.17 91.5156 562.956 92.4271 560.248 93.1562C557.539 93.8854 554.883 94.4062 552.279 94.7188L543.763 95.8125C538.659 96.4896 534.831 97.5573 532.279 99.0156C527.956 101.464 525.795 105.37 525.795 110.734ZM559.857 82.2969C563.086 81.8802 565.248 80.526 566.341 78.2344C566.966 76.9844 567.279 75.1875 567.279 72.8438C567.279 68.0521 565.56 64.5885 562.123 62.4531C558.737 60.2656 553.867 59.1719 547.513 59.1719C540.17 59.1719 534.961 61.151 531.888 65.1094C530.17 67.2969 529.05 70.5521 528.529 74.875H515.404C515.664 64.5625 518.998 57.401 525.404 53.3906C531.862 49.3281 539.336 47.2969 547.826 47.2969C557.67 47.2969 565.664 49.1719 571.81 52.9219C577.904 56.6719 580.951 62.5052 580.951 70.4219V118.625C580.951 120.083 581.237 121.255 581.81 122.141C582.435 123.026 583.711 123.469 585.638 123.469C586.263 123.469 586.966 123.443 587.748 123.391C588.529 123.286 589.362 123.156 590.248 123V133.391C588.06 134.016 586.393 134.406 585.248 134.562C584.102 134.719 582.539 134.797 580.56 134.797C575.716 134.797 572.201 133.078 570.013 129.641C568.867 127.818 568.06 125.24 567.591 121.906C564.727 125.656 560.612 128.911 555.248 131.672C549.883 134.432 543.972 135.812 537.513 135.812C529.753 135.812 523.399 133.469 518.451 128.781C513.555 124.042 511.107 118.13 511.107 111.047C511.107 103.286 513.529 97.2708 518.373 93C523.216 88.7292 529.571 86.099 537.435 85.1094L559.857 82.2969ZM593.676 49.3281H607.035V61.2031C610.993 56.3073 615.186 52.7917 619.613 50.6562C624.04 48.5208 628.962 47.4531 634.379 47.4531C646.254 47.4531 654.275 51.5938 658.441 59.875C660.733 64.4062 661.879 70.8906 661.879 79.3281V133H647.582V80.2656C647.582 75.1615 646.827 71.0469 645.316 67.9219C642.816 62.7135 638.285 60.1094 631.723 60.1094C628.389 60.1094 625.655 60.4479 623.52 61.125C619.665 62.2708 616.28 64.5625 613.363 68C611.02 70.7604 609.483 73.625 608.754 76.5938C608.077 79.5104 607.738 83.7031 607.738 89.1719V133H593.676V49.3281ZM683.12 110.734C683.12 114.797 684.604 118 687.573 120.344C690.541 122.688 694.057 123.859 698.12 123.859C703.067 123.859 707.859 122.714 712.495 120.422C720.307 116.62 724.213 110.396 724.213 101.75V90.4219C722.495 91.5156 720.281 92.4271 717.573 93.1562C714.864 93.8854 712.208 94.4062 709.604 94.7188L701.088 95.8125C695.984 96.4896 692.156 97.5573 689.604 99.0156C685.281 101.464 683.12 105.37 683.12 110.734ZM717.182 82.2969C720.411 81.8802 722.573 80.526 723.666 78.2344C724.291 76.9844 724.604 75.1875 724.604 72.8438C724.604 68.0521 722.885 64.5885 719.448 62.4531C716.062 60.2656 711.192 59.1719 704.838 59.1719C697.495 59.1719 692.286 61.151 689.213 65.1094C687.495 67.2969 686.375 70.5521 685.854 74.875H672.729C672.989 64.5625 676.323 57.401 682.729 53.3906C689.187 49.3281 696.661 47.2969 705.151 47.2969C714.995 47.2969 722.989 49.1719 729.135 52.9219C735.229 56.6719 738.276 62.5052 738.276 70.4219V118.625C738.276 120.083 738.562 121.255 739.135 122.141C739.76 123.026 741.036 123.469 742.963 123.469C743.588 123.469 744.291 123.443 745.073 123.391C745.854 123.286 746.687 123.156 747.573 123V133.391C745.385 134.016 743.718 134.406 742.573 134.562C741.427 134.719 739.864 134.797 737.885 134.797C733.041 134.797 729.526 133.078 727.338 129.641C726.192 127.818 725.385 125.24 724.916 121.906C722.052 125.656 717.937 128.911 712.573 131.672C707.208 134.432 701.297 135.812 694.838 135.812C687.078 135.812 680.724 133.469 675.776 128.781C670.88 124.042 668.432 118.13 668.432 111.047C668.432 103.286 670.854 97.2708 675.698 93C680.541 88.7292 686.896 86.099 694.76 85.1094L717.182 82.2969Z"
              fill="#021F4A"
            />
          </svg>
          <p className={"md:text-3xl text-sm W95FA text-[#021f4a]"}>
            Lomba Kreasi Siswa SMA se-Nusantara
          </p>
          <p className="p-1 w-3/4 md:text-xl font-thin text-[#021f4a] text-justify text-sm md:text-center lg:text-center helvetica my-3 ">
            Laksamana UGM merupakan sebuah rangkaian acara yang dilaksanakan
            oleh Korps Mahasiswa Komunikasi UGM. Laksamana digelar untuk
            menyalurkan ide dan mengembangkan potensi siswa siswi SMA/ Sederajat
            di seluruh Indonesia dalam bidang Ilmu Komunikasi melalui berbagai
            bentuk kompetisi, baik secara lisan maupun tertulis.
          </p>
          <div className=".gradient-03 w-full h-full" />
          <img
            src="Sticker2.png"
            alt="stiker"
            className="absolute right-[10%] top-[10%] md:w-[12%] lowfpsleft overflow-hidden w-[20%]"
          />
          <img
            src="Sticker1.png"
            alt="sticker2"
            className="absolute md:right-[5%] bottom-[-10%] md:w-[20%] lowframe overflow-hidden w-[35%] right-[10%]"
          />
          <p className="text-lg md:text-3xl text-md mt-4 mx-8 text-center px-4 genty-demo text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
            Freedom of Expressions: Breaking the Stereotypes
          </p>
          <Link href={"/about-us"} className="text-center">
            <img
              alt="about us"
              src="/internet-icon.png"
              width={120}
              height={120}
            />
            <p
              className={
                "W95FA text-white text-xl -m-5 z-10 hover:bg-[#04007F] hover:px-2 hover:cursor-pointer"
              }
            >
              About Us.exe
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
