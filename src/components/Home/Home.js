import React from "react";
import "./home.css";
import Header from "./../Header/Header";
import card2 from "../../assets/card2.png";
const Home = () => {
  return (
    <div className="home ">
      <div className="overly ">
        <Header></Header>s
        <div className="main-section d-flex justify-content-center ">
          <div className="hero-section">
            <h1>Cox's bazar</h1>
            <p>
              Cox's Bazar is a city, fishing port, tourism centre and district
              headquarters in southeastern Bangladesh. It is famous mostly for
              its long natural sandy beach, and it ...
            </p>
            <a className="btn button-color" href="#">
              Booking
            </a>
          </div>

          <div className="travel-cards d-flex ">
            <div className="card overly ">
              <img src={card2} alt="" />
              <h1 className="overly-text">Sreemangal</h1>
            </div>
            <div className="card overly ">
              <img src={card2} alt="" />
              <h1 className="overly-text">Sreemangal</h1>
            </div>
            <div className="card overly ">
              <img src={card2} alt="" />
              <h1 className="overly-text">Sreemangal</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
