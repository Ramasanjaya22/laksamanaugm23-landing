"use client";
import React, { useState } from "react";
import { TitleText } from "./CustomTexts";
import Modal from "react-responsive-modal";

function MataLomba() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div id="matalomba" className="flex justify-center items-center h-screen">
      {/* <div className="w-full md:w-full mx-8 ">
        <TitleText title={<>Mata Lomba</>} textStyles="text-center" />
      </div>

      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal> */}
    </div>
  );
}

export default MataLomba;
