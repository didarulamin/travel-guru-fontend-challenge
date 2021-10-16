import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <nav className=" container py-3 ">
      <div className=" d-flex justify-content-between  ">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <input type="text" placeholder="Search your Destination" />
        <div className="container-menu">
          <a className="btn text-reset " href="">
            News
          </a>
          <a className="btn text-reset " href="">
            Destination
          </a>
          <a className="btn text-reset " href="">
            Blog
          </a>
          <a className="btn text-reset" href="">
            Contact
          </a>
          <a className="btn button-color" href="">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
