"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/globals.css";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function MataLomba() {
  const [modalStates, setModalStates] = useState([
    false, // Modal 0
    false, // Modal 1
    false, // Modal 2
    false, // Modal 3
    false, // Modal 4
  ]);

  const openModal = (index) => {
    const updatedModalStates = [...modalStates];
    updatedModalStates[index] = true;
    setModalStates(updatedModalStates);
  };

  const closeModal = (index) => {
    const updatedModalStates = [...modalStates];
    updatedModalStates[index] = false;
    setModalStates(updatedModalStates);
  };

  return (
    <div id="matalomba" className="w-4/5 mx-auto h-fit">
      <div
        className={
          "bg-[#174ab7] border-[6px] h-fit py-10 px-4 w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-y-5 justify-items-center justify-center gap-8"
        }
        style={{ borderStyle: "outset" }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1
            className={
              "genty-demo md:text-6xl flex text-white mb-3 text-4xl text-center "
            }
          >
            Mata Lomba
          </h1>
        </div>
        <button
          onClick={() => openModal(0)}
          className={"border-[6px] option bg-white h-fit w-fit"}
        >
          <div>
            <Image
              width={1000}
              height={1000}
              src={"/PHOTO ESSAY.png"}
              alt={"photo essay"}
            />
          </div>
          <p className={"W95FA text-2xl"}>Photo Essay</p>
        </button>
        <Modal
          isOpen={modalStates[0]}
          onClose={() => closeModal(0)}
          title={"Photo Essay"}
        >
          <p>
            Photo Essay Laksamana merupakan lomba fotografi yang diselenggarakan
            Laksamana 2023. Photo essay merupakan salah satu bagian dari dunia
            fotografi, juga salah satu bentuk dari visual storytelling. Peserta
            lomba merupakan perseorangan/individu dan akan diminta membuat
            sebuah esai beserta foto dengan tema <b>“Merdeka dalam Framing”</b>.
            Tema tersebut menggambarkan luasnya isu kontemporer yang dapat
            diangkat dalam sebuah kata “merdeka.”.
          </p>
        </Modal>

        <button
          onClick={() => openModal(1)}
          className={"border-[6px] option bg-white h-fit w-fit"}
        >
          <div>
            <Image
              width={1000}
              height={1000}
              src={"/FILM PENDEK.png"}
              alt={"film pendek"}
            />
          </div>
          <p className={"W95FA text-2xl"}>Film Pendek</p>
        </button>
        <Modal
          isOpen={modalStates[1]}
          onClose={() => closeModal(1)}
          title={"Film Pendek"}
        >
          <p>
            Lomba Film Pendek Laksamana diselenggarakan sebagai bagian dari
            rangkaian acara Laksamana 2023. Penyelenggaraan lomba ini diharapkan
            dapat membantu peserta untuk mengembangkan kemampuan dan minatnya
            terhadap dunia perfilman. Peserta lomba dapat membuat film pendek
            yang sesuai dengan subtema yaitu
            <b>
              “Reimagining High School: Challenging Stereotypes Through the
              Reels”
            </b>
            .
          </p>
        </Modal>

        <button
          onClick={() => openModal(2)}
          className={"border-[6px] option bg-white h-fit w-fit"}
        >
          <div>
            <Image
              width={1000}
              height={1000}
              src={"/SPEECH.png"}
              alt={"speech"}
            />
          </div>
          <p className={"W95FA text-2xl"}>Speech</p>
        </button>
        <Modal
          isOpen={modalStates[2]}
          onClose={() => closeModal(2)}
          title={"Speech"}
        >
          <p>
            Lomba speech atau pidato Laksamana 2023 merupakan lomba penulisan
            materi dan penyampaian pidato dengan format audio visual (video).
            Lomba ini bertujuan untuk mewadahi keterampilan peserta yang
            memiliki minat pada bidang public relations. Tema yang dipilih pada
            lomba pidato Laksamana 2023 adalah{" "}
            <b>“Making the You in Social Media: THE REAL YOU”</b>. Pemilihan
            tema ini dilatarbelakangi oleh standar sosial yang membuat pengguna
            media sosial memendam keinginan untuk mengekspresikan diri.{" "}
          </p>
        </Modal>

        <button
          onClick={() => openModal(3)}
          className={"border-[6px] option bg-white h-fit w-fit"}
        >
          <div>
            <Image
              width={1000}
              height={1000}
              src={"/IKLAN.png"}
              alt={"iklan"}
            />
          </div>
          <p className={"W95FA text-2xl"}>Iklan</p>
        </button>
        <Modal
          isOpen={modalStates[3]}
          onClose={() => closeModal(3)}
          title={"Iklan"}
        >
          <p>
            Lomba Video Iklan Laksamana adalah lomba pembuatan iklan berbasis
            visual (Video) yang dikhususkan untuk peserta yang merupakan siswa
            aktif SMA dan setingkatnya. Selaras dengan tema besar Laksamana,
            yakni Freedom of Expression, Lomba Video Iklan mengangkat subtema{" "}
            <b>“Have Fun with Self-Expression”</b>. Tema ini dipilih mengingat
            adanya stereotip yang meluas di masyarakat terhadap
            kelompok-kelompok tertentu sehingga isu ini membatasi kesenangan
            individu dalam mengekspresikan diri secara bebas melalui media
            sosial.{" "}
          </p>
        </Modal>

        <button
          onClick={() => openModal(4)}
          className={"border-[6px] option bg-white h-fit w-fit"}
        >
          <div>
            <Image
              width={1000}
              height={1000}
              src={"/PODCAST.png"}
              alt={"podcast"}
            />
          </div>
          <p className={"W95FA text-2xl"}>Podcast</p>
        </button>
        <Modal
          isOpen={modalStates[4]}
          onClose={() => closeModal(4)}
          title={"Podcast"}
        >
          <p>
            Lomba Podcast Laksamana adalah lomba pembuatan podcast berbasis
            audio yang dikhususkan bagi peserta yang merupakan siswa aktif SMA
            dan setingkatnya. Tema besar dari lomba podcast ini adalah{" "}
            <b>“Peel the O(p)inion: Freedom for Speech, Freedom for All”</b>.
            Tema lomba podcast ini ditujukan untuk membantu peserta dalam
            mengembangkan kemampuan dan minatnya di dunia podcast dan untuk
            memberikan ruang kepada para podcaster muda dalam menyikapi isu
            stereotype yang ada di sekitarnya.{" "}
          </p>
        </Modal>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center item-center my-8 mx-auto gap-4">
        <Link href="http://bit.ly/RegistrasiLaksamana2023" target="_blank">
          <button
            className={
              "w-full W95FA text-primary-blue py-2 px-3 option text-center border-4 bg-lime-400 border-white"
            }
          >
            {/* <button className="option items-center rounded-md mx-2 my-4 h-fit py-4 px-6 bg-lime-400 hover:bg-lime-500 transition duration-300 ease-in-out gap-2"> */}
            {/* <span className="font-normal text-xl text-sky-600 genty-demo"> */}
            <p className="text-2xl lg:text-4xl py-2 px-3 border-black m-[0.5px] hover:border-dotted hover:border-pink-500">
              Daftar Lomba!
            </p>
            {/* </span> */}
          </button>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1fDNdcRxgptfbxJm_saGvrAMcgslDh1TK/view?usp=drivesdk"
          target="_blank"
        >
          <button
            className={
              "w-full W95FA text-primary-blue py-2 px-3 option text-center border-4 bg-pink-400 border-white"
            }
          >
            {/* <button className="border-dotted items-center rounded-md mx-2 my-2 lg:my-4 h-fit py-4 px-6 bg-pink-500 hover:bg-pink-700 transition duration-300 ease-in-out outline outline-white gap-2"> */}
            <p className="text-lg lg:text-3xl py-2 px-3 border-black m-[0.5px] hover:border-dotted hover:border-pink-500">
              Guidebook Lomba
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-30 z-40">
      <div
        className="modal bg-[#D9D9D9] border-8 sm:w-1/2 p-1 w-11/12 overflow-auto"
        style={{ borderStyle: "outset" }}
      >
        <div className="flex bg-blue-800 px-2 py-1 mb-2">
          <p className="W95FA text-3xl text-white">{title}</p>
          <button
            className="modal-close pixeloid-sans ml-auto option border-2 bg-[#D9D9D9] w-[20px] h-[20px]"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="modal-content p-2 mb-3">{children}</div>
        <div className="w-full items-center text-center">
          {/* <button
            className={"W95FA option text-center w-[25%] border-4 border-white"}
            onClick={onClose}
          >
            <p
              className={
                "border-dotted border-2 border-black m-[0.5px] hover:border-solid hover:border-[#D9D9D9]"
              }
            >
              Ok
            </p>
          </button> */}
          <Link href="http://bit.ly/RegistrasiLaksamana2023" target="_blank">
            <button
              className={
                " W95FA m-2 text-primary-blue py-2 px-3 option text-center border-4 bg-lime-400 border-white"
              }
            >
              {/* <button className="option items-center rounded-md mx-2 my-4 h-fit py-4 px-6 bg-lime-400 hover:bg-lime-500 transition duration-300 ease-in-out gap-2"> */}
              {/* <span className="font-normal text-xl text-sky-600 genty-demo"> */}
              <p className="text-2xl lg:text-xl py-2 px-3 border-black m-[0.5px] hover:border-dotted hover:border-pink-500">
                Daftar Lomba!
              </p>
              {/* </span> */}
            </button>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1fDNdcRxgptfbxJm_saGvrAMcgslDh1TK/view?usp=drivesdk"
            target="_blank"
          >
            <button
              className={
                " W95FA m-2 text-primary-blue py-2 px-3 option text-center border-4 bg-pink-400 border-white"
              }
            >
              {/* <button className="border-dotted items-center rounded-md mx-2 my-2 lg:my-4 h-fit py-4 px-6 bg-pink-500 hover:bg-pink-700 transition duration-300 ease-in-out outline outline-white gap-2"> */}
              <p className="text-lg py-2 px-3 border-black m-[0.5px] hover:border-dotted hover:border-pink-500">
                Guidebook Lomba
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MataLomba;
