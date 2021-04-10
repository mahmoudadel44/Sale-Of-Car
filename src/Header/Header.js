import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Header.css";
import Logo from "../images/Logo.png";
const Header = () => {
  return (
    <section class="header text-center">
      <div class="overlay"></div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light roboto-font">
        <div class="container">
          <div class="navbar-brand" href="#">
            <img src={Logo} class="navImage" alt="Logo" />
          </div>
          <button class="nav-btn">العربية</button>
        </div>
      </nav>

      <div class="head-item">
        <div class="head-text mb-5">
          <div class="container">
            <h2>Selling Your Car Now</h2>
            <h4>Is Easier than ever</h4>
          </div>
        </div>

        <button class="head-btn">
          <span>Start Today</span>
          <FaChevronDown />
        </button>
      </div>
    </section>
  );
};

export default Header;
