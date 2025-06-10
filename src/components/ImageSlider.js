import React from "react";
import Slider from "react-slick";
import "../styles/ImageSlider.css"; // Add custom styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/images/2d-billo-students-in-their-new-library_orig_EVS.jpeg";
import img2 from "../assets/images/billo-few-years-ago-img-7496_orig.jpeg";
import img3 from "../assets/images/bilo-31_orig.jpg";
import img4 from "../assets/images/bilo-greetings-from-bilo-student-1-orig_orig.png";
import img5 from "../assets/images/bilo-library-next-to-4-classrooms-9572530-orig_orig.jpg";
import img6 from "../assets/images/bilo9_orig.jpg";
import img7 from "../assets/images/bilo15_orig.jpg";
import img8 from "../assets/images/bilo34_orig.jpg";
import img9 from "../assets/images/q-2019-evs-pic-in-qibaa-71-orig_orig.jpg";
import img10 from "../assets/images/q-2019-qibaa-teachers-a11-1-orig_orig.jpg";
import img11 from "../assets/images/qibaa14_orig.jpg";
import img12 from "../assets/images/bilo-girls-2019-img-4122-orig_orig.jpg";




const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

 return (
  <div className="slider-container">
    <Slider {...settings}>
      {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12].map((image, index) => (
        <div key={index} className="slide">
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  </div>
);
};

export default ImageSlider;