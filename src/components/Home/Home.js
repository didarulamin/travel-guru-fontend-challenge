import React from "react";
import "./home.css";

import left_icon from "../../assets/left_icon.png";
import right_icon from "../../assets/right_icon.png";
import { Link } from "react-router-dom";
import SimpleSlider from "../Cardslider/Cardslider";
import { useRef } from "react";

const Home = () => {
  const sliderRef = useRef();
  const nextSlide = (sliderRef) => {
    sliderRef.current.slickNext();
  };
  const prevSlide = (sliderRef) => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <div className="main-section d-flex  justify-content-content">
        <div className="hero-section ">
          <p className="hero-text">COX'S BAZAR</p>
          <p className="hero-para">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <Link className="btn button-color align-self-start" to="#">
            Booking
          </Link>
        </div>

        <SimpleSlider sliderRef={sliderRef} />
      </div>

      <div className="slider-button">
        <button onClick={() => prevSlide(sliderRef)} className="btn">
          <img src={left_icon} alt="" />
        </button>
        <button onClick={() => nextSlide(sliderRef)} className="btn">
          <img src={right_icon} alt="" />
        </button>
      </div>
    </>
  );
};

export default Home;
