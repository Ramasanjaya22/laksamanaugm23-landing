'use client'

import React, { useState } from "react";

function QandA() {
  return (
    <div>
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className="text-xl font-semibold text-vnet-blue mb-2">
            FAQ - Order, Shipping, Etc.
          </h2>
          <ul className="flex flex-col">
            <Accordion
              title="When will my order arrive?"
              content="Shipping time is set by our delivery partners, according to the delivery method chosen.
                by the customer. You can expect your order to arrive within 3-5 business days for standard shipping and 1-2 business days for express shipping."
            />
            <Accordion
              title="Can I track my order?"
              content="Yes, you can track your order by logging into your account on our website. Once your order has been shipped, you will receive a tracking number that you can use to track the status and location of your package."
            />
            <Accordion
              title="What should I do if my order is damaged or incorrect?"
              content="If your order arrives damaged or is incorrect, please contact our customer support within 24 hours of receiving the package. We will assist you in resolving the issue and ensuring that you receive the correct items or a refund if necessary."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QandA;

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleRotate = () => {
    return isOpen ? "rotate-180" : "";
  };

  const handleToggle = () => {
    return isOpen ? "max-h-96" : "max-h-0";
  };

  return (
    <li className="bg-white my-2 shadow-lg">
      <h2
        onClick={handleClick}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
      >
        <span>{title}</span>
        <svg
          className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${handleRotate()}`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        className={`border-l-2 border-purple-600 overflow-hidden duration-500 transition-all ${handleToggle()}`}
      >
        <p className="p-3 text-gray-900">{content}</p>
      </div>
    </li>
  );
};
