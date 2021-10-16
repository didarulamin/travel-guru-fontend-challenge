import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className=" container py-4 ">
      <div className=" d-flex justify-content-between  ">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <form className="search-form ">
          <i class="fa fa-search"></i>
          <input type="text" placeholder="Search your Destination" />
        </form>
        <div className="container-menu">
          <Link className="btn text-reset " to="">
            News
          </Link>
          <Link className="btn text-reset" to="/destination">
            Destination
          </Link>
          <Link className="btn text-reset " to="">
            Blog
          </Link>
          <Link className="btn text-reset" to="">
            Contact
          </Link>
          <Link className="btn button-color" to="">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
