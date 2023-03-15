import React, { useState } from "react";
import "../styles/testimonials.css";
import Masonry from "react-masonry-css";
import TestimonialBox from "./testimonialBox";

function Testimonials() {
 const breakpointColumnsObj = {
  default: 4,
  4000: 8,
  3000: 6,
  2000: 4,
  1500: 4,
  1470: 3,
  1115: 2,
  1000: 2,
  // 800: 1,
  600: 1,
};
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <h1
        className={`
        hero-lg-text -mb-10 mt-28 text-black font-bold text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl hero-bg-text minmd:leading-13`}
      >
        Our Testimonials.
      </h1>
      <div
        className={`mt-20 mb-10 w-full testimonial-box p-1 ${
          showMore ? "h-auto" : "h-[450px] active"
        } `}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <TestimonialBox
            name="Leslie Alexende"
            info="“Lorem ipsum dolor sit amet consectetur. Leo malesuada eget facilisis non. Pharetra et nunc aliquet vel. Vulputate euismod eget in ut sed turpis sed proin. At ut elementum in porttitor nunc sit arcu penatibus ut. Nisl.”"
            occupation="Student"
          />
          <TestimonialBox
            name="Yusuf"
            info="Lorem ipsum dolor sit amet consectetur. Lectus faucibus eget convallis gravida dignissim tempor tellus consequat. Sit augue turpis ornare in blandit semper euismod. Egestas pretium et etiam viverra ut sed sollicitudin. Ullamcorper quam sit consequat vehicula mi gravida euismod. Sit dictum consectetur proin in nec. Erat amet quis augue vitae ultrices vestibulum morbi neque."
            occupation="Teacher"
          />
          <TestimonialBox
            name="Ibrahim"
            info="Lorem ipsum dolor sit amet consectetur. Risus elementum pulvinar semper sit enim porttitor eu amet pellentesque. Augue gravida habitant cum scelerisque risus massa pulvinar vitae. Nibh massa ac elit arcu viverra eu sit neque. Massa consectetur sed mollis nulla nunc quam dignissim."
            occupation="Software Dev"
          />
          <TestimonialBox
            name="Yusuf"
            info="Lorem ipsum dolor sit amet consectetur. Lectus faucibus eget convallis gravida dignissim tempor tellus consequat. Sit augue turpis ornare in blandit semper euismod. Egestas pretium et etiam viverra ut sed sollicitudin. Ullamcorper quam sit consequat vehicula mi gravida euismod. Sit dictum consectetur proin in nec. Erat amet quis augue vitae ultrices vestibulum morbi neque."
            occupation="Teacher"
          />
          <TestimonialBox
            name="Leslie Alexende"
            info="“Lorem ipsum dolor sit amet consectetur. Leo malesuada eget facilisis non. Pharetra et nunc aliquet vel. Vulputate euismod eget in ut sed turpis sed proin. At ut elementum in porttitor nunc sit arcu penatibus ut. Nisl.”"
            occupation="Student"
          />
          <TestimonialBox
            name="Leslie Alexende"
            info="“Lorem ipsum dolor sit amet consectetur. Leo malesuada eget facilisis non. Pharetra et nunc aliquet vel. Vulputate euismod eget in ut sed turpis sed proin. At ut elementum in porttitor nunc sit arcu penatibus ut. Nisl.”"
            occupation="Student"
          />
          <TestimonialBox
            name="Ibrahim"
            info="Lorem ipsum dolor sit amet consectetur.Augue gravida habitant cum scelerisque risus massa pulvinar vitae. Nibh massa ac elit arcu viverra eu sit neque Risus elementum pulvinar semper sit enim porttitor eu amet pellentesque. Augue gravida habitant cum scelerisque risus massa pulvinar vitae. Nibh massa ac elit arcu viverra eu sit neque. Massa consectetur sed mollis nulla nunc quam dignissim."
            occupation="Software Dev"
          />
          <TestimonialBox
            name="Leslie Alexende"
            info="“Lorem ipsum dolor sit amet consectetur. Leo malesuada eget facilisis non. Pharetra et nunc aliquet vel. Vulputate euismod eget in ut sed turpis sed proin. At ut elementum in porttitor nunc sit arcu penatibus ut. Nisl.”"
            occupation="Student"
          />
          <TestimonialBox
            name="Yusuf"
            info="Lorem ipsum dolor sit amet consectetur. Lectus faucibus eget convallis gravida dignissim tempor tellus consequat. Sit augue turpis ornare in blandit semper euismod. Egestas pretium et etiam viverra ut sed sollicitudin. Ullamcorper quam sit consequat vehicula mi gravida euismod. Sit dictum consectetur proin in nec. Erat amet quis augue vitae ultrices vestibulum morbi neque."
            occupation="Teacher"
          />
          <TestimonialBox
            name="Ibrahim"
            info="Lorem ipsum dolor sit amet consectetur. Risus elementum pulvinar semper sit enim porttitor eu amet pellentesque. Augue gravida habitant cum scelerisque risus massa pulvinar vitae. Nibh massa ac elit arcu viverra eu sit neque. Massa consectetur sed mollis nulla nunc quam dignissim, Augue gravida habitant cum scelerisque risus massa pulvinar vitae. Nibh massa ac elit arcu viverra eu sit neque."
            occupation="Software Dev"
          />
           <TestimonialBox
            name="Leslie Alexende"
            info="“Lorem ipsum dolor sit amet consectetur. Leo malesuada eget facilisis non. Pharetra et nunc aliquet vel. Vulputate euismod eget in ut sed turpis sed proin. At ut elementum in porttitor nunc sit arcu penatibus ut. Nisl.”"
            occupation="Student"
          />
        </Masonry>
      </div>
      <span
        className={`show-more-btn cursor-pointer ${
          !showMore && "-mt-10"
        } mb-[3em] -mt-5`}
        onClick={toggleShowMore}
      >
        {showMore ? "Hide.." : "Show more.."}
      </span>
    </>
  );
}

export default Testimonials;
