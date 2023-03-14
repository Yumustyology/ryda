import React from "react";
import "../styles/downloadSection.css";
import SlantMockup from "../assets/img/slantMockup.png";
import playstoreBtn from "../assets/img/playstoreBtn.png";
import appStoreBtn from "../assets/img/appStoreBtn.png";
import ExpoButton from "./ExpoButton";

function DownloadSection() {
  return (
    <div className="mt-[8em] downloadSection-box flex justify-between">
      <div className="flex w-[100%]">
        <div className="w-[40%] bg-pink">
          <img src={SlantMockup} className="w-[660px] -mt-[2em] ml-20" />
        </div>
        <div className="w-[60%] flex ml-28">
          <div className="w-[75%] pb-10 pt-10 flex flex-col justify-around">
            <p className="download-lg-heading">
              Download <span className="download-lg-ryda-heading">RYDA</span>{" "}
              App for free today
            </p>
            <p className="download-sm-text text-white">
              Start Booking rides and sending packages with ease
            </p>

            {/* <div className="flex">
              <div>
                <img
                  src={appStoreBtn}
                  className="h-[40px] mr-2 cursor-pointer"
                />
              </div>
              <div>
                <img src={playstoreBtn} className="h-[40px] cursor-pointer" />
              </div>
            </div> */}

            <ExpoButton
              bg="white"
              text="black"
              link="https://expo.dev/@adrianhajdin/react_native_app?serviceType=classic&distribution=expo-go"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadSection;
