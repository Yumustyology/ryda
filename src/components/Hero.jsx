import React from "react";
import playstoreBtn from "../assets/img/playstoreBtn.png";
import appStoreBtn from "../assets/img/appStoreBtn.png";
import heroMockup from "../assets/img/heroMockup.png";
import "../styles/Hero.css";
import ExpoButton from "./ExpoButton";

function Hero() {
  return (
    <div
      className={`min-h-screen flex justify-center items-center sm:p-8 
      text-black
      banner`}
    >
      <div
        className={`flex items-center 
        flex-row md:flex-col
        w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`flex-1 w-full flex justify-start flex-col md:mb-10
         fadeLeftMini
         text-left
        `}
        >
          <h1
            className={`
        hero-lg-text text-black font-bold text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl hero-bg-text minmd:leading-13`}
          >
            Book Ride or send packages to any location of your choice with ease.
          </h1>
          <p
            className={`
          text-black
          my-5 minmd:my-10 font-light text-xl minmd:text-3xl minlg:text-4xl hero-sm-text`}
          >
            Lorem ipsum dolor sit amet consectetur. Amet faucibus egestas
            pharetra. Cum bibendum ac fusce ornare et aenean. Ultrices egestas
            sit luctus sit curabitur quam. Amet a in pulvinar sed dui.
          </p>

          <div className="flex mt-6">
            {/* <div>
              <img src={appStoreBtn} className="h-[40px] mr-2 cursor-pointer" />
            </div>
            <div>
              <img src={playstoreBtn} className="h-[40px] cursor-pointer" />
            </div> */}
            <ExpoButton
              bg="black"
              text='white'
              link="https://expo.dev/@adrianhajdin/react_native_app?serviceType=classic&distribution=expo-go"
            />
          </div>
        </div>
        <div className={`flex-1 flex justify-center items-center sm:px-0`}>
          <img
            src={heroMockup}
            alt="mockup"
            className={`
            fadeRightMini
           w-full h-full minmd:w-11/12 minmd:h-11/12 object-contain`}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
