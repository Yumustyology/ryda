import React from "react";
import Logo from "../assets/img/RYDA.png";
import "../styles/Navbar.css";
import { FaRegPlayCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between pt-4">
      <img src={Logo} className="h-5" />
      <ul className="inline-flex top-nav-list">
        <li>Home</li>
        <li>Features</li>
        <li>About Us</li>
      </ul>

      <div>
        <button className="py-3 px-3 text-white text-[18px] bg-[#055FFD] text-md rounded-md flex items-center demo-btn">
          <FaRegPlayCircle className="mr-[6px]" size={18} /> Check Demo
        </button>
      </div>
    </div>
  );
}

export default Navbar;
