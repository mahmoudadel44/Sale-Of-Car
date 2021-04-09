import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Header.css";
import Logo from "../images/Logo.png";
const Header = () => {
  return (
    <section className="header text-center">
      <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light roboto-font">
        <div className="container">
          <div className="navbar-brand" href="#">
            <img src={Logo} className="navImage" alt="logo" />
          </div>
          <button className="navBtn">العربية</button>
        </div>
      </nav>
      <div class="headItem">
        <div class="headText mb-5">
          <div class="container">
            <h2>Selling Your Car Now</h2>
            <h4>Is Easier than ever</h4>
          </div>
        </div>

        <button class="headBtn">
          <span>Start Today</span>
          <FaChevronDown />{" "}
        </button>
      </div>
    </section>
  );
};

export default Header;
