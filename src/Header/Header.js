import React from "react";
import "./Header.css";
import Logo from "../images/Logo.png";
const Header = () => {
  return (
    <section class="header text-center">
      <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-light roboto-font">
        <div class="container">
          <div class="navbar-brand" href="#">
            <img src={Logo} class="navImage" alt="logo" />
          </div>
          <button class="nav-btn">العربية</button>
        </div>
      </nav>
    </section>
  );
};

export default Header;
