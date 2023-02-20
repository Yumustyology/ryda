import React from "react";
import playstoreBtn from "../assets/img/playstoreBtn.png";
import appStoreBtn from "../assets/img/appStoreBtn.png";
import heroMockup from "../assets/img/heroMockup.png";

import "../styles/Hero.css";

function Hero() {
  return (
    <div className="flex lg:flex-row md:flex-col mt-16 ">
      <div className="hero-bg-text-box">
        <p className="hero-bg-text">
          Book Ride or send packages to any location of your choice with ease.
        </p>
        <p className="hero-sm-text mt-5">
          Lorem ipsum dolor sit amet consectetur. Amet faucibus egestas
          pharetra. Cum bibendum ac fusce ornare et aenean. Ultrices egestas sit
          luctus sit curabitur quam. Amet a in pulvinar sed dui.
        </p>
        <div className="flex mt-6">
          <div>
            <img src={appStoreBtn} className="h-[40px] mr-2 cursor-pointer" />
          </div>
          <div>
            <img src={playstoreBtn} className="h-[40px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="phone-mockup justify-end items-end">
        <img src={heroMockup} className={`flex-1 sm:px-0 w-2/3 inline `} />
      </div>
    </div>
  );
}

export default Hero;
