import React from "react";
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
          <button className="nav-btn">العربية</button>
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
          <i class="fa fa-angle-down"></i>
        </button>
      </div>
    </section>
  );
};

export default Header;
