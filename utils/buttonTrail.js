'use client'

import { useEffect } from "react";

export const FollowCursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const button1 = document.getElementById('button1');
      const button2 = document.getElementById('button2');
      const button3 = document.getElementById('button3');
      const rect = button1.getBoundingClientRect();

      let xb = rect.left;
      let yb = rect.top;

      console.log(xb + " " + yb);

      let x = event.clientX;
      let y = event.clientY;

      x = x - xb
      y = y - yb

      let duax = x / 80;
      let duay = y / 80;

      let tigax = x / 40;
      let tigay = y / 40;

      if (button2 && button3) {
        button2.style.transform = `translate(${-duax}%, ${-duay}%)`;
        button3.style.transform = `translate(${-tigax}%, ${-tigay}%)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default FollowCursor;
