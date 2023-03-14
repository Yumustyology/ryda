import React from "react";
import "../styles/Mission.css";
import truck from "../assets/img/truck.png";
// import map from "../assets/img/map.png";
import { BsArrowRight } from "react-icons/bs";

function Mission() {
  return (
    <div className="flex mission-box h-[650px] rounded-lg mt-10 mb-10">
      <div className="mission-left w-[55%] flex items-center">
        {/* <img src={map} className='absolute w-[200px] h-[300px] left-[-274px] top-[-182px]' /> */}
        <img src={truck} className="w-[100%]" />
      </div>
      <div className="w-[45%] flex flex-col items-start justify-center">
        <div className="mission-bg-text-box w-[95%]">
          <p className="mission-bg-text text-white">
          Our Shared Mission and Vision 
          </p>
          <span className="mission-sm-text mt-5 text-white pr-10 pl-8">
          <ol className="list-decimal">
            <li>We are always ready to deliver your packages and offer your ride at any time.</li>
            <li>We always deliver your packages with insurance so that the package is safe and get delivered safely.</li>
            <li>Always Safe by being able to communicate with our logistics driver anywhere and any time.</li>
          </ol>
          </span>
          <div className="flex mt-6">
            <div>
              <button className="py-3 px-3 text-white text-[18px] bg-[#055FFD] text-md rounded-md flex items-center demo-btn">
                Read More &nbsp;
                <BsArrowRight className="mr-[6px]" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
