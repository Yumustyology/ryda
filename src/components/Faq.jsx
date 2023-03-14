import React from "react";
import FaqMockup from "../assets/img/faqMockup.png";
import FaqDropdown from "./FaqDropdown";
function Faq() {
  return (
    <div
      className={`faq-box min-h-screen flex justify-start  sm:p-8 
      text-black
      mt-[10em]`}
    >
      <div
        className={`flex items-start 
        flex-row md:flex-col
        w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`flex-1 w-full flex justify-between flex-col md:mb-10
         fadeLeftMini
         text-left
        `}
        >
          <h1
            className={`
        hero-lg-text text-black font-bold text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl hero-bg-text minmd:leading-13`}
          >
            Got Questions?
          </h1>
          <p
            className={`
          text-black
          my-5 minmd:my-10 font-light text-xl minmd:text-3xl minlg:text-4xl hero-sm-text`}
          >
            <FaqDropdown title='What is Ryda?'/>
            <FaqDropdown title='Is Ryda available worldwide?'/>
            <FaqDropdown title='is Ryda Free?'/>
            <FaqDropdown title='How can I join Ryda?'/>
            <FaqDropdown title='Is Ryda available worldwide?'/>
            <FaqDropdown title='Do Ryda Deliver Parcels ?'/>
          </p>
        </div>
        <div className={`flex-1 flex justify-end items-center sm:px-0`}>
          <img
            src={FaqMockup}
            alt="mockup"
            className={`
            fadeRightMini
           w-[95%] h-[95%] minmd:w-11/12 minmd:h-11/12 object-contain`}
          />
        </div>
      </div>
    </div>
  );
}

export default Faq;
