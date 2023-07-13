"use client";
import React, { useState } from "react";
import { TitleText } from "./CustomTexts";
import PropTypes from 'prop-types';
import "../styles/globals.css";
import { useEffect } from "react";

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
    <div id="matalomba" className="flex justify-center items-center m-11 h-fit">
      <div className={'bg-[#D9D9D9] border-[6px] h-fit py-10 w-full mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-y-5 justify-items-center justify-center'} style={{ borderStyle: "outset" }}>
        <button onClick={() => openModal(0)} className={'border-[6px] option bg-white h-fit w-fit'}>
          <div className={'h-[150px] w-[150px]'}>
            <img 
              src={'/PHOTO ESSAY.png'}
              alt={'photo essay'}
            />
          </div>
          <p className={'W95FA text-2xl'}>Photo Essay</p>
        </button>
        <Modal isOpen={modalStates[0]} onClose={() => closeModal(0)} title={'Photo Essay'}>
          <p>Photo Essay Laksamana merupakan lomba fotografi yang diselenggarakan Laksamana 2023.
             Photo essay merupakan salah satu bagian dari dunia fotografi, juga salah satu bentuk dari 
            visual storytelling. Peserta lomba merupakan perseorangan/individu dan akan diminta membuat 
             sebuah esai beserta foto dengan tema <b>“Merdeka dalam Framing”</b>. Tema tersebut menggambarkan luasnya 
             isu kontemporer yang dapat diangkat dalam sebuah kata “merdeka.”.</p>
        </Modal>

        <button onClick={() => openModal(1)} className={'border-[6px] option bg-white h-fit w-fit'}>
          <div className={'h-[150px] w-[150px]'}>
            <img 
              src={'/FILM PENDEK.png'}
              alt={'film pendek'}
            />
          </div>
          <p className={'W95FA text-2xl'}>Film Pendek</p>
        </button>
        <Modal isOpen={modalStates[1]} onClose={() => closeModal(1)} title={'Film Pendek'}>
          <p>Lomba Film Pendek Laksamana diselenggarakan sebagai bagian dari rangkaian acara Laksamana 2023. 
            Penyelenggaraan lomba ini diharapkan dapat membantu peserta untuk mengembangkan kemampuan dan minatnya 
            terhadap dunia perfilman. Peserta lomba dapat membuat film pendek yang sesuai dengan subtema yaitu 
            <b>“Reimagining High School: Challenging Stereotypes Through the Reels”</b>.</p>
        </Modal>

        <button onClick={() => openModal(2)} className={'border-[6px] option bg-white h-fit w-fit'}>
          <div className={'h-[150px] w-[150px]'}>
            <img 
              src={'/SPEECH.png'}
              alt={'speech'}
            />
          </div>
          <p className={'W95FA text-2xl'}>Speech</p>
        </button>
        <Modal isOpen={modalStates[2]} onClose={() => closeModal(2)} title={'Speech'}>
          <p>Lomba speech atau pidato Laksamana 2023 merupakan lomba penulisan materi dan penyampaian pidato 
            dengan format audio visual (video). Lomba ini bertujuan untuk mewadahi keterampilan peserta yang 
            memiliki minat pada bidang public relations. Tema yang dipilih pada lomba pidato Laksamana 2023 
            adalah <b>“Making the You in Social Media: THE REAL YOU”</b>. Pemilihan tema ini dilatarbelakangi oleh 
            standar sosial yang membuat pengguna media sosial memendam keinginan untuk mengekspresikan diri. </p>
        </Modal>

        <button onClick={() => openModal(3)} className={'border-[6px] option bg-white h-fit w-fit'}>
          <div className={'h-[150px] w-[150px]'}>
            <img 
              src={'/IKLAN.png'}
              alt={'iklan'}
            />
          </div>
          <p className={'W95FA text-2xl'}>Iklan</p>
        </button>
        <Modal isOpen={modalStates[3]} onClose={() => closeModal(3)} title={'Iklan'}>
          <p>Lomba Video Iklan Laksamana adalah lomba pembuatan iklan berbasis visual (Video) yang dikhususkan
             untuk peserta yang merupakan siswa aktif SMA dan setingkatnya.  Selaras dengan tema besar Laksamana, 
             yakni Freedom of Expression, Lomba Video Iklan mengangkat subtema <b>“Have Fun with Self-Expression”</b>. 
             Tema ini dipilih mengingat adanya stereotip yang meluas di masyarakat terhadap kelompok-kelompok
              tertentu sehingga isu ini membatasi kesenangan individu dalam mengekspresikan diri secara bebas 
              melalui media sosial. </p>
        </Modal>

        <button onClick={() => openModal(4)} className={'border-[6px] option bg-white h-fit w-fit'}>
          <div className={'h-[150px] w-[150px]'}>
            <img 
              src={'/PODCAST.png'}
              alt={'podcast'}
            />
          </div>
          <p className={'W95FA text-2xl'}>Podcast</p>
        </button>
        <Modal isOpen={modalStates[4]} onClose={() => closeModal(4)} title={'Podcast'}>
          <p>Lomba Podcast Laksamana adalah lomba pembuatan podcast berbasis audio yang dikhususkan bagi peserta
             yang merupakan siswa aktif SMA dan setingkatnya. Tema besar dari lomba podcast ini adalah <b>“Peel the 
             O(p)inion: Freedom for Speech, Freedom for All”</b>. Tema lomba podcast ini ditujukan untuk membantu peserta 
             dalam mengembangkan kemampuan dan minatnya di dunia podcast dan untuk memberikan ruang kepada para podcaster
              muda dalam menyikapi isu stereotype yang ada di sekitarnya. </p>
        </Modal>
      </div>   
    </div>
  );
}

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-30 z-40">
      <div className="modal bg-[#D9D9D9] border-8 sm:w-1/2 p-1 w-11/12 overflow-auto" style={{ borderStyle: "outset" }}>
        <div className="flex bg-blue-800 px-2 py-1 mb-2">
          <p className="W95FA text-3xl text-white">{title}</p>
          <button className="modal-close pixeloid-sans ml-auto option border-2 bg-[#D9D9D9] w-[20px] h-[20px]" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-content p-2 mb-3">{children}</div>
        <div className="w-full items-center text-center">
          <button className={'W95FA option text-center w-[25%] border-4 border-white'} onClick={onClose}>
            <p className={'border-dotted border-2 border-black m-[0.5px] hover:border-solid hover:border-[#D9D9D9]'}>
              Ok
            </p>
          </button>
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



