import React from "react";
import "../styles/location.css";
import truck from "../assets/img/truck.png";
// import map from "../assets/img/map.png";
import { BsArrowRight } from "react-icons/bs";

function Location() {
  return (
    <div className="location-box flex flex-col justify-center items-center">
      <div className="max-width">
        <div
          className={`flex-1 w-[45%] flex justify-start flex-col md:mb-10
         fadeLeftMini
         text-left
        `}
        >
          <h1
            className={`
            location-lg-text text-black font-bold text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl hero-bg-text minmd:leading-13`}
          >
            Location is never a Barrier with us involved in you journey
          </h1>
          <p
            className={`
         location-sm-text text-black my-5 minmd:my-10  font-light text-xl minmd:text-3xl minlg:text-4xl hero-sm-text`}
          >
            Lorem ipsum dolor sit amet consectetur. Nisl consectetur ut amet
            sed. Iaculis nam ac eget dignissim. Condimentum quis tellus nulla
            integer pellentesque pellentesque eu lobortis. Consequat nisi
            tincidunt id dignissim odio tincidunt et amet. Consequat vivamus
            platea dolor tellus at mauris sit aliquam sagittis. Ornare in
            consequat rutrum egestas est a. A cras ut amet ac. Diam nisl
            pellentesque interdum vel ac sit dictum. Et.
          </p>
        </div>
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
  );
}

export default Location;
