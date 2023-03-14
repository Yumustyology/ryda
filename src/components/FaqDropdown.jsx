import React, { useState } from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import "../styles/faq.css";
function FaqDropdown({ title, info }) {
  const [opened, setOpened] = useState(false);

  const toogleDropdown = () => {
    setOpened(!opened);
  };

  return (
    <div className="w-[100%] mb-2">
      <div
        className="flex justify-between w-[70%] items-center cursor-pointer"
        onClick={toogleDropdown}
      >
        <span className="font-bold">{title}</span>
        <span>{opened ? <BsArrowUp /> : <BsArrowDown />}</span>
      </div>
      <div
        className={`${
          opened
            ? "auto-height border-b-2 border-b-[#000000] pb-2 pt-3"
            : "zero-h overflow-hidden"
        } reveal-box mb-4`}
      >
        {/* {info} */}
        Lorem ipsum dolor sit amet consectetur. Nisl consectetur ut amet sed.
        Iaculis nam ac eget dignissim. Condimentum quis tellus nulla integer
        pellentesque pellentesque eu lobortis.
      </div>
    </div>
  );
}

export default FaqDropdown;
