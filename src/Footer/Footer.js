import React from "react";
import Logo from "../images/Logo";
const Footer = () => {
  return (
    <section class="footer">
      <div class="container">
        <div class="foot">
          <div class="left-side">
            <img src={Logo} alt="Logo" />
            <div>
              <p>
                Buy new and used cars in UAE, shipping and delivery service are
                available, Sell your car at the highest price online with no
                worries visiting cars show rooms.
              </p>
            </div>
          </div>
          <div class="right-side">
            <p>
              Follow the first and the largest online auction in UAE and Middle
              East{" "}
            </p>
            <ul>
              <li class="face">
                <i class="fab fa-facebook-f"></i>
              </li>
              <li class="twitter">
                <i class="fab fa-twitter"></i>
              </li>
              <li class="youtube">
                <i class="fab fa-youtube"></i>
              </li>
              <li class="insta">
                <i class="fab fa-instagram"></i>
              </li>
              <li class="google">
                <i class="fab fa-google-plus-g"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
