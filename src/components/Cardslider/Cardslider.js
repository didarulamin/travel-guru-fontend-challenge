import Slider from "react-slick";
import card2 from "../../assets/card2.png";
import "./cardslider.css";

const SimpleSlider = ({ sliderRef }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container ">
      <button className="btn">next</button>
      <Slider {...settings} ref={sliderRef}>
        <div className="card " key={1}>
          <img src={card2} alt="" />
          <h1 className="overly-text">Sreemangal</h1>
        </div>

        <div className="card" key={2}>
          <h3>2</h3>
        </div>
        <div className="card">
          <h3>3</h3>
        </div>
        <div className="card">
          <h3>4</h3>
        </div>
        <div className="card">
          <h3>5</h3>
        </div>
        <div className="card">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
