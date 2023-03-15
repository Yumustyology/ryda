import React from "react";
import "../styles/testimonials.css";
import User from "../assets/img/user.png";

function TestimonialBox({ name, info, occupation }) {
  return (
    <div className="testimonial-text-box pt-5 pl-4 pr-4 ">
      <p className="text-justify mb-3">{info}</p>
      <div className="flex items-center pb-3">
        <div className="mr-2">
          <img src={User} className="h-10" />
        </div>
        <div className="flex flex-col">
          <span className="name">{name}</span>
          <span className="occupation">{occupation}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialBox;
