import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Header.css";
import Logo from "../images/Logo.png";
const Header = () => {
  return (
    <section className="header text-center">
      <div className="overlay"></div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light roboto-font">
        <div className="container">
          <div className="navbar-brand" href="#">
            <img src={Logo} className="navImage" alt="Logo" />
          </div>
          <button className="nav-btn">العربية</button>
        </div>
      </nav>

      <div className="head-item">
        <div className="head-text mb-5">
          <div className="container">
            <h2>Selling Your Car Now</h2>
            <h4>Is Easier than ever</h4>
          </div>
        </div>

        <button className="head-btn">
          <span>Start Today</span>
          <FaChevronDown />
        </button>
      </div>
    </section>
  );
};

export default Header;
